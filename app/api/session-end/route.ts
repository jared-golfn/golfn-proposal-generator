import { NextRequest, NextResponse } from 'next/server'

const SLACK_WEBHOOK_URL = process.env.SLACK_PARTNER_LOGIN_WEBHOOK || ''

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

    // Structured log for Vercel runtime logs
    console.log(JSON.stringify({
      event: 'PARTNER_SESSION_END',
      slug,
      duration,
      durationSec,
      sectionsViewed,
      deepestScroll,
      deepestSection,
      interactions,
      timestamp: new Date().toISOString(),
    }))

    // Send Slack notification
    if (SLACK_WEBHOOK_URL) {
      const now = new Date()
      const timeStr = now.toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short' })

      const sectionsStr = sectionsViewed && sectionsViewed.length > 0
        ? sectionsViewed.join(' \u2192 ')
        : 'Hero only'

      const interactionsStr = interactions && interactions.length > 0
        ? interactions.join(', ')
        : 'None'

      // Engagement quality indicator
      let engagementEmoji = '\u26aa' // grey - minimal
      if (durationSec && durationSec >= 300) engagementEmoji = '\ud83d\udfe2' // green - 5+ min
      else if (durationSec && durationSec >= 120) engagementEmoji = '\ud83d\udfe1' // yellow - 2+ min
      else if (durationSec && durationSec >= 30) engagementEmoji = '\ud83d\udfe0' // orange - 30s+

      const message = `\ud83d\udcca *Session Ended* ${engagementEmoji}\n>*Proposal:* \`${slug}\`\n>*Duration:* ${duration || 'unknown'}\n>*Sections Viewed:* ${sectionsStr}\n>*Deepest Scroll:* ${deepestScroll || 'unknown'} (${deepestSection || 'unknown'})\n>*Interactions:* ${interactionsStr}\n>*Ended:* ${timeStr} EST`

      try {
        await fetch(SLACK_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: message }),
        })
      } catch (err) {
        console.error('[SESSION-END] Slack notification failed:', err)
      }
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
}
