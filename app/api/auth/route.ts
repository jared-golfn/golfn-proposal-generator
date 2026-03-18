import { NextRequest, NextResponse } from 'next/server'
import { partners, type PartnerConfig } from '@/lib/presentation-data'
import { wilsonMotocaddyConfig } from '@/lib/wilson-motocaddy-config'
import { sub70Config } from '@/lib/sub-70-config'

const allPartners: Record<string, PartnerConfig> = { ...partners, 'wilson-motocaddy': wilsonMotocaddyConfig, 'sub-70': sub70Config }

const SLACK_WEBHOOK_URL = process.env.SLACK_PARTNER_LOGIN_WEBHOOK || ''

async function notifySlack(email: string, slug: string, ip: string) {
  if (!SLACK_WEBHOOK_URL) {
    console.log('[PARTNER-LOGIN] No Slack webhook configured -- skipping notification')
    return
  }

  const now = new Date()
  const timeStr = now.toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short' })

  try {
    await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `\uD83D\uDD13 *Partner Login*\n>*Email:* ${email}\n>*Proposal:* \`${slug}\`\n>*Time:* ${timeStr} EST\n>*IP:* ${ip}`,
      }),
    })
  } catch (err) {
    console.error('[PARTNER-LOGIN] Slack notification failed:', err)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { slug?: string; password?: string; email?: string }
    const { slug, password, email } = body

    if (!slug || !password) {
      return NextResponse.json({ error: 'Missing slug or password' }, { status: 400 })
    }

    const config = allPartners[slug]
    if (!config || !config.password) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    if (password !== config.password) {
      // Log failed attempts too
      console.log(JSON.stringify({
        event: 'PARTNER_LOGIN_FAILED',
        email: email || 'not provided',
        slug,
        timestamp: new Date().toISOString(),
        ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      }))
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    // Log successful login
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    const loginEvent = {
      event: 'PARTNER_LOGIN_SUCCESS',
      email: email || 'not provided',
      slug,
      partnerName: config.partnerName,
      timestamp: new Date().toISOString(),
      ip,
    }
    console.log(JSON.stringify(loginEvent))

    // Send Slack notification (non-blocking)
    notifySlack(email || 'not provided', slug, ip)

    // Set auth cookie
    const token = Buffer.from(`${slug}:${email || 'anon'}:${Date.now()}`).toString('base64')
    const response = NextResponse.json({ success: true })
    response.cookies.set(`golfn-auth-${slug}`, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30,
      path: `/${slug}`,
    })

    return response
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
}
