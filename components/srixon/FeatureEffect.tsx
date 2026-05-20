'use client'

import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

interface ViewRow { period: string; dates: string; avgViews: string; multiplier: string; context: string; highlight?: boolean; peak?: boolean }

const viewData: ViewRow[] = [
  { period: 'Pre-sweep baseline', dates: 'Mar 10\u201331', avgViews: '85', multiplier: '1.0\u00d7', context: 'Organic marketplace browsing only' },
  { period: 'Spring Collection', dates: 'Apr 6\u201314', avgViews: '312', multiplier: '3.7\u00d7', context: 'Sweepstakes live \u2014 highest-value Srixon prize to date', highlight: true },
  { period: 'Peak 3 days', dates: 'Apr 12\u201314', avgViews: '444', multiplier: '5.3\u00d7', context: 'Final days of Spring Collection \u2014 sweep-to-browse surge', peak: true },
  { period: 'Full sweep window', dates: 'Apr 6\u201321', avgViews: '325', multiplier: '3.8\u00d7', context: 'Spring Collection + Golf Ball Giveaway overlap', highlight: true },
  { period: 'Post-sweep cooldown', dates: 'Apr 22\u201330', avgViews: '319', multiplier: '3.8\u00d7', context: 'Residual \u2014 discovery behavior persists after sweep ends' },
  { period: 'May organic', dates: 'May 1\u201320', avgViews: '109', multiplier: '1.3\u00d7', context: 'Return toward baseline (ZXi7 Blackout launching late Apr)' },
]

export function FeatureEffect() {
  return (
    <section className="py-20 md:py-32 border-t border-[#2a3347]/40 scroll-mt-8" id="feature-effect">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-end justify-between gap-4 mb-8 md:mb-10 pb-4 border-b border-[#2a3347]/40">
          <div>
            <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-2">Part 2B &middot; The Feature Effect</p>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight">Verified golfers seek out Srixon products.</h3>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-[#00ff9d]" />
            <p className="text-3xl md:text-5xl font-mono font-bold text-[#00ff9d] leading-none tabular-nums">3.7&times;</p>
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base md:text-lg text-[#9ca3af] leading-8 max-w-4xl mb-12">
          When GolfN features Srixon in a sweepstakes, verified golfers don&rsquo;t just enter &mdash; <span className="text-white font-semibold">they go find the products</span>. During the Spring Collection window, daily product views jumped from <span className="text-white font-semibold">85 to 312 views/day</span> &mdash; a <span className="text-[#00ff9d] font-bold">3.7&times; increase</span>. These aren&rsquo;t anonymous pageviews from paid traffic. These are verified, round-playing golfers actively browsing Srixon product pages inside the app.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-[#0a0d12] to-[#0f1a14] border border-[#2a3347] rounded-3xl p-8 md:p-12 mb-12">
          <p className="text-xs md:text-sm font-mono tracking-[0.15em] uppercase text-[#00ff9d] text-center mb-10">Feature Effect: Spring Collection Sweepstakes (Apr 6&ndash;14)</p>
          <div className="flex justify-center items-center gap-6 md:gap-12 flex-wrap mb-10">
            <div className="text-center">
              <p className="text-xs text-[#6b7280] mb-1">Baseline</p>
              <p className="text-4xl md:text-6xl font-bold font-mono text-[#6b7280] leading-none tabular-nums">85</p>
              <p className="text-xs text-[#4b5563] mt-1">views/day</p>
            </div>
            <div className="text-2xl text-[#00ff9d] font-light">&rarr;</div>
            <div className="text-center">
              <p className="text-xs text-[#00ff9d] font-semibold mb-1">During Feature</p>
              <p className="text-6xl md:text-8xl font-bold font-mono text-[#00ff9d] leading-none tabular-nums">312</p>
              <p className="text-xs text-[#6b7280] mt-1">views/day</p>
            </div>
            <div className="text-2xl text-[#00ff9d] font-light">&rarr;</div>
            <div className="text-center">
              <p className="text-xs text-[#9ca3af] mb-1">Peak Days</p>
              <p className="text-5xl md:text-7xl font-bold font-mono text-white leading-none tabular-nums">444</p>
              <p className="text-xs text-[#4b5563] mt-1">views/day</p>
            </div>
          </div>
          <div className="max-w-lg mx-auto space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#6b7280] w-16 text-right shrink-0">Baseline</span>
              <div className="h-6 rounded-md bg-[#2a3347]/60" style={{ width: '15%' }} />
              <span className="text-xs font-mono text-[#6b7280]">85/day</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#00ff9d] w-16 text-right shrink-0">Featured</span>
              <div className="h-6 rounded-md bg-[#00ff9d]" style={{ width: '55%' }} />
              <span className="text-xs font-mono text-[#00ff9d] font-bold">312/day</span>
              <span className="text-lg font-bold text-white ml-2">3.7&times;</span>
            </div>
          </div>
          <p className="text-xs text-[#6b7280] text-center mt-8">Peak days (Apr 12&ndash;14) hit <span className="text-white font-semibold">5.3&times; baseline</span> &mdash; 444 verified-golfer product views per day.</p>
        </motion.div>

        <p className="text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-3">Daily Product View Averages: Before &rarr; During &rarr; After</p>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-[#2a3347] overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="bg-[#1a1f2e] border-b border-[#2a3347]">
                <th className="text-left px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Period</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Dates</th>
                <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Avg Views/Day</th>
                <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">vs. Baseline</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Context</th>
              </tr></thead>
              <tbody>
                {viewData.map((row, i) => (
                  <tr key={i} className={`border-b border-[#2a3347]/50 ${row.peak ? 'bg-[#00ff9d]/10' : row.highlight ? 'bg-[#00ff9d]/5' : i % 2 === 0 ? 'bg-[#0f1217]' : 'bg-[#131720]'}`}>
                    <td className="px-4 py-3 text-[#d1d5db] font-medium">{row.period}</td>
                    <td className="px-4 py-3 text-[#6b7280] text-xs">{row.dates}</td>
                    <td className={`px-4 py-3 text-right font-mono tabular-nums font-bold ${row.highlight || row.peak ? 'text-[#00ff9d] text-lg' : 'text-white'}`}>{row.avgViews}</td>
                    <td className={`px-4 py-3 text-right font-mono tabular-nums font-bold ${row.highlight || row.peak ? 'text-[#00ff9d]' : 'text-[#6b7280]'}`}>{row.multiplier}</td>
                    <td className="px-4 py-3 text-[#6b7280] text-xs">{row.context}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        <p className="text-xs text-[#6b7280] mb-10">Baseline = avg daily combined Srixon + Cleveland product_viewed events before sweepstakes activity (Mar 10&ndash;31). Source: Amplitude.</p>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#00ff9d]/5 border-2 border-[#00ff9d]/20 rounded-2xl p-6 md:p-8">
          <p className="text-lg md:text-xl font-bold text-white mb-3">The bottom line: featuring drives verified product discovery.</p>
          <p className="text-sm md:text-base text-[#d1d5db] leading-7">
            Every time GolfN runs a Srixon sweepstakes, product discovery jumps <span className="text-white font-semibold">3&ndash;5&times; above baseline</span>. These aren&rsquo;t passive ad impressions &mdash; these are verified golfers actively seeking out Srixon product pages, reading specs, and comparing models. The effect persists after the sweepstakes ends (post-sweep average stayed at 3.8&times; baseline), meaning featuring creates sustained product awareness with a first-party audience you can&rsquo;t reach this way anywhere else.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
