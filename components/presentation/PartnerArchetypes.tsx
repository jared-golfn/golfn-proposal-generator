'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { type PartnerConfig } from '@/lib/presentation-data'
import { usePartnership } from '@/lib/partnership-context'
import { partnershipPaths, extensions as allExtensions } from '@/lib/partnership-paths'
import type { PathId } from '@/lib/partnership-paths'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

const pathOrder: PathId[] = ['pilot', 'growth', 'strategic']

export function PartnerArchetypes({ partner }: { partner: PartnerConfig }) {
  const { state, setPath } = usePartnership()
  const { selectedPath, isRecommended } = state

  const [activeTab, setActiveTab] = useState<PathId>(selectedPath || 'growth')

  useEffect(() => {
    if (selectedPath) setActiveTab(selectedPath)
  }, [selectedPath])

  const path = partnershipPaths[activeTab]
  const recommendedExtensions = allExtensions.filter(e => path.recommendedExtensions.includes(e.id))

  const handleTabClick = (pathId: PathId) => {
    setActiveTab(pathId)
    setPath(pathId)
  }

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[960px] mx-auto px-5 md:px-12">
        <Fade>
          <span className="font-mono text-sm text-[#71717A] tracking-[0.2em] uppercase">Partnership Models</span>
          <h2 className="font-display text-3xl md:text-5xl mt-3 mb-4 leading-[0.95]">Choose Your<br /><span className="text-gradient">Partnership Path</span></h2>
          <p className="text-base md:text-[17px] text-[#B0B0B4] max-w-xl mb-3 leading-[1.75]">Choose the path that best matches your goals, timeline, and level of complexity.</p>
          <p className="text-sm text-[#52525B] mb-8 md:mb-12">You do not need to configure this yourself. We scope the right structure based on your goals.</p>
        </Fade>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        {/* Tab bar — horizontal scroll on mobile */}
        <Fade delay={0.1}>
          <div className="flex gap-2 mb-6 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
            {pathOrder.map((pathId) => {
              const p = partnershipPaths[pathId]
              const isActive = activeTab === pathId
              const isRec = isRecommended && selectedPath === pathId
              return (
                <button
                  key={pathId}
                  onClick={() => handleTabClick(pathId)}
                  className={`relative flex-1 min-w-[110px] px-4 py-3 md:px-5 md:py-4 rounded-2xl text-left transition-all duration-300 border ${isActive ? 'border-[#3A3A3F] bg-[#161618]' : 'border-[#2A2A2C] bg-[#131315] hover:border-[#3A3A3F]'}`}
                  style={isActive ? { boxShadow: `0 0 30px ${partner.primaryColor}10` } : {}}
                >
                  {isRec && (
                    <span className="absolute -top-2.5 left-3 md:left-5 text-[9px] md:text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full" style={{ background: partner.primaryColor, color: '#0F0F10' }}>REC</span>
                  )}
                  <span className={`text-base md:text-lg font-semibold block ${isActive ? 'text-white' : 'text-[#A1A1AA]'}`}>{p.name}</span>
                  <span className="text-xs md:text-sm text-[#71717A] mt-0.5 block">{p.tagline}</span>
                </button>
              )
            })}
          </div>
        </Fade>

        {/* Detail panel */}
        <Fade delay={0.15}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="bg-[#131315] border border-[#2A2A2C] rounded-2xl md:rounded-3xl overflow-hidden"
              style={{ boxShadow: `0 0 60px ${partner.primaryColor}06` }}
            >
              {/* Header */}
              <div className="p-6 md:p-10 border-b border-[#2A2A2C]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display mb-2">{path.name}</h3>
                    <p className="text-sm md:text-base text-[#B0B0B4]">{path.bestFor}</p>
                  </div>
                  <span className="text-sm font-mono px-3 py-1.5 rounded-lg shrink-0 self-start" style={{ background: `${partner.primaryColor}12`, color: partner.primaryColor }}>
                    Stages {path.includedStages[0]}–{path.includedStages[path.includedStages.length - 1]}
                  </span>
                </div>
              </div>

              {/* Content — stacks on mobile */}
              <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#2A2A2C]">
                <div className="p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-[#2A2A2C]">
                  <p className="text-xs font-mono text-[#71717A] tracking-wider uppercase mb-4">Includes</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {path.includes.map((item) => (
                      <span key={item} className="text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-[#1A1A1D] border border-[#2A2A2C] text-[#D4D4D8]">{item}</span>
                    ))}
                  </div>
                  <p className="text-xs font-mono text-[#71717A] tracking-wider uppercase mb-4">Recommended Extensions</p>
                  <div className="space-y-2">
                    {recommendedExtensions.map((ext) => (
                      <div key={ext.id} className="py-2">
                        <span className="text-sm font-medium text-[#D4D4D8]">{ext.name}</span>
                        <p className="text-xs text-[#71717A] mt-0.5">{ext.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 md:p-10">
                  <p className="text-xs font-mono text-[#71717A] tracking-wider uppercase mb-5">Typical Pricing Frame</p>
                  <div className="space-y-4 md:space-y-5">
                    {[
                      { label: 'Setup', value: path.setup.range },
                      { label: 'Monthly', value: path.monthly.starting },
                      { label: 'Duration', value: path.duration.recommended },
                      { label: 'Management', value: path.managementTier },
                      { label: 'Impressions', value: path.impressionRecommendation.join(' – ') },
                      { label: 'Real-World', value: path.realWorldActivation },
                    ].map((row) => (
                      <div key={row.label} className="flex items-start justify-between gap-3 pb-3 md:pb-4 border-b border-[#2A2A2C]/50">
                        <span className="text-xs md:text-sm text-[#71717A]">{row.label}</span>
                        <span className="text-xs md:text-sm font-mono font-semibold text-right" style={{ color: partner.primaryColor }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Best fit + Example — stacked, tighter padding mobile */}
              <div className="p-6 md:p-10 border-b border-[#2A2A2C]">
                <p className="text-xs font-mono text-[#71717A] tracking-wider uppercase mb-3">Best Fit Use Case</p>
                <p className="text-sm md:text-base text-[#D4D4D8]">{path.bestFitUseCase}</p>
              </div>

              <div className="p-6 md:p-10 border-b border-[#2A2A2C]" style={{ background: `${partner.primaryColor}04` }}>
                <p className="text-xs font-mono text-[#71717A] tracking-wider uppercase mb-3">Example Scenario</p>
                <h4 className="text-base md:text-lg font-semibold mb-2">{path.exampleScenario.title}</h4>
                <p className="text-sm md:text-base text-[#B0B0B4]">{path.exampleScenario.description}</p>
              </div>

              {/* CTA */}
              <div className="p-6 md:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
                <a
                  href={`mailto:jared@golfn.com?subject=Partnership%20Discussion%20%E2%80%94%20${encodeURIComponent(partner.partnerName)}%20(${path.name}%20Path)`}
                  className="inline-flex items-center gap-2 px-6 py-3 md:px-7 md:py-3.5 rounded-xl font-semibold text-sm md:text-base transition-all hover:scale-[1.02] w-full sm:w-auto justify-center"
                  style={{ background: `linear-gradient(135deg, ${partner.primaryColor}, ${partner.secondaryColor})`, color: '#0F0F10' }}
                >
                  Scope a {path.name} Program
                </a>
                <span className="text-sm text-[#52525B] hidden sm:block">or explore the other paths above</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </Fade>

        {/* Multi-brand note */}
        <Fade delay={0.25}>
          <div className="mt-6 md:mt-8 bg-[#131315] border border-[#2A2A2C] rounded-2xl p-5 md:p-7 border-l-[3px]" style={{ borderLeftColor: partner.secondaryColor }}>
            <p className="text-sm md:text-[17px] text-[#B0B0B4]"><span className="text-white font-semibold">Multi-Brand Pricing:</span> When an agency activates multiple brands through GolfN, consolidated pricing applies. Efficiencies increase when campaign architecture, audience intelligence, and infrastructure are shared.</p>
          </div>
        </Fade>
      </div>
    </section>
  )
}
