'use client'

import { motion } from 'framer-motion'
import { type PartnerConfig, platformStats } from '@/lib/presentation-data'

const statCards = [
  { value: platformStats.registeredUsers, label: 'Registered Users', sub: platformStats.monthlyGrowth + ' growth' },
  { value: platformStats.engagedUsers, label: 'Engaged Users', sub: platformStats.engagedLabel },
  { value: platformStats.under34, label: 'Under 34', sub: 'Core demographic' },
  { value: platformStats.avgMonthlyLogins, label: 'Monthly Logins', sub: 'Per user average' },
  { value: platformStats.adEligibleViews, label: 'Ad-Eligible Views', sub: 'Per engaged user' },
  { value: platformStats.countries, label: 'Countries', sub: 'Global reach' },
]

export function HeroSection({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col justify-center">
      {/* Ambient glow — subtle, not grid */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.04]"
        style={{ background: `radial-gradient(ellipse 80% 60% at 20% 30%, ${partner.primaryColor}, transparent)` }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
        style={{ background: `radial-gradient(ellipse 60% 50% at 80% 70%, ${partner.secondaryColor}, transparent)` }}
      />

      <div className="section-padding relative z-10 max-w-6xl mx-auto w-full">
        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-24"
        >
          <div className="flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="url(#gn)" />
              <text x="7" y="22" fill="#0A0A0B" fontFamily="Outfit" fontWeight="700" fontSize="16">G</text>
              <defs>
                <linearGradient id="gn" x1="0" y1="0" x2="32" y2="32">
                  <stop stopColor="#17A455" />
                  <stop offset="1" stopColor="#8DC54A" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-body font-semibold text-lg tracking-wide">GolfN</span>
          </div>
          <div className="text-golfn-white-faint text-sm">
            Prepared for <span className="text-golfn-white font-semibold">{partner.partnerName}</span>
          </div>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mb-10"
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] leading-[0.92] mb-8 tracking-tight">
            Partnership<br />
            <span className="text-gradient">Structure</span>
          </h1>
          <p className="text-xl md:text-2xl text-golfn-white-dim max-w-2xl leading-relaxed font-light">
            A premium golf-specific demand generation, activation, and customer progression
            platform built around verified golfers, first-party intent signals, and measurable
            downstream action.
          </p>
        </motion.div>

        {/* What GolfN is NOT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-3 mb-24"
        >
          {['Not a sponsorship', 'Not a sweepstakes company', 'Not a CPM product', 'Not a passive affiliate channel'].map((item) => (
            <span key={item} className="text-sm font-mono text-golfn-white-faint border border-golfn-grid rounded-full px-5 py-2">
              {item}
            </span>
          ))}
        </motion.div>

        {/* Stat grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-5"
        >
          {statCards.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
              className="card p-7 transition-all duration-300"
            >
              <div
                className="text-4xl md:text-5xl font-bold font-mono mb-2 tracking-tight"
                style={{ color: i === 0 ? partner.primaryColor : undefined }}
              >
                {stat.value}
              </div>
              <div className="text-base font-semibold text-golfn-white-dim mb-1">{stat.label}</div>
              <div className="text-sm text-golfn-white-faint">{stat.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner category */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 flex items-center gap-4"
        >
          <div
            className="h-px flex-1 max-w-[80px]"
            style={{ background: `linear-gradient(90deg, ${partner.primaryColor}, transparent)` }}
          />
          <span className="text-base text-golfn-white-faint">
            {partner.productCategory} — {partner.productNames.join(' · ')}
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-golfn-white-faint font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-10"
          style={{ background: `linear-gradient(to bottom, ${partner.primaryColor}80, transparent)` }}
        />
      </motion.div>
    </section>
  )
}
