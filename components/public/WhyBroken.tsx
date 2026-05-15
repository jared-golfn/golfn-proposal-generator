'use client'

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

export function WhyBroken() {
  return (
    <section className="py-24 md:py-32" id="why-broken">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#c5a572] mb-4">The Frame</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight mb-10 max-w-4xl">
          Golf marketing is broken on both ends.<br /><span className="text-gradient">We fixed both.</span>
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }} className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl px-8 py-7 mb-10 max-w-4xl">
          <p className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-3">
            {'"30% of my Meta budget is wasted every year on inferred golfers. Wrong audiences. You know how it goes."'}
          </p>
          <p className="text-sm text-[#6b7280]">Director of Marketing at a major equipment OEM, to us, in person.</p>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-[#d1d5db] leading-9 mb-12 max-w-3xl">
          The audience side is broken on Meta and Google. The commerce side is broken on Amazon and search. We rebuilt both around a single verified-golfer system.
        </motion.p>

        {/* Two-leg comparison — broken on the left, GolfN's answer on the right. */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* LEFT — What's broken */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} className="bg-[#1a1f2e]/50 border border-[#2a3347] rounded-2xl p-8 flex flex-col">
            {/* Top of funnel — Meta */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#2a3347] flex items-center justify-center shrink-0">
                <X className="w-5 h-5 text-[#6b7280]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Top of funnel: Meta &amp; Google</h3>
            </div>
            <p className="text-5xl md:text-6xl font-mono font-bold text-[#6b7280] mb-2">~30%</p>
            <p className="text-sm text-[#9ca3af] mb-3">wasted on inferred audiences</p>
            <p className="text-sm text-[#9ca3af] leading-6 mb-8">Modeled audiences. Lookalikes. Interest panels. Buying golf reach there means paying for golf-adjacent people, not the golfers you want.</p>

            {/* Divider */}
            <div className="border-t border-[#2a3347]/60 my-2" />

            {/* Bottom of funnel — Amazon */}
            <div className="flex items-center gap-3 mb-4 mt-6">
              <div className="w-10 h-10 rounded-lg bg-[#2a3347] flex items-center justify-center shrink-0">
                <X className="w-5 h-5 text-[#6b7280]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Bottom of funnel: Amazon &amp; search</h3>
            </div>
            <p className="text-5xl md:text-6xl font-mono font-bold text-[#6b7280] mb-2">0</p>
            <p className="text-sm text-[#9ca3af] mb-3">idea who&rsquo;s actually a golfer</p>
            <p className="text-sm text-[#9ca3af] leading-6">MAP gets broken. Third-party sellers undercut your pricing. Every buyer is a faceless cart. No audience signal flows back to your brand.</p>
          </motion.div>

          {/* RIGHT — GolfN's answer */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} className="bg-[#001a14]/60 border border-[#00ff9d]/30 rounded-2xl p-8 flex flex-col">
            {/* GolfN — Top */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#00ff9d]/15 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-[#00ff9d]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">GolfN &mdash; top of funnel</h3>
            </div>
            <p className="text-5xl md:text-6xl font-mono font-bold text-[#00ff9d] mb-2">100%</p>
            <p className="text-sm text-[#9ca3af] mb-3">verified golfer audience</p>
            <p className="text-sm text-[#d1d5db] leading-6 mb-8">GPS confirmed rounds. First party data. Campaign reach is limited to users with verified golf activity inside the app.</p>

            {/* Divider */}
            <div className="border-t border-[#00ff9d]/15 my-2" />

            {/* GolfN — Bottom */}
            <div className="flex items-center gap-3 mb-4 mt-6">
              <div className="w-10 h-10 rounded-lg bg-[#00ff9d]/15 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-[#00ff9d]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">GolfN &mdash; bottom of funnel</h3>
            </div>
            <p className="text-5xl md:text-6xl font-mono font-bold text-[#00ff9d] mb-2">100%</p>
            <p className="text-sm text-[#9ca3af] mb-3">MAP-protected commerce</p>
            <p className="text-sm text-[#d1d5db] leading-6">Points layer routes around discounting. Every buyer is a verified golfer with a known equipment profile. Cohort data flows back to you after every campaign.</p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="mt-12 text-center md:text-left">
          <p className="text-lg md:text-xl text-[#9ca3af] leading-relaxed max-w-3xl">
            We don&rsquo;t compete with Arccos or 18Birdies.{' '}<span className="text-white font-semibold">We compete with Meta for your demand budget &mdash; and with Amazon for your commerce.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
