'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig, strategicSummary, closingStatement } from '@/lib/presentation-data'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

export function StrategicClose({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="max-w-[960px] mx-auto px-6 md:px-12 py-32">
      <Fade>
        <span className="font-mono text-sm tracking-[0.2em] uppercase" style={{ color: partner.primaryColor }}>Strategic Summary</span>
        <h2 className="font-display text-4xl md:text-6xl mt-4 mb-16 leading-[0.95]">Why <span className="text-gradient">GolfN</span></h2>
      </Fade>

      <div className="space-y-12 mb-20">
        {strategicSummary.map((point, i) => (
          <Fade key={i} delay={0.1 + i * 0.1}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-1">
                <span className="font-mono text-3xl font-bold" style={{ color: partner.primaryColor, opacity: 0.4 }}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-2xl font-semibold mb-2">{point.lead}</h3>
                <p className="text-[17px] text-[#B0B0B4] leading-[1.75]">{point.body}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      <Fade delay={0.5}>
        <div className="bg-[#161618] border border-[#2A2A2C] rounded-2xl p-10 md:p-12">
          <p className="text-xl md:text-2xl leading-[1.6] font-light text-[#D4D4D8]">
            {closingStatement}
          </p>
        </div>
      </Fade>

      {/* CTA */}
      <Fade delay={0.6}>
        <div className="mt-24 text-center">
          <div className="w-20 h-[2px] mx-auto mb-10 rounded-full" style={{ background: `linear-gradient(90deg, ${partner.primaryColor}, ${partner.secondaryColor})` }} />
          <h3 className="font-display text-4xl md:text-5xl mb-5">Let\u2019s build together.</h3>
          <p className="text-lg text-[#8C8C8C] max-w-md mx-auto mb-10">
            Design a {partner.partnerName} program that drives real golfers to real action.
          </p>
          <a
            href={`mailto:jared@golfn.com?subject=Partnership%20Discussion%20%E2%80%94%20${encodeURIComponent(partner.partnerName)}`}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-[1.02]"
            style={{ background: `linear-gradient(135deg, ${partner.primaryColor}, ${partner.secondaryColor})`, color: '#0F0F10' }}
          >
            Start the Conversation \u2192
          </a>
        </div>
      </Fade>
    </section>
  )
}
