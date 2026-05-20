import { cookies } from 'next/headers'
import { SrixonHero } from '@/components/srixon/SrixonHero'
import { ExecutiveSummary } from '@/components/srixon/ExecutiveSummary'
import { SweepstakesPerformance } from '@/components/srixon/SweepstakesPerformance'
import { MultiChannelReach } from '@/components/srixon/MultiChannelReach'
import { FeatureEffect } from '@/components/srixon/FeatureEffect'
import { MarketplaceSales } from '@/components/srixon/MarketplaceSales'
import { SrixonFooter } from '@/components/srixon/SrixonFooter'
import { PasswordGate } from '@/components/template/PasswordGate'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Srixon | Cleveland × GolfN — Brand Campaign Report',
  description: 'Partnership Performance — Sweepstakes, Multi-Channel Reach & Points Exchange Sales. Aug 2025 – May 2026.',
}

export default async function SrixonPage() {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get('golfn-auth-srixon')

  if (!authCookie?.value) {
    return <PasswordGate slug="srixon" partnerName="Srixon / Cleveland Golf" />
  }

  return (
    <main className="min-h-screen">
      <SrixonHero />
      <ExecutiveSummary />
      <SweepstakesPerformance />
      <MultiChannelReach />
      <FeatureEffect />
      <MarketplaceSales />
      <SrixonFooter />
    </main>
  )
}
