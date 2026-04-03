'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ArrowRight } from 'lucide-react'
import { businessNeeds, type BusinessNeed } from '@/lib/business-needs'
import { Fade } from './Fade'

export function BusinessNeedSelector({ onContinue }: { onContinue?: () => void }) {
  const [selected, setSelected] = useState<string | null>(null)
  const active = businessNeeds.find(n => n.id === selected)

  return (
    <section id="business-need" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-3">Start Here</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-4">
            What are you trying<br /><span className="text-[#00ff9d]">to solve?</span>
          </h2>
          <p className="text-lg text-[#9ca3af] max-w-2xl mb-12">
            Every brand comes to GolfN with a different problem. Pick the one closest to yours and we will show you exactly how we solve it.
          </p>
        </Fade>

        {/* Need cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {businessNeeds.map((need, i) => {
            const isSelected = selected === need.id
            return (
              <Fade key={need.id} delay={i * 0.04}>
                <button
                  onClick={() => setSelected(isSelected ? null : need.id)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 group ${
                    isSelected
                      ? 'bg-[#001a14] border-[#00ff9d]/50 shadow-[0_0_40px_rgba(0,255,157,0.08)]'
                      : 'bg-[#1a1f2e] border-[#2a3347] hover:border-[#00ff9d]/25 hover:bg-[#1a1f2e]/80'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl shrink-0 mt-0.5">{need.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className={`text-lg font-bold mb-1 transition-colors ${
                        isSelected ? 'text-[#00ff9d]' : 'text-white'
                      }`}>{need.title}</p>
                      <p className="text-sm text-[#9ca3af] leading-relaxed">{need.subtitle}</p>
                    </div>
                    {isSelected && (
                      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
                        <ChevronRight className="w-5 h-5 text-[#00ff9d] shrink-0 mt-1" />
                      </motion.div>
                    )}
                  </div>
                </button>
              </Fade>
            )
          })}
        </div>

        {/* Expanded detail */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Left: The problem + scenario */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-8">
                    <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-3">The Problem</p>
                    <p className="text-lg text-[#d1d5db] leading-8">{active.description}</p>
                  </div>
                  <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-8">
                    <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-3">Real Scenario</p>
                    <p className="text-base text-[#9ca3af] leading-7">{active.scenario}</p>
                  </div>
                </div>

                {/* Right: GolfN's solution */}
                <div className="lg:col-span-3 space-y-6">
                  <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-8">
                    <p className="text-sm font-mono text-[#00ff9d] uppercase tracking-wider mb-3">How GolfN Solves This</p>
                    <p className="text-lg text-[#d1d5db] leading-8 mb-6">{active.golfnPlay}</p>

                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-white">Specific capabilities we use:</p>
                      {active.capabilities.map(cap => (
                        <div key={cap} className="flex items-start gap-3">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-1.5 shrink-0">
                            <path d="M3 8l3.5 3.5L13 5" stroke="#00ff9d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-sm text-[#d1d5db]">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-6">
                    <p className="text-xs font-mono text-[#4b5563] uppercase tracking-wider mb-3">Activation Methods</p>
                    <div className="flex flex-wrap gap-2">
                      {active.activationMethods.map(method => (
                        <span key={method} className="px-3 py-1.5 rounded-full text-sm font-medium bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/20">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>

                  {onContinue && (
                    <button
                      onClick={onContinue}
                      className="flex items-center gap-2 text-[#00ff9d] text-base font-semibold hover:gap-3 transition-all"
                    >
                      See what this looks like in practice <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
