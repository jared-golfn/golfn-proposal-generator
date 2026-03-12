'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig, thresholds } from '@/lib/presentation-data'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

export function Thresholds({ partner }: { partner: PartnerConfig }) {
  const items = [
    { label: 'Setup', value: thresholds.setup },
    { label: 'Recurring', value: thresholds.recurring },
    { label: 'Duration', value: thresholds.duration },
    { label: 'Commerce', value: thresholds.commerce },
  ]

  return (
    <section className="max-w-[960px] mx-auto px-6 md:px-12 py-32">
      <Fade>
        <span className="font-mono text-sm text-[#71717A] tracking-[0.2em] uppercase">Minimums</span>
        <h2 className="font-display text-4xl md:text-6xl mt-3 mb-6 leading-[0.95]">Partnership<br /><span className="text-gradient">Thresholds</span></h2>
        <p className="text-[17px] text-[#B0B0B4] max-w-2xl mb-16 leading-[1.75]">These thresholds protect the quality of every program. Partnerships below these levels cannot deliver the audience depth, content quality, reporting rigor, or optimization attention the framework requires.</p>
      </Fade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <Fade key={item.label} delay={0.08 + i * 0.06}>
            <div className="bg-[#161618] border border-[#2A2A2C] rounded-2xl p-8">
              <span className="text-base text-[#71717A]">{item.label}</span>
              <div className="text-2xl font-bold font-mono mt-2" style={{ color: partner.primaryColor }}>{item.value}</div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  )
}
