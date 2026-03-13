'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { type PartnerConfig } from '@/lib/presentation-data'
import { partnershipPaths, partnerScenarioOverrides, extensions as allExtensions } from '@/lib/partnership-paths'
import type { PathId } from '@/lib/partnership-paths'
import { Expandable } from './Expandable'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>{children}</motion.div>
}

const pathOrder: PathId[] = ['pilot', 'growth', 'strategic']

export function SectionPricing({ partner }: { partner: PartnerConfig }) {
  const defaultTab = partner.defaultPath || 'growth'
  const [activeTab, setActiveTab] = useState<PathId>(defaultTab)
  const path = partnershipPaths[activeTab]
  const scenarioOverrides = partnerScenarioOverrides[partner.slug]
  const scenario = scenarioOverrides?.[activeTab] || path.exampleScenario
  const isPortfolio = partner.isPortfolio && partner.portfolioBrands

  return (
    <section className="py-20 md:py-32">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <h2 className="font-display text-4xl md:text-7xl leading-[0.9] mb-4">
            Partnership <span className="text-gradient">Paths</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#A1A1AA] max-w-2xl mb-12 md:mb-16">
            Three tiers. Pick the one that matches where you are. We handle the rest.
          </p>
        </Fade>

        {/* Tab selector — BIG buttons */}
        <Fade delay={0.1}>
          <div className="flex gap-3 mb-8">
            {pathOrder.map((pathId) => {
              const p = partnershipPaths[pathId]
              const isActive = activeTab === pathId
              const isRec = partner.defaultPath === pathId
              return (
                <button
                  key={pathId}
                  onClick={() => setActiveTab(pathId)}
                  className={`relative flex-1 px-5 py-5 md:px-8 md:py-7 rounded-2xl text-left transition-all border-2 ${isActive ? 'bg-[#161618]' : 'bg-[#0F0F10] hover:bg-[#131315]'}`}
                  style={{ borderColor: isActive ? `${partner.primaryColor}50` : '#2A2A2C' }}
                >
                  {isRec && <span className="absolute -top-3 left-5 text-xs font-mono tracking-wider px-3 py-1 rounded-full font-bold" style={{ background: partner.primaryColor, color: '#0F0F10' }}>RECOMMENDED</span>}
                  <span className={`text-xl md:text-2xl font-bold block ${isActive ? 'text-white' : 'text-[#71717A]'}`}>{p.name}</span>
                  <span className="text-base text-[#71717A] mt-1 block">{p.tagline}</span>
                </button>
              )
            })}
          </div>
        </Fade>

        {/* Active path — CLEAN compact card */}
        <Fade delay={0.15}>
          <div className="bg-[#131315] border border-[#2A2A2C] rounded-2xl overflow-hidden" style={{ boxShadow: `0 0 80px ${partner.primaryColor}08` }}>
            {/* Scenario + pricing — the stuff people care about */}
            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div className="flex-1">
                  <p className="text-sm font-mono text-[#71717A] tracking-wider uppercase mb-2">Example Scenario</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{scenario.title}</h3>
                  <p className="text-base md:text-lg text-[#B0B0B4] leading-relaxed">{scenario.description}</p>
                </div>
                <div className="shrink-0 md:text-right">
                  <p className="text-sm font-mono text-[#71717A] tracking-wider uppercase mb-2">Stages</p>
                  <span className="text-2xl md:text-3xl font-mono font-bold" style={{ color: partner.primaryColor }}>{path.includedStages[0]}\u2013{path.includedStages[path.includedStages.length - 1]}</span>
                </div>
              </div>

              {/* Pricing grid — BIG numbers */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { label: 'Setup', value: path.setup.range },
                  { label: 'Monthly', value: path.monthly.starting },
                  { label: 'Duration', value: path.duration.recommended },
                  { label: 'Impressions', value: path.impressionRecommendation.join(' \u2013 ') },
                ].map((row) => (
                  <div key={row.label} className="bg-[#0F0F10] rounded-xl p-4 md:p-5">
                    <p className="text-sm text-[#71717A] mb-1">{row.label}</p>
                    <p className="text-xl md:text-2xl font-mono font-bold" style={{ color: partner.primaryColor }}>{row.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Per-brand breakdown for portfolio — expandable */}
            {isPortfolio && partner.portfolioBrands && (
              <div className="border-t border-[#2A2A2C]">
                <Expandable
                  accentColor={partner.primaryColor}
                  trigger={<span className="text-lg font-semibold text-white">Per-Brand Activation at This Tier</span>}
                >
                  <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {partner.portfolioBrands.map((brand) => {
                      const brandScenario = partnerScenarioOverrides[brand.slug]?.[activeTab]
                      return (
                        <div key={brand.slug} className="bg-[#0F0F10] border border-[#2A2A2C] rounded-xl p-5" style={{ borderTopColor: brand.color, borderTopWidth: '2px' }}>
                          <img src={brand.logoUrl} alt={brand.name} className="h-5 w-auto mb-3" style={{ filter: 'brightness(0) invert(1)', opacity: 0.8 }} />
                          {brandScenario ? (
                            <><p className="text-sm font-bold text-[#D4D4D8] mb-1">{brandScenario.title}</p><p className="text-xs text-[#A1A1AA] leading-relaxed">{brandScenario.description}</p></>
                          ) : (
                            <p className="text-sm text-[#71717A]">{brand.pitch}</p>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </Expandable>
              </div>
            )}

            {/* What's included — expandable */}
            <div className="border-t border-[#2A2A2C]">
              <Expandable
                accentColor={partner.primaryColor}
                trigger={<span className="text-lg font-semibold text-white">What\u2019s Included + Extensions</span>}
              >
                <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm font-mono text-[#71717A] tracking-wider uppercase mb-3">Includes</p>
                    <div className="flex flex-wrap gap-2">
                      {path.includes.map((item) => (
                        <span key={item} className="text-sm px-4 py-2 rounded-xl bg-[#1A1A1D] border border-[#2A2A2C] text-[#D4D4D8]">{item}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-mono text-[#71717A] tracking-wider uppercase mb-3">Recommended Extensions</p>
                    <div className="space-y-2">
                      {allExtensions.filter(e => path.recommendedExtensions.includes(e.id)).map((ext) => (
                        <div key={ext.id} className="flex items-center justify-between">
                          <span className="text-sm text-[#D4D4D8]">{ext.name}</span>
                          {ext.price && <span className="text-xs font-mono text-[#52525B]">{ext.price}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Expandable>
            </div>

            {/* Commerce notes — expandable, only on pilot for GG */}
            {partner.commerceNotes && partner.commerceNotes.length > 0 && (
              <div className="border-t border-[#2A2A2C]">
                <Expandable
                  accentColor={partner.primaryColor}
                  trigger={<span className="text-lg font-semibold text-white">How Affiliate + Points Work Together</span>}
                >
                  <div className="pt-4 space-y-3">
                    {partner.commerceNotes.map((note, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: partner.primaryColor }} />
                        <p className="text-base text-[#B0B0B4] leading-relaxed">{note}</p>
                      </div>
                    ))}
                  </div>
                </Expandable>
              </div>
            )}

            {/* Pricing components breakdown — expandable */}
            <div className="border-t border-[#2A2A2C]">
              <Expandable
                accentColor={partner.primaryColor}
                trigger={<span className="text-lg font-semibold text-white">How Pricing Components Work</span>}
              >
                <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Setup', sub: 'One-time', desc: 'Strategy, creative, campaign architecture, and technical implementation.' },
                    { title: 'Management', sub: 'Monthly', desc: 'Ongoing optimization, audience intelligence, creative refresh, and reporting.' },
                    { title: 'Media', sub: 'Impression banks', desc: 'Funds delivery volume. Billed as served, no expiration.' },
                    { title: 'Performance', sub: 'When applicable', desc: 'Realized only when qualifying downstream actions occur. Aligned incentives.' },
                  ].map((c) => (
                    <div key={c.title}>
                      <div className="flex items-baseline gap-2 mb-1">
                        <h4 className="text-base font-bold text-white">{c.title}</h4>
                        <span className="text-xs text-[#52525B] font-mono">{c.sub}</span>
                      </div>
                      <p className="text-sm text-[#A1A1AA]">{c.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-[#2A2A2C]/40">
                  <p className="text-sm text-[#71717A]"><span className="text-[#A1A1AA] font-medium">Minimums:</span> $7,500 setup \u00b7 $5,000/mo floor \u00b7 3 month minimum \u00b7 20% margin floor (30\u201340% preferred)</p>
                </div>
              </Expandable>
            </div>

            {/* CTA */}
            <div className="p-6 md:p-10 border-t border-[#2A2A2C]">
              <a href={`mailto:jared@golfn.com?subject=Partnership%20Discussion%20%E2%80%94%20${encodeURIComponent(partner.partnerName)}%20(${path.name}%20Path)`} className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-xl font-semibold text-lg md:text-xl transition-all hover:scale-[1.02]" style={{ background: `linear-gradient(135deg, ${partner.primaryColor}, ${partner.secondaryColor})`, color: '#0F0F10' }}>
                Scope a {path.name} Program &rarr;
              </a>
            </div>
          </div>
        </Fade>

        {/* Multi-brand callout */}
        {(isPortfolio || (partner.agencyBrands && partner.agencyBrands.length > 0)) && (
          <Fade delay={0.25}>
            <div className="mt-8 bg-[#131315] border border-[#2A2A2C] rounded-2xl p-6 md:p-8 border-l-4" style={{ borderLeftColor: partner.secondaryColor }}>
              <p className="text-base md:text-lg text-[#B0B0B4]">
                <span className="text-white font-bold">Multi-Brand Pricing:</span>{' '}
                When multiple brands activate through a single agency, consolidated pricing applies. Shared infrastructure reduces per-brand costs significantly.
              </p>
            </div>
          </Fade>
        )}
      </div>
    </section>
  )
}
