'use client'

import { BarChart3, Clock } from 'lucide-react'
import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'
import { Expand } from './Expand'

const reportCategories = [
  { title: 'Campaign Reporting', items: ['Total entries and unique entrants', 'Opens, views, and clicks', 'Banner interactions and deep-link engagement', 'Performance by distribution channel'] },
  { title: 'Cohort Reporting', items: ['Qualified audience size', 'High-intent segment size', 'Cohort definition based on engagement patterns', 'Newly added qualifying users over time'] },
  { title: 'Progression Reporting', items: ['Offer follow-up performance', 'Cohort-to-conversion movement', 'Marketplace or reward performance where relevant', 'Learn & Earn or social outcomes if included'] },
  { title: 'Optimization Recommendations', items: ['What is working and why', 'What should change next period', 'Best-performing message variant (up to 3 tested)', 'Recommended next actions'] },
]

const managementTiers = [
  { name: 'Monthly', desc: 'Maximum flexibility. Optimize month to month.', icon: '1' },
  { name: 'Quarterly', desc: 'Discounted. Stronger optimization window.', icon: '3' },
  { name: 'Semi-Annual', desc: 'Larger discount. More campaign runway.', icon: '6' },
  { name: 'Annual', desc: 'Best economics. Strongest continuity.', icon: '12' },
]

export function S07_MonthlyReporting({ partner }: { partner: PartnerData }) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-6 h-6 text-[#00ff9d]" />
            <span className="text-2xl font-mono font-bold text-[#00ff9d]">04</span>
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">Reporting</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight mb-5">{"What you'll see"}<br /><span className="text-gradient">each month</span></h2>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-4xl leading-9 mb-14">
            Every active program includes monthly reporting and strategic recommendations. This is not a passive dashboard. It is an ongoing optimization rhythm.
          </p>
        </Fade>

        {/* STYLIZED MONTHLY REPORT MOCKUP */}
        <Fade delay={0.1}>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-8 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Left: Metrics Panel */}
              <div className="bg-[#0f1217] rounded-xl p-5">
                <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-4">Campaign Performance</p>
                <div className="space-y-3">
                  {[{ label: 'Entries', val: '12,847' }, { label: 'Click-through', val: '8.4%' }, { label: 'Unique Entrants', val: '9,231' }].map(m => (
                    <div key={m.label} className="flex justify-between items-center">
                      <span className="text-base text-[#9ca3af]">{m.label}</span>
                      <span className="text-base font-mono font-bold text-[#00ff9d]">{m.val}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Center: Green Cohort Growth Line Chart */}
              <div className="bg-[#0f1217] rounded-xl p-5">
                <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-4">Cohort Growth</p>
                <div className="flex items-end gap-1 h-24">
                  {[20, 35, 42, 55, 68, 74, 85, 92].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: 'linear-gradient(to top, #00ff9d, transparent)', opacity: 0.3 + (i * 0.08) }} />
                  ))}
                </div>
                <p className="text-sm text-[#6b7280] mt-2">+34% qualified cohort growth this period</p>
              </div>
              {/* Right: Recommendations Card */}
              <div className="bg-[#0f1217] rounded-xl p-5">
                <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-4">Recommendations</p>
                <div className="space-y-2">
                  {['Increase email frequency', 'Test video-led creative', 'Expand to AU market'].map(r => (
                    <div key={r} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] mt-2 shrink-0" />
                      <span className="text-base text-[#d1d5db]">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-[#4b5563] mt-5 font-mono">Stylized representation &mdash; actual reports contain full data exports</p>
          </div>
        </Fade>

        <Fade delay={0.15}>
          <Expand accentColor="#00ff9d" defaultOpen={false} trigger={<span className="text-lg font-semibold text-white">Full Monthly Report Contents</span>}>
            <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {reportCategories.map((cat) => (
                <div key={cat.title}>
                  <h4 className="text-base font-bold text-white mb-3">{cat.title}</h4>
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-base text-[#9ca3af]">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-[#00ff9d]" />
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
          <div className="mt-10">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-[#00ff9d]" />
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Management Options</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {managementTiers.map((tier) => (
                <div key={tier.name} className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-6 text-center hover:border-[#00ff9d]/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                  <span className="text-2xl font-mono font-bold text-[#00ff9d] block mb-1">{tier.icon}<span className="text-base text-[#6b7280]">mo</span></span>
                  <h4 className="text-lg font-semibold text-white mb-2">{tier.name}</h4>
                  <p className="text-base text-[#9ca3af] leading-7">{tier.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Fade>

        <Fade delay={0.25}>
          <div className="mt-6 bg-[#1a1f2e] border-l-2 border-[#00ff9d] rounded-r-xl p-8">
            <h4 className="text-xl font-semibold text-white mb-2">Why ongoing management exists</h4>
            <p className="text-lg text-[#d1d5db] leading-9">The initial package includes 30 days of post-campaign follow-up. After that, ongoing management is billed <strong className="text-white">monthly per qualified user</strong> added to your cohort (First 2,000 at $5, tiering down to $1 at 10,001+). This covers reporting, creative refreshes, message testing, cohort expansion, and continued program optimization.</p>
          </div>
        </Fade>
      </div>
    </section>
  )
}
