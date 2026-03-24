{'use client'}

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, Target, GraduationCap, ShoppingCart, Users, Eye } from 'lucide-react'
import { useBrandSpend, GOAL_LABELS, type SuccessGoal } from '@/lib/brand-context'

const GOLFN_ASK = 7500

function fmtUSD(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

function fmt(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${Math.round(n).toLocaleString()}`
  return `${Math.round(n)}`
}

const GOAL_ICONS: Record<SuccessGoal, React.ElementType> = {
  reach: Target,
  education: GraduationCap,
  sales: ShoppingCart,
  audience: Users,
  awareness: Eye,
}

interface Tier {
  label: string
  color: string
  metric: string
  context: string
}

function buildTiers(goal: SuccessGoal, cpm: number, cac: number, ltv: number, budget: number): Tier[] {
  const theirImpressions = fmt(Math.round(GOLFN_ASK / cpm * 1000))
  const theirCustomers = Math.round(GOLFN_ASK / cac)

  switch (goal) {
    case 'reach':
      return [
        { label: 'Win', color: '#00ff9d',
          metric: `CPM below $${cpm}`,
          context: 'Lower cost per impression than paid social, and every one reaches a verified golfer' },
        { label: 'Strong win', color: '#f59e0b',
          metric: `More than ${theirImpressions} impressions`,
          context: `That is what ${fmtUSD(GOLFN_ASK)} currently buys you on paid social -- to a general audience` },
        { label: 'Home run', color: '#ef4444',
          metric: 'Clear case to reallocate budget',
          context: `The efficiency gap is large enough that shifting spend from your ${fmtUSD(budget)}/mo becomes obvious` },
      ]
    case 'education':
      return [
        { label: 'Win', color: '#00ff9d',
          metric: '150+ Learn & Earn completions',
          context: 'Golfers who watched your content, passed a quiz, and opted in -- provably educated' },
        { label: 'Strong win', color: '#f59e0b',
          metric: '300+ completions, 80%+ pass rate',
          context: 'A qualified cohort that understands your product before they ever see a purchase offer' },
        { label: 'Home run', color: '#ef4444',
          metric: '500+ educated golfers',
          context: 'Measurable re-engagement when follow-up content is delivered to the cohort' },
      ]
    case 'sales':
      return [
        { label: 'Win', color: '#00ff9d',
          metric: `CAC trending below ${fmtUSD(cac)}`,
          context: `Any improvement over your current acquisition cost on a pre-qualified audience is signal${ltv > 0 ? ` (your LTV:CAC today is ${(ltv / cac).toFixed(1)}x)` : ''}` },
        { label: 'Strong win', color: '#f59e0b',
          metric: `More than ${theirCustomers} customers`,
          context: `That is what ${fmtUSD(GOLFN_ASK)} buys you at your current ${fmtUSD(cac)} CAC on paid social` },
        { label: 'Home run', color: '#ef4444',
          metric: `Cohort revenue covers the ${fmtUSD(GOLFN_ASK)}`,
          context: 'The initial investment pays for itself within 60 days and the cohort keeps converting' },
      ]
    case 'audience':
      return [
        { label: 'Win', color: '#00ff9d',
          metric: '200+ golfers in your cohort',
          context: 'Qualified people you can re-activate without paying to find them again' },
        { label: 'Strong win', color: '#f59e0b',
          metric: '400+ with demonstrated re-engagement',
          context: 'The cohort responds to follow-up campaigns -- not a dead list' },
        { label: 'Home run', color: '#ef4444',
          metric: 'Organic cohort growth',
          context: 'AI lookalike enrollment keeps adding qualified golfers without additional spend' },
      ]
    case 'awareness':
      return [
        { label: 'Win', color: '#00ff9d',
          metric: 'Visible across the GolfN ecosystem',
          context: 'Email, in-app, push, Daily Grind, social -- to verified golfers in your target markets' },
        { label: 'Strong win', color: '#f59e0b',
          metric: 'Repeat engagement without additional spend',
          context: 'Golfers coming back to your content organically within the cohort' },
        { label: 'Home run', color: '#ef4444',
          metric: 'Organic social proof',
          context: 'Golfers sharing your sweepstakes, tagging your brand, creating UGC unprompted' },
      ]
  }
}

function GoalCard({ goal, cpm, cac, ltv, budget }: { goal: SuccessGoal; cpm: number; cac: number; ltv: number; budget: number }) {
  const Icon = GOAL_ICONS[goal]
  const tiers = buildTiers(goal, cpm, cac, ltv, budget)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#0f1217] rounded-xl p-6 border border-[#2a3347]"
    >
      <div className="flex items-center gap-2.5 mb-6">
        <Icon className="w-5 h-5 text-[#00ff9d]" />
        <span className="text-base font-semibold text-white">{GOAL_LABELS[goal]}</span>
      </div>
      <div className="space-y-6">
        {tiers.map((tier) => (
          <div key={tier.label} className="flex gap-3.5">
            <div className="shrink-0 mt-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: tier.color }} />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: tier.color }}>{tier.label}</span>
              <p className="text-lg font-bold text-white mt-0.5">{tier.metric}</p>
              <p className="text-sm text-[#6b7280] mt-0.5 leading-relaxed">{tier.context}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export function PersonalizedImpactCard() {
  const { cpm, cac, ltv, monthlyBudget, successGoals } = useBrandSpend()

  const hasNumbers = cpm && cpm > 0 && cac && cac > 0 && monthlyBudget && monthlyBudget > 0
  const hasGoals = successGoals.size > 0
  const isReady = hasNumbers && hasGoals

  const exCpm = 72
  const exCac = 180
  const exLtv = 800
  const exBudget = 25000
  const exGoals: SuccessGoal[] = ['reach', 'education', 'sales']

  const activeCpm = hasNumbers ? cpm! : exCpm
  const activeCac = hasNumbers ? cac! : exCac
  const activeLtv = (ltv && ltv > 0) ? ltv : (hasNumbers ? 0 : exLtv)
  const activeBudget = hasNumbers ? monthlyBudget! : exBudget
  const activeGoals = hasGoals ? Array.from(successGoals) : exGoals
  const isExample = !isReady

  const checkedCount = activeGoals.length

  return (
    <section className="py-16 md:py-20" id="personalized-impact">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={isReady ? 'real' : 'example'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`backdrop-blur-sm rounded-2xl p-8 md:p-12 ${
              isReady
                ? 'bg-[#1a1f2e]/80 border border-[#2a3347]'
                : 'bg-[#1a1f2e]/50 border border-[#2a3347]/60'
            }`}
          >
            <div className="mb-8">
              <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-3">60-Day Review Framework</p>
              {isExample ? (
                <p className="text-2xl md:text-3xl font-bold text-white leading-tight">What would make this<br /><span className="text-[#00ff9d]">worth continuing?</span></p>
              ) : (
                <p className="text-2xl md:text-3xl font-bold text-white leading-tight">{"Based on your numbers, here's what a win"}<br /><span className="text-[#00ff9d]">looks like at 60 days</span></p>
              )}
              <p className="text-base text-[#9ca3af] mt-3 max-w-3xl">
                {"You're investing"} {fmtUSD(GOLFN_ASK)} upfront (sweepstakes product + startup fee). We run the sweepstakes, then an aggressive 30-day follow-up campaign. At the 60-day mark, we schedule a review and bring the data. {"Here's what we'd be measuring against"}{isExample ? ' for a typical premium golf brand' : ''}:
              </p>
            </div>

            <div className={`grid gap-5 mb-8 ${
              activeGoals.length === 1 ? 'grid-cols-1 max-w-2xl' :
              activeGoals.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
              activeGoals.length >= 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : ''
            }`}>
              {activeGoals.map((goal) => (
                <GoalCard key={goal} goal={goal} cpm={activeCpm} cac={activeCac} ltv={activeLtv} budget={activeBudget} />
              ))}
            </div>

            <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl p-6 md:p-8 mb-6">
              <p className="text-lg md:text-xl text-[#d1d5db] leading-8">
                {checkedCount === 1 && (
                  <>The bar is simple: do better than what {"you're"} currently getting. Hit <span className="text-[#00ff9d] font-bold">Win</span> and the {fmtUSD(GOLFN_ASK)} was worth it. Hit <span className="font-bold" style={{ color: '#f59e0b' }}>Strong win</span> and {"you're"} getting more from GolfN than from paid social. And if we hit <span className="font-bold" style={{ color: '#ef4444' }}>Home run</span> -- {"that's"} when we talk about what month 3 looks like.</>
                )}
                {checkedCount >= 2 && (
                  <>The bar is simple: do better than what {"you're"} currently getting. Any <span className="font-bold">one</span> of these at <span className="text-[#00ff9d] font-bold">Win</span> and the {fmtUSD(GOLFN_ASK)} was worth it. Hit <span className="font-bold" style={{ color: '#f59e0b' }}>Strong win</span> on two or more and {"you're"} getting more from GolfN than from paid social. And if we hit <span className="font-bold" style={{ color: '#ef4444' }}>Home run</span> on anything -- {"that's"} when we talk about what month 3 looks like.</>
                )}
              </p>
            </div>

            <p className="text-base text-center text-[#9ca3af] max-w-2xl mx-auto">
              We schedule a review at 60 days. We bring the data. You tell us if the numbers justify month 3.
            </p>

            <div className="flex justify-center mt-6 gap-4">
              {isExample && (
                <button
                  onClick={() => document.getElementById('brand-spend-input')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00ff9d]/10 border border-[#00ff9d]/30 text-base font-semibold text-[#00ff9d] hover:bg-[#00ff9d]/20 transition-all"
                >
                  <ArrowUp className="w-4 h-4" /> Use my numbers
                </button>
              )}
              {!isExample && (
                <button
                  onClick={() => document.getElementById('brand-spend-input')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#00ff9d] transition-colors"
                >
                  <ArrowUp className="w-4 h-4" /> Adjust numbers
                </button>
              )}
            </div>

            {isExample && (
              <p className="text-xs text-[#4b5563] text-center mt-4">Example shown: $72 CPM, $180 CAC, $800 LTV, $25,000/mo budget</p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
