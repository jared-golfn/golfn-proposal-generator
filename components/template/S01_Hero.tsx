'use client'

import { motion } from 'framer-motion'
import { Flag, Users, Zap } from 'lucide-react'
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
      <div className="absolute inset-0 opacity-[0.07]" style={{ background: 'radial-gradient(ellipse 60% 50% at 15% 50%, #001a14, transparent)' }} />
      <div className="absolute inset-0 opacity-[0.04]" style={{ background: 'radial-gradient(ellipse 40% 40% at 85% 30%, #00ff9d, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-16 md:py-24">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="flex items-center justify-between mb-24 md:mb-32">
          <img src={images.logo} alt="GolfN" className="h-9 md:h-12 w-auto" />
          {partner.agencyLogoUrl ? (
            <div className="flex items-center gap-3">
              <span className="text-[#6b7280] text-base">Prepared for</span>
              <img src={partner.agencyLogoUrl} alt={partner.agencyName || ''} className="h-7 md:h-9 w-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
            </div>
          ) : partner.partnerLogoUrl ? (
            <div className="flex items-center gap-3">
              <span className="text-[#6b7280] text-base">Prepared for</span>
              <img src={partner.partnerLogoUrl} alt={partner.partnerName} className="h-7 md:h-9 w-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
            </div>
          ) : (
            <span className="text-[#6b7280] text-base">Prepared for <span className="text-white font-medium">{partner.partnerName}</span></span>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-extrabold leading-[0.92] tracking-tight mb-8"
            >
              Launch premium golf<br />campaigns that create<br /><span className="text-gradient">qualified demand</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-8 mb-10"
            >
              {subtitle}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap items-center gap-4 mb-16">
              <a
                href={`mailto:${email}?subject=Partnership%20Proposal%20%E2%80%94%20${encodeURIComponent(partner.partnerName)}`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-[1.03] glow-green"
                style={{ background: 'linear-gradient(135deg, #00ff9d, #17A455)', color: '#0f1217' }}
              >
                <Flag className="w-5 h-5" />
                Request a Proposal
              </a>
              {partner.bookingUrl && (
                <a href={partner.bookingUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg border border-[#2a3347] text-white hover:bg-[#1a1f2e] transition-all">
                  <Users className="w-5 h-5" />
                  Book a Walkthrough
                </a>
              )}
              <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-1.5 text-base font-medium hover:underline transition-colors text-[#00ff9d]">
                <Zap className="w-4 h-4" />
                See How It Works
              </button>
            </motion.div>
          </div>

          {/* GALVIN GREEN WATERPROOF JACKET PRIZE MOCKUP */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 1 }}
            animate={{ opacity: 1, y: 0, rotate: 2 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-10 blur-[80px] opacity-[0.15] rounded-full" style={{ background: 'radial-gradient(circle, #00ff9d, #001a14, transparent)' }} />
              {/* GALVIN GREEN: Replace with in-app sweepstakes card showing GORE-TEX jacket prize */}
              <img src={images.cobraSweeps} alt="Campaign creative" className="relative w-52 md:w-64 lg:w-72 rounded-[24px] glow-green" style={{ filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.7))' }} />
              {/* GALVIN GREEN: Replace with Galvin Green product offer card */}
              <motion.img
                src={images.srixonAd1}
                alt="In-app campaign"
                className="absolute -left-12 md:-left-16 top-1/3 w-28 md:w-36 rounded-xl shadow-2xl border border-[#2a3347]"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))' }}
              />
              <motion.div
                className="absolute -right-6 md:-right-10 bottom-12 bg-[#1a1f2e] border border-[#2a3347] rounded-xl px-4 py-3 shadow-xl"
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              >
                <p className="text-[10px] font-mono text-[#6b7280] uppercase tracking-wider">Qualified Cohort</p>
                <p className="text-xl font-bold text-[#00ff9d]">2,847 golfers</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} className="mt-8 flex flex-wrap gap-8 md:gap-14">
          {defaultKPIs.map((kpi) => (
            <div key={kpi.label}>
              <span className="text-2xl md:text-3xl font-bold font-mono text-[#00ff9d]">{kpi.value}</span>
              <span className="block text-base text-[#6b7280] mt-1">{kpi.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
