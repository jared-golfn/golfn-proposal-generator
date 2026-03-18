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
import { CaseStudy } from './CaseStudy'
import { SectionDivider } from './SectionDivider'
import { SessionTracker } from './SessionTracker'
import { CollapsibleSection } from './CollapsibleSection'

const navSections = [
  { id: 'top', label: 'Overview' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'ways-to-work', label: 'Pricing' },
  { id: 'faq-section', label: 'FAQ' },
]

export function TemplateClient({ partner }: { partner: PartnerData }) {
  return (
    <main className="relative bg-[#0f1217]">
      <SessionTracker slug={partner.slug} />
      <div className="accent-line fixed top-0 left-0 right-0 z-50" />

      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-8">
        {navSections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="group flex items-center gap-5 justify-end">
            <span className="text-lg font-semibold text-[#4b5563] opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">{s.label}</span>
            <img src={images.logoIcon} alt="" className="block w-7 h-7 rounded-md opacity-30 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" style={{ filter: 'brightness(0) invert(1)' }} />
          </a>
        ))}
      </nav>

      <div id="proposal-content">
        {/* ALWAYS VISIBLE: Hero + Why Brands + How It Works */}
        <div id="top"><S01_Hero partner={partner} /></div>
        <SectionDivider />
        <S02_WhyBrands partner={partner} />
        <SectionDivider label="See the process" targetId="how-it-works" />
        <div id="how-it-works"><S03_HowItWorks partner={partner} /></div>
        <SectionDivider />

        {/* COLLAPSIBLE PROGRAM SECTIONS */}
        <CollapsibleSection
          number="01"
          label="Campaign"
          title="Launch a Premium Campaign"
        >
          <S04_LaunchCampaign partner={partner} />
        </CollapsibleSection>

        <CollapsibleSection
          number="02"
          label="Qualification"
          title="From Attention to Qualified Interest"
        >
          <S05_QualifiedInterest partner={partner} />
        </CollapsibleSection>

        <CollapsibleSection
          number="03"
          label="Activation"
          title="Post-Campaign Activation Paths"
        >
          <S06_PostCampaign partner={partner} />
        </CollapsibleSection>

        <CollapsibleSection
          number="04"
          label="Reporting"
          title="What You'll See Each Month"
        >
          <S07_MonthlyReporting partner={partner} />
        </CollapsibleSection>

        {/* ALWAYS VISIBLE: Case Study */}
        <SectionDivider />
        <CaseStudy />
        <SectionDivider />

        {/* GETTING STARTED SECTION */}
        <div id="getting-started" className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-3">Getting Started</p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.05] tracking-tight">Everything you need<br /><span className="text-[#00ff9d]">to launch</span></h2>
          </div>

          {/* Recommended Campaign -- showpiece, always visible */}
          <S08_WaysToWork partner={partner} section="campaigns" />

          {/* Requirements -- header visible, details in toggle */}
          <CollapsibleSection
            label="Requirements"
            title="What We Need From You"
            subtitle="What GolfN handles vs. what the partner provides"
          >
            <S09_WhatWeNeed partner={partner} />
          </CollapsibleSection>
        </div>

        {/* PRICING: How the Program Unfolds */}
        <div id="ways-to-work">
          <CollapsibleSection
            label="Pricing"
            title="How the Program Unfolds"
            subtitle="Timeline, startup fee, add-ons, and what's included"
          >
            <S08_WaysToWork partner={partner} section="timeline" />
          </CollapsibleSection>

          <CollapsibleSection
            title="Ongoing Per-User Pricing"
            subtitle="Only applies if you choose to continue beyond the included 30-day post-campaign window"
          >
            <S08_WaysToWork partner={partner} section="peruser" />
          </CollapsibleSection>
        </div>

        {/* DATA ADVANTAGE */}
        <CollapsibleSection
          label="Data"
          title="GolfN Data Advantage"
          subtitle="Why GolfN audience data is fundamentally different from broad media"
        >
          <S10_DataDifference partner={partner} />
        </CollapsibleSection>

        {/* FAQ -- always visible as accordion */}
        <SectionDivider />
        <div id="faq-section"><S11_FAQ partner={partner} /></div>
        <SectionDivider />
        <S12_FinalCTA partner={partner} />

        <footer className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14 text-center border-t border-[#2a3347]/50">
          <img src={images.logo} alt="GolfN" className="h-8 md:h-10 w-auto mx-auto mb-4 opacity-30" />
          <p className="text-[#4b5563] text-base">Confidential &mdash; Prepared for {partner.partnerName} by GolfN</p>
          <p className="text-[#2a3347] text-sm mt-2 font-mono">partners.golfn.com</p>
        </footer>
      </div>
    </main>
  )
}
