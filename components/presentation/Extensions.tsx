'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig } from '@/lib/presentation-data'
import { usePartnership } from '@/lib/partnership-context'
import { extensions as allExtensions, partnershipPaths } from '@/lib/partnership-paths'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

const pathLabels: Record<string, string> = { pilot: 'Pilot', growth: 'Growth', strategic: 'Strategic' }

export function Extensions({ partner }: { partner: PartnerConfig }) {
  const { state, toggleExtension, isExtensionRecommended } = usePartnership()
  const { selectedPath, selectedExtensions } = state
  const activePath = selectedPath ? partnershipPaths[selectedPath] : null

  const sortedExtensions = [...allExtensions].sort((a, b) => {
    const aRec = selectedPath ? (activePath!.recommendedExtensions.includes(a.id) ? 0 : 1) : 0
    const bRec = selectedPath ? (activePath!.recommendedExtensions.includes(b.id) ? 0 : 1) : 0
    if (aRec !== bRec) return aRec - bRec
    return b.bestForPaths.length - a.bestForPaths.length
  })

  return (
    <section className="w-content px-5 md:px-12 py-20 md:py-32">
      <Fade>
        <span className="font-mono text-sm text-[#71717A] tracking-[0.2em] uppercase">Modular Add-Ons</span>
        <h2 className="font-display text-3xl md:text-5xl mt-3 mb-4 leading-[0.95]">Optional<br /><span className="text-gradient">Extensions</span></h2>
        <p className="text-base md:text-[17px] text-[#B0B0B4] leading-[1.75] max-w-xl mb-4">These modules can be layered onto the core program when needed. Not every program includes every module.</p>
        {selectedPath && (
          <p className="text-sm mb-8 md:mb-10" style={{ color: partner.primaryColor }}>
            Extensions recommended for your {activePath?.name} path are highlighted below.
          </p>
        )}
        {!selectedPath && <div className="mb-8 md:mb-10" />}
      </Fade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {sortedExtensions.map((ext, i) => {
          const isSelected = selectedExtensions.includes(ext.id)
          const isRec = isExtensionRecommended(ext.id)
          const bestForLabels = ext.bestForPaths.map(p => pathLabels[p])

          return (
            <Fade key={ext.id} delay={0.04 * i}>
              <div
                className={`relative border rounded-xl md:rounded-2xl p-5 md:p-6 transition-all duration-200 ${isSelected ? 'border-[#3A3A3F] bg-[#1A1A1D]' : 'border-[#2A2A2C] bg-[#131315] hover:border-[#3A3A3F]'}`}
                style={isSelected ? { boxShadow: `0 0 30px ${partner.primaryColor}10` } : {}}
              >
                {isRec && (
                  <span className="absolute -top-2.5 right-4 md:right-5 text-[9px] font-mono tracking-wider px-2 py-0.5 rounded" style={{ background: partner.primaryColor, color: '#0F0F10' }}>
                    {selectedPath ? `REC` : 'REC'}
                  </span>
                )}

                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-semibold mb-1">{ext.name}</h3>
                    <p className="text-xs md:text-sm text-[#8C8C8C] leading-relaxed mb-3">{ext.description}</p>

                    <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                      <div className="flex gap-1">
                        {bestForLabels.map(label => (
                          <span key={label} className="text-[9px] md:text-[10px] font-mono tracking-wider px-1.5 md:px-2 py-0.5 rounded bg-[#1A1A1D] border border-[#2A2A2C] text-[#71717A]">
                            {label}
                          </span>
                        ))}
                      </div>
                      {ext.price && (
                        <span className="text-xs font-mono" style={{ color: partner.secondaryColor }}>{ext.price}</span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => toggleExtension(ext.id)}
                    className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${isSelected ? '' : 'border-[#2A2A2C] hover:border-[#3A3A3F] bg-[#161618]'}`}
                    style={isSelected ? { background: `${partner.primaryColor}20`, borderColor: `${partner.primaryColor}40` } : {}}
                  >
                    {isSelected ? (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M4 9l3.5 3.5L14 5" stroke={partner.primaryColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 4v10M4 9h10" stroke="#52525B" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </Fade>
          )
        })}
      </div>

      {selectedExtensions.length > 0 && (
        <Fade delay={0.3}>
          <div className="mt-6 md:mt-8 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full" style={{ background: partner.primaryColor }} />
            <span className="text-sm text-[#71717A]">
              {selectedExtensions.length} extension{selectedExtensions.length > 1 ? 's' : ''} added to your summary
            </span>
          </div>
        </Fade>
      )}
    </section>
  )
}
