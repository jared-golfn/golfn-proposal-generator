'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, ChevronDown, ChevronUp } from 'lucide-react'
import { useSpendModel, useSpendMetrics } from '@/lib/spend-model-context'
import { Fade } from './Fade'

function fmt(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

function BenchmarkBar({ label, value, maxValue, isSelf }: { label: string; value: number; maxValue: number; isSelf?: boolean }) {
  const pct = Math.min((value / maxValue) * 100, 100)
  return (
    <div className="flex items-center gap-4">
      <span className={`text-sm w-36 shrink-0 ${isSelf ? 'text-[#00ff9d] font-bold' : 'text-[#9ca3af]'}`}>{label}</span>
      <div className="flex-1 h-3 rounded-full bg-[#0f1217] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`h-full rounded-full ${isSelf ? 'bg-[#00ff9d]' : 'bg-[#2a3347]'}`}
        />
      </div>
      <span className={`text-sm font-mono w-16 text-right shrink-0 ${isSelf ? 'text-[#00ff9d] font-bold' : 'text-[#6b7280]'}`}>
        ${value < 1 ? value.toFixed(2) : Math.round(value)}
      </span>
    </div>
  )
}

function CPMView() {
  const m = useSpendMetrics()
  const benchmarks = [
    { label: 'GolfN (effective)', value: m.effectiveCPM, isSelf: true },
    { label: 'Meta Golf Interest', value: 22 },
    { label: 'Google Display Golf', value: 35 },
    { label: 'Golf Digest / Endemic', value: 65 },
  ]
  const maxVal = Math.max(...benchmarks.map(b => b.value)) * 1.1

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-1">Your Effective CPM</p>
        <p className="text-5xl font-mono font-bold text-[#00ff9d]">${m.effectiveCPM < 1 ? m.effectiveCPM.toFixed(2) : Math.round(m.effectiveCPM)}</p>
        <p className="text-base text-[#9ca3af] mt-2">{m.estimatedImpressions.toLocaleString()} estimated touchpoints from {fmt(m.totalInitial)} investment</p>
      </div>
      <div className="space-y-3">
        <p className="text-sm font-semibold text-white mb-2">vs. Industry Benchmarks (CPM)</p>
        {benchmarks.map(b => <BenchmarkBar key={b.label} label={b.label} value={b.value} maxValue={maxVal} isSelf={b.isSelf} />)}
      </div>
      <p className="text-sm text-[#6b7280] italic">GolfN impressions are verified golfers in a golf-native environment. Not modeled interest audiences.</p>
    </div>
  )
}

function CPAView() {
  const m = useSpendMetrics()
  const benchmarks = [
    { label: 'GolfN (qualified)', value: m.costPerQualifiedLead, isSelf: true },
    { label: 'Meta Lead Gen Golf', value: 28 },
    { label: 'Google Ads Golf', value: 12 },
    { label: 'Endemic Sponsorship', value: 85 },
  ]
  const maxVal = Math.max(...benchmarks.map(b => b.value)) * 1.1

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-1">Cost Per Qualified Lead</p>
        <p className="text-5xl font-mono font-bold text-[#00ff9d]">{fmt(m.costPerQualifiedLead)}</p>
        <p className="text-base text-[#9ca3af] mt-2">{m.cohortSize.toLocaleString()} qualified golfers who opted in, engaged, and matched your criteria</p>
      </div>
      <div className="space-y-3">
        <p className="text-sm font-semibold text-white mb-2">vs. Industry Benchmarks (CPA/CPL)</p>
        {benchmarks.map(b => <BenchmarkBar key={b.label} label={b.label} value={b.value} maxValue={maxVal} isSelf={b.isSelf} />)}
      </div>
      <p className="text-sm text-[#6b7280] italic">GolfN leads are qualified by behavior, not a form fill. They entered a sweepstakes, engaged with your brand, and opted in.</p>
    </div>
  )
}

function ROASView() {
  const m = useSpendMetrics()
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-1">Projected First-Year ROAS</p>
        <p className="text-5xl font-mono font-bold text-[#00ff9d]">{m.projectedROAS}:1</p>
        <p className="text-base text-[#9ca3af] mt-2">Based on {fmt(m.avgAOV)} AOV, 3% conversion of qualified cohort, {fmt(m.totalInitial)} total investment</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#0f1217] rounded-lg p-4 text-center">
          <p className="text-sm text-[#6b7280] mb-1">Investment</p>
          <p className="text-xl font-mono font-bold text-white">{fmt(m.totalInitial)}</p>
        </div>
        <div className="bg-[#0f1217] rounded-lg p-4 text-center">
          <p className="text-sm text-[#6b7280] mb-1">Projected Revenue</p>
          <p className="text-xl font-mono font-bold text-[#00ff9d]">{fmt(m.projectedRevenue)}</p>
        </div>
        <div className="bg-[#0f1217] rounded-lg p-4 text-center">
          <p className="text-sm text-[#6b7280] mb-1">Qualified Cohort</p>
          <p className="text-xl font-mono font-bold text-white">{m.cohortSize.toLocaleString()}</p>
        </div>
      </div>
      <p className="text-sm text-[#6b7280] italic">Conservative estimate. Does not include repeat purchases, referrals, or ongoing cohort expansion value.</p>
    </div>
  )
}

