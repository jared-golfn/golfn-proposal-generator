'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useBrandSpend } from '@/lib/brand-context'

const GOLFN_CPM = 3.5

function fmtNum(n: number): string {
  return Math.round(n).toLocaleString()
}

function fmtUSD(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

function ImpactContent({ cpm, cac, ltv, budget, isExample }: { cpm: number; cac: number; ltv: number; budget: number; isExample: boolean }) {
  const theirImpressions = Math.round(budget / cpm * 1000)
  const golfnImpressions = Math.round(budget / GOLFN_CPM * 1000)
  const multiplier = Math.round(cpm / GOLFN_CPM)

  const theirCustomers = cac > 0 ? Math.round(budget / cac) : null
  const ltvCacRatio = ltv > 0 && cac > 0 ? (ltv / cac).toFixed(1) : null

  return (
    <div>
      {/* Headline */}
      <div className="mb-10">
        <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-3">Your Personalized GolfN Impact</p>
        {isExample ? (
          <p className="text-2xl md:text-3xl font-bold text-white leading-tight">See what GolfN could deliver<br /><span className="text-[#00ff9d]">for a typical premium golf brand</span></p>
        ) : (
          <p className="text-2xl md:text-3xl font-bold text-white leading-tight">At your current spend, here is what<br /><span className="text-[#00ff9d]">GolfN would deliver</span></p>
        )}
      </div>

      {/* Big side-by-side impression comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Their side */}
        <div className="bg-[#0f1217] rounded-xl p-6 md:p-8 border border-[#2a3347]">
          <p className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-2">Your paid social</p>
          <p className="text-4xl md:text-5xl font-mono font-bold text-[#9ca3af]">{fmtNum(theirImpressions)}</p>
          <p className="text-base text-[#6b7280] mt-2">impressions at ${cpm} CPM</p>
          {theirCustomers && theirCustomers > 0 && (
            <p className="text-sm text-[#4b5563] mt-1">~{theirCustomers} customers at {fmtUSD(cac)} CAC</p>
          )}
        </div>

        {/* GolfN side */}
        <div className="bg-[#001a14]/60 rounded-xl p-6 md:p-8 border-2 border-[#00ff9d]/30">
          <p className="text-sm font-mono uppercase tracking-wider text-[#00ff9d] mb-2">GolfN at the same budget</p>
          <p className="text-4xl md:text-5xl font-mono font-bold text-[#00ff9d]">{fmtNum(golfnImpressions)}</p>
          <p className="text-base text-[#6b7280] mt-2">impressions to <span className="text-[#00ff9d]">verified golfers</span></p>
          <p className="text-sm text-[#4b5563] mt-1">at ~$3.50 effective CPM</p>
        </div>
      </div>

      {/* Multiplier pill */}
      {multiplier > 1 && (
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#00ff9d]/10 border border-[#00ff9d]/30">
            <span className="text-3xl md:text-4xl font-mono font-bold text-[#00ff9d]">{multiplier}x</span>
            <span className="text-lg text-[#d1d5db]">more impressions to qualified golfers</span>
          </div>
        </div>
      )}

      {/* Additional metrics row */}
      {(theirCustomers || ltvCacRatio) && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {ltvCacRatio && (
            <div className="bg-[#0f1217] rounded-xl p-5 border border-[#2a3347] text-center">
              <p className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-1">Your LTV:CAC</p>
              <p className="text-2xl font-mono font-bold text-white">{ltvCacRatio}x</p>
            </div>
          )}
          {theirCustomers && theirCustomers > 0 && (
            <div className="bg-[#0f1217] rounded-xl p-5 border border-[#2a3347] text-center">
              <p className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-1">Customers at current CAC</p>
              <p className="text-2xl font-mono font-bold text-white">~{theirCustomers}<span className="text-sm text-[#6b7280]">/mo</span></p>
            </div>
          )}
          <div className="bg-[#0f1217] rounded-xl p-5 border border-[#2a3347] text-center">
            <p className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-1">Monthly budget</p>
            <p className="text-2xl font-mono font-bold text-white">{fmtUSD(budget)}</p>
          </div>
        </div>
      )}

      {/* Context line */}
      <p className="text-base text-[#9ca3af] text-center max-w-3xl mx-auto mb-4">
        GolfN reaches golfers who have verified handicaps, equipment preferences, and playing frequency. Every impression goes to someone who actually plays golf -- not a lookalike audience.
      </p>

      {/* 60-day review */}
      <div className="bg-[#001a14]/40 border border-[#00ff9d]/15 rounded-xl p-6 text-center mb-4">
        <p className="text-lg text-[#d1d5db]">
          We schedule a review at 60 days. We bring the data. You tell us if the numbers justify month 3.
        </p>
      </div>

      {/* Footnote */}
      <p className="text-xs text-[#4b5563] text-center max-w-3xl mx-auto">
        Based on GolfN ~$3.50 effective CPM vs entered paid social CPM. Impressions = budget / CPM x 1,000. GolfN impressions reach verified, active golfers across email, in-app, push, Daily Grind, and social channels.
      </p>
    </div>
  )
}

export function PersonalizedImpactCard() {
  const { cpm, cac, ltv, monthlyBudget } = useBrandSpend()

  const hasData = cpm && cpm > 0 && monthlyBudget && monthlyBudget > 0

  // Example numbers for placeholder
  const exCpm = 72
  const exCac = 180
  const exLtv = 800
  const exBudget = 25000

  return (
    <section className="py-16 md:py-20" id="personalized-impact">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatePresence mode="wait">
          {hasData ? (
            <motion.div
              key="real"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1a1f2e]/80 backdrop-blur-sm border border-[#2a3347] rounded-2xl p-8 md:p-12"
            >
              <ImpactContent cpm={cpm!} cac={cac || 0} ltv={ltv || 0} budget={monthlyBudget!} isExample={false} />

              <div className="flex justify-center mt-6">
                <button
                  onClick={() => document.getElementById('brand-spend-input')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#00ff9d] transition-colors"
                >
                  <ArrowUp className="w-4 h-4" /> Adjust my numbers
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="example"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1a1f2e]/50 backdrop-blur-sm border border-[#2a3347]/60 rounded-2xl p-8 md:p-12 relative"
            >
              <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(0,255,157,0.02), transparent)' }} />
              <div className="relative">
                <ImpactContent cpm={exCpm} cac={exCac} ltv={exLtv} budget={exBudget} isExample={true} />

                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => document.getElementById('brand-spend-input')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00ff9d]/10 border border-[#00ff9d]/30 text-base font-semibold text-[#00ff9d] hover:bg-[#00ff9d]/20 transition-all"
                  >
                    <ArrowUp className="w-4 h-4" /> Use my numbers
                  </button>
                </div>

                <p className="text-xs text-[#4b5563] text-center mt-4">Example shown: $72 CPM, $180 CAC, $800 LTV, $25,000/mo budget</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
