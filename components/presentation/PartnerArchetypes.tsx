'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { type PartnerConfig } from '@/lib/presentation-data'
import { usePartnership } from '@/lib/partnership-context'
import { partnershipPaths, extensions as allExtensions, partnerScenarioOverrides } from '@/lib/partnership-paths'
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
  // Default to partner's recommended path if set, otherwise growth
  const defaultTab = partner.defaultPath || 'growth'
  const [activeTab, setActiveTab] = useState<PathId>(selectedPath || defaultTab)

  useEffect(() => { if (selectedPath) setActiveTab(selectedPath) }, [selectedPath])

  const path = partnershipPaths[activeTab]

  // Use partner-specific scenario override if available, otherwise fall back to default
  const scenarioOverrides = partnerScenarioOverrides[partner.slug]
  const scenario = scenarioOverrides?.[activeTab] || path.exampleScenario

  const recommendedExtensions = allExtensions.filter(e => path.recommendedExtensions.includes(e.id))
  const handleTabClick = (pathId: PathId) => { setActiveTab(pathId); setPath(pathId) }

  return (
    <section className="py-20 md:py-32">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <span className="font-mono text-sm text-[#71717A] tracking-[0.2em] uppercase">Partnership Models</span>
          <h2 className="font-display text-3xl md:text-5xl mt-3 mb-4 leading-[0.95]">Choose Your<br /><span className="text-gradient">Partnership Path</span></h2>
          <p className="text-base md:text-lg text-[#B0B0B4] max-w-xl mb-3 leading-[1.75]">Choose the path that best matches your goals, timeline, and level of complexity.</p>
          <p className="text-sm md:text-base text-[#52525B] mb-8 md:mb-12">You do not need to configure this yourself. We scope the right structure based on your goals.</p>
        </Fade>
      </div>

      <div className="w-content-wide px-4 md:px-6">
        <Fade delay={0.1}>
          <div className="flex gap-3 mb-8 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
            {pathOrder.map((pathId) => {
              const p = partnershipPaths[pathId]
              const isActive = activeTab === pathId
              const isRec = isRecommended && selectedPath === pathId
              return (
                <button key={pathId} onClick={() => handleTabClick(pathId)} className={`relative flex-1 min-w-[140px] px-5 py-4 md:px-8 md:py-6 rounded-2xl text-left transition-all duration-300 border ${isActive ? 'border-[#3A3A3F] bg-[#161618]' : 'border-[#2A2A2C] bg-[#131315] hover:border-[#3A3A3F]'}`} style={isActive ? { boxShadow: `0 0 40px ${partner.primaryColor}12` } : {}}>
                  {isRec && (<span className="absolute -top-2.5 left-4 md:left-6 text-[10px] md:text-xs font-mono tracking-wider px-2.5 py-0.5 rounded-full" style={{ background: partner.primaryColor, color: '#0F0F10' }}>REC</span>)}
                  <span className={`text-lg md:text-xl font-bold block ${isActive ? 'text-white' : 'text-[#A1A1AA]'}`}>{p.name}</span>
                  <span className="text-sm md:text-base text-[#71717A] mt-1 block">{p.tagline}</span>
                </button>
              )
            })}
          </div>
        </Fade>

        <Fade delay={0.15}>
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="bg-[#131315] border border-[#2A2A2C] rounded-2xl md:rounded-3xl overflow-hidden" style={{ boxShadow: `0 0 60px ${partner.primaryColor}06` }}>
              <div className="p-8 md:p-12 border-b border-[#2A2A2C]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-display mb-2">{path.name}</h3>
                    <p className="text-base md:text-lg text-[#B0B0B4]">{path.bestFor}</p>
                  </div>
                  <span className="text-sm md:text-base font-mono px-4 py-2 rounded-xl shrink-0 self-start" style={{ background: `${partner.primaryColor}15`, color: partner.primaryColor, border: `1px solid ${partner.primaryColor}30` }}>Stages {path.includedStages[0]}&ndash;{path.includedStages[path.includedStages.length - 1]}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#2A2A2C]">
                <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-[#2A2A2C]">
                  <p className="text-sm md:text-base font-mono text-[#71717A] tracking-wider uppercase mb-5">Includes</p>
                  <div className="flex flex-wrap gap-2.5 mb-10">{path.includes.map((item) => (<span key={item} className="text-sm md:text-base px-4 py-2 md:px-5 md:py-2.5 rounded-xl bg-[#1A1A1D] border border-[#2A2A2C] text-[#D4D4D8] font-medium">{item}</span>))}</div>
                  <p className="text-sm md:text-base font-mono text-[#71717A] tracking-wider uppercase mb-5">Recommended Extensions</p>
                  <div className="space-y-4">{recommendedExtensions.map((ext) => (<div key={ext.id} className="py-2 border-b border-[#2A2A2C]/40 last:border-0"><span className="text-base md:text-lg font-semibold text-[#D4D4D8]">{ext.name}</span><p className="text-sm md:text-base text-[#71717A] mt-1">{ext.description}</p></div>))}</div>
                </div>
                <div className="p-8 md:p-12">
                  <p className="text-sm md:text-base font-mono text-[#71717A] tracking-wider uppercase mb-6">Typical Pricing Frame</p>
                  <div className="space-y-0">{[{ label: 'Setup', value: path.setup.range }, { label: 'Monthly', value: path.monthly.starting }, { label: 'Duration', value: path.duration.recommended }, { label: 'Management', value: path.managementTier }, { label: 'Impressions', value: path.impressionRecommendation.join(' \u2013 ') }, { label: 'Real-World', value: path.realWorldActivation }].map((row) => (<div key={row.label} className="flex items-center justify-between gap-4 py-4 md:py-5 border-b border-[#2A2A2C]/50 last:border-0"><span className="text-base md:text-lg text-[#A1A1AA]">{row.label}</span><span className="text-base md:text-lg font-mono font-bold text-right" style={{ color: partner.primaryColor }}>{row.value}</span></div>))}</div>
                </div>
              </div>

              <div className="p-8 md:p-12 border-b border-[#2A2A2C]">
                <p className="text-sm md:text-base font-mono text-[#71717A] tracking-wider uppercase mb-3">Best Fit Use Case</p>
                <p className="text-base md:text-xl text-[#D4D4D8] font-medium">{path.bestFitUseCase}</p>
              </div>

              <div className="p-8 md:p-12 border-b border-[#2A2A2C]" style={{ background: `${partner.primaryColor}04` }}>
                <p className="text-sm md:text-base font-mono text-[#71717A] tracking-wider uppercase mb-3">Example Scenario{scenarioOverrides?.[activeTab] ? ` \u2014 ${partner.partnerName}` : ''}</p>
                <h4 className="text-lg md:text-xl font-bold mb-2">{scenario.title}</h4>
                <p className="text-base md:text-lg text-[#B0B0B4]">{scenario.description}</p>
              </div>

              {/* Partner-Specific Commerce Notes */}
              {partner.commerceNotes && partner.commerceNotes.length > 0 && activeTab === 'pilot' && (
                <div className="p-8 md:p-12 border-b border-[#2A2A2C]" style={{ background: `${partner.primaryColor}03` }}>
                  <p className="text-sm md:text-base font-mono text-[#71717A] tracking-wider uppercase mb-4">How This Works for {partner.partnerName}</p>
                  <div className="space-y-4">
                    {partner.commerceNotes.map((note, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-[10px] shrink-0" style={{ background: partner.primaryColor }} />
                        <p className="text-sm md:text-base text-[#C4C4C8] leading-relaxed">{note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 90-Day Pilot Launch — only in Pilot tab */}
              {activeTab === 'pilot' && (
                <div className="p-8 md:p-12 border-b border-[#2A2A2C]" style={{ background: `${partner.primaryColor}06` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs md:text-sm font-mono tracking-wider px-3 py-1.5 rounded-lg" style={{ background: `${partner.primaryColor}15`, color: partner.primaryColor, border: `1px solid ${partner.primaryColor}25` }}>90-DAY PILOT LAUNCH</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2">Contained first-step for qualified partners</h4>
                  <p className="text-base md:text-lg text-[#C4C4C8] leading-relaxed mb-4">A contained 90-day launch structure is available for qualified first-time partners who want to validate response before expanding into a broader program.</p>
                  <div className="space-y-2 mb-4">
                    {['Focused scope with a single priority activation', 'Full setup required including strategy, offer design, audience definition, and tracking', 'Designed to validate response and prove the model before scaling'].map(item => (
                      <div key={item} className="flex items-start gap-2.5">
                        <div className="w-2 h-2 rounded-full mt-[8px] shrink-0" style={{ background: partner.primaryColor }} />
                        <span className="text-sm md:text-base text-[#D4D4D8] font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-[#71717A] leading-relaxed">Setup is required for every program because it covers the real strategic, creative, and operational work needed to launch a campaign that performs.</p>
                </div>
              )}

              <div className="p-8 md:p-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href={`mailto:jared@golfn.com?subject=Partnership%20Discussion%20%E2%80%94%20${encodeURIComponent(partner.partnerName)}%20(${path.name}%20Path)`} className="inline-flex items-center gap-2 px-8 py-4 md:px-10 md:py-4.5 rounded-xl font-semibold text-base md:text-lg transition-all hover:scale-[1.02] w-full sm:w-auto justify-center" style={{ background: `linear-gradient(135deg, ${partner.primaryColor}, ${partner.secondaryColor})`, color: '#0F0F10' }}>Scope a {path.name} Program</a>
                <span className="text-base text-[#52525B] hidden sm:block">or explore the other paths above</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </Fade>

        {/* Multi-Brand Agency Callout — enhanced when agency brands are defined */}
        <Fade delay={0.25}>
          <div className="mt-8 md:mt-10 bg-[#131315] border border-[#2A2A2C] rounded-2xl p-6 md:p-8 border-l-[3px]" style={{ borderLeftColor: partner.secondaryColor }}>
            <p className="text-base md:text-lg text-[#B0B0B4]">
              <span className="text-white font-semibold">Multi-Brand Pricing:</span>{' '}
              {partner.agencyName && partner.agencyBrands && partner.agencyBrands.length > 0 ? (
                <>
                  {partner.agencyName} represents {partner.partnerName}, {partner.agencyBrands.join(', and ')} through GolfN. When multiple brands activate through a single agency relationship, consolidated pricing applies. Campaign architecture, audience intelligence, and infrastructure are shared \u2014 reducing per-brand costs and increasing efficiency across the portfolio.
                </>
              ) : (
                <>When an agency activates multiple brands through GolfN, consolidated pricing applies. Efficiencies increase when campaign architecture, audience intelligence, and infrastructure are shared.</>
              )}
            </p>
          </div>
        </Fade>
      </div>
    </section>
  )
}
