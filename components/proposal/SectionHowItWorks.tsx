'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig, progressionStages } from '@/lib/presentation-data'
import { images } from '@/lib/images'
import { Expandable } from './Expandable'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>{children}</motion.div>
}

export function SectionHowItWorks({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="py-20 md:py-32">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <h2 className="font-display text-4xl md:text-7xl leading-[0.9] mb-4">
            How <span className="text-gradient">It Works</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#A1A1AA] max-w-2xl mb-14 md:mb-20">
            Eight stages that move golfers from seeing your brand to buying your product. Each stage feeds the next.
          </p>
        </Fade>

        {/* Compact progression stepper */}
        <div className="space-y-0 mb-14">
          {progressionStages.map((stage, i) => (
            <Fade key={stage.number} delay={0.04 * i}>
              <div className="group">
                <div className="flex items-start gap-4 md:gap-6 py-4 md:py-5 border-b border-[#2A2A2C]/50">
                  <span className="text-3xl md:text-4xl font-mono font-bold shrink-0 w-12 md:w-14" style={{ color: partner.primaryColor, opacity: 0.5 + (i * 0.06) }}>
                    {String(stage.number).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{stage.name}</h3>
                    <p className="text-base md:text-lg text-[#A1A1AA]">{stage.short}</p>
                  </div>
                  {/* Connecting arrow to next stage */}
                  {i < progressionStages.length - 1 && (
                    <div className="hidden md:flex items-center shrink-0 pt-2">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#2A2A2C]">
                        <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* The growth engine — expandable */}
        <Fade delay={0.4}>
          <Expandable
            accentColor={partner.primaryColor}
            trigger={
              <div>
                <span className="text-lg md:text-xl font-semibold text-white">How GolfN Turns Attention Into Qualified Growth</span>
                <p className="text-base text-[#71717A] mt-1">The launch activation creates awareness and builds a compounding audience over time.</p>
              </div>
            }
          >
            <div className="pt-4 grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Attention', desc: 'Launch activation creates awareness and captures the first verified signals from golfers who engage.' },
                { step: '02', title: 'Qualification', desc: 'GolfN identifies the highest-interest users and builds a campaign-specific cohort based on real behavior.' },
                { step: '03', title: 'Expansion', desc: 'The cohort keeps growing as new users show similar interest patterns. Campaign value compounds over time.' },
                { step: '04', title: 'Conversion', desc: 'Qualified users move through education, activation, incentives, and conversion experiences.' },
              ].map((item, i) => (
                <div key={item.step}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-mono font-bold" style={{ color: partner.primaryColor }}>{item.step}</span>
                    {i < 3 && <div className="hidden md:block h-px flex-1" style={{ background: `${partner.primaryColor}30` }} />}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Expandable>
        </Fade>

        {/* GolfN vs Broad Media — expandable */}
        <div className="mt-5">
          <Fade delay={0.45}>
            <Expandable
              accentColor={partner.primaryColor}
              trigger={
                <span className="text-lg md:text-xl font-semibold text-white">How GolfN Compares to Paid Media</span>
              }
            >
              <div className="pt-4 space-y-4">
                {[
                  { label: 'Audience', broad: 'Inferred golfers from modeled interests', golfn: 'Verified golfers using the app on the course' },
                  { label: 'Context', broad: 'Broad platform, mixed content', golfn: 'Golf-native, reward-driven engagement' },
                  { label: 'Education', broad: 'Not available', golfn: 'Learn & Earn with verified comprehension' },
                  { label: 'Conversion', broad: 'Landing page handoff', golfn: 'Exclusive offers, points-backed incentives, in-ecosystem tracking' },
                  { label: 'Post-Purchase', broad: 'Retargeting only', golfn: 'Real-world activation, check-ins, usage verification' },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-3 gap-4 py-3 border-b border-[#2A2A2C]/40 last:border-0">
                    <span className="text-sm font-semibold text-[#D4D4D8]">{row.label}</span>
                    <span className="text-sm text-[#71717A]">{row.broad}</span>
                    <span className="text-sm font-medium" style={{ color: partner.primaryColor }}>{row.golfn}</span>
                  </div>
                ))}
              </div>
            </Expandable>
          </Fade>
        </div>

        {/* Reporting — expandable */}
        <div className="mt-5">
          <Fade delay={0.5}>
            <Expandable
              accentColor={partner.primaryColor}
              trigger={
                <span className="text-lg md:text-xl font-semibold text-white">What You See Each Month</span>
              }
            >
              <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Reach & Engagement', items: ['Impressions delivered', 'Clicks and CTR', 'Entries and key interactions'] },
                  { title: 'Audience Intelligence', items: ['Top-performing cohorts', 'Response patterns', 'Behavioral trends'] },
                  { title: 'Progression Metrics', items: ['Awareness to activation movement', 'Cohort growth over time', 'Downstream actions'] },
                  { title: 'Optimization Recs', items: ['What is working', 'What to adjust', 'Creative and targeting refinements'] },
                ].map((cat) => (
                  <div key={cat.title}>
                    <h4 className="text-base font-bold text-white mb-2">{cat.title}</h4>
                    <ul className="space-y-1">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-[#A1A1AA]">
                          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: partner.primaryColor }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Expandable>
          </Fade>
        </div>
      </div>
    </section>
  )
}
