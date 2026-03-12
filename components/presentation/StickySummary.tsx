'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { usePartnership } from '@/lib/partnership-context'
import { partnershipPaths } from '@/lib/partnership-paths'
import type { PartnerConfig } from '@/lib/presentation-data'

export function StickySummary({ partner }: { partner: PartnerConfig }) {
  const { state, resetAll } = usePartnership()
  const { selectedPath, isRecommended, selectedGoals, selectedExtensions } = state
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1280)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Show after user scrolls past the selector section
  useEffect(() => {
    const handleScroll = () => {
      const bestFit = document.getElementById('best-fit')
      if (bestFit) {
        const rect = bestFit.getBoundingClientRect()
        setIsVisible(rect.bottom < 0 && !!selectedPath)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [selectedPath])

  if (!selectedPath || !isVisible) return null

  const path = partnershipPaths[selectedPath]

  const goalLabels: Record<string, string> = {
    awareness: 'Awareness', education: 'Education', activation: 'Activation',
    conversion: 'Conversion', adoption: 'Adoption', advocacy: 'Advocacy',
  }

  // Mobile: bottom drawer
  if (isMobile) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40"
        >
          <div className="bg-[#131315] border-t border-[#2A2A2C]" style={{ boxShadow: `0 -8px 40px rgba(0,0,0,0.5)` }}>
            {/* Expanded content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden border-b border-[#2A2A2C]"
                >
                  <div className="px-5 py-4 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-[10px] font-mono text-[#52525B]">SETUP</span>
                        <div className="text-sm font-mono font-semibold" style={{ color: partner.primaryColor }}>{path.setup.range}</div>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#52525B]">MONTHLY</span>
                        <div className="text-sm font-mono font-semibold" style={{ color: partner.primaryColor }}>{path.monthly.starting}</div>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#52525B]">DURATION</span>
                        <div className="text-sm font-mono font-semibold" style={{ color: partner.primaryColor }}>{path.duration.recommended}</div>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#52525B]">STAGES</span>
                        <div className="text-sm font-mono font-semibold" style={{ color: partner.primaryColor }}>{path.includedStages[0]}–{path.includedStages[path.includedStages.length - 1]}</div>
                      </div>
                    </div>
                    {selectedGoals.length > 0 && (
                      <div>
                        <span className="text-[10px] font-mono text-[#52525B]">GOALS</span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {selectedGoals.map(g => (
                            <span key={g} className="text-[11px] px-2 py-0.5 rounded bg-[#1A1A1D] text-[#A1A1AA]">{goalLabels[g]}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    <button onClick={resetAll} className="text-xs text-[#52525B] hover:text-[#71717A]">Reset selection</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Compact bar */}
            <div className="px-5 py-3 flex items-center justify-between" onClick={() => setIsExpanded(!isExpanded)}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ background: partner.primaryColor }} />
                <div>
                  <span className="text-sm font-semibold">{path.name} Path</span>
                  {isRecommended && <span className="text-[10px] font-mono ml-2" style={{ color: partner.primaryColor }}>REC</span>}
                </div>
              </div>
              <a
                href={`mailto:jared@golfn.com?subject=Partnership%20Discussion%20%E2%80%94%20${encodeURIComponent(partner.partnerName)}%20(${path.name}%20Path)`}
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-2 rounded-lg text-sm font-semibold"
                style={{ background: partner.primaryColor, color: '#0F0F10' }}
              >
                Let's Talk
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    )
  }

  // Desktop: sidebar card
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 40 }}
        className="fixed right-8 bottom-8 z-30 w-72"
      >
        <div
          className="bg-[#131315] border border-[#2A2A2C] rounded-2xl overflow-hidden"
          style={{ boxShadow: `0 8px 40px rgba(0,0,0,0.4), 0 0 60px ${partner.primaryColor}08` }}
        >
          {/* Header */}
          <div className="px-5 py-4 border-b border-[#2A2A2C]" style={{ background: `${partner.primaryColor}08` }}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: partner.primaryColor }} />
                <span className="text-sm font-semibold">{path.name} Path</span>
              </div>
              {isRecommended && (
                <span className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded" style={{ background: `${partner.primaryColor}20`, color: partner.primaryColor }}>REC</span>
              )}
            </div>
            <p className="text-xs text-[#71717A]">{path.tagline}</p>
          </div>

          {/* Pricing summary */}
          <div className="px-5 py-4 space-y-3 border-b border-[#2A2A2C]">
            {[
              { label: 'Setup', value: path.setup.range },
              { label: 'Monthly', value: path.monthly.starting },
              { label: 'Duration', value: path.duration.recommended },
            ].map(row => (
              <div key={row.label} className="flex items-center justify-between">
                <span className="text-xs text-[#52525B]">{row.label}</span>
                <span className="text-xs font-mono font-semibold" style={{ color: partner.primaryColor }}>{row.value}</span>
              </div>
            ))}
          </div>

          {/* Goals */}
          {selectedGoals.length > 0 && (
            <div className="px-5 py-3 border-b border-[#2A2A2C]">
              <span className="text-[10px] font-mono text-[#52525B] tracking-wider">GOALS</span>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {selectedGoals.map(g => (
                  <span key={g} className="text-[11px] px-2 py-0.5 rounded bg-[#1A1A1D] border border-[#2A2A2C] text-[#A1A1AA]">{goalLabels[g]}</span>
                ))}
              </div>
            </div>
          )}

          {/* Extensions */}
          {selectedExtensions.length > 0 && (
            <div className="px-5 py-3 border-b border-[#2A2A2C]">
              <span className="text-[10px] font-mono text-[#52525B] tracking-wider">EXTENSIONS</span>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {selectedExtensions.map(e => (
                  <span key={e} className="text-[11px] px-2 py-0.5 rounded bg-[#1A1A1D] border border-[#2A2A2C] text-[#A1A1AA]">{e}</span>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="px-5 py-4 space-y-2">
            <a
              href={`mailto:jared@golfn.com?subject=Partnership%20Discussion%20%E2%80%94%20${encodeURIComponent(partner.partnerName)}%20(${path.name}%20Path)`}
              className="block w-full text-center px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02]"
              style={{ background: `linear-gradient(135deg, ${partner.primaryColor}, ${partner.secondaryColor})`, color: '#0F0F10' }}
            >
              Start the Conversation
            </a>
            <button onClick={resetAll} className="block w-full text-center text-xs text-[#52525B] hover:text-[#71717A] py-1">
              Reset Selection
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
