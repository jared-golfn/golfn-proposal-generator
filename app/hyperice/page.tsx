import { cookies } from 'next/headers'
import { HypericeHero } from '@/components/hyperice/HypericeHero'
import { ExecutiveSummary } from '@/components/hyperice/ExecutiveSummary'
import { StandoutHighlights } from '@/components/hyperice/StandoutHighlights'
import { SweepstakesPerformance } from '@/components/hyperice/SweepstakesPerformance'
import { MarketplaceSales } from '@/components/hyperice/MarketplaceSales'
import { AudienceProfile } from '@/components/hyperice/AudienceProfile'
import { HypericeFooter } from '@/components/hyperice/HypericeFooter'
import { PasswordGate } from '@/components/template/PasswordGate'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Hyperice \u00d7 GolfN \u2014 Campaign Performance Report',
  description: 'Two sweepstakes activations, marketplace storefront performance, and verified-golfer audience profile. Nov 2025 \u2013 Apr 2026.',
}

export default async function HypericePage() {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get('golfn-auth-hyperice')

  if (!authCookie?.value) {
    return (
      <PasswordGate
        slug="hyperice"
        partnerName="Hyperice"
        badgeLabel="Partnership Review"
        title="Campaign Performance Report"
        buttonLabel="View Report"
        footerText="Confidential. Reach out to Jared for access."
      />
    )
  }

  return (
    <main className="min-h-screen">
      <HypericeHero />
      <ExecutiveSummary />
      <StandoutHighlights />
      <SweepstakesPerformance />
      <MarketplaceSales />
      <AudienceProfile />
      <HypericeFooter />
    </main>
  )
}
