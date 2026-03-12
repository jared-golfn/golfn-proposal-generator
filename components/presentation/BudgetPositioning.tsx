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
    <section className="py-20 md:py-32">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <span className="font-mono text-sm tracking-[0.2em] uppercase" style={{ color: partner.primaryColor }}>Budget Positioning</span>
          <h2 className="font-display text-3xl md:text-5xl mt-4 mb-8 md:mb-10 leading-[0.95]">{budgetPositioning.headline}</h2>
        </Fade>

        {budgetPositioning.paragraphs.map((p, i) => (
          <Fade key={i} delay={0.1 + i * 0.08}>
            <p className="text-base md:text-lg text-[#B0B0B4] leading-[1.75] mb-6 max-w-2xl">{p}</p>
          </Fade>
        ))}
      </div>

      <Fade delay={0.35}>
        <div className="w-content-wider px-4 md:px-6 mt-12 md:mt-16">
          <div className="bg-[#111113] border border-[#2A2A2C] rounded-2xl md:rounded-3xl overflow-hidden">
            <div className="grid grid-cols-12">
              <div className="col-span-3 p-5 md:p-9" />
              <div className="col-span-4 p-5 md:p-9 border-l border-[#2A2A2C] flex items-center">
                <span className="font-mono text-sm md:text-base tracking-[0.2em] text-[#52525B] font-medium">BROAD PAID MEDIA</span>
              </div>
              <div className="col-span-5 p-5 md:p-9 border-l border-[#2A2A2C] flex items-center" style={{ background: `${partner.primaryColor}0C` }}>
                <img
                  src="https://cdn.sanity.io/images/e3wja34v/production/3bcfd9b87d10769072b59ff0fe7cbefe7d36286e-3594x860.png"
                  alt="GolfN"
                  className="h-12 md:h-16 w-auto"
                  style={{ filter: `drop-shadow(0 0 20px ${partner.primaryColor}40)` }}
                />
              </div>
            </div>

            {comparisonRows.map((row) => {
              const isNotAvailable = row.broad === 'Not available'
              return (
                <div key={row.category} className="grid grid-cols-12 border-t border-[#2A2A2C]/70">
                  <div className="col-span-3 p-4 md:p-7 flex items-start">
                    <span className="text-sm md:text-base font-semibold text-white">{row.category}</span>
                  </div>
                  <div className="col-span-4 p-4 md:p-7 border-l border-[#2A2A2C]/70 flex items-start">
                    <span className={`text-sm md:text-base leading-relaxed ${isNotAvailable ? 'text-[#3F3F46] italic' : 'text-[#71717A]'}`}>{row.broad}</span>
                  </div>
                  <div className="col-span-5 p-4 md:p-7 border-l border-[#2A2A2C]/70 flex items-start" style={{ background: `${partner.primaryColor}06` }}>
                    <span className="text-sm md:text-base text-[#F4F4F5] leading-relaxed font-medium">{row.golfn}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Fade>

      <div className="w-content px-5 md:px-12">
        <Fade delay={0.5}>
          <p className="text-base md:text-lg text-[#B0B0B4] leading-[1.75] border-l-2 pl-6 mt-10 md:mt-12 max-w-2xl" style={{ borderColor: partner.primaryColor }}>
            Brands already pay for these functions across fragmented partners and channels. GolfN consolidates them into one coordinated, measurable system built around verified golfers.
          </p>
        </Fade>
      </div>
    </section>
  )
}
