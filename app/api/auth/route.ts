import { NextRequest, NextResponse } from 'next/server'
import { partners } from '@/lib/presentation-data'
import { wilsonMotocaddyConfig } from '@/lib/wilson-motocaddy-config'

const allPartners = { ...partners, 'wilson-motocaddy': wilsonMotocaddyConfig }

export async function POST(request: NextRequest) {
  try {
    const { slug, password } = await request.json()

    if (!slug || !password) {
      return NextResponse.json({ error: 'Missing slug or password' }, { status: 400 })
    }

    const config = allPartners[slug]
    if (!config || !config.password) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    if (password !== config.password) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    // Password correct -- set an httpOnly cookie
    // Cookie value is a simple hash of slug + password so it can't be reused across proposals
    const token = Buffer.from(`${slug}:${password}:${Date.now()}`).toString('base64')
    const response = NextResponse.json({ success: true })
    response.cookies.set(`golfn-auth-${slug}`, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: `/b/${slug}`,
    })

    return response
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
}
