'use client'

import { motion } from 'framer-motion'
import { type PartnerConfig, platformStats } from '@/lib/presentation-data'

const stats = [
  { value: platformStats.registeredUsers, label: 'Registered Users', sub: platformStats.monthlyGrowth + ' growth', highlight: true },
  { value: platformStats.engagedUsers, label: 'Engaged Users', sub: platformStats.engagedLabel },
  { value: platformStats.under34, label: 'Under 34', sub: 'Core demographic' },
  { value: platformStats.avgMonthlyLogins, label: 'Avg. Logins/Mo', sub: 'Per user' },
  { value: platformStats.adEligibleViews, label: 'Ad Views/User/Mo', sub: 'Per engaged user' },
  { value: platformStats.countries, label: 'Countries', sub: 'Global reach' },
]

export function HeroSection({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 opacity-[0.035]" style={{ background: `radial-gradient(ellipse 70% 50% at 25% 40%, ${partner.primaryColor}, transparent)` }} />

      <div className="relative z-10 max-w-5xl mx-auto w-full px-6 md:px-12 py-20">
        {/* Header */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex items-center justify-between mb-32">
          <div className="flex items-center gap-3">
            <img src="https://golfn.com/golfn-logo.svg" alt="GolfN" className="h-8" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
            <span className="font-body font-bold text-xl tracking-wide">GolfN</span>
          </div>
          <span className="text-golfn-faint text-base">Prepared for <span className="text-golfn-white font-semibold">{partner.partnerName}</span></span>
        </motion.div>

        {/* Title */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
          <h1 className="font-display text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] leading-[0.88] tracking-tight mb-10">
            Partnership<br /><span className="text-gradient">Structure</span>
          </h1>
          <p className="text-xl md:text-2xl text-golfn-dim max-w-2xl leading-relaxed font-light">
            A premium golf-specific demand generation, activation, and customer progression platform built around verified golfers, first-party intent signals, and measurable downstream action.
          </p>
        </motion.div>

        {/* Not statements */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-3 mt-10 mb-28">
          {['Not a sponsorship', 'Not a sweepstakes company', 'Not a CPM product', 'Not a passive affiliate channel'].map((t) => (
            <span key={t} className="text-sm font-mono text-golfn-faint border border-golfn-border rounded-full px-5 py-2">{t}</span>
          ))}
        </motion.div>

        {/* Stats — 3x2 grid with contained text */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="grid grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.07 }}
              className="bg-golfn-card border border-golfn-border rounded-2xl p-6 md:p-8"
            >
              <div className="text-3xl md:text-4xl font-bold font-mono tracking-tight mb-2" style={{ color: s.highlight ? partner.primaryColor : 'var(--color-golfn-white)' }}>
                {s.value}
              </div>
              <div className="text-base font-semibold text-golfn-dim">{s.label}</div>
              <div className="text-sm text-golfn-faint mt-0.5">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner line */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="mt-16 flex items-center gap-4">
          <div className="h-px w-16" style={{ background: partner.primaryColor }} />
          <span className="text-base text-golfn-faint">{partner.productCategory} — {partner.productNames.join(' · ')}</span>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
        <span className="text-xs text-golfn-faint font-mono tracking-[0.3em]">SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-px h-8 mx-auto mt-2" style={{ background: `linear-gradient(to bottom, ${partner.primaryColor}60, transparent)` }} />
      </motion.div>
    </section>
  )
}
