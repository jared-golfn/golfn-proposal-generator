'use client'

import type { PartnerData } from '@/lib/template-types'
import { images } from '@/lib/images'
import { S01_Hero } from './S01_Hero'
import { S02_WhyBrands } from './S02_WhyBrands'
import { S03_HowItWorks } from './S03_HowItWorks'
import { S04_LaunchCampaign } from './S04_LaunchCampaign'
import { S05_QualifiedInterest } from './S05_QualifiedInterest'
import { S06_PostCampaign } from './S06_PostCampaign'
import { S07_MonthlyReporting } from './S07_MonthlyReporting'
import { S08_WaysToWork } from './S08_WaysToWork'
import { S09_WhatWeNeed } from './S09_WhatWeNeed'
import { S10_DataDifference } from './S10_DataDifference'
import { S11_FAQ } from './S11_FAQ'
import { S12_FinalCTA } from './S12_FinalCTA'
import { SectionDivider } from './SectionDivider'

const navSections = [
  { id: 'top', label: 'Overview' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'ways-to-work', label: 'Pricing' },
  { id: 'faq-section', label: 'FAQ' },
]

export function TemplateClient({ partner }: { partner: PartnerData }) {
  return (
    <main className="relative bg-[#0f1217]">
      <div className="accent-line fixed top-0 left-0 right-0 z-50" />

      {/* Minimal right-rail nav */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-5">
        {navSections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="group flex items-center gap-4 justify-end">
            <span className="text-base font-medium text-[#4b5563] opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">{s.label}</span>
            <span className="block w-2.5 h-2.5 rounded-full bg-[#2a3347] group-hover:bg-[#00ff9d] transition-colors shrink-0" />
          </a>
        ))}
      </nav>

      <div id="top">
        <S01_Hero partner={partner} />
      </div>

      <SectionDivider />
      <S02_WhyBrands partner={partner} />

      <SectionDivider label="See the process" targetId="how-it-works" />
      <S03_HowItWorks partner={partner} />

      <SectionDivider />
      <S04_LaunchCampaign partner={partner} />

      <SectionDivider />
      <S05_QualifiedInterest partner={partner} />

      <SectionDivider />
      <S06_PostCampaign partner={partner} />

      <SectionDivider />
      <S07_MonthlyReporting partner={partner} />

      <SectionDivider label="See partnership paths" targetId="ways-to-work" />
      <S08_WaysToWork partner={partner} />

      <SectionDivider />
      <S09_WhatWeNeed partner={partner} />

      <SectionDivider />
      <S10_DataDifference partner={partner} />

      <SectionDivider />
      <div id="faq-section">
        <S11_FAQ partner={partner} />
      </div>

      <SectionDivider />
      <S12_FinalCTA partner={partner} />

      <footer className="max-w-7xl mx-auto px-5 md:px-12 py-14 md:py-20 text-center border-t border-[#2a3347]">
        <img src={images.logo} alt="GolfN" className="h-8 md:h-10 w-auto mx-auto mb-4 opacity-30" />
        <p className="text-[#4b5563] text-base">Confidential &mdash; Prepared for {partner.partnerName} by GolfN</p>
        <p className="text-[#2a3347] text-sm mt-2 font-mono">Verified Golfers &middot; Measurable Progression &middot; Aligned Incentives</p>
      </footer>
    </main>
  )
}
