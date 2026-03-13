'use client'

import { motion } from 'framer-motion'
import { type PartnerConfig, platformStats } from '@/lib/presentation-data'
import { images } from '@/lib/images'

const stats = [
  { value: platformStats.registeredUsers, label: 'Users' },
  { value: platformStats.peakMAU, label: 'Monthly Active' },
  { value: platformStats.under34, label: 'Under 34' },
  { value: platformStats.countries, label: 'Countries' },
]

export function SectionHero({ partner }: { partner: PartnerConfig }) {
  const isPortfolio = partner.isPortfolio && partner.portfolioBrands
  const subtitle = partner.heroSubtitle || 'Golf-specific activation and customer progression built around verified golfers.'

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ background: `radial-gradient(ellipse 80% 60% at 30% 40%, ${partner.primaryColor}, transparent)` }} />

      <div className="relative z-10 w-content w-full px-5 md:px-12 py-16 md:py-24">
        {/* Header bar */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-between mb-20 md:mb-32">
          <img src={images.logo} alt="GolfN" className="h-10 md:h-14 w-auto" />
          {partner.agencyLogoUrl ? (
            <div className="flex items-center gap-3">
              <span className="text-[#52525B] text-base">Prepared for</span>
              <img src={partner.agencyLogoUrl} alt={partner.agencyName || ''} className="h-8 md:h-10 w-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
            </div>
          ) : (
            <span className="text-[#8C8C8C] text-lg">Prepared for <span className="text-white font-semibold">{partner.partnerName}</span></span>
          )}
        </motion.div>

        {/* Giant headline */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.8 }}>
          <h1 className="font-display text-[3.5rem] md:text-[7rem] lg:text-[8.5rem] leading-[0.85] tracking-tight mb-8">
            {isPortfolio ? (<>Portfolio<br /><span className="text-gradient">Partnership</span></>) : (<>Partnership<br /><span className="text-gradient">Proposal</span></>)}
          </h1>
          <p className="text-xl md:text-2xl text-[#B0B0B4] max-w-2xl leading-relaxed font-light">
            {subtitle}
          </p>
        </motion.div>

        {/* Stat strip — compact horizontal row */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-14 md:mt-20 flex flex-wrap gap-6 md:gap-12">
          {stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-2">
              <span className="text-3xl md:text-4xl font-bold font-mono" style={{ color: partner.primaryColor }}>{s.value}</span>
              <span className="text-base md:text-lg text-[#71717A] font-medium">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Portfolio brand logos — slim row */}
        {isPortfolio && partner.portfolioBrands && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-12 md:mt-16 flex items-center gap-8 md:gap-12">
            {partner.portfolioBrands.map((brand) => (
              <div key={brand.slug} className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ background: brand.color }} />
                <img src={brand.logoUrl} alt={brand.name} className="h-6 md:h-8 w-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.75 }} />
              </div>
            ))}
          </motion.div>
        )}

        {/* Single brand logo */}
        {!isPortfolio && partner.logoUrl && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-12 md:mt-16 flex items-center gap-4">
            <div className="h-px w-12" style={{ background: partner.primaryColor }} />
            <img src={partner.logoUrl} alt={partner.partnerName} className="h-8 md:h-10 w-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.7 }} />
          </motion.div>
        )}
      </div>
    </section>
  )
}
