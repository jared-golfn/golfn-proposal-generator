'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { type PartnerConfig, platformStats } from '@/lib/presentation-data'
import { images } from '@/lib/images'

const stats = [
  { value: platformStats.registeredUsers, label: 'Registered Users', sub: platformStats.monthlyGrowth + ' growth', highlight: true },
  { value: platformStats.powerUsers, label: 'High-Value Users', sub: '30+ logins/mo avg', tooltip: 'Golfers who log in 30+ times per month and actively engage with partner content, offers, and progression.' },
  { value: platformStats.peakMAU, label: 'Monthly Active Users', sub: 'Peak monthly active' },
  { value: platformStats.under34, label: 'Under 34', sub: 'Core demographic' },
  { value: platformStats.avgMonthlyLogins, label: 'Avg. Logins/Mo', sub: 'Per user' },
  { value: platformStats.countries, label: 'Countries', sub: 'Global reach' },
]

const differentiators = [
  { label: 'Not a sponsorship', tooltip: 'GolfN is built for measurable progression, not passive logo placement.' },
  { label: 'Not a sweepstakes company', tooltip: 'Sweepstakes are one activation tool inside a larger system, not the product itself.' },
  { label: 'Not a CPM product', tooltip: 'GolfN is not just media inventory. Impressions fund delivery, but the value is in progression.' },
  { label: 'Not a passive affiliate channel', tooltip: 'GolfN activates behavior, not just traffic. Standard affiliate economics do not apply.' },
]

