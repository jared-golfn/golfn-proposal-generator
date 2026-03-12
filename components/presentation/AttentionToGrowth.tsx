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
    body: 'The launch sweepstakes creates awareness and gives golfers a reason to engage. It also generates the first verified signals from users who view, engage with, and enter the experience.',
    bullets: ['Creates awareness', 'Captures verified interest', 'Establishes first audience signals'],
    why: 'This is the attention engine that shows GolfN which users are actually responding.',
    icon: 'launch',
    isIgnition: true,
  },
  {
    number: '02',
    label: 'Audience Qualification',
    headline: 'Signal becomes a qualified cohort',
    body: 'As golfers interact with the campaign, GolfN identifies the users showing the strongest partner-relevant interest. That creates a campaign-specific cohort based on real behavior, not assumptions.',
    bullets: ['Isolates high-interest users', 'Defines a campaign-specific cohort', 'Filters signal from noise'],
    why: 'Instead of treating all traffic the same, GolfN starts learning which golfers are most likely to care.',
    icon: 'filter',
  },
  {
    number: '03',
    label: 'Cohort Expansion',
    headline: 'The audience keeps growing after launch',
    body: 'Once the initial cohort is established, GolfN continues identifying new users who show similar patterns of interest over time.',
    bullets: ['Expands the audience over time', 'Brings in more qualified users', 'Extends campaign value beyond launch'],
    why: 'The campaign does not end when the sweepstakes ends. The initial attention engine keeps helping GolfN identify additional potential customers long after launch.',
    icon: 'expand',
  },
  {
    number: '04',
    label: 'Progression & Conversion',
    headline: 'Qualified users move toward measurable action',
    body: 'With a qualified audience in place, GolfN moves users through education, activation, incentives, and conversion-oriented experiences.',
    bullets: ['Nurtures qualified users', 'Increases conversion likelihood', 'Creates measurable downstream action'],
    why: 'GolfN is not just generating attention. It is turning that attention into outcomes that matter.',
    icon: 'convert',
  },
]

