'use client'

import { type PartnerConfig } from '@/lib/presentation-data'
import { HeroSection } from '@/components/presentation/HeroSection'
import { CommercialModel } from '@/components/presentation/CommercialModel'
import { ProgressionFramework } from '@/components/presentation/ProgressionFramework'
import { PartnerArchetypes } from '@/components/presentation/PartnerArchetypes'
import { DailyGrindEvolution } from '@/components/presentation/DailyGrindEvolution'
import { ManagementFee } from '@/components/presentation/ManagementFee'
import { ScrollNav } from '@/components/presentation/ScrollNav'
import { Thresholds } from '@/components/presentation/Thresholds'

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'commercial', label: 'Commercial Model' },
  { id: 'management', label: 'Management' },
  { id: 'progression', label: 'Progression' },
  { id: 'daily-grind', label: 'Daily Grind' },
  { id: 'archetypes', label: 'Archetypes' },
  { id: 'thresholds', label: 'Thresholds' },
]

export function PresentationClient({ partner }: { partner: PartnerConfig }) {
  return (
    <main className="relative">
      <div className="accent-line fixed top-0 left-0 right-0 z-50" />
      <ScrollNav sections={sections} partnerColor={partner.primaryColor} />

      <div id="hero">
        <HeroSection partner={partner} />
      </div>

      <div id="commercial">
        <CommercialModel partner={partner} />
      </div>

      <div id="management">
        <ManagementFee partner={partner} />
      </div>

      <div id="progression">
        <ProgressionFramework partner={partner} />
      </div>

      <div id="daily-grind">
        <DailyGrindEvolution partner={partner} />
      </div>

      <div id="archetypes">
        <PartnerArchetypes partner={partner} />
      </div>

      <div id="thresholds">
        <Thresholds partner={partner} />
      </div>

      <footer className="section-padding text-center border-t border-golfn-grid">
        <p className="text-golfn-white-faint text-sm">
          Confidential — Prepared for {partner.partnerName} by GolfN
        </p>
        <p className="text-golfn-white-faint text-xs mt-2">
          March 2026
        </p>
      </footer>
    </main>
  )
}
