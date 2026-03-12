'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { type PartnerConfig, progressionStages } from '@/lib/presentation-data'
import { images } from '@/lib/images'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

interface ImageGroup {
  label: string
  images: string[]
  cols: number
  type?: 'grid' | 'email'
}

const stageImageGroups: Record<number, ImageGroup[]> = {
  1: [
    { label: 'Sweepstakes & Campaigns', images: [images.cobraSweeps, images.miuraWedgeSweeps, images.wekopaSweeps, images.cobraOptmDriver], cols: 4 },
    { label: 'In-App Messages', images: [images.inAppMsg1, images.inAppMsg2, images.inAppMsg3, images.inAppMsg4], cols: 4 },
    { label: 'Email Campaigns', images: [images.emailSweepsAnnouncement, images.emailNewProductDrop], cols: 2, type: 'email' },
  ],
  4: [
    { label: 'Affiliate Banners — Post-Sweepstakes Intent Conversion', images: [images.affiliateBanner1, images.affiliateBanner2, images.affiliateBanner3], cols: 3 },
    { label: 'Targeted Banner — Users Who Expressed Interest in Cobra OPTM Driver', images: [images.cobraOptmTargeted], cols: 1 },
  ],
  5: [
    { label: 'Points Exchange Marketplace', images: [images.labPointsExchange, images.miuraPointsExchange, images.bettinardiPointsExchange, images.cobraPointsExchange], cols: 2 },
    { label: 'User Intent Follow-Up Campaign for Conversion', images: [images.emailIntentFollowUp], cols: 1, type: 'email' },
  ],
  7: [
    { label: 'OAuth-Verified Social Proof', images: [images.socialProof1, images.socialProof2], cols: 2 },
  ],
}

const funnelWidths = [100, 93, 86, 79, 72, 65, 58, 51]

export function ProgressionFramework({ partner }: { partner: PartnerConfig }) {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section className="py-32">
      <div className="max-w-[960px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
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
      </div>

      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-2">
          {progressionStages.map((stage, i) => {
            const isOpen = expanded === i
            const groups = stageImageGroups[stage.number]
            const widthPct = funnelWidths[i]
            const opacity = 0.4 + (i / 7) * 0.6

            return (
              <Fade key={stage.number} delay={0.04 * i}>
                <div style={{ width: `${widthPct}%`, minWidth: '320px' }} className="mx-auto">
                  <div
                    className={`relative border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${isOpen ? 'border-[#3A3A3F] bg-[#161618]' : 'border-[#2A2A2C] hover:border-[#3A3A3F] bg-[#131315]'}`}
                    onClick={() => setExpanded(isOpen ? null : i)}
                    style={isOpen ? { boxShadow: `0 0 40px ${partner.primaryColor}10` } : {}}
                  >
                    <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${partner.primaryColor}, ${partner.secondaryColor})`, opacity }} />

                    <div className="p-5 md:p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xl md:text-2xl font-bold" style={{ color: partner.primaryColor, opacity }}>{String(stage.number).padStart(2, '0')}</span>
                          <div>
                            <h3 className="text-base md:text-lg font-semibold">{stage.name}</h3>
                            {!isOpen && <p className="text-sm text-[#71717A] mt-0.5 hidden md:block">{stage.short}</p>}
                          </div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          {groups && !isOpen && (
                            <span className="text-[10px] font-mono tracking-wider px-2 py-1 rounded bg-[#2A2A2C] text-[#8C8C8C] hidden md:block">EXAMPLES</span>
                          )}
                          <motion.svg animate={{ rotate: isOpen ? 180 : 0 }} width="18" height="18" viewBox="0 0 20 20" className="text-[#52525B] shrink-0">
                            <path d="M5 8l5 5 5-5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" />
                          </motion.svg>
                        </div>
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-5 pt-5 border-t border-[#2A2A2C]">
                              <p className="text-[15px] md:text-[17px] text-[#B0B0B4] leading-[1.75] mb-5">{stage.detail}</p>
                              <div className="flex flex-wrap gap-2">
                                {stage.channels.map((ch) => (
                                  <span key={ch} className="text-xs font-mono px-3 py-1.5 rounded-full" style={{ background: `${partner.primaryColor}12`, color: partner.primaryColor }}>{ch}</span>
                                ))}
                              </div>

                              {groups && (
                                <div className="mt-6 pt-6 border-t border-[#2A2A2C] space-y-8" onClick={(e) => e.stopPropagation()}>
                                  {groups.map((group, gi) => (
                                    <div key={gi}>
                                      <p className="text-xs font-mono text-[#71717A] tracking-wider uppercase mb-4">{group.label}</p>

                                      {/* Email type — scrollable container with fade */}
                                      {group.type === 'email' ? (
                                        <div className={`grid gap-4 ${group.cols === 1 ? 'max-w-sm' : `grid-cols-${group.cols}`}`} style={group.cols > 1 ? { gridTemplateColumns: `repeat(${group.cols}, minmax(0, 1fr))` } : {}}>
                                          {group.images.map((img, idx) => (
                                            <div key={idx} className="relative rounded-xl overflow-hidden bg-[#0F0F10] border border-[#2A2A2C]">
                                              <div className="max-h-[500px] overflow-y-auto scrollbar-hide">
                                                <img src={img} alt="" className="w-full h-auto" loading="lazy" />
                                              </div>
                                              <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: 'linear-gradient(to top, #0F0F10, transparent)' }} />
                                              <div className="absolute bottom-3 left-0 right-0 text-center pointer-events-none">
                                                <span className="text-[10px] font-mono text-[#52525B] tracking-wider">SCROLL TO VIEW</span>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      ) : group.cols === 1 ? (
                                        <div className="max-w-xs">
                                          <div className="relative rounded-xl overflow-hidden bg-[#0F0F10] border border-[#2A2A2C]">
                                            <img src={group.images[0]} alt="" className="w-full h-auto max-h-[480px] object-cover object-top" loading="lazy" />
                                          </div>
                                        </div>
                                      ) : (
                                        <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${Math.min(group.cols, 4)}, minmax(0, 1fr))` }}>
                                          {group.images.map((img, idx) => (
                                            <div key={idx} className="relative rounded-xl overflow-hidden bg-[#0F0F10] border border-[#2A2A2C]">
                                              <img src={img} alt="" className="w-full h-auto" loading="lazy" />
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </Fade>
            )
          })}
        </div>

        <Fade delay={0.4}>
          <div className="flex flex-col items-center mt-6">
            <div className="w-px h-8" style={{ background: `linear-gradient(to bottom, ${partner.primaryColor}60, transparent)` }} />
            <div className="mt-2 px-6 py-3 rounded-full border border-[#2A2A2C] bg-[#131315]">
              <span className="text-sm font-mono text-[#71717A] tracking-wide">Fuller-funnel attribution · Measurable progression · Across the golfer journey</span>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}
