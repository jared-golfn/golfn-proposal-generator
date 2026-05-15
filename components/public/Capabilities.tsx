'use client'

import { motion } from 'framer-motion'
import { Target, Zap, ShoppingBag, Repeat, ArrowDown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Bucket {
  id: string
  Icon: LucideIcon
  num: string
  name: string
  hook: string
  surfaces: string[]
  proof: string
}

const buckets: Bucket[] = [
  {
    id: 'capture',
    Icon: Target,
    num: '01',
    name: 'Capture',
    hook: 'Verified golfer attention, on day one.',
    surfaces: [
      'Sweepstakes (brand provides prize — first one is on us)',
      'Per-verified check-in for demo days, fitting events, and brand activations',
      'Lead capture inside the app, opt-in by audience profile',
      'Custom audience match against your existing customer list',
    ],
    proof: '2,764 verified golfer leads from a single 22-day sweep. $0.28 CPL.',
  },
  {
    id: 'activate',
    Icon: Zap,
    num: '02',
    name: 'Activate',
    hook: 'Reach golfers in the moment that matters.',
    surfaces: [
      'Weather-aware campaigns (caught in rain, played in heat, UV index)',
      'Handicap-progression triggers (improving, stalling, threshold moments)',
      'Club-in-bag triggers (reach users currently using a competitor)',
      'Press Your Luck monthly sponsorship (50k+ spinners per month)',
    ],
    proof: 'The trigger does the targeting work. Less inferred audience waste.',
  },
  {
    id: 'convert',
    Icon: ShoppingBag,
    num: '03',
    name: 'Convert',
    hook: 'Attention into action, MAP protected.',
    surfaces: [
      'Marketplace category takeover (Wedges, Putters, Recovery)',
      'Featured marketplace banner concurrent with sweepstakes flights',
      'In-feed pinned video at the top of the social activity feed',
      'Loyalty points multipliers — move a Titleist loyalist to Srixon without discounting',
      'Direct sell-through with no inventory risk; you fulfill, we route',
    ],
    proof: '$375k+ moved for partners in under a year. $493 average order value.',
  },
  {
    id: 'sustain',
    Icon: Repeat,
    num: '04',
    name: 'Sustain',
    hook: 'Make the audience keep producing.',
    surfaces: [
      'Always-on placement on annual partnership',
      'Monthly audience intelligence reports',
      'Macro cohort sharing (equipment, course type, frequency, weather)',
      'Quarterly deep-dive reports for partnership-tier brands',
      'First access to new inventory and beta capabilities',
    ],
    proof: '18x marketplace product-view lift sustained post-sweep, with zero added spend.',
  },
]

export function Capabilities() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0d12]" id="capabilities">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#c5a572] mb-4"
        >
          What You Can Do Here
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight mb-6 max-w-4xl"
        >
          Four ways to work with us. <span className="text-gradient">Mix and match.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base md:text-lg text-[#9ca3af] mb-12 max-w-3xl leading-7"
        >
          Most partners run two or three of these together for a single moment, then pick one to keep always-on. The surfaces below are the menu. Pricing is bespoke — see the rate card.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {buckets.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-7 md:p-8 card-lift"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center shrink-0">
                  <b.Icon className="w-5 h-5 text-[#00ff9d]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-[#c5a572] tracking-[0.18em] uppercase mb-1">{b.num}</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{b.name}</h3>
                </div>
              </div>

              <p className="text-base md:text-lg text-[#d1d5db] leading-7 mb-5">{b.hook}</p>

              <ul className="space-y-2.5 mb-5">
                {b.surfaces.map((s) => (
                  <li key={s} className="flex items-start gap-2.5">
                    <span className="text-[#00ff9d] mt-1 shrink-0 leading-none">{'>'}</span>
                    <span className="text-sm text-[#d1d5db] leading-6">{s}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-[#00ff9d] font-mono leading-5 pt-4 border-t border-[#2a3347]/60">{b.proof}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <button
            type="button"
            onClick={() => document.getElementById('rate-card')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#2a3347] text-[#9ca3af] hover:text-white hover:border-[#00ff9d]/40 transition-colors text-sm font-semibold"
          >
            See the rate card
            <ArrowDown className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
