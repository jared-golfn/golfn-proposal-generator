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

// Image groups for stages that have visual examples
interface ImageGroup {
  label: string
  images: string[]
  cols: number // grid columns
}

const stageImageGroups: Record<number, ImageGroup[]> = {
  1: [
    {
      label: 'Sweepstakes & Campaigns',
      images: [images.cobraSweeps, images.miuraWedgeSweeps, images.wekopaSweeps, images.cobraOptmDriver],
      cols: 4,
    },
    {
      label: 'In-App Messages',
      images: [images.inAppMsg1, images.inAppMsg2, images.inAppMsg3, images.inAppMsg4],
      cols: 4,
    },
  ],
  5: [
    {
      label: 'Points Exchange Marketplace',
      images: [images.labPointsExchange, images.miuraPointsExchange, images.bettinardiPointsExchange, images.cobraPointsExchange],
      cols: 2,
    },
  ],
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
          const groups = stageImageGroups[stage.number]
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
                    <div className="flex items-center gap-3">
                      {groups && !isOpen && (
                        <span className="text-[10px] font-mono tracking-wider px-2 py-1 rounded bg-[#2A2A2C] text-[#8C8C8C] hidden md:block">EXAMPLES</span>
                      )}
                      <motion.svg animate={{ rotate: isOpen ? 180 : 0 }} width="20" height="20" viewBox="0 0 20 20" className="text-[#52525B] shrink-0">
                        <path d="M5 8l5 5 5-5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" />
                      </motion.svg>
                    </div>
                  </div>
                  {isOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 pt-5 border-t border-[#2A2A2C]">
                      <p className="text-[17px] text-[#B0B0B4] leading-[1.75] mb-5">{stage.detail}</p>
                      <div className="flex flex-wrap gap-2">
                        {stage.channels.map((ch) => (
                          <span key={ch} className="text-xs font-mono px-3 py-1.5 rounded-full" style={{ background: `${partner.primaryColor}12`, color: partner.primaryColor }}>{ch}</span>
                        ))}
                      </div>

                      {/* Stage-specific image groups */}
                      {groups && (
                        <div className="mt-6 pt-6 border-t border-[#2A2A2C] space-y-8" onClick={(e) => e.stopPropagation()}>
                          {groups.map((group, gi) => (
                            <div key={gi}>
                              <p className="text-xs font-mono text-[#71717A] tracking-wider uppercase mb-4">{group.label}</p>
                              <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${group.cols}, minmax(0, 1fr))` }}>
                                {group.images.map((img, idx) => (
                                  <div key={idx} className="relative rounded-xl overflow-hidden bg-[#0F0F10] border border-[#2A2A2C]">
                                    <img src={img} alt="" className="w-full h-auto" loading="lazy" />
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              </div>
            </Fade>
          )
        })}
      </div>

      <Fade delay={0.4}>
        <p className="text-center text-sm text-[#71717A] font-mono mt-12 tracking-wide">Fuller-funnel attribution · Measurable progression · Across the golfer journey</p>
      </Fade>
    </section>
  )
}
