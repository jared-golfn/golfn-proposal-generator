'use client'

import { motion } from 'framer-motion'

interface CompRow { metric: string; bundle: string; trio: string; change: string; positive?: boolean }

const compData: CompRow[] = [
  { metric: 'Verified golfers', bundle: '678', trio: '1,463', change: '+116%', positive: true },
  { metric: 'Total entries', bundle: '83,682', trio: '112,069', change: '+34%', positive: true },
  { metric: 'Avg entries / golfer', bundle: '123.4', trio: '76.6', change: '\u221238%' },
  { metric: 'Flight length', bundle: '30 days', trio: '21 days', change: '\u22129 days' },
  { metric: 'Golfers per day', bundle: '22.6', trio: '69.7', change: '+209%', positive: true },
  { metric: 'Entries per day', bundle: '2,789', trio: '5,337', change: '+91%', positive: true },
  { metric: 'Tickets share of entries', bundle: '65.8%', trio: '79.2%', change: '+13.4 pts' },
  { metric: 'Prize retail value', bundle: '$2,000', trio: '$1,700', change: '\u2212$300' },
]

interface CampaignCard { name: string; dates: string; days: string; prize: string; golfers: string; entries: string; points: string; tickets: string; free: string }

const campaigns: CampaignCard[] = [
  { name: 'Hyperice Recovery Bundle', dates: 'Nov 18 \u2013 Dec 17, 2025', days: '30 days', prize: 'Normatec 3 + Venom 2 Back + Hypervolt 2 Go \u00b7 $2,000 retail', golfers: '678', entries: '83,682', points: '11,342', tickets: '55,028', free: '17,312' },
  { name: '2026 Hyperice Recovery Trio', dates: 'Mar 12 \u2013 Apr 1, 2026', days: '21 days', prize: 'Hypervolt 3 + Normatec 3 Legs + Venom Back 2 \u00b7 $1,700 retail', golfers: '1,463', entries: '112,069', points: '6,146', tickets: '88,753', free: '17,170' },
]

export function SweepstakesPerformance() {
  return (
    <section className="py-20 md:py-32 border-t border-[#2a3347]/40 scroll-mt-8" id="sweepstakes">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-end justify-between gap-4 mb-8 md:mb-10 pb-4 border-b border-[#2a3347]/40">
          <div>
            <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-2">Sweepstakes Performance</p>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight">2,141 verified golfers. Two campaigns.</h3>
          </div>
          <div className="flex items-baseline gap-2 shrink-0">
            <p className="text-3xl md:text-5xl font-mono font-bold text-[#00ff9d] leading-none tabular-nums">195K</p>
            <p className="text-xs md:text-sm font-mono text-[#9ca3af] uppercase tracking-[0.18em] pb-0.5">Entries</p>
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base md:text-lg text-[#9ca3af] leading-8 max-w-4xl mb-10">
          Two Hyperice sweepstakes delivered <span className="text-white font-semibold">195,751 total entries</span> from{' '}
          <span className="text-white font-semibold">2,141 verified golfers</span> &mdash; real people with GPS-confirmed rounds who actively chose to engage with Hyperice recovery products. The second campaign grew <span className="text-white font-semibold">+209% in golfers-per-day</span> in a shorter window.
        </motion.p>

        {/* Entry composition bar */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-3">Total Entries &middot; 195,751</p>
          <div className="flex h-9 rounded-lg overflow-hidden gap-0.5">
            <div className="flex items-center justify-center text-white text-xs font-bold bg-[#1a5c38]" style={{ width: '73.5%' }}>Tickets &middot; 143,781 (73.5%)</div>
            <div className="flex items-center justify-center text-white text-xs font-bold bg-[#2d7a4a]" style={{ width: '17.6%' }}>Free &middot; 17.6%</div>
            <div className="flex items-center justify-center text-white text-xs font-bold bg-[#4a9962]" style={{ width: '8.9%' }}>Pts</div>
          </div>
          <p className="text-xs text-[#6b7280] mt-2">Tickets = earned via gameplay &amp; check-ins &middot; Free = daily/promotional entries &middot; Points = redeemed from in-app currency</p>
        </motion.div>

        {/* Campaign cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-12">
          {campaigns.map((c) => (
            <motion.div key={c.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-6 md:p-7 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00ff9d] to-[#1a5c38]" />
              <div className="flex justify-between items-start gap-3 mb-3">
                <p className="text-base md:text-lg font-bold text-white leading-tight">{c.name}</p>
                <span className="text-xs text-[#6b7280] font-medium bg-[#0f1217] px-2.5 py-1 rounded-md shrink-0">{c.days}</span>
              </div>
              <p className="text-xs text-[#6b7280] mb-2">{c.dates}</p>
              <p className="text-xs text-[#9ca3af] mb-5 leading-relaxed">{c.prize}</p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#2a3347]">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold font-mono text-[#00ff9d] leading-none tabular-nums">{c.golfers}</p>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#6b7280] mt-1">Verified Golfers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold font-mono text-white leading-none tabular-nums">{c.entries}</p>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#6b7280] mt-1">Total Entries</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="bg-[#0f1217] rounded-lg p-2.5 text-center">
                  <p className="text-sm font-bold font-mono text-white tabular-nums">{c.points}</p>
                  <p className="text-[9px] font-mono uppercase text-[#6b7280] tracking-wider mt-0.5">Points</p>
                </div>
                <div className="bg-[#0f1217] rounded-lg p-2.5 text-center">
                  <p className="text-sm font-bold font-mono text-white tabular-nums">{c.tickets}</p>
                  <p className="text-[9px] font-mono uppercase text-[#6b7280] tracking-wider mt-0.5">Tickets</p>
                </div>
                <div className="bg-[#0f1217] rounded-lg p-2.5 text-center">
                  <p className="text-sm font-bold font-mono text-white tabular-nums">{c.free}</p>
                  <p className="text-[9px] font-mono uppercase text-[#6b7280] tracking-wider mt-0.5">Free</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <p className="text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-3">Side-by-Side Comparison</p>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-[#2a3347] overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="bg-[#1a1f2e] border-b border-[#2a3347]">
                <th className="text-left px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Metric</th>
                <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Recovery Bundle (Nov &rsquo;25)</th>
                <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Recovery Trio (Mar &rsquo;26)</th>
                <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Change</th>
              </tr></thead>
              <tbody>
                {compData.map((row, i) => (
                  <tr key={i} className={`border-b border-[#2a3347]/50 ${i % 2 === 0 ? 'bg-[#0f1217]' : 'bg-[#131720]'}`}>
                    <td className="px-4 py-3 text-[#d1d5db] font-semibold">{row.metric}</td>
                    <td className="px-4 py-3 text-right font-mono tabular-nums text-white font-bold">{row.bundle}</td>
                    <td className="px-4 py-3 text-right font-mono tabular-nums text-white font-bold">{row.trio}</td>
                    <td className={`px-4 py-3 text-right font-mono tabular-nums font-bold ${row.positive ? 'text-[#00ff9d]' : 'text-[#6b7280]'}`}>{row.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        <p className="text-xs text-[#6b7280]">Golfers per day normalized for window length. Recovery Trio launched Mar 12, ended Apr 1.</p>
      </div>
    </section>
  )
}
