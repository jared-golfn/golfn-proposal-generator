'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const CALENDLY_URL = 'https://calendly.com/golfn'

export function OnRamp() {
  return (
    <section className="py-24 md:py-32" id="on-ramp">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-4">The On-Ramp</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight mb-12 max-w-4xl">
          We&rsquo;ll prove the audience <span className="text-gradient">before we ask you for a dollar.</span>
        </motion.h2>

        <div className="bg-[#001a14]/60 border border-[#00ff9d]/30 rounded-2xl p-8 md:p-12 max-w-4xl">
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-xl md:text-2xl text-white leading-9 mb-6 font-semibold">
            First campaign is on us. Brand provides the prize. We run everything.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-base md:text-lg text-[#d1d5db] leading-8 mb-5">
            No upfront cost. No setup fee. No campaign fee. We put thousands of dollars of campaign infrastructure on the line before asking you for a dollar.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-base md:text-lg text-[#d1d5db] leading-8 mb-8">
            A premium Japanese forged iron brand gave us $769 in product. In 40 days, our users bought <span className="text-[#00ff9d] font-bold">$31k in their gear</span>. Most of them first time buyers of the brand.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#00ff9d] text-[#0f1217] font-bold text-base hover:bg-[#00e68a] transition-colors">
              Book a sweepstakes call
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-sm text-[#6b7280] mt-6 max-w-4xl">
          We do well when our customers do well. Prize value floor $1k+ retail. Bundle add-ons available for accessory brands.
        </motion.p>
      </div>
    </section>
  )
}
