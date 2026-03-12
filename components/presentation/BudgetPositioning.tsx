'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig, budgetPositioning } from '@/lib/presentation-data'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

const comparisonRows = [
  { category: 'Audience', broad: 'Inferred golfers based on modeled interests', golfn: 'Verified golfers using the app on the course' },
  { category: 'Context', broad: 'Broad platform, mixed content', golfn: 'Golf-native, reward-driven engagement' },
  { category: 'Intent Capture', broad: 'Clicks and page views', golfn: 'First-party behavioral signals, multi-touch engagement' },
  { category: 'Education', broad: 'Not available', golfn: 'Learn & Earn with verified comprehension' },
  { category: 'Conversion Support', broad: 'Landing page handoff', golfn: 'Exclusive offers, points-backed incentives, in-ecosystem tracking' },
  { category: 'Post-Purchase', broad: 'Retargeting only', golfn: 'Real-world activation, missions, check-ins, usage verification' },
  { category: 'Social Proof', broad: 'Not available', golfn: 'OAuth-verified social actions from verified golfers' },
  { category: 'Downstream Visibility', broad: 'Click-level attribution', golfn: 'Measurable progression tracking across the golfer journey' },
]

export function BudgetPositioning({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="max-w-[960px] mx-auto px-6 md:px-12 py-32">
      <Fade>
        <span className="font-mono text-sm tracking-[0.2em] uppercase" style={{ color: partner.primaryColor }}>Budget Positioning</span>
        <h2 className="font-display text-4xl md:text-5xl mt-4 mb-10 leading-[0.95]">{budgetPositioning.headline}</h2>
      </Fade>

      {budgetPositioning.paragraphs.map((p, i) => (
        <Fade key={i} delay={0.1 + i * 0.08}>
          <p className="text-[17px] text-[#B0B0B4] leading-[1.75] mb-6 max-w-2xl">{p}</p>
        </Fade>
      ))}

      {/* Comparison table */}
      <Fade delay={0.35}>
        <div className="mt-16 bg-[#131315] border border-[#2A2A2C] rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-12 border-b border-[#2A2A2C]">
            <div className="col-span-3 p-5" />
            <div className="col-span-4 p-5 border-l border-[#2A2A2C]">
              <span className="font-mono text-xs tracking-[0.15em] text-[#71717A]">BROAD PAID MEDIA</span>
            </div>
            <div className="col-span-5 p-5 border-l border-[#2A2A2C]" style={{ background: `${partner.primaryColor}08` }}>
              <span className="font-mono text-xs tracking-[0.15em] font-semibold" style={{ color: partner.primaryColor }}>GOLFN</span>
            </div>
          </div>

          {/* Rows */}
          {comparisonRows.map((row, i) => (
            <div key={row.category} className={`grid grid-cols-12 ${i < comparisonRows.length - 1 ? 'border-b border-[#2A2A2C]/60' : ''}`}>
              <div className="col-span-3 p-5 flex items-start">
                <span className="text-sm font-semibold text-[#E4E4E7]">{row.category}</span>
              </div>
              <div className="col-span-4 p-5 border-l border-[#2A2A2C]/60 flex items-start">
                <span className="text-sm text-[#71717A] leading-relaxed">{row.broad}</span>
              </div>
              <div className="col-span-5 p-5 border-l border-[#2A2A2C]/60 flex items-start" style={{ background: `${partner.primaryColor}04` }}>
                <span className="text-sm text-[#D4D4D8] leading-relaxed">{row.golfn}</span>
              </div>
            </div>
          ))}
        </div>
      </Fade>

      {/* Blockquote */}
      <Fade delay={0.5}>
        <p className="text-[17px] text-[#B0B0B4] leading-[1.75] border-l-2 pl-6 mt-12 max-w-2xl" style={{ borderColor: partner.primaryColor }}>
          Brands already pay for these functions across fragmented partners and channels. GolfN consolidates them into one coordinated, measurable system built around verified golfers.
        </p>
      </Fade>
    </section>
  )
}
