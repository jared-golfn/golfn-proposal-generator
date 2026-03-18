'use client'

import { useSearchParams } from 'next/navigation'
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
import { Fade } from './Fade'
import { Target } from 'lucide-react'

const navSections = [
  { id: 'top', label: 'Overview' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'ways-to-work', label: 'Pricing' },
  { id: 'faq-section', label: 'FAQ' },
]

const pitchNavSections = [
  { id: 'top', label: 'Overview' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'getting-started', label: 'The Campaign' },
  { id: 'ways-to-work', label: 'Investment' },
  { id: 'next-steps', label: 'Next Steps' },
]

function formatUSD(n: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n) }

export function TemplateClient({ partner }: { partner: PartnerData }) {
  const searchParams = useSearchParams()
  const isPitch = searchParams.has('pitch')
  const activeNav = isPitch ? pitchNavSections : navSections

  // Pitch mode: streamlined scroll path matching how you actually pitch on a call
  if (isPitch) {
    const startupCost = 2500
    const cohortSize = partner.defaultCohortSize || 250
    return (
      <main className="relative bg-[#0f1217]">
        <SessionTracker slug={partner.slug} />
        <div className="accent-line fixed top-0 left-0 right-0 z-50" />

        <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-8 pointer-events-none">
          {activeNav.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="pointer-events-auto group flex items-center gap-5 justify-end">
              <span className="text-lg font-semibold text-[#4b5563] opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">{s.label}</span>
              <img src={images.logoIcon} alt="" className="block w-6 h-6 rounded-md opacity-30 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" style={{ filter: 'brightness(0) invert(1)' }} />
            </a>
          ))}
        </nav>

        <div id="proposal-content">
          {/* 1. HERO */}
          <div id="top"><S01_Hero partner={partner} /></div>
          <SectionDivider />

          {/* 2. WHY + HOW (your opening) */}
          <S02_WhyBrands partner={partner} />
          <SectionDivider label="See the process" targetId="how-it-works" />
          <div id="how-it-works"><S03_HowItWorks partner={partner} /></div>
          <SectionDivider />

          {/* 3. THE CAMPAIGN -- showpiece, right after "how it works" */}
          <div id="getting-started" className="pt-12 md:pt-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
              <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-3">The Campaign</p>
              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.05] tracking-tight">Here's what we'd<br /><span className="text-[#00ff9d]">build for you</span></h2>
            </div>
            <S08_WaysToWork partner={partner} section="campaigns" />
          </div>

          {/* 4. QUICK PRICING -- condensed, no calculator noise */}
          <div id="ways-to-work" className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <Fade>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-5 h-5 text-[#00ff9d]" />
                  <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">Investment</p>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-10">What it takes<br /><span className="text-[#00ff9d]">to get started</span></h2>
              </Fade>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                <Fade delay={0.05}>
                  <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-8 text-center">
                    <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-3">Prize Budget</p>
                    <p className="text-4xl font-mono font-bold text-[#00ff9d] mb-2">~$4,500</p>
                    <p className="text-base text-[#9ca3af]">Product you provide for the sweepstakes</p>
                  </div>
                </Fade>
                <Fade delay={0.1}>
                  <div className="bg-[#1a1f2e] border-2 border-[#00ff9d]/40 rounded-xl p-8 text-center">
                    <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-3">Startup Fee</p>
                    <p className="text-4xl font-mono font-bold text-[#00ff9d] mb-2">{formatUSD(startupCost)}</p>
                    <p className="text-base text-[#9ca3af]">One-time. Includes campaign + 30 days of activation.</p>
                  </div>
                </Fade>
                <Fade delay={0.15}>
                  <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-8 text-center">
                    <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-3">Ongoing (Optional)</p>
                    <p className="text-4xl font-mono font-bold text-[#00ff9d] mb-2">$5<span className="text-xl text-[#6b7280]">/user</span></p>
                    <p className="text-base text-[#9ca3af]">Only if you continue. Tiers down to $1.</p>
                  </div>
                </Fade>
              </div>

              <Fade delay={0.2}>
                <div className="bg-[#001a14]/60 border border-[#00ff9d]/30 rounded-xl p-8 md:p-10 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00ff9d]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Target className="w-5 h-5 text-[#00ff9d]" />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-3">Our commitment</h4>
                      <p className="text-lg md:text-xl text-[#d1d5db] leading-9">It's on us to demonstrate a meaningful return within <span className="text-white font-semibold">60 days</span>. If the results aren't there, we'll tell you. We have a vested interest in making this the best-performing channel you have — because if we can do it for you, we can do it for anyone.</p>
                    </div>
                  </div>
                </div>
              </Fade>

              <Fade delay={0.25}>
                <p className="text-base text-[#6b7280] italic text-center">Full rate tables, calculator, and prepay discounts available in the detailed proposal.</p>
              </Fade>
            </div>
          </div>

          {/* 5. PROOF -- case study */}
          <SectionDivider />
          <CaseStudy />
          <SectionDivider />

          {/* 6. NEXT STEPS */}
          <div id="next-steps">
            <S12_FinalCTA partner={partner} />
          </div>

          <footer className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14 text-center border-t border-[#2a3347]/50">
            <img src={images.logo} alt="GolfN" className="h-8 md:h-10 w-auto mx-auto mb-4 opacity-30" />
            <p className="text-[#4b5563] text-base">Confidential &mdash; Prepared for {partner.partnerName} by GolfN</p>
            <p className="text-[#2a3347] text-sm mt-2 font-mono">partners.golfn.com</p>
          </footer>
        </div>
      </main>
    )
  }

  // NORMAL MODE -- full proposal (unchanged)
  return (
    <main className="relative bg-[#0f1217]">
      <SessionTracker slug={partner.slug} />
      <div className="accent-line fixed top-0 left-0 right-0 z-50" />

      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-8 pointer-events-none">
        {activeNav.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="pointer-events-auto group flex items-center gap-5 justify-end">
            <span className="text-lg font-semibold text-[#4b5563] opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">{s.label}</span>
            <img src={images.logoIcon} alt="" className="block w-6 h-6 rounded-md opacity-30 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" style={{ filter: 'brightness(0) invert(1)' }} />
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
        <div id="getting-started" className="pt-12 md:pt-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-3">Getting Started</p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.05] tracking-tight">Everything you need<br /><span className="text-[#00ff9d]">to launch</span></h2>
          </div>

          <S08_WaysToWork partner={partner} section="campaigns" />

          <CollapsibleSection
            label="Requirements"
            title="What We Need From You"
            subtitle="What GolfN handles vs. what the partner provides"
          >
            <S09_WhatWeNeed partner={partner} />
          </CollapsibleSection>
        </div>

        {/* PRICING */}
        <div id="ways-to-work">
          <CollapsibleSection
            label="Pricing"
            title="How the Program Unfolds"
            subtitle="Timeline, startup fee, add-ons, and what's included"
          >
            <S08_WaysToWork partner={partner} section="timeline" />
          </CollapsibleSection>

          <CollapsibleSection
            label="Optional"
            labelColor="#f59e0b"
            title="Post-Campaign Audience Nurturing & Expansion"
            subtitle="The initial campaign does more than drive awareness. It helps GolfN identify the golfer profiles most likely to engage with your brand, so we can continue nurturing that audience and adding newly qualified users into the activation flow over time."
          >
            <S08_WaysToWork partner={partner} section="peruser" />
          </CollapsibleSection>
        </div>

        <S10_DataDifference partner={partner} />
        <SectionDivider />

        <div id="faq-section">
          <CollapsibleSection
            title="Frequently Asked Questions"
            subtitle="Common questions about GolfN partnerships"
          >
            <S11_FAQ partner={partner} />
          </CollapsibleSection>
        </div>

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
