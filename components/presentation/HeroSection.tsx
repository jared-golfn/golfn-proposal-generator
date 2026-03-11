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
    <section className="min-h-screen bg-grid relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[200px] opacity-10"
        style={{ background: `radial-gradient(circle, ${partner.primaryColor}, transparent)` }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[160px] opacity-8"
        style={{ background: `radial-gradient(circle, ${partner.secondaryColor}, transparent)` }}
      />

      <div className="section-padding relative z-10 max-w-7xl mx-auto">
        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-20"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg"
              style={{ background: `linear-gradient(135deg, ${partner.primaryColor}, ${partner.secondaryColor})` }}
            />
            <span className="font-display text-xl tracking-wide">GolfN</span>
          </div>
          <div className="text-golfn-white-faint text-sm">
            Prepared for <span className="text-golfn-white font-medium">{partner.partnerName}</span>
          </div>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
            Partnership<br />
            <span className="text-gradient">Structure</span>
          </h1>
          <p className="text-lg md:text-xl text-golfn-white-dim max-w-2xl leading-relaxed">
            GolfN is a premium golf-specific demand generation, activation, and customer progression
            platform built around verified golfers, first-party intent signals, and measurable
            downstream action.
          </p>
        </motion.div>

        {/* What GolfN is NOT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-3 mb-20"
        >
          {['Not a sponsorship', 'Not a sweepstakes company', 'Not a CPM product', 'Not a passive affiliate channel'].map((item) => (
            <span key={item} className="text-xs font-mono text-golfn-white-faint border border-golfn-grid rounded-full px-4 py-1.5">
              {item}
            </span>
          ))}
        </motion.div>

        {/* Stat grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {statCards.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              className="card p-6 group hover:border-golfn-muted transition-colors duration-300"
            >
              <div
                className="text-3xl md:text-4xl font-bold font-mono mb-1"
                style={{ color: i === 0 ? partner.primaryColor : undefined }}
              >
                {stat.value}
              </div>
              <div className="text-sm font-medium text-golfn-white-dim mb-1">{stat.label}</div>
              <div className="text-xs text-golfn-white-faint">{stat.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner category */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 flex items-center gap-4"
        >
          <div
            className="h-px flex-1 max-w-[100px]"
            style={{ background: `linear-gradient(90deg, ${partner.primaryColor}, transparent)` }}
          />
          <span className="text-sm text-golfn-white-faint">
            {partner.productCategory} — {partner.productNames.join(' · ')}
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-golfn-white-faint font-mono">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8"
          style={{ background: `linear-gradient(to bottom, ${partner.primaryColor}, transparent)` }}
        />
      </motion.div>
    </section>
  )
}
