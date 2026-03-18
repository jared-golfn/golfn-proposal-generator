import { NextRequest, NextResponse } from 'next/server'

const SLACK_WEBHOOK_URL = process.env.SLACK_PARTNER_LOGIN_WEBHOOK || ''

// Simple in-memory store to track last Slack send per slug
// Prevents spamming Slack with heartbeats every 30s
// Only sends at key thresholds: 30s, 2min, 5min, then every 5min after
const lastSlackSend: Record<string, { time: number; durationSec: number }> = {}

function shouldSendSlack(slug: string, durationSec: number): boolean {
  const last = lastSlackSend[slug]
  if (!last) return durationSec >= 30 // First send at 30s
  
  // Send at threshold crossings: 30s, 120s, 300s
  const thresholds = [30, 120, 300]
  for (const t of thresholds) {
    if (last.durationSec < t && durationSec >= t) return true
  }
  
  // After 5min, send every 5min
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
    }

    const { slug, duration, durationSec, sectionsViewed, deepestScroll, deepestSection, interactions } = body

    if (!slug) {
      return NextResponse.json({ error: 'Missing slug' }, { status: 400 })
    }

    // Always log to Vercel runtime
    console.log(JSON.stringify({
      event: 'PARTNER_SESSION_HEARTBEAT',
      slug,
      duration,
      durationSec,
      sectionsViewed,
      deepestScroll,
      deepestSection,
      interactions,
      timestamp: new Date().toISOString(),
    }))

    // Only send to Slack at key thresholds
    if (SLACK_WEBHOOK_URL && durationSec && shouldSendSlack(slug, durationSec)) {
      lastSlackSend[slug] = { time: Date.now(), durationSec }

      const now = new Date()
      const timeStr = now.toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short' })

      const sectionsStr = sectionsViewed && sectionsViewed.length > 0
        ? sectionsViewed.join(' \u2192 ')
        : 'Hero only'

      const interactionsStr = interactions && interactions.length > 0
        ? interactions.join(', ')
        : 'None'

      let engagementEmoji = '\u26aa'
      let label = 'Session Update'
      if (durationSec >= 300) { engagementEmoji = '\ud83d\udfe2'; label = 'Engaged Session (5+ min)' }
      else if (durationSec >= 120) { engagementEmoji = '\ud83d\udfe1'; label = 'Active Session (2+ min)' }
      else if (durationSec >= 30) { engagementEmoji = '\ud83d\udfe0'; label = 'Browsing (30s+)' }

      const message = `\ud83d\udcca *${label}* ${engagementEmoji}\n>*Proposal:* \`${slug}\`\n>*Duration so far:* ${duration || 'unknown'}\n>*Sections Viewed:* ${sectionsStr}\n>*Deepest Scroll:* ${deepestScroll || 'unknown'} (${deepestSection || 'unknown'})\n>*Interactions:* ${interactionsStr}\n>*Updated:* ${timeStr} EST`

      try {
        await fetch(SLACK_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: message }),
        })
      } catch (err) {
        console.error('[SESSION] Slack notification failed:', err)
      }
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
}
