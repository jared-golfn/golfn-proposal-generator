'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { type PartnerConfig, platformStats } from '@/lib/presentation-data'
import { images } from '@/lib/images'

const stats = [
  { value: platformStats.registeredUsers, label: 'Registered Users', sub: platformStats.monthlyGrowth + ' growth', highlight: true },
  { value: platformStats.powerUsers, label: 'Power Users', sub: platformStats.powerUsersLabel },
  { value: platformStats.peakMAU, label: 'Peak MAU', sub: 'Monthly active users' },
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

export function HeroSection({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ background: `radial-gradient(ellipse 70% 50% at 20% 40%, ${partner.primaryColor}, transparent)` }} />

      <div className="relative z-10 max-w-[960px] mx-auto w-full px-5 md:px-12 py-16 md:py-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex items-center justify-between mb-16 md:mb-28">
          <img src={images.logo} alt="GolfN" className="h-8 md:h-12 w-auto" />
          <span className="text-[#8C8C8C] text-sm md:text-lg">Prepared for <span className="text-white font-semibold">{partner.partnerName}</span></span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-12">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}>
            <h1 className="font-display text-[3rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[0.88] tracking-tight mb-6 md:mb-8">
              Partnership<br /><span className="text-gradient">Structure</span>
            </h1>
            <p className="text-lg md:text-xl text-[#B0B0B4] max-w-lg leading-relaxed font-light">
              Golf-specific demand generation, activation, and customer progression built around verified golfers and measurable downstream action.
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
            <motion.div key={s.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.06 }} className="bg-[#161618] border border-[#2A2A2C] rounded-2xl p-5 md:p-8">
              <div className="text-2xl md:text-4xl font-bold font-mono tracking-tight mb-1" style={{ color: s.highlight ? partner.primaryColor : '#FAFAFA' }}>{s.value}</div>
              <div className="text-sm md:text-base font-semibold text-[#A1A1AA]">{s.label}</div>
              <div className="text-xs md:text-sm text-[#71717A] mt-0.5">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="mt-12 md:mt-16 flex items-center gap-4">
          <div className="h-px w-12 md:w-16" style={{ background: partner.primaryColor }} />
          <span className="text-sm md:text-base text-[#71717A]">{partner.productCategory} — {partner.productNames.join(' · ')}</span>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center hidden md:block">
        <span className="text-xs text-[#71717A] font-mono tracking-[0.3em]">SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-px h-8 mx-auto mt-2" style={{ background: `linear-gradient(to bottom, ${partner.primaryColor}60, transparent)` }} />
      </motion.div>
    </section>
  )
}
