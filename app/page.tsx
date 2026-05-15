import type { Metadata } from 'next'
import { PublicHero } from '@/components/public/PublicHero'
import { ProofBar } from '@/components/public/ProofBar'
import { WhatsInTheirBag } from '@/components/public/WhatsInTheirBag'
import { WhyBroken } from '@/components/public/WhyBroken'
import { PublicCaseStudies } from '@/components/public/PublicCaseStudies'
import { Capabilities } from '@/components/public/Capabilities'
import { OnRamp } from '@/components/public/OnRamp'
import { RateCard } from '@/components/public/RateCard'
import { BrandWall } from '@/components/public/BrandWall'
import { HowItWorks } from '@/components/public/HowItWorks'
import { FinalCTA } from '@/components/public/FinalCTA'
import { CaptureFormModal } from '@/components/public/CaptureFormModal'
import { RateRequestProvider } from '@/lib/rate-request-context'
import { images } from '@/lib/images'

export const metadata: Metadata = {
  title: 'GolfN for Partners',
  description: 'We didn\u2019t build a golf app. We built Google, Meta, and Amazon for golf. 100,000+ verified golfers. $375k+ moved for partners in under a year.',
}

export default function Home() {
  return (
    <RateRequestProvider>
      <main className="relative bg-[#0f1217] text-white">
        <div className="accent-line fixed top-0 left-0 right-0 z-50" />
        <PublicHero />
        <ProofBar />
        <WhatsInTheirBag />
        <WhyBroken />
        <PublicCaseStudies />
        <Capabilities />
        <OnRamp />
        <RateCard />
        <BrandWall />
        <HowItWorks />
        <FinalCTA />

        {/* Footer */}
        <footer className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14 text-center border-t border-[#2a3347]/50">
          <img src={images.logo} alt="GolfN" className="h-8 md:h-10 w-auto mx-auto mb-4 opacity-30" />
          <p className="text-[#4b5563] text-sm">GolfN, Inc. &middot; partners.golfn.com</p>
        </footer>

        {/* Capture form modal — opened from RateCard rows and FinalCTA. */}
        <CaptureFormModal />
      </main>
    </RateRequestProvider>
  )
}
