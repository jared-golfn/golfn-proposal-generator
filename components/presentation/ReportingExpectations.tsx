'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig } from '@/lib/presentation-data'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

const reportingBuckets = [
  {
    number: '01',
    title: 'Reach & Engagement',
    items: ['Impressions delivered', 'Clicks and CTR where relevant', 'Saves, entries, and key interactions', 'Engagement by surface'],
  },
  {
    number: '02',
    title: 'Audience Intelligence',
    items: ['Top-performing cohorts', 'Audience response patterns', 'Content and offer resonance', 'Qualifying behavioral trends'],
  },
  {
    number: '03',
    title: 'Progression Metrics',
    items: ['Awareness to activation movement', 'Sweepstakes views to entries', 'Cohort growth over time', 'Downstream actions where applicable'],
  },
  {
    number: '04',
    title: 'Optimization Recommendations',
    items: ['What is working', 'What should be adjusted', 'Audience refinements', 'Creative and offer recommendations'],
  },
]

export function ReportingExpectations({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="py-20 md:py-32">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <span className="font-mono text-sm text-[#71717A] tracking-[0.2em] uppercase">Program Visibility</span>
          <h2 className="font-display text-3xl md:text-5xl mt-3 mb-4 leading-[0.95]">{"What You'll See"} <span className="text-gradient">Each Month</span></h2>
          <p className="text-base md:text-lg text-[#C4C4C8] max-w-2xl leading-[1.75] mb-10 md:mb-14 font-medium">Every active program includes monthly reporting and strategic recommendations. This is not a passive dashboard. It is an ongoing optimization rhythm designed to improve results over time.</p>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {reportingBuckets.map((bucket, i) => (
            <Fade key={bucket.number} delay={0.1 + i * 0.08}>
              <div className="bg-[#131315] border border-[#2A2A2C] rounded-2xl p-7 md:p-9 hover:border-[#3A3A3F] transition-all h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-2xl font-bold" style={{ color: partner.primaryColor, opacity: 0.4 }}>{bucket.number}</span>
                  <h3 className="text-lg md:text-xl font-bold text-white">{bucket.title}</h3>
                </div>
                <div className="space-y-2.5">
                  {bucket.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full mt-[8px] shrink-0" style={{ background: partner.primaryColor }} />
                      <span className="text-sm md:text-base text-[#C4C4C8] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>

        <Fade delay={0.5}>
          <div className="mt-8 md:mt-10 bg-[#161618] border border-[#2A2A2C] rounded-2xl p-6 md:p-8 border-l-[3px]" style={{ borderLeftColor: partner.primaryColor }}>
            <p className="text-base md:text-lg text-[#D4D4D8] leading-[1.7] font-medium"><span className="font-bold text-white">The goal is not just reporting.</span> It is to give your team clear visibility into what is working, what is changing, and what to do next.</p>
          </div>
        </Fade>
      </div>
    </section>
  )
}
