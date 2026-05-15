'use client'

import { motion } from 'framer-motion'

/**
 * STRIPPED DAILY ENTRANTS — Forged Iron Case Study (Public)
 *
 * Same 22-day Miura sweepstakes data as the /8am DailyEntrantsChart, but
 * with mechanism callouts removed for the public partners page:
 *   - No "IAM launch day" (idx 6) cyan highlight
 *   - No "Final-day push" (idx 21) push-trigger label
 * Only the magnitude of the final-day peak is preserved as the visual hook.
 *
 * The point this version makes to a prospect: the campaign curve shape and
 * the magnitude at the close. The how — which specific levers fired and
 * when — stays internal.
 */

const DATA = [
  69, 130, 137, 135, 159, 170, 175, 184, 142, 139, 158,
  175, 170, 175, 203, 255, 231, 234, 265, 220, 254, 448,
]

const PEAK_IDX = 21
const MAX = Math.max(...DATA)

export function StrippedEntrantsChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-[#0a0d12] border border-[#2a3347] rounded-2xl p-6 md:p-10 mt-8"
    >
      {/* HEADER */}
      <div className="mb-6 md:mb-8">
        <p className="text-xs md:text-sm font-mono tracking-[0.18em] uppercase text-[#c5a572] mb-3">
          Entries per day &middot; 22-day flight
        </p>
        <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-3">
          The 22 days, plotted.
        </h5>
        <p className="text-sm md:text-base text-[#9ca3af] leading-relaxed max-w-3xl">
          Daily verified entries climbed steadily and closed at <span className="text-[#00ff9d] font-semibold">448</span> on the final day — the highest single-day entry count in GolfN sweepstakes history.
        </p>
      </div>

      {/* CHART */}
      <div className="flex items-end gap-[3px] md:gap-1 h-[160px] md:h-[200px]">
        {DATA.map((value, i) => {
          const heightPct = (value / MAX) * 100
          const isPeak = i === PEAK_IDX
          const showLabel = isPeak || value >= 250

          const barClass = isPeak ? 'bg-[#00ff9d]' : 'bg-[#2a3347]'
          const labelColor = isPeak ? 'text-[#00ff9d]' : 'text-[#6b7280]'

          return (
            <div key={i} className="flex-1 flex flex-col items-center justify-end h-full min-w-0">
              {showLabel && (
                <span className={`text-[8px] md:text-[10px] font-bold font-mono tabular-nums leading-none mb-1 whitespace-nowrap ${labelColor}`}>
                  {value}
                </span>
              )}
              <div className={`w-full rounded-t-sm ${barClass}`} style={{ height: `${heightPct}%` }} />
            </div>
          )
        })}
      </div>

      {/* X-AXIS — show first, mid, last only to avoid clutter */}
      <div className="relative mt-3 h-4">
        <span className="absolute left-0 text-[10px] text-[#6b7280] font-mono">Day 1</span>
        <span className="absolute left-1/2 -translate-x-1/2 text-[10px] text-[#6b7280] font-mono">Day 11</span>
        <span className="absolute right-0 text-[10px] text-[#6b7280] font-mono">Day 22</span>
      </div>

      {/* LEGEND */}
      <div className="flex flex-wrap items-center justify-center gap-x-5 md:gap-x-8 gap-y-2 mt-6 md:mt-8 pt-5 md:pt-6 border-t border-[#2a3347]/40">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#2a3347] rounded-sm" />
          <span className="text-[11px] md:text-xs text-[#9ca3af]">Daily entries</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#00ff9d] rounded-sm" />
          <span className="text-[11px] md:text-xs text-[#9ca3af]">Peak day</span>
        </div>
      </div>
    </motion.div>
  )
}
