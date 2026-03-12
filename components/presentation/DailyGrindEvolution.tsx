'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig, dailyGrindPhases } from '@/lib/presentation-data'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

export function DailyGrindEvolution({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-12 py-28">
      <Fade>
        <span className="font-mono text-sm text-golfn-faint tracking-[0.2em] uppercase">Real-World Activation</span>
        <h2 className="font-display text-5xl md:text-7xl mt-3 mb-6 leading-[0.92]">Daily Grind<br /><span className="text-gradient">Evolution</span></h2>
        <p className="text-lg text-golfn-dim max-w-xl mb-6">GolfN's real-world, location-based check-in system. Golfers check in at courses, pro shops, events, Topgolf, PGA Tour events, and partner retail locations.</p>
        <div className="flex flex-wrap gap-3 mb-16">
          <span className="text-sm font-mono text-golfn-faint border border-golfn-border rounded-full px-4 py-1.5">Location-verified check-ins only</span>
          <span className="text-sm font-mono text-golfn-faint border border-golfn-border rounded-full px-4 py-1.5">Not a general-purpose task engine</span>
        </div>
      </Fade>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dailyGrindPhases.map((p, i) => (
          <Fade key={p.phase} delay={0.1 + i * 0.08}>
            <div className="bg-golfn-card border border-golfn-border rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-[11px] font-mono tracking-[0.15em] font-bold" style={{ background: partner.primaryColor, color: '#09090B' }}>{p.phase.toUpperCase()}</div>
              <h3 className="text-xl font-semibold mt-4 mb-3">{p.name}</h3>
              <p className="text-base text-golfn-faint leading-relaxed mb-5">{p.description}</p>
              <span className="inline-block text-sm font-mono px-4 py-2 rounded-lg" style={{ background: `${partner.primaryColor}12`, color: partner.primaryColor }}>{p.model}</span>
            </div>
          </Fade>
        ))}
      </div>

      <Fade delay={0.4}>
        <div className="mt-16 bg-golfn-card border border-golfn-border rounded-2xl p-8 border-l-[3px]" style={{ borderLeftColor: partner.secondaryColor }}>
          <h4 className="text-lg font-semibold mb-2">Learn & Earn — The Digital Complement</h4>
          <p className="text-base text-golfn-dim leading-relaxed">While Daily Grind is real-world and location-based, Learn & Earn is the digital education and comprehension system. Users earn points by consuming content and proving comprehension — wrong answers mean no or reduced points. Couch, not course.</p>
        </div>
      </Fade>
    </section>
  )
}