function TooltipChip({ label, tooltip, color }: { label: string; tooltip: string; color: string }) {
  const [show, setShow] = useState(false)

  return (
    <div className="relative">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow(!show)}
        className="text-xs md:text-base font-mono text-[#71717A] border border-[#2A2A2C] rounded-full px-3 py-1.5 md:px-5 md:py-2.5 transition-all hover:border-[#3A3A3F] hover:text-[#A1A1AA] cursor-default"
      >
        {label}
      </button>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 top-full mt-2 z-20 w-64 md:w-80"
        >
          <div className="bg-[#1A1A1D] border border-[#2A2A2C] rounded-xl p-4 md:p-5 shadow-xl" style={{ boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 20px ${color}08` }}>
            <p className="text-sm md:text-base text-[#D4D4D8] leading-relaxed">{tooltip}</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}

function StatCard({ stat, index, partner }: { stat: typeof stats[0]; index: number; partner: PartnerConfig }) {
  const [showTip, setShowTip] = useState(false)
  const hasTip = 'tooltip' in stat && stat.tooltip

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + index * 0.06 }}
      className="bg-[#161618] border border-[#2A2A2C] rounded-2xl p-5 md:p-8 relative"
      onMouseEnter={() => hasTip && setShowTip(true)}
      onMouseLeave={() => hasTip && setShowTip(false)}
    >
      <div className="text-2xl md:text-4xl font-bold font-mono tracking-tight mb-1" style={{ color: stat.highlight ? partner.primaryColor : '#FAFAFA' }}>{stat.value}</div>
      <div className="text-sm md:text-base font-semibold text-[#A1A1AA] flex items-center gap-1.5">
        {stat.label}
        {hasTip && (
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[#52525B] shrink-0">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 7v4M8 5.5v0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </div>
      <div className="text-xs md:text-sm text-[#71717A] mt-0.5">{stat.sub}</div>
      {hasTip && showTip && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 top-full mt-2 z-20 w-72 md:w-80"
        >
          <div className="bg-[#1A1A1D] border border-[#2A2A2C] rounded-xl p-4 shadow-xl" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
            <p className="text-sm text-[#D4D4D8] leading-relaxed">{stat.tooltip}</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export function HeroSection({ partner }: { partner: PartnerConfig }) {
  const defaultSubtitle = 'Golf-specific demand generation, activation, and customer progression built around verified golfers and measurable downstream action.'
  const subtitle = partner.heroSubtitle || defaultSubtitle
  const isPortfolio = partner.isPortfolio && partner.portfolioBrands

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ background: `radial-gradient(ellipse 70% 50% at 20% 40%, ${partner.primaryColor}, transparent)` }} />

      <div className="relative z-10 w-content w-full px-5 md:px-12 py-16 md:py-20">
        {/* Header: GolfN logo + partner/agency identity */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex items-center justify-between mb-16 md:mb-28">
          <img src={images.logo} alt="GolfN" className="h-8 md:h-12 w-auto" />
          <div className="flex items-center gap-3">
            {partner.agencyLogoUrl ? (
              <>
                <span className="text-[#52525B] text-sm">Prepared for</span>
                <img src={partner.agencyLogoUrl} alt={partner.agencyName || partner.partnerName} className="h-6 md:h-8 w-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
              </>
            ) : (
              <span className="text-[#8C8C8C] text-sm md:text-lg">Prepared for <span className="text-white font-semibold">{partner.partnerName}</span></span>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-12">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}>
            <h1 className="font-display text-[3rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[0.88] tracking-tight mb-6 md:mb-8">
              {isPortfolio ? (<>Portfolio<br /><span className="text-gradient">Partnership</span></>) : (<>Partnership<br /><span className="text-gradient">Structure</span></>)}
            </h1>
            <p className="text-lg md:text-xl text-[#B0B0B4] max-w-lg leading-relaxed font-light">
              {subtitle}
            </p>

            <div className="flex flex-wrap gap-3 mt-8 md:mt-10">
              <a
                href="#best-fit"
                className="inline-flex items-center gap-2 px-6 py-3 md:px-10 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all hover:scale-[1.02]"
                style={{ background: `linear-gradient(135deg, ${partner.primaryColor}, ${partner.secondaryColor})`, color: '#0F0F10' }}
              >
                Find Your Best Fit
              </a>
              <a
                href="#paths"
                className="inline-flex items-center gap-2 px-6 py-3 md:px-10 md:py-4 rounded-xl font-semibold text-base md:text-lg border border-[#2A2A2C] text-[#A1A1AA] hover:border-[#3A3A3F] transition-all"
              >
                See Partnership Paths
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0, rotate: 2 }} transition={{ duration: 1, delay: 0.4 }} className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-8 blur-[80px] opacity-[0.12] rounded-full" style={{ background: partner.primaryColor }} />
              <img src={images.srixonAd1} alt="GolfN app" className="relative w-48 md:w-72 lg:w-80 rounded-[28px]" style={{ filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.7))' }} />
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-2 md:gap-3 mb-16 md:mb-24">
          {differentiators.map((d) => (
            <TooltipChip key={d.label} label={d.label} tooltip={d.tooltip} color={partner.primaryColor} />
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} partner={partner} />
          ))}
        </motion.div>

        {/* Portfolio Brand Cards */}
        {isPortfolio && partner.portfolioBrands && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }} className="mt-8 md:mt-12">
            <p className="text-sm font-mono text-[#71717A] tracking-wider uppercase mb-5">Portfolio Brands</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {partner.portfolioBrands.map((brand, i) => (
                <motion.div
                  key={brand.slug}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.08 }}
                  className="bg-[#131315] border border-[#2A2A2C] rounded-2xl p-6 md:p-8 hover:border-[#3A3A3F] transition-all group"
                  style={{ borderTopColor: brand.color, borderTopWidth: '2px' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img src={brand.logoUrl} alt={brand.name} className="h-5 md:h-6 w-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
                  </div>
                  <p className="text-xs font-mono tracking-wider uppercase mb-3" style={{ color: brand.color }}>{brand.category}</p>
                  <p className="text-sm md:text-base text-[#B0B0B4] leading-relaxed mb-4">{brand.pitch}</p>
                  <div className="pt-3 border-t border-[#2A2A2C]/50">
                    <p className="text-xs font-mono text-[#52525B] tracking-wider uppercase mb-2">GolfN Targeting Edge</p>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed">{brand.targetingEdge}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Key Markets */}
        {partner.keyMarkets && partner.keyMarkets.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: isPortfolio ? 1.4 : 1.1 }} className="mt-5 md:mt-8 bg-[#161618] border border-[#2A2A2C] rounded-2xl p-5 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <div>
                <p className="text-sm font-mono text-[#71717A] tracking-wider uppercase mb-2">Key Markets</p>
                <div className="flex flex-wrap gap-2">
                  {partner.keyMarkets.map((market) => (
                    <span key={market} className="text-sm md:text-base px-4 py-2 rounded-xl border text-[#D4D4D8] font-medium" style={{ background: `${partner.primaryColor}08`, borderColor: `${partner.primaryColor}25` }}>{market}</span>
                  ))}
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-[#2A2A2C]" />
              <div className="text-sm md:text-base text-[#A1A1AA] max-w-sm">
                GolfN is live in <span className="text-white font-semibold">57 countries</span>. The UK is GolfN&apos;s <span className="text-white font-semibold">#2 market</span> behind the United States, with strong presence across Australia and Canada.
              </div>
            </div>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: isPortfolio ? 1.6 : 1.3 }} className="mt-12 md:mt-16 flex items-center gap-4">
          <div className="h-px w-12 md:w-16" style={{ background: partner.primaryColor }} />
          <span className="text-sm md:text-base text-[#71717A]">
            {isPortfolio ? (
              <>{partner.portfolioBrands!.map(b => b.name).join(' \u00b7 ')}</>
            ) : (
              <>{partner.productCategory} \u2014 {partner.productNames.join(' \u00b7 ')}</>
            )}
          </span>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center hidden md:block">
        <span className="text-xs text-[#71717A] font-mono tracking-[0.3em]">SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-px h-8 mx-auto mt-2" style={{ background: `linear-gradient(to bottom, ${partner.primaryColor}60, transparent)` }} />
      </motion.div>
    </section>
  )
}
