'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, ShieldCheck } from 'lucide-react'
import { images } from '@/lib/images'
import { stats } from '@/lib/canonical-stats'

const CALENDLY_URL = 'https://calendly.com/golfn'

export function PublicHero() {
  return (
    <section className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-[0.08]" style={{ background: 'radial-gradient(ellipse 60% 50% at 15% 50%, #001a14, transparent)' }} />
      <div className="absolute inset-0 opacity-[0.05]" style={{ background: 'radial-gradient(ellipse 50% 40% at 85% 30%, #00ff9d, transparent)' }} />

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-12 py-12 md:py-16" style={{ zIndex: 10 }}>
        {/* Top bar */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="flex items-center justify-between mb-16 md:mb-24 gap-4">
          <img src={images.logo} alt="GolfN" className="h-9 md:h-12 w-auto" />
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 text-sm text-[#9ca3af] hover:text-white transition-colors">
            <Calendar className="w-4 h-4" />
            Book 20 min with Jared
          </a>
        </motion.div>

        {/* Headline */}
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.95] tracking-tight mb-8 max-w-5xl">
          We didn&rsquo;t build a golf app.<br />
          <span className="text-gradient">We built the marketing<br />and data stack for golf.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} className="text-xl md:text-2xl text-[#9ca3af] mb-12 max-w-3xl leading-9">
          {stats.monthlyActiveUsers} verified golfers. {stats.monthlyLoginsPerUser} monthly logins. {stats.partnerSalesYearOne} moved for partners in under a year, with {stats.partnerSalesFourMonths} of that in just the last 4 months.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap items-center gap-4 mb-6">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00ff9d] text-[#0f1217] font-bold text-base hover:bg-[#00e68a] transition-colors">
            Book 20 minutes with Jared
            <ArrowRight className="w-4 h-4" />
          </a>
          <button onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 px-6 py-4 text-base font-semibold text-[#00ff9d] hover:underline">
            See your first campaign path
          </button>
        </motion.div>

        {/* Verified definition */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.6 }} className="flex items-start gap-3 max-w-3xl mt-4 mb-16">
          <ShieldCheck className="w-5 h-5 text-[#00ff9d] mt-0.5 shrink-0" />
          <p className="text-sm md:text-base text-[#9ca3af] leading-7">
            <span className="text-white font-semibold">Verified means</span> every user has completed a GPS-confirmed round inside the app. Not inferred. Not panel. Real golfers.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
