{'use client'}

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useBrandSpend } from '@/lib/brand-context'

const GOLFN_ASK = 7500

function fmtUSD(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

function fmt(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${Math.round(n).toLocaleString()}`
  return `${Math.round(n)}`
}

interface Metric {
  label: string
  value: string
  sub: string
}

function buildMetrics(cpm: number, cac: number, ltv: number, budget: number): Metric[] {
  const metrics: Metric[] = []
  const theirCustomers = cac > 0 ? Math.round(GOLFN_ASK / cac) : 0
  const theirImpressions = fmt(Math.round(GOLFN_ASK / cpm * 1000))

  metrics.push({
    label: 'Your current CPM',
    value: `$${cpm}`,
    sub: `${fmtUSD(GOLFN_ASK)} buys ${theirImpressions} impressions on paid social`,
  })

  if (cac > 0) {
    metrics.push({
      label: 'Your current CAC',
      value: fmtUSD(cac),
      sub: `${fmtUSD(GOLFN_ASK)} buys ~${theirCustomers} customers on paid social`,
    })
  }

  if (ltv > 0 && cac > 0) {
    metrics.push({
      label: 'Your LTV:CAC',
      value: `${(ltv / cac).toFixed(1)}x`,
      sub: `${fmtUSD(ltv)} lifetime value per customer`,
    })
  }

  metrics.push({
    label: 'Monthly budget',
    value: fmtUSD(budget),
    sub: 'Current paid social spend',
  })

  return metrics
}

function FrameworkContent({ cpm, cac, ltv, budget, isExample }: { cpm: number; cac: number; ltv: number; budget: number; isExample: boolean }) {
  const metrics = buildMetrics(cpm, cac, ltv, budget)
  const theirCustomers = cac > 0 ? Math.round(GOLFN_ASK / cac) : 0
  const theirImpressions = fmt(Math.round(GOLFN_ASK / cpm * 1000))

  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-3">60-Day Review Framework</p>
        {isExample ? (
          <p className="text-2xl md:text-3xl font-bold text-white leading-tight">What would make this<br /><span className="text-[#00ff9d]">worth continuing?</span></p>
        ) : (
          <p className="text-2xl md:text-3xl font-bold text-white leading-tight">{"Here's what we'd need to beat"}<br /><span className="text-[#00ff9d]">for this to be worth your time</span></p>
        )}
        <p className="text-base text-[#9ca3af] mt-3 max-w-3xl">
          {"You're investing"} {fmtUSD(GOLFN_ASK)} upfront (sweepstakes product + startup fee). We run the sweepstakes, then an aggressive 30-day follow-up campaign. At the 60-day mark, we schedule a review and bring the data.{isExample ? ' Here is what that review would look like for a typical premium golf brand:' : ''}
        </p>
      </div>

      {/* Your current numbers - what we need to beat */}
      <div className={`grid gap-4 mb-10 ${metrics.length <= 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}`}>
        {metrics.map((m) => (
          <div key={m.label} className="bg-[#0f1217] rounded-xl p-5 border border-[#2a3347]">
            <p className="text-xs font-mono uppercase tracking-wider text-[#6b7280] mb-2">{m.label}</p>
            <p className="text-3xl font-mono font-bold text-white">{m.value}</p>
            <p className="text-sm text-[#4b5563] mt-1">{m.sub}</p>
          </div>
        ))}
      </div>

      {/* The success criteria */}
      <div className="mb-10">
        <p className="text-lg font-semibold text-white mb-6">At the 60-day review, we would show you:</p>

        <div className="space-y-4">
          {/* Reach */}
          <div className="flex gap-4 items-start">
            <div className="shrink-0 mt-2"><div className="w-2.5 h-2.5 rounded-full bg-[#00ff9d]" /></div>
            <div>
              <p className="text-lg font-bold text-white">{"Did we deliver impressions at a lower CPM than your"} ${cpm}?</p>
              <p className="text-sm text-[#6b7280]">Every GolfN impression reaches a verified golfer -- not a lookalike. If the CPM is lower and the audience is better, {"that's"} a clear improvement over paid social.</p>
            </div>
          </div>

          {/* Cohort */}
          <div className="flex gap-4 items-start">
            <div className="shrink-0 mt-2"><div className="w-2.5 h-2.5 rounded-full bg-[#00ff9d]" /></div>
            <div>
              <p className="text-lg font-bold text-white">How many golfers are in your qualified cohort?</p>
              <p className="text-sm text-[#6b7280]">Golfers who completed Learn & Earn about your product -- watched your content, passed a quiz, opted in. These are people who provably understand what you make. You own this cohort and can re-activate them without paying to find them again.</p>
            </div>
          </div>

          {/* Conversion */}
          {cac > 0 && (
            <div className="flex gap-4 items-start">
              <div className="shrink-0 mt-2"><div className="w-2.5 h-2.5 rounded-full bg-[#00ff9d]" /></div>
              <div>
                <p className="text-lg font-bold text-white">{"Are conversions trending below your"} {fmtUSD(cac)} CAC?</p>
                <p className="text-sm text-[#6b7280]">The cohort is pre-educated about your product before they ever see a purchase offer. If that pre-qualification produces conversions at a lower cost than cold paid social, the channel is working.{theirCustomers > 0 ? ` For reference, ${fmtUSD(GOLFN_ASK)} buys ~${theirCustomers} customers at your current CAC.` : ''}</p>
              </div>
            </div>
          )}

          {/* Re-engagement */}
          <div className="flex gap-4 items-start">
            <div className="shrink-0 mt-2"><div className="w-2.5 h-2.5 rounded-full bg-[#00ff9d]" /></div>
            <div>
              <p className="text-lg font-bold text-white">Is the cohort responding to follow-up campaigns?</p>
              <p className="text-sm text-[#6b7280]">On paid social, you stop spending, you stop existing. On GolfN, we can keep activating the cohort. If re-engagement rates are strong, the value compounds over time.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Punchline */}
      <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl p-6 md:p-8 mb-6">
        <p className="text-lg md:text-xl text-[#d1d5db] leading-8">
          The bar is simple: do better than what {"you're"} currently getting. We {"don't"} set the targets -- you do. We schedule a review at 60 days. We bring the data. You tell us if the numbers justify month 3.
        </p>
      </div>

      {/* Footnote */}
      <p className="text-xs text-[#4b5563] text-center max-w-3xl mx-auto">
        GolfN ~$3.50 effective CPM reaches verified, active golfers across email, in-app, push, Daily Grind, and social channels. All metrics reviewed collaboratively at the 60-day mark with full transparency.
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

                <p className="text-xs text-[#4b5563] text-center mt-4">Example shown: $72 CPM, $180 CAC, $800 LTV, $25,000/mo budget</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
