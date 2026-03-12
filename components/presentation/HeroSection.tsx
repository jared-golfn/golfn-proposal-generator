'use client'

import { motion } from 'framer-motion'
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

export function HeroSection({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ background: `radial-gradient(ellipse 70% 50% at 20% 40%, ${partner.primaryColor}, transparent)` }} />

      <div className="relative z-10 max-w-[960px] mx-auto w-full px-6 md:px-12 py-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex items-center justify-between mb-28">
          <img src={images.logo} alt="GolfN" className="h-10 md:h-12 w-auto" />
          <span className="text-[#8C8C8C] text-base">Prepared for <span className="text-white font-semibold">{partner.partnerName}</span></span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}>
            <h1 className="font-display text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[0.88] tracking-tight mb-8">
              Partnership<br /><span className="text-gradient">Structure</span>
            </h1>
            <p className="text-xl text-[#B0B0B4] max-w-lg leading-relaxed font-light">
              A premium golf-specific demand generation, activation, and customer progression platform built around verified golfers, first-party intent signals, and measurable downstream action.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0, rotate: 2 }} transition={{ duration: 1, delay: 0.4 }} className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-8 blur-[80px] opacity-[0.12] rounded-full" style={{ background: partner.primaryColor }} />
              <img src={images.srixonAd1} alt="GolfN app" className="relative w-64 md:w-72 rounded-[28px]" style={{ filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.7))' }} />
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-3 mb-24">
          {['Not a sponsorship', 'Not a sweepstakes company', 'Not a CPM product', 'Not a passive affiliate channel'].map((t) => (
            <span key={t} className="text-sm font-mono text-[#71717A] border border-[#2A2A2C] rounded-full px-5 py-2">{t}</span>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.06 }} className="bg-[#161618] border border-[#2A2A2C] rounded-2xl p-6 md:p-7">
              <div className="text-3xl md:text-4xl font-bold font-mono tracking-tight mb-1" style={{ color: s.highlight ? partner.primaryColor : '#FAFAFA' }}>{s.value}</div>
              <div className="text-[15px] font-semibold text-[#A1A1AA]">{s.label}</div>
              <div className="text-sm text-[#71717A] mt-0.5">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="mt-16 flex items-center gap-4">
          <div className="h-px w-16" style={{ background: partner.primaryColor }} />
          <span className="text-base text-[#71717A]">{partner.productCategory} — {partner.productNames.join(' · ')}</span>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
        <span className="text-xs text-[#71717A] font-mono tracking-[0.3em]">SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-px h-8 mx-auto mt-2" style={{ background: `linear-gradient(to bottom, ${partner.primaryColor}60, transparent)` }} />
      </motion.div>
    </section>
  )
}