function PhaseIcon({ type, color }: { type: string; color: string }) {
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

const transformSteps = ['Attention', 'Qualification', 'Expansion', 'Action']

const buyerBenefits = [
  'Qualified audience creation',
  'Smarter targeting over time',
  'More efficient follow-on activation',
  'Measurable downstream progression',
]

function PhaseCard({ phase, index, partner, isMobile }: { phase: typeof phases[0]; index: number; partner: PartnerConfig; isMobile?: boolean }) {
  const p = isMobile ? 'p-6' : 'p-7 xl:p-9'
  return (
    <div
      className={`bg-[#131315] border rounded-2xl ${p} flex flex-col transition-all hover:border-[#3A3A3F] ${phase.isIgnition ? 'border-[#3A3A3F]' : 'border-[#2A2A2C]'}`}
      style={{ boxShadow: phase.isIgnition ? `0 0 50px ${partner.primaryColor}12, 0 0 100px ${partner.primaryColor}06` : `0 0 30px ${partner.primaryColor}04` }}
    >
      {/* Node dot — desktop only */}
      {!isMobile && (
        <div className="flex justify-center -mt-12 mb-4">
          <div className="w-5 h-5 rounded-full border-2" style={{ background: index === 0 ? partner.primaryColor : '#131315', borderColor: partner.primaryColor }} />
        </div>
      )}

      {/* Icon + Phase label */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`shrink-0 rounded-xl flex items-center justify-center ${phase.isIgnition ? (isMobile ? 'w-12 h-12' : 'w-14 h-14') : (isMobile ? 'w-11 h-11' : 'w-12 h-12')}`} style={{ background: `${partner.primaryColor}${phase.isIgnition ? '18' : '10'}`, border: `1px solid ${partner.primaryColor}${phase.isIgnition ? '35' : '20'}` }}>
          <div className={phase.isIgnition ? (isMobile ? 'w-7 h-7' : 'w-8 h-8') : (isMobile ? 'w-6 h-6' : 'w-7 h-7')}><PhaseIcon type={phase.icon} color={partner.primaryColor} /></div>
        </div>
        <div>
          <span className={`font-mono font-bold block ${isMobile ? 'text-lg' : 'text-xl'}`} style={{ color: partner.primaryColor, opacity: 0.4 }}>{phase.number}</span>
          <span className="text-xs font-mono text-[#71717A] tracking-wider uppercase">{phase.label}</span>
        </div>
        {phase.isIgnition && isMobile && <span className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded ml-auto" style={{ background: `${partner.primaryColor}15`, color: partner.primaryColor }}>ATTENTION ENGINE</span>}
      </div>

      {/* Ignition tag — desktop */}
      {phase.isIgnition && !isMobile && (
        <div className="mb-2">
          <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-md" style={{ background: `${partner.primaryColor}15`, color: partner.primaryColor, border: `1px solid ${partner.primaryColor}25` }}>ATTENTION ENGINE</span>
        </div>
      )}

      {/* Headline */}
      <h3 className={`font-bold text-white mb-2 leading-snug ${isMobile ? 'text-base' : 'text-lg xl:text-xl'}`}>{phase.headline}</h3>

      {/* Body */}
      <p className={`text-[#A1A1AA] leading-relaxed mb-3 ${isMobile ? 'text-sm' : 'text-sm xl:text-base'}`}>{phase.body}</p>

      {/* 3 Bullets */}
      <div className="space-y-1.5 mb-4">
        {phase.bullets.map((b) => (
          <div key={b} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0" style={{ background: partner.primaryColor }} />
            <span className="text-sm text-[#D4D4D8] font-medium">{b}</span>
          </div>
        ))}
      </div>

      {/* Why it matters — stronger treatment */}
      <div className="mt-auto pt-4 border-t-2 border-[#2A2A2C]" style={{ borderTopColor: `${partner.primaryColor}20` }}>
        <p className="text-sm leading-relaxed"><span className="font-bold text-white">Why it matters: </span><span className="text-[#B0B0B4]">{phase.why}</span></p>
      </div>
    </div>
  )
}

export function AttentionToGrowth({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="py-20 md:py-32">
      {/* Header — tightened */}
      <div className="w-content px-5 md:px-12 mb-10 md:mb-14">
        <Fade>
          <span className="font-mono text-sm text-[#71717A] tracking-[0.2em] uppercase">The Growth Engine</span>
          <h2 className="font-display text-3xl md:text-5xl mt-3 mb-4 leading-[0.95]">How GolfN Turns Attention<br /><span className="text-gradient">Into Qualified Growth</span></h2>
          <p className="text-base md:text-lg text-[#B0B0B4] max-w-2xl leading-[1.75] mb-5">GolfN uses the launch experience to capture verified behavioral signal, build a qualified audience cohort, and continue expanding that audience over time.</p>
        </Fade>

        <Fade delay={0.1}>
          <div className="bg-[#161618] border border-[#2A2A2C] rounded-2xl p-5 md:p-7 border-l-[3px] max-w-3xl" style={{ borderLeftColor: partner.primaryColor }}>
            <p className="text-base md:text-lg text-[#D4D4D8] leading-[1.7]"><span className="font-bold text-white">The sweepstakes is not just a promotional moment.</span> It is the attention engine that identifies who is responding, what type of user engages most, and where the campaign can scale.</p>
          </div>
        </Fade>
      </div>

      <div className="w-content-wider px-4 md:px-6">
        {/* Transformation strip */}
        <Fade delay={0.15}>
          <div className="flex items-center justify-center gap-1 mb-6 lg:mb-8 flex-wrap">
            {transformSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-1">
                <span className="text-xs md:text-base font-bold tracking-wide px-3 py-1.5 md:px-5 md:py-2.5 rounded-lg md:rounded-xl bg-[#131315] border border-[#2A2A2C]" style={{ color: i === 0 ? partner.primaryColor : i === transformSteps.length - 1 ? '#FAFAFA' : '#A1A1AA' }}>{step}</span>
                {i < transformSteps.length - 1 && (
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="shrink-0 mx-0.5">
                    <path d="M0 6h14" stroke={partner.primaryColor} strokeWidth="1.5" strokeOpacity="0.3" />
                    <path d="M12 2l4 4-4 4" stroke={partner.primaryColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </Fade>

        {/* Desktop: connected 4-phase engine */}
        <Fade delay={0.2}>
          <div className="hidden lg:block relative">
            {/* Continuous rail */}
            <div className="absolute top-[72px] left-[5%] right-[5%] h-[2px] z-0" style={{ background: `linear-gradient(90deg, ${partner.primaryColor}40, ${partner.primaryColor}20, ${partner.primaryColor}20, ${partner.primaryColor}40)` }} />
            <div className="relative z-10 grid grid-cols-4 gap-5">
              {phases.map((phase, i) => <PhaseCard key={phase.number} phase={phase} index={i} partner={partner} />)}
            </div>
          </div>
        </Fade>

        {/* Mobile: vertical stacked */}
        <div className="lg:hidden space-y-3">
          {phases.map((phase, i) => (
            <Fade key={phase.number} delay={0.1 + i * 0.08}>
              <PhaseCard phase={phase} index={i} partner={partner} isMobile />
            </Fade>
          ))}
        </div>

        {/* Buyer benefit strip */}
        <Fade delay={0.35}>
          <div className="mt-10 md:mt-12">
            <p className="text-sm font-mono text-[#71717A] tracking-wider uppercase mb-4 text-center">What this gives your brand</p>
            <div className="flex flex-wrap justify-center gap-2.5 md:gap-3">
              {buyerBenefits.map((benefit) => (
                <div key={benefit} className="px-4 py-2 md:px-6 md:py-3 rounded-xl bg-[#131315] border border-[#2A2A2C] text-sm md:text-base text-[#D4D4D8] font-medium">{benefit}</div>
              ))}
            </div>
          </div>
        </Fade>
      </div>

      {/* Closing — integrated summary band */}
      <div className="w-content px-5 md:px-12 mt-10 md:mt-14">
        <Fade delay={0.4}>
          <div className="bg-[#0F0F10] border border-[#2A2A2C] rounded-2xl px-6 py-5 md:px-8 md:py-6 text-center" style={{ boxShadow: `0 0 40px ${partner.primaryColor}04` }}>
            <p className="text-base md:text-lg text-[#A1A1AA] leading-[1.7]"><span className="text-white font-bold">In simple terms:</span> GolfN uses real attention and participation data to identify not just who responded, but who is most likely to respond next.</p>
          </div>
        </Fade>
      </div>
    </section>
  )
}
