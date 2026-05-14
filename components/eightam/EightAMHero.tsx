'use client'

import { motion } from 'framer-motion'

export function EightAMHero() {
  return (
    <section className="pt-24 md:pt-32 pb-10 md:pb-14">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-6"
        >
          The System
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-8 max-w-5xl"
        >
          GolfN, <span className="text-gradient">distilled.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-[#9ca3af] max-w-2xl leading-8"
        >
          A short walk through what GolfN actually is, why it works, and what makes it defensible. Five ideas. Read in three minutes.
        </motion.p>
      </div>
    </section>
  )
}
