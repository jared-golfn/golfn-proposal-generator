'use client'

import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

interface MetricCard { value: string; label: string; sub: string }

const heroMetrics: MetricCard[] = [
  { value: '2,141', label: 'Verified golfers entered sweepstakes', sub: 'Cumulative across 2 campaigns \u00b7 195,751 total entries' },
  { value: '52', label: 'Hyperice units sold', sub: 'Across 8 distinct SKUs \u00b7 $0 discounts \u00b7 $0 returns' },
  { value: '$21,188', label: 'Retail revenue through GolfN', sub: '$407 AOV \u00b7 Net $20,563 \u00b7 Premium pricing held' },
  { value: '5.07M', label: 'Hyperice points redeemed', sub: 'Across 5 actively-redeemed SKUs (Mar\u2013May 2026)' },
]

export function ExecutiveSummary() {
  return (
    <section className="py-20 md:py-32 border-t border-[#2a3347]/40 scroll-mt-8" id="summary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12">
          <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-4">Executive Summary</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Six Months of Hyperice on GolfN</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-[#0a0d12] border border-[#2a3347] rounded-3xl p-8 md:p-12 mb-12 text-center">
          <p className="text-sm md:text-base text-[#9ca3af] mb-4 tracking-wide">Two sweepstakes, marketplace commerce &amp; verified-golfer audience data:</p>
          <p className="text-2xl md:text-4xl font-bold leading-snug">
            <span className="text-[#00ff9d]">2,141</span> verified golfers&ensp;&middot;&ensp;
            <span className="text-[#00ff9d]">$21K</span> revenue&ensp;&middot;&ensp;
            <span className="text-[#00ff9d]">$0</span> returns&ensp;&middot;&ensp;
            <span className="text-[#00ff9d]">$407</span> AOV
          </p>
          <p className="text-sm text-[#6b7280] mt-4">Nov 2025 &ndash; Apr 2026 &mdash; all first-party in-app data and CRM logs.</p>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base md:text-lg text-[#9ca3af] leading-8 max-w-4xl mb-8">
          Hyperice has been a GolfN Points Exchange partner since October 2025 and a two-time sweepstakes brand. Over six months, the partnership generated{' '}
          <span className="text-white font-semibold">$21,188 in retail revenue</span> across 52 units with{' '}
          <span className="text-white font-semibold">zero discounts and zero returns</span>,{' '}
          <span className="text-white font-semibold">2,141 verified golfers</span> entering sweepstakes across two campaigns, and{' '}
          <span className="text-white font-semibold">655K+ sweepstakes page views</span> &mdash; all from first-party verified golfer data.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-[#001a14] to-[#002a1f] border border-[#00ff9d]/20 rounded-2xl p-6 md:p-8 mb-12">
          <div className="flex items-start gap-3 mb-3">
            <Shield className="w-5 h-5 text-[#00ff9d] mt-0.5 shrink-0" />
            <p className="text-base md:text-lg font-bold text-white">Every number on this page is first-party verified data.</p>
          </div>
          <p className="text-sm md:text-base text-[#d1d5db] leading-7 pl-8">
            GolfN users aren&rsquo;t inferred golfers from Meta interest targeting. They&rsquo;re real people who log GPS-confirmed rounds, carry a verified handicap, and play on real courses. When 2,141 of them enter a Hyperice sweepstakes, that&rsquo;s 2,141 confirmed golfers who actively chose to engage with the brand &mdash; not a lookalike audience, not a panel estimate.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {heroMetrics.map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }} className="bg-[#1a1f2e]/60 border border-[#2a3347] rounded-2xl p-6 md:p-7 text-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-[#00ff9d] leading-none tabular-nums mb-3">{m.value}</p>
              <p className="text-sm md:text-base text-white font-semibold leading-tight mb-1">{m.label}</p>
              <p className="text-xs md:text-sm text-[#6b7280] leading-snug mt-1">{m.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
