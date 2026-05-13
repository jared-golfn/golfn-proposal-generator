'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

const CALENDLY_URL = 'https://calendly.com/golfn'

const cpmTiers = [
  { commitment: '1 month trial', cpm: '$70', discount: 'rate card', included: 'Standard targeting, campaign reporting' },
  { commitment: '3 months', cpm: '$60', discount: '~15% off', included: 'Dedicated account support, mid-flight optimization' },
  { commitment: '6 months', cpm: '$50', discount: '~29% off', included: 'Priority placement, quarterly performance reviews' },
  { commitment: '12 months', cpm: '$40', discount: '~43% off', included: 'Category exclusivity, co-branded content, first access to new inventory' },
]

const activations = [
  { name: 'Sweepstakes', price: 'FREE', sub: 'Brand provides prize. $1k+ retail value.' },
  { name: 'Sponsored Challenge (1x / 3x / 6x)', price: '$5k / $12k / $20k', sub: 'Brand supplies rewards.' },
  { name: 'Press Your Luck monthly sponsorship', price: '$25k+/mo', sub: 'Brand product as prize slot. Video-for-spin integration.' },
  { name: 'Marketplace category page takeover', price: '$7.5k/mo', sub: 'Own a category header (Recovery, Wedges, Putters).' },
  { name: 'In-feed pinned video', price: '$2.5k/wk', sub: 'Top of the social activity feed.' },
  { name: 'Course page sponsorship', price: '$1k/mo per metro', sub: 'Course-level ad placements.' },
  { name: 'Per verified check-in', price: '$5+', sub: 'Demo days, fitting events, brand activations.' },
]

const partnershipIncludes = [
  '12 month CPM commitment at $40 (category exclusive)',
  'Always-on placement: choose category takeover or in-feed pinned',
  'Press Your Luck sponsorship eligible (add-on)',
  'Quarterly audience intelligence reports',
  'Preferred marketplace placement and featured banner windows',
  'First access to new inventory and beta capabilities',
  'Co-branded content and blog backlinks included',
  'Dedicated account team',
]

export function RateCard() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0d12]" id="rate-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-4">Rate Card</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight mb-4 max-w-4xl">
          Pricing, <span className="text-gradient">plain.</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-base md:text-lg text-[#9ca3af] mb-12 max-w-3xl">
          Golf media sells reach around golf content. We sell reach to verified golfers. CPM packages start at $40 for campaigns tied to first-party golf behavior. Less inferred targeting. Cleaner attribution. More certainty per impression.
        </motion.p>

        {/* Block A: CPM Media */}
        <div className="mb-12">
          <p className="text-xs font-mono text-[#6b7280] uppercase tracking-[0.2em] mb-4">Block A</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">CPM Media</h3>
          <p className="text-sm text-[#9ca3af] mb-6">Standard targeting. Verified audience. Volume discount for commitment.</p>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#0f1217] border-b border-[#2a3347]">
                  <tr className="text-left text-xs font-mono text-[#6b7280] uppercase tracking-wider">
                    <th className="px-5 py-4">Commitment</th>
                    <th className="px-5 py-4 text-right">Base CPM</th>
                    <th className="px-5 py-4 text-right">Discount</th>
                    <th className="px-5 py-4">Included</th>
                  </tr>
                </thead>
                <tbody>
                  {cpmTiers.map((tier, i) => (
                    <tr key={tier.commitment} className={`border-b border-[#2a3347]/30 ${i === cpmTiers.length - 1 ? 'bg-[#001a14]/40' : ''}`}>
                      <td className="px-5 py-4 text-white font-semibold">{tier.commitment}</td>
                      <td className="px-5 py-4 text-right font-mono font-bold text-[#00ff9d] text-base">{tier.cpm}</td>
                      <td className="px-5 py-4 text-right font-mono text-[#9ca3af]">{tier.discount}</td>
                      <td className="px-5 py-4 text-[#d1d5db] text-xs">{tier.included}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-[#6b7280] mt-4">Triggered targeting premium: add 25 to 50% to base CPM when campaign uses weather, UV, handicap progression, or club-in-bag triggers. The trigger does the targeting work.</p>
        </div>

        {/* Block B: Activations */}
        <div className="mb-12">
          <p className="text-xs font-mono text-[#6b7280] uppercase tracking-[0.2em] mb-4">Block B</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Activations</h3>
          <p className="text-sm text-[#9ca3af] mb-6">Run something specific. Sweepstakes are free.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {activations.map((a) => (
              <div key={a.name} className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="text-base font-semibold text-white">{a.name}</p>
                  <p className={`text-base font-mono font-bold shrink-0 ${a.price === 'FREE' ? 'text-[#00ff9d]' : 'text-[#00ff9d]'}`}>{a.price}</p>
                </div>
                <p className="text-xs text-[#9ca3af] leading-5">{a.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Block C: Partnership */}
        <div>
          <p className="text-xs font-mono text-[#6b7280] uppercase tracking-[0.2em] mb-4">Block C</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-2">
            Partnership <Star className="w-5 h-5 text-[#00ff9d] fill-[#00ff9d]" />
          </h3>
          <p className="text-sm text-[#9ca3af] mb-6">Annual. Bundled. Category exclusive.</p>
          <div className="bg-gradient-to-br from-[#001a14] to-[#0f1217] border border-[#00ff9d]/40 rounded-2xl p-8">
            <div className="flex flex-wrap items-baseline gap-3 mb-2">
              <p className="text-5xl md:text-6xl font-mono font-bold text-[#00ff9d]">$60k+</p>
              <p className="text-lg text-[#9ca3af]">per year</p>
            </div>
            <p className="text-base text-[#d1d5db] mb-6 max-w-3xl">12 month CPM commitment plus always-on placement, quarterly audience intelligence, preferred marketplace placement, and category exclusivity.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {partnershipIncludes.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00ff9d] mt-0.5 shrink-0" />
                  <p className="text-sm text-[#d1d5db] leading-6">{item}</p>
                </div>
              ))}
            </div>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00ff9d] text-[#0f1217] font-bold text-sm hover:bg-[#00e68a] transition-colors">
              Talk Partnership
            </a>
          </div>
        </div>

        <p className="text-xs text-[#6b7280] mt-10 text-center md:text-left">Minimum campaign spend $5k. All campaigns require signed IO. MAP pricing always maintained.</p>
      </div>
    </section>
  )
}
