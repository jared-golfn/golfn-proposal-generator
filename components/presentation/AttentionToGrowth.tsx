'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig } from '@/lib/presentation-data'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

const phases = [
  {
    number: '01',
    label: 'Launch & Attention',
    headline: 'The sweepstakes creates the first wave of signal',
    body: 'Immediate awareness gives golfers a reason to engage. Every view, entry, and interaction generates verified behavioral data GolfN can act on.',
    bullets: ['Creates awareness and engagement', 'Captures verified interest signals', 'Establishes the first audience data'],
    why: 'This is the attention engine that tells GolfN which users are actually responding.',
    icon: 'launch',
    isIgnition: true,
  },
  {
    number: '02',
    label: 'Audience Qualification',
    headline: 'Signal becomes a qualified cohort',
    body: 'GolfN isolates the users showing the strongest campaign-relevant interest and builds a partner-specific audience cohort from real behavior.',
    bullets: ['Isolates high-interest users', 'Builds a campaign-specific cohort', 'Filters signal from noise'],
    why: 'Instead of treating all traffic the same, GolfN learns which golfers are most likely to care.',
    icon: 'filter',
  },
  {
    number: '03',
    label: 'Cohort Expansion',
    headline: 'The audience keeps growing after launch',
    body: 'GolfN continues identifying new users who exhibit similar interest patterns as they enter the ecosystem, extending campaign value well beyond the launch window.',
    bullets: ['Expands the audience over time', 'Improves targeting efficiency', 'Extends value beyond launch'],
    why: 'The campaign does not end when the sweepstakes ends. The cohort keeps compounding.',
    icon: 'expand',
  },
  {
    number: '04',
    label: 'Progression & Conversion',
    headline: 'Qualified users move toward measurable action',
    body: 'With a qualified audience in place, GolfN moves users through education, activation, incentives, and conversion-oriented experiences.',
    bullets: ['Nurtures qualified users', 'Drives measurable conversion', 'Creates downstream action'],
    why: 'GolfN uses attention to build a smarter audience, then moves that audience toward outcomes.',
    icon: 'convert',
  },
]

