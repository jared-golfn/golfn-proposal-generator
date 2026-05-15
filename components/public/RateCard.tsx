'use client'

import { motion } from 'framer-motion'
import { Star, ArrowUpRight } from 'lucide-react'
import { useRateRequest } from '@/lib/rate-request-context'

interface SurfaceRow {
  name: string
  sub: string
}

// Audience media — CPM-style buying against the verified GolfN audience.
const audienceMedia: SurfaceRow[] = [
  {
    name: 'CPM media (verified audience)',
    sub: 'Standard targeting against GPS-confirmed golfers. Commitment unlocks volume rate.',
  },
  {
    name: 'Triggered targeting',
    sub: 'Weather, UV, handicap progression, or club-in-bag triggers do the targeting work.',
  },
  {
    name: 'In-feed pinned video',
    sub: 'Top of the social activity feed. Brand creative or UGC.',
  },
]

// Activations — campaign-shaped buys with a defined moment and goal.
const activations: SurfaceRow[] = [
  {
    name: 'Sweepstakes',
    sub: 'Brand provides prize. We run everything. First campaign is on us — see The On-Ramp.',
  },
  {
    name: 'Sponsored Challenge',
    sub: 'Multi-week engagement campaigns with stacked rewards. 1x / 3x / 6x flights.',
  },
  {
    name: 'Press Your Luck monthly sponsorship',
    sub: 'Brand product as prize slot on the spin wheel. 50,000+ users per month.',
  },
  {
    name: 'Marketplace category takeover',
    sub: 'Own the Wedges, Putters, or Recovery header for a month.',
  },
  {
    name: 'Course page sponsorship',
    sub: 'Course-level ad placements. Metro-targeted.',
  },
  {
    name: 'Per verified check-in',
    sub: 'Demo days, fitting events, brand activations. Pay only when a verified golfer shows up.',
  },
]

// Partnership — annual bundle, category exclusivity.
const partnershipIncludes = [
  'Annual CPM commitment with category exclusivity',
  'Always-on placement (category takeover or in-feed pinned)',
  'Press Your Luck sponsorship eligible (add-on)',
  'Quarterly audience intelligence reports',
  'Preferred marketplace placement and featured banner windows',
  'First access to new inventory and beta capabilities',
  'Co-branded content and blog backlinks included',
  'Dedicated account team',
]

export function RateCard() {
  const { open } = useRateRequest()

  return (
    <section className="py-24 md:py-32 bg-[#0a0d12]" id="rate-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#c5a572] mb-4"
        >
          Rate Card
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight mb-4 max-w-4xl"
        >
          Pricing is <span className="text-gradient">bespoke.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-base md:text-lg text-[#9ca3af] mb-12 max-w-3xl leading-7"
        >
          Every campaign is priced against flight length, exclusivity, and how it bundles with the rest of your year. Pick the surfaces you want. We&rsquo;ll send a tailored rate card the same day.
        </motion.p>

        {/* Block A: Audience Media */}
        <div className="mb-12">
          <p className="text-xs font-mono text-[#6b7280] uppercase tracking-[0.2em] mb-4">Block A</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Audience Media</h3>
          <p className="text-sm text-[#9ca3af] mb-6">CPM against the verified GolfN audience. Volume discounts on commitment.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {audienceMedia.map((s) => (
              <SurfaceCard key={s.name} surface={s} onRequest={() => open(s.name)} />
            ))}
          </div>
          <p className="text-xs text-[#6b7280] mt-4">
            Verified-only audience. Triggered targeting carries a premium because the trigger does the targeting work.
          </p>
        </div>

        {/* Block B: Activations */}
        <div className="mb-12">
          <p className="text-xs font-mono text-[#6b7280] uppercase tracking-[0.2em] mb-4">Block B</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Activations</h3>
          <p className="text-sm text-[#9ca3af] mb-6">Run something specific. Defined moment, defined goal.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {activations.map((s) => (
              <SurfaceCard key={s.name} surface={s} onRequest={() => open(s.name)} />
            ))}
          </div>
        </div>

        {/* Block C: Partnership */}
        <div>
          <p className="text-xs font-mono text-[#6b7280] uppercase tracking-[0.2em] mb-4">Block C</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-2">
            Partnership <Star className="w-5 h-5 text-[#c5a572] fill-[#c5a572]" />
          </h3>
          <p className="text-sm text-[#9ca3af] mb-6">Annual. Bundled. Category exclusive.</p>
          <div className="bg-gradient-to-br from-[#001a14] to-[#0f1217] border border-[#00ff9d]/40 rounded-2xl p-8">
            <p className="text-base text-[#d1d5db] mb-6 max-w-3xl leading-7">
              Annual CPM commitment plus always-on placement, quarterly audience intelligence, preferred marketplace placement, and category exclusivity. Priced as a bundle against the surfaces you actually want to run.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mb-8">
              {partnershipIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-[#00ff9d] mt-0.5 shrink-0">{'>'}</span>
                  <p className="text-sm text-[#d1d5db] leading-6">{item}</p>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => open('Annual partnership')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00ff9d] text-[#0f1217] font-bold text-sm hover:bg-[#00e68a] transition-colors"
            >
              Request partnership rate
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <p className="text-xs text-[#6b7280] mt-10 text-center md:text-left">
          Minimum campaign spend applies. All campaigns require a signed IO. MAP pricing always maintained.
        </p>
      </div>
    </section>
  )
}

function SurfaceCard({ surface, onRequest }: { surface: SurfaceRow; onRequest: () => void }) {
  return (
    <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-5 flex flex-col justify-between gap-4 card-lift">
      <div>
        <p className="text-base font-semibold text-white mb-1.5">{surface.name}</p>
        <p className="text-xs text-[#9ca3af] leading-5">{surface.sub}</p>
      </div>
      <button
        type="button"
        onClick={onRequest}
        className="inline-flex items-center gap-2 self-start text-xs font-mono uppercase tracking-[0.15em] text-[#00ff9d] hover:text-white transition-colors group"
      >
        Request rate
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </div>
  )
}
