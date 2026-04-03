'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, ChevronDown, ChevronUp, TrendingUp, BarChart3, Users as UsersIcon } from 'lucide-react'
import { useSpendModel, useSpendMetrics } from '@/lib/spend-model-context'
import { useBusinessNeed } from '@/lib/business-need-context'
import { getNeedById } from '@/lib/business-needs'
import { Fade } from './Fade'

function fmt(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

function BenchmarkRow({ label, value, golfnValue, isSelf }: { label: string; value: number; golfnValue: number; isSelf?: boolean }) {
  const savings = isSelf ? null : Math.round(((value - golfnValue) / value) * 100)
  return (
    <div className={`flex items-center justify-between py-3 ${isSelf ? '' : 'border-b border-[#2a3347]/30'}`}>
      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${isSelf ? 'bg-[#00ff9d]' : 'bg-[#2a3347]'}`} />
        <span className={`text-base ${isSelf ? 'text-[#00ff9d] font-bold' : 'text-[#9ca3af]'}`}>{label}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className={`text-lg font-mono font-bold ${isSelf ? 'text-[#00ff9d]' : 'text-[#6b7280]'}`}>
          ${value < 1 ? value.toFixed(2) : Math.round(value)}
        </span>
        {savings !== null && savings > 0 && (
          <span className="text-xs font-mono bg-[#00ff9d]/10 text-[#00ff9d] px-2 py-0.5 rounded-full">{savings}% less</span>
        )}
      </div>
    </div>
  )
}

function ModelView({ model }: { model: 'cpm' | 'cpa' | 'roas' | 'audience' }) {
  const m = useSpendMetrics()
  const { selectedNeed } = useBusinessNeed()
  const need = getNeedById(selectedNeed)
  const needBenchmarks = need?.benchmarks || []
  const needLabel = need?.benchmarkLabel || ''

  // Default benchmarks per model
  const defaultBenchmarks: Record<string, { label: string; items: { label: string; value: number }[] }> = {
    cpm: { label: 'Your Effective CPM', items: [{ label: 'Meta Golf Audiences', value: 22 }, { label: 'Google Display Golf', value: 35 }, { label: 'Golf Digest / Endemic', value: 65 }] },
    cpa: { label: 'Cost Per Qualified Lead', items: [{ label: 'Meta Lead Gen Golf', value: 28 }, { label: 'Google Ads Golf', value: 12 }, { label: 'Endemic Sponsorship', value: 85 }] },
    roas: { label: 'Projected First-Year ROAS', items: [] },
    audience: { label: 'Cost Per Owned Golfer', items: [] },
  }

  const benchmarkConfig = defaultBenchmarks[model]
  const benchmarkItems = needBenchmarks.length > 0 ? needBenchmarks : benchmarkConfig.items
  const benchmarkTitle = needLabel || benchmarkConfig.label

  if (model === 'cpm') {
    const gv = m.effectiveCPM
    return (
      <div>
        <div className="flex items-center gap-3 mb-2"><BarChart3 className="w-5 h-5 text-[#00ff9d]" /><p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider">{benchmarkTitle}</p></div>
        <p className="text-5xl font-mono font-bold text-[#00ff9d] mb-1">${gv < 1 ? gv.toFixed(2) : Math.round(gv)}</p>
        <p className="text-sm text-[#6b7280] mb-8">{m.estimatedImpressions.toLocaleString()} touchpoints from {fmt(m.totalInitial)}</p>
        <BenchmarkRow label="GolfN (verified golfers)" value={gv} golfnValue={gv} isSelf />
        {benchmarkItems.map(b => <BenchmarkRow key={b.label} label={b.label} value={b.value} golfnValue={gv} />)}
        <p className="text-xs text-[#4b5563] mt-6 italic">GolfN impressions reach verified golfers in a golf-native environment.</p>
      </div>
    )
  }

  if (model === 'cpa') {
    const gv = m.costPerQualifiedLead
    return (
      <div>
        <div className="flex items-center gap-3 mb-2"><Target className="w-5 h-5 text-[#00ff9d]" /><p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider">{benchmarkTitle}</p></div>
        <p className="text-5xl font-mono font-bold text-[#00ff9d] mb-1">{fmt(gv)}</p>
        <p className="text-sm text-[#6b7280] mb-8">{m.cohortSize.toLocaleString()} qualified golfers who engaged and matched your criteria</p>
        <BenchmarkRow label="GolfN (behavioral)" value={gv} golfnValue={gv} isSelf />
        {benchmarkItems.map(b => <BenchmarkRow key={b.label} label={b.label} value={b.value} golfnValue={gv} />)}
        <p className="text-xs text-[#4b5563] mt-6 italic">GolfN leads are qualified by behavior, not a form fill.</p>
      </div>
    )
  }

  if (model === 'roas') {
    return (
      <div>
        <div className="flex items-center gap-3 mb-2"><TrendingUp className="w-5 h-5 text-[#00ff9d]" /><p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider">Projected First-Year ROAS</p></div>
        <p className="text-5xl font-mono font-bold text-[#00ff9d] mb-1">{m.projectedROAS}:1</p>
        <p className="text-sm text-[#6b7280] mb-8">{fmt(m.avgAOV)} AOV, 3% conversion of qualified cohort</p>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-[#0f1217] rounded-xl p-5 text-center"><p className="text-xs font-mono text-[#4b5563] uppercase mb-2">Invested</p><p className="text-2xl font-mono font-bold text-white">{fmt(m.totalInitial)}</p></div>
          <div className="bg-[#0f1217] rounded-xl p-5 text-center border border-[#00ff9d]/20"><p className="text-xs font-mono text-[#4b5563] uppercase mb-2">Projected Rev</p><p className="text-2xl font-mono font-bold text-[#00ff9d]">{fmt(m.projectedRevenue)}</p></div>
          <div className="bg-[#0f1217] rounded-xl p-5 text-center"><p className="text-xs font-mono text-[#4b5563] uppercase mb-2">Cohort</p><p className="text-2xl font-mono font-bold text-white">{m.cohortSize.toLocaleString()}</p></div>
        </div>
        <p className="text-xs text-[#4b5563] mt-6 italic">Conservative. Does not include repeat purchases, referrals, or cohort expansion.</p>
      </div>
    )
  }

  // audience
  const costPerOwned = m.totalInitial / m.cohortSize
  return (
    <div>
      <div className="flex items-center gap-3 mb-2"><UsersIcon className="w-5 h-5 text-[#00ff9d]" /><p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider">{benchmarkTitle || 'Cost Per Owned Golfer'}</p></div>
      <p className="text-5xl font-mono font-bold text-[#00ff9d] mb-1">{fmt(costPerOwned)}<span className="text-xl text-[#6b7280]">/golfer</span></p>
      <p className="text-sm text-[#6b7280] mb-8">First-party. Behavioral. No intermediary. Yours to reactivate.</p>
      <div className="space-y-3">
        {['Equipment profile: what they play, when they last upgraded', 'Behavioral data: rounds/month, walk vs ride, climate', 'Engagement history: what content drives action', 'Purchase intent: marketplace browsing, offer saves', 'Reactivation path: seasonal re-engagement, AI expansion'].map(item => (
          <div key={item} className="flex items-start gap-3 py-2 border-b border-[#2a3347]/20">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-1 shrink-0"><path d="M3 8l3.5 3.5L13 5" stroke="#00ff9d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="text-sm text-[#d1d5db]">{item}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-[#4b5563] mt-6 italic">This audience compounds. New qualified users auto-enroll at no additional cost.</p>
    </div>
  )
}

export function DynamicInvestment() {
  const { model } = useSpendModel()
  const m = useSpendMetrics()
  const [showOngoing, setShowOngoing] = useState(false)
  const hasModel = model !== null

  return (
    <section id="ways-to-work" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-3">Investment</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-4">What it takes<br /><span className="text-[#00ff9d]">to get started</span></h2>
          <p className="text-lg text-[#9ca3af] max-w-2xl mb-12">{hasModel ? 'Here is the investment, translated into the metrics you actually use.' : 'Product for prizes and a startup fee. That is the full initial commitment.'}</p>
        </Fade>

        <div className={`grid grid-cols-1 ${hasModel ? 'lg:grid-cols-5' : 'lg:grid-cols-3'} gap-6 mb-8`}>
          <Fade delay={0.05}>
            <div className={`${hasModel ? 'lg:col-span-2' : 'lg:col-span-3'} bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden`}>
              <div className="p-8 md:p-10">
                <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-8">Your Commitment</p>
                <div className="flex justify-between items-center py-4 border-b border-[#2a3347]/50"><div><span className="text-lg text-white font-medium">Prize budget</span><p className="text-sm text-[#6b7280]">Product you provide for sweepstakes</p></div><span className="text-xl font-mono font-bold text-white">~{fmt(m.prizeValue)}</span></div>
                <div className="flex justify-between items-center py-4 border-b border-[#2a3347]/50"><div><span className="text-lg text-white font-medium">Startup fee</span><p className="text-sm text-[#6b7280]">Campaign build + 30 days activation</p></div><span className="text-xl font-mono font-bold text-white">{fmt(m.startupFee)}</span></div>
                <div className="flex justify-between items-center py-4"><span className="text-xl font-bold text-white">Total to launch</span><span className="text-3xl font-mono font-bold text-[#00ff9d]">{fmt(m.totalInitial)}</span></div>
                <div className="mt-6 pt-4 border-t border-[#2a3347]/30">
                  <button onClick={() => setShowOngoing(!showOngoing)} className="flex items-center gap-2 text-sm text-[#4b5563] hover:text-[#6b7280] transition-colors">
                    {showOngoing ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />} Ongoing options (discussed after pilot)
                  </button>
                  <AnimatePresence>{showOngoing && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden"><div className="mt-4 bg-[#0f1217]/50 rounded-lg p-4"><div className="flex justify-between items-center"><span className="text-sm text-[#9ca3af]">Per qualified user/month</span><span className="text-sm font-mono text-[#6b7280]">$5 (tiers to $1)</span></div><p className="text-xs text-[#4b5563] mt-2">Only if you continue after the initial activation.</p></div></motion.div>)}</AnimatePresence>
                </div>
              </div>
            </div>
          </Fade>
          {hasModel && (<Fade delay={0.1}><div className="lg:col-span-3 bg-[#1a1f2e] border border-[#00ff9d]/20 rounded-2xl p-8 md:p-10"><ModelView model={model!} /></div></Fade>)}
        </div>

        <Fade delay={0.15}>
          <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-8 md:p-10">
            <p className="text-lg md:text-xl text-[#d1d5db] leading-9">{'You are in for some product and '}<span className="text-white font-semibold">{fmt(m.startupFee)}</span>{'. We have 60 days to show a '}<span className="text-[#00ff9d] font-bold">meaningful return</span>{'. If the results are not there, we will be the first to tell you.'}</p>
          </div>
        </Fade>
      </div>
    </section>
  )
}
