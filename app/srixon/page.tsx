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
  title: 'Srixon | Cleveland \u00d7 GolfN \u2014 Brand Campaign Report',
  description: 'Partnership Performance \u2014 Sweepstakes, Multi-Channel Reach & Points Exchange Sales. Aug 2025 \u2013 May 2026.',
}

export default async function SrixonPage() {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get('golfn-auth-srixon')

  if (!authCookie?.value) {
    return (
      <PasswordGate
        slug="srixon"
        partnerName="Srixon / Cleveland Golf"
        badgeLabel="Partnership Review"
        title="Campaign Performance Report"
        buttonLabel="View Report"
        footerText="Confidential. Reach out to Jared for access."
      />
    )
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
