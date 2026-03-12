'use client'

import { type PartnerConfig } from '@/lib/presentation-data'
import { images } from '@/lib/images'
import { HeroSection } from '@/components/presentation/HeroSection'
import { BudgetPositioning } from '@/components/presentation/BudgetPositioning'
import { CommercialModel } from '@/components/presentation/CommercialModel'
import { ProgressionFramework } from '@/components/presentation/ProgressionFramework'
import { PartnerArchetypes } from '@/components/presentation/PartnerArchetypes'
import { DailyGrindEvolution } from '@/components/presentation/DailyGrindEvolution'
import { ManagementFee } from '@/components/presentation/ManagementFee'
import { ScrollNav } from '@/components/presentation/ScrollNav'
import { Thresholds } from '@/components/presentation/Thresholds'
import { StrategicClose } from '@/components/presentation/StrategicClose'

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'budget', label: 'Budget Fit' },
  { id: 'commercial', label: 'Commercial Model' },
  { id: 'management', label: 'Management' },
  { id: 'progression', label: 'Progression' },
  { id: 'daily-grind', label: 'Daily Grind' },
  { id: 'archetypes', label: 'Archetypes' },
  { id: 'thresholds', label: 'Thresholds' },
  { id: 'close', label: 'Summary' },
]

const Divider = () => (
  <div className="max-w-[960px] mx-auto px-6 md:px-12">
    <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, #2A2A2C, transparent)' }} />
  </div>
)

export function PresentationClient({ partner }: { partner: PartnerConfig }) {
  return (
    <main className="relative">
      <div className="accent-line fixed top-0 left-0 right-0 z-50" />
      <ScrollNav sections={sections} partnerColor={partner.primaryColor} />

      <div id="hero"><HeroSection partner={partner} /></div>
      <Divider />
      <div id="budget"><BudgetPositioning partner={partner} /></div>
      <Divider />
      <div id="commercial"><CommercialModel partner={partner} /></div>
      <Divider />
      <div id="management"><ManagementFee partner={partner} /></div>
      <Divider />
      <div id="progression"><ProgressionFramework partner={partner} /></div>
      <Divider />
      <div id="daily-grind"><DailyGrindEvolution partner={partner} /></div>
      <Divider />
      <div id="archetypes"><PartnerArchetypes partner={partner} /></div>
      <Divider />
      <div id="thresholds"><Thresholds partner={partner} /></div>
      <Divider />
      <div id="close"><StrategicClose partner={partner} /></div>

      <footer className="max-w-[960px] mx-auto px-6 md:px-12 py-16 text-center border-t border-[#2A2A2C]">
        <img src={images.logo} alt="GolfN" className="h-8 md:h-10 w-auto mx-auto mb-4 opacity-40" />
        <p className="text-[#71717A] text-sm">Confidential — Prepared for {partner.partnerName} by GolfN</p>
        <p className="text-[#52525B] text-xs mt-1 font-mono">Verified Golfers · Measurable Progression · Aligned Incentives</p>
      </footer>
    </main>
  )
}
