'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRateRequest } from '@/lib/rate-request-context'

const CALENDLY_URL = 'https://calendly.com/golfn'

export function FinalCTA() {
  const { open } = useRateRequest()

  return (
    <section className="py-24 md:py-32" id="final-cta">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#c5a572] mb-6"
        >
          Next Step
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight mb-8"
        >
          So what&rsquo;s a <span className="text-gradient">good next step?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-[#d1d5db] mb-3 max-w-2xl mx-auto leading-9"
        >
          The marketplace doesn&rsquo;t have a partner in your category yet.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-[#9ca3af] mb-12 max-w-2xl mx-auto leading-9"
        >
          Jared, our CEO, runs these calls himself. Worth 20 minutes?
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00ff9d] text-[#0f1217] font-bold text-base hover:bg-[#00e68a] transition-colors w-full sm:w-auto justify-center"
          >
            Book 20 minutes with Jared
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => open()}
            className="inline-flex items-center gap-2 px-6 py-4 text-base font-semibold text-[#00ff9d] hover:underline w-full sm:w-auto justify-center"
          >
            Request the rate card
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-sm text-[#6b7280] mt-8"
        >
          Or email <a href="mailto:jared@golfn.com" className="text-[#9ca3af] hover:text-white underline underline-offset-2">jared@golfn.com</a> directly.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-xs text-[#4b5563] mt-4"
        >
          jared@golfn.com &middot; calendly.com/golfn
        </motion.p>
      </div>
    </section>
  )
}
