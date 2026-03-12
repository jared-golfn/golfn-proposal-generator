'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { type PartnerConfig, progressionStages } from '@/lib/presentation-data'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

export function ProgressionFramework({ partner }: { partner: PartnerConfig }) {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section className="max-w-5xl mx-auto px-6 md:px-12 py-28">
      <Fade>
        <span className="font-mono text-sm text-golfn-faint tracking-[0.2em] uppercase">Eight Stages</span>
        <h2 className="font-display text-5xl md:text-7xl mt-3 mb-6 leading-[0.92]">Golfer<br /><span className="text-gradient">Progression</span></h2>
        <p className="text-lg text-golfn-dim max-w-xl mb-16">Every golfer moves through a measurable progression — from first awareness to long-term retention.</p>
      </Fade>

      <div className="space-y-3">
        {progressionStages.map((stage, i) => {
          const isOpen = expanded === i
          const pct = ((i + 1) / 8) * 100
          return (
            <Fade key={stage.number} delay={0.04 * i}>
              <div
                className={`bg-golfn-card border rounded-2xl overflow-hidden cursor-pointer transition-colors ${isOpen ? 'border-golfn-border-light' : 'border-golfn-border hover:border-golfn-border-light'}`}
                onClick={() => setExpanded(isOpen ? null : i)}
              >
                <div className="h-[2px] bg-golfn-border"><div className="h-full" style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${partner.primaryColor}, ${partner.secondaryColor})` }} /></div>
                <div className="p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <span className="font-mono text-2xl font-bold" style={{ color: partner.primaryColor, opacity: 0.35 + i * 0.08 }}>{String(stage.number).padStart(2, '0')}</span>
                      <div>
                        <h3 className="text-lg font-semibold">{stage.name}</h3>
                        {!isOpen && <p className="text-sm text-golfn-faint mt-0.5 hidden md:block">{stage.description.slice(0, 90)}…</p>}
                      </div>
                    </div>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-golfn-muted text-lg">▾</motion.span>
                  </div>
                  {isOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 pt-5 border-t border-golfn-border">
                      <p className="text-base text-golfn-dim leading-relaxed mb-4">{stage.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {stage.channels.map((ch) => (
                          <span key={ch} className="text-xs font-mono px-3 py-1.5 rounded-full" style={{ background: `${partner.primaryColor}12`, color: partner.primaryColor }}>{ch}</span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </Fade>
          )
        })}
      </div>

      <Fade delay={0.4}>
        <p className="text-center text-sm text-golfn-faint font-mono mt-12">Fuller-funnel attribution · Measurable progression · Across the golfer journey</p>
      </Fade>
    </section>
  )
}
