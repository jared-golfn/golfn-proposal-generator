'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { images } from '@/lib/images'
import { DailyEntrantsChart } from './DailyEntrantsChart'
import { DailyProductViewsChart } from './DailyProductViewsChart'

interface MetricCard {
  value: string
  label: string
  sub?: string
}

const heroMetrics: MetricCard[] = [
  { value: '$22k', label: 'Wholesale revenue', sub: 'In a single 49-day commerce window' },
  { value: '2,764', label: 'Verified golf leads', sub: 'Captured during the 22-day sweep' },
  { value: '45', label: 'Units sold', sub: '37 wedges + 8 iron sets' },
  { value: '74%', label: 'Card-to-entry rate', sub: 'Highest in GolfN sweepstakes history' },
]

const sweepMetrics: MetricCard[] = [
  { value: '3,732', label: 'Sweep card views', sub: 'In-app surface impressions' },
  { value: '2,764', label: 'Entries captured', sub: '74% view-to-entry conversion' },
  { value: '$0.28', label: 'Prize-cost CPL', sub: 'Based on $769 wholesale prize value' },
  { value: '43%', label: 'IAM conversion', sub: '1,158 of 2,706 recipients' },
]

const commerceMetrics: MetricCard[] = [
  { value: '271,393', label: 'Marketplace impressions', sub: '27-day banner placement flight' },
  { value: '10,951', label: 'Product views', sub: 'On Miura product pages' },
  { value: '4,424', label: 'Unique browsers', sub: 'Individuals who shopped Miura' },
  { value: '$22k', label: 'Net retail revenue', sub: 'From 45 units sold' },
]

