'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig, thresholds } from '@/lib/presentation-data'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

const items = [
  { label: 'Setup Investment', value: thresholds.setup, icon: '01', description: 'Covers strategy, creative framework, campaign architecture, and technical implementation.' },
  { label: 'Monthly Commitment', value: thresholds.recurring, icon: '02', description: 'Funds ongoing program orchestration, optimization, reporting, and partner management.' },
  { label: 'Minimum Duration', value: thresholds.duration, icon: '03', description: 'Required to allow for audience development, optimization cycles, and measurable progression.' },
  { label: 'Commerce Suitability', value: thresholds.commerce, icon: '04', description: 'Economics must support meaningful incentives and program execution for the golfer.' },
]

export function Thresholds({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="w-content px-5 md:px-12 py-20 md:py-32">
      <Fade>
        <span className="font-mono text-sm text-[#71717A] tracking-[0.2em] uppercase">Minimums</span>
        <h2 className="font-display text-3xl md:text-5xl mt-3 mb-4 leading-[0.95]">Program<br /><span className="text-gradient">Requirements</span></h2>
        <p className="text-base md:text-[17px] text-[#B0B0B4] max-w-xl mb-4 leading-[1.75]">These minimums help preserve execution quality and reporting rigor. They are practical, not restrictive.</p>
        <p className="text-sm text-[#52525B] mb-10 md:mb-16">To preserve the quality of every program, GolfN partnerships require the following minimum structure.</p>
      </Fade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {items.map((item, i) => (
          <Fade key={item.label} delay={0.08 + i * 0.06}>
            <div className="bg-[#131315] border border-[#2A2A2C] rounded-xl md:rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-xl font-bold" style={{ color: partner.primaryColor, opacity: 0.4 }}>{item.icon}</span>
                <span className="text-sm md:text-base text-[#A1A1AA] font-medium">{item.label}</span>
              </div>
              <div className="text-xl md:text-2xl font-bold font-mono mb-2" style={{ color: partner.primaryColor }}>{item.value}</div>
              <p className="text-xs md:text-sm text-[#52525B] leading-relaxed">{item.description}</p>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  )
}
