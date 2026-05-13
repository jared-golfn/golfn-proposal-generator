'use client'

import { motion } from 'framer-motion'

const proofs = [
  { value: '$375k+', label: 'moved for partners', sub: 'Including $237k+ in just the last 4 months' },
  { value: '$31k', label: 'in 40 days from one sweepstakes', sub: 'From $769 in donated prize value' },
  { value: '75x', label: 'monthly logins per user', sub: 'Other golf apps see 3 to 5x' },
  { value: '100%', label: 'verified golfers', sub: 'GPS-confirmed rounds. First party.' },
  { value: '89%', label: 'retention after first use', sub: '62% still active at 6 months' },
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
              <p className="text-xs md:text-sm text-white font-semibold leading-snug mb-1">{p.label}</p>
              <p className="text-xs text-[#6b7280] leading-snug">{p.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
