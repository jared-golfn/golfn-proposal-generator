'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { type PartnerConfig, progressionStages } from '@/lib/presentation-data'

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

export function ProgressionFramework({ partner }: { partner: PartnerConfig }) {
  const [expandedStage, setExpandedStage] = useState<number | null>(null)

  return (
    <section className="section-padding bg-grid relative">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <span className="font-mono text-xs text-golfn-white-faint tracking-widest uppercase">Eight Stages</span>
            <h2 className="font-display text-4xl md:text-6xl mt-3">Golfer<br /><span className="text-gradient">Progression</span></h2>
            <p className="text-golfn-white-dim mt-4 max-w-xl">
              Every golfer moves through a measurable progression — from first awareness to long-term retention and advocacy.
            </p>
          </div>
        </FadeIn>

        {/* Progression stages */}
        <div className="space-y-3">
          {progressionStages.map((stage, i) => {
            const isExpanded = expandedStage === i
            const progress = ((i + 1) / progressionStages.length) * 100

            return (
              <FadeIn key={stage.number} delay={0.05 * i}>
                <div
                  className={`card overflow-hidden cursor-pointer transition-all duration-300 ${
                    isExpanded ? 'ring-1' : 'hover:border-golfn-muted'
                  }`}
                  style={isExpanded ? { borderColor: `${partner.primaryColor}40` } : {}}
                  onClick={() => setExpandedStage(isExpanded ? null : i)}
                >
                  {/* Progress bar at top */}
                  <div className="h-0.5 bg-golfn-grid">
                    <div
                      className="h-full transition-all duration-700"
                      style={{
                        width: `${progress}%`,
                        background: `linear-gradient(90deg, ${partner.primaryColor}, ${partner.secondaryColor})`,
                      }}
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span
                          className="font-mono text-2xl font-bold"
                          style={{ color: partner.primaryColor, opacity: 0.4 + i * 0.075 }}
                        >
                          {String(stage.number).padStart(2, '0')}
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold">{stage.name}</h3>
                          {!isExpanded && (
                            <p className="text-xs text-golfn-white-faint mt-0.5 hidden md:block">
                              {stage.description.substring(0, 80)}…
                            </p>
                          )}
                        </div>
                      </div>
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className="text-golfn-muted"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20">
                          <path d="M5 8l5 5 5-5" stroke="currentColor" fill="none" strokeWidth="1.5" />
                        </svg>
                      </motion.span>
                    </div>

                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 pt-4 border-t border-golfn-grid"
                      >
                        <p className="text-sm text-golfn-white-dim leading-relaxed mb-4">{stage.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {stage.channels.map((ch) => (
                            <span
                              key={ch}
                              className="text-xs font-mono px-3 py-1 rounded-full"
                              style={{ background: `${partner.primaryColor}15`, color: partner.primaryColor }}
                            >
                              {ch}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>

        {/* Attribution language note */}
        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-xs text-golfn-white-faint font-mono">
              Fuller-funnel attribution · Measurable progression tracking · Across key stages of the golfer journey
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
