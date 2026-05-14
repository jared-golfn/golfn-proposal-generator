'use client'

import { motion } from 'framer-motion'

/**
 * DAILY UNIQUE ENTRANTS — Miura Forged Wedge Trio Sweepstakes
 * March 4–25, 2026 (22 days)
 *
 * Source of truth: Miura campaign wrap report (Miura_Report_050526_v11.html)
 * data array — these are the actual Amplitude-measured daily unique entrants.
 * Do not modify without updating the source report.
 *
 * Two days carry special semantic weight:
 *   - M10 (idx 6): IAM launch day. The Braze IAM fired to 2,706 recipients
 *     and converted 43% (1,158 entries within 3 days of send). Daily entrant
 *     count was 175 vs ~150 organic baseline.
 *   - M25 (idx 21): final-day push campaigns. Three coordinated Braze pushes
 *     drove the 448-entrant peak, the highest single-day entry count in
 *     GolfN sweepstakes history.
 */

const DATA = [
  69, 130, 137, 135, 159, 170, 175, 184, 142, 139, 158,
  175, 170, 175, 203, 255, 231, 234, 265, 220, 254, 448,
]

const LABELS = [
  'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11', 'M12', 'M13', 'M14',
  'M15', 'M16', 'M17', 'M18', 'M19', 'M20', 'M21', 'M22', 'M23', 'M24', 'M25',
]

const IAM_DAY_IDX = 6
const PUSH_DAY_IDX = 21
const MAX = Math.max(...DATA)

export function DailyEntrantsChart() {
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
          Daily Cadence &middot; March 4–25, 2026
        </p>
        <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-3">
          The 22 days, plotted.
        </h5>
        <p className="text-sm md:text-base text-[#9ca3af] leading-relaxed max-w-3xl">
          On day 7, a single in-app message lifted entries to <span className="text-white font-semibold">175</span> from the ~150 organic baseline. On day 22, three coordinated final-day push campaigns more than doubled it — peaking at <span className="text-[#00ff9d] font-semibold">448</span>, the highest single-day entry count in GolfN sweepstakes history.
        </p>
      </div>

      {/* CHART */}
      <div className="flex items-end gap-[3px] md:gap-1 h-[160px] md:h-[200px]">
        {DATA.map((value, i) => {
          const heightPct = (value / MAX) * 100
          const isIam = i === IAM_DAY_IDX
          const isPush = i === PUSH_DAY_IDX
          const showLabel = isIam || isPush || value >= 250

          let barClass = 'bg-[#2a3347]'
          let labelColor = 'text-[#6b7280]'
          if (isIam) {
            barClass = 'bg-[#7dd3fc]'
            labelColor = 'text-[#7dd3fc]'
          }
          if (isPush) {
            barClass = 'bg-[#00ff9d]'
            labelColor = 'text-[#00ff9d]'
          }

          return (
            <div
              key={i}
              className="flex-1 flex flex-col items-center justify-end h-full min-w-0"
            >
              {showLabel && (
                <span
                  className={`text-[8px] md:text-[10px] font-bold font-mono tabular-nums leading-none mb-1 whitespace-nowrap ${labelColor}`}
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

      {/* X-AXIS LABELS */}
      <div className="flex gap-[3px] md:gap-1 mt-3">
        {LABELS.map((label, i) => (
          <div key={i} className="flex-1 text-center min-w-0">
            <span className="text-[8px] md:text-[10px] text-[#6b7280] font-mono">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* LEGEND */}
      <div className="flex flex-wrap items-center justify-center gap-x-5 md:gap-x-8 gap-y-2 mt-6 md:mt-8 pt-5 md:pt-6 border-t border-[#2a3347]/40">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#2a3347] rounded-sm" />
          <span className="text-[11px] md:text-xs text-[#9ca3af]">Organic daily entrants</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#7dd3fc] rounded-sm" />
          <span className="text-[11px] md:text-xs text-[#9ca3af]">IAM launch day (Mar 10)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#00ff9d] rounded-sm" />
          <span className="text-[11px] md:text-xs text-[#9ca3af]">Final-day push (Mar 25)</span>
        </div>
      </div>
    </motion.div>
  )
}
