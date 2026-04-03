'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart3, Target, TrendingUp, Users, ChevronRight, Star, ChevronDown, ChevronUp, Plus } from 'lucide-react'
import { useSpendModel, useSpendMetrics, type SpendModel } from '@/lib/spend-model-context'
import { useBusinessNeed } from '@/lib/business-need-context'
import { getNeedById } from '@/lib/business-needs'
import { Fade } from './Fade'

const models: { id: SpendModel; label: string; subtitle: string; icon: typeof BarChart3 }[] = [
  { id: 'cpm', label: 'CPM', subtitle: 'I buy impressions and reach', icon: BarChart3 },
  { id: 'cpa', label: 'CPA / CPL', subtitle: 'I pay per lead or acquisition', icon: Target },
  { id: 'roas', label: 'ROAS', subtitle: 'I measure return on ad spend', icon: TrendingUp },
  { id: 'audience', label: 'Audience Building', subtitle: 'I invest in owned audiences', icon: Users },
]

const ratePresets = [
  { rate: 0, label: 'breakeven', isBreakeven: true },
  { rate: 1, label: 'conservative', isBreakeven: false },
  { rate: 2, label: 'typical', isBreakeven: false, highlighted: true },
  { rate: 3, label: 'strong', isBreakeven: false },
  { rate: 5, label: 'exceptional', isBreakeven: false },
]

