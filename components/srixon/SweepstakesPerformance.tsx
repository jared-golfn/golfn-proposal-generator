'use client'

import { motion } from 'framer-motion'

interface MetricCard { value: string; label: string }

const topMetrics: MetricCard[] = [
  { value: '1.61M', label: 'Total sweepstakes entries' },
  { value: '14,511', label: 'Unique entrants' },
  { value: '~111', label: 'Avg. entries per entrant' },
  { value: '6', label: 'Campaigns run' },
]

interface SweepRow { name: string; status: string; entries: string; entrants: string; ratio: string; period: string; isTotal?: boolean }

const sweepData: SweepRow[] = [
  { name: 'Srixon Dozen Golf Balls', status: 'Drawn', entries: '81,385', entrants: '1,515', ratio: '53.7', period: 'Mar 24 – Apr 7' },
  { name: 'Srixon Spring Collection', status: 'Drawn', entries: '500,269', entrants: '3,856', ratio: '129.7', period: 'Apr 6 – Apr 14' },
  { name: 'Srixon Dozen Golf Balls', status: 'Drawn', entries: '104,912', entrants: '2,152', ratio: '48.8', period: 'Apr 7 – Apr 21' },
  { name: 'Srixon Dozen Golf Balls', status: 'Drawn', entries: '101,884', entrants: '1,560', ratio: '65.3', period: 'Apr 26 – May 10' },
  { name: 'Srixon Dozen Golf Balls', status: 'Live', entries: '64,030', entrants: '964', ratio: '66.4', period: 'May 2026' },
  { name: 'Srixon ZXi7 Blackout Collection', status: 'Live', entries: '756,002', entrants: '4,464', ratio: '169.4', period: 'Apr 29 – May 27' },
  { name: 'Total (6 campaigns)', status: '', entries: '1,608,482', entrants: '14,511', ratio: '110.8', period: '', isTotal: true },
]

export function SweepstakesPerformance() {
  return (
    <section className="py-20 md:py-32 border-t border-[#2a3347]/40 scroll-mt-8" id="sweepstakes">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-end justify-between gap-4 mb-8 md:mb-10 pb-4 border-b border-[#2a3347]/40">
          <div>
            <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-2">Part 1 &middot; Sweepstakes Performance</p>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight">6 campaigns. 1.61M entries.</h3>
          </div>
          <div className="flex items-baseline gap-2 shrink-0">
            <p className="text-3xl md:text-5xl font-mono font-bold text-[#00ff9d] leading-none tabular-nums">14,511</p>
            <p className="text-xs md:text-sm font-mono text-[#9ca3af] uppercase tracking-[0.18em] pb-0.5">Entrants</p>
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base md:text-lg text-[#9ca3af] leading-8 max-w-4xl mb-10">
          Across six Srixon sweepstakes &mdash; four Golf Ball Giveaways, the Spring Collection, and the ZXi7 Blackout Collection &mdash; GolfN generated{' '}
          <span className="text-white font-semibold">1,608,482 total entries</span> from{' '}
          <span className="text-white font-semibold">14,511 unique entrants</span>. The premium equipment sweepstakes drove the highest volume.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
          {topMetrics.map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.4 }} className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-5 text-center">
              <p className="text-2xl md:text-3xl font-mono font-bold text-white leading-none mb-2 tabular-nums">{m.value}</p>
              <p className="text-xs md:text-sm text-[#d1d5db] font-semibold leading-tight">{m.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-[#2a3347] overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1a1f2e] border-b border-[#2a3347]">
                  <th className="text-left px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Sweepstakes</th>
                  <th className="text-left px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Status</th>
                  <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Total Entries</th>
                  <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Unique Entrants</th>
                  <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Entries/Entrant</th>
                  <th className="text-left px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Period</th>
                </tr>
              </thead>
              <tbody>
                {sweepData.map((row, i) => (
                  <tr key={i} className={`border-b border-[#2a3347]/50 ${row.isTotal ? 'bg-[#00ff9d]/5' : i % 2 === 0 ? 'bg-[#0f1217]' : 'bg-[#131720]'}`}>
                    <td className={`px-4 py-3 ${row.isTotal ? 'font-bold text-white' : 'text-[#d1d5db] font-medium'}`}>{row.name}</td>
                    <td className="px-4 py-3">{row.status && <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${row.status === 'Live' ? 'bg-[#00ff9d]/15 text-[#00ff9d]' : 'bg-[#2a3347] text-[#9ca3af]'}`}>{row.status}</span>}</td>
                    <td className={`px-4 py-3 text-right font-mono tabular-nums ${row.isTotal ? 'font-bold text-white' : 'text-white font-semibold'}`}>{row.entries}</td>
                    <td className={`px-4 py-3 text-right font-mono tabular-nums ${row.isTotal ? 'font-bold text-[#00ff9d]' : 'text-[#00ff9d] font-semibold'}`}>{row.entrants}</td>
                    <td className={`px-4 py-3 text-right font-mono tabular-nums ${row.isTotal ? 'font-bold text-white' : 'text-[#d1d5db]'}`}>{row.ratio}</td>
                    <td className="px-4 py-3 text-[#6b7280] text-xs">{row.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        <p className="text-xs text-[#6b7280] mb-10">Unique entrants are summed across sweepstakes. Two campaigns remain live at time of reporting.</p>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#00ff9d]/5 border border-[#00ff9d]/20 rounded-2xl p-6 md:p-8">
          <p className="text-base md:text-lg font-bold text-white mb-3">Why this matters</p>
          <p className="text-sm md:text-base text-[#d1d5db] leading-7">
            The ZXi7 Blackout Collection has generated <span className="text-white font-semibold">756,002 entries</span> from{' '}
            <span className="text-white font-semibold">4,464 unique entrants</span> while still live &mdash; the highest-volume Srixon campaign to date with an average of{' '}
            <span className="text-white font-semibold">169 entries per entrant</span>. The four recurring Golf Ball Giveaways collectively produced{' '}
            <span className="text-white font-semibold">352,211 entries</span> from <span className="text-white font-semibold">6,191 entrants</span>, demonstrating sustained engagement with the Srixon brand across both premium equipment and consumables.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
