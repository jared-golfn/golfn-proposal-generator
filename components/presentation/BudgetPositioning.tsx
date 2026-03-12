'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig, budgetPositioning } from '@/lib/presentation-data'
import { images } from '@/lib/images'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

export function BudgetPositioning({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="max-w-[960px] mx-auto px-6 md:px-12 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
        {/* Text — 3 cols */}
        <div className="lg:col-span-3">
          <Fade>
            <span className="font-mono text-sm tracking-[0.2em] uppercase" style={{ color: partner.primaryColor }}>Budget Positioning</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-10 leading-[0.95]">{budgetPositioning.headline}</h2>
          </Fade>
          {budgetPositioning.paragraphs.map((p, i) => (
            <Fade key={i} delay={0.1 + i * 0.08}>
              <p className="text-[17px] text-[#B0B0B4] leading-[1.75] mb-6">{p}</p>
            </Fade>
          ))}
          <Fade delay={0.4}>
            <p className="text-[17px] text-[#B0B0B4] leading-[1.75] border-l-2 pl-6 mt-8" style={{ borderColor: partner.primaryColor }}>
              Brands already pay for these functions across fragmented partners and channels. GolfN consolidates them into one coordinated, measurable system built around verified golfers.
            </p>
          </Fade>
        </div>

        {/* Image — 2 cols */}
        <Fade delay={0.3}>
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 blur-[80px] opacity-[0.08] rounded-full" style={{ background: partner.primaryColor }} />
              <img
                src={images.srixonAd3}
                alt="GolfN brand experience"
                className="relative w-full max-w-[480px] rounded-2xl"
                style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.5))' }}
              />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}
