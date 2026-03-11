'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig, dailyGrindPhases } from '@/lib/presentation-data'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export function DailyGrindEvolution({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <span className="font-mono text-xs text-golfn-white-faint tracking-widest uppercase">Real-World Activation</span>
            <h2 className="font-display text-4xl md:text-6xl mt-3">Daily Grind<br /><span className="text-gradient">Evolution</span></h2>
            <p className="text-golfn-white-dim mt-4 max-w-xl">
              Daily Grind is GolfN's real-world, location-based check-in system. Golfers check in at courses,
              pro shops, events, Topgolf, PGA Tour events, and partner retail locations.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="text-xs font-mono text-golfn-white-faint border border-golfn-grid rounded-full px-4 py-1.5">
                Not a general-purpose task engine
              </span>
              <span className="text-xs font-mono text-golfn-white-faint border border-golfn-grid rounded-full px-4 py-1.5">
                Location-verified check-ins only
              </span>
            </div>
          </div>
        </FadeIn>

        {/* 3-Phase Evolution */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-px bg-golfn-grid hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dailyGrindPhases.map((phase, i) => (
              <FadeIn key={phase.phase} delay={0.1 + i * 0.1}>
                <div className="card p-8 relative">
                  {/* Phase indicator */}
                  <div
                    className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-[10px] font-mono tracking-widest font-bold"
                    style={{ background: partner.primaryColor, color: '#0F0F10' }}
                  >
                    {phase.phase.toUpperCase()}
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-2">{phase.name}</h3>
                    <p className="text-sm text-golfn-white-faint leading-relaxed mb-4">{phase.description}</p>
                    <div
                      className="text-xs font-mono px-3 py-2 rounded-lg inline-block"
                      style={{ background: `${partner.primaryColor}15`, color: partner.primaryColor }}
                    >
                      {phase.model}
                    </div>
                  </div>

                  {/* Arrow to next phase */}
                  {i < dailyGrindPhases.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                      <svg width="24" height="24" viewBox="0 0 24 24" style={{ color: partner.primaryColor }}>
                        <path d="M9 6l6 6-6 6" stroke="currentColor" fill="none" strokeWidth="2" />
                      </svg>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Learn & Earn distinction */}
        <FadeIn delay={0.4}>
          <div className="mt-16 card p-8 border-l-2" style={{ borderLeftColor: partner.secondaryColor }}>
            <h4 className="font-semibold mb-2">Learn & Earn — The Digital Complement</h4>
            <p className="text-sm text-golfn-white-dim leading-relaxed">
              While Daily Grind is real-world and location-based, Learn & Earn is the digital education and
              comprehension system. It lives within the "More Ways to Earn" section of the app. Users earn
              points by consuming content and proving comprehension — wrong answers mean no points or reduced points.
              This is what users do on the couch, not on the course.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
