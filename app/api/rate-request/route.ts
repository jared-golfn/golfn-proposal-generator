import { NextResponse } from 'next/server'

/**
 * POST /api/rate-request
 *
 * Receives capture-form submissions from RateCard rows and the FinalCTA
 * "Request the rate card" link. Behavior:
 *
 *   1. Validate the payload shape and required fields.
 *   2. Log the submission to Vercel logs (always, so nothing is ever lost).
 *   3. If SLACK_BOT_TOKEN is set in the project env, post a compact summary
 *      to the Jared Reporting Channel via chat.postMessage. Same bot-token
 *      pattern used by /api/auth and /api/session-end — no separate
 *      Incoming Webhook needed.
 *
 * The route never fails the submission when the optional Slack delivery
 * fails — the user always sees a success state as long as the payload
 * was valid and the log line was written.
 */

const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN || ''
const SLACK_CHANNEL_ID = 'C0AJK9S4HST' // #jared-reporting-channel

interface RateRequestPayload {
  name: string
  company: string
  email: string
  phone?: string
  surfaces?: string[]
  budget?: string
  timeline?: string
  notes?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function isValidPayload(input: unknown): input is RateRequestPayload {
  if (!input || typeof input !== 'object') return false
  const p = input as Record<string, unknown>
  if (typeof p.name !== 'string' || p.name.trim().length === 0) return false
  if (typeof p.company !== 'string' || p.company.trim().length === 0) return false
  if (typeof p.email !== 'string' || !EMAIL_RE.test(p.email.trim())) return false
  if (p.phone !== undefined && typeof p.phone !== 'string') return false
  if (p.surfaces !== undefined && !Array.isArray(p.surfaces)) return false
  if (p.budget !== undefined && typeof p.budget !== 'string') return false
  if (p.timeline !== undefined && typeof p.timeline !== 'string') return false
  if (p.notes !== undefined && typeof p.notes !== 'string') return false
  return true
}

async function postToSlack(payload: RateRequestPayload) {
  if (!SLACK_BOT_TOKEN) {
    console.warn('[rate-request] SLACK_BOT_TOKEN not set; skipping Slack post')
    return
  }

  const surfaceLine = payload.surfaces && payload.surfaces.length > 0
    ? `*Interested in:* ${payload.surfaces.join(', ')}`
    : '*Interested in:* (not specified)'

  const blocks: Array<Record<string, unknown>> = [
    {
      type: 'header',
      text: { type: 'plain_text', text: '\uD83D\uDCE8 New rate-card request' },
    },
    {
      type: 'section',
      fields: [
        { type: 'mrkdwn', text: `*Name*\n${payload.name}` },
        { type: 'mrkdwn', text: `*Company*\n${payload.company}` },
        { type: 'mrkdwn', text: `*Email*\n${payload.email}` },
        { type: 'mrkdwn', text: `*Phone*\n${payload.phone || '\u2014'}` },
      ],
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: [
          surfaceLine,
          `*Budget:* ${payload.budget || '(not specified)'}`,
          `*Timeline:* ${payload.timeline || '(not specified)'}`,
        ].join('\n'),
      },
    },
  ]

  if (payload.notes && payload.notes.trim().length > 0) {
    blocks.push({
      type: 'section',
      text: { type: 'mrkdwn', text: `*Notes*\n${payload.notes}` },
    })
  }

  // Fallback plain-text summary used for notifications and clients that don't render blocks.
  const fallbackText = `New rate-card request from ${payload.name} at ${payload.company} (${payload.email})`

  try {
    const res = await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
      },
      body: JSON.stringify({
        channel: SLACK_CHANNEL_ID,
        text: fallbackText,
        blocks,
      }),
    })
    const data = await res.json().catch(() => ({})) as { ok?: boolean; error?: string }
    if (!data.ok) {
      console.warn('[rate-request] slack post returned not-ok', data.error || 'unknown')
    }
  } catch (err) {
    // Swallow — the submission already succeeded from the user's perspective.
    console.warn('[rate-request] slack post failed', err)
  }
}

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 })
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { ok: false, error: 'Missing or invalid required fields (name, company, email)' },
      { status: 422 },
    )
  }

  const payload: RateRequestPayload = {
    ...body,
    name: body.name.trim(),
    company: body.company.trim(),
    email: body.email.trim().toLowerCase(),
    phone: body.phone?.trim() || undefined,
    notes: body.notes?.trim() || undefined,
  }

  // Always log so the lead never goes missing, even if Slack is unreachable.
  console.log('[rate-request] received', JSON.stringify({
    ...payload,
    receivedAt: new Date().toISOString(),
  }))

  // Fire-and-forget Slack notification to #jared-reporting-channel.
  await postToSlack(payload)

  return NextResponse.json({ ok: true })
}

// Disable static caching — every POST should hit the function.
export const dynamic = 'force-dynamic'
