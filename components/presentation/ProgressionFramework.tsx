'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { type PartnerConfig, progressionStages } from '@/lib/presentation-data'
import { images } from '@/lib/images'
import { usePartnership } from '@/lib/partnership-context'
import { partnershipPaths } from '@/lib/partnership-paths'

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
    { label: 'User-Generated Social Proof', images: [images.socialProof3, images.socialProof4, images.socialProof5], cols: 3 },
  ],
}

function ImageGroupRenderer({ group }: { group: ImageGroup }) {
  if (group.type === 'email') {
    return (
      <div className={`grid gap-4 ${group.cols === 1 ? 'max-w-sm' : ''}`} style={group.cols > 1 ? { gridTemplateColumns: `repeat(${group.cols}, minmax(0, 1fr))` } : {}}>
        {group.images.map((img, idx) => (
          <div key={idx} className="relative rounded-xl overflow-hidden bg-[#0F0F10] border border-[#2A2A2C]">
            <div className="max-h-[500px] overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
              <img src={img} alt="" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: 'linear-gradient(to top, #0F0F10, transparent)' }} />
            <div className="absolute bottom-3 left-0 right-0 text-center pointer-events-none">
              <span className="text-[10px] font-mono text-[#52525B] tracking-wider">SCROLL TO VIEW</span>
            </div>
          </div>
        ))}
      </div>
    )
  }
  if (group.cols === 1) {
    return (
      <div className="max-w-xs">
        <div className="relative rounded-xl overflow-hidden bg-[#0F0F10] border border-[#2A2A2C]">
          <img src={group.images[0]} alt="" className="w-full h-auto max-h-[480px] object-cover object-top" loading="lazy" />
        </div>
      </div>
    )
  }
  return (
    <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${Math.min(group.cols, 4)}, minmax(0, 1fr))` }}>
      {group.images.map((img, idx) => (
        <div key={idx} className="relative rounded-xl overflow-hidden bg-[#0F0F10] border border-[#2A2A2C]">
          <img src={img} alt="" className="w-full h-auto" loading="lazy" />
        </div>
      ))}
    </div>
  )
}

// Which paths include which stages
const stagePathLabels: Record<number, string[]> = {
  1: ['Pilot', 'Growth', 'Strategic'],
  2: ['Pilot', 'Growth', 'Strategic'],
  3: ['Pilot', 'Growth', 'Strategic'],
  4: ['Pilot', 'Growth', 'Strategic'],
  5: ['Growth', 'Strategic'],
  6: ['Growth', 'Strategic'],
  7: ['Growth', 'Strategic'],
  8: ['Strategic'],
}

export function ProgressionFramework({ partner }: { partner: PartnerConfig }) {
  const [expanded, setExpanded] = useState<number | null>(null)
  const { state } = usePartnership()
  const { selectedPath } = state
  const activePath = selectedPath ? partnershipPaths[selectedPath] : null
  const includedStages = activePath ? activePath.includedStages : null

  return (
    <section className="py-32">
      <div className="max-w-[960px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <Fade>
              <span className="font-mono text-sm text-[#71717A] tracking-[0.2em] uppercase">Eight Stages</span>
              <h2 className="font-display text-4xl md:text-6xl mt-3 mb-6 leading-[0.95]">Golfer<br /><span className="text-gradient">Progression</span></h2>
              <p className="text-[17px] text-[#B0B0B4] leading-[1.75]">
                {selectedPath
                  ? `GolfN is built to move golfers through measurable stages, not just generate impressions. Your ${activePath?.name} path includes stages ${includedStages?.[0]}–${includedStages?.[includedStages.length - 1]}, highlighted below.`
                  : 'GolfN helps brands create measurable movement across the golfer journey. Eight stages, each producing distinct outcomes, each feeding the next. Together, they form a compounding growth engine.'
                }
              </p>
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

        {/* Path stage legend */}
        {selectedPath && (
          <Fade delay={0.15}>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm" style={{ background: partner.primaryColor }} />
                <span className="text-sm text-[#A1A1AA]">Included in {activePath?.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#2A2A2C]" />
                <span className="text-sm text-[#52525B]">Advanced stage</span>
              </div>
            </div>
          </Fade>
        )}
      </div>

      {/* Funnel with SVG background shape */}
      <div className="relative max-w-[1100px] mx-auto px-4 md:px-6">
        <svg className="absolute pointer-events-none" style={{ top: '-40px', left: '-60px', right: '-60px', bottom: '-40px', width: 'calc(100% + 120px)', height: 'calc(100% + 80px)' }} preserveAspectRatio="none" viewBox="0 0 1200 100">
          <defs>
            <linearGradient id="funnelGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={partner.primaryColor} stopOpacity="0.07" />
              <stop offset="100%" stopColor={partner.primaryColor} stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <polygon points="0,0 1200,0 900,100 300,100" fill="url(#funnelGrad)" />
        </svg>

        <svg className="absolute pointer-events-none" style={{ top: '-40px', left: '-60px', right: '-60px', bottom: '-40px', width: 'calc(100% + 120px)', height: 'calc(100% + 80px)' }} preserveAspectRatio="none" viewBox="0 0 1200 100">
          <line x1="20" y1="0" x2="310" y2="100" stroke={partner.primaryColor} strokeWidth="0.3" strokeOpacity="0.25" />
          <line x1="1180" y1="0" x2="890" y2="100" stroke={partner.primaryColor} strokeWidth="0.3" strokeOpacity="0.25" />
        </svg>

        <div className="relative space-y-3">
          {progressionStages.map((stage, i) => {
            const isOpen = expanded === i
            const groups = stageImageGroups[stage.number]
            const isIncluded = includedStages ? includedStages.includes(stage.number) : true
            const isDimmed = selectedPath && !isIncluded

            // Opacity: included stages get full treatment, dimmed stages are muted
            const opacity = isDimmed ? 0.2 : 0.35 + (i / 7) * 0.65
            const cardOpacity = isDimmed ? 0.5 : 1
            const pathsForStage = stagePathLabels[stage.number] || []

            return (
              <Fade key={stage.number} delay={0.04 * i}>
                <div
                  className={`relative border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${isOpen ? 'border-[#3A3A3F] bg-[#161618]' : isDimmed ? 'border-[#1E1E20] bg-[#111113]' : 'border-[#2A2A2C] hover:border-[#3A3A3F] bg-[#131315]'}`}
                  onClick={() => setExpanded(isOpen ? null : i)}
                  style={{
                    ...(isOpen && !isDimmed ? { boxShadow: `0 0 40px ${partner.primaryColor}10` } : {}),
                    opacity: cardOpacity,
                    transition: 'opacity 0.3s, border-color 0.3s, background-color 0.3s',
                  }}
                >
                  <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${partner.primaryColor}, ${partner.secondaryColor})`, opacity }} />

                  <div className="px-6 py-7 md:px-8 md:py-9">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <span className="font-mono text-3xl md:text-4xl font-bold" style={{ color: isDimmed ? '#3A3A3F' : partner.primaryColor, opacity: isDimmed ? 0.5 : opacity }}>{String(stage.number).padStart(2, '0')}</span>
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className={`text-xl md:text-2xl font-semibold ${isDimmed ? 'text-[#52525B]' : ''}`}>{stage.name}</h3>
                            {/* Included / Advanced badge */}
                            {selectedPath && isIncluded && (
                              <span className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded" style={{ background: `${partner.primaryColor}20`, color: partner.primaryColor }}>INCLUDED</span>
                            )}
                            {selectedPath && !isIncluded && (
                              <span className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded bg-[#1A1A1D] text-[#52525B]">ADVANCED</span>
                            )}
                          </div>
                          {!isOpen && <p className={`text-base mt-1 hidden md:block ${isDimmed ? 'text-[#3A3A3F]' : 'text-[#71717A]'}`}>{stage.short}</p>}
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        {groups && !isOpen && !isDimmed && (
                          <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded bg-[#2A2A2C] text-[#8C8C8C] hidden md:block">EXAMPLES</span>
                        )}
                        <motion.svg animate={{ rotate: isOpen ? 180 : 0 }} width="22" height="22" viewBox="0 0 20 20" className={isDimmed ? 'text-[#2A2A2C]' : 'text-[#52525B]'}>
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
                          <div className="mt-6 pt-6 border-t border-[#2A2A2C]">
                            <p className={`text-[17px] leading-[1.75] mb-5 ${isDimmed ? 'text-[#52525B]' : 'text-[#B0B0B4]'}`}>{stage.detail}</p>

                            {/* Path inclusion labels */}
                            <div className="flex items-center gap-3 mb-5">
                              <span className="text-xs text-[#52525B]">Typically included in:</span>
                              <div className="flex gap-1.5">
                                {pathsForStage.map(p => (
                                  <span
                                    key={p}
                                    className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded"
                                    style={selectedPath && p.toLowerCase() === activePath?.name.toLowerCase()
                                      ? { background: `${partner.primaryColor}20`, color: partner.primaryColor }
                                      : { background: '#1A1A1D', color: '#71717A' }
                                    }
                                  >
                                    {p}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {stage.channels.map((ch) => (
                                <span key={ch} className="text-xs font-mono px-3 py-1.5 rounded-full" style={{ background: isDimmed ? '#1A1A1D' : `${partner.primaryColor}12`, color: isDimmed ? '#52525B' : partner.primaryColor }}>{ch}</span>
                              ))}
                            </div>

                            {groups && !isDimmed && (
                              <div className="mt-6 pt-6 border-t border-[#2A2A2C] space-y-8" onClick={(e) => e.stopPropagation()}>
                                {groups.map((group, gi) => (
                                  <div key={gi}>
                                    <p className="text-xs font-mono text-[#71717A] tracking-wider uppercase mb-4">{group.label}</p>
                                    <ImageGroupRenderer group={group} />
                                  </div>
                                ))}
                              </div>
                            )}

                            {isDimmed && (
                              <div className="mt-6 pt-4 border-t border-[#2A2A2C]">
                                <p className="text-sm text-[#52525B] italic">This stage is typically available in {pathsForStage.join(' and ')} paths. Consider upgrading to access this stage.</p>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </Fade>
            )
          })}
        </div>
      </div>

      <Fade delay={0.4}>
        <div className="flex flex-col items-center mt-8">
          <div className="w-px h-10" style={{ background: `linear-gradient(to bottom, ${partner.primaryColor}60, transparent)` }} />
          <div className="mt-2 px-6 py-3 rounded-full border border-[#2A2A2C] bg-[#131315]">
            <span className="text-sm font-mono text-[#71717A] tracking-wide">Fuller-funnel attribution · Measurable progression · Across the golfer journey</span>
          </div>
        </div>
      </Fade>
    </section>
  )
}
