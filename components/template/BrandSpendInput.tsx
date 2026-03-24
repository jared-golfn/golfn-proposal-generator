'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DollarSign, ChevronDown, Check } from 'lucide-react'
import { useBrandSpend, GOAL_LABELS, GOAL_DESCRIPTIONS, type SuccessGoal } from '@/lib/brand-context'

const ALL_GOALS: SuccessGoal[] = ['reach', 'education', 'sales', 'audience', 'awareness']

export function BrandSpendInput() {
  const { cpm, cac, monthlyBudget, successGoals, setCpm, setCac, setMonthlyBudget, toggleGoal } = useBrandSpend()
  const [cpmInput, setCpmInput] = useState('')
  const [cacInput, setCacInput] = useState('')
  const [budgetInput, setBudgetInput] = useState('')
  const cpmRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setTimeout(() => cpmRef.current?.focus(), 800)
  }, [])

  function handleCpmChange(val: string) {
    const clean = val.replace(/[^0-9.]/g, '')
    setCpmInput(clean)
    const n = parseFloat(clean)
    setCpm(isNaN(n) || n <= 0 ? null : n)
  }

  function handleCacChange(val: string) {
    const clean = val.replace(/[^0-9.]/g, '')
    setCacInput(clean)
    const n = parseFloat(clean)
    setCac(isNaN(n) || n <= 0 ? null : n)
  }

  function handleBudgetChange(val: string) {
    const clean = val.replace(/[^0-9]/g, '')
    setBudgetInput(clean)
    const n = parseInt(clean)
    setMonthlyBudget(isNaN(n) || n <= 0 ? null : n)
  }

  const numbersSet = cpm && cpm > 0 && cac && cac > 0 && monthlyBudget && monthlyBudget > 0
  const allReady = numbersSet && successGoals.size > 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="mt-10 mb-4"
      id="brand-spend-input"
    >
      <div className="bg-[#1a1f2e]/80 backdrop-blur-sm border border-[#2a3347] rounded-2xl p-6 md:p-8 max-w-5xl">
        <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-5">Personalize this walkthrough</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm text-[#9ca3af] mb-2">Your CPM <span className="text-[#4b5563]">(paid social)</span></label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4b5563]" />
              <input
                ref={cpmRef}
                type="text"
                inputMode="decimal"
                value={cpmInput}
                onChange={(e) => handleCpmChange(e.target.value)}
                placeholder="e.g. 72"
                className="w-full pl-10 pr-16 py-3.5 rounded-xl bg-[#0f1217] border border-[#2a3347] text-white text-lg font-mono placeholder:text-[#4b5563] focus:outline-none focus:border-[#00ff9d]/50 focus:ring-1 focus:ring-[#00ff9d]/30 transition-all"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#6b7280] font-mono">CPM</span>
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#9ca3af] mb-2">Your CAC <span className="text-[#4b5563]">(cost per customer)</span></label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4b5563]" />
              <input
                type="text"
                inputMode="decimal"
                value={cacInput}
                onChange={(e) => handleCacChange(e.target.value)}
                placeholder="e.g. 180"
                className="w-full pl-10 pr-16 py-3.5 rounded-xl bg-[#0f1217] border border-[#2a3347] text-white text-lg font-mono placeholder:text-[#4b5563] focus:outline-none focus:border-[#00ff9d]/50 focus:ring-1 focus:ring-[#00ff9d]/30 transition-all"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#6b7280] font-mono">CAC</span>
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#9ca3af] mb-2">Monthly budget <span className="text-[#4b5563]">(paid social)</span></label>
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

        <div className="border-t border-[#2a3347]/60 pt-5">
          <p className="text-sm text-[#9ca3af] mb-3">What does success look like for you?</p>
          <div className="flex flex-wrap gap-2">
            {ALL_GOALS.map((goal) => {
              const active = successGoals.has(goal)
              return (
                <button
                  key={goal}
                  onClick={() => toggleGoal(goal)}
                  className={`group relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    active
                      ? 'bg-[#00ff9d]/15 border border-[#00ff9d]/40 text-[#00ff9d]'
                      : 'bg-[#0f1217] border border-[#2a3347] text-[#9ca3af] hover:border-[#00ff9d]/30 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {active && <Check className="w-3.5 h-3.5" />}
                    {GOAL_LABELS[goal]}
                  </span>
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 px-3 py-1 rounded-lg bg-[#0f1217] border border-[#2a3347] text-xs text-[#6b7280] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    {GOAL_DESCRIPTIONS[goal]}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <AnimatePresence>
          {allReady && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 mt-5 text-sm text-[#6b7280]"
            >
              <Check className="w-4 h-4 text-[#00ff9d]" />
              <span>Scroll down to see what a win looks like at 60 days</span>
              <ChevronDown className="w-4 h-4 text-[#00ff9d] animate-bounce" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
