'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface Highlight { tag: string; metric: string; unit?: string; headline: string; body: string; featured?: boolean }

const highlights: Highlight[] = [
  { tag: 'No. 1 \u00b7 Clean revenue', metric: '$0', unit: ' discounts \u00b7 $0 returns', headline: '$21,188 in Hyperice retail revenue with zero discounts and zero returns.', body: '52 units sold across 8 distinct SKUs. No refund risk. No discount erosion. Premium pricing held end-to-end \u2014 the Normatec 3 Leg System moved 9 units at $8,091 in total revenue without a single discount applied.', featured: true },
  { tag: 'No. 2 \u00b7 Premium AOV', metric: '$407', headline: 'Average order value across the Hyperice line.', body: 'Hyperice\u2019s premium price point holds in this audience. $1,099 Normatec Elite Legs, $899 Normatec 3 Leg System, $549 Venom 2 Back \u2014 all moving without promotional mechanics.' },
  { tag: 'No. 3 \u00b7 Incremental reach', metric: '88.5', unit: '%', headline: 'of the audience are non-paying GolfN members.', body: 'Of 1,018 active users in the Hyperice Recovery Trio cohort, 901 had no paid GolfN membership at time of entry. These are incremental customers Hyperice can\u2019t reach through its own paid channels.' },
  { tag: 'No. 4 \u00b7 The program scales', metric: '+209', unit: '%', headline: 'Entrants-per-day growth, sweep 1 \u2192 sweep 2.', body: 'Recovery Bundle (Nov \u201925): 22.6 entrants/day. Recovery Trio (Mar \u201926): 69.7 entrants/day \u2014 in a 30% shorter window. Iteration compounds.' },
  { tag: 'No. 5 \u00b7 International signal', metric: '64', headline: 'UK-England entrants in the Trio cohort.', body: 'A meaningful international beachhead alongside the top US states (CA, TX, OH, PA, IL). If Hyperice is scaling internationally, GolfN has the audience signal to support it.' },
]

export function StandoutHighlights() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#0a1628] to-[#0f2a1e] scroll-mt-8 relative overflow-hidden" id="highlights">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff9d] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff9d] to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-4">Why This Is Working</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Five numbers that matter for partnership.</h2>
          <p className="text-base md:text-lg text-white/60 leading-8 max-w-3xl">Hyperice has been on GolfN for six months. The numbers below are the case for turning this into something bigger.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-8">
          {highlights.map((h, i) => (
            <motion.div key={h.tag} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }} className={`bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 md:p-8 hover:bg-white/[0.06] hover:border-[#00ff9d]/30 transition-all ${h.featured ? 'md:col-span-2 bg-gradient-to-br from-[#00ff9d]/10 to-[#00ff9d]/[0.03] border-[#00ff9d]/30' : ''}`}>
              <span className="inline-block text-[10px] font-bold tracking-[0.14em] uppercase text-[#00ff9d] bg-[#00ff9d]/10 border border-[#00ff9d]/25 rounded-full px-3 py-1 mb-5">{h.tag}</span>
              <p className={`${h.featured ? 'text-5xl md:text-7xl' : 'text-4xl md:text-5xl'} font-bold font-mono text-[#00ff9d] leading-none tabular-nums mb-3`}>
                {h.metric}{h.unit && <span className="text-lg md:text-2xl text-white/50 font-bold ml-0.5">{h.unit}</span>}
              </p>
              <p className="text-sm md:text-base font-bold text-white mb-3 leading-snug">{h.headline}</p>
              <p className="text-xs md:text-sm text-white/55 leading-relaxed">{h.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#00ff9d]/[0.06] border border-[#00ff9d]/20 rounded-2xl p-5 md:p-6 flex items-start gap-4">
          <ArrowRight className="w-6 h-6 text-[#00ff9d] mt-0.5 shrink-0" />
          <p className="text-sm md:text-base text-white/85 leading-7">
            <span className="text-white font-bold">The story for an annual partnership:</span> A verified, non-overlapping golfer audience that buys Hyperice at premium prices, returns nothing, and scales with every iteration. The next step is committing to a program, not buying prizes one-off.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
