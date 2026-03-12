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
    <section className="max-w-[960px] mx-auto px-6 md:px-12 py-32">
      <Fade>
        <span className="font-mono text-sm text-[#71717A] tracking-[0.2em] uppercase">Layer 2</span>
        <h2 className="font-display text-4xl md:text-6xl mt-3 mb-6 leading-[0.95]">Managed Program<br /><span className="text-gradient">Delivery</span></h2>
        <p className="text-[17px] text-[#B0B0B4] max-w-2xl mb-16 leading-[1.75]">{commercialModel.management.description}</p>
      </Fade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {commercialModel.management.functions.map((fn, i) => (
          <Fade key={fn.name} delay={0.1 + i * 0.06}>
            <div className="bg-[#161618] border border-[#2A2A2C] rounded-2xl p-8 h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-[3px] h-full" style={{ background: `linear-gradient(to bottom, ${partner.primaryColor}, ${partner.secondaryColor})`, opacity: 0.4 + i * 0.15 }} />
              <span className="font-mono text-xs tracking-[0.2em] text-[#71717A]">0{i + 1}</span>
              <h3 className="text-lg font-semibold mt-3 mb-3">{fn.name}</h3>
              <p className="text-[15px] text-[#8C8C8C] leading-[1.7]">{fn.description}</p>
            </div>
          </Fade>
        ))}
      </div>

      <Fade delay={0.35}>
        <div className="flex flex-col md:flex-row gap-4">
          {commercialModel.management.tiers.map((t, i) => (
            <div key={t.name} className={`bg-[#161618] border rounded-2xl p-7 flex-1 ${i === 1 ? 'border-[#3A3A3F]' : 'border-[#2A2A2C]'}`} style={i === 1 ? { boxShadow: `0 0 60px ${partner.primaryColor}06` } : {}}>
              {i === 1 && <span className="text-[11px] font-mono tracking-[0.2em] mb-2 block" style={{ color: partner.primaryColor }}>POPULAR</span>}
              <div className="text-base text-[#A1A1AA] mb-1">{t.name}</div>
              <div className="text-3xl font-bold font-mono" style={{ color: partner.primaryColor }}>{t.price}</div>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  )
}
