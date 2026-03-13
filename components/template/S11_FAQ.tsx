'use client'

import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'
import { Expand } from './Expand'

const standardFAQ = [
  {
    q: 'How long does it take to launch?',
    a: 'Typical launch timeline is 2 to 3 weeks from kickoff. This includes strategy, creative production, campaign architecture, and technical setup.',
  },
  {
    q: 'What happens after the campaign ends?',
    a: 'Within 30 days of campaign close, GolfN activates the qualified cohort through follow-on campaigns: targeted offers, Learn & Earn education, points-backed commerce, social activation, and progression-based experiences. The audience compounds over time.',
  },
  {
    q: 'Do we need to provide creative assets?',
    a: 'GolfN handles all campaign creative production. We need your logo files, product photography, and brand guidelines. We produce the campaign creatives, emails, in-app messages, banners, and social assets.',
  },
  {
    q: 'How does the affiliate requirement work?',
    a: 'GolfN requires an affiliate structure with 20%+ commission or a wholesale account with 30%+ margin. Standard 3-5% affiliate rates are insufficient. The margin supports points-back incentives for users and working margin for GolfN activation costs.',
  },
  {
    q: 'What is the minimum commitment?',
    a: '$7,500 setup investment, $5,000 per month minimum, and a 3-month minimum engagement. These minimums ensure the program has enough runway and resources to demonstrate measurable results.',
  },
  {
    q: 'Can we start with a pilot?',
    a: 'Yes. The Pilot path ($7,500 to $12,500 setup, $5,000+ monthly) is designed for first-time partners. It covers stages 1 through 4 and validates the model before expanding into a full Growth or Strategic program.',
  },
  {
    q: 'What reporting do we get?',
    a: 'Monthly performance reports with reach and engagement metrics, audience intelligence, progression analysis, and strategic optimization recommendations. Plus a monthly strategy review call.',
  },
  {
    q: 'How is GolfN different from running ads on Meta or Google?',
    a: 'GolfN reaches verified golfers in a golf-native environment with real behavioral data. Meta and Google use modeled interest data and mixed-content feeds. GolfN adds education, activation, post-purchase measurement, and ongoing audience progression that broad platforms cannot provide.',
  },
]

export function S11_FAQ({ partner }: { partner: PartnerData }) {
  const allFAQ = [...standardFAQ, ...(partner.customFAQ || []).map(f => ({ q: f.question, a: f.answer }))]

  return (
    <section className="py-20 md:py-28">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <p className="text-xs font-mono tracking-[0.2em] uppercase mb-4" style={{ color: partner.primaryColor }}>FAQ</p>
          <h2 className="font-display text-3xl md:text-5xl leading-[0.95] mb-12">Frequently asked<br /><span className="text-gradient">questions</span></h2>
        </Fade>

        <div className="space-y-3">
          {allFAQ.map((faq, i) => (
            <Fade key={i} delay={0.04 * i}>
              <Expand accentColor={partner.primaryColor} trigger={<span className="text-base font-semibold text-white">{faq.q}</span>}>
                <p className="text-base text-[#d1d5db] leading-relaxed pt-1">{faq.a}</p>
              </Expand>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  )
}
