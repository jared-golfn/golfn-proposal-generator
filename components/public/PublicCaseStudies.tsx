'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight, Eye, Target, Award, DollarSign, Users, Zap } from 'lucide-react'
import { publicCaseStudyTabs, forgedIronCaseStudy, majorOEMCaseStudy, recoveryBrandCaseStudy, type CaseStudyId } from '@/lib/public-case-studies'

function MetricGrid({ metrics, cols = 4 }: { metrics: { value: string; label: string; sub: string }[]; cols?: number }) {
  const gridCols = cols === 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2 md:grid-cols-3'
  return (
    <div className={`grid ${gridCols} gap-3 md:gap-4`}>
      {metrics.map((m) => (
        <div key={m.label} className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl p-5 text-center">
          <p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d] mb-1">{m.value}</p>
          <p className="text-sm text-white font-semibold">{m.label}</p>
          <p className="text-xs text-[#6b7280] mt-0.5">{m.sub}</p>
        </div>
      ))}
    </div>
  )
}

function HeroGrid({ metrics }: { metrics: { label: string; value: string; sub: string }[] }) {
  const icons = [DollarSign, Users, Eye, Award]
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
      {metrics.map((m, i) => {
        const Icon = icons[i] || DollarSign
        return (
          <div key={m.label} className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl p-5 text-center">
            <Icon className="w-5 h-5 text-[#00ff9d] mx-auto mb-2" />
            <p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d]">{m.value}</p>
            <p className="text-sm text-white font-semibold mt-1">{m.label}</p>
            <p className="text-xs text-[#6b7280] mt-0.5">{m.sub}</p>
          </div>
        )
      })}
    </div>
  )
}

function ForgedIronPanel() {
  const cs = forgedIronCaseStudy
  return (
    <>
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight mb-5">
        <span className="text-gradient">$22k wholesale,</span><br />2,764 leads, 45 units sold
      </h3>
      <p className="text-base md:text-lg text-[#9ca3af] max-w-3xl leading-7 mb-8">
        {cs.category}. They provided the prize. Three forged wedges at $769 wholesale. We handled creative, distribution, CRM, fulfillment. Here is what happened.
      </p>
      <HeroGrid metrics={cs.hero} />

      <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl px-8 py-7 mb-12">
        <p className="text-lg md:text-xl font-bold text-white leading-relaxed mb-3">
          {`"${cs.pullQuote.text}"`}
        </p>
        <p className="text-sm text-[#6b7280]">{cs.pullQuote.attribution}</p>
      </div>

      <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden mb-8">
        <div className="px-6 md:px-8 py-6">
          <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.15em] mb-4">Sweepstakes Campaign &middot; 22 days</p>
          <MetricGrid metrics={cs.sweeps} />
        </div>
        <div className="px-6 md:px-8 py-6 border-t border-[#2a3347]">
          <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.15em] mb-4">Conversion Funnel</p>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl px-5 py-4 text-center flex-1 min-w-[180px]"><p className="text-xs text-[#6b7280] mb-1">Card Views</p><p className="text-2xl font-mono font-bold text-white">{cs.funnel.cardViews}</p></div>
            <ArrowRight className="w-5 h-5 text-[#00ff9d] shrink-0" />
            <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl px-5 py-4 text-center flex-1 min-w-[180px]"><p className="text-xs text-[#00ff9d] mb-1">74% entered</p><p className="text-2xl font-mono font-bold text-[#00ff9d]">{cs.funnel.entered}</p></div>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden mb-8">
        <div className="px-6 md:px-8 py-6">
          <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.15em] mb-4">Points Exchange Commerce &middot; 49 days</p>
          <MetricGrid metrics={cs.commerce} />
        </div>
      </div>

      <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-8 md:p-10 text-center">
        <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">{cs.closingLine}</p>
      </div>
    </>
  )
}

function MajorOEMPanel() {
  const cs = majorOEMCaseStudy
  return (
    <>
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight mb-5">
        <span className="text-gradient">$57k retail,</span><br />102 units, 6 months
      </h3>
      <p className="text-base md:text-lg text-[#9ca3af] max-w-3xl leading-7 mb-8">
        {cs.category}. Four sweepstakes activations spanning signed memorabilia, a brand HQ fitting experience, and a flagship product launch. Plus two featured marketplace banner windows.
      </p>
      <HeroGrid metrics={cs.hero} />

      <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden mb-8">
        <div className="px-6 md:px-8 py-6">
          <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.15em] mb-4">Sweepstakes Portfolio</p>
          <MetricGrid metrics={cs.sweeps} />
        </div>
        <div className="px-6 md:px-8 py-6 border-t border-[#2a3347]">
          <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.15em] mb-4">Campaign by Campaign</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cs.campaigns.map((c) => (
              <div key={c.name} className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl p-5">
                <p className="text-sm font-semibold text-white mb-1">{c.name}</p>
                <p className="text-xs text-[#6b7280] mb-3 font-mono">{c.dates}</p>
                <p className="text-2xl font-mono font-bold text-[#00ff9d] mb-2">{c.entrants} <span className="text-xs text-[#6b7280] font-normal font-sans">entrants</span></p>
                <p className="text-xs text-[#9ca3af] leading-5">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden mb-8">
        <div className="px-6 md:px-8 py-6">
          <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.15em] mb-4">Marketplace Commerce</p>
          <MetricGrid metrics={cs.commerce} />
        </div>
      </div>

      <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-8 md:p-10 text-center">
        <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">{cs.closingLine}</p>
      </div>
    </>
  )
}

