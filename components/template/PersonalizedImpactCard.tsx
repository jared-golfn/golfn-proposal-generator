{'use client'}

import { motion, AnimatePresence } from 'framer-motion'
import { Check, Flame, Rocket, ArrowUp, Target, GraduationCap, ShoppingCart, Users, Eye } from 'lucide-react'
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
  icon: React.ElementType
  label: string
  color: string
  text: string
}

function buildTiers(goal: SuccessGoal, cpm: number, cac: number, ltv: number, budget: number): Tier[] {
  switch (goal) {
    case 'reach': {
      const theirImpressions = fmt(Math.round(GOLFN_ASK / cpm * 1000))
      return [
        { icon: Check, label: 'Win', color: '#00ff9d', text: `GolfN delivers impressions to verified golfers at a lower CPM than your current $${cpm} -- and every impression reaches someone who actually plays golf` },
        { icon: Flame, label: 'Strong win', color: '#f59e0b', text: `CPM comes in meaningfully lower, delivering significantly more qualified impressions than the ${theirImpressions} that ${fmtUSD(GOLFN_ASK)} buys you on paid social` },
        { icon: Rocket, label: 'Home run', color: '#ef4444', text: `The reach efficiency is so clear that reallocating a portion of your ${fmtUSD(budget)}/mo paid social budget to GolfN becomes an obvious decision` },
      ]
    }
    case 'education': {
      return [
        { icon: Check, label: 'Win', color: '#00ff9d', text: '150+ golfers complete Learn & Earn about your product -- watched your content, passed a quiz, opted in' },
        { icon: Flame, label: 'Strong win', color: '#f59e0b', text: '300+ completions with 80%+ quiz pass rate -- provably educated, ready for conversion offers' },
        { icon: Rocket, label: 'Home run', color: '#ef4444', text: '500+ educated golfers in your cohort, with measurable re-engagement when follow-up content is delivered' },
      ]
    }
    case 'sales': {
      const theirCustomers = Math.round(GOLFN_ASK / cac)
      const ltvCacRatio = ltv > 0 ? (ltv / cac).toFixed(1) : null
      const strongCustomers = Math.max(theirCustomers + 5, Math.round(GOLFN_ASK / (cac * 0.7)))
      const strongLtvValue = ltv > 0 ? fmtUSD(strongCustomers * ltv) : null
      return [
        { icon: Check, label: 'Win', color: '#00ff9d', text: `Attributed conversions trending at a lower CAC than your current ${fmtUSD(cac)} -- any improvement on a pre-qualified audience is a clear signal${ltvCacRatio ? ` (your LTV:CAC today is ${ltvCacRatio}x)` : ''}` },
        { icon: Flame, label: 'Strong win', color: '#f59e0b', text: `More customers than the ~${theirCustomers} that ${fmtUSD(GOLFN_ASK)} would buy on paid social${strongLtvValue ? ` -- at your ${fmtUSD(ltv)} LTV, ${strongCustomers} customers represents ${strongLtvValue} in lifetime value` : ''}` },
        { icon: Rocket, label: 'Home run', color: '#ef4444', text: `Revenue from the cohort exceeds the ${fmtUSD(GOLFN_ASK)} investment within 60 days -- the program pays for itself and the cohort keeps converting` },
      ]
    }
    case 'audience': {
      return [
        { icon: Check, label: 'Win', color: '#00ff9d', text: '200+ qualified golfers in your permanent cohort -- people you can re-activate without paying to reach them again' },
        { icon: Flame, label: 'Strong win', color: '#f59e0b', text: '400+ cohort members with demonstrated re-engagement on follow-up campaigns' },
        { icon: Rocket, label: 'Home run', color: '#ef4444', text: 'Cohort grows organically via AI lookalike enrollment -- GolfN keeps finding more golfers like your best ones' },
      ]
    }
    case 'awareness': {
      return [
        { icon: Check, label: 'Win', color: '#00ff9d', text: 'Your brand visible across the GolfN ecosystem -- email, in-app, push, Daily Grind, social -- to verified golfers in your target markets' },
        { icon: Flame, label: 'Strong win', color: '#f59e0b', text: 'Measurable lift in brand recognition within the GolfN cohort -- repeat engagement on your content without additional spend' },
        { icon: Rocket, label: 'Home run', color: '#ef4444', text: 'Organic social proof: golfers sharing your sweepstakes, tagging your brand, creating UGC without being asked' },
      ]
    }
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
      <div className="flex items-center gap-2.5 mb-5">
        <Icon className="w-5 h-5 text-[#00ff9d]" />
        <span className="text-base font-semibold text-white">{GOAL_LABELS[goal]}</span>
      </div>
      <div className="space-y-4">
        {tiers.map((tier) => {
          const TierIcon = tier.icon
          return (
            <div key={tier.label} className="flex gap-3">
              <div className="shrink-0 mt-0.5">
                <TierIcon className="w-5 h-5" style={{ color: tier.color }} />
              </div>
              <div>
                <span className="text-sm font-bold" style={{ color: tier.color }}>{tier.label}</span>
                <p className="text-sm text-[#9ca3af] mt-0.5 leading-relaxed">{tier.text}</p>
              </div>
            </div>
          )
        })}
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
                  <>Hit the <span className="text-[#00ff9d] font-bold">Win</span> level and the {fmtUSD(GOLFN_ASK)} was a smart investment. Hit <span className="font-bold" style={{ color: '#f59e0b' }}>Strong win</span> and {"you're"} outperforming what most brands get from significantly more spend on paid social. And if we hit <span className="font-bold" style={{ color: '#ef4444' }}>Home run</span> -- {"that's"} when we talk about scaling.</>
                )}
                {checkedCount >= 2 && (
                  <>Any <span className="font-bold">one</span> of these at the <span className="text-[#00ff9d] font-bold">Win</span> level makes the {fmtUSD(GOLFN_ASK)} a smart investment. Hit <span className="font-bold" style={{ color: '#f59e0b' }}>Strong win</span> on two or more and {"you're"} outperforming what most brands get from significantly more spend on paid social. And if we hit <span className="font-bold" style={{ color: '#ef4444' }}>Home run</span> on anything -- {"that's"} when we talk about scaling.</>
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
