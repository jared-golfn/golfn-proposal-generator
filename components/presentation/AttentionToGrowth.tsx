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
    bullets: ['Creates awareness', 'Captures verified interest', 'Establishes first qualified audience signals'],
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
    why: 'The campaign does not end when the sweepstakes ends. The cohort keeps compounding.',
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

function PhaseCard({ phase, index, partner }: { phase: typeof phases[0]; index: number; partner: PartnerConfig }) {
  return (
    <div
      className={`bg-[#131315] border rounded-2xl p-8 xl:p-10 flex flex-col transition-all hover:border-[#3A3A3F] ${phase.isIgnition ? 'border-[#3A3A3F]' : 'border-[#2A2A2C]'}`}
      style={{ boxShadow: phase.isIgnition ? `0 0 50px ${partner.primaryColor}12, 0 0 100px ${partner.primaryColor}06` : `0 0 30px ${partner.primaryColor}04` }}
    >
      <div className="flex justify-center -mt-14 mb-5 max-lg:hidden">
        <div className="w-5 h-5 rounded-full border-2" style={{ background: index === 0 ? partner.primaryColor : '#131315', borderColor: partner.primaryColor }} />
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className={`shrink-0 rounded-xl flex items-center justify-center ${phase.isIgnition ? 'w-12 lg:w-16 h-12 lg:h-16' : 'w-11 lg:w-14 h-11 lg:h-14'}`} style={{ background: `${partner.primaryColor}${phase.isIgnition ? '18' : '10'}`, border: `1px solid ${partner.primaryColor}${phase.isIgnition ? '35' : '20'}` }}>
          <div className={phase.isIgnition ? 'w-7 lg:w-9 h-7 lg:h-9' : 'w-6 lg:w-8 h-6 lg:h-8'}><PhaseIcon type={phase.icon} color={partner.primaryColor} /></div>
        </div>
        <div>
          <span className="font-mono font-bold block text-lg lg:text-2xl" style={{ color: partner.primaryColor, opacity: 0.4 }}>{phase.number}</span>
          <span className="font-mono text-[#71717A] tracking-wider uppercase text-xs lg:text-sm">{phase.label}</span>
        </div>
      </div>

      {phase.isIgnition && (
        <div className="mb-3">
          <span className="text-[9px] lg:text-xs font-mono tracking-wider px-2 lg:px-3 py-1 lg:py-1.5 rounded-md" style={{ background: `${partner.primaryColor}15`, color: partner.primaryColor, border: `1px solid ${partner.primaryColor}25` }}>ATTENTION ENGINE</span>
        </div>
      )}

      <h3 className="font-bold text-white leading-snug text-base lg:text-xl mb-2 lg:mb-3">{phase.headline}</h3>
      <p className="text-[#C4C4C8] leading-relaxed text-sm lg:text-base mb-3 lg:mb-4">{phase.body}</p>

      <div className="space-y-1.5 lg:space-y-2 mb-4 lg:mb-5">
        {phase.bullets.map((b) => (
          <div key={b} className="flex items-start gap-2.5">
            <div className="rounded-full shrink-0 w-1.5 lg:w-2 h-1.5 lg:h-2 mt-[7px] lg:mt-[8px]" style={{ background: partner.primaryColor }} />
            <span className="text-[#E4E4E7] font-semibold text-sm lg:text-base">{b}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-4 border-t-2" style={{ borderTopColor: `${partner.primaryColor}25` }}>
        <p className="leading-relaxed text-sm lg:text-base"><span className="font-bold text-white">Why it matters: </span><span className="text-[#C4C4C8]">{phase.why}</span></p>
      </div>
    </div>
  )
}

export function AttentionToGrowth({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="py-20 md:py-32">
      <div className="w-content px-5 md:px-12 mb-10 md:mb-14">
        <Fade>
          <span className="font-mono text-sm text-[#71717A] tracking-[0.2em] uppercase">The Growth Engine</span>
          <h2 className="font-display text-3xl md:text-5xl mt-3 mb-4 leading-[0.95]">How GolfN Turns Attention<br /><span className="text-gradient">Into Qualified Growth</span></h2>
          <p className="text-base md:text-xl text-[#C4C4C8] max-w-2xl leading-[1.75] mb-5 font-medium">The launch experience creates awareness, reveals who is responding, and gives GolfN the signal needed to build and expand a qualified audience over time.</p>
        </Fade>

        <Fade delay={0.1}>
          <div className="bg-[#161618] border border-[#2A2A2C] rounded-2xl p-5 md:p-8 border-l-[3px] max-w-3xl" style={{ borderLeftColor: partner.primaryColor }}>
            <p className="text-base md:text-lg text-[#D4D4D8] leading-[1.7] font-medium"><span className="font-bold text-white">The launch sweepstakes is not just a promotional moment.</span> It is the attention engine that helps GolfN identify who is responding and where the campaign can scale next.</p>
          </div>
        </Fade>
      </div>

      <div className="w-content-wider px-4 md:px-6">
        <Fade delay={0.15}>
          <div className="flex items-center justify-center gap-1 mb-6 lg:mb-8 flex-wrap">
            {transformSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-1">
                <span className="text-xs md:text-base font-bold tracking-wide px-3 py-1.5 md:px-6 md:py-3 rounded-lg md:rounded-xl bg-[#131315] border border-[#2A2A2C]" style={{ color: i === 0 ? partner.primaryColor : i === transformSteps.length - 1 ? '#FAFAFA' : '#C4C4C8' }}>{step}</span>
                {i < transformSteps.length - 1 && (
                  <svg width="24" height="14" viewBox="0 0 24 14" fill="none" className="shrink-0 mx-0.5">
                    <path d="M0 7h16" stroke={partner.primaryColor} strokeWidth="2" strokeOpacity="0.3" />
                    <path d="M14 3l4 4-4 4" stroke={partner.primaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </Fade>

        {/* Single responsive card grid — no duplication */}
        <Fade delay={0.2}>
          <div className="relative">
            <div className="absolute top-[80px] left-[5%] right-[5%] h-[2px] z-0 max-lg:hidden" style={{ background: `linear-gradient(90deg, ${partner.primaryColor}50, ${partner.primaryColor}25, ${partner.primaryColor}25, ${partner.primaryColor}50)` }} />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-5">
              {phases.map((phase, i) => <PhaseCard key={phase.number} phase={phase} index={i} partner={partner} />)}
            </div>
          </div>
        </Fade>

        <Fade delay={0.35}>
          <div className="mt-10 md:mt-14">
            <p className="text-sm md:text-base font-mono text-[#71717A] tracking-wider uppercase mb-5 text-center font-semibold">What this gives your brand</p>
            <div className="flex flex-wrap justify-center gap-3">
              {buyerBenefits.map((benefit) => (
                <div key={benefit} className="px-5 py-3 md:px-7 md:py-3.5 rounded-xl bg-[#131315] border border-[#2A2A2C] text-sm md:text-base text-[#E4E4E7] font-semibold">{benefit}</div>
              ))}
            </div>
          </div>
        </Fade>
      </div>

      <div className="w-content px-5 md:px-12 mt-10 md:mt-14">
        <Fade delay={0.4}>
          <div className="bg-[#0F0F10] border border-[#2A2A2C] rounded-2xl px-6 py-5 md:px-10 md:py-7 text-center" style={{ boxShadow: `0 0 40px ${partner.primaryColor}06` }}>
            <p className="text-base md:text-xl text-[#C4C4C8] leading-[1.7] font-medium"><span className="text-white font-bold">In simple terms:</span> GolfN uses real attention and participation data to identify not just who responded, but who is most likely to respond next.</p>
          </div>
        </Fade>
      </div>
    </section>
  )
}
