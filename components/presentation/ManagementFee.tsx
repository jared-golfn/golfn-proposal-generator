'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig, commercialModel } from '@/lib/presentation-data'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

export function ManagementFee({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-12 py-28">
      <Fade>
        <span className="font-mono text-sm text-golfn-faint tracking-[0.2em] uppercase">Layer 2</span>
        <h2 className="font-display text-5xl md:text-7xl mt-3 mb-6 leading-[0.92]">Managed Program<br /><span className="text-gradient">Delivery</span></h2>
        <p className="text-lg text-golfn-dim max-w-xl mb-16">Monthly management fee funds four recurring functions that keep your program alive and optimized.</p>
      </Fade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {commercialModel.management.functions.map((fn, i) => (
          <Fade key={fn.name} delay={0.1 + i * 0.06}>
            <div className="bg-golfn-card border border-golfn-border rounded-2xl p-8 h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-[3px] h-full" style={{ background: `linear-gradient(to bottom, ${partner.primaryColor}, ${partner.secondaryColor})`, opacity: 0.5 + i * 0.15 }} />
              <span className="font-mono text-xs tracking-[0.2em] text-golfn-faint">0{i + 1}</span>
              <h3 className="text-xl font-semibold mt-3 mb-2">{fn.name}</h3>
              <p className="text-base text-golfn-faint leading-relaxed">{fn.description}</p>
            </div>
          </Fade>
        ))}
      </div>

      <Fade delay={0.35}>
        <div className="flex flex-col md:flex-row gap-4">
          {commercialModel.management.tiers.map((t, i) => (
            <div key={t.name} className={`bg-golfn-card border rounded-2xl p-7 flex-1 ${i === 1 ? 'border-golfn-border-light' : 'border-golfn-border'}`} style={i === 1 ? { boxShadow: `0 0 60px ${partner.primaryColor}08` } : {}}>
              {i === 1 && <span className="text-[11px] font-mono tracking-[0.2em] mb-2 block" style={{ color: partner.primaryColor }}>POPULAR</span>}
              <div className="text-base text-golfn-dim mb-1">{t.name}</div>
              <div className="text-3xl font-bold font-mono" style={{ color: partner.primaryColor }}>{t.price}</div>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  )
}
