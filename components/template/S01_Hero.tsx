'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Globe, ChevronDown, ChevronUp } from 'lucide-react'
import type { PartnerData, PlatformKPI } from '@/lib/template-types'
import { images } from '@/lib/images'

const defaultKPIs: PlatformKPI[] = [
  { label: 'Registered Golfers', value: '100,000+' },
  { label: 'Peak Monthly Active', value: '28,060' },
  { label: 'Under 34', value: '56%' },
  { label: 'Countries', value: '57' },
  { label: 'Avg MoM Growth', value: '~53%', subtitle: 'Power user cohort, 10 months' },
]

export function S01_Hero({ partner }: { partner: PartnerData }) {
  const [showMarkets, setShowMarkets] = useState(false)
  const subtitle = partner.heroSubtitle || 'GolfN helps brands create awareness, identify real user interest, build qualified audience cohorts, and continue activating those users through measurable follow-on campaigns.'
  const headline = partner.heroHeadline
  const markets = partner.marketReach
  const namedTotal = markets ? markets.reduce((s, m) => s + m.users, 0) : 0
  const othersCount = markets ? Math.max(0, 100000 - namedTotal) : 0
  const grandTotal = markets ? namedTotal + othersCount : 0

  const showPartnerLogo = !partner.isPortfolio && partner.partnerLogoUrl && partner.campaigns && partner.campaigns.length > 0

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]" style={{ background: 'radial-gradient(ellipse 60% 50% at 15% 50%, #001a14, transparent)' }} />
      <div className="absolute inset-0 opacity-[0.04]" style={{ background: 'radial-gradient(ellipse 40% 40% at 85% 30%, #00ff9d, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-12 md:py-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="flex items-center justify-between mb-12 md:mb-20 gap-4">
          <img src={images.logo} alt="GolfN" className="h-8 md:h-12 w-auto shrink-0" />
          {partner.agencyLogoUrl ? (
            <div className="flex items-center gap-2 md:gap-3 shrink-0">
              <span className="text-[#6b7280] text-sm md:text-base hidden sm:inline">Prepared for</span>
              <img src={partner.agencyLogoUrl} alt={partner.agencyName || ''} className="h-6 md:h-9 w-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
            </div>
          ) : partner.partnerLogoUrl ? (
            <div className="flex items-center gap-2 md:gap-3 shrink-0">
              <span className="text-[#6b7280] text-sm md:text-base hidden sm:inline">Prepared for</span>
              <img src={partner.partnerLogoUrl} alt={partner.partnerName} className="h-6 md:h-9 w-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
            </div>
          ) : (
            <span className="text-[#6b7280] text-sm md:text-base">Prepared for <span className="text-white font-medium">{partner.partnerName}</span></span>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 items-center">
          <div className="lg:col-span-3">
            {headline ? (
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-tight mb-6">
                {headline}
              </motion.h1>
            ) : (
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[0.92] tracking-tight mb-6">
                Launch premium golf<br />campaigns that create<br /><span className="text-gradient">qualified demand</span>
              </motion.h1>
            )}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} className="text-base md:text-xl text-[#9ca3af] max-w-3xl leading-7 md:leading-8 mb-8">{subtitle}</motion.p>

            {showPartnerLogo && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }} className="mb-8">
                <div className="inline-flex items-center justify-center h-20 md:h-24 px-8 md:px-10 rounded-xl bg-[#1a1f2e] border border-[#2a3347]">
                  <img src={partner.partnerLogoUrl} alt={partner.partnerName} className="h-10 md:h-14 w-auto max-w-[280px] md:max-w-[360px] object-contain" style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
                </div>
              </motion.div>
            )}

            {partner.isPortfolio && partner.portfolioBrands && partner.portfolioBrands.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }} className="mb-8">
                <div className="hidden sm:inline-flex flex-col items-center">
                  <div className="flex items-center gap-3">
                    {partner.portfolioBrands.map((b) => (
                      b.brandLogoUrl && (
                        <div key={b.brandName} className="flex items-center justify-center h-14 px-5 rounded-lg bg-[#1a1f2e] border border-[#2a3347]">
                          <img src={b.brandLogoUrl} alt={b.brandName} className="h-7 md:h-8 w-auto max-w-[160px] object-contain" style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
                        </div>
                      )
                    ))}
                  </div>
                  <svg width="100%" height="24" viewBox="0 0 400 24" preserveAspectRatio="xMidYMid meet" className="mt-1 mb-1" style={{ maxWidth: '100%' }}>
                    <line x1="60" y1="0" x2="60" y2="8" stroke="#2a3347" strokeWidth="1.5" />
                    <line x1="200" y1="0" x2="200" y2="8" stroke="#2a3347" strokeWidth="1.5" />
                    <line x1="340" y1="0" x2="340" y2="8" stroke="#2a3347" strokeWidth="1.5" />
                    <line x1="60" y1="8" x2="340" y2="8" stroke="#2a3347" strokeWidth="1.5" />
                    <line x1="200" y1="8" x2="200" y2="24" stroke="#2a3347" strokeWidth="1.5" />
                  </svg>
                  {partner.agencyLogoUrl && (
                    <div className="flex items-center justify-center h-16 px-6 rounded-lg bg-[#1a1f2e]/70 border border-[#2a3347]/70">
                      <img src={partner.agencyLogoUrl} alt={partner.agencyName || 'Agency'} className="h-9 md:h-10 w-auto max-w-[200px] object-contain" style={{ filter: 'brightness(0) invert(1)', opacity: 0.7 }} />
                    </div>
                  )}
                </div>
                <div className="sm:hidden flex flex-col gap-2">
                  <div className="flex flex-wrap gap-2">
                    {partner.portfolioBrands.map((b) => (
                      b.brandLogoUrl && (
                        <div key={b.brandName} className="flex items-center justify-center h-11 px-4 rounded-lg bg-[#1a1f2e] border border-[#2a3347]">
                          <img src={b.brandLogoUrl} alt={b.brandName} className="h-5 w-auto max-w-[120px] object-contain" style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
                        </div>
                      )
                    ))}
                  </div>
                  {partner.agencyLogoUrl && (
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-px bg-[#2a3347]" />
                      <div className="flex items-center justify-center h-11 px-4 rounded-lg bg-[#1a1f2e]/70 border border-[#2a3347]/70">
                        <img src={partner.agencyLogoUrl} alt={partner.agencyName || 'Agency'} className="h-6 w-auto max-w-[140px] object-contain" style={{ filter: 'brightness(0) invert(1)', opacity: 0.7 }} />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap items-center gap-3 md:gap-4 mb-10">
              <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-1.5 text-sm md:text-base font-medium hover:underline transition-colors text-[#00ff9d]"><Zap className="w-4 h-4" /> See How It Works</button>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30, rotate: 1 }} animate={{ opacity: 1, y: 0, rotate: 2 }} transition={{ delay: 0.5, duration: 1 }} className="lg:col-span-2 hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute -inset-10 blur-[80px] opacity-[0.15] rounded-full" style={{ background: 'radial-gradient(circle, #00ff9d, #001a14, transparent)' }} />
              <img src={images.cobraSweeps} alt="Campaign creative" className="relative w-48 md:w-60 lg:w-68 rounded-[24px] glow-green" style={{ filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.7))' }} />
              <motion.img src={images.srixonAd1} alt="In-app campaign" className="absolute -left-10 md:-left-14 top-1/3 w-24 md:w-32 rounded-xl shadow-2xl border border-[#2a3347]" animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))' }} />
              <motion.div className="absolute -right-4 md:-right-8 bottom-10 bg-[#1a1f2e] border border-[#2a3347] rounded-xl px-3 py-2 shadow-xl" animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}>
                <p className="text-[10px] font-mono text-[#6b7280] uppercase tracking-wider">Qualified Cohort</p>
                <p className="text-lg font-bold text-[#00ff9d]">2,847 golfers</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* KPIs */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-6 md:gap-8 lg:gap-12">
          {defaultKPIs.map((kpi) => (
            <div key={kpi.label}>
              <span className="text-xl md:text-2xl lg:text-3xl font-bold font-mono text-[#00ff9d]">{kpi.value}</span>
              <span className="block text-sm md:text-base text-[#6b7280] mt-1">{kpi.label}</span>
              {kpi.subtitle && <span className="block text-xs text-[#4b5563] mt-0.5">{kpi.subtitle}</span>}
            </div>
          ))}
        </motion.div>

        {/* Market Reach expandable */}
        {markets && markets.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-8">
            <button
              onClick={() => setShowMarkets(!showMarkets)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1a1f2e] border border-[#2a3347] hover:border-[#00ff9d]/40 transition-all group"
            >
              <Globe className="w-4 h-4 text-[#00ff9d]" />
              <span className="text-sm md:text-base font-semibold text-white">Market Reach by Country</span>
              <span className="text-xs font-mono text-[#6b7280] ml-1">As of Mar 11, 2026</span>
              {showMarkets ? <ChevronUp className="w-4 h-4 text-[#6b7280] group-hover:text-[#00ff9d] transition-colors" /> : <ChevronDown className="w-4 h-4 text-[#6b7280] group-hover:text-[#00ff9d] transition-colors" />}
            </button>

            {showMarkets && (
              <div className="mt-4 bg-[#1a1f2e] border border-[#2a3347] rounded-xl overflow-hidden max-w-2xl">
                <div className="divide-y divide-[#2a3347]/60">
                  {markets.map((m) => {
                    const maxUsers = Math.max(...markets.map(x => x.users))
                    const pct = (m.users / maxUsers) * 100
                    return (
                      <div key={m.country} className="px-5 py-3 flex items-center gap-4">
                        {m.flag && <span className="text-lg shrink-0">{m.flag}</span>}
                        <span className="text-sm md:text-base text-white font-medium w-32 md:w-40 shrink-0">{m.country}</span>
                        <div className="flex-1 h-2 rounded-full bg-[#0f1217] overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #00ff9d, #17A455)' }} />
                        </div>
                        <span className="text-sm md:text-base font-mono font-bold text-[#00ff9d] w-16 text-right shrink-0">{m.users.toLocaleString()}</span>
                      </div>
                    )
                  })}
                  <div className="px-5 py-3 flex items-center gap-4">
                    <span className="text-lg shrink-0">{'\ud83c\udf0d'}</span>
                    <span className="text-sm md:text-base text-[#9ca3af] font-medium w-32 md:w-40 shrink-0">Others (51 markets)</span>
                    <div className="flex-1 h-2 rounded-full bg-[#0f1217] overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${(othersCount / Math.max(...markets.map(x => x.users))) * 100}%`, background: 'linear-gradient(90deg, rgba(0,255,157,0.3), rgba(23,164,85,0.3))' }} />
                    </div>
                    <span className="text-sm md:text-base font-mono font-bold text-[#9ca3af] w-16 text-right shrink-0">{othersCount.toLocaleString()}</span>
                  </div>
                </div>
                <div className="px-5 py-3 bg-[#0f1217] border-t border-[#2a3347] flex items-center justify-between">
                  <span className="text-sm font-bold text-white">Total (57 countries)</span>
                  <span className="text-lg md:text-xl font-mono font-bold text-[#00ff9d]">{grandTotal.toLocaleString()}+</span>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
