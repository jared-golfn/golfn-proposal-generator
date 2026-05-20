'use client'

import { motion } from 'framer-motion'
import { Users, ArrowRight } from 'lucide-react'

interface CohortCard { name: string; count: string; description: string }
const cohorts: CohortCard[] = [
  { name: 'Hyperice Marketplace Browsers', count: '3,651', description: 'Verified golfers who viewed Hyperice product pages in the GolfN marketplace. High-intent browsing behavior from first-party in-app data.' },
  { name: '2026 Recovery Trio Entrants', count: '1,463', description: 'Verified golfers who entered the Recovery Trio sweepstakes (Mar 2026). Opted in to engage with the Hyperice brand directly.' },
  { name: 'Recovery Bundle Entrants', count: '678', description: 'Verified golfers who entered the original Recovery Bundle sweepstakes (Nov 2025). The first Hyperice activation on GolfN.' },
  { name: 'Hyperice Paying Customers', count: '~50', description: 'Verified golfers who purchased Hyperice products through the GolfN Points Exchange. Highest-value segment with proven purchase intent.' },
]

export function AudienceProfile() {
  return (
    <section className="py-20 md:py-32 border-t border-[#2a3347]/40 scroll-mt-8" id="audiences">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-end justify-between gap-4 mb-8 md:mb-10 pb-4 border-b border-[#2a3347]/40">
          <div>
            <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-2">Retargetable Audiences</p>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight">First-party cohorts you own.</h3>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Users className="w-6 h-6 md:w-8 md:h-8 text-[#00ff9d]" />
            <p className="text-3xl md:text-5xl font-mono font-bold text-[#00ff9d] leading-none tabular-nums">4</p>
            <p className="text-xs md:text-sm font-mono text-[#9ca3af] uppercase tracking-[0.18em] pb-0.5">Cohorts</p>
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base md:text-lg text-[#9ca3af] leading-8 max-w-4xl mb-12">
          Every Hyperice activation on GolfN produces a first-party, retargetable audience of verified golfers. These aren&rsquo;t rented impressions &mdash; they&rsquo;re owned cohorts that can be re-engaged via Braze push, email, or in-app messages, and used as seed audiences for paid Meta retargeting. The more activations you run, the larger and more segmented these audiences become.
        </motion.p>

        {/* Cohort cards — large, prominent */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-10">
          {cohorts.map((c, i) => (
            <motion.div key={c.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }} className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00ff9d] to-[#1a5c38]" />
              <div className="flex justify-between items-start gap-4 mb-4">
                <p className="text-base md:text-lg font-bold text-white leading-tight">{c.name}</p>
                <p className="text-2xl md:text-3xl font-bold font-mono text-[#00ff9d] leading-none tabular-nums shrink-0">{c.count}</p>
              </div>
              <p className="text-sm text-[#9ca3af] leading-relaxed">{c.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Activation channels */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-[#0a1628] to-[#0f2a1e] border border-[#2a3347] rounded-2xl p-6 md:p-8 mb-8">
          <p className="text-xs font-mono uppercase tracking-wider text-[#00ff9d] mb-4">How These Cohorts Activate</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Braze Push Notifications', 'In-App Messages', 'Email Campaigns', 'Meta Lookalike Seeds'].map((channel) => (
              <div key={channel} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 text-center">
                <p className="text-sm text-white font-semibold">{channel}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom-line callout */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#00ff9d]/5 border-2 border-[#00ff9d]/20 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <ArrowRight className="w-6 h-6 text-[#00ff9d] mt-0.5 shrink-0" />
            <div>
              <p className="text-lg md:text-xl font-bold text-white mb-3">These audiences compound.</p>
              <p className="text-sm md:text-base text-[#d1d5db] leading-7">
                Every sweepstakes, every marketplace listing, every feature placement adds verified golfers to Hyperice&rsquo;s retargetable audience. Two activations produced <span className="text-white font-semibold">2,141 sweepstakes entrants</span> and <span className="text-white font-semibold">3,651 marketplace browsers</span>. An annual program with quarterly activations would build a proprietary Hyperice-golfer audience that no other channel can replicate &mdash; first-party, opted-in, and segmentable by round activity, handicap, geography, and purchase history.
              </p>
            </div>
          </div>
        </motion.div>

        <p className="text-xs text-[#6b7280] mt-6">Cohorts are not mutually exclusive &mdash; golfers may appear in multiple lists. All cohorts instrumented in Amplitude and actionable via Braze.</p>
      </div>
    </section>
  )
}
