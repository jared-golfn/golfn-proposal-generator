'use client'

import { motion } from 'framer-motion'

/**
 * STRIPPED DAILY PRODUCT VIEWS — Forged Iron Case Study (Public)
 *
 * Same 50-day Miura marketplace data as the /8am DailyProductViewsChart,
 * but with mechanism callouts removed for the public page:
 *   - No "sweepstakes closed Mar 25" trigger explanation
 *   - No "day after sweep closed" label on the peak (idx 9)
 * Visual hierarchy of baseline / sustained / peak is preserved because
 * the *shape* of sustained engagement is what makes the case study, and
 * that's a pattern competitors can't replicate just by seeing the chart.
 */

const DATA = [
  7, 46, 26, 22, 62, 49, 36, 36, 40,
  398,
  365, 265, 266, 283, 223, 234, 229, 232, 167, 252,
  226, 286, 331, 279, 322, 275, 370, 380, 346, 286,
  266, 330, 280, 301, 270, 292, 188, 195, 172, 190,
  265, 249, 246, 232, 241, 133, 204, 202, 249, 106,
]

const PEAK_IDX = 9
const MAX = Math.max(...DATA)

export function StrippedViewsChart() {
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
          Marketplace views per day &middot; 50-day window
        </p>
        <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-3">
          The afterglow.
        </h5>
        <p className="text-sm md:text-base text-[#9ca3af] leading-relaxed max-w-3xl">
          Marketplace product views peaked at <span className="text-[#00ff9d] font-semibold">398</span> in a single day and sustained <span className="text-white font-semibold">200&ndash;380 views per day</span> for the next seven weeks. The audience captured during the sweep kept shopping, with no additional paid media.
        </p>
      </div>

      {/* CHART */}
      <div className="flex items-end gap-[2px] md:gap-1 h-[140px] md:h-[180px]">
        {DATA.map((value, i) => {
          const heightPct = (value / MAX) * 100
          const isPeak = i === PEAK_IDX
          const isSustained = value >= 200 && !isPeak
          const showLabel = isPeak || value >= 300

          let barClass = 'bg-[#2a3347]'
          let labelColor = 'text-[#6b7280]'
          if (isSustained) {
            barClass = 'bg-[#3a8060]'
          }
          if (isPeak) {
            barClass = 'bg-[#00ff9d]'
            labelColor = 'text-[#00ff9d]'
          }

          return (
            <div key={i} className="flex-1 flex flex-col items-center justify-end h-full min-w-0">
              {showLabel && (
                <span className={`text-[7px] md:text-[9px] font-bold font-mono tabular-nums leading-none mb-1 whitespace-nowrap ${labelColor}`}>
                  {value}
                </span>
              )}
              <div className={`w-full rounded-t-sm ${barClass}`} style={{ height: `${heightPct}%` }} />
            </div>
          )
        })}
      </div>

      {/* X-AXIS — generic week markers, no specific dates that hint at mechanism */}
      <div className="relative h-5 mt-3 border-t border-[#2a3347]/40 pt-2">
        <span className="absolute left-0 top-2 text-[10px] text-[#6b7280] font-mono">Week 1</span>
        <span className="absolute left-1/4 -translate-x-1/2 top-2 text-[10px] text-[#6b7280] font-mono">Week 3</span>
        <span className="absolute left-1/2 -translate-x-1/2 top-2 text-[10px] text-[#6b7280] font-mono">Week 5</span>
        <span className="absolute left-3/4 -translate-x-1/2 top-2 text-[10px] text-[#6b7280] font-mono">Week 6</span>
        <span className="absolute right-0 top-2 text-[10px] text-[#6b7280] font-mono">Week 7</span>
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
          <span className="text-[11px] md:text-xs text-[#9ca3af]">Peak</span>
        </div>
      </div>
    </motion.div>
  )
}
