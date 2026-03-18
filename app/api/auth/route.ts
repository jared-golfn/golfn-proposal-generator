import { NextRequest, NextResponse } from 'next/server'
import { partners, type PartnerConfig } from '@/lib/presentation-data'
import { wilsonMotocaddyConfig } from '@/lib/wilson-motocaddy-config'
import { sub70Config } from '@/lib/sub-70-config'

const allPartners: Record<string, PartnerConfig> = { ...partners, 'wilson-motocaddy': wilsonMotocaddyConfig, 'sub-70': sub70Config }

const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN || ''
const SLACK_CHANNEL_ID = 'C0AM2N65ZHT' // #partner-logins

async function postSlackLogin(email: string, slug: string, ip: string): Promise<string | null> {
  if (!SLACK_BOT_TOKEN) return null

  const now = new Date()
  const timeStr = now.toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short' })

  try {
    const res = await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${SLACK_BOT_TOKEN}` },
      body: JSON.stringify({
        channel: SLACK_CHANNEL_ID,
        text: `\uD83D\uDD13 *Partner Login*\n>*Email:* ${email}\n>*Proposal:* \`${slug}\`\n>*Time:* ${timeStr} EST\n>*IP:* ${ip}`,
      }),
    })
    const data = await res.json()
    if (data.ok && data.ts) return data.ts
    console.error('[AUTH] Slack postMessage error:', data.error)
    return null
  } catch (err) {
    console.error('[AUTH] Slack postMessage failed:', err)
    return null
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
      console.log(JSON.stringify({ event: 'PARTNER_LOGIN_FAILED', email: email || 'not provided', slug, timestamp: new Date().toISOString(), ip: request.headers.get('x-forwarded-for') || 'unknown' }))
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    console.log(JSON.stringify({ event: 'PARTNER_LOGIN_SUCCESS', email: email || 'not provided', slug, partnerName: config.partnerName, timestamp: new Date().toISOString(), ip }))

    // Post to Slack and get message timestamp for threading
    const slackTs = await postSlackLogin(email || 'not provided', slug, ip)

    // Set auth cookie
    const token = Buffer.from(`${slug}:${email || 'anon'}:${Date.now()}`).toString('base64')
    const response = NextResponse.json({ success: true, slackTs: slackTs || undefined })
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
