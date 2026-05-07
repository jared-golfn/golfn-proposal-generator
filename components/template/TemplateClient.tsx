'use client'

import { useSearchParams } from 'next/navigation'
import type { PartnerData } from '@/lib/template-types'
import { images } from '@/lib/images'
import { BrandSpendProvider } from '@/lib/brand-context'
import { SpendModelProvider } from '@/lib/spend-model-context'
import { BusinessNeedProvider } from '@/lib/business-need-context'
import { S01_Hero } from './S01_Hero'
import { S02_WhyBrands } from './S02_WhyBrands'
import { S03_HowItWorks } from './S03_HowItWorks'
import { S03_PitchHowItWorks } from './S03_PitchHowItWorks'
import { S04_LaunchCampaign } from './S04_LaunchCampaign'
import { S05_QualifiedInterest } from './S05_QualifiedInterest'
import { S06_PostCampaign } from './S06_PostCampaign'
import { S07_MonthlyReporting } from './S07_MonthlyReporting'
import { S08_WaysToWork } from './S08_WaysToWork'
import { S09_WhatWeNeed } from './S09_WhatWeNeed'
import { S10_DataDifference } from './S10_DataDifference'
import { S11_FAQ } from './S11_FAQ'
import { S12_FinalCTA } from './S12_FinalCTA'
import { BusinessNeedSelector } from './BusinessNeedSelector'
import { NeedCampaignCard } from './NeedCampaignCard'
import { EvaluateAndInvest } from './EvaluateAndInvest'
import { PitchChecklist } from './PitchChecklist'
import { PitchFAQ } from './PitchFAQ'
import { CaseStudy } from './CaseStudy'
import { CabotPitchFlow } from './CabotPitchFlow'
import { PuttrPitchFlow } from './PuttrPitchFlow'
import { SectionDivider } from './SectionDivider'
import { SessionTracker } from './SessionTracker'
import { CollapsibleSection } from './CollapsibleSection'
import { PersonalizedImpactCard } from './PersonalizedImpactCard'
import { ProveIt } from './ProveIt'
import { StickyPitchCTA } from './StickyPitchCTA'
import { Fade } from './Fade'

const navSections = [
  { id: 'top', label: 'Overview' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'ways-to-work', label: 'Pricing' },
  { id: 'faq-section', label: 'FAQ' },
]

const pitchNavSections = [
  { id: 'top', label: 'Overview' },
  { id: 'case-study', label: 'Proof' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'prove-it', label: 'The Deal' },
  { id: 'next-steps', label: 'Next Steps' },
]

const cabotNavSections = [
  { id: 'top', label: 'Overview' },
  { id: 'the-plan', label: 'The Plan' },
  { id: 'the-model', label: 'The Model' },
  { id: 'cabot-global', label: 'Cabot at Large' },
  { id: 'next-steps', label: 'Next Steps' },
]

const puttrNavSections = [
  { id: 'top', label: 'Overview' },
  { id: 'the-campaign', label: 'The Campaign' },
  { id: 'the-proof', label: 'Proof' },
  { id: 'the-deal', label: 'The Deal' },
  { id: 'next-steps', label: 'Next Steps' },
]

