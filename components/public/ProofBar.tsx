'use client'

import { motion } from 'framer-motion'

const proofs = [
  { value: '$375k+', label: 'partner-attributed value moved', sub: '$237k+ of that in the last 4 months. Marketplace, wholesale, campaign revenue.' },
  { value: '$31k', label: 'net retail from one sweepstakes', sub: '45 units sold. $769 in donated prize value.' },
  { value: '75', label: 'logins per user per month', sub: '~2.5x per day. 15x more frequent than typical golf apps (3 to 5x).' },
  { value: '100%', label: 'verified golfer audience', sub: 'Campaign reach limited to users with GPS-confirmed rounds.' },
  { value: '89%', label: 'return rate after first use', sub: '62% still active at 6 months.' },
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
              <p className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-[#00ff9d] leading-none mb-2 whitespace-nowrap">{p.value}</p>
              <p className="text-xs md:text-sm text-white font-semibold leading-snug mb-1">{p.label}</p>
              <p className="text-xs text-[#6b7280] leading-snug">{p.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
