'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DollarSign, TrendingDown, Sparkles } from 'lucide-react'
import { useBrandSpend } from '@/lib/brand-context'

export function BrandSpendInput() {
  const { cpm, monthlyBudget, setCpm, setMonthlyBudget } = useBrandSpend()
  const [cpmInput, setCpmInput] = useState('')
  const [budgetInput, setBudgetInput] = useState('')
  const [isSet, setIsSet] = useState(false)
  const cpmRef = useRef<HTMLInputElement>(null)

  // Auto-focus CPM on mount
  useEffect(() => {
    setTimeout(() => cpmRef.current?.focus(), 800)
  }, [])

  function handleCpmChange(val: string) {
    const clean = val.replace(/[^0-9.]/g, '')
    setCpmInput(clean)
    const n = parseFloat(clean)
    setCpm(isNaN(n) || n <= 0 ? null : n)
  }

  function handleBudgetChange(val: string) {
    const clean = val.replace(/[^0-9]/g, '')
    setBudgetInput(clean)
    const n = parseInt(clean)
    setMonthlyBudget(isNaN(n) || n <= 0 ? null : n)
  }

  const hasData = cpm !== null && cpm > 0
  const golfnCpm = 3.5 // GolfN effective CPM
  const savings = hasData && monthlyBudget ? Math.round(monthlyBudget * (1 - golfnCpm / cpm)) : null
  const multiplier = hasData ? Math.round(cpm / golfnCpm) : null

  // Once both fields have values, show the comparison
  useEffect(() => {
    if (cpm && cpm > 0) setIsSet(true)
  }, [cpm])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="mt-10 mb-4"
    >
      <div className="bg-[#1a1f2e]/80 backdrop-blur-sm border border-[#2a3347] rounded-2xl p-6 md:p-8 max-w-3xl">
        <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-4">Personalize this walkthrough</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* CPM Input */}
          <div>
            <label className="block text-sm text-[#9ca3af] mb-2">Current CPM (paid social)</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4b5563]" />
              <input
                ref={cpmRef}
                type="text"
                inputMode="decimal"
                value={cpmInput}
                onChange={(e) => handleCpmChange(e.target.value)}
                placeholder="e.g. 42"
                className="w-full pl-10 pr-16 py-3.5 rounded-xl bg-[#0f1217] border border-[#2a3347] text-white text-lg font-mono placeholder:text-[#4b5563] focus:outline-none focus:border-[#00ff9d]/50 focus:ring-1 focus:ring-[#00ff9d]/30 transition-all"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#6b7280] font-mono">CPM</span>
            </div>
          </div>

          {/* Monthly Budget Input */}
          <div>
            <label className="block text-sm text-[#9ca3af] mb-2">Monthly paid social budget</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4b5563]" />
              <input
                type="text"
                inputMode="numeric"
                value={budgetInput}
                onChange={(e) => handleBudgetChange(e.target.value)}
                placeholder="e.g. 15000"
                className="w-full pl-10 pr-16 py-3.5 rounded-xl bg-[#0f1217] border border-[#2a3347] text-white text-lg font-mono placeholder:text-[#4b5563] focus:outline-none focus:border-[#00ff9d]/50 focus:ring-1 focus:ring-[#00ff9d]/30 transition-all"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#6b7280] font-mono">/mo</span>
            </div>
          </div>
        </div>

        {/* Live comparison -- appears when CPM is entered */}
        <AnimatePresence>
          {isSet && hasData && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-[#2a3347]/60">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-3">
                    <TrendingDown className="w-5 h-5 text-[#00ff9d]" />
                    <div>
                      <span className="text-sm text-[#6b7280]">Your CPM</span>
                      <span className="text-2xl font-mono font-bold text-white ml-3">${cpm}</span>
                      <span className="text-[#6b7280] mx-2">vs</span>
                      <span className="text-sm text-[#6b7280]">GolfN</span>
                      <span className="text-2xl font-mono font-bold text-[#00ff9d] ml-3">~${golfnCpm}</span>
                    </div>
                  </div>
                  {multiplier && multiplier > 1 && (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00ff9d]/10 border border-[#00ff9d]/20">
                      <Sparkles className="w-4 h-4 text-[#00ff9d]" />
                      <span className="text-base font-bold text-[#00ff9d]">{multiplier}x more efficient</span>
                    </div>
                  )}
                  {savings && savings > 0 && monthlyBudget && (
                    <div>
                      <span className="text-sm text-[#6b7280]">Same budget, </span>
                      <span className="text-lg font-mono font-bold text-[#00ff9d]">{Math.round(monthlyBudget / golfnCpm * 1000).toLocaleString()}</span>
                      <span className="text-sm text-[#6b7280]"> impressions on GolfN vs </span>
                      <span className="text-lg font-mono font-bold text-[#9ca3af]">{Math.round(monthlyBudget / cpm! * 1000).toLocaleString()}</span>
                      <span className="text-sm text-[#6b7280]"> on paid social</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
