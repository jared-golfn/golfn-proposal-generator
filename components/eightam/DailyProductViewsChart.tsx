'use client'

import { motion } from 'framer-motion'

/**
 * DAILY PRODUCT VIEWS — Miura Marketplace (Points Exchange)
 * March 17 – May 5, 2026 (50 days)
 *
 * Source of truth: Miura campaign wrap report (Miura_Report_050526_v11.html).
 * Amplitude `product_viewed` grouped by `product.model`, filtered to Miura
 * SKUs, summed per day. Do not modify without updating the source report.
 *
 * The story this chart tells (and why it's in Act 2, not Act 1):
 *
 *   The sweepstakes closed on Mar 25. The very next day — Mar 26, idx 9 —
 *   Miura product views in the marketplace spiked to 398, the peak of the
 *   entire flight. Then engagement *stayed elevated*, sustaining 200–380
 *   views/day through April with no additional paid media or marketing
 *   spend. This is the audience captured during the sweep continuing to
 *   shop for 50 more days afterward.
 *
 *   That's the case-study insight 8AM needs to see: GolfN sweepstakes are
 *   not single-burst campaigns. They build a durable audience that keeps
 *   compounding in the marketplace long after the entry window closes.
 */

const DATA = [
  // Mar 17–25 (idx 0–8) — pre-spike baseline, sweepstakes still running.
  // Product views in Exchange were low because attention was on entries.
  7, 46, 26, 22, 62, 49, 36, 36, 40,
  // Mar 26 (idx 9) — peak day, 398 views. Day after sweep closed.
  398,
  // Mar 27 – May 5 (idx 10–49) — sustained engagement tail.
  365, 265, 266, 283, 223, 234, 229, 232, 167, 252,
  226, 286, 331, 279, 322, 275, 370, 380, 346, 286,
  266, 330, 280, 301, 270, 292, 188, 195, 172, 190,
  265, 249, 246, 232, 241, 133, 204, 202, 249, 106,
]

const PEAK_IDX = 9

const TICKS = [
  { idx: 0,  label: 'Mar 17' },
  { idx: 9,  label: 'Mar 26' },
  { idx: 15, label: 'Apr 1' },
  { idx: 29, label: 'Apr 15' },
  { idx: 43, label: 'Apr 29' },
  { idx: 49, label: 'May 5' },
]

const MAX = Math.max(...DATA)

export function DailyProductViewsChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-[#0a0d12] border border-[#2a3347] rounded-2xl p-6 md:p-10 mt-10 md:mt-12"
    >
      {/* HEADER */}
      <div className="mb-6 md:mb-8">
        <p className="text-xs md:text-sm font-mono tracking-[0.18em] uppercase text-[#c5a572] mb-3">
          Daily Cadence &middot; March 17 – May 5, 2026
        </p>
        <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-3">
          The afterglow.
        </h5>
        <p className="text-sm md:text-base text-[#9ca3af] leading-relaxed max-w-3xl">
          The sweepstakes closed Mar 25. The day after, Miura product views in the marketplace spiked to <span className="text-[#00ff9d] font-semibold">398</span>. Engagement sustained <span className="text-white font-semibold">200–380 views/day through April</span> — the audience captured during the sweep continued shopping for 50 more days, with no additional paid media.
        </p>
      </div>

      {/* CHART */}
      <div className="flex items-end gap-[2px] md:gap-1 h-[140px] md:h-[180px]">
        {DATA.map((value, i) => {
          const heightPct = (value / MAX) * 100
          const isPeak = i === PEAK_IDX
          const isSustained = value >= 200 && !isPeak
          const showLabel = isPeak || value >= 250

          let barClass = 'bg-[#2a3347]' // low / baseline
          let labelColor = 'text-[#6b7280]'
          if (isSustained) {
            barClass = 'bg-[#3a8060]' // muted teal — the sustained engagement period
          }
          if (isPeak) {
            barClass = 'bg-[#00ff9d]' // vibrant — peak day Mar 26
            labelColor = 'text-[#00ff9d]'
          }

          return (
            <div
              key={i}
              className="flex-1 flex flex-col items-center justify-end h-full min-w-0"
            >
              {showLabel && (
                <span
                  className={`text-[7px] md:text-[9px] font-bold font-mono tabular-nums leading-none mb-1 whitespace-nowrap ${labelColor}`}
                >
                  {value}
                </span>
              )}
              <div
                className={`w-full rounded-t-sm ${barClass}`}
                style={{ height: `${heightPct}%` }}
              />
            </div>
          )
        })}
      </div>

      {/* X-AXIS TICKS — absolutely positioned at fixed % so labels don't
          collide with the (very thin) 50-bar grid. First/last tick anchor
          to the edge instead of centering. */}
      <div className="relative h-5 mt-3 border-t border-[#2a3347]/40 pt-2">
        {TICKS.map((tick) => {
          const pct = (tick.idx / (DATA.length - 1)) * 100
          let transform = 'translateX(-50%)'
          if (tick.idx === 0) transform = 'translateX(0)'
          else if (tick.idx === DATA.length - 1) transform = 'translateX(-100%)'
          return (
            <span
              key={tick.idx}
              className="absolute top-2 text-[9px] md:text-[11px] text-[#6b7280] font-mono whitespace-nowrap"
              style={{ left: `${pct}%`, transform }}
            >
              {tick.label}
            </span>
          )
        })}
      </div>

      {/* LEGEND */}
      <div className="flex flex-wrap items-center justify-center gap-x-5 md:gap-x-8 gap-y-2 mt-8 md:mt-10 pt-5 md:pt-6 border-t border-[#2a3347]/40">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#2a3347] rounded-sm" />
          <span className="text-[11px] md:text-xs text-[#9ca3af]">&lt; 200 views</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#3a8060] rounded-sm" />
          <span className="text-[11px] md:text-xs text-[#9ca3af]">Sustained (200+)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#00ff9d] rounded-sm" />
          <span className="text-[11px] md:text-xs text-[#9ca3af]">Peak (Mar 26, 398)</span>
        </div>
      </div>
    </motion.div>
  )
}
