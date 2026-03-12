'use client'

import { type PartnerConfig } from '@/lib/presentation-data'
import { images } from '@/lib/images'
import { PartnershipProvider } from '@/lib/partnership-context'
import { HeroSection } from '@/components/presentation/HeroSection'
import { BudgetPositioning } from '@/components/presentation/BudgetPositioning'
import { FindYourFit } from '@/components/presentation/FindYourFit'
import { CommercialModel } from '@/components/presentation/CommercialModel'
import { ProgressionFramework } from '@/components/presentation/ProgressionFramework'
import { PartnerArchetypes } from '@/components/presentation/PartnerArchetypes'
import { Extensions } from '@/components/presentation/Extensions'
import { DailyGrindEvolution } from '@/components/presentation/DailyGrindEvolution'
import { ScrollNav } from '@/components/presentation/ScrollNav'
import { Thresholds } from '@/components/presentation/Thresholds'
import { Testimonials } from '@/components/presentation/Testimonials'
import { StrategicClose } from '@/components/presentation/StrategicClose'
import { StickySummary } from '@/components/presentation/StickySummary'

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'budget', label: 'Budget Fit' },
  { id: 'best-fit', label: 'Best Fit' },
  { id: 'paths', label: 'Paths' },
  { id: 'commercial', label: 'How Pricing Works' },
  { id: 'extensions', label: 'Extensions' },
  { id: 'thresholds', label: 'Requirements' },
  { id: 'progression', label: 'Progression' },
  { id: 'daily-grind', label: 'Daily Grind' },
  { id: 'testimonials', label: 'Proof' },
  { id: 'close', label: 'Next Step' },
]

const Divider = () => (
  <div className="w-content px-5 md:px-12">
    <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, #2A2A2C, transparent)' }} />
  </div>
)

export function PresentationClient({ partner }: { partner: PartnerConfig }) {
  return (
    <PartnershipProvider>
      <main className="relative pb-20 xl:pb-0">
        <div className="accent-line fixed top-0 left-0 right-0 z-50" />
        <ScrollNav sections={sections} partnerColor={partner.primaryColor} />
        <StickySummary partner={partner} />

        <div id="hero"><HeroSection partner={partner} /></div>
        <Divider />
        <div id="budget"><BudgetPositioning partner={partner} /></div>
        <Divider />
        <div id="best-fit"><FindYourFit partner={partner} /></div>
        <Divider />
        <div id="paths"><PartnerArchetypes partner={partner} /></div>
        <Divider />
        <div id="commercial"><CommercialModel partner={partner} /></div>
        <Divider />
        <div id="extensions"><Extensions partner={partner} /></div>
        <Divider />
        <div id="thresholds"><Thresholds partner={partner} /></div>
        <Divider />
        <div id="progression"><ProgressionFramework partner={partner} /></div>
        <Divider />
        <div id="daily-grind"><DailyGrindEvolution partner={partner} /></div>
        <Divider />
        <div id="testimonials"><Testimonials partner={partner} /></div>
        <Divider />
        <div id="close"><StrategicClose partner={partner} /></div>

        <footer className="w-content px-5 md:px-12 py-12 md:py-16 text-center border-t border-[#2A2A2C]">
          <img src={images.logo} alt="GolfN" className="h-7 md:h-10 w-auto mx-auto mb-4 opacity-40" />
          <p className="text-[#71717A] text-xs md:text-sm">Confidential — Prepared for {partner.partnerName} by GolfN</p>
          <p className="text-[#52525B] text-[10px] md:text-xs mt-1 font-mono">Verified Golfers · Measurable Progression · Aligned Incentives</p>
        </footer>
      </main>
    </PartnershipProvider>
  )
}
