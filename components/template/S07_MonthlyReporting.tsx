'use client'

import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'
import { Expand } from './Expand'

const reportCategories = [
  {
    title: 'Campaign Reporting',
    items: ['Total entries and unique entrants', 'Opens, views, and clicks', 'Banner interactions and deep-link engagement', 'Performance by distribution channel'],
  },
  {
    title: 'Cohort Reporting',
    items: ['Qualified audience size', 'High-intent segment size', 'Cohort definition based on engagement patterns', 'Newly added qualifying users over time'],
  },
  {
    title: 'Progression Reporting',
    items: ['Offer follow-up performance', 'Cohort-to-conversion movement', 'Marketplace or reward performance where relevant', 'Learn & Earn or social outcomes if included'],
  },
  {
    title: 'Optimization Recommendations',
    items: ['What is working and why', 'What should change next period', 'Best-performing message variant', 'Up to 3 creative variants per message for ongoing testing', 'Recommended next actions'],
  },
]

const managementTiers = [
  { name: 'Monthly', desc: 'Maximum flexibility for brands that want to continue optimization month to month.' },
  { name: 'Quarterly', desc: 'Discounted commitment with a stronger optimization window.' },
  { name: 'Semi-Annual', desc: 'Larger discount with more continuity and campaign-building runway.' },
  { name: 'Annual', desc: 'Best economics and strongest continuity for brands building a long-term GolfN program.' },
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
            Every active program includes monthly reporting and strategic recommendations. This is not a passive dashboard. It is an ongoing optimization rhythm.
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

        {/* Management structure subsection */}
        <Fade delay={0.2}>
          <div className="mt-8">
            <h3 className="text-lg font-bold text-white mb-5">Ongoing Campaign Management Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {managementTiers.map((tier, i) => (
                <div key={tier.name} className="bg-[#131619] border border-[#1e2128] rounded-xl p-5 hover:border-[#2a2f38] transition-colors">
                  <h4 className="text-base font-bold text-white mb-2">{tier.name}</h4>
                  <p className="text-sm text-[#9ca3af] leading-relaxed">{tier.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#6b7280] mt-3 font-mono">Longer commitments receive better economics.</p>
          </div>
        </Fade>

        {/* Why ongoing management exists callout */}
        <Fade delay={0.3}>
          <div className="mt-6 bg-[#131619] border-l-2 rounded-r-xl p-6 md:p-8" style={{ borderLeftColor: partner.primaryColor }}>
            <h4 className="text-base font-bold text-white mb-2">Why ongoing management exists</h4>
            <p className="text-sm text-[#d1d5db] leading-relaxed">
              The initial package includes 30 days of post-campaign follow-up and management. After that, ongoing management covers reporting, creative refreshes, message testing, cohort expansion, and continued program optimization over time.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  )
}
