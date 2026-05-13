'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Target, Megaphone, Crosshair, Heart, ShoppingBag, BarChart3 } from 'lucide-react'

interface Tile {
  id: string
  Icon: typeof Target
  title: string
  hook: string
  proof: string
  details: string[]
}

const tiles: Tile[] = [
  {
    id: 'performance',
    Icon: Target,
    title: 'Performance',
    hook: 'Pay only when a verified golfer shows up.',
    proof: 'A 50 course resort group fills dead tee times for $5k per month.',
    details: [
      'Per-verified check-in for golf courses. GPS confirms the user actually played. No way to fake it.',
      'Per-verified check-in for demo days, fitting events, and brand activations. Geo push in the surrounding radius with escalating point incentives.',
      'Off-course check-in at simulators, TopGolf, ranges, and indoor venues that are GolfN partners.',
      'Tee time booking attribution that bypasses third-party platforms like Golf Now.',
    ],
  },
  {
    id: 'awareness',
    Icon: Megaphone,
    title: 'Awareness',
    hook: 'Verified golfer reach starting at $40 CPM.',
    proof: 'A premium iron brand: $769 in prizes generated 2,764 verified leads and $31k in retail in 40 days.',
    details: [
      'Sweepstakes. Brand provides product. We give it away to our users. Hundreds of thousands of verified-golfer impressions and a warm audience for retargeting.',
      'Press Your Luck monthly sponsorship. The spin wheel reaches 50,000 users per month. Brand product as a prize slot. Video-for-spin integration.',
      'In-feed pinned video. Brand creative or UGC pinned to the top of the social feed.',
      'Co-branded lifestyle campaigns. We write creative for you using audience knowledge no other platform has.',
      'Blog and SEO backlink package included with every campaign.',
    ],
  },
  {
    id: 'smart-targeting',
    Icon: Crosshair,
    title: 'Smart Targeting',
    hook: 'Reach golfers in the moment that matters.',
    proof: 'Trigger ads on weather, UV, handicap progression, or club in bag.',
    details: [
      'Weather triggered. Reach golfers who were just caught in rain during a real round.',
      'UV index triggered. Reach users who played on a high UV day in the hours after their round.',
      'Handicap progression triggered. Reach users whose handicap is improving or stalling at thresholds where new gear matters.',
      'Club in bag triggered. Reach users currently using a competitor product.',
      'Geo and behavior triggered. Reach golfers within range of an event or a fitting location.',
    ],
  },
  {
    id: 'loyalty',
    Icon: Heart,
    title: 'Loyalty',
    hook: 'Move a Titleist loyalist to Srixon. Through points, not discounting.',
    proof: 'MAP pricing always maintained. Points never undercut cash price.',
    details: [
      'Points multipliers tied to a specific brand or SKU.',
      'Intro offers for first-time brand buyers in the app.',
      'Wishlist intelligence. We see what golfers are saving for. You see who is close to converting.',
      'Promo codes routed through the points layer so the buying experience never breaks MAP.',
    ],
  },
  {
    id: 'marketplace',
    Icon: ShoppingBag,
    title: 'Marketplace',
    hook: 'Amazon DSP for golf. MAP protected. $493 average order.',
    proof: '$375k+ moved for partners in under a year. 35%+ month over month growth.',
    details: [
      'Category page takeover. Own the Wedges, Putters, or Recovery page header for a month.',
      'Featured marketplace banner. Concurrent with sweepstakes flights for maximum lift.',
      'Direct sell-through with no inventory risk. Brand fulfills and drop ships.',
      'Wholesale margin model. We do well when you do well.',
    ],
  },
  {
    id: 'data',
    Icon: BarChart3,
    title: 'Data and Intelligence',
    hook: 'Cohorts. Lookalikes. Audience match upload.',
    proof: 'A global recovery brand saw 18x product view lift in the marketplace post sweepstakes.',
    details: [
      'Bring your customer list. We will show you who is already playing on GolfN. Privacy safe matching.',
      'Macro audience cohorts shared with partners. Equipment profile. Course preferences. Play frequency. Walk versus ride. Weather conditions during rounds.',
      'Geo search of active GolfN users around any set of locations. Sales leave-behind for course operators.',
      'Monthly intelligence reports for partnership-tier brands. Quarterly deep dives included.',
    ],
  },
]

const buckets = [
  { label: 'Acquire', body: 'verified golfer attention' },
  { label: 'Convert', body: 'attention into action' },
  { label: 'Learn', body: 'who your golf customer actually is' },
]

export function Capabilities() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="py-24 md:py-32 bg-[#0a0d12]" id="capabilities">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-4">What You Can Do Here</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight mb-6 max-w-4xl">
          There&rsquo;s almost nothing we<br />can&rsquo;t do <span className="text-gradient">in here.</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-base md:text-lg text-[#9ca3af] mb-10 max-w-3xl leading-8">
          Three things you can do here. Click any tile to see how.
        </motion.p>

        {/* 3-bucket frame */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {buckets.map((b, i) => (
            <div key={b.label} className="bg-[#001a14]/40 border border-[#00ff9d]/20 rounded-xl px-5 py-4">
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-mono text-[#00ff9d] tracking-[0.15em] uppercase">0{i + 1}</span>
                <span className="text-lg font-bold text-white">{b.label}</span>
              </div>
              <p className="text-sm text-[#d1d5db] leading-6 mt-1">{b.body}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tiles.map((t, i) => {
            const isOpen = openId === t.id
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className={`bg-[#1a1f2e] border rounded-2xl overflow-hidden transition-colors ${isOpen ? 'border-[#00ff9d]/40' : 'border-[#2a3347] hover:border-[#2a3347]'}`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : t.id)}
                  className="w-full px-6 py-6 text-left group"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center shrink-0">
                      <t.Icon className="w-5 h-5 text-[#00ff9d]" />
                    </div>
                    <ChevronDown className={`w-5 h-5 text-[#6b7280] transition-transform shrink-0 ${isOpen ? 'rotate-180 text-[#00ff9d]' : 'group-hover:text-[#00ff9d]'}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{t.title}</h3>
                  <p className="text-sm text-[#d1d5db] leading-6 mb-3">{t.hook}</p>
                  <p className="text-xs text-[#00ff9d] font-mono leading-5">{t.proof}</p>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="overflow-hidden">
                      <div className="px-6 pb-6 pt-2 border-t border-[#2a3347]/60 bg-[#0f1217]/60">
                        <ul className="space-y-3 mt-4">
                          {t.details.map((d, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-[#d1d5db] leading-6">
                              <span className="text-[#00ff9d] mt-0.5">{'>'}</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
