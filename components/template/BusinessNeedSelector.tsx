'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ArrowRight, ArrowDown, Rocket } from 'lucide-react'
import { businessNeeds, awarenessNeed, getNeedById } from '@/lib/business-needs'
import type { BusinessNeedId } from '@/lib/business-needs'
import { useBusinessNeed } from '@/lib/business-need-context'
import { Fade } from './Fade'

export function BusinessNeedSelector({ onContinue }: { onContinue?: () => void }) {
  const { selectedNeed, setSelectedNeed, downstreamObjective, setDownstreamObjective } = useBusinessNeed()
  const isAwareness = selectedNeed === 'build-awareness'
  const activeNeed = getNeedById(selectedNeed)
  const activeDownstream = getNeedById(downstreamObjective)

  function selectAwareness() {
    setSelectedNeed(isAwareness ? null : 'build-awareness')
    if (isAwareness) setDownstreamObjective(null)
  }

  function selectSpecific(id: BusinessNeedId) {
    if (isAwareness) {
      setDownstreamObjective(downstreamObjective === id ? null : id)
    } else {
      setSelectedNeed(selectedNeed === id ? null : id)
      setDownstreamObjective(null)
    }
  }

  const aw = awarenessNeed

  return (
    <section id="business-need" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-3">Start Here</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-4">
            What are you trying<br /><span className="text-[#00ff9d]">to solve?</span>
          </h2>
          <p className="text-lg text-[#9ca3af] max-w-2xl mb-12">
            Most partnerships start with awareness. Pick your starting point and we will show you exactly how we solve it.
          </p>
        </Fade>

        {/* Featured: Build Awareness */}
        <Fade delay={0.04}>
          <button
            onClick={selectAwareness}
            className={`w-full text-left mb-6 rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
              isAwareness
                ? 'bg-[#001a14] border-[#00ff9d]/50 shadow-[0_0_60px_rgba(0,255,157,0.08)]'
                : 'bg-[#1a1f2e] border-[#2a3347] hover:border-[#00ff9d]/30'
            }`}
          >
            <div className="p-8 md:p-10">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{aw.icon}</span>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className={`text-2xl md:text-3xl font-bold transition-colors ${isAwareness ? 'text-[#00ff9d]' : 'text-white'}`}>{aw.title}</h3>
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00ff9d]/15 text-[#00ff9d] border border-[#00ff9d]/30">
                        Most partners start here
                      </span>
                    </div>
                  </div>
                  <p className="text-lg text-[#9ca3af] leading-7 max-w-3xl">{aw.subtitle}</p>
                </div>
                {isAwareness && (
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
                    <ChevronRight className="w-6 h-6 text-[#00ff9d] shrink-0 mt-2" />
                  </motion.div>
                )}
              </div>
            </div>
          </button>
        </Fade>

        {/* Awareness detail expand */}
        <AnimatePresence>
          {isAwareness && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-8">
                    <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-3">How It Works</p>
                    <p className="text-base text-[#d1d5db] leading-7">{aw.description}</p>
                  </div>
                  <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-8">
                    <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-3">What We Measure</p>
                    <p className="text-base text-[#9ca3af] leading-7">{aw.scenario}</p>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-8">
                    <p className="text-sm font-mono text-[#00ff9d] uppercase tracking-wider mb-3">The GolfN Awareness Engine</p>
                    <p className="text-lg text-[#d1d5db] leading-8 mb-6">{aw.golfnPlay}</p>
                    <div className="space-y-3">
                      {aw.capabilities.map(cap => (
                        <div key={cap} className="flex items-start gap-3">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-1.5 shrink-0"><path d="M3 8l3.5 3.5L13 5" stroke="#00ff9d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          <span className="text-sm text-[#d1d5db]">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Downstream objective selector */}
              <div className="bg-[#1a1f2e]/50 border border-[#2a3347] rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <ArrowDown className="w-5 h-5 text-[#00ff9d]" />
                  <p className="text-lg font-semibold text-white">Where should the awareness lead?</p>
                  <p className="text-sm text-[#6b7280]">Optional -- pick if you know your end goal</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {businessNeeds.map((need) => {
                    const isSelected = downstreamObjective === need.id
                    return (
                      <button
                        key={need.id}
                        onClick={() => selectSpecific(need.id)}
                        className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                          isSelected
                            ? 'bg-[#001a14]/60 border-[#00ff9d]/40'
                            : 'bg-[#0f1217] border-[#2a3347] hover:border-[#00ff9d]/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{need.icon}</span>
                          <div>
                            <p className={`text-sm font-bold ${isSelected ? 'text-[#00ff9d]' : 'text-white'}`}>{need.title}</p>
                            <p className="text-xs text-[#6b7280]">{need.subtitle}</p>
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {onContinue && (
                <button onClick={onContinue} className="mt-6 flex items-center gap-2 text-[#00ff9d] text-base font-semibold hover:gap-3 transition-all">
                  See what we would build <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Specific needs row -- for prospects who skip awareness */}
        {!isAwareness && (
          <>
            <Fade delay={0.08}>
              <div className="flex items-center gap-3 mb-4 mt-2">
                <div className="h-px flex-1 bg-[#2a3347]" />
                <p className="text-sm text-[#4b5563] font-mono uppercase tracking-wider shrink-0">Or jump to a specific need</p>
                <div className="h-px flex-1 bg-[#2a3347]" />
              </div>
            </Fade>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {businessNeeds.map((need, i) => {
                const isSelected = selectedNeed === need.id
                return (
                  <Fade key={need.id} delay={0.1 + i * 0.04}>
                    <button
                      onClick={() => selectSpecific(need.id)}
                      className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-300 group ${
                        isSelected
                          ? 'bg-[#001a14] border-[#00ff9d]/50'
                          : 'bg-[#1a1f2e] border-[#2a3347] hover:border-[#00ff9d]/25'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-xl shrink-0 mt-0.5">{need.icon}</span>
                        <div>
                          <p className={`text-base font-bold mb-0.5 ${isSelected ? 'text-[#00ff9d]' : 'text-white'}`}>{need.title}</p>
                          <p className="text-xs text-[#9ca3af] leading-relaxed">{need.subtitle}</p>
                        </div>
                      </div>
                    </button>
                  </Fade>
                )
              })}
            </div>

            {/* Specific need detail -- already inside !isAwareness guard so no need to recheck */}
            <AnimatePresence mode="wait">
              {activeNeed && (
                <motion.div key={selectedNeed} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                      <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-8">
                        <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-3">The Problem</p>
                        <p className="text-lg text-[#d1d5db] leading-8">{activeNeed.description}</p>
                      </div>
                      <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-8">
                        <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-3">Real Scenario</p>
                        <p className="text-base text-[#9ca3af] leading-7">{activeNeed.scenario}</p>
                      </div>
                    </div>
                    <div className="lg:col-span-3">
                      <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-8">
                        <p className="text-sm font-mono text-[#00ff9d] uppercase tracking-wider mb-3">How GolfN Solves This</p>
                        <p className="text-lg text-[#d1d5db] leading-8 mb-6">{activeNeed.golfnPlay}</p>
                        <div className="space-y-3">
                          {activeNeed.capabilities.map(cap => (
                            <div key={cap} className="flex items-start gap-3">
                              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-1.5 shrink-0"><path d="M3 8l3.5 3.5L13 5" stroke="#00ff9d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                              <span className="text-sm text-[#d1d5db]">{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {onContinue && (
                    <button onClick={onContinue} className="mt-6 flex items-center gap-2 text-[#00ff9d] text-base font-semibold hover:gap-3 transition-all">
                      See what we would build <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  )
}
