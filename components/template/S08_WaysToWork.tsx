'use client'

import { useState } from 'react'
import { Layers, ArrowUpRight, Star } from 'lucide-react'
import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'
import { Expand } from './Expand'

type PathId = 'pilot' | 'growth' | 'strategic'

const paths: Record<PathId, { name: string; tagline: string; setup: string; monthly: string; duration: string; impressions: string; scope: string[]; Icon: typeof Layers }> = {
  pilot: { name: 'Pilot', tagline: 'First-time programs and contained launches', setup: '$7,500 - $12,500', monthly: '$5,000+', duration: '3 months', impressions: '50K - 100K', scope: ['Launch campaign', 'Basic cohort creation', 'Initial post-campaign follow-up', '90-day contained launch available'], Icon: Layers },
  growth: { name: 'Growth', tagline: 'Multi-month activation and optimization', setup: '$12,500 - $20,000', monthly: '$8,000+', duration: '3 - 6 months', impressions: '100K - 250K', scope: ['Launch campaign', 'Cohort building', 'Post-campaign activation', 'Creative refreshes', 'Recurring reporting', 'Optional commerce / social / education modules'], Icon: ArrowUpRight },
  strategic: { name: 'Strategic', tagline: 'Long-term partnerships and advanced activation', setup: '$20,000 - $35,000+', monthly: '$12,000+', duration: '6+ months', impressions: '250K - 500K+', scope: ['Full program architecture', 'Multi-stage activation', 'Advanced cohort expansion', 'Marketplace / education / real-world modules', 'Advanced reporting cadence', 'Executive storytelling'], Icon: Star },
}

const pathOrder: PathId[] = ['pilot', 'growth', 'strategic']

