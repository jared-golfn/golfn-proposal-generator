'use client'

import { useState } from 'react'
import { Target, TrendingDown, Zap, Calculator, DollarSign, Plus, Sparkles, Video, LayoutGrid, UserCheck, Star, Trophy, ChevronDown, ChevronUp } from 'lucide-react'
import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'

const perUserTiers = [
  { min: 1, max: 2000, rate: 5.00, label: 'Launch', icon: '\ud83d\ude80' },
  { min: 2001, max: 5000, rate: 3.50, label: 'Scale', icon: '\ud83d\udcc8' },
  { min: 5001, max: 10000, rate: 2.00, label: 'Growth', icon: '\ud83c\udf1f' },
  { min: 10001, max: Infinity, rate: 1.00, label: 'Volume', icon: '\u26a1' },
]

const prepayOptions = [
  { term: 'Monthly', discount: '0%', factor: 1.00 },
  { term: '3 months', discount: '8% off', factor: 0.92 },
  { term: '6 months', discount: '15% off', factor: 0.85 },
  { term: '12 months', discount: '22% off', factor: 0.78 },
]

const baseIncludes = [
  'Strategy session + campaign brief',
  'Portal setup & brand onboarding',
  'Basic creative templates',
  'Full distribution setup',
  '30-day free follow-up',
  'Standard creative revisions & support during launch',
  'Partner social co-promotion (you share the sweepstakes, driving new GolfN downloads)',
]

const launchAddOns = [
  {
    title: 'Custom Creative Package',
    price: '+$1,500',
    desc: 'Full custom production: 3-5 variant emails/in-app/banners/social + blog draft with backlink',
    value: 'Higher engagement than templates',
    Icon: Sparkles,
  },
  {
    title: 'Social Video Takeover',
    price: '+$1,500',
    desc: 'Brandon creates 15-30s social video pushed on GolfN channels + in-app',
    value: 'Drives external traffic & virality',
    Icon: Video,
  },
  {
    title: 'In-App Banner Network Takeover',
    price: '+$1,000 - $2,000',
    desc: 'Rotating/persistent banners throughout app experience during campaign',
    value: 'Extends visibility beyond sweepstakes',
    Icon: LayoutGrid,
  },
]

const premiumAddOn = {
  title: 'Executive / Founder Endorsement',
  price: '+$2,500',
  desc: 'Produce + embed 30-45s founder video in sweepstakes pre-roll and app touchpoints',
  value: 'Highest trust signal, lifts entries 25-40%',
  Icon: UserCheck,
}

function calcBuckets(users: number) {
  const buckets: { tierLabel: string; usersInBucket: number; rate: number; subtotal: number }[] = []
  let remaining = users
  for (const tier of perUserTiers) {
    if (remaining <= 0) break
    const bucketSize = tier.max === Infinity ? remaining : Math.min(remaining, tier.max - tier.min + 1)
    const maxLabel = tier.max === Infinity ? users.toLocaleString() + '+' : tier.max.toLocaleString()
    buckets.push({ tierLabel: tier.min.toLocaleString() + '\u2013' + maxLabel, usersInBucket: bucketSize, rate: tier.rate, subtotal: bucketSize * tier.rate })
    remaining -= bucketSize
  }
  return buckets
}

