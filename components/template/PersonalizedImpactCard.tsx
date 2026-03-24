{'use client'}

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useBrandSpend } from '@/lib/brand-context'

function fmtUSD(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

function fmt(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${Math.round(n).toLocaleString()}`
  return `${Math.round(n)}`
}

function FrameworkContent({ cpm, cac, ltv, budget, isExample }: { cpm: number; cac: number; ltv: number; budget: number; isExample: boolean }) {
  const golfnInvestment = 7500
  const theirImpressions = fmt(Math.round(golfnInvestment / cpm * 1000))
  const theirCustomers = cac > 0 ? Math.round(golfnInvestment / cac) : 0
  const ltvCacRatio = ltv > 0 && cac > 0 ? (ltv / cac).toFixed(1) : null

  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-3">60-Day Review Framework</p>
        <p className="text-2xl md:text-3xl font-bold text-white leading-tight">Multiple ways this can be<br /><span className="text-[#00ff9d]">a huge win for your brand</span></p>
        <p className="text-base text-[#9ca3af] mt-3 max-w-3xl">
          {"You're"} putting up ~$5,000 in product for the sweepstakes and a $2,500 startup fee. If you took that same $7,500 and spent it on paid social instead, {"here's"} what {"you'd"} get at your current rates{isExample ? ' (shown for a typical premium golf brand)' : ''}. Each of these is an independent way GolfN can outperform that spend:
        </p>
      </div>

      {/* The benchmarks -- what the same $7,500 gets on paid social */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {/* Reach benchmark */}
        <div className="bg-[#0f1217] rounded-xl p-6 border border-[#2a3347]">
          <p className="text-xs font-mono uppercase tracking-wider text-[#6b7280] mb-3">Same $7,500 on paid social</p>
          <p className="text-4xl font-mono font-bold text-white mb-1">{theirImpressions}</p>
          <p className="text-base text-[#6b7280]">impressions at your ${cpm} CPM</p>
          <p className="text-sm text-[#4b5563] mt-3">to a general audience based on self-reported interests and lookalikes</p>
        </div>

        {/* Customer benchmark */}
        {cac > 0 && (
          <div className="bg-[#0f1217] rounded-xl p-6 border border-[#2a3347]">
            <p className="text-xs font-mono uppercase tracking-wider text-[#6b7280] mb-3">Same $7,500 on paid social</p>
            <p className="text-4xl font-mono font-bold text-white mb-1">~{theirCustomers}</p>
            <p className="text-base text-[#6b7280]">customers at your {fmtUSD(cac)} CAC</p>
            {ltvCacRatio && (
              <p className="text-sm text-[#4b5563] mt-3">your LTV:CAC is {ltvCacRatio}x ({fmtUSD(ltv)} per customer)</p>
            )}
          </div>
        )}

        {/* Audience benchmark */}
        <div className="bg-[#0f1217] rounded-xl p-6 border border-[#2a3347]">
          <p className="text-xs font-mono uppercase tracking-wider text-[#6b7280] mb-3">Same $7,500 on paid social</p>
          <p className="text-4xl font-mono font-bold text-white mb-1">0</p>
          <p className="text-base text-[#6b7280]">ability to keep going</p>
          <p className="text-sm text-[#4b5563] mt-3">when you stop spending, every impression disappears and the audience is gone</p>
        </div>
      </div>

      {/* The independent wins */}
      <div className="mb-10">
        <p className="text-lg font-semibold text-white mb-2">Any one of these beating your current numbers is a win.</p>
        <p className="text-base text-[#9ca3af] mb-6">Hit two or more and you just found a channel that outperforms paid social across the board.</p>

        <div className="space-y-5">
          {/* Win 1: Reach */}
          <div className="bg-[#0f1217] rounded-xl p-6 border border-[#2a3347]">
            <div className="flex gap-4 items-start">
              <div className="shrink-0 mt-2"><div className="w-2.5 h-2.5 rounded-full bg-[#00ff9d]" /></div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#00ff9d] mb-1">Win #1: Reach</p>
                <p className="text-xl font-bold text-white">More than {theirImpressions} impressions -- to verified golfers</p>
                <p className="text-sm text-[#6b7280] mt-2">Your brand gets exposure across sweepstakes pages, email, push, in-app messaging, and social. Every impression reaches a golfer with a known handicap, equipment preferences, and playing frequency. Not {"\"interested in golf.\""} Actual golfers. If we beat {theirImpressions} impressions, you got more efficient reach to a better audience than the same money on paid social.</p>
              </div>
            </div>
          </div>

          {/* Win 2: Conversions */}
          {cac > 0 && (
            <div className="bg-[#0f1217] rounded-xl p-6 border border-[#2a3347]">
              <div className="flex gap-4 items-start">
                <div className="shrink-0 mt-2"><div className="w-2.5 h-2.5 rounded-full bg-[#00ff9d]" /></div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#00ff9d] mb-1">Win #2: Conversions</p>
                  <p className="text-xl font-bold text-white">More than {theirCustomers} customers -- or a lower CAC than {fmtUSD(cac)}</p>
                  <p className="text-sm text-[#6b7280] mt-2">{"You're"} putting your brand in front of people who already play golf and already buy golf products. {"They're"} not cold. If conversions come in at a lower CAC than paid social, or you get more customers than the ~{theirCustomers} that the same $7,500 would buy you elsewhere, {"that's"} a separate, independent win.</p>
                </div>
              </div>
            </div>
          )}

          {/* Win 3: Qualified cohort + ability to keep growing */}
          <div className="bg-[#0f1217] rounded-xl p-6 border border-[#2a3347]">
            <div className="flex gap-4 items-start">
              <div className="shrink-0 mt-2"><div className="w-2.5 h-2.5 rounded-full bg-[#00ff9d]" /></div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#00ff9d] mb-1">Win #3: A qualified cohort you can keep growing</p>
                <p className="text-xl font-bold text-white">Verified golfers who responded to your brand -- and the ability to find more like them</p>
                <p className="text-sm text-[#6b7280] mt-2">The sweepstakes generates signal about which types of golfers engage with your brand. {"GolfN's"} AI lookalike engine uses that signal to identify more qualified users who match the profile of your best responders -- even people who never entered the original sweepstakes. Paid social gives you none of this. When you stop spending, the audience is gone. With GolfN, you walk away with a qualified cohort and the option to keep activating and expanding it. {"That's"} what {"we'd"} walk through at the 60-day review.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The compounding effect */}
      <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl p-6 md:p-8 mb-6">
        <p className="text-lg md:text-xl text-[#d1d5db] leading-8">
          Each of these is worth it on its own. But if GolfN beats your numbers on reach <span className="font-bold text-white">and</span> conversions <span className="font-bold text-white">and</span> gives you a qualified cohort you can keep growing -- {"you've"} found something paid social {"can't"} offer at any price. {"That's"} what the 60-day review is for. We bring the data. You tell us if the numbers justify month 3.
        </p>
      </div>

      {/* Footnote */}
      <p className="text-xs text-[#4b5563] text-center max-w-3xl mx-auto">
        Benchmarks based on your inputs applied to the $7,500 GolfN investment (~$5,000 product + $2,500 startup fee): $7,500 / ${cpm} CPM x 1,000 = {theirImpressions} impressions.{cac > 0 ? ` $7,500 / ${fmtUSD(cac)} CAC = ~${theirCustomers} customers.` : ''} GolfN reaches verified, active golfers across email, push, in-app messaging, sweepstakes pages, Daily Grind, and social channels.
      </p>
    </div>
  )
}

export function PersonalizedImpactCard() {
  const { cpm, cac, ltv, monthlyBudget } = useBrandSpend()

  const hasData = cpm && cpm > 0 && monthlyBudget && monthlyBudget > 0

  const exCpm = 72
  const exCac = 180
  const exLtv = 800
  const exBudget = 15000

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
              <FrameworkContent cpm={cpm!} cac={cac || 0} ltv={ltv || 0} budget={monthlyBudget!} isExample={false} />

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
                <FrameworkContent cpm={exCpm} cac={exCac} ltv={exLtv} budget={exBudget} isExample={true} />

                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => document.getElementById('brand-spend-input')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00ff9d]/10 border border-[#00ff9d]/30 text-base font-semibold text-[#00ff9d] hover:bg-[#00ff9d]/20 transition-all"
                  >
                    <ArrowUp className="w-4 h-4" /> Use my numbers
                  </button>
                </div>

                <p className="text-xs text-[#4b5563] text-center mt-4">Example shown: $72 CPM, $180 CAC, $800 LTV, $15,000/mo budget</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
