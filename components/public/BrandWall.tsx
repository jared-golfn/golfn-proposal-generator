'use client'

import { motion } from 'framer-motion'

// Brand wall keeps real logos per Jared's decision (Option C in /partners/brand-wall question).
// Anonymization only applies to case study claims and the pull quote, not the logo grid.
const brandLogos = [
  { name: 'Cobra', url: 'https://www.golfn.com/cobra.webp' },
  { name: 'L.A.B. Golf', url: 'https://www.golfn.com/LAB.png' },
  { name: 'Bettinardi', url: 'https://www.golfn.com/bettinardi.webp' },
  { name: 'Hyperice', url: 'https://cdn.sanity.io/images/e3wja34v/production/36b4396feef4359c78c827dad89e3bc2c42929b2-3840x2160.png' },
  { name: 'Finn', url: 'https://cdn.sanity.io/images/e3wja34v/production/e325118a1a6270a4e7887a895cbf469cd211d40b-131x55.svg' },
]

export function BrandWall() {
  return (
    <section className="py-20 md:py-24" id="brand-wall">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-4 text-center">Partners</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3">
          We do well <span className="text-gradient">when our customers do well.</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-sm md:text-base text-[#6b7280] text-center mb-14">A few of the brands moving product with us right now.</motion.p>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }} className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
          {brandLogos.map((b) => (
            <img
              key={b.name}
              src={b.url}
              alt={b.name}
              className="h-7 md:h-9 w-auto object-contain"
              style={{ filter: 'brightness(0) invert(1)', opacity: 0.55, maxWidth: '180px' }}
            />
          ))}
          <span className="text-base font-mono text-[#4b5563]">+ more</span>
        </motion.div>
      </div>
    </section>
  )
}
