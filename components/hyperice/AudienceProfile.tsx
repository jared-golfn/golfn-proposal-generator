'use client'

import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

interface GeoRow { location: string; count: string }
const geoData: GeoRow[] = [
  { location: 'United Kingdom \u2014 England', count: '64' },
  { location: 'California, USA', count: '60' },
  { location: 'Texas, USA', count: '47' },
  { location: 'Ohio, USA', count: '34' },
  { location: 'Pennsylvania, USA', count: '33' },
  { location: 'Illinois, USA', count: '33' },
  { location: 'Michigan, USA', count: '31' },
  { location: 'North Carolina, USA', count: '29' },
  { location: 'Florida, USA', count: '25' },
]

interface CourseRow { type: string; count: string; pct: string }
const courseData: CourseRow[] = [
  { type: 'Public', count: '27', pct: '36%' },
  { type: 'Semi-private', count: '18', pct: '24%' },
  { type: 'None declared', count: '15', pct: '20%' },
  { type: 'Private', count: '11', pct: '15%' },
  { type: 'Resort', count: '4', pct: '5%' },
]

interface TierRow { tier: string; count: string; pct: string }
const tierData: TierRow[] = [
  { tier: 'No paid membership', count: '901', pct: '88.5%' },
  { tier: 'SILVER', count: '35', pct: '3.4%' },
  { tier: 'GOLD', count: '8', pct: '0.8%' },
  { tier: 'WHITE', count: '6', pct: '0.6%' },
  { tier: 'NFT tier holders', count: '5', pct: '0.5%' },
]

interface CohortRow { name: string; count: string }
const cohorts: CohortRow[] = [
  { name: 'Hyperice Recovery Bundle entrants', count: '678' },
  { name: '2026 Hyperice Recovery Trio entrants', count: '1,463' },
  { name: 'Hyperice marketplace browsers', count: '3,651' },
  { name: 'Hyperice paying customers', count: '~50' },
]

export function AudienceProfile() {
  return (
    <section className="py-20 md:py-32 border-t border-[#2a3347]/40 scroll-mt-8" id="audiences">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-end justify-between gap-4 mb-8 md:mb-10 pb-4 border-b border-[#2a3347]/40">
          <div>
            <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-2">Audiences &amp; Demographics</p>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight">Who engaged with Hyperice.</h3>
          </div>
          <div className="flex items-baseline gap-2 shrink-0">
            <p className="text-3xl md:text-5xl font-mono font-bold text-[#00ff9d] leading-none tabular-nums">88.5%</p>
            <p className="text-xs md:text-sm font-mono text-[#9ca3af] uppercase tracking-[0.18em] pb-0.5">Incremental</p>
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base md:text-lg text-[#9ca3af] leading-8 max-w-4xl mb-10">
          Source: 2026 Hyperice Recovery Trio cohort (n=1,463 verified golfers), instrumented in Amplitude. <span className="text-white font-semibold">88.5% of active entrants had no paid GolfN membership</span> at time of entry &mdash; these are incremental customers Hyperice can&rsquo;t reach through its own paid channels.
        </motion.p>

        {/* Audience pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {['36% Public Course Players', '24% Semi-Private', '15% Private', '88.5% No Paid Membership', 'Top State: CA', 'International: UK-England'].map((pill) => (
            <span key={pill} className="inline-flex px-4 py-2 rounded-full bg-[#00ff9d]/5 border border-[#00ff9d]/20 text-sm font-semibold text-[#00ff9d]">{pill}</span>
          ))}
        </div>

        {/* Two-col: course type + membership tier */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-5 md:p-6">
            <p className="text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-4">Home Course Type (75 with declared course)</p>
            {courseData.map((row, i) => (
              <div key={i} className="flex justify-between items-baseline py-2 border-b border-[#2a3347]/50 last:border-0">
                <span className="text-sm text-[#d1d5db]">{row.type}</span>
                <span className="text-sm font-mono font-bold text-white tabular-nums">{row.count} <span className="text-[#6b7280] font-normal">({row.pct})</span></span>
              </div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }} className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-5 md:p-6">
            <p className="text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-4">Membership Tier (n=1,018 active)</p>
            {tierData.map((row, i) => (
              <div key={i} className="flex justify-between items-baseline py-2 border-b border-[#2a3347]/50 last:border-0">
                <span className="text-sm text-[#d1d5db]">{row.tier}</span>
                <span className="text-sm font-mono font-bold text-white tabular-nums">{row.count} <span className="text-[#6b7280] font-normal">({row.pct})</span></span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Geography */}
        <p className="text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-3">Top Geographies (entrants by state/country)</p>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-[#2a3347] overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="bg-[#1a1f2e] border-b border-[#2a3347]">
                <th className="text-left px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Location</th>
                <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Entrants</th>
              </tr></thead>
              <tbody>
                {geoData.map((row, i) => (
                  <tr key={i} className={`border-b border-[#2a3347]/50 ${i % 2 === 0 ? 'bg-[#0f1217]' : 'bg-[#131720]'}`}>
                    <td className="px-4 py-3 text-[#d1d5db] font-medium">{row.location}</td>
                    <td className="px-4 py-3 text-right font-mono tabular-nums font-bold text-[#00ff9d]">{row.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Retargetable cohorts */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-[#001a14] to-[#002a1f] border border-[#00ff9d]/20 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-3 mb-4">
            <Users className="w-5 h-5 text-[#00ff9d] mt-0.5 shrink-0" />
            <p className="text-base md:text-lg font-bold text-white">Retargetable First-Party Cohorts</p>
          </div>
          <p className="text-sm text-[#d1d5db] leading-7 pl-8 mb-5">
            Each Hyperice activation produced a first-party cohort that can be re-engaged via Braze push, email, or in-app messages, and used as seed audiences for paid Meta retargeting.
          </p>
          <div className="pl-8 space-y-3">
            {cohorts.map((c) => (
              <div key={c.name} className="flex justify-between items-baseline py-2 border-b border-white/10 last:border-0">
                <span className="text-sm text-[#d1d5db]">{c.name}</span>
                <span className="text-sm font-mono font-bold text-[#00ff9d] tabular-nums">{c.count}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#6b7280] mt-4 pl-8">Cohorts are not mutually exclusive &mdash; golfers may appear in multiple lists.</p>
        </motion.div>
      </div>
    </section>
  )
}
