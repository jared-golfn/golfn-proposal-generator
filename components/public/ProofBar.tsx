'use client'

import { motion } from 'framer-motion'

const proofs = [
  { value: '$237k+', label: 'moved for partners in 4 months' },
  { value: '$31k', label: 'in sales in 40 days from one sweepstakes' },
  { value: '75x', label: 'monthly logins (incumbents 3 to 5)' },
  { value: '100%', label: 'verified golfers' },
  { value: '89%', label: 'retention after first use' },
]

export function ProofBar() {
  return (
    <section className="py-16 md:py-20 border-y border-[#2a3347]/50 bg-[#0f1217]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
          {proofs.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-center md:text-left"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-[#00ff9d] leading-none mb-2">{p.value}</p>
              <p className="text-xs md:text-sm text-[#9ca3af] leading-snug">{p.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
