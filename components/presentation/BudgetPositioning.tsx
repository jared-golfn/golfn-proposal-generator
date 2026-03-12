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
    <section className="py-32">
      {/* Text content stays in container */}
      <div className="max-w-[960px] mx-auto px-6 md:px-12">
        <Fade>
          <span className="font-mono text-sm tracking-[0.2em] uppercase" style={{ color: partner.primaryColor }}>Budget Positioning</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 mb-10 leading-[0.95]">{budgetPositioning.headline}</h2>
        </Fade>

        {budgetPositioning.paragraphs.map((p, i) => (
          <Fade key={i} delay={0.1 + i * 0.08}>
            <p className="text-[17px] text-[#B0B0B4] leading-[1.75] mb-6 max-w-2xl">{p}</p>
          </Fade>
        ))}
      </div>

      {/* Table breaks out of container — full width with max */}
      <Fade delay={0.35}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-16">
          <div className="bg-[#111113] border border-[#2A2A2C] rounded-3xl overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-12">
              <div className="col-span-3 p-6 md:p-8" />
              <div className="col-span-4 p-6 md:p-8 border-l border-[#2A2A2C]">
                <span className="font-mono text-sm tracking-[0.2em] text-[#52525B] font-medium">BROAD PAID MEDIA</span>
              </div>
              <div className="col-span-5 p-6 md:p-8 border-l border-[#2A2A2C]" style={{ background: `${partner.primaryColor}0A` }}>
                <div className="flex items-center gap-3">
                  <img src={images.logoIcon} alt="" className="h-7 w-7" />
                  <span className="font-mono text-sm tracking-[0.2em] font-bold" style={{ color: partner.primaryColor }}>GOLFN</span>
                </div>
              </div>
            </div>

            {/* Rows */}
            {comparisonRows.map((row, i) => {
              const isNotAvailable = row.broad === 'Not available'
              return (
                <div key={row.category} className={`grid grid-cols-12 border-t border-[#2A2A2C]/70`}>
                  <div className="col-span-3 p-5 md:p-6 flex items-start">
                    <span className="text-[15px] font-semibold text-white">{row.category}</span>
                  </div>
                  <div className="col-span-4 p-5 md:p-6 border-l border-[#2A2A2C]/70 flex items-start">
                    <span className={`text-[15px] leading-relaxed ${isNotAvailable ? 'text-[#52525B] italic' : 'text-[#71717A]'}`}>{row.broad}</span>
                  </div>
                  <div className="col-span-5 p-5 md:p-6 border-l border-[#2A2A2C]/70 flex items-start" style={{ background: `${partner.primaryColor}06` }}>
                    <span className="text-[15px] text-[#E4E4E7] leading-relaxed font-medium">{row.golfn}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Fade>

      {/* Blockquote back in container */}
      <div className="max-w-[960px] mx-auto px-6 md:px-12">
        <Fade delay={0.5}>
          <p className="text-[17px] text-[#B0B0B4] leading-[1.75] border-l-2 pl-6 mt-12 max-w-2xl" style={{ borderColor: partner.primaryColor }}>
            Brands already pay for these functions across fragmented partners and channels. GolfN consolidates them into one coordinated, measurable system built around verified golfers.
          </p>
        </Fade>
      </div>
    </section>
  )
}
