'use client'

import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'
import { Expand } from './Expand'

const reportCategories = [
  {
    title: 'Reach & Engagement',
    items: ['Impressions delivered vs. target', 'Click-through rates by channel', 'Campaign entries and key interactions', 'Cost per engagement by format'],
  },
  {
    title: 'Audience Intelligence',
    items: ['Qualified cohort size and growth', 'Top-performing audience segments', 'Behavioral pattern analysis', 'Lookalike model performance'],
  },
  {
    title: 'Progression Metrics',
    items: ['Awareness to activation conversion', 'Education completion rates', 'Post-campaign follow-through rates', 'Downstream action attribution'],
  },
  {
    title: 'Optimization Recommendations',
    items: ['What is working and why', 'What to adjust next period', 'Creative and targeting refinements', 'Budget reallocation suggestions'],
  },
]

export function S07_MonthlyReporting({ partner }: { partner: PartnerData }) {
  return (
    <section className="py-20 md:py-28">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-mono font-bold" style={{ color: partner.primaryColor }}>04</span>
            <p className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: partner.primaryColor }}>Reporting</p>
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-[0.95] mb-4">{"What you'll see"}<br /><span className="text-gradient">each month</span></h2>
          <p className="text-base md:text-lg text-[#9ca3af] max-w-2xl mb-12">
            Every active program receives monthly performance reporting with clear metrics, audience intelligence, and strategic recommendations.
          </p>
        </Fade>

        <Fade delay={0.1}>
          <Expand
            accentColor={partner.primaryColor}
            defaultOpen={true}
            trigger={<span className="text-base md:text-lg font-semibold text-white">Monthly Report Contents</span>}
          >
            <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {reportCategories.map((cat) => (
                <div key={cat.title}>
                  <h4 className="text-sm font-bold text-white mb-3">{cat.title}</h4>
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#9ca3af]">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: partner.primaryColor }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Expand>
        </Fade>

        <Fade delay={0.2}>
          <div className="mt-6 bg-[#131619] border border-[#1e2128] rounded-2xl p-6 md:p-8">
            <p className="text-base text-[#d1d5db]">
              Reports are delivered monthly with a strategic review call. Data is available within GolfN systems in real time. Reports include raw data exports for internal analysis.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  )
}