function fmt(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

function BenchmarkRow({ label, value, golfnValue, isSelf, sublabel }: { label: string; value: number; golfnValue: number; isSelf?: boolean; sublabel?: string }) {
  const savings = isSelf ? null : Math.round(((value - golfnValue) / value) * 100)
  return (
    <div className={`flex items-center justify-between py-3 ${isSelf ? '' : 'border-b border-[#2a3347]/30'}`}>
      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${isSelf ? 'bg-[#00ff9d]' : 'bg-[#2a3347]'}`} />
        <div>
          <span className={`text-base ${isSelf ? 'text-[#00ff9d] font-bold' : 'text-[#9ca3af]'}`}>{label}</span>
          {sublabel && <p className="text-xs text-[#4b5563]">{sublabel}</p>}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className={`text-lg font-mono font-bold ${isSelf ? 'text-[#00ff9d]' : 'text-[#6b7280]'}`}>${value < 1 ? value.toFixed(2) : Math.round(value)}</span>
        {savings !== null && savings > 0 && <span className="text-xs font-mono bg-[#00ff9d]/10 text-[#00ff9d] px-2 py-0.5 rounded-full">{savings}% less</span>}
      </div>
    </div>
  )
}

function CombinedValue({ excludeModel }: { excludeModel: 'cpm' | 'cpa' | 'roas' | 'audience' }) {
  const m = useSpendMetrics()
  const costPerOwned = m.totalInitial / m.cohortSize
  const customers = Math.round(m.cohortSize * (m.conversionRate / 100))
  const endemicEquivalent = Math.round((m.estimatedImpressions / 1000) * 65)

  const allMetrics: { id: string; icon: typeof BarChart3; value: string; label: string; sub: string }[] = [
    { id: 'cpm', icon: BarChart3, value: `$${m.effectiveCPM < 1 ? m.effectiveCPM.toFixed(2) : Math.round(m.effectiveCPM)}`, label: 'CPM', sub: `${m.estimatedImpressions.toLocaleString()} impressions` },
    { id: 'cpa', icon: Target, value: fmt(m.costPerQualifiedLead), label: 'per lead', sub: `${m.cohortSize.toLocaleString()} qualified golfers` },
    { id: 'roas', icon: TrendingUp, value: `${m.projectedROAS}:1`, label: 'ROAS', sub: `${fmt(m.projectedRevenue)} revenue` },
    { id: 'audience', icon: Users, value: fmt(costPerOwned), label: 'per owned golfer', sub: `${m.cohortSize.toLocaleString()} yours to keep` },
  ]

  return (
    <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-8 md:p-10 mb-8">
      {/* L.A.B. tie-in */}
      <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl px-5 py-3 mb-8">
        <p className="text-sm text-[#d1d5db]">
          L.A.B. Golf turned this same {fmt(m.totalInitial)} into $44,692 revenue and their #1 channel in Indiana -- well above breakeven.
        </p>
      </div>

      <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.2em] mb-6">One investment. Four outcomes.</p>

      {/* Visual equation: 4 cards with + signs between them */}
      <div className="flex flex-col lg:flex-row items-stretch gap-0 mb-8">
        {allMetrics.map((met, i) => {
          const isSelected = met.id === excludeModel
          return (
            <div key={met.id} className="flex flex-col lg:flex-row items-center flex-1">
              {i > 0 && (
                <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 shrink-0 my-1 lg:my-0">
                  <Plus className="w-5 h-5 text-[#00ff9d]/40" />
                </div>
              )}
              <div className={`w-full bg-[#0f1217] rounded-xl p-5 md:p-6 text-center flex-1 ${isSelected ? 'border-2 border-[#00ff9d]/40 shadow-[0_0_20px_rgba(0,255,157,0.06)]' : 'border border-[#2a3347]/50'}`}>
                <met.icon className="w-5 h-5 text-[#00ff9d] mx-auto mb-2" />
                <p className="text-3xl md:text-4xl font-mono font-bold text-[#00ff9d] mb-1">{met.value}</p>
                <p className="text-sm font-semibold text-white mb-1">{met.label}</p>
                <p className="text-xs text-[#6b7280]">{met.sub}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Punchline */}
      <div className="text-center">
        <p className="text-xl md:text-2xl font-bold text-white mb-3">
          All from one <span className="text-[#00ff9d]">{fmt(m.totalInitial)}</span> investment.
        </p>
        <p className="text-base text-[#9ca3af] max-w-2xl mx-auto">
          The impressions alone would cost <span className="text-white font-semibold">{fmt(endemicEquivalent)}</span> on Golf Digest -- without qualified leads, projected revenue, or an owned audience. On paid social, you pick one. On GolfN, they stack.
        </p>
      </div>
    </div>
  )
}

function ModelBenchmarks({ selectedModel }: { selectedModel: 'cpm' | 'cpa' | 'roas' | 'audience' }) {
  const m = useSpendMetrics()
  const { aov, setAov, conversionRate, setConversionRate, cohortSize } = useSpendModel()
  const { selectedNeed } = useBusinessNeed()
  const need = getNeedById(selectedNeed)
  const needBenchmarks = need?.benchmarks || []
  const needLabel = need?.benchmarkLabel || ''
  const prevAov = useRef(aov)
  const prevCohort = useRef(cohortSize)

  useEffect(() => {
    if (selectedModel === 'roas' && (prevAov.current !== aov || prevCohort.current !== cohortSize)) {
      prevAov.current = aov
      prevCohort.current = cohortSize
      setConversionRate(m.breakevenRate)
    }
  }, [aov, cohortSize, selectedModel, m.breakevenRate, setConversionRate])

  if (needBenchmarks.length > 0 && (selectedModel === 'cpm' || selectedModel === 'cpa')) {
    const gv = selectedModel === 'cpm' ? m.effectiveCPM : m.costPerQualifiedLead
    const subline = selectedModel === 'cpm'
      ? `${m.estimatedImpressions.toLocaleString()} touchpoints from ${fmt(m.totalInitial)}`
      : `${m.cohortSize.toLocaleString()} qualified golfers who engaged and matched your criteria`
    return (
      <div>
        <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-2">{needLabel}</p>
        <p className="text-5xl font-mono font-bold text-[#00ff9d] mb-1">${gv < 1 ? gv.toFixed(2) : Math.round(gv)}</p>
        <p className="text-sm text-[#6b7280] mb-6">{subline}</p>
        <BenchmarkRow label="GolfN (100% verified golfers)" value={gv} golfnValue={gv} isSelf />
        {needBenchmarks.map(b => <BenchmarkRow key={b.label} label={b.label} value={b.value} golfnValue={gv} />)}
      </div>
    )
  }

  if (selectedModel === 'cpm') {
    const gv = m.effectiveCPM
    return (
      <div>
        <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-2">Your Effective CPM</p>
        <p className="text-5xl font-mono font-bold text-[#00ff9d] mb-1">${gv < 1 ? gv.toFixed(2) : Math.round(gv)}</p>
        <p className="text-sm text-[#6b7280] mb-6">{m.estimatedImpressions.toLocaleString()} touchpoints to verified golfers from {fmt(m.totalInitial)}</p>
        <p className="text-xs font-mono text-[#4b5563] uppercase tracking-wider mb-2 mt-4">Verified Golfer Audiences</p>
        <BenchmarkRow label="GolfN (100% verified golfers)" value={gv} golfnValue={gv} isSelf />
        <BenchmarkRow label="Golf Digest / Endemic Media" value={65} golfnValue={gv} sublabel="Sponsorships, native, email to verified subscribers" />
        <p className="text-xs font-mono text-[#4b5563] uppercase tracking-wider mb-2 mt-6">Inferred Golf Interest (Unverified)</p>
        <BenchmarkRow label="Meta Golf Audiences" value={22} golfnValue={gv} sublabel='Algorithmic -- "interested in golf"' />
        <BenchmarkRow label="Google Display Golf" value={35} golfnValue={gv} sublabel="Affinity + keyword targeting" />
        <p className="text-[11px] text-[#4b5563] mt-6 italic">US golf-targeted audiences, 2025-26 benchmarks. GolfN and Golf Digest reach verified golfers. Meta and Google reach inferred interest.</p>
      </div>
    )
  }

  if (selectedModel === 'cpa') {
    const gv = m.costPerQualifiedLead
    return (
      <div>
        <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-2">Cost Per Qualified Lead</p>
        <p className="text-5xl font-mono font-bold text-[#00ff9d] mb-1">{fmt(gv)}</p>
        <p className="text-sm text-[#6b7280] mb-6">{m.cohortSize.toLocaleString()} qualified golfers who engaged and matched your criteria</p>
        <p className="text-xs font-mono text-[#4b5563] uppercase tracking-wider mb-2 mt-4">Verified Golfer Audiences</p>
        <BenchmarkRow label="GolfN (behavioral qualification)" value={gv} golfnValue={gv} isSelf />
        <BenchmarkRow label="Endemic Sponsorship / Email" value={85} golfnValue={gv} sublabel="Golf Digest, PGA Tour partners, golf media" />
        <p className="text-xs font-mono text-[#4b5563] uppercase tracking-wider mb-2 mt-6">Inferred Golf Interest (Unverified)</p>
        <BenchmarkRow label="Meta Lead Gen Golf" value={28} golfnValue={gv} sublabel="Form fills from interest-based audiences" />
        <BenchmarkRow label="Google Ads Golf (optimized)" value={12} golfnValue={gv} sublabel="Best-case lower-funnel campaigns" />
        <p className="text-[11px] text-[#4b5563] mt-6 italic">US golf-targeted audiences, 2025-26 benchmarks. GolfN leads are qualified by behavior, not a form fill.</p>
      </div>
    )
  }

  if (selectedModel === 'roas') {
    const isAtBreakeven = Math.abs(conversionRate - m.breakevenRate) < 0.05
    const isAboveBreakeven = conversionRate > m.breakevenRate + 0.05
    return (
      <div>
        <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-2">Projected First-Year ROAS</p>
        <div className="flex items-baseline gap-3 mb-1">
          <p className="text-5xl font-mono font-bold text-[#00ff9d]">{m.projectedROAS}:1</p>
          {isAtBreakeven && <span className="text-sm font-mono text-[#f59e0b] bg-[#f59e0b]/10 px-2 py-0.5 rounded-full">breakeven</span>}
          {isAboveBreakeven && <span className="text-sm font-mono text-[#00ff9d] bg-[#00ff9d]/10 px-2 py-0.5 rounded-full">above breakeven</span>}
        </div>
        <p className="text-sm text-[#6b7280] mb-6">{m.cohortSize.toLocaleString()} qualified golfers at {conversionRate}% conversion</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-mono text-[#6b7280] uppercase tracking-wider mb-2">Your Average Order Value</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280] font-mono">$</span>
              <input type="number" min={10} max={5000} value={aov} onChange={(e) => setAov(Math.max(10, Math.min(5000, Number(e.target.value) || 10)))} className="w-full bg-[#0f1217] border border-[#2a3347] rounded-lg pl-7 pr-4 py-3 text-lg font-mono font-bold text-[#00ff9d] focus:border-[#00ff9d]/60 focus:outline-none transition-colors" />
            </div>
            <p className="text-[11px] text-[#4b5563] mt-1">GolfN platform avg: $493</p>
          </div>
          <div>
            <label className="block text-xs font-mono text-[#6b7280] uppercase tracking-wider mb-2">Conversion Rate</label>
            <div className="relative">
              <input type="number" min={0.1} max={20} step={0.1} value={conversionRate} onChange={(e) => setConversionRate(Math.max(0.1, Math.min(20, Number(e.target.value) || 0.1)))} className="w-full bg-[#0f1217] border border-[#2a3347] rounded-lg pl-4 pr-8 py-3 text-lg font-mono font-bold text-[#00ff9d] focus:border-[#00ff9d]/60 focus:outline-none transition-colors" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b7280] font-mono">%</span>
            </div>
            <p className="text-[11px] text-[#4b5563] mt-1">Breakeven: {m.breakevenRate}%</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {ratePresets.map((preset) => {
            const effectiveRate = preset.isBreakeven ? m.breakevenRate : preset.rate
            const isActive = Math.abs(conversionRate - effectiveRate) < 0.05
            return (
              <button key={preset.label} onClick={() => setConversionRate(effectiveRate)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  isActive ? 'bg-[#00ff9d] text-[#0f1217] font-bold'
                    : preset.highlighted ? 'bg-[#00ff9d]/15 text-[#00ff9d] border border-[#00ff9d]/30 hover:bg-[#00ff9d]/25'
                    : 'bg-[#0f1217] text-[#6b7280] border border-[#2a3347] hover:border-[#00ff9d]/30 hover:text-[#9ca3af]'
                }`}>
                {preset.isBreakeven ? `${m.breakevenRate}%` : `${preset.rate}%`} <span className="text-[10px] opacity-70">{preset.label}</span>
              </button>
            )
          })}
        </div>
        <div className={`rounded-lg p-4 mb-6 ${isAtBreakeven ? 'bg-[#f59e0b]/5 border border-[#f59e0b]/20' : 'bg-[#001a14]/40 border border-[#00ff9d]/10'}`}>
          <p className={`text-sm ${isAtBreakeven ? 'text-[#f59e0b]' : 'text-[#9ca3af]'}`}>
            {isAtBreakeven
              ? `We only need ${m.breakevenRate}% of the cohort to convert at ${fmt(aov)} to break even on ${fmt(m.totalInitial)}. That is ${Math.round(m.cohortSize * m.breakevenRate / 100)} customers. Tap a preset above to see the upside.`
              : `Breakeven floor: ${m.breakevenRate}% (${Math.round(m.cohortSize * m.breakevenRate / 100)} customers). You are modeling ${conversionRate}% which projects ${fmt(m.projectedRevenue)} in revenue.`
            }
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-[#0f1217] rounded-xl p-4 text-center"><p className="text-xs font-mono text-[#4b5563] uppercase mb-1">Invested</p><p className="text-xl font-mono font-bold text-white">{fmt(m.totalInitial)}</p></div>
          <div className={`bg-[#0f1217] rounded-xl p-4 text-center border ${isAboveBreakeven ? 'border-[#00ff9d]/40' : 'border-[#2a3347]/50'}`}>
            <p className="text-xs font-mono text-[#4b5563] uppercase mb-1">Projected Rev</p>
            <p className={`text-xl font-mono font-bold ${isAboveBreakeven ? 'text-[#00ff9d]' : isAtBreakeven ? 'text-[#f59e0b]' : 'text-white'}`}>{fmt(m.projectedRevenue)}</p>
          </div>
          <div className="bg-[#0f1217] rounded-xl p-4 text-center"><p className="text-xs font-mono text-[#4b5563] uppercase mb-1">Customers</p><p className="text-xl font-mono font-bold text-white">{Math.round(m.cohortSize * (conversionRate / 100))}</p></div>
        </div>
        <div className="bg-[#0f1217] rounded-lg p-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-[#9ca3af]">Math</span>
            <span className="text-[#6b7280] font-mono">{m.cohortSize.toLocaleString()} x {conversionRate}% x {fmt(aov)} = {fmt(m.projectedRevenue)}</span>
          </div>
        </div>
        <p className="text-[11px] text-[#4b5563] mt-6 italic">Year-1 breakeven only. Real GolfN campaigns see 2-4x+ from repeat purchases, referrals, and compounding (see L.A.B. case).</p>
      </div>
    )
  }

  const costPerOwned = m.totalInitial / m.cohortSize
  return (
    <div>
      <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-2">Cost Per Owned Golfer</p>
      <p className="text-5xl font-mono font-bold text-[#00ff9d] mb-1">{fmt(costPerOwned)}<span className="text-xl text-[#6b7280]">/golfer</span></p>
      <p className="text-sm text-[#6b7280] mb-2">First-party. Behavioral. Yours to reactivate.</p>
      <p className="text-sm text-[#9ca3af] mb-6">Typical first-party golfer acquisition cost on Meta/Google: <span className="text-white font-semibold">$8-25+</span></p>
      <div className="space-y-2">
        <p className="text-xs font-mono text-[#4b5563] uppercase tracking-wider mb-1">What you get per golfer</p>
        {['Equipment profile: what they play, when they last upgraded', 'Behavioral data: rounds/month, walk vs ride, spend per round', 'Engagement history: what content and offers drive action', 'Purchase intent: marketplace browsing, offer saves, click-throughs', 'Reactivation path: seasonal re-engagement, AI lookalike expansion'].map(item => (
          <div key={item} className="flex items-start gap-2 py-1.5">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-1 shrink-0"><path d="M3 8l3.5 3.5L13 5" stroke="#00ff9d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="text-sm text-[#d1d5db]">{item}</span>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-[#4b5563] mt-6 italic">This audience compounds. New qualified users auto-enroll via lookalike modeling at no additional acquisition cost.</p>
    </div>
  )
}

export function EvaluateAndInvest() {
  const { model, setModel, cohortSize, setCohortSize } = useSpendModel()
  const { selectedNeed } = useBusinessNeed()
  const need = getNeedById(selectedNeed)
  const suggestedModel = need?.suggestedSpendModel || null
  const m = useSpendMetrics()
  const [showOngoing, setShowOngoing] = useState(false)

  return (
    <section id="evaluate" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-3">Evaluate</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-4">
            How should we measure<br /><span className="text-[#00ff9d]">success together?</span>
          </h2>
          <p className="text-lg text-[#9ca3af] max-w-2xl mb-10">
            {need
              ? `You want to ${need.title.toLowerCase()}. Pick how your team evaluates spend and we will show you exactly what this investment looks like in your terms.`
              : 'Pick the lens your team uses internally. Every number below will translate into your language.'
            }
          </p>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {models.map((mid, i) => {
            const Icon = mid.icon
            const isSelected = model === mid.id
            const isSuggested = suggestedModel === mid.id && !model
            return (
              <Fade key={mid.id} delay={i * 0.05}>
                <button onClick={() => setModel(mid.id)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 group relative ${
                    isSelected ? 'bg-[#001a14] border-[#00ff9d]/60 shadow-[0_0_30px_rgba(0,255,157,0.1)]'
                      : isSuggested ? 'bg-[#1a1f2e] border-[#00ff9d]/30'
                      : 'bg-[#1a1f2e] border-[#2a3347] hover:border-[#00ff9d]/30'
                  }`}>
                  {isSuggested && (
                    <div className="absolute -top-2.5 left-4 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00ff9d] text-[#0f1217]">
                      <Star className="w-3 h-3" /><span className="text-[10px] font-bold uppercase tracking-wider">Suggested</span>
                    </div>
                  )}
                  <Icon className={`w-6 h-6 mb-3 transition-colors ${isSelected ? 'text-[#00ff9d]' : 'text-[#6b7280] group-hover:text-[#00ff9d]'}`} />
                  <p className={`text-xl font-bold mb-1 transition-colors ${isSelected ? 'text-[#00ff9d]' : 'text-white'}`}>{mid.label}</p>
                  <p className="text-sm text-[#9ca3af]">{mid.subtitle}</p>
                  {isSelected && <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="mt-3 flex items-center gap-1 text-sm font-mono text-[#00ff9d]">Selected <ChevronRight className="w-3 h-3" /></motion.div>}
                </button>
              </Fade>
            )
          })}
        </div>

        <AnimatePresence>
          {model && (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, ease: 'easeOut' }}>
              <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-8 max-w-2xl mb-10">
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
                  style={{ background: `linear-gradient(to right, #00ff9d 0%, #00ff9d ${((cohortSize - 500) / 9500) * 100}%, #2a3347 ${((cohortSize - 500) / 9500) * 100}%, #2a3347 100%)` }} />
                <div className="flex justify-between mt-2 text-xs font-mono text-[#4b5563]"><span>500</span><span>10,000</span></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
                <div className="lg:col-span-2 bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-8 md:p-10">
                  <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-8">Your Commitment</p>
                  <div className="flex justify-between items-center py-4 border-b border-[#2a3347]/50">
                    <div><span className="text-lg text-white font-medium">Prize budget</span><p className="text-sm text-[#6b7280]">Product you provide</p></div>
                    <span className="text-xl font-mono font-bold text-white">~{fmt(m.prizeValue)}</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-[#2a3347]/50">
                    <div><span className="text-lg text-white font-medium">Startup fee</span><p className="text-sm text-[#6b7280]">Campaign + 30 days</p></div>
                    <span className="text-xl font-mono font-bold text-white">{fmt(m.startupFee)}</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-xl font-bold text-white">Total to launch</span>
                    <span className="text-3xl font-mono font-bold text-[#00ff9d]">{fmt(m.totalInitial)}</span>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#2a3347]/30">
                    <button onClick={() => setShowOngoing(!showOngoing)} className="flex items-center gap-2 text-sm text-[#4b5563] hover:text-[#6b7280] transition-colors">
                      {showOngoing ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />} Ongoing options (after pilot)
                    </button>
                    <AnimatePresence>{showOngoing && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                        <div className="mt-4 bg-[#0f1217]/50 rounded-lg p-4">
                          <div className="flex justify-between items-center"><span className="text-sm text-[#9ca3af]">Per qualified user/month</span><span className="text-sm font-mono text-[#6b7280]">$5 (tiers to $1)</span></div>
                          <p className="text-xs text-[#4b5563] mt-2">Only if you continue after the initial activation.</p>
                        </div>
                      </motion.div>
                    )}</AnimatePresence>
                  </div>
                </div>
                <div className="lg:col-span-3 bg-[#1a1f2e] border border-[#00ff9d]/20 rounded-2xl p-8 md:p-10">
                  <p className="text-xs font-mono text-[#4b5563] uppercase tracking-wider mb-6">In Your Terms</p>
                  <ModelBenchmarks selectedModel={model} />
                </div>
              </div>

              <CombinedValue excludeModel={model} />

              <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-8 md:p-10">
                <p className="text-lg md:text-xl text-[#d1d5db] leading-9">
                  {'You are in for some product and '}<span className="text-white font-semibold">{fmt(m.startupFee)}</span>
                  {'. We have 60 days to show a '}<span className="text-[#00ff9d] font-bold">meaningful return</span>
                  {'. If the results are not there, we will be the first to tell you.'}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
