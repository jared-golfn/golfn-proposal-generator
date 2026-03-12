'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig, dailyGrindPhases } from '@/lib/presentation-data'
import { images } from '@/lib/images'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

export function DailyGrindEvolution({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="max-w-[960px] mx-auto px-6 md:px-12 py-32">
      <Fade>
        <span className="font-mono text-sm text-[#71717A] tracking-[0.2em] uppercase">Real-World Activation</span>
        <h2 className="font-display text-4xl md:text-6xl mt-3 mb-6 leading-[0.95]">Daily Grind<br /><span className="text-gradient">Evolution</span></h2>
        <p className="text-[17px] text-[#B0B0B4] max-w-xl leading-[1.75] mb-16">{"GolfN\u2019s real-world, location-based check-in system. Golfers check in at courses, pro shops, events, Topgolf, PGA Tour events, and partner retail locations."}</p>
      </Fade>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        {dailyGrindPhases.map((p, i) => (
          <Fade key={p.phase} delay={0.1 + i * 0.08}>
            <div className="bg-[#161618] border border-[#2A2A2C] rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-[11px] font-mono tracking-[0.15em] font-bold" style={{ background: partner.primaryColor, color: '#0F0F10' }}>{p.phase.toUpperCase()}</div>
              <h3 className="text-xl font-semibold mt-4 mb-3">{p.name}</h3>
              <p className="text-[15px] text-[#8C8C8C] leading-relaxed mb-5">{p.description}</p>
              <span className="inline-block text-sm font-mono px-4 py-2 rounded-lg" style={{ background: `${partner.primaryColor}12`, color: partner.primaryColor }}>{p.model}</span>
            </div>
          </Fade>
        ))}
      </div>

      <Fade delay={0.4}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-[#161618] border border-[#2A2A2C] rounded-2xl p-8 md:p-10">
          <div>
            <h4 className="text-xl font-semibold mb-3">{"Learn & Earn \u2014 The Digital Complement"}</h4>
            <p className="text-[17px] text-[#B0B0B4] leading-[1.75]">{"While Daily Grind is real-world and location-based, Learn & Earn is the digital education and comprehension system. It lives within the \u201cMore Ways to Earn\u201d section of the app. Users earn points by consuming content and proving comprehension \u2014 wrong answers mean no or reduced points. Couch, not course."}</p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-6 blur-[60px] opacity-[0.08] rounded-full" style={{ background: partner.secondaryColor }} />
              <img src={images.pointExchange} alt="Point Exchange" className="relative w-52 md:w-60 rounded-[24px] max-h-[400px] object-cover object-top" style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.6))' }} />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}