function RecoveryBrandPanel() {
  const cs = recoveryBrandCaseStudy
  return (
    <>
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight mb-5">
        <span className="text-gradient">$21k retail,</span><br />$0 discounts, $0 returns
      </h3>
      <p className="text-base md:text-lg text-[#9ca3af] max-w-3xl leading-7 mb-8">
        {cs.category}. Two sweepstakes built a 2,141 entrant audience and seeded a marketplace storefront that has kept producing views and sales for six weeks after the second sweep ended.
      </p>
      <HeroGrid metrics={cs.hero} />

      <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden mb-8">
        <div className="px-6 md:px-8 py-6">
          <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.15em] mb-4">Sweepstakes Portfolio &middot; Two flights</p>
          <MetricGrid metrics={cs.sweeps} />
        </div>
        <div className="px-6 md:px-8 py-6 border-t border-[#2a3347] bg-[#0f1217]">
          <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.15em] mb-4">Iteration Lift &middot; Sweep 1 to Sweep 2</p>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl px-5 py-4 text-center flex-1 min-w-[160px]"><p className="text-xs text-[#6b7280] mb-1">{cs.iterationLift.sweep1Days}</p><p className="text-2xl font-mono font-bold text-white">{cs.iterationLift.sweep1}</p><p className="text-xs text-[#6b7280]">entrants per day</p></div>
            <ArrowRight className="w-5 h-5 text-[#00ff9d] shrink-0" />
            <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl px-5 py-4 text-center flex-1 min-w-[160px]"><p className="text-xs text-[#00ff9d] mb-1">{cs.iterationLift.delta}</p><p className="text-2xl font-mono font-bold text-[#00ff9d]">{cs.iterationLift.sweep2}</p><p className="text-xs text-[#6b7280]">entrants per day</p></div>
            <ArrowRight className="w-5 h-5 text-[#00ff9d] shrink-0" />
            <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl px-5 py-4 text-center flex-1 min-w-[160px]"><p className="text-xs text-[#6b7280] mb-1">{cs.iterationLift.sweep2Days}</p><p className="text-2xl font-mono font-bold text-white">1,463</p><p className="text-xs text-[#6b7280]">total entrants</p></div>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden mb-8">
        <div className="px-6 md:px-8 py-6">
          <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.15em] mb-4">Marketplace Discovery and Commerce</p>
          <p className="text-sm text-[#d1d5db] leading-7 mb-5">The sweepstakes wasn&rsquo;t a one-shot impression event. It was a discovery mechanism. Daily product views averaged 1.1 per day before the sweep, 11.2 per day during, and <strong className="text-white">20.5 per day after</strong>. Six weeks post-sweep, daily views are still nearly 2x higher than during the sweep itself.</p>
          <MetricGrid metrics={cs.commerce} />
        </div>
      </div>

      <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-8 md:p-10 text-center">
        <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">{cs.closingLine}</p>
      </div>
    </>
  )
}

export function PublicCaseStudies() {
  const [activeTab, setActiveTab] = useState<CaseStudyId>('forged-iron')

  return (
    <section className="py-24 md:py-32" id="case-studies">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4">
          <Play className="w-5 h-5 text-[#00ff9d]" />
          <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">Proof</p>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight mb-4 max-w-4xl">
          We put everything on the line<br /><span className="text-gradient">to show results first.</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-base md:text-lg text-[#9ca3af] mb-10 max-w-3xl">
          Three brand wins, each from a different category of partnership. Click through to see what actually happened. We&rsquo;ll name names on the call.
        </motion.p>

        {/* Tab strip */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap gap-2 mb-10 border-b border-[#2a3347]/60 pb-1">
          {publicCaseStudyTabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`group relative px-4 md:px-6 py-3 md:py-4 rounded-t-lg transition-all duration-200 ${activeTab === t.id ? 'bg-[#1a1f2e] border border-[#2a3347] border-b-transparent -mb-px' : 'border border-transparent hover:bg-[#1a1f2e]/40'}`}
            >
              <p className={`text-sm md:text-base font-bold text-left ${activeTab === t.id ? 'text-[#00ff9d]' : 'text-white group-hover:text-[#00ff9d]'}`}>{t.brand}</p>
              <p className="text-xs text-[#6b7280] mt-0.5 text-left">{t.tagline}</p>
            </button>
          ))}
        </motion.div>

        <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          {activeTab === 'forged-iron' && <ForgedIronPanel />}
          {activeTab === 'major-oem' && <MajorOEMPanel />}
          {activeTab === 'recovery-brand' && <RecoveryBrandPanel />}
        </motion.div>
      </div>
    </section>
  )
}
