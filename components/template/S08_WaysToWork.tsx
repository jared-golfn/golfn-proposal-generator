'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'
import { Expand } from './Expand'
import { Badge } from './Badge'

type PathId = 'pilot' | 'growth' | 'strategic'

const paths: Record<PathId, { name: string; tagline: string; stages: string; setup: string; monthly: string; duration: string; impressions: string; bestFor: string; scope: string[] }> = {
  pilot: {
    name: 'Pilot',
    tagline: 'Best for first-time programs and contained launches',
    stages: '1 - 4',
    setup: '$7,500 - $12,500',
    monthly: '$5,000+',
    duration: '3 months',
    impressions: '50K - 100K',
    bestFor: 'Brands testing GolfN for the first time with a contained scope. 90-day contained launch available for qualified partners.',
    scope: ['Launch campaign', 'Basic cohort creation', 'Initial post-campaign follow-up', '90-day contained launch available for qualified partners'],
  },
  growth: {
    name: 'Growth',
    tagline: 'Best for multi-month activation and optimization',
    stages: '1 - 7',
    setup: '$12,500 - $20,000',
    monthly: '$8,000+',
    duration: '3 - 6 months',
    impressions: '100K - 250K',
    bestFor: 'Brands ready to run a fuller-funnel program with progression goals.',
    scope: ['Launch campaign', 'Cohort building', 'Post-campaign activation', 'Creative refreshes', 'Recurring reporting', 'Optional commerce / social / education / event modules'],
  },
  strategic: {
    name: 'Strategic',
    tagline: 'Best for long-term partnerships and advanced activation',
    stages: '1 - 8',
    setup: '$20,000 - $35,000+',
    monthly: '$12,000+',
    duration: '6+ months',
    impressions: '250K - 500K+',
    bestFor: 'Brands committing to sustained, multi-stage activation with advanced cohort development.',
    scope: ['Full program architecture', 'Multi-stage activation', 'Advanced cohort expansion', 'Marketplace / education / real-world modules', 'Advanced reporting cadence', 'Executive storytelling'],
  },
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
    <section id="ways-to-work" className="py-20 md:py-28">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <p className="text-xs font-mono tracking-[0.2em] uppercase mb-4" style={{ color: partner.primaryColor }}>Partnership Paths</p>
          <h2 className="font-display text-3xl md:text-5xl leading-[0.95] mb-4">Ways to work<br />with <span className="text-gradient">GolfN</span></h2>
          <p className="text-base md:text-lg text-[#9ca3af] max-w-2xl mb-12">
            Three tiers. Pick the one that matches where you are. We handle the rest.
          </p>
        </Fade>

        {/* Path tabs */}
        <Fade delay={0.1}>
          <div className="flex gap-3 mb-8">
            {pathOrder.map((id) => {
              const p = paths[id]
              const isActive = active === id
              const isRec = rec === id
              return (
                <button
                  key={id}
                  onClick={() => setActive(id)}
                  className={`relative flex-1 px-4 py-4 md:px-6 md:py-6 rounded-xl text-left transition-all border-2 ${isActive ? 'bg-[#131619]' : 'bg-transparent hover:bg-[#131619]/50'}`}
                  style={{ borderColor: isActive ? `${partner.primaryColor}50` : '#1e2128' }}
                >
                  {isRec && <span className="absolute -top-2.5 left-4 text-[10px] font-mono tracking-wider px-2.5 py-0.5 rounded-full font-bold" style={{ background: partner.primaryColor, color: '#0f1217' }}>REC</span>}
                  <span className={`text-lg md:text-xl font-bold block ${isActive ? 'text-white' : 'text-[#6b7280]'}`}>{p.name}</span>
                  <span className="text-sm text-[#6b7280] mt-0.5 block">{p.tagline}</span>
                </button>
              )
            })}
          </div>
        </Fade>

        {/* Active path card */}
        <Fade delay={0.15}>
          <div className="bg-[#131619] border border-[#1e2128] rounded-2xl overflow-hidden" style={{ boxShadow: `0 0 60px ${partner.primaryColor}06` }}>
            <div className="p-6 md:p-10">
              {/* Custom scenario */}
              {scenarioTitle && (
                <div className="mb-8">
                  <p className="text-xs font-mono text-[#6b7280] tracking-wider uppercase mb-2">Your Scenario</p>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{scenarioTitle}</h3>
                  {scenarioDesc && <p className="text-base text-[#9ca3af] leading-relaxed">{scenarioDesc}</p>}
                </div>
              )}

              {/* Typical scope */}
              <div className="mb-6">
                <p className="text-xs font-mono text-[#6b7280] tracking-wider uppercase mb-3">Typical Scope</p>
                <div className="flex flex-wrap gap-2">
                  {path.scope.map((s) => (
                    <span key={s} className="text-sm px-3 py-1.5 rounded-lg bg-[#0f1217] border border-[#1e2128] text-[#d1d5db]">{s}</span>
                  ))}
                </div>
              </div>

              {/* Pricing grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
                {[
                  { label: 'Setup', value: path.setup },
                  { label: 'Monthly', value: path.monthly },
                  { label: 'Duration', value: path.duration },
                  { label: 'Impressions', value: path.impressions },
                ].map((row) => (
                  <div key={row.label} className="bg-[#0f1217] rounded-xl p-4">
                    <p className="text-xs text-[#6b7280] mb-1">{row.label}</p>
                    <p className="text-lg md:text-xl font-mono font-bold" style={{ color: partner.primaryColor }}>{row.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Economics */}
            <div className="border-t border-[#1e2128]">
              <Expand accentColor={partner.primaryColor} trigger={<span className="text-base font-semibold text-white">Economics &amp; Pricing Components</span>}>
                <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2">Setup Investment</h4>
                    <p className="text-sm text-[#9ca3af]">Strategy, creative, campaign architecture, and technical implementation. One-time.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2">Managed Delivery</h4>
                    <p className="text-sm text-[#9ca3af]">Ongoing optimization, audience intelligence, creative refresh, and monthly reporting.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2">Impression Banks</h4>
                    <p className="text-sm text-[#9ca3af]">Funds delivery volume. Billed as served, no expiration. Separate from management.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2">Performance Layer</h4>
                    <p className="text-sm text-[#9ca3af]">Realized only when qualifying downstream actions occur. Aligned incentives.</p>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-[#1e2128]/60">
                  <p className="text-sm text-[#6b7280]"><span className="text-[#9ca3af] font-medium">Minimums:</span> $7,500 setup &middot; $5,000/mo floor &middot; 3-month minimum &middot; 20% margin floor</p>
                </div>
              </Expand>
            </div>

            {/* Commerce notes */}
            {partner.commerceNotes && partner.commerceNotes.length > 0 && (
              <div className="border-t border-[#1e2128]">
                <Expand accentColor={partner.primaryColor} trigger={<span className="text-base font-semibold text-white">How the commercial model works</span>}>
                  <div className="pt-2 space-y-3">
                    {partner.commerceNotes.map((note, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: partner.primaryColor }} />
                        <p className="text-sm text-[#d1d5db] leading-relaxed">{note}</p>
                      </div>
                    ))}
                  </div>
                </Expand>
              </div>
            )}
          </div>
        </Fade>

        {/* Setup logic callout band */}
        <Fade delay={0.25}>
          <div className="mt-6 bg-[#131619] border-l-2 rounded-r-xl p-6 md:p-8" style={{ borderLeftColor: partner.primaryColor }}>
            <p className="text-sm text-[#d1d5db] leading-relaxed">
              <strong className="text-white">Every program includes real upfront work:</strong> strategy, offer design, audience definition, tracking logic, campaign implementation, and the first 30 days of post-campaign follow-up. That is why setup investment is required before launch.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  )
}