export function S08_WaysToWork({ partner }: { partner: PartnerData }) {
  const rec = partner.recommendedPath || 'pilot'
  const [active, setActive] = useState<PathId>(rec)
  const path = paths[active]
  const scenario = partner.customScenarios
  const scenarioTitle = active === 'pilot' ? scenario?.pilotTitle : active === 'growth' ? scenario?.growthTitle : scenario?.strategicTitle
  const scenarioDesc = active === 'pilot' ? scenario?.pilotDescription : active === 'growth' ? scenario?.growthDescription : scenario?.strategicDescription

  return (
    <section id="ways-to-work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase mb-4 text-[#00ff9d]">Partnership Paths</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight mb-5">Ways to work<br />with <span className="text-gradient">GolfN</span></h2>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-8 mb-14">Three tiers. Pick the one that matches where you are. We handle the rest.</p>
        </Fade>

        <Fade delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {pathOrder.map((id) => {
              const p = paths[id]
              const isActive = active === id
              const isRec = rec === id
              return (
                <button key={id} onClick={() => setActive(id)} className={`relative text-left px-6 py-7 rounded-xl border-2 transition-all duration-300 ${isActive ? 'bg-[#1a1f2e] border-[#00ff9d]/40 shadow-2xl scale-[1.02]' : 'bg-transparent border-[#2a3347] hover:bg-[#1a1f2e]/50 hover:border-[#00ff9d]/30'}`}>
                  {isRec && <span className="absolute -top-2.5 left-5 text-[10px] font-mono tracking-wider px-3 py-0.5 rounded-full font-bold bg-[#00ff9d] text-[#0f1217]">REC</span>}
                  <p.Icon className={`w-6 h-6 mb-3 ${isActive ? 'text-[#00ff9d]' : 'text-[#6b7280]'}`} />
                  <span className={`text-2xl font-bold block mb-1 ${isActive ? 'text-white' : 'text-[#6b7280]'}`}>{p.name}</span>
                  <span className="text-base text-[#6b7280] block mb-4">{p.tagline}</span>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#0f1217] rounded-lg p-3">
                      <p className="text-xs text-[#6b7280] uppercase">Setup</p>
                      <p className="text-base font-mono font-bold text-[#00ff9d]">{p.setup}</p>
                    </div>
                    <div className="bg-[#0f1217] rounded-lg p-3">
                      <p className="text-xs text-[#6b7280] uppercase">Monthly</p>
                      <p className="text-base font-mono font-bold text-[#00ff9d]">{p.monthly}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </Fade>

        <Fade delay={0.15}>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl overflow-hidden">
            <div className="p-8 md:p-10">
              {scenarioTitle && (
                <div className="mb-8">
                  <p className="text-sm font-mono text-[#6b7280] tracking-wider uppercase mb-2">Your Scenario</p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">{scenarioTitle}</h3>
                  {scenarioDesc && <p className="text-lg text-[#9ca3af] leading-8">{scenarioDesc}</p>}
                </div>
              )}
              <div className="mb-6">
                <p className="text-sm font-mono text-[#6b7280] tracking-wider uppercase mb-3">Typical Scope</p>
                <div className="flex flex-wrap gap-2">
                  {path.scope.map((s) => (<span key={s} className="text-base px-3 py-1.5 rounded-lg bg-[#0f1217] border border-[#2a3347] text-[#d1d5db]">{s}</span>))}
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[{ label: 'Setup', value: path.setup }, { label: 'Monthly', value: path.monthly }, { label: 'Duration', value: path.duration }, { label: 'Impressions', value: path.impressions }].map((row) => (
                  <div key={row.label} className="bg-[#0f1217] rounded-xl p-4">
                    <p className="text-sm text-[#6b7280] mb-1">{row.label}</p>
                    <p className="text-lg font-mono font-bold text-[#00ff9d]">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-[#2a3347]">
              <Expand accentColor="#00ff9d" trigger={<span className="text-lg font-semibold text-white">Economics &amp; Pricing Components</span>}>
                <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><h4 className="text-base font-bold text-white mb-2">Setup Investment</h4><p className="text-base text-[#9ca3af]">Strategy, creative, campaign architecture, and technical implementation. One-time.</p></div>
                  <div><h4 className="text-base font-bold text-white mb-2">Managed Delivery</h4><p className="text-base text-[#9ca3af]">Ongoing optimization, audience intelligence, creative refresh, and monthly reporting.</p></div>
                  <div><h4 className="text-base font-bold text-white mb-2">Impression Banks</h4><p className="text-base text-[#9ca3af]">Funds delivery volume. Billed as served, no expiration.</p></div>
                  <div><h4 className="text-base font-bold text-white mb-2">Performance Layer</h4><p className="text-base text-[#9ca3af]">Realized only when qualifying downstream actions occur.</p></div>
                </div>
                <div className="mt-5 pt-4 border-t border-[#2a3347]/60">
                  <p className="text-base text-[#6b7280]"><span className="text-[#9ca3af] font-medium">Minimums:</span> $7,500 setup &middot; $5,000/mo floor &middot; 3-month minimum &middot; 20% margin floor</p>
                </div>
              </Expand>
            </div>
            {partner.commerceNotes && partner.commerceNotes.length > 0 && (
              <div className="border-t border-[#2a3347]">
                <Expand accentColor="#00ff9d" trigger={<span className="text-lg font-semibold text-white">How the commercial model works</span>}>
                  <div className="pt-2 space-y-3">
                    {partner.commerceNotes.map((note, i) => (
                      <div key={i} className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-[#00ff9d]" /><p className="text-base text-[#d1d5db] leading-7">{note}</p></div>
                    ))}
                  </div>
                </Expand>
              </div>
            )}
          </div>
        </Fade>

        <Fade delay={0.25}>
          <div className="mt-6 bg-[#1a1f2e] border-l-2 border-[#00ff9d] rounded-r-xl p-8">
            <p className="text-lg text-[#d1d5db] leading-8"><strong className="text-white">Every program includes real upfront work:</strong> strategy, offer design, audience definition, tracking logic, campaign implementation, and the first 30 days of post-campaign follow-up.</p>
          </div>
        </Fade>
      </div>
    </section>
  )
}
