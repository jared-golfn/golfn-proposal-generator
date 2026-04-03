'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart3, Target, TrendingUp, Users, ChevronRight, Star, ChevronDown, ChevronUp } from 'lucide-react'
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

function ModelBenchmarks({ selectedModel }: { selectedModel: 'cpm' | 'cpa' | 'roas' | 'audience' }) {
  const m = useSpendMetrics()
  const { selectedNeed } = useBusinessNeed()
  const need = getNeedById(selectedNeed)
  const needBenchmarks = need?.benchmarks || []
  const needLabel = need?.benchmarkLabel || ''

  // If a business need is selected, use its custom benchmarks
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

        {/* Tier 1: Verified golfer audiences -- the real comparison */}
        <p className="text-xs font-mono text-[#4b5563] uppercase tracking-wider mb-2 mt-4">Verified Golfer Audiences</p>
        <BenchmarkRow label="GolfN (100% verified golfers)" value={gv} golfnValue={gv} isSelf />
        <BenchmarkRow label="Golf Digest / Endemic Media" value={65} golfnValue={gv} sublabel="Sponsorships, native, email to verified subscribers" />

        {/* Tier 2: Inferred interest -- secondary */}
        <p className="text-xs font-mono text-[#4b5563] uppercase tracking-wider mb-2 mt-6">Inferred Golf Interest (Unverified)</p>
        <BenchmarkRow label="Meta Golf Audiences" value={22} golfnValue={gv} sublabel="Algorithmic -- &quot;interested in golf&quot;" />
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

        {/* Tier 1: Verified golfer sources */}
        <p className="text-xs font-mono text-[#4b5563] uppercase tracking-wider mb-2 mt-4">Verified Golfer Audiences</p>
        <BenchmarkRow label="GolfN (behavioral qualification)" value={gv} golfnValue={gv} isSelf />
        <BenchmarkRow label="Endemic Sponsorship / Email" value={85} golfnValue={gv} sublabel="Golf Digest, PGA Tour partners, golf media" />

        {/* Tier 2: Inferred interest */}
        <p className="text-xs font-mono text-[#4b5563] uppercase tracking-wider mb-2 mt-6">Inferred Golf Interest (Unverified)</p>
        <BenchmarkRow label="Meta Lead Gen Golf" value={28} golfnValue={gv} sublabel="Form fills from interest-based audiences" />
        <BenchmarkRow label="Google Ads Golf (optimized)" value={12} golfnValue={gv} sublabel="Best-case lower-funnel campaigns" />

        <p className="text-[11px] text-[#4b5563] mt-6 italic">US golf-targeted audiences, 2025-26 benchmarks. GolfN leads are qualified by behavior inside a golf-native environment, not a form fill.</p>
      </div>
    )
  }

  if (selectedModel === 'roas') {
    return (
      <div>
        <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-2">Projected First-Year ROAS</p>
        <p className="text-5xl font-mono font-bold text-[#00ff9d] mb-1">{m.projectedROAS}:1</p>
        <p className="text-sm text-[#6b7280] mb-6">{fmt(m.avgAOV)} AOV, 3% conversion of qualified cohort</p>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-[#0f1217] rounded-xl p-4 text-center"><p className="text-xs font-mono text-[#4b5563] uppercase mb-1">Invested</p><p className="text-xl font-mono font-bold text-white">{fmt(m.totalInitial)}</p></div>
          <div className="bg-[#0f1217] rounded-xl p-4 text-center border border-[#00ff9d]/20"><p className="text-xs font-mono text-[#4b5563] uppercase mb-1">Projected Rev</p><p className="text-xl font-mono font-bold text-[#00ff9d]">{fmt(m.projectedRevenue)}</p></div>
          <div className="bg-[#0f1217] rounded-xl p-4 text-center"><p className="text-xs font-mono text-[#4b5563] uppercase mb-1">Cohort</p><p className="text-xl font-mono font-bold text-white">{m.cohortSize.toLocaleString()}</p></div>
        </div>
        <p className="text-[11px] text-[#4b5563] mt-6 italic">Conservative. Does not include repeat purchases, referrals, cohort expansion, or compounding effects beyond year 1.</p>
      </div>
    )
  }

  // audience
  const costPerOwned = m.totalInitial / m.cohortSize
  return (
    <div>
      <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-2">{needLabel || 'Cost Per Owned Golfer'}</p>
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

  function handleSelect(mid: SpendModel) {
    setModel(mid)
  }

  return (
    <section id="evaluate" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
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

        {/* Model selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {models.map((mid, i) => {
            const Icon = mid.icon
            const isSelected = model === mid.id
            const isSuggested = suggestedModel === mid.id && !model
            return (
              <Fade key={mid.id} delay={i * 0.05}>
                <button
                  onClick={() => handleSelect(mid.id)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 group relative ${
                    isSelected
                      ? 'bg-[#001a14] border-[#00ff9d]/60 shadow-[0_0_30px_rgba(0,255,157,0.1)]'
                      : isSuggested
                      ? 'bg-[#1a1f2e] border-[#00ff9d]/30'
                      : 'bg-[#1a1f2e] border-[#2a3347] hover:border-[#00ff9d]/30'
                  }`}
                >
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

        {/* Everything below animates in when a model is selected */}
        <AnimatePresence>
          {model && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {/* Cohort slider */}
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
                  style={{ background: `linear-gradient(to right, #00ff9d 0%, #00ff9d ${((cohortSize - 500) / 9500) * 100}%, #2a3347 ${((cohortSize - 500) / 9500) * 100}%, #2a3347 100%)` }}
                />
                <div className="flex justify-between mt-2 text-xs font-mono text-[#4b5563]"><span>500</span><span>10,000</span></div>
              </div>

              {/* Investment + benchmarks side by side */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
                {/* Left: your commitment */}
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

                {/* Right: in your terms */}
                <div className="lg:col-span-3 bg-[#1a1f2e] border border-[#00ff9d]/20 rounded-2xl p-8 md:p-10">
                  <p className="text-xs font-mono text-[#4b5563] uppercase tracking-wider mb-6">In Your Terms</p>
                  <ModelBenchmarks selectedModel={model} />
                </div>
              </div>

              {/* Accountability */}
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
