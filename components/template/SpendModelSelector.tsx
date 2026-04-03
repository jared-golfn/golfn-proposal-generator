'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart3, Target, TrendingUp, Users, ChevronRight, Star } from 'lucide-react'
import { useSpendModel, type SpendModel } from '@/lib/spend-model-context'
import { useBusinessNeed } from '@/lib/business-need-context'
import { getNeedById } from '@/lib/business-needs'
import { Fade } from './Fade'

const models: { id: SpendModel; label: string; subtitle: string; icon: typeof BarChart3 }[] = [
  { id: 'cpm', label: 'CPM', subtitle: 'I buy impressions and reach', icon: BarChart3 },
  { id: 'cpa', label: 'CPA / CPL', subtitle: 'I pay per lead or acquisition', icon: Target },
  { id: 'roas', label: 'ROAS', subtitle: 'I measure return on ad spend', icon: TrendingUp },
  { id: 'audience', label: 'Audience Building', subtitle: 'I invest in owned audiences', icon: Users },
]

export function SpendModelSelector() {
  const { model, setModel, cohortSize, setCohortSize } = useSpendModel()
  const { selectedNeed } = useBusinessNeed()
  const need = getNeedById(selectedNeed)
  const suggestedModel = need?.suggestedSpendModel || null
  const [showSlider, setShowSlider] = useState(false)

  function handleSelect(m: SpendModel) {
    setModel(m)
    setShowSlider(true)
  }

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-3">Evaluate</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-4">
            How do you evaluate<br /><span className="text-[#00ff9d]">marketing spend?</span>
          </h2>
          <p className="text-lg text-[#9ca3af] max-w-2xl mb-10">
            Pick the lens you use internally. Every number below will speak your language.
          </p>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {models.map((m, i) => {
            const Icon = m.icon
            const isSelected = model === m.id
            const isSuggested = suggestedModel === m.id && !model
            return (
              <Fade key={m.id} delay={i * 0.05}>
                <button
                  onClick={() => handleSelect(m.id)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 group relative ${
                    isSelected
                      ? 'bg-[#001a14] border-[#00ff9d]/60 shadow-[0_0_30px_rgba(0,255,157,0.1)]'
                      : isSuggested
                      ? 'bg-[#1a1f2e] border-[#00ff9d]/30 shadow-[0_0_20px_rgba(0,255,157,0.05)]'
                      : 'bg-[#1a1f2e] border-[#2a3347] hover:border-[#00ff9d]/30'
                  }`}
                >
                  {isSuggested && (
                    <div className="absolute -top-2.5 left-4 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00ff9d] text-[#0f1217]">
                      <Star className="w-3 h-3" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Suggested</span>
                    </div>
                  )}
                  <Icon className={`w-6 h-6 mb-3 transition-colors ${isSelected ? 'text-[#00ff9d]' : 'text-[#6b7280] group-hover:text-[#00ff9d]'}`} />
                  <p className={`text-xl font-bold mb-1 transition-colors ${isSelected ? 'text-[#00ff9d]' : 'text-white'}`}>{m.label}</p>
                  <p className="text-sm text-[#9ca3af]">{m.subtitle}</p>
                  {isSelected && (
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="mt-3 flex items-center gap-1 text-sm font-mono text-[#00ff9d]">
                      Selected <ChevronRight className="w-3 h-3" />
                    </motion.div>
                  )}
                </button>
              </Fade>
            )
          })}
        </div>

        <AnimatePresence>
          {showSlider && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
              <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-8 max-w-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-1">Target Cohort Size</p>
                    <p className="text-sm text-[#9ca3af]">How many qualified golfers do you want to reach?</p>
                  </div>
                  <p className="text-4xl font-mono font-bold text-[#00ff9d]">{cohortSize.toLocaleString()}</p>
                </div>
                <input type="range" min={500} max={10000} step={250} value={cohortSize}
                  onChange={(e) => setCohortSize(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{ background: `linear-gradient(to right, #00ff9d 0%, #00ff9d ${((cohortSize - 500) / 9500) * 100}%, #2a3347 ${((cohortSize - 500) / 9500) * 100}%, #2a3347 100%)` }}
                />
                <div className="flex justify-between mt-2 text-xs font-mono text-[#4b5563]"><span>500</span><span>10,000</span></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
