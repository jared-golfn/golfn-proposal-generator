'use client'

import { motion } from 'framer-motion'
import { Rocket, Target, Radio, Globe, ArrowRight } from 'lucide-react'
import { Fade } from './Fade'

const phases = [
  {
    number: 1,
    icon: Rocket,
    title: 'Sweepstakes',
    label: 'Build the Cohort',
    description: 'We run a Cabot Citrus Farms sweepstakes inside GolfN. Prize is a stay-and-play package at CCF. This does two things: it puts Cabot in front of our entire user base, and it builds a cohort of golfers who raised their hand and said "I am interested in Cabot."',
    stats: [
      { value: '107,000+', label: 'registered users see the campaign' },
      { value: '34.2%', label: 'average sweepstakes entry rate' },
      { value: '53%', label: 'entry rate on Miura wedge sweepstakes' },
    ],
    detail: 'A stay-and-play package is a significantly more aspirational prize than equipment. Every user who enters gives us permission to market to them. That is the cohort.',
  },
  {
    number: 2,
    icon: Target,
    title: 'Targeted Campaign',
    label: 'Activate the Cohort',
    description: 'Once the sweepstakes closes, we activate two segments with personalized in-app messages. Not a banner ad. A targeted, branded Cabot message that matches your positioning.',
    segments: [
      {
        name: 'Segment A: Florida Locals',
        detail: 'Golfers who could drive to CCF on a weekend.',
        stats: [
          '592 in Orlando DMA',
          '479 in Tampa-St. Pete',
          '283 in Jacksonville',
          '1,378 total within ~100 miles of Lecanto',
        ],
      },
      {
        name: 'Segment B: Sweepstakes Entrants',
        detail: 'Anyone who entered the CCF sweepstakes but does not live in Florida. They expressed interest. We follow up with a direct offer.',
      },
    ],
    detail: '48.5% of our Florida golfers play at private, semi-private, or resort courses. These are not budget golfers. They are your customers.',
  },
  {
    number: 3,
    icon: Radio,
    title: 'Geo-Fenced Push Notifications',
    label: 'Fill Last-Minute Tee Times',
    description: 'Any GolfN user within 50 to 100 miles of Cabot Citrus Farms gets a real-time push notification when you have availability to fill.',
    detail: 'Sunday morning, 6 open tee times? We push it to every GolfN user in range. This is not a campaign with a start and end date. It is infrastructure. Whenever a user enters the radius, whenever you have inventory, the two connect.',
    stats: [
      { value: '1,378', label: 'users in the corridor now' },
      { value: '7%', label: 'growth in 3 days' },
      { value: '500+', label: 'new users per day nationally' },
    ],
  },
]

