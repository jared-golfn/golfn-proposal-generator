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
    headline: 'Why the launch sweepstakes matters',
    body: 'The launch sweepstakes creates immediate awareness and gives golfers a reason to engage. More importantly, it generates the first wave of verified behavioral signals from users who view, engage with, and enter the experience.',
    bullets: ['Creates awareness', 'Drives engagement', 'Captures verified interest', 'Establishes first audience signals'],
    why: 'This is the attention engine that helps GolfN identify which users are actually responding to the campaign.',
    icon: 'launch',
  },
  {
    number: '02',
    label: 'Audience Qualification',
    headline: 'Turning attention into a qualified cohort',
    body: 'Once golfers begin interacting with the campaign, GolfN identifies the users showing the strongest campaign-relevant interest. This builds a partner-specific audience cohort based on real in-app behavior, not broad assumptions.',
    bullets: ['Isolates high-interest users', 'Defines a campaign-specific cohort', 'Filters signal from noise', 'Creates a smarter audience foundation'],
    why: 'Instead of treating all traffic the same, GolfN starts learning which golfers are actually most likely to care.',
    icon: 'filter',
  },
  {
    number: '03',
    label: 'Cohort Expansion',
    headline: 'Finding more users who look like your responders',
    body: 'Once the initial cohort is established, GolfN continues identifying and qualifying new users who exhibit similar patterns of interest as they enter the ecosystem over time.',
    bullets: ['Expands the audience over time', 'Brings in more qualified users', 'Improves targeting efficiency', 'Extends campaign value beyond launch'],
    why: 'The campaign does not end when the sweepstakes ends. The initial attention engine helps GolfN keep identifying additional potential customers long after the launch window.',
    icon: 'expand',
  },
  {
    number: '04',
    label: 'Progression & Conversion',
    headline: 'Moving qualified users toward measurable action',
    body: 'With a qualified audience in place, GolfN continues moving users through education, activation, incentives, content, check-ins, and conversion-oriented experiences.',
    bullets: ['Nurtures qualified users', 'Increases conversion likelihood', 'Supports adoption and repeat engagement', 'Creates measurable downstream action'],
    why: 'GolfN is not just generating attention. It is using that attention to build a smarter audience and then move that audience toward outcomes that matter.',
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
      return (<svg viewBox="0 0 48 48" fill="none" className={cls}><circle cx="24" cy="24" r="5" fill={color} /><circle cx="12" cy="16" r="3.5" stroke={color} strokeWidth="2" /><circle cx="36" cy="16" r="3.5" stroke={color} strokeWidth="2" /><circle cx="12" cy="34" r="3.5" stroke={color} strokeWidth="2" /><circle cx="36" cy="34" r="3.5" stroke={color} strokeWidth="2" /><circle cx="6" cy="24" r="2.5" stroke={color} strokeWidth="1.5" strokeOpacity="0.5" /><circle cx="42" cy="24" r="2.5" stroke={color} strokeWidth="1.5" strokeOpacity="0.5" /><path d="M20 22l-5-4M28 22l5-4M20 27l-5 5M28 27l5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" /></svg>)
    case 'convert':
      return (<svg viewBox="0 0 48 48" fill="none" className={cls}><path d="M12 36l8-8 6 6 10-14" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M30 20h6v6" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><circle cx="24" cy="24" r="20" stroke={color} strokeWidth="1.5" strokeOpacity="0.2" /></svg>)
    default:
      return null
  }
}

function ConnectorArrow({ color }: { color: string }) {
  return (
    <div className="hidden lg:flex items-center justify-center w-12 shrink-0">
      <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
        <path d="M0 12h32" stroke={color} strokeWidth="2" strokeOpacity="0.3" />
        <path d="M28 6l6 6-6 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
      </svg>
    </div>
  )
}

function MobileConnector({ color }: { color: string }) {
  return (
    <div className="flex lg:hidden justify-center py-2">
      <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
        <path d="M12 0v32" stroke={color} strokeWidth="2" strokeOpacity="0.3" />
        <path d="M6 28l6 6 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
      </svg>
    </div>
  )
}

