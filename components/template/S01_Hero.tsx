'use client'

import { motion } from 'framer-motion'
import type { PartnerData, PlatformKPI } from '@/lib/template-types'
import { images } from '@/lib/images'

const defaultKPIs: PlatformKPI[] = [
  { label: 'Registered Golfers', value: '100,000+' },
  { label: 'Peak Monthly Active', value: '28,060' },
  { label: 'Under 34', value: '56%' },
  { label: 'Countries', value: '57' },
]

export function S01_Hero({ partner }: { partner: PartnerData }) {
  const email = partner.contactEmail || 'jared@golfn.com'
  const subtitle = partner.heroSubtitle || 'GolfN helps brands create awareness, identify real user interest, build qualified audience cohorts, and continue activating those users through measurable follow-on campaigns.'

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 opacity-[0.06]" style={{ background: `radial-gradient(ellipse 70% 50% at 20% 50%, ${partner.primaryColor}, transparent)` }} />
      <div className="absolute inset-0 opacity-[0.03]" style={{ background: `radial-gradient(ellipse 50% 40% at 80% 30%, ${partner.secondaryColor}, transparent)` }} />

      <div className="relative z-10 w-content w-full px-5 md:px-12 py-16 md:py-24">
        {/* Header bar */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="flex items-center justify-between mb-24 md:mb-32">
          <img src={images.logo} alt="GolfN" className="h-9 md:h-12 w-auto" />
          {partner.agencyLogoUrl ? (
            <div className="flex items-center gap-3">
              <span className="text-[#6b7280] text-sm">Prepared for</span>
              <img src={partner.agencyLogoUrl} alt={partner.agencyName || ''} className="h-7 md:h-9 w-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
            </div>
          ) : partner.partnerLogoUrl ? (
            <div className="flex items-center gap-3">
              <span className="text-[#6b7280] text-sm">Prepared for</span>
              <img src={partner.partnerLogoUrl} alt={partner.partnerName} className="h-7 md:h-9 w-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
            </div>
          ) : (
            <span className="text-[#6b7280] text-sm">Prepared for <span className="text-white font-medium">{partner.partnerName}</span></span>
          )}
        </motion.div>

        {/* Headline */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <h1 className="font-display text-[2.75rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[0.9] tracking-tight mb-8">
            Launch premium golf<br />campaigns that create<br /><span className="text-gradient">qualified demand</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-lg md:text-xl text-[#9ca3af] max-w-2xl leading-relaxed mb-10"
        >
          {subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap items-center gap-4 mb-16 md:mb-20">
          <a
            href={`mailto:${email}?subject=Partnership%20Proposal%20%E2%80%94%20${encodeURIComponent(partner.partnerName)}`}
            className="px-8 py-4 rounded-xl font-semibold text-base transition-all hover:scale-[1.02]"
            style={{ background: `linear-gradient(135deg, ${partner.primaryColor}, ${partner.secondaryColor})`, color: '#0f1217' }}
          >
            Request a Proposal
          </a>
          {partner.bookingUrl && (
            <a href={partner.bookingUrl} target="_blank" rel="noopener" className="px-8 py-4 rounded-xl font-semibold text-base border border-[#2a2f38] text-white hover:bg-[#161a21] transition-all">
              Book a Walkthrough
            </a>
          )}
          <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-medium hover:underline transition-colors" style={{ color: partner.primaryColor }}>
            See How It Works &darr;
          </button>
        </motion.div>

        {/* KPI strip */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="flex flex-wrap gap-8 md:gap-14">
          {defaultKPIs.map((kpi) => (
            <div key={kpi.label}>
              <span className="text-2xl md:text-3xl font-bold font-mono" style={{ color: partner.primaryColor }}>{kpi.value}</span>
              <span className="block text-xs md:text-sm text-[#6b7280] mt-1">{kpi.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