export function CabotPitchFlow() {
  return (
    <>
      {/* THREE PHASES */}
      <section id="the-plan" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Fade>
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-3">The Plan</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-4">
              Three phases to fill<br /><span className="text-[#00ff9d]">tee times at CCF</span>
            </h2>
            <p className="text-lg text-[#9ca3af] max-w-2xl mb-12">
              Each phase builds on the last. The sweepstakes creates the audience. The targeted campaign activates it. The push notifications make it permanent.
            </p>
          </Fade>

          <div className="space-y-8">
            {phases.map((phase, i) => {
              const Icon = phase.icon
              return (
                <Fade key={phase.number} delay={i * 0.1}>
                  <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
                    <div className="p-8 md:p-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[#00ff9d]/10 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-[#00ff9d]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-mono text-[#00ff9d] uppercase tracking-[0.2em]">Phase {phase.number}</span>
                            <span className="text-xs font-mono text-[#4b5563] uppercase tracking-wider">{phase.label}</span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white">{phase.title}</h3>
                        </div>
                      </div>

                      <p className="text-base md:text-lg text-[#d1d5db] leading-8 mb-6 max-w-3xl">{phase.description}</p>

                      {/* Phase 1 stats */}
                      {phase.stats && !phase.segments && (
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {phase.stats.map((s) => (
                            <div key={s.label} className="bg-[#0f1217] rounded-xl p-4">
                              <p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d] mb-1">{s.value}</p>
                              <p className="text-sm text-[#6b7280]">{s.label}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Phase 2 segments */}
                      {phase.segments && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          {phase.segments.map((seg) => (
                            <div key={seg.name} className="bg-[#0f1217] rounded-xl p-6">
                              <p className="text-lg font-bold text-white mb-2">{seg.name}</p>
                              <p className="text-sm text-[#9ca3af] mb-3">{seg.detail}</p>
                              {seg.stats && (
                                <div className="space-y-1.5">
                                  {seg.stats.map((s) => (
                                    <div key={s} className="flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] shrink-0" />
                                      <span className="text-sm text-[#d1d5db]">{s}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Phase 3 stats */}
                      {phase.stats && phase.segments === undefined && phase.number === 3 && (
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {phase.stats.map((s) => (
                            <div key={s.label} className="bg-[#0f1217] rounded-xl p-4">
                              <p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d] mb-1">{s.value}</p>
                              <p className="text-sm text-[#6b7280]">{s.label}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {phase.detail && (
                        <p className="text-sm text-[#9ca3af] leading-7 max-w-3xl italic">{phase.detail}</p>
                      )}
                    </div>
                  </div>
                </Fade>
              )
            })}
          </div>
        </div>
      </section>

      {/* THE MODEL */}
      <section id="the-model" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Fade>
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-3">The Model</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-10">
              Zero risk.<br /><span className="text-[#00ff9d]">Pay for performance.</span>
            </h2>
          </Fade>

          <Fade delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-8">
                <p className="text-xs font-mono text-[#00ff9d] uppercase tracking-[0.2em] mb-4">Phase 1: Sweepstakes</p>
                <p className="text-4xl font-mono font-bold text-[#00ff9d] mb-2">$0</p>
                <p className="text-lg text-white font-medium mb-3">Zero cost beyond the prize</p>
                <p className="text-sm text-[#9ca3af] leading-7">You provide the stay-and-play package. We provide the audience and execution. The sweepstakes runs to our entire user base at no additional cost to you.</p>
              </div>
              <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-8">
                <p className="text-xs font-mono text-[#00ff9d] uppercase tracking-[0.2em] mb-4">Phase 2: Targeted Campaign</p>
                <p className="text-4xl font-mono font-bold text-[#00ff9d] mb-2">Per Action</p>
                <p className="text-lg text-white font-medium mb-3">Cost-per-engagement</p>
                <p className="text-sm text-[#9ca3af] leading-7">You pay when a user takes action, not when they see an impression. Tee time availability, seasonal rates, whatever offer you want in front of them.</p>
              </div>
              <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-8">
                <p className="text-xs font-mono text-[#00ff9d] uppercase tracking-[0.2em] mb-4">Phase 3: Geo-Fenced Push</p>
                <p className="text-4xl font-mono font-bold text-[#00ff9d] mb-2">Always On</p>
                <p className="text-lg text-white font-medium mb-3">Infrastructure, not a campaign</p>
                <p className="text-sm text-[#9ca3af] leading-7">Runs continuously. Whenever a user enters the radius and you have inventory, the two connect. Pay-per-engagement -- if it does not perform, it costs you nothing.</p>
              </div>
            </div>
          </Fade>

          <Fade delay={0.2}>
            <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-8 md:p-10">
              <p className="text-lg md:text-xl text-[#d1d5db] leading-9">
                Start with the sweepstakes. <span className="text-white font-semibold">You provide the prize package, we provide the audience and execution.</span> If the results are there, we layer on the targeted campaign and push notifications. If they are not, you are out nothing but a stay-and-play package.
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* CABOT AT LARGE */}
      <section id="cabot-global" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Fade>
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-[#00ff9d]" />
                <p className="text-xs font-mono text-[#00ff9d] uppercase tracking-[0.2em]">Phase 2 Conversation</p>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Cabot at Large</h3>
              <p className="text-base md:text-lg text-[#9ca3af] leading-8 mb-6 max-w-3xl">
                {"Citrus Farms is the local play. Cabot's global properties -- Cape Breton, Saint Lucia, St Andrews, Revelstoke -- are a different golfer making a different decision. We have that golfer too."}
              </p>

              <div className="bg-[#0f1217] rounded-xl p-6 mb-6">
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-mono font-bold text-[#00ff9d]">107,000+</p>
                    <p className="text-sm text-[#6b7280]">Registered golfers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-mono font-bold text-[#00ff9d]">57</p>
                    <p className="text-sm text-[#6b7280]">Countries</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-mono font-bold text-[#00ff9d]">28,000+</p>
                    <p className="text-sm text-[#6b7280]">Monthly active</p>
                  </div>
                </div>
                <div className="border-t border-[#2a3347] pt-5">
                  <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.2em] mb-4">Users near Cabot properties</p>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                    <div className="text-center">
                      <p className="text-xl font-mono font-bold text-white">5,000</p>
                      <p className="text-xs text-[#6b7280]">United Kingdom</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-mono font-bold text-white">2,957</p>
                      <p className="text-xs text-[#6b7280]">Australia</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-mono font-bold text-white">2,886</p>
                      <p className="text-xs text-[#6b7280]">South Africa</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-mono font-bold text-white">1,341</p>
                      <p className="text-xs text-[#6b7280]">Canada</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-mono font-bold text-white">1,186</p>
                      <p className="text-xs text-[#6b7280]">New Zealand</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-mono font-bold text-[#00ff9d]">1,844</p>
                      <p className="text-xs text-[#6b7280]">Private club members</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#6b7280] leading-7 max-w-3xl">
                {"We build a \"Cabot Private Select\" cohort -- private or resort home course, high engagement, multi-state or international round history. These users do not get a sweepstakes. They get an exclusive, invite-only experience. The kind of thing that feels like a concierge reached out, not an ad. Different conversation. Let's start with CCF."}
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* CTA */}
      <section id="next-steps" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <Fade>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-6">
              The numbers are moving fast.
            </h2>
            <p className="text-lg md:text-xl text-[#9ca3af] max-w-2xl mx-auto mb-4 leading-8">
              6,284 new users last week. Weekly rounds played hit 3,109 -- up 4.7x in 10 consecutive weeks of growth. Florida is our fourth largest state.
            </p>
            <p className="text-xl md:text-2xl text-[#d1d5db] font-medium mb-10">
              Happy to walk through any of this on a call.<br />Let us know what makes sense as a starting point.
            </p>
            <a href="mailto:jared@golfn.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00ff9d] text-[#0f1217] font-bold text-lg hover:bg-[#00ff9d]/90 transition-colors">
              Get in Touch <ArrowRight className="w-5 h-5" />
            </a>
          </Fade>
        </div>
      </section>
    </>
  )
}