export function MiuraResults() {
  return (
    <section
      className="py-20 md:py-32 border-t border-[#2a3347]/40 bg-gradient-to-b from-[#050810] via-[#06090e] to-[#05080d] scroll-mt-8"
      id="miura"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* OPENING — eyebrow + Miura logo + headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center max-w-5xl mx-auto"
        >
          <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#c5a572] mb-8">
            Miura Golf · An 8AM Portfolio Company
          </p>

          {/* MIURA LOGO — sized at h-14/16/20 to stay well within the source
              PNG's native resolution so it renders crisp at all breakpoints.
              Gold rules above and below frame the logo as a refined accent. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
            className="my-10 md:my-14 flex flex-col items-center"
          >
            {/* Gold rule above */}
            <div className="w-16 md:w-20 h-px bg-[#c5a572] mb-6 md:mb-8" />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images.miuraLogo}
              alt="Miura Golf"
              className="h-14 md:h-16 lg:h-20 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />

            {/* Gold rule below */}
            <div className="w-16 md:w-20 h-px bg-[#c5a572] mt-6 md:mt-8" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6 text-white"
          >
            What the system did <span className="text-gradient">for Miura.</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="text-lg md:text-xl text-[#9ca3af] leading-8 max-w-3xl mx-auto"
          >
            Real campaign. Real numbers. One of 8AM&rsquo;s own portfolio companies, running inside the GolfN system.
          </motion.p>
        </motion.div>

        {/* HERO METRICS — 4 big numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-16 md:mb-24">
          {heroMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className="bg-[#1a1f2e]/60 border border-[#2a3347] rounded-2xl p-6 md:p-7 text-center"
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-[#00ff9d] leading-none tabular-nums mb-3">
                {m.value}
              </p>
              <p className="text-sm md:text-base text-white font-semibold leading-tight mb-1">{m.label}</p>
              {m.sub && (
                <p className="text-xs md:text-sm text-[#6b7280] leading-snug mt-1">{m.sub}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* ANTHONY NEWVILLE QUOTE
            Real quote from Anthony Newville's May 5, 2026 partnership review
            with GolfN. Same quote already in use on the internal /template
            pitch deck (components/template/CaseStudy.tsx → MiuraPanel). */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#0a0d12] border border-[#c5a572]/20 rounded-3xl p-8 md:p-14 mb-20 md:mb-24 max-w-5xl mx-auto"
        >
          <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#c5a572] mb-5" strokeWidth={1.5} />
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.25] tracking-tight text-white mb-6">
            &ldquo;You guys are doing exactly what you figured you would do. The consumer base is latching on. <span className="text-[#00ff9d]">We never doubted for a second.</span>&rdquo;
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-[#c5a572]" />
            <div>
              <p className="text-base md:text-lg text-white font-semibold">Anthony Newville</p>
              <p className="text-sm text-[#9ca3af]">President &mdash; Miura Golf &middot; May 5, 2026 Partnership Review</p>
            </div>
          </div>
        </motion.div>

        {/* ACT 1 — SWEEPSTAKES (22 DAYS) */}
        <div className="mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-end justify-between gap-4 mb-8 md:mb-10 pb-4 border-b border-[#2a3347]/40"
          >
            <div>
              <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#c5a572] mb-2">Act 1 · The Sweepstakes</p>
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                Audience capture.
              </h4>
            </div>
            <div className="flex items-baseline gap-2 shrink-0">
              <p className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-[#00ff9d] leading-none tabular-nums">22</p>
              <p className="text-xs md:text-sm font-mono text-[#9ca3af] uppercase tracking-[0.18em] pb-0.5">Days</p>
            </div>
          </motion.div>

          <p className="text-base md:text-lg text-[#9ca3af] leading-7 max-w-3xl mb-10">
            Miura provided three forged wedges as a sweepstakes prize. GolfN handled creative, distribution, entry mechanics, and audience capture. The result: <span className="text-white font-semibold">2,764 verified golf leads in 22 days at $0.28 prize-cost CPL.</span>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {sweepMetrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-5"
              >
                <p className="text-2xl md:text-3xl font-mono font-bold text-white leading-none mb-2 tabular-nums">
                  {m.value}
                </p>
                <p className="text-xs md:text-sm text-[#d1d5db] font-semibold leading-tight">{m.label}</p>
                {m.sub && <p className="text-xs text-[#6b7280] mt-1 leading-snug">{m.sub}</p>}
              </motion.div>
            ))}
          </div>

          {/* DAILY ENTRANTS CHART — temporal proof of how the 2,764 leads
              actually accumulated across the 22-day flight. Shows organic
              baseline, IAM launch spike (Mar 10), and final-day push burst
              (Mar 25, 448 entrants). */}
          <DailyEntrantsChart />
        </div>

        {/* ACT 2 — MARKETPLACE (49 DAYS) */}
        <div className="mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-end justify-between gap-4 mb-8 md:mb-10 pb-4 border-b border-[#2a3347]/40"
          >
            <div>
              <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#c5a572] mb-2">Act 2 · Points Exchange Commerce</p>
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                Audience monetization.
              </h4>
            </div>
            <div className="flex items-baseline gap-2 shrink-0">
              <p className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-[#00ff9d] leading-none tabular-nums">49</p>
              <p className="text-xs md:text-sm font-mono text-[#9ca3af] uppercase tracking-[0.18em] pb-0.5">Days</p>
            </div>
          </motion.div>

          <p className="text-base md:text-lg text-[#9ca3af] leading-7 max-w-3xl mb-10">
            The 2,764 entrants captured in the sweep moved into the marketplace flow. Miura wedges and irons listed as points-redeemable items. <span className="text-white font-semibold">45 units sold and $22k in net retail revenue — without a dollar of paid media.</span>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {commerceMetrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-5"
              >
                <p className="text-2xl md:text-3xl font-mono font-bold text-white leading-none mb-2 tabular-nums">
                  {m.value}
                </p>
                <p className="text-xs md:text-sm text-[#d1d5db] font-semibold leading-tight">{m.label}</p>
                {m.sub && <p className="text-xs text-[#6b7280] mt-1 leading-snug">{m.sub}</p>}
              </motion.div>
            ))}
          </div>

          {/* DAILY PRODUCT VIEWS CHART — proves the marketplace engagement
              wasn't a one-week burst. Shows Mar 26 peak (398 views, day
              after sweep closed) and the sustained 200–380 views/day tail
              through April with zero additional paid media. */}
          <DailyProductViewsChart />
        </div>

        {/* CLOSING PULLQUOTE — bookend to the section opener.
            Opener: "What the system did for Miura."
            Closer: "That's what the system does."  (universal claim) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-l-4 border-[#c5a572] pl-6 md:pl-10 max-w-4xl"
        >
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-white mb-5">
            That&rsquo;s what the system does.
          </p>
          <p className="text-lg md:text-xl text-[#d1d5db] leading-relaxed">
            One of 8AM&rsquo;s portfolio companies. <span className="text-white font-semibold">$22k in wholesale revenue. 2,764 verified golf leads. 71 days end to end.</span> No paid media. No external attribution.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
