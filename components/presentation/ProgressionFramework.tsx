'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { type PartnerConfig, progressionStages } from '@/lib/presentation-data'
import { images } from '@/lib/images'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

export function ProgressionFramework({ partner }: { partner: PartnerConfig }) {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section className="max-w-[960px] mx-auto px-6 md:px-12 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        <div>
          <Fade>
            <span className="font-mono text-sm text-[#71717A] tracking-[0.2em] uppercase">Eight Stages</span>
            <h2 className="font-display text-4xl md:text-6xl mt-3 mb-6 leading-[0.95]">Golfer<br /><span className="text-gradient">Progression</span></h2>
            <p className="text-[17px] text-[#B0B0B4] leading-[1.75]">GolfN helps brands create measurable movement across the golfer journey. Eight stages, each producing distinct outcomes, each feeding the next. Together, they form a compounding growth engine.</p>
          </Fade>
        </div>
        <Fade delay={0.3}>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-8 blur-[80px] opacity-[0.08] rounded-full" style={{ background: partner.primaryColor }} />
              <img src={images.offCourse} alt="GolfN app" className="relative w-56 md:w-64 rounded-[28px]" style={{ filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.6))', transform: 'rotate(2deg)' }} />
            </div>
          </div>
        </Fade>
      </div>

      <div className="space-y-3">
        {progressionStages.map((stage, i) => {
          const isOpen = expanded === i
          const pct = ((i + 1) / 8) * 100
          return (
            <Fade key={stage.number} delay={0.04 * i}>
              <div
                className={`bg-[#161618] border rounded-2xl overflow-hidden cursor-pointer transition-colors ${isOpen ? 'border-[#3A3A3F]' : 'border-[#2A2A2C] hover:border-[#3A3A3F]'}`}
                onClick={() => setExpanded(isOpen ? null : i)}
              >
                <div className="h-[2px] bg-[#2A2A2C]"><div className="h-full" style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${partner.primaryColor}, ${partner.secondaryColor})` }} /></div>
                <div className="p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <span className="font-mono text-2xl font-bold" style={{ color: partner.primaryColor, opacity: 0.3 + i * 0.085 }}>{String(stage.number).padStart(2, '0')}</span>
                      <div>
                        <h3 className="text-lg font-semibold">{stage.name}</h3>
                        {!isOpen && <p className="text-sm text-[#71717A] mt-0.5 hidden md:block">{stage.short}</p>}
                      </div>
                    </div>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-[#52525B] text-xl">{"\u25BE"}</motion.span>
                  </div>
                  {isOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 pt-5 border-t border-[#2A2A2C]">
                      <p className="text-[17px] text-[#B0B0B4] leading-[1.75] mb-5">{stage.detail}</p>
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
        <p className="text-center text-sm text-[#71717A] font-mono mt-12 tracking-wide">{"Fuller-funnel attribution \u00b7 Measurable progression \u00b7 Across the golfer journey"}</p>
      </Fade>
    </section>
  )
}
