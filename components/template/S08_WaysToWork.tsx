'use client'

import { useState } from 'react'
import { Target, TrendingDown, Zap, Calculator } from 'lucide-react'
import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'

const perUserTiers = [
  { range: '1 \u2013 1,000', rate: 5.00, label: 'Launch', icon: '\ud83d\ude80' },
  { range: '1,001 \u2013 5,000', rate: 3.00, label: 'Scale', icon: '\ud83d\udcc8' },
  { range: '5,001+', rate: 1.00, label: 'Volume', icon: '\u26a1' },
]

const prepayDiscounts = [
  { term: 'Quarterly', discount: '10% off', factor: 0.90 },
  { term: 'Semi-Annual', discount: '15% off', factor: 0.85 },
  { term: 'Annual', discount: '20% off', factor: 0.80 },
]

function calcCost(users: number): number {
  if (users <= 0) return 0
  let cost = 0
  if (users <= 1000) { cost = users * 5 }
  else if (users <= 5000) { cost = 1000 * 5 + (users - 1000) * 3 }
  else { cost = 1000 * 5 + 4000 * 3 + (users - 5000) * 1 }
  return cost
}

function formatUSD(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

export function S08_WaysToWork({ partner }: { partner: PartnerData }) {
  const [cohortSize, setCohortSize] = useState(2500)
  const [prepayIdx, setPrepayIdx] = useState(-1)
  const baseCost = calcCost(cohortSize)
  const factor = prepayIdx >= 0 ? prepayDiscounts[prepayIdx].factor : 1
  const finalCost = Math.round(baseCost * factor)
  const effectiveRate = cohortSize > 0 ? (finalCost / cohortSize) : 0

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

        {/* Per-User Table */}
        <Fade delay={0.08}>
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
                      <td className="px-6 py-5"><span className="text-2xl font-mono font-bold text-[#00ff9d]">${row.rate.toFixed(2)}</span></td>
                      <td className="px-6 py-5 text-base text-[#9ca3af]"><span className="mr-2">{row.icon}</span>{row.label}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Fade>

        {/* Prepay Pills */}
        <Fade delay={0.12}>
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

        {/* Interactive Calculator */}
        <Fade delay={0.16}>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-8 md:p-10 mb-14">
            <div className="flex items-center gap-3 mb-8">
              <Calculator className="w-6 h-6 text-[#00ff9d]" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">Pricing Calculator</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left: Inputs */}
              <div>
                <label className="block text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-3">Cohort Size</label>
                <input
                  type="range"
                  min={100}
                  max={10000}
                  step={100}
                  value={cohortSize}
                  onChange={(e) => setCohortSize(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer mb-2"
                  style={{ background: `linear-gradient(to right, #00ff9d ${((cohortSize - 100) / 9900) * 100}%, #2a3347 ${((cohortSize - 100) / 9900) * 100}%)` }}
                />
                <div className="flex justify-between text-sm text-[#6b7280] mb-6">
                  <span>100</span>
                  <span className="text-xl font-mono font-bold text-[#00ff9d]">{cohortSize.toLocaleString()} users</span>
                  <span>10,000</span>
                </div>

                <label className="block text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-3">Prepay Discount</label>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setPrepayIdx(-1)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${prepayIdx === -1 ? 'bg-[#00ff9d] text-[#0f1217]' : 'bg-[#0f1217] border border-[#2a3347] text-[#9ca3af] hover:border-[#00ff9d]/50'}`}>None</button>
                  {prepayDiscounts.map((d, i) => (
                    <button key={d.term} onClick={() => setPrepayIdx(i)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${prepayIdx === i ? 'bg-[#00ff9d] text-[#0f1217]' : 'bg-[#0f1217] border border-[#2a3347] text-[#9ca3af] hover:border-[#00ff9d]/50'}`}>{d.term} ({d.discount})</button>
                  ))}
                </div>
              </div>

              {/* Right: Output */}
              <div className="bg-[#0f1217] rounded-xl p-6 md:p-8 flex flex-col justify-center">
                <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-2">Monthly Cost</p>
                <p className="text-4xl md:text-5xl font-mono font-bold text-[#00ff9d] mb-4">{formatUSD(finalCost)}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-base">
                    <span className="text-[#6b7280]">Effective per user</span>
                    <span className="text-white font-mono font-semibold">${effectiveRate.toFixed(2)}</span>
                  </div>
                  {prepayIdx >= 0 && (
                    <div className="flex justify-between text-base">
                      <span className="text-[#6b7280]">You save</span>
                      <span className="text-[#00ff9d] font-mono font-semibold">{formatUSD(baseCost - finalCost)}/mo</span>
                    </div>
                  )}
                  <div className="flex justify-between text-base">
                    <span className="text-[#6b7280]">vs. industry avg ($90/lead)</span>
                    <span className="text-[#00ff9d] font-mono font-semibold">{formatUSD(cohortSize * 90 - finalCost)} saved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        {/* Comparison Callout */}
        <Fade delay={0.20}>
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
        <Fade delay={0.24}>
          <div className="bg-[#1a1f2e] border-l-2 border-[#00ff9d] rounded-r-xl p-6 md:p-8 mb-6">
            <p className="text-lg text-[#d1d5db] leading-8"><strong className="text-white">Every program includes real upfront work:</strong> strategy, offer design, audience definition, tracking logic, campaign implementation, asset creation, and the first 30 days of post-campaign follow-up. That is why setup investment is required before launch.</p>
          </div>
        </Fade>

        {/* Pricing Note */}
        <Fade delay={0.26}>
          <div className="bg-[#0f1217] border border-[#2a3347] rounded-xl px-6 py-4">
            <p className="text-base text-[#6b7280] leading-7">
              <span className="text-[#9ca3af] font-medium">Pricing note:</span> You provide the sweepstakes prize budget (recommended $5,000). GolfN handles all creative execution, distribution, asset creation, qualification, and ongoing activation. Ongoing management is billed monthly per qualified user added to your cohort (starting at $5/user, tiering down to $1).
            </p>
          </div>
        </Fade>

      </div>
    </section>
  )
}
