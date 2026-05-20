'use client'

import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

interface MetricCard { value: string; label: string; sub?: string }

const heroMetrics: MetricCard[] = [
  { value: '$66,979', label: 'Total marketplace sales', sub: '372 net items \u00b7 Srixon $47.9K + Cleveland $19.0K' },
  { value: '1.61M', label: 'Sweepstakes entries', sub: '6 campaigns \u00b7 14,511 verified golfers' },
  { value: '$42,238', label: 'Media value delivered', sub: '2.85M impressions at conservative floor rates' },
  { value: '2.85M', label: 'Total brand impressions', sub: 'Paid, in-app &amp; organic channels' },
]

export function ExecutiveSummary() {
  return (
    <section className="py-20 md:py-32 border-t border-[#2a3347]/40 scroll-mt-8" id="summary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12">
          <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-4">Executive Summary</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">The Partnership in Numbers</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-[#0a0d12] border border-[#2a3347] rounded-3xl p-8 md:p-12 mb-12 text-center">
          <p className="text-sm md:text-base text-[#9ca3af] mb-4 tracking-wide">Across sweepstakes, paid media, in-app placements, organic channels &amp; marketplace sales:</p>
          <p className="text-2xl md:text-4xl font-bold leading-snug">
            <span className="text-[#00ff9d]">$67K</span> revenue&ensp;&middot;&ensp;
            <span className="text-[#00ff9d]">$42K</span> media value&ensp;&middot;&ensp;
            <span className="text-[#00ff9d]">1.6M</span> entries&ensp;&middot;&ensp;
            <span className="text-[#00ff9d]">2.85M</span> impressions
          </p>
          <p className="text-sm text-[#6b7280] mt-4">First brand on the GolfN Points Exchange &mdash; delivering awareness, engagement &amp; conversion from day one.</p>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base md:text-lg text-[#9ca3af] leading-8 max-w-4xl mb-8">
          Srixon and Cleveland were GolfN&rsquo;s inaugural Points Exchange Marketplace partners, launching August&nbsp;1,&nbsp;2025. Over the partnership period, the combined brand family generated{' '}
          <span className="text-white font-semibold">$66,979 in total marketplace sales</span> across 372 net items sold,{' '}
          <span className="text-white font-semibold">1,608,482 sweepstakes entries</span> from <span className="text-white font-semibold">14,511 verified golfers</span> across six campaigns, an estimated{' '}
          <span className="text-white font-semibold">20,130 in-app product views</span>, and{' '}
          <span className="text-white font-semibold">2.85M brand impressions</span> representing{' '}
          <span className="text-white font-semibold">$42,238 in conservative media value</span> &mdash; all funded by GolfN and delivered directly to the Srixon/Cleveland brand.
        </motion.p>

        {/* 1st-party verified data callout */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-[#001a14] to-[#002a1f] border border-[#00ff9d]/20 rounded-2xl p-6 md:p-8 mb-12">
          <div className="flex items-start gap-3 mb-3">
            <Shield className="w-5 h-5 text-[#00ff9d] mt-0.5 shrink-0" />
            <p className="text-base md:text-lg font-bold text-white">Every number on this page is first-party verified data.</p>
          </div>
          <p className="text-sm md:text-base text-[#d1d5db] leading-7 pl-8">
            GolfN users aren&rsquo;t inferred golfers from Meta interest targeting or modeled audiences. They&rsquo;re real people who log GPS-confirmed rounds, carry a verified handicap, and play on real courses. When 14,511 of them enter a Srixon sweepstakes, that&rsquo;s 14,511 confirmed golfers who actively chose to engage with the brand &mdash; not a lookalike audience, not a panel estimate.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {heroMetrics.map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }} className="bg-[#1a1f2e]/60 border border-[#2a3347] rounded-2xl p-6 md:p-7 text-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-[#00ff9d] leading-none tabular-nums mb-3">{m.value}</p>
              <p className="text-sm md:text-base text-white font-semibold leading-tight mb-1">{m.label}</p>
              {m.sub && <p className="text-xs md:text-sm text-[#6b7280] leading-snug mt-1">{m.sub}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