export function AttentionToGrowth({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="py-20 md:py-32">
      <div className="w-content px-5 md:px-12 mb-12 md:mb-16">
        <Fade>
          <span className="font-mono text-sm text-[#71717A] tracking-[0.2em] uppercase">The Growth Engine</span>
          <h2 className="font-display text-3xl md:text-5xl mt-3 mb-5 leading-[0.95]">How GolfN Turns Attention<br /><span className="text-gradient">Into Qualified Growth</span></h2>
          <p className="text-base md:text-lg text-[#B0B0B4] max-w-2xl leading-[1.75] mb-6">The launch experience does more than create awareness. It gives GolfN the verified behavioral signal needed to identify responsive users, build a campaign-specific audience cohort, and continue expanding that audience over time.</p>
        </Fade>

        <Fade delay={0.1}>
          <div className="bg-[#161618] border border-[#2A2A2C] rounded-2xl p-6 md:p-8 border-l-[3px] max-w-3xl" style={{ borderLeftColor: partner.primaryColor }}>
            <p className="text-base md:text-lg text-[#D4D4D8] leading-[1.75]"><span className="font-semibold text-white">The launch sweepstakes is not just a promotional moment.</span> It is the attention engine that helps GolfN identify who is responding, what type of user is most engaged, and where the campaign can scale from there.</p>
          </div>
        </Fade>
      </div>

      {/* Desktop: horizontal 4-phase flow */}
      <div className="w-content-wider px-4 md:px-6">
        <Fade delay={0.2}>
          <div className="hidden lg:flex items-stretch">
            {phases.map((phase, i) => (
              <div key={phase.number} className="contents">
                <div className="flex-1 bg-[#131315] border border-[#2A2A2C] rounded-2xl p-8 xl:p-10 flex flex-col transition-all hover:border-[#3A3A3F] group" style={{ boxShadow: `0 0 40px ${partner.primaryColor}04` }}>
                  {/* Icon + Number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 shrink-0 rounded-xl flex items-center justify-center" style={{ background: `${partner.primaryColor}10`, border: `1px solid ${partner.primaryColor}20` }}>
                      <div className="w-8 h-8"><PhaseIcon type={phase.icon} color={partner.primaryColor} /></div>
                    </div>
                    <div>
                      <span className="font-mono text-2xl font-bold block" style={{ color: partner.primaryColor, opacity: 0.4 }}>{phase.number}</span>
                      <span className="text-sm font-mono text-[#71717A] tracking-wider uppercase">{phase.label}</span>
                    </div>
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">{phase.headline}</h3>

                  {/* Body */}
                  <p className="text-base text-[#A1A1AA] leading-relaxed mb-5">{phase.body}</p>

                  {/* Bullets */}
                  <div className="space-y-2 mb-6">
                    {phase.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: partner.primaryColor }} />
                        <span className="text-sm text-[#D4D4D8] font-medium">{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Why it matters */}
                  <div className="mt-auto pt-5 border-t border-[#2A2A2C]">
                    <span className="text-xs font-mono text-[#52525B] tracking-wider uppercase block mb-2">Why it matters</span>
                    <p className="text-sm text-[#B0B0B4] leading-relaxed font-medium">{phase.why}</p>
                  </div>
                </div>

                {i < phases.length - 1 && <ConnectorArrow color={partner.primaryColor} />}
              </div>
            ))}
          </div>
        </Fade>

        {/* Mobile: vertical stacked timeline */}
        <div className="lg:hidden">
          {phases.map((phase, i) => (
            <div key={phase.number}>
              <Fade delay={0.1 + i * 0.08}>
                <div className="bg-[#131315] border border-[#2A2A2C] rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center" style={{ background: `${partner.primaryColor}10`, border: `1px solid ${partner.primaryColor}20` }}>
                      <div className="w-7 h-7"><PhaseIcon type={phase.icon} color={partner.primaryColor} /></div>
                    </div>
                    <div>
                      <span className="font-mono text-xl font-bold block" style={{ color: partner.primaryColor, opacity: 0.4 }}>{phase.number}</span>
                      <span className="text-xs font-mono text-[#71717A] tracking-wider uppercase">{phase.label}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">{phase.headline}</h3>
                  <p className="text-base text-[#A1A1AA] leading-relaxed mb-4">{phase.body}</p>

                  <div className="space-y-2 mb-5">
                    {phase.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: partner.primaryColor }} />
                        <span className="text-sm text-[#D4D4D8] font-medium">{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#2A2A2C]">
                    <span className="text-xs font-mono text-[#52525B] tracking-wider uppercase block mb-2">Why it matters</span>
                    <p className="text-sm text-[#B0B0B4] leading-relaxed font-medium">{phase.why}</p>
                  </div>
                </div>
              </Fade>
              {i < phases.length - 1 && <MobileConnector color={partner.primaryColor} />}
            </div>
          ))}
        </div>
      </div>

      {/* Closing line */}
      <div className="w-content px-5 md:px-12 mt-12 md:mt-16">
        <Fade delay={0.4}>
          <p className="text-base md:text-lg text-[#8C8C8C] max-w-2xl leading-[1.75]"><span className="text-[#D4D4D8] font-semibold">In simple terms:</span> GolfN uses real attention and participation data to identify not just who responded, but who is most likely to respond next.</p>
        </Fade>
      </div>
    </section>
  )
}
