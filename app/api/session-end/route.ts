import { NextRequest, NextResponse } from 'next/server'

const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN || ''
const SLACK_CHANNEL_ID = 'C0AM2N65ZHT' // #partner-logins

// Track last send per session to avoid Slack spam
const lastSlackSend: Record<string, { time: number; durationSec: number }> = {}

function shouldSendSlack(sessionKey: string, durationSec: number): boolean {
  const last = lastSlackSend[sessionKey]
  if (!last) return durationSec >= 30
  const thresholds = [30, 120, 300]
  for (const t of thresholds) {
    if (last.durationSec < t && durationSec >= t) return true
  }
  if (durationSec >= 300 && (durationSec - last.durationSec) >= 300) return true
  return false
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as {
      slug?: string
      duration?: string
      durationSec?: number
      sectionsViewed?: string[]
      deepestScroll?: string
      deepestSection?: string
      interactions?: string[]
      slackTs?: string
    }

    const { slug, duration, durationSec, sectionsViewed, deepestScroll, deepestSection, interactions, slackTs } = body

    if (!slug) {
      return NextResponse.json({ error: 'Missing slug' }, { status: 400 })
    }

    const sessionKey = slackTs ? `${slug}-${slackTs}` : slug

    console.log(JSON.stringify({ event: 'PARTNER_SESSION_HEARTBEAT', slug, duration, durationSec, sectionsViewed, deepestScroll, deepestSection, interactions, slackTs, timestamp: new Date().toISOString() }))

    if (SLACK_BOT_TOKEN && slackTs && durationSec && shouldSendSlack(sessionKey, durationSec)) {
      lastSlackSend[sessionKey] = { time: Date.now(), durationSec }

      const now = new Date()
      const timeStr = now.toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short' })

      const sectionsStr = sectionsViewed && sectionsViewed.length > 0 ? sectionsViewed.join(' \u2192 ') : 'Hero only'
      const interactionsStr = interactions && interactions.length > 0 ? interactions.join(', ') : 'None'

      let engagementEmoji = '\u26aa'
      let label = 'Session Update'
      if (durationSec >= 300) { engagementEmoji = '\ud83d\udfe2'; label = 'Engaged (5+ min)' }
      else if (durationSec >= 120) { engagementEmoji = '\ud83d\udfe1'; label = 'Active (2+ min)' }
      else if (durationSec >= 30) { engagementEmoji = '\ud83d\udfe0'; label = 'Browsing (30s+)' }

      const message = `${engagementEmoji} *${label}*  \u2022  ${duration || 'unknown'}\n>*Sections:* ${sectionsStr}\n>*Scroll:* ${deepestScroll || '0%'} (${deepestSection || 'Hero'})\n>*Interactions:* ${interactionsStr}\n>_${timeStr} EST_`

      try {
        await fetch('https://slack.com/api/chat.postMessage', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${SLACK_BOT_TOKEN}` },
          body: JSON.stringify({
            channel: SLACK_CHANNEL_ID,
            thread_ts: slackTs,
            text: message,
          }),
        })
      } catch (err) {
        console.error('[SESSION] Slack thread reply failed:', err)
      }
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
}
