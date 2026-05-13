'use client'

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'
import { stats } from '@/lib/canonical-stats'

export function WhyBroken() {
  return (
    <section className="py-24 md:py-32" id="why-broken">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-4">The Frame</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight mb-10 max-w-4xl">
          Golf advertising is broken.<br /><span className="text-gradient">We fixed the broken part.</span>
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }} className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl px-8 py-7 mb-10 max-w-4xl">
          <p className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-3">
            {'"30% of my Meta budget is wasted every year on inferred golfers. Wrong audiences. You know how it goes."'}
          </p>
          <p className="text-sm text-[#6b7280]">Director of Marketing at a major equipment OEM, to us, in person.</p>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-[#d1d5db] leading-9 mb-12 max-w-3xl">
          Every user in the GolfN app has played a GPS tracked round. Not inferred. Not panel. Verified.
        </motion.p>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} className="bg-[#1a1f2e]/50 border border-[#2a3347] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#2a3347] flex items-center justify-center">
                <X className="w-5 h-5 text-[#6b7280]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Meta</h3>
            </div>
            <p className="text-6xl font-mono font-bold text-[#6b7280] mb-2">{stats.golferRealRateMeta}</p>
            <p className="text-sm text-[#9ca3af] mb-6">real golfers, on a good day</p>
            <p className="text-sm text-[#9ca3af] leading-6">Inferred from interests, panels, and lookalikes. The other 40% is waste, and you pay for it anyway.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} className="bg-[#001a14]/60 border border-[#00ff9d]/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#00ff9d]/15 flex items-center justify-center">
                <Check className="w-5 h-5 text-[#00ff9d]" />
              </div>
              <h3 className="text-2xl font-bold text-white">GolfN</h3>
            </div>
            <p className="text-6xl font-mono font-bold text-[#00ff9d] mb-2">{stats.golferRealRateGolfN}</p>
            <p className="text-sm text-[#9ca3af] mb-6">verified golfers, every time</p>
            <p className="text-sm text-[#d1d5db] leading-6">GPS confirmed rounds. First party data. When you buy reach here, every impression goes to a golfer who actually plays.</p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="mt-12 text-center md:text-left">
          <p className="text-lg md:text-xl text-[#9ca3af] leading-relaxed max-w-3xl">
            We&rsquo;re not competing with Arccos or 18Birdies.{' '}<span className="text-white font-semibold">We&rsquo;re competing with Google and Meta for golf advertising spend.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
