'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig, commercialModel } from '@/lib/presentation-data'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export function ManagementFee({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <span className="font-mono text-xs text-golfn-white-faint tracking-widest uppercase">Layer 2</span>
            <h2 className="font-display text-4xl md:text-6xl mt-3">Managed Program<br /><span className="text-gradient">Delivery</span></h2>
            <p className="text-golfn-white-dim mt-4 max-w-xl">Monthly management fee funds four recurring functions that keep your program alive and optimized.</p>
          </div>
        </FadeIn>

        {/* Four-Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {commercialModel.management.functions.map((fn, i) => (
            <FadeIn key={fn.name} delay={0.1 + i * 0.08}>
              <div className="card p-8 h-full relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-1 h-full"
                  style={{ background: `linear-gradient(to bottom, ${partner.primaryColor}, ${partner.secondaryColor})`, opacity: 0.6 + i * 0.1 }}
                />
                <span className="font-mono text-[10px] tracking-widest text-golfn-white-faint">0{i + 1}</span>
                <h3 className="text-lg font-semibold mt-3 mb-2">{fn.name}</h3>
                <p className="text-sm text-golfn-white-faint leading-relaxed">{fn.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Fee Tiers */}
        <FadeIn delay={0.3}>
          <div className="flex flex-col md:flex-row gap-4">
            {commercialModel.management.tiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`card p-6 flex-1 ${
                  i === 1 ? 'glow-green' : ''
                }`}
                style={i === 1 ? { outline: `1px solid ${partner.primaryColor}30` } : {}}
              >
                {i === 1 && (
                  <span className="text-[10px] font-mono tracking-widest mb-3 block" style={{ color: partner.primaryColor }}>POPULAR</span>
                )}
                <div className="text-sm text-golfn-white-dim mb-1">{tier.name}</div>
                <div className="text-3xl font-bold font-mono" style={{ color: partner.primaryColor }}>{tier.price}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
