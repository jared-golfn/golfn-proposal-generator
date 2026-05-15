import { NextResponse } from 'next/server'

/**
 * POST /api/rate-request
 *
 * Receives capture-form submissions from RateCard rows and the FinalCTA
 * "Request the rate card" link. Behavior:
 *
 *   1. Validate the payload shape and required fields.
 *   2. Log the submission to Vercel logs (always, so nothing is ever lost).
 *   3. If SLACK_LEADS_WEBHOOK is set in the project env, forward a compact
 *      summary to that webhook so leads land in #leads in real time.
 *
 * The route never fails the submission when the optional Slack delivery
 * fails — the user always sees a success state as long as the payload
 * was valid and the log line was written.
 */

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

async function forwardToSlack(payload: RateRequestPayload) {
  const webhook = process.env.SLACK_LEADS_WEBHOOK
  if (!webhook) return

  const surfaceLine = payload.surfaces && payload.surfaces.length > 0
    ? `*Interested in:* ${payload.surfaces.join(', ')}`
    : '*Interested in:* (not specified)'

  const blocks = [
    {
      type: 'header',
      text: { type: 'plain_text', text: 'New rate-card request' },
    },
    {
      type: 'section',
      fields: [
        { type: 'mrkdwn', text: `*Name*\n${payload.name}` },
        { type: 'mrkdwn', text: `*Company*\n${payload.company}` },
        { type: 'mrkdwn', text: `*Email*\n${payload.email}` },
        { type: 'mrkdwn', text: `*Phone*\n${payload.phone || '—'}` },
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

  try {
    await fetch(webhook, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ blocks, text: `New rate-card request from ${payload.name} at ${payload.company}` }),
    })
  } catch (err) {
    // Swallow — the submission already succeeded from the user's perspective.
    console.warn('[rate-request] slack forward failed', err)
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

  // Always log so the lead never goes missing, even without Slack hooked up.
  console.log('[rate-request] received', JSON.stringify({
    ...payload,
    receivedAt: new Date().toISOString(),
  }))

  // Fire-and-forget Slack notification.
  await forwardToSlack(payload)

  return NextResponse.json({ ok: true })
}

// Disable static caching — every POST should hit the function.
export const dynamic = 'force-dynamic'
