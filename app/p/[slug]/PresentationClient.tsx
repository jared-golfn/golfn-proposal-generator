'use client'

import { type PartnerConfig } from '@/lib/presentation-data'
import { images } from '@/lib/images'
import { PartnershipProvider } from '@/lib/partnership-context'
import { SectionHero } from '@/components/proposal/SectionHero'
import { SectionRecommendation } from '@/components/proposal/SectionRecommendation'
import { SectionHowItWorks } from '@/components/proposal/SectionHowItWorks'
import { SectionPricing } from '@/components/proposal/SectionPricing'
import { SectionProofAndCTA } from '@/components/proposal/SectionProofAndCTA'
import { ScrollArrow } from '@/components/proposal/ScrollArrow'

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'recommendation', label: 'Our Rec' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'pricing', label: 'Paths & Pricing' },
  { id: 'proof', label: 'Proof & Next Step' },
]

export function PresentationClient({ partner }: { partner: PartnerConfig }) {
  return (
    <PartnershipProvider>
      <main className="relative">
        <div className="accent-line fixed top-0 left-0 right-0 z-50" />

        {/* Simple sticky nav — 5 items only */}
        <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-5">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="group flex items-center gap-4 justify-end">
              <span className="text-sm font-medium text-[#52525B] opacity-0 group-hover:opacity-100 transition-opacity">{s.label}</span>
              <span className="block w-3 h-3 rounded-full bg-[#2A2A2C] group-hover:bg-[#52525B] transition-colors" />
            </a>
          ))}
        </nav>

        <div id="hero">
          <SectionHero partner={partner} />
        </div>

        <ScrollArrow label="Our recommendation for you" targetId="recommendation" color={partner.primaryColor} />

        <div id="recommendation">
          <SectionRecommendation partner={partner} />
        </div>

        <ScrollArrow label="Here\u2019s how it works" targetId="how-it-works" color={partner.primaryColor} />

        <div id="how-it-works">
          <SectionHowItWorks partner={partner} />
        </div>

        <ScrollArrow label="See paths & pricing" targetId="pricing" color={partner.primaryColor} />

        <div id="pricing">
          <SectionPricing partner={partner} />
        </div>

        <ScrollArrow label="See proof it works" targetId="proof" color={partner.primaryColor} />

        <div id="proof">
          <SectionProofAndCTA partner={partner} />
        </div>

        <footer className="w-content px-5 md:px-12 py-12 md:py-16 text-center border-t border-[#2A2A2C]">
          <img src={images.logo} alt="GolfN" className="h-8 md:h-12 w-auto mx-auto mb-4 opacity-40" />
          <p className="text-[#71717A] text-sm">Confidential \u2014 Prepared for {partner.partnerName} by GolfN</p>
        </footer>
      </main>
    </PartnershipProvider>
  )
}