function PhaseIcon({ type, color, size = 8 }: { type: string; color: string; size?: number }) {
  const cls = "w-full h-full"
  switch (type) {
    case 'launch':
      return (<svg viewBox="0 0 48 48" fill="none" className={cls}><circle cx="24" cy="24" r="8" stroke={color} strokeWidth="2.5" /><circle cx="24" cy="24" r="16" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 3" /><circle cx="24" cy="24" r="3" fill={color} /><path d="M24 4v6M24 38v6M4 24h6M38 24h6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" /></svg>)
    case 'filter':
      return (<svg viewBox="0 0 48 48" fill="none" className={cls}><path d="M8 12h32L28 26v10l-8 4V26L8 12z" stroke={color} strokeWidth="2.5" strokeLinejoin="round" /><circle cx="34" cy="8" r="3" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.5" /><circle cx="14" cy="8" r="2" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1" /><circle cx="24" cy="6" r="2.5" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1" /></svg>)
    case 'expand':
      return (<svg viewBox="0 0 48 48" fill="none" className={cls}><circle cx="24" cy="24" r="5" fill={color} /><circle cx="12" cy="16" r="3.5" stroke={color} strokeWidth="2" /><circle cx="36" cy="16" r="3.5" stroke={color} strokeWidth="2" /><circle cx="12" cy="34" r="3.5" stroke={color} strokeWidth="2" /><circle cx="36" cy="34" r="3.5" stroke={color} strokeWidth="2" /><path d="M20 22l-5-4M28 22l5-4M20 27l-5 5M28 27l5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" /></svg>)
    case 'convert':
      return (<svg viewBox="0 0 48 48" fill="none" className={cls}><path d="M12 36l8-8 6 6 10-14" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M30 20h6v6" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><circle cx="24" cy="24" r="20" stroke={color} strokeWidth="1.5" strokeOpacity="0.2" /></svg>)
    default:
      return null
  }
}

function MobileConnector({ color }: { color: string }) {
  return (
    <div className="flex lg:hidden justify-center py-1">
      <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
        <path d="M12 0v24" stroke={color} strokeWidth="2" strokeOpacity="0.25" />
        <path d="M7 20l5 5 5-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
      </svg>
    </div>
  )
}

const transformSteps = ['Attention', 'Qualification', 'Expansion', 'Action']

const buyerBenefits = [
  'Qualified audience creation',
  'Smarter targeting over time',
  'More efficient follow-on activation',
  'Measurable downstream progression',
]

export function AttentionToGrowth({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="py-20 md:py-32">
      {/* Header */}
      <div className="w-content px-5 md:px-12 mb-10 md:mb-14">
        <Fade>
          <span className="font-mono text-sm text-[#71717A] tracking-[0.2em] uppercase">The Growth Engine</span>
          <h2 className="font-display text-3xl md:text-5xl mt-3 mb-5 leading-[0.95]">How GolfN Turns Attention<br /><span className="text-gradient">Into Qualified Growth</span></h2>
          <p className="text-base md:text-lg text-[#B0B0B4] max-w-2xl leading-[1.75] mb-6">The launch experience does more than create awareness. It gives GolfN the verified behavioral signal needed to identify responsive users, build a qualified audience cohort, and continue expanding that audience over time.</p>
        </Fade>

        <Fade delay={0.1}>
          <div className="bg-[#161618] border border-[#2A2A2C] rounded-2xl p-6 md:p-8 border-l-[3px] max-w-3xl" style={{ borderLeftColor: partner.primaryColor }}>
            <p className="text-base md:text-lg text-[#D4D4D8] leading-[1.75]"><span className="font-bold text-white">The launch sweepstakes is not just a promotional moment.</span> It is the attention engine that helps GolfN identify who is responding, what type of user is most engaged, and where the campaign can scale from there.</p>
          </div>
        </Fade>
      </div>

      <div className="w-content-wider px-4 md:px-6">
        {/* Transformation strip — desktop only */}
        <Fade delay={0.15}>
          <div className="hidden lg:flex items-center justify-center gap-0 mb-8">
            <div className="flex items-center bg-[#131315] border border-[#2A2A2C] rounded-2xl overflow-hidden">
              {transformSteps.map((step, i) => (
                <div key={step} className="flex items-center">
                  {i > 0 && (
                    <svg width="28" height="20" viewBox="0 0 28 20" fill="none" className="shrink-0 -mx-px">
                      <path d="M0 10h20" stroke={partner.primaryColor} strokeWidth="1.5" strokeOpacity="0.3" />
                      <path d="M18 5l5 5-5 5" stroke={partner.primaryColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
                    </svg>
                  )}
                  <div className={`px-6 py-3.5 ${i === 0 ? 'pl-8' : ''} ${i === transformSteps.length - 1 ? 'pr-8' : ''}`}>
                    <span className="text-sm md:text-base font-bold tracking-wide" style={{ color: i === 0 ? partner.primaryColor : i === transformSteps.length - 1 ? '#FAFAFA' : '#A1A1AA' }}>{step}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fade>

        {/* Desktop: connected 4-phase engine */}
        <Fade delay={0.2}>
          <div className="hidden lg:block relative">
            {/* Continuous connection rail behind the cards */}
            <div className="absolute top-[72px] left-[5%] right-[5%] h-[2px] z-0" style={{ background: `linear-gradient(90deg, ${partner.primaryColor}40, ${partner.primaryColor}20, ${partner.primaryColor}20, ${partner.primaryColor}40)` }} />

            <div className="relative z-10 grid grid-cols-4 gap-5">
              {phases.map((phase, i) => (
                <div
                  key={phase.number}
                  className={`bg-[#131315] border rounded-2xl p-7 xl:p-9 flex flex-col transition-all hover:border-[#3A3A3F] ${phase.isIgnition ? 'border-[#3A3A3F]' : 'border-[#2A2A2C]'}`}
                  style={{
                    boxShadow: phase.isIgnition
                      ? `0 0 50px ${partner.primaryColor}12, 0 0 100px ${partner.primaryColor}06`
                      : `0 0 30px ${partner.primaryColor}04`,
                  }}
                >
                  {/* Node dot — connects to the rail */}
                  <div className="flex justify-center -mt-12 mb-4">
                    <div className="w-5 h-5 rounded-full border-2" style={{ background: i === 0 ? partner.primaryColor : '#131315', borderColor: partner.primaryColor }} />
                  </div>

                  {/* Icon + Phase */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`shrink-0 rounded-xl flex items-center justify-center ${phase.isIgnition ? 'w-14 h-14' : 'w-12 h-12'}`} style={{ background: `${partner.primaryColor}${phase.isIgnition ? '18' : '10'}`, border: `1px solid ${partner.primaryColor}${phase.isIgnition ? '35' : '20'}` }}>
                      <div className={phase.isIgnition ? 'w-8 h-8' : 'w-7 h-7'}><PhaseIcon type={phase.icon} color={partner.primaryColor} /></div>
                    </div>
                    <div>
                      <span className="font-mono text-xl font-bold block" style={{ color: partner.primaryColor, opacity: 0.4 }}>{phase.number}</span>
                      <span className="text-xs font-mono text-[#71717A] tracking-wider uppercase">{phase.label}</span>
                    </div>
                  </div>

                  {/* Ignition tag */}
                  {phase.isIgnition && (
                    <div className="mb-3">
                      <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-md" style={{ background: `${partner.primaryColor}15`, color: partner.primaryColor, border: `1px solid ${partner.primaryColor}25` }}>ATTENTION ENGINE</span>
                    </div>
                  )}

                  {/* Headline */}
                  <h3 className="text-lg xl:text-xl font-bold text-white mb-3 leading-snug">{phase.headline}</h3>

                  {/* Body — tightened */}
                  <p className="text-sm xl:text-base text-[#A1A1AA] leading-relaxed mb-4">{phase.body}</p>

                  {/* 3 Bullets max */}
                  <div className="space-y-1.5 mb-5">
                    {phase.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0" style={{ background: partner.primaryColor }} />
                        <span className="text-sm text-[#D4D4D8] font-medium">{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Why it matters — concise */}
                  <div className="mt-auto pt-4 border-t border-[#2A2A2C]">
                    <p className="text-sm text-[#B0B0B4] leading-relaxed"><span className="font-semibold text-[#D4D4D8]">Why:</span> {phase.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fade>

        {/* Mobile: vertical stacked timeline */}
        <div className="lg:hidden">
          {/* Mobile transformation strip */}
          <Fade delay={0.12}>
            <div className="flex items-center justify-center gap-1 mb-6 flex-wrap">
              {transformSteps.map((step, i) => (
                <div key={step} className="flex items-center gap-1">
                  <span className="text-xs font-bold tracking-wide px-2.5 py-1 rounded-lg bg-[#131315] border border-[#2A2A2C]" style={{ color: i === 0 ? partner.primaryColor : i === transformSteps.length - 1 ? '#FAFAFA' : '#A1A1AA' }}>{step}</span>
                  {i < transformSteps.length - 1 && <span className="text-[#52525B] text-xs">{'\u2192'}</span>}
                </div>
              ))}
            </div>
          </Fade>

          {phases.map((phase, i) => (
            <div key={phase.number}>
              <Fade delay={0.1 + i * 0.08}>
                <div className={`bg-[#131315] border rounded-2xl p-6 md:p-8 ${phase.isIgnition ? 'border-[#3A3A3F]' : 'border-[#2A2A2C]'}`} style={phase.isIgnition ? { boxShadow: `0 0 40px ${partner.primaryColor}10` } : {}}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center" style={{ background: `${partner.primaryColor}${phase.isIgnition ? '18' : '10'}`, border: `1px solid ${partner.primaryColor}20` }}>
                      <div className="w-6 h-6"><PhaseIcon type={phase.icon} color={partner.primaryColor} /></div>
                    </div>
                    <div>
                      <span className="font-mono text-lg font-bold block" style={{ color: partner.primaryColor, opacity: 0.4 }}>{phase.number}</span>
                      <span className="text-xs font-mono text-[#71717A] tracking-wider uppercase">{phase.label}</span>
                    </div>
                    {phase.isIgnition && <span className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded ml-auto" style={{ background: `${partner.primaryColor}15`, color: partner.primaryColor }}>ATTENTION ENGINE</span>}
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{phase.headline}</h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed mb-3">{phase.body}</p>

                  <div className="space-y-1.5 mb-4">
                    {phase.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0" style={{ background: partner.primaryColor }} />
                        <span className="text-sm text-[#D4D4D8] font-medium">{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#2A2A2C]">
                    <p className="text-sm text-[#B0B0B4] leading-relaxed"><span className="font-semibold text-[#D4D4D8]">Why:</span> {phase.why}</p>
                  </div>
                </div>
              </Fade>
              {i < phases.length - 1 && <MobileConnector color={partner.primaryColor} />}
            </div>
          ))}
        </div>

        {/* Buyer benefit strip */}
        <Fade delay={0.35}>
          <div className="mt-10 md:mt-12">
            <p className="text-sm font-mono text-[#71717A] tracking-wider uppercase mb-4 text-center">What this gives your brand</p>
            <div className="flex flex-wrap justify-center gap-3">
              {buyerBenefits.map((benefit) => (
                <div key={benefit} className="px-5 py-2.5 md:px-6 md:py-3 rounded-xl bg-[#131315] border border-[#2A2A2C] text-sm md:text-base text-[#D4D4D8] font-medium">{benefit}</div>
              ))}
            </div>
          </div>
        </Fade>
      </div>

      {/* Closing — integrated footer band */}
      <div className="w-content px-5 md:px-12 mt-12 md:mt-14">
        <Fade delay={0.4}>
          <div className="bg-[#0F0F10] border border-[#2A2A2C] rounded-2xl px-6 py-5 md:px-8 md:py-6 text-center" style={{ boxShadow: `0 0 40px ${partner.primaryColor}04` }}>
            <p className="text-base md:text-lg text-[#A1A1AA] leading-[1.75]"><span className="text-white font-bold">In simple terms:</span> GolfN uses real attention and participation data to identify not just who responded, but who is most likely to respond next.</p>
          </div>
        </Fade>
      </div>
    </section>
  )
}
