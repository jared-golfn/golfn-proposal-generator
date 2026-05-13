'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    n: '01',
    title: '20 minutes with Jared',
    body: 'No deck. He runs the call. You tell him what you\u2019re trying to do.',
  },
  {
    n: '02',
    title: 'Free sweepstakes to prove the audience',
    body: 'Brand provides product. We run the campaign. Real data in 40 days.',
  },
  {
    n: '03',
    title: 'Build the campaign that scales',
    body: 'Pick the SKUs that match your goals. Sign the IO. Go.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0d12]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-4">Working With Us</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight mb-16 max-w-4xl">
          Three steps. <span className="text-gradient">That&rsquo;s it.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-8"
            >
              <p className="text-5xl md:text-6xl font-mono font-bold text-[#00ff9d]/30 leading-none mb-6">{s.n}</p>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-sm md:text-base text-[#d1d5db] leading-7">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