export function TemplateClient({ partner }: { partner: PartnerData }) {
  const searchParams = useSearchParams()
  const isPitch = searchParams.has('pitch')
  const isCabot = partner.slug === 'cabot'
  const isPuttr = partner.slug === 'puttr'
  const activeNav = isPuttr ? puttrNavSections : isCabot ? cabotNavSections : isPitch ? pitchNavSections : navSections
  const isWalkthrough = !!partner.heroVideoUrl

  // CABOT
  if (isCabot) {
    return (
      <main className="relative bg-[#0f1217]">
        <SessionTracker slug={partner.slug} />
        <div className="accent-line fixed top-0 left-0 right-0 z-50" />
        <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-5 pointer-events-none">
          {activeNav.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="pointer-events-auto group flex items-center gap-5 justify-end">
              <span className="text-lg font-semibold text-[#4b5563] opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">{s.label}</span>
              <img src={images.logoIcon} alt="" className="block w-6 h-6 rounded-md opacity-30 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" style={{ filter: 'brightness(0) invert(1)' }} />
            </a>
          ))}
        </nav>
        <div id="proposal-content">
          <div id="top"><S01_Hero partner={partner} hideBrandInput /></div>
          <SectionDivider />
          <CabotPitchFlow />
          <footer className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14 text-center border-t border-[#2a3347]/50">
            <img src={images.logo} alt="GolfN" className="h-8 md:h-10 w-auto mx-auto mb-4 opacity-30" />
            <p className="text-[#4b5563] text-base">{'Confidential -- Prepared for '}{partner.partnerName}{' by GolfN'}</p>
            <p className="text-[#2a3347] text-sm mt-2 font-mono">partners.golfn.com</p>
          </footer>
        </div>
      </main>
    )
  }

  /* ═══ PUTTR — Custom PYL-led pitch ═══ */
  if (isPuttr) {
    return (
      <main className="relative bg-[#0f1217]">
        <SessionTracker slug={partner.slug} />
        <div className="accent-line fixed top-0 left-0 right-0 z-50" />
        <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-5 pointer-events-none">
          {activeNav.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="pointer-events-auto group flex items-center gap-5 justify-end">
              <span className="text-lg font-semibold text-[#4b5563] opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">{s.label}</span>
              <img src={images.logoIcon} alt="" className="block w-6 h-6 rounded-md opacity-30 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" style={{ filter: 'brightness(0) invert(1)' }} />
            </a>
          ))}
        </nav>
        <StickyPitchCTA />
        <div id="proposal-content">
          <div id="top"><S01_Hero partner={partner} hideBrandInput /></div>
          <SectionDivider />
          <PuttrPitchFlow />
          <footer className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14 text-center border-t border-[#2a3347]/50">
            <img src={images.logo} alt="GolfN" className="h-8 md:h-10 w-auto mx-auto mb-4 opacity-30" />
            <p className="text-[#4b5563] text-base">{'Confidential -- Prepared for '}{partner.partnerName}{' by GolfN'}</p>
            <p className="text-[#2a3347] text-sm mt-2 font-mono">partners.golfn.com</p>
          </footer>
        </div>
      </main>
    )
  }

  /* ═══ PITCH MODE — Streamlined, Miura case-study-led ═══ */
  if (isPitch) {
    return (
      <main className="relative bg-[#0f1217]">
        <SessionTracker slug={partner.slug} />
        <div className="accent-line fixed top-0 left-0 right-0 z-50" />
        <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-5 pointer-events-none">
          {activeNav.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="pointer-events-auto group flex items-center gap-5 justify-end">
              <span className="text-lg font-semibold text-[#4b5563] opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">{s.label}</span>
              <img src={images.logoIcon} alt="" className="block w-6 h-6 rounded-md opacity-30 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" style={{ filter: 'brightness(0) invert(1)' }} />
            </a>
          ))}
        </nav>
        <StickyPitchCTA />
        <div id="proposal-content">
          <div id="top"><S01_Hero partner={partner} hideBrandInput /></div>
          <SectionDivider />
          <CaseStudy />
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 text-center">
            <Fade>
              <p className="text-lg text-[#9ca3af] mb-4">Convinced by the numbers?</p>
              <a href="mailto:jared@golfn.com?subject=Partnership%20Inquiry" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00ff9d] text-[#0f1217] font-bold text-base hover:bg-[#00e68a] transition-colors">Book a 15-Minute Partnership Briefing</a>
              <p className="text-sm text-[#4b5563] mt-3">Or keep scrolling to see how it works and what the deal looks like.</p>
            </Fade>
          </div>
          <SectionDivider />
          <S03_PitchHowItWorks partner={partner} />
          <SectionDivider />
          <ProveIt />
          <SectionDivider />
          <PitchFAQ />
          <SectionDivider />
          <S12_FinalCTA partner={partner} />
          <footer className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14 text-center border-t border-[#2a3347]/50">
            <img src={images.logo} alt="GolfN" className="h-8 md:h-10 w-auto mx-auto mb-4 opacity-30" />
            <p className="text-[#4b5563] text-base">{'Confidential -- Prepared for '}{partner.partnerName}{' by GolfN'}</p>
            <p className="text-[#2a3347] text-sm mt-2 font-mono">partners.golfn.com</p>
          </footer>
        </div>
      </main>
    )
  }

  // NORMAL MODE (unchanged)
  return (
    <BrandSpendProvider>
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
          <div id="top"><S01_Hero partner={partner} /></div>
          <SectionDivider />
          <S02_WhyBrands partner={partner} />
          <SectionDivider label="See the process" targetId="how-it-works" />
          <div id="how-it-works"><S03_HowItWorks partner={partner} /></div>
          <SectionDivider />
          <CollapsibleSection number="01" label="Campaign" title="Launch a Premium Campaign"><S04_LaunchCampaign partner={partner} /></CollapsibleSection>
          <CollapsibleSection number="02" label="Qualification" title="From Attention to Qualified Interest"><S05_QualifiedInterest partner={partner} /></CollapsibleSection>
          <CollapsibleSection number="03" label="Activation" title="Post-Campaign Activation Paths"><S06_PostCampaign partner={partner} /></CollapsibleSection>
          <CollapsibleSection number="04" label="Reporting" title={"What You'll See Each Month"}><S07_MonthlyReporting partner={partner} /></CollapsibleSection>
          <SectionDivider />
          <CaseStudy />
          <SectionDivider />
          <div id="getting-started" className="pt-12 md:pt-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
              <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-3">Getting Started</p>
              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.05] tracking-tight">Everything you need<br /><span className="text-[#00ff9d]">to launch</span></h2>
            </div>
            <S08_WaysToWork partner={partner} section="campaigns" />
            <CollapsibleSection label="Requirements" title="What We Need From You" subtitle="What GolfN handles vs. what the partner provides"><S09_WhatWeNeed partner={partner} /></CollapsibleSection>
          </div>
          <div id="ways-to-work">
            <CollapsibleSection label="Pricing" title="How the Program Unfolds" subtitle="Timeline, startup fee, add-ons, and what is included"><S08_WaysToWork partner={partner} section="timeline" /></CollapsibleSection>
            <CollapsibleSection label="Optional" labelColor="#f59e0b" title="Post-Campaign Audience Nurturing and Expansion" subtitle="The initial campaign does more than drive awareness. It helps GolfN identify the golfer profiles most likely to engage with your brand, so we can continue nurturing that audience over time."><S08_WaysToWork partner={partner} section="peruser" /></CollapsibleSection>
          </div>
          <S10_DataDifference partner={partner} />
          {isWalkthrough && (<><SectionDivider /><PersonalizedImpactCard /></>)}
          <SectionDivider />
          <div id="faq-section"><CollapsibleSection title="Frequently Asked Questions" subtitle="Common questions about GolfN partnerships"><S11_FAQ partner={partner} /></CollapsibleSection></div>
          <SectionDivider />
          <S12_FinalCTA partner={partner} />
          <footer className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14 text-center border-t border-[#2a3347]/50">
            <img src={images.logo} alt="GolfN" className="h-8 md:h-10 w-auto mx-auto mb-4 opacity-30" />
            <p className="text-[#4b5563] text-base">{'Confidential -- Prepared for '}{partner.partnerName}{' by GolfN'}</p>
            <p className="text-[#2a3347] text-sm mt-2 font-mono">partners.golfn.com</p>
          </footer>
        </div>
      </main>
    </BrandSpendProvider>
  )
}
