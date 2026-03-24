'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, TrendingUp, Users, Target, ArrowUp } from 'lucide-react'
import { useBrandSpend } from '@/lib/brand-context'

const GOLFN_CPM = 3.5
const CAC_REDUCTION = 0.40 // 40% conservative reduction

function fmt(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${Math.round(n).toLocaleString()}`
  return `${n}`
}

function fmtUSD(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

function ImpactContent({ cpm, cac, budget, isExample }: { cpm: number; cac: number; budget: number; isExample: boolean }) {
  const theirImpressions = Math.round(budget / cpm * 1000)
  const golfnImpressions = Math.round(budget / GOLFN_CPM * 1000)
  const reachMultiplier = Math.round(cpm / GOLFN_CPM)

  const theirCustomers = Math.round(budget / cac)
  const golfnCac = Math.round(cac * (1 - CAC_REDUCTION))
  const golfnCustomers = Math.round(budget / golfnCac)
  const customerLift = golfnCustomers - theirCustomers

  return (
    <div>
      {/* Headline */}
      <div className="mb-8">
        {isExample ? (
          <p className="text-2xl md:text-3xl font-bold text-white leading-tight">See what GolfN could deliver<br /><span className="text-[#00ff9d]">for a typical golf brand</span></p>
        ) : (
          <p className="text-2xl md:text-3xl font-bold text-white leading-tight">For your <span className="text-[#00ff9d]">{fmtUSD(budget)}/mo</span> budget, GolfN would deliver<br /><span className="text-[#00ff9d]">{reachMultiplier}x more reach</span> and <span className="text-[#00ff9d]">{customerLift} more customers</span></p>
        )}
      </div>

      {/* Three-layer comparison */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {/* Layer 1: Reach */}
        <div className="bg-[#0f1217] rounded-xl p-6 border border-[#2a3347]">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-[#6b7280]" />
            <span className="text-sm font-mono uppercase tracking-wider text-[#6b7280]">Reach</span>
          </div>
          <div className="mb-4">
            <p className="text-xs text-[#6b7280] mb-1">Paid social ({isExample ? '$18' : `$${cpm}`} CPM)</p>
            <p className="text-2xl font-mono font-bold text-[#9ca3af]">{fmt(theirImpressions)}</p>
            <p className="text-xs text-[#6b7280]">impressions</p>
          </div>
          <div>
            <p className="text-xs text-[#00ff9d] mb-1">GolfN (~$3.50 CPM)</p>
            <p className="text-3xl font-mono font-bold text-[#00ff9d]">{fmt(golfnImpressions)}</p>
            <p className="text-xs text-[#6b7280]">impressions to <span className="text-[#00ff9d]">verified golfers</span></p>
          </div>
        </div>

        {/* Layer 2: Quality */}
        <div className="bg-[#0f1217] rounded-xl p-6 border border-[#2a3347]">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-[#6b7280]" />
            <span className="text-sm font-mono uppercase tracking-wider text-[#6b7280]">Quality</span>
          </div>
          <div className="mb-4">
            <p className="text-xs text-[#6b7280] mb-1">Paid social audience</p>
            <p className="text-lg font-semibold text-[#9ca3af]">"Interested in golf"</p>
            <p className="text-xs text-[#6b7280] mt-1">Self-reported interests, lookalikes, broad demo targeting</p>
          </div>
          <div>
            <p className="text-xs text-[#00ff9d] mb-1">GolfN audience</p>
            <p className="text-lg font-semibold text-[#00ff9d]">Verified golfers</p>
            <p className="text-xs text-[#6b7280] mt-1">Known handicap, equipment, playing frequency, purchase history</p>
          </div>
        </div>

        {/* Layer 3: Conversion -- the punchline */}
        <div className="bg-[#001a14]/60 rounded-xl p-6 border-2 border-[#00ff9d]/30">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#00ff9d]" />
            <span className="text-sm font-mono uppercase tracking-wider text-[#00ff9d]">Conversion</span>
          </div>
          <div className="mb-4">
            <p className="text-xs text-[#6b7280] mb-1">At your {isExample ? '$180' : fmtUSD(cac)} CAC</p>
            <p className="text-2xl font-mono font-bold text-[#9ca3af]">{theirCustomers}</p>
            <p className="text-xs text-[#6b7280]">new customers / month</p>
          </div>
          <div>
            <p className="text-xs text-[#00ff9d] mb-1">With GolfN (est. {fmtUSD(golfnCac)} CAC)</p>
            <p className="text-4xl font-mono font-bold text-[#00ff9d]">{golfnCustomers}</p>
            <p className="text-xs text-[#6b7280]">new customers / month</p>
          </div>
          <div className="mt-3 pt-3 border-t border-[#00ff9d]/20">
            <p className="text-lg font-bold text-[#00ff9d]">+{customerLift} more customers</p>
            <p className="text-xs text-[#6b7280]">same budget, every month</p>
          </div>
        </div>
      </div>

      {/* Center multiplier pill */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#00ff9d]/10 border border-[#00ff9d]/30">
          <Sparkles className="w-5 h-5 text-[#00ff9d]" />
          <span className="text-xl font-bold text-[#00ff9d]">{reachMultiplier}x more reach, pre-qualified audience, ~{Math.round(CAC_REDUCTION * 100)}% lower CAC</span>
        </div>
      </div>

      {/* Context */}
      <p className="text-base text-[#9ca3af] text-center max-w-3xl mx-auto mb-4">
        GolfN users are educated about your product through Learn & Earn before they ever see a purchase offer. That pre-qualification is why acquisition costs drop — you’re not converting cold impressions, you’re converting informed golfers.
      </p>

      {/* Footnote */}
      <p className="text-xs text-[#4b5563] text-center max-w-3xl mx-auto">
        Based on GolfN’s average ~$3.50 CPM vs entered paid social CPM. CAC reduction estimated at ~40% based on L.A.B. Golf and early partner data where pre-qualified cohorts convert at significantly higher rates. Impressions = budget / CPM * 1000.
      </p>
    </div>
  )
}

export function PersonalizedImpactCard() {
  const { cpm, cac, monthlyBudget } = useBrandSpend()

  const hasData = cpm && cpm > 0 && cac && cac > 0 && monthlyBudget && monthlyBudget > 0

  // Example numbers for placeholder
  const exCpm = 18
  const exCac = 180
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
              <ImpactContent cpm={cpm!} cac={cac!} budget={monthlyBudget!} isExample={false} />

              <div className="flex justify-center mt-6">
                <button
                  onClick={() => document.getElementById('brand-spend-input')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#00ff9d] transition-colors"
                >
                  <ArrowUp className="w-4 h-4" /> Adjust numbers
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
                <ImpactContent cpm={exCpm} cac={exCac} budget={exBudget} isExample={true} />

                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => document.getElementById('brand-spend-input')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00ff9d]/10 border border-[#00ff9d]/30 text-base font-semibold text-[#00ff9d] hover:bg-[#00ff9d]/20 transition-all"
                  >
                    <ArrowUp className="w-4 h-4" /> Use my numbers
                  </button>
                </div>

                <p className="text-xs text-[#4b5563] text-center mt-4">Example shown: $18 CPM, $180 CAC, $25,000/mo budget</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