function formatUSD(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

export function S08_WaysToWork({ partner }: { partner: PartnerData }) {
  const [cohortSize, setCohortSize] = useState(1000)
  const [prepayIdx, setPrepayIdx] = useState(0)
  const [expandedCampaign, setExpandedCampaign] = useState<number | null>(null)
  const buckets = calcBuckets(cohortSize)
  const baseCost = buckets.reduce((s, b) => s + b.subtotal, 0)
  const factor = prepayOptions[prepayIdx].factor
  const finalCost = Math.round(baseCost * factor)
  const effectiveRate = cohortSize > 0 ? (finalCost / cohortSize) : 0

  const campaigns = partner.campaigns
  const pricingIntro = partner.pricingIntro
  const pricingNote = partner.pricingNote

  return (
    <section id="ways-to-work" className="py-20 md:py-28">
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
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-4xl leading-9 mb-14">
            {pricingIntro || (<>You provide the prize budget (recommended <span className="text-white font-semibold">$5,000</span> for best cohort). GolfN charges a one-time startup fee, then bills monthly per qualified user added to your cohort.</>)}
          </p>
        </Fade>

        {/* ── Campaign Sweepstakes Cards (portfolio only) ── */}
        {campaigns && campaigns.length > 0 && (
          <Fade delay={0.04}>
            <div className="mb-14">
              <div className="flex items-center gap-2.5 mb-6">
                <Trophy className="w-5 h-5 text-[#00ff9d]" />
                <h3 className="text-2xl md:text-3xl font-semibold text-white">Recommended Campaigns</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {campaigns.map((c, ci) => (
                  <div
                    key={c.brandName}
                    className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-6 hover:border-[#00ff9d]/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col"
                  >
                    {/* Brand logo */}
                    {c.brandLogoUrl && (
                      <div className="mb-4 h-8 flex items-center">
                        <img src={c.brandLogoUrl} alt={c.brandName} className="h-6 md:h-7 w-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.8 }} />
                      </div>
                    )}

                    {/* Hero image placeholder */}
                    <div className="w-full h-40 rounded-lg bg-[#0f1217] border border-[#2a3347] mb-4 flex items-center justify-center overflow-hidden">
                      {c.heroImageUrl ? (
                        <img src={c.heroImageUrl} alt={c.title} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-sm text-[#4b5563] font-mono">Product image</span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-white mb-1">{c.title}</h4>
                    <p className="text-sm text-[#9ca3af] leading-6 mb-3">{c.description}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-mono tracking-wider px-2.5 py-0.5 rounded-full font-bold bg-[#00ff9d] text-[#0f1217]">PRIZE POOL</span>
                      <span className="text-xl font-mono font-bold text-[#00ff9d]">{c.prizePool}</span>
                    </div>

                    {/* Expandable prize breakdown */}
                    <button
                      onClick={() => setExpandedCampaign(expandedCampaign === ci ? null : ci)}
                      className="flex items-center gap-1.5 text-sm font-semibold text-[#00ff9d] hover:underline mt-auto"
                    >
                      {expandedCampaign === ci ? 'Hide prizes' : 'View prizes'}
                      {expandedCampaign === ci ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                    {expandedCampaign === ci && (
                      <div className="mt-3 space-y-2">
                        {c.prizes.map((p, pi) => (
                          <div key={pi} className="flex justify-between items-start text-sm border-t border-[#2a3347]/50 pt-2">
                            <div>
                              <span className="text-[#00ff9d] font-mono font-bold mr-2">{p.place}</span>
                              <span className="text-[#d1d5db]">{p.description}</span>
                            </div>
                            <span className="text-white font-mono font-semibold shrink-0 ml-3">{p.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Portfolio discount note */}
              {pricingNote && (
                <div className="mt-6 bg-[#001a14]/60 border border-[#00ff9d]/30 rounded-xl p-5">
                  <p className="text-base md:text-lg text-[#00ff9d] font-semibold">{pricingNote}</p>
                </div>
              )}
            </div>
          </Fade>
        )}

        {/* A La Carte Startup Fee */}
        <Fade delay={0.06}>
          <div className="mb-12">
            <div className="flex items-center gap-2.5 mb-6">
              <DollarSign className="w-5 h-5 text-[#00ff9d]" />
              <h3 className="text-2xl md:text-3xl font-semibold text-white">One-Time Startup Fee: Starts at $2,500&nbsp;&mdash;&nbsp;Add What You Want</h3>
            </div>

            {/* Base Card */}
            <div className="bg-[#1a1f2e] border-2 border-[#00ff9d]/40 rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
                <div>
                  <span className="text-[10px] font-mono tracking-wider px-2.5 py-0.5 rounded-full font-bold bg-[#00ff9d] text-[#0f1217] mr-3">BASE</span>
                  <span className="text-3xl md:text-4xl font-mono font-bold text-[#00ff9d]">$2,500</span>
                  <span className="text-base text-[#6b7280] ml-2">one-time</span>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                {baseIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#d1d5db]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-1 shrink-0"><path d="M3 8l3.5 3.5L13 5" stroke="#00ff9d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Launch Add-Ons */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Plus className="w-4 h-4 text-[#00ff9d]" />
                <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280]">Launch Add-Ons</p>
                <span className="text-[10px] font-mono tracking-wider px-2.5 py-0.5 rounded-full font-bold bg-[#00ff9d] text-[#0f1217] ml-2">1 FREE WITH FIRST CAMPAIGN</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {launchAddOns.map((a) => (
                  <div key={a.title} className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-6 hover:border-[#00ff9d]/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <a.Icon className="w-4.5 h-4.5 text-[#00ff9d]" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white leading-snug">{a.title}</h4>
                        <p className="text-lg font-mono font-bold text-[#00ff9d] mt-0.5">{a.price}</p>
                      </div>
                    </div>
                    <p className="text-sm text-[#9ca3af] leading-6 mb-2">{a.desc}</p>
                    <p className="text-sm text-[#00ff9d]/80 italic">{a.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Add-On */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-4 h-4 text-[#00ff9d]" />
                <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280]">Premium Add-On</p>
              </div>
              <div className="bg-[#1a1f2e] border border-[#00ff9d]/30 rounded-xl p-6 hover:border-[#00ff9d]/50 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#00ff9d]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <premiumAddOn.Icon className="w-5 h-5 text-[#00ff9d]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h4 className="text-lg font-bold text-white">{premiumAddOn.title}</h4>
                      <span className="text-xl font-mono font-bold text-[#00ff9d]">{premiumAddOn.price}</span>
                    </div>
                    <p className="text-base text-[#9ca3af] leading-7 mt-1">{premiumAddOn.desc}</p>
                    <p className="text-sm text-[#00ff9d]/80 italic mt-1">{premiumAddOn.value}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* A la carte callout */}
            <div className="bg-[#001a14]/60 border border-[#00ff9d]/30 rounded-xl p-6">
              <p className="text-base md:text-lg text-[#d1d5db] leading-8">
                Build your launch exactly how you want it. Start at <span className="text-[#00ff9d] font-semibold">$2,500</span> and add only the extras that drive results. <strong className="text-white">For your first campaign, we'll include one Launch Add-On free to prove the impact.</strong>
              </p>
            </div>
          </div>
        </Fade>

        {/* Per-User Tiers Table */}
        <Fade delay={0.10}>
          <div className="mb-12">
            <div className="flex items-center gap-2.5 mb-5">
              <TrendingDown className="w-5 h-5 text-[#00ff9d]" />
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Ongoing Per-User Pricing</h3>
            </div>
            <div className="overflow-x-auto rounded-xl border border-[#2a3347]">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#1a1f2e]">
                    <th className="px-6 py-4 text-sm font-mono tracking-wider uppercase text-[#6b7280]">Qualified Users</th>
                    <th className="px-6 py-4 text-sm font-mono tracking-wider uppercase text-[#6b7280]">Per User / Month</th>
                    <th className="px-6 py-4 text-sm font-mono tracking-wider uppercase text-[#6b7280]">Stage</th>
                  </tr>
                </thead>
                <tbody>
                  {perUserTiers.map((row, i) => (
                    <tr key={row.min} className={`border-t border-[#2a3347]/60 transition-all duration-200 hover:bg-[#1a1f2e]/80 ${i >= 2 ? 'bg-[#00ff9d]/[0.04]' : 'bg-transparent'}`}>
                      <td className="px-6 py-5 text-lg text-white font-medium">{row.min === 10001 ? '10,001+' : row.min.toLocaleString() + '\u2013' + row.max.toLocaleString()}</td>
                      <td className="px-6 py-5"><span className="text-2xl font-mono font-bold text-[#00ff9d]">${row.rate.toFixed(2)}</span></td>
                      <td className="px-6 py-5 text-base text-[#9ca3af]"><span className="mr-2">{row.icon}</span>{row.label}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Fade>

        {/* Prepay Discount Pills */}
        <Fade delay={0.14}>
          <div className="flex flex-wrap gap-3 mb-12">
            <span className="text-base text-[#6b7280] font-medium self-center mr-2">Prepay discounts (credit balance):</span>
            {prepayOptions.slice(1).map((d) => (
              <span key={d.term} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff9d]/10 border border-[#00ff9d]/30 text-[#00ff9d] text-sm font-semibold transition-all hover:bg-[#00ff9d]/20 hover:scale-105">
                <Zap className="w-3.5 h-3.5" />
                {d.term} &mdash; {d.discount}
              </span>
            ))}
          </div>
        </Fade>

        {/* Interactive Calculator */}
        <Fade delay={0.18}>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-8 md:p-10 mb-12">
            <div className="flex items-center gap-3 mb-8">
              <Calculator className="w-6 h-6 text-[#00ff9d]" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">Pricing Calculator</h3>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-3">Expected monthly qualified users added to your cohort</label>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  min={100}
                  max={50000}
                  value={cohortSize}
                  onChange={(e) => { const v = Math.max(100, Math.min(50000, Number(e.target.value) || 100)); setCohortSize(v) }}
                  className="bg-[#0f1217] border border-[#2a3347] rounded-xl px-5 py-3 text-2xl font-mono font-bold text-[#00ff9d] w-48 focus:border-[#00ff9d]/60 focus:outline-none transition-colors"
                />
                <input
                  type="range"
                  min={100}
                  max={50000}
                  step={100}
                  value={cohortSize}
                  onChange={(e) => setCohortSize(Number(e.target.value))}
                  className="flex-1 h-2 rounded-full appearance-none cursor-pointer"
                  style={{ background: `linear-gradient(to right, #00ff9d ${((cohortSize - 100) / 49900) * 100}%, #2a3347 ${((cohortSize - 100) / 49900) * 100}%)` }}
                />
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-[#2a3347] mb-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#0f1217]">
                    <th className="px-5 py-3 text-sm font-mono tracking-wider uppercase text-[#6b7280]">Tier</th>
                    <th className="px-5 py-3 text-sm font-mono tracking-wider uppercase text-[#6b7280]">Users</th>
                    <th className="px-5 py-3 text-sm font-mono tracking-wider uppercase text-[#6b7280]">Rate</th>
                    <th className="px-5 py-3 text-sm font-mono tracking-wider uppercase text-[#6b7280]">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {buckets.map((b, i) => (
                    <tr key={i} className={`border-t border-[#2a3347]/60 ${i >= 2 ? 'bg-[#00ff9d]/[0.04]' : ''}`}>
                      <td className="px-5 py-3 text-base text-[#9ca3af]">{b.tierLabel}</td>
                      <td className="px-5 py-3 text-base text-white font-medium">{b.usersInBucket.toLocaleString()}</td>
                      <td className="px-5 py-3 text-base font-mono text-[#00ff9d]">${b.rate.toFixed(2)}</td>
                      <td className="px-5 py-3 text-base font-mono font-bold text-white">{formatUSD(b.subtotal)}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-[#00ff9d]/30 bg-[#0f1217]">
                    <td className="px-5 py-4 text-base font-semibold text-white" colSpan={3}>Monthly Total (before prepay)</td>
                    <td className="px-5 py-4 text-xl font-mono font-bold text-[#00ff9d]">{formatUSD(baseCost)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-3">Prepay Discount</label>
                <div className="flex flex-wrap gap-2">
                  {prepayOptions.map((d, i) => (
                    <button key={d.term} onClick={() => setPrepayIdx(i)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${prepayIdx === i ? 'bg-[#00ff9d] text-[#0f1217]' : 'bg-[#0f1217] border border-[#2a3347] text-[#9ca3af] hover:border-[#00ff9d]/50'}`}>{d.term}{i > 0 ? ` (${d.discount})` : ''}</button>
                  ))}
                </div>
              </div>
              <div className="bg-[#0f1217] rounded-xl p-6 flex flex-col justify-center">
                <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-1">Your Monthly Cost</p>
                <p className="text-4xl md:text-5xl font-mono font-bold text-[#00ff9d] mb-3">{formatUSD(finalCost)}<span className="text-lg text-[#6b7280]">/mo</span></p>
                <p className="text-lg font-semibold">Avg <span className="text-[#00ff9d] font-mono">${effectiveRate.toFixed(2)}</span> <span className="text-[#6b7280]">per qualified user</span></p>
                {prepayIdx > 0 && (
                  <p className="text-base text-[#00ff9d] mt-1">You save {formatUSD(baseCost - finalCost)}/mo with {prepayOptions[prepayIdx].term} prepay</p>
                )}
              </div>
            </div>

            <p className="text-base text-[#6b7280] mt-6 text-center italic">The more qualified golfers added, the lower your average cost per user &mdash; rewards for growth.</p>
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
                <p className="text-lg md:text-xl text-[#d1d5db] leading-9">
                  Most premium golf and DTC brands pay <span className="text-white font-semibold">$65&ndash;$115+</span> per qualified
                  consumer lead via Google, Meta, or agencies (2025&ndash;2026 DTC benchmarks).
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
          <div className="bg-[#1a1f2e] border-l-2 border-[#00ff9d] rounded-r-xl p-6 md:p-8">
            <p className="text-lg text-[#d1d5db] leading-9"><strong className="text-white">Every program includes real upfront work:</strong> strategy, offer design, audience definition, tracking logic, campaign implementation, asset creation, and the first 30 days of post-campaign follow-up. That is why a one-time startup fee (starts at $2,500) is required before launch.</p>
          </div>
        </Fade>

      </div>
    </section>
  )
}
