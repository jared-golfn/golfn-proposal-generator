import { NextRequest, NextResponse } from 'next/server'
import { partners, type PartnerConfig } from '@/lib/presentation-data'
import { wilsonMotocaddyConfig } from '@/lib/wilson-motocaddy-config'

const allPartners: Record<string, PartnerConfig> = { ...partners, 'wilson-motocaddy': wilsonMotocaddyConfig }

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { slug?: string; password?: string }
    const { slug, password } = body

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
