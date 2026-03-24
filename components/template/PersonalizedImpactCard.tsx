'use client'

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
        <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-3">60-Day Success Criteria Baseline</p>
        <p className="text-2xl md:text-3xl font-bold text-white leading-tight">The numbers we will both<br /><span className="text-[#00ff9d]">look at again in 60 days</span></p>
        <p className="text-base text-[#9ca3af] mt-3 max-w-3xl">
          {"You're"} putting up ~$5,000 in product for the sweepstakes and a $2,500 startup fee. Below are the benchmarks that same $7,500 would produce on paid social at your current rates{isExample ? ' (shown for a typical premium golf brand)' : ''}. These are the objective numbers we measure against at the 60-day review. Each is an independent criterion -- beating any one of them means the program is working:
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

      {/* The independent success criteria */}
      <div className="mb-10">
        <p className="text-lg font-semibold text-white mb-2">Any one of these beating your current numbers is a win.</p>
        <p className="text-base text-[#9ca3af] mb-6">Two or more means the channel is outperforming paid social across multiple dimensions.</p>

        <div className="space-y-5">
          {/* Criterion 1: Reach */}
          <div className="bg-[#0f1217] rounded-xl p-6 border border-[#2a3347]">
            <div className="flex gap-4 items-start">
              <div className="shrink-0 mt-2"><div className="w-2.5 h-2.5 rounded-full bg-[#00ff9d]" /></div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#00ff9d] mb-1">Criterion 1: Reach efficiency</p>
                <p className="text-xl font-bold text-white">More than {theirImpressions} impressions -- to verified golfers</p>
                <p className="text-sm text-[#6b7280] mt-2">Your brand gets exposure across sweepstakes pages, email, push, in-app messaging, and social. Every impression reaches a golfer with a known handicap, equipment preferences, and playing frequency. Not a lookalike. Not someone who clicked "interested in golf" once. A real, active golfer. If we exceed {theirImpressions} impressions to this audience, the reach efficiency alone beats what the same dollars buy on paid social.</p>
              </div>
            </div>
          </div>

          {/* Criterion 2: Conversions */}
          {cac > 0 && (
            <div className="bg-[#0f1217] rounded-xl p-6 border border-[#2a3347]">
              <div className="flex gap-4 items-start">
                <div className="shrink-0 mt-2"><div className="w-2.5 h-2.5 rounded-full bg-[#00ff9d]" /></div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#00ff9d] mb-1">Criterion 2: Conversion efficiency</p>
                  <p className="text-xl font-bold text-white">More than {theirCustomers} customers -- or a lower CAC than {fmtUSD(cac)}</p>
                  <p className="text-sm text-[#6b7280] mt-2">The audience already plays golf and already buys golf products. If attributed conversions come in at a lower cost than your current paid social CAC, or you acquire more customers than the ~{theirCustomers} the same $7,500 would produce elsewhere, that is a separate, independent success criterion met.</p>
                </div>
              </div>
            </div>
          )}

          {/* Criterion 3: Qualified cohort */}
          <div className="bg-[#0f1217] rounded-xl p-6 border border-[#2a3347]">
            <div className="flex gap-4 items-start">
              <div className="shrink-0 mt-2"><div className="w-2.5 h-2.5 rounded-full bg-[#00ff9d]" /></div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#00ff9d] mb-1">Criterion 3: Qualified cohort with expansion potential</p>
                <p className="text-xl font-bold text-white">A qualified audience and the ability to keep growing it</p>
                <p className="text-sm text-[#6b7280] mt-2">The sweepstakes generates signal about which types of golfers respond to your brand. Our AI lookalike engine uses that signal to identify more qualified users who match the profile of your best responders -- including golfers who never entered the original sweepstakes. Paid social produces none of this. When you stop spending, the audience is gone. With GolfN, you walk away with a qualified cohort and the option to keep activating and expanding it. That is what we would walk through together at the 60-day review.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The 60-day review -- MOST PROMINENT TEXT */}
      <div className="bg-[#001a14]/60 border-2 border-[#00ff9d]/30 rounded-xl p-8 md:p-10 mb-6">
        <p className="text-sm font-mono uppercase tracking-wider text-[#00ff9d] mb-4">The 60-Day Review</p>
        <p className="text-xl md:text-2xl text-white font-bold leading-9">
          We schedule a review at 60 days. We bring the data across every one of these criteria. No spin, no cherry-picking -- the objective numbers side by side with the baseline you set today. You tell us if the results justify month 3.
        </p>
        <p className="text-base text-[#9ca3af] mt-4">
          If we beat one criterion, the investment was worth it. If we beat two, the channel is clearly working. If we beat all three, the question is not whether to continue -- it is how fast to scale.
        </p>
      </div>

      {/* Footnote */}
      <p className="text-xs text-[#4b5563] text-center max-w-3xl mx-auto">
        Baseline benchmarks calculated from your inputs applied to the $7,500 GolfN investment (~$5,000 product + $2,500 startup fee): $7,500 / ${cpm} CPM x 1,000 = {theirImpressions} impressions.{cac > 0 ? ` $7,500 / ${fmtUSD(cac)} CAC = ~${theirCustomers} customers.` : ''} GolfN reaches verified, active golfers across email, push, in-app messaging, sweepstakes pages, Daily Grind, and social channels.
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
