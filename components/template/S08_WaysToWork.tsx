'use client'

import { Target, DollarSign, TrendingDown, Zap } from 'lucide-react'
import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'

const fixedCosts = [
  { tier: 'Pilot', setup: '$7,500', monthly: '$5,000', duration: '3 months', impressions: '50K\u2013100K', highlight: false },
  { tier: 'Growth', setup: '$12,500', monthly: '$8,000', duration: '3\u20136 months', impressions: '100K\u2013250K', highlight: true },
  { tier: 'Strategic', setup: '$20,000+', monthly: '$12,000+', duration: '6+ months', impressions: '250K\u2013500K+', highlight: false },
]

const perUserTiers = [
  { range: '1 \u2013 1,000', rate: '$5.00', label: 'Launch', icon: '\ud83d\ude80' },
  { range: '1,001 \u2013 5,000', rate: '$3.00', label: 'Scale', icon: '\ud83d\udcc8' },
  { range: '5,001+', rate: '$1.00', label: 'Volume', icon: '\u26a1' },
]

const prepayDiscounts = [
  { term: 'Quarterly', discount: '10% off' },
  { term: 'Semi-Annual', discount: '15% off' },
  { term: 'Annual', discount: '20% off' },
]

export function S08_WaysToWork({ partner }: { partner: PartnerData }) {
  return (
    <section id="ways-to-work" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <Fade>
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-5 h-5 text-[#00ff9d]" />
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">Pricing</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.05] tracking-tight mb-5">
            Simple, Scalable Pricing&nbsp;&mdash;<br className="hidden md:block" />
            Pay for Execution&nbsp;+&nbsp;<span className="text-[#00ff9d]">Real Qualified Golfers</span>
          </h2>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-4xl leading-8 mb-16">
            You provide the prize budget (recommended <span className="text-white font-semibold">$5,000</span> for best cohort).
            GolfN handles everything else: launch execution, qualification, activation, and ongoing growth.
          </p>
        </Fade>

        {/* Fixed Costs Table */}
        <Fade delay={0.08}>
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-5">
              <DollarSign className="w-5 h-5 text-[#00ff9d]" />
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Fixed Costs</h3>
            </div>
            <div className="overflow-x-auto rounded-xl border border-[#2a3347]">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#1a1f2e]">
                    <th className="px-6 py-4 text-sm font-mono tracking-wider uppercase text-[#6b7280]">Tier</th>
                    <th className="px-6 py-4 text-sm font-mono tracking-wider uppercase text-[#6b7280]">Setup</th>
                    <th className="px-6 py-4 text-sm font-mono tracking-wider uppercase text-[#6b7280]">Monthly</th>
                    <th className="px-6 py-4 text-sm font-mono tracking-wider uppercase text-[#6b7280] hidden md:table-cell">Duration</th>
                    <th className="px-6 py-4 text-sm font-mono tracking-wider uppercase text-[#6b7280] hidden lg:table-cell">Impressions</th>
                  </tr>
                </thead>
                <tbody>
                  {fixedCosts.map((row) => (
                    <tr key={row.tier} className={`border-t border-[#2a3347]/60 transition-all duration-200 hover:bg-[#1a1f2e]/80 hover:scale-[1.005] ${row.highlight ? 'bg-[#00ff9d]/[0.04]' : 'bg-transparent'}`}>
                      <td className="px-6 py-5">
                        <span className="text-lg font-semibold text-white">{row.tier}</span>
                        {row.highlight && <span className="ml-2.5 text-[10px] font-mono tracking-wider px-2.5 py-0.5 rounded-full font-bold bg-[#00ff9d] text-[#0f1217] align-middle">POPULAR</span>}
                      </td>
                      <td className="px-6 py-5 text-lg font-mono font-bold text-[#00ff9d]">{row.setup}</td>
                      <td className="px-6 py-5 text-lg font-mono font-bold text-[#00ff9d]">{row.monthly}</td>
                      <td className="px-6 py-5 text-base text-[#9ca3af] hidden md:table-cell">{row.duration}</td>
                      <td className="px-6 py-5 text-base text-[#9ca3af] hidden lg:table-cell">{row.impressions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Fade>

        {/* Per-User Table */}
        <Fade delay={0.14}>
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-5">
              <TrendingDown className="w-5 h-5 text-[#00ff9d]" />
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Ongoing Per-User Pricing</h3>
            </div>
            <div className="overflow-x-auto rounded-xl border border-[#2a3347]">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#1a1f2e]">
                    <th className="px-6 py-4 text-sm font-mono tracking-wider uppercase text-[#6b7280]">Qualified Users</th>
                    <th className="px-6 py-4 text-sm font-mono tracking-wider uppercase text-[#6b7280]">Per User</th>
                    <th className="px-6 py-4 text-sm font-mono tracking-wider uppercase text-[#6b7280]">Stage</th>
                  </tr>
                </thead>
                <tbody>
                  {perUserTiers.map((row, i) => (
                    <tr key={row.range} className={`border-t border-[#2a3347]/60 transition-all duration-200 hover:bg-[#1a1f2e]/80 hover:scale-[1.005] ${i === 2 ? 'bg-[#00ff9d]/[0.06]' : 'bg-transparent'}`}>
                      <td className="px-6 py-5 text-lg text-white font-medium">{row.range}</td>
                      <td className="px-6 py-5"><span className="text-2xl font-mono font-bold text-[#00ff9d]">{row.rate}</span></td>
                      <td className="px-6 py-5 text-base text-[#9ca3af]"><span className="mr-2">{row.icon}</span>{row.label}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Fade>

        {/* Prepay Pills */}
        <Fade delay={0.18}>
          <div className="flex flex-wrap gap-3 mb-14">
            <span className="text-base text-[#6b7280] font-medium self-center mr-2">Prepay discounts:</span>
            {prepayDiscounts.map((d) => (
              <span key={d.term} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff9d]/10 border border-[#00ff9d]/30 text-[#00ff9d] text-sm font-semibold transition-all hover:bg-[#00ff9d]/20 hover:scale-105">
                <Zap className="w-3.5 h-3.5" />
                {d.term} &mdash; {d.discount}
              </span>
            ))}
          </div>
        </Fade>

        {/* Comparison Callout */}
        <Fade delay={0.22}>
          <div className="bg-[#001a14]/60 border border-[#00ff9d]/30 rounded-xl p-8 md:p-10 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#00ff9d]/15 flex items-center justify-center shrink-0 mt-0.5">
                <Target className="w-5 h-5 text-[#00ff9d]" />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-3">Why this matters</h4>
                <p className="text-lg md:text-xl text-[#d1d5db] leading-8">
                  Most premium golf and DTC brands pay <span className="text-white font-semibold">$65&ndash;$115+</span> per qualified
                  consumer lead via Google, Meta, or agencies (2025&ndash;2026 DTC benchmarks from WordStream, First Page Sage, Martal Group).
                  With GolfN you control your prize investment and pay just <span className="text-[#00ff9d] font-bold">$5 per qualified user</span> (dropping
                  to <span className="text-[#00ff9d] font-bold">$1</span>) &mdash; often <span className="text-white font-semibold">10&ndash;20x cheaper</span> &mdash; while
                  building an owned audience you activate forever.
                </p>
              </div>
            </div>
          </div>
        </Fade>

        {/* Setup Band */}
        <Fade delay={0.25}>
          <div className="bg-[#1a1f2e] border-l-2 border-[#00ff9d] rounded-r-xl p-6 md:p-8 mb-6">
            <p className="text-lg text-[#d1d5db] leading-8"><strong className="text-white">Every program includes real upfront work:</strong> strategy, offer design, audience definition, tracking logic, campaign implementation, asset creation, and the first 30 days of post-campaign follow-up. That is why setup investment is required before launch.</p>
          </div>
        </Fade>

        {/* Pricing Note */}
        <Fade delay={0.28}>
          <div className="bg-[#0f1217] border border-[#2a3347] rounded-xl px-6 py-4 mb-6">
            <p className="text-base text-[#6b7280] leading-7">
              <span className="text-[#9ca3af] font-medium">Pricing note:</span> You provide the sweepstakes prize budget (recommended $5,000). GolfN handles all creative execution, distribution, asset creation, qualification, and ongoing activation. Ongoing management is billed monthly per qualified user added to your cohort (starting at $5/user, tiering down to $1).
            </p>
          </div>
        </Fade>

        {/* Calculator Note */}
        <Fade delay={0.3}>
          <div className="bg-[#1a1f2e] border-l-2 border-[#00ff9d] rounded-r-xl p-6 md:p-8">
            <p className="text-base md:text-lg text-[#9ca3af] leading-7">
              <span className="text-white font-semibold">\ud83d\udca1 Use the calculator in your portal</span> to see costs at different cohort sizes + prepay savings.
            </p>
          </div>
        </Fade>

      </div>
    </section>
  )
}