function AudienceView() {
  const m = useSpendMetrics()
  const costPerOwned = m.totalInitial / m.cohortSize
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-1">Cost to Own This Audience</p>
        <p className="text-5xl font-mono font-bold text-[#00ff9d]">{fmt(costPerOwned)}<span className="text-xl text-[#6b7280]">/golfer</span></p>
        <p className="text-base text-[#9ca3af] mt-2">First-party data. Behavioral profiles. Equipment preferences. No cookies. No intermediary.</p>
      </div>
      <div className="bg-[#0f1217] rounded-lg p-6 space-y-4">
        <p className="text-sm font-semibold text-white">What you own for each golfer in the cohort:</p>
        {['Equipment profile (what they play, when they last upgraded)', 'Behavioral data (rounds/month, walk vs ride, climate)', 'Engagement history (what content they interact with)', 'Purchase intent signals (marketplace browsing, offer saves)', 'Reactivation path (seasonal re-engagement, AI lookalike expansion)'].map(item => (
          <div key={item} className="flex items-start gap-2">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-1 shrink-0"><path d="M3 8l3.5 3.5L13 5" stroke="#00ff9d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="text-sm text-[#d1d5db]">{item}</span>
          </div>
        ))}
      </div>
      <p className="text-sm text-[#6b7280] italic">This audience compounds. Every month the cohort grows with newly qualified users at no additional acquisition cost.</p>
    </div>
  )
}

function DefaultView() {
  const m = useSpendMetrics()
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-[#0f1217] rounded-xl p-8 text-center">
          <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-3">Prize Budget</p>
          <p className="text-4xl font-mono font-bold text-[#00ff9d] mb-2">~{fmt(m.prizeValue)}</p>
          <p className="text-base text-[#9ca3af]">Product you provide for the sweepstakes</p>
        </div>
        <div className="bg-[#0f1217] border-2 border-[#00ff9d]/40 rounded-xl p-8 text-center">
          <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-3">Startup Fee</p>
          <p className="text-4xl font-mono font-bold text-[#00ff9d] mb-2">{fmt(m.startupFee)}</p>
          <p className="text-base text-[#9ca3af]">One-time. Includes campaign + 30 days of activation.</p>
        </div>
        <div className="bg-[#0f1217] rounded-xl p-8 text-center">
          <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-3">Total to Start</p>
          <p className="text-4xl font-mono font-bold text-white mb-2">{fmt(m.totalInitial)}</p>
          <p className="text-base text-[#9ca3af]">Product + startup fee. That is the full commitment.</p>
        </div>
      </div>
    </div>
  )
}

export function DynamicInvestment() {
  const { model } = useSpendModel()
  const m = useSpendMetrics()
  const [showOngoing, setShowOngoing] = useState(false)

  return (
    <section id="ways-to-work" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-5 h-5 text-[#00ff9d]" />
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">Investment</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-10">
            What it takes<br /><span className="text-[#00ff9d]">to get started</span>
          </h2>
        </Fade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left: core investment (always shown) */}
          <Fade delay={0.05}>
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-8">
              <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-6">Your Investment</p>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-[#2a3347]">
                  <span className="text-lg text-[#d1d5db]">Prize budget (product you provide)</span>
                  <span className="text-lg font-mono font-bold text-white">~{fmt(m.prizeValue)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#2a3347]">
                  <span className="text-lg text-[#d1d5db]">Startup fee (one-time)</span>
                  <span className="text-lg font-mono font-bold text-white">{fmt(m.startupFee)}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-xl font-bold text-white">Total to launch</span>
                  <span className="text-2xl font-mono font-bold text-[#00ff9d]">{fmt(m.totalInitial)}</span>
                </div>
              </div>

              {/* Ongoing - collapsed by default */}
              <button
                onClick={() => setShowOngoing(!showOngoing)}
                className="flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#9ca3af] transition-colors"
              >
                {showOngoing ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                Ongoing options (optional, discussed after pilot)
              </button>
              <AnimatePresence>
                {showOngoing && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                    <div className="mt-4 pt-4 border-t border-[#2a3347]/50">
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-[#9ca3af]">Per qualified user/month</span>
                        <span className="text-sm font-mono text-[#6b7280]">$5 (tiers to $1 at scale)</span>
                      </div>
                      <p className="text-xs text-[#4b5563] mt-2">Only applies if you continue after the initial 30-day activation. Full rate tables in detailed proposal.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Fade>

          {/* Right: model-specific framing */}
          <Fade delay={0.1}>
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-8">
              <p className="text-sm font-mono tracking-wider uppercase text-[#6b7280] mb-6">
                {model === 'cpm' ? 'In Your Terms: CPM' : model === 'cpa' ? 'In Your Terms: CPA' : model === 'roas' ? 'In Your Terms: ROAS' : model === 'audience' ? 'In Your Terms: Audience Value' : 'The Numbers'}
              </p>
              {model === 'cpm' && <CPMView />}
              {model === 'cpa' && <CPAView />}
              {model === 'roas' && <ROASView />}
              {model === 'audience' && <AudienceView />}
              {!model && <DefaultView />}
            </div>
          </Fade>
        </div>

        <Fade delay={0.2}>
          <div className="bg-[#001a14]/60 border border-[#00ff9d]/30 rounded-xl p-8 md:p-10">
            <p className="text-lg md:text-xl text-[#d1d5db] leading-9">{'You are in for some product and '}<span className="text-white font-semibold">{fmt(m.startupFee)}</span>{'. '}{"It is on us to show a "}<span className="text-[#00ff9d] font-bold">meaningful return within 60 days</span>{'. '}{"If the results are not there, we will be the first to tell you."}</p>
          </div>
        </Fade>
      </div>
    </section>
  )
}
