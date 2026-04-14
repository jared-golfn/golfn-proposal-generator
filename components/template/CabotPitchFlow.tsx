'use client'

import { motion } from 'framer-motion'
import { Rocket, Target, Radio, Globe, ArrowRight, RefreshCw, Calendar, Zap, MapPin } from 'lucide-react'
import { Fade } from './Fade'

export function CabotPitchFlow() {
  return (
    <>
      {/* THE PLAN */}
      <section id="the-plan" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Fade>
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-3">The Plan</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-4">
              Three phases to fill<br /><span className="text-[#00ff9d]">tee times at CCF</span>
            </h2>
            <p className="text-lg text-[#9ca3af] max-w-2xl mb-12">
              Each phase builds on the last. The sweepstakes creates the audience. The targeted campaign activates it. The geo-fenced push keeps them coming back.
            </p>
          </Fade>

          {/* PHASE 1: SWEEPSTAKES */}
          <Fade>
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden mb-8">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#00ff9d]/10 flex items-center justify-center shrink-0">
                    <Rocket className="w-6 h-6 text-[#00ff9d]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#00ff9d] uppercase tracking-[0.2em]">Phase 1</span>
                      <span className="text-xs font-mono text-[#4b5563] uppercase tracking-wider">Build the Cohort</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Sweepstakes</h3>
                  </div>
                </div>

                <p className="text-base md:text-lg text-[#d1d5db] leading-8 mb-6 max-w-3xl">{"We run a Cabot Citrus Farms sweepstakes inside GolfN. Prize is a stay-and-play package at CCF. This does two things: it puts Cabot in front of our entire user base, and it builds a cohort of golfers who raised their hand and said \"I am interested in Cabot.\""}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#0f1217] rounded-xl p-4">
                    <p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d] mb-1">107,000+</p>
                    <p className="text-sm text-[#6b7280]">registered users see the campaign</p>
                  </div>
                  <div className="bg-[#0f1217] rounded-xl p-4">
                    <p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d] mb-1">34.2%</p>
                    <p className="text-sm text-[#6b7280]">average sweepstakes entry rate</p>
                  </div>
                  <div className="bg-[#0f1217] rounded-xl p-4">
                    <p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d] mb-1">53%</p>
                    <p className="text-sm text-[#6b7280]">entry rate on Miura wedge sweepstakes</p>
                  </div>
                </div>

                <p className="text-sm text-[#9ca3af] leading-7 max-w-3xl italic">A stay-and-play package is a significantly more aspirational prize than equipment. Every user who enters gives us permission to market to them. That is the cohort.</p>
              </div>
            </div>
          </Fade>

          {/* PHASE 2: TARGETED CAMPAIGN */}
          <Fade delay={0.1}>
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden mb-8">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#00ff9d]/10 flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-[#00ff9d]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#00ff9d] uppercase tracking-[0.2em]">Phase 2</span>
                      <span className="text-xs font-mono text-[#4b5563] uppercase tracking-wider">Activate the Cohort</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Targeted Campaign</h3>
                  </div>
                </div>

                <p className="text-base md:text-lg text-[#d1d5db] leading-8 mb-6 max-w-3xl">Once the sweepstakes closes, we activate two segments with personalized in-app messages. Not a banner ad. A targeted, branded Cabot message that matches your positioning.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#0f1217] rounded-xl p-6">
                    <p className="text-lg font-bold text-white mb-2">Segment A: Florida Locals</p>
                    <p className="text-sm text-[#9ca3af] mb-3">Golfers who could drive to CCF on a weekend.</p>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] shrink-0" /><span className="text-sm text-[#d1d5db]">592 in Orlando DMA</span></div>
                      <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] shrink-0" /><span className="text-sm text-[#d1d5db]">479 in Tampa-St. Pete</span></div>
                      <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] shrink-0" /><span className="text-sm text-[#d1d5db]">283 in Jacksonville</span></div>
                      <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] shrink-0" /><span className="text-sm text-[#d1d5db]">1,378 total within ~100 miles of Lecanto</span></div>
                    </div>
                  </div>
                  <div className="bg-[#0f1217] rounded-xl p-6">
                    <p className="text-lg font-bold text-white mb-2">Segment B: Sweepstakes Entrants</p>
                    <p className="text-sm text-[#9ca3af]">Anyone who entered the CCF sweepstakes but does not live in Florida. They expressed interest. We follow up with a direct offer.</p>
                  </div>
                </div>

                <p className="text-sm text-[#9ca3af] leading-7 max-w-3xl italic">48.5% of our Florida golfers play at private, semi-private, or resort courses. These are not budget golfers. They are your customers.</p>
              </div>
            </div>
          </Fade>

          {/* PHASE 3: GEO-FENCED PUSH -- THREE TIER ROLLOUT */}
          <Fade delay={0.2}>
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden mb-8">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#00ff9d]/10 flex items-center justify-center shrink-0">
                    <Radio className="w-6 h-6 text-[#00ff9d]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#00ff9d] uppercase tracking-[0.2em]">Phase 3</span>
                      <span className="text-xs font-mono text-[#4b5563] uppercase tracking-wider">Keep Them Coming Back</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Geo-Fenced Push Notifications</h3>
                  </div>
                </div>

                <p className="text-base md:text-lg text-[#d1d5db] leading-8 mb-4 max-w-3xl">Every qualified golfer within driving distance of Lecanto enters a persistent retargeting sequence until they book. You tell us your soft windows and approve the copy. We handle the rest.</p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-[#0f1217] rounded-xl p-4">
                    <p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d] mb-1">1,378</p>
                    <p className="text-sm text-[#6b7280]">users in the corridor now</p>
                  </div>
                  <div className="bg-[#0f1217] rounded-xl p-4">
                    <p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d] mb-1">500+</p>
                    <p className="text-sm text-[#6b7280]">new users per day nationally</p>
                  </div>
                  <div className="bg-[#0f1217] rounded-xl p-4">
                    <p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d] mb-1">Always On</p>
                    <p className="text-sm text-[#6b7280]">infrastructure, not a campaign</p>
                  </div>
                </div>

                {/* GEO-FENCE EXPLAINER -- unmissable info box */}
                <div className="border-2 border-[#00ff9d] rounded-2xl p-6 md:p-8 mb-8 bg-[#00ff9d]/5 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-[#00ff9d] shrink-0" />
                    <h4 className="text-lg md:text-xl font-bold text-white">How the Geo-Fence Works</h4>
                  </div>
                  <p className="text-base md:text-lg text-white font-medium leading-8 mb-4">
                    {"Any GolfN user who enters a 50-100 mile radius of Lecanto automatically enters the push sequence. Not just Florida residents."}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-[#0f1217]/80 rounded-xl px-4 py-3">
                      <p className="text-sm text-white font-semibold">New York golfer</p>
                      <p className="text-xs text-[#9ca3af]">Visiting Orlando for a week. Opens the app. CCF is in front of them.</p>
                    </div>
                    <div className="bg-[#0f1217]/80 rounded-xl px-4 py-3">
                      <p className="text-sm text-white font-semibold">Canadian snowbird</p>
                      <p className="text-xs text-[#9ca3af]">Wintering in Tampa. Crosses the radius. Enters the sequence automatically.</p>
                    </div>
                    <div className="bg-[#0f1217]/80 rounded-xl px-4 py-3">
                      <p className="text-sm text-white font-semibold">UK golfer on a Florida trip</p>
                      <p className="text-xs text-[#9ca3af]">Lands in Orlando. Has the app. Gets a Cabot push before they unpack.</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#00ff9d] font-semibold mt-4">The geo-fence is the filter. The tiers below are what happens after they enter it.</p>
                </div>

                {/* TIER 1 */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <RefreshCw className="w-5 h-5 text-[#00ff9d] shrink-0" />
                    <h4 className="text-xl md:text-2xl font-bold text-white">Tier 1: Weekly Retargeting Drip</h4>
                    <span className="text-xs font-mono text-[#00ff9d] bg-[#00ff9d]/10 px-2 py-1 rounded-md uppercase tracking-wider shrink-0">Launch with this</span>
                  </div>
                  <div className="bg-[#0f1217] rounded-xl p-6">
                    <p className="text-base text-[#d1d5db] leading-8 mb-4">You tell us your consistently soft windows. We set up recurring geo-fenced pushes targeting every qualified user within 50-100 miles of Lecanto.</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] shrink-0 mt-2.5" />
                        <p className="text-sm text-[#d1d5db] leading-7"><span className="text-white font-semibold">Every 7 days</span> -- each qualified user in range gets a push with rotating copy. They never see the same message twice in a row.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] shrink-0 mt-2.5" />
                        <p className="text-sm text-[#d1d5db] leading-7"><span className="text-white font-semibold">Click but no book?</span> -- interval shortens to 3 days. They showed intent. We follow up while it is warm.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] shrink-0 mt-2.5" />
                        <p className="text-sm text-[#d1d5db] leading-7"><span className="text-white font-semibold">Booked?</span> -- suppressed immediately. No more availability pushes for someone who already has a tee time.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] shrink-0 mt-2.5" />
                        <p className="text-sm text-[#d1d5db] leading-7"><span className="text-white font-semibold">60 days after booking</span> -- converted users re-enter the sequence for repeat rounds. Now proven customers, not cold leads.</p>
                      </div>
                    </div>
                    <p className="text-sm text-[#6b7280] mt-4 italic">{"Example: \"Tee times available Monday through Wednesday at Cabot Citrus Farms. Book through GolfN.\" You approve the copy once. It runs until you change it."}</p>
                  </div>
                </div>

                {/* TIER 2 */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-5 h-5 text-[#00ff9d] shrink-0" />
                    <h4 className="text-xl md:text-2xl font-bold text-white">Tier 2: Seasonal Campaign Bursts</h4>
                  </div>
                  <div className="bg-[#0f1217] rounded-xl p-6">
                    <p className="text-base text-[#d1d5db] leading-8 mb-4">You know your shoulder seasons and slow periods. We layer promotional campaigns on top of the Tier 1 drip during those windows.</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] shrink-0 mt-2.5" />
                        <p className="text-sm text-[#d1d5db] leading-7"><span className="text-white font-semibold">Higher intensity</span> -- 2 pushes per week for 2-3 weeks with a promotional rate or package attached.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] shrink-0 mt-2.5" />
                        <p className="text-sm text-[#d1d5db] leading-7"><span className="text-white font-semibold">Wider audience</span> -- targets geo-fenced locals AND nationwide sweepstakes entrants who expressed interest but live outside Florida.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] shrink-0 mt-2.5" />
                        <p className="text-sm text-[#d1d5db] leading-7"><span className="text-white font-semibold">Planned or ad-hoc</span> -- schedule seasonal pushes in advance, or ping us when you see a rough stretch coming. We turn copy around in 24 hours.</p>
                      </div>
                    </div>
                    <p className="text-sm text-[#6b7280] mt-4 italic">{"Example: \"Summer rates at Cabot Citrus Farms -- 18 holes starting at $X. Limited availability through GolfN.\""}</p>
                  </div>
                </div>

                {/* TIER 3 */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-5 h-5 text-[#00ff9d] shrink-0" />
                    <h4 className="text-xl md:text-2xl font-bold text-white">Tier 3: Real-Time Inventory Integration</h4>
                    <span className="text-xs font-mono text-[#4b5563] bg-[#1a1f2e] border border-[#2a3347] px-2 py-1 rounded-md uppercase tracking-wider shrink-0">Future State</span>
                  </div>
                  <div className="bg-[#0f1217] rounded-xl p-6">
                    <p className="text-base text-[#d1d5db] leading-8 mb-4">If Tier 1 and Tier 2 deliver, we connect directly to your booking system and the pushes fire based on actual real-time availability.</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4b5563] shrink-0 mt-2.5" />
                        <p className="text-sm text-[#9ca3af] leading-7">User enters the geo-fence on a Saturday morning. CCF has 4 open afternoon slots. The push goes out automatically.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4b5563] shrink-0 mt-2.5" />
                        <p className="text-sm text-[#9ca3af] leading-7">{"That's engineering work and it's not the Phase 1 conversation. But it is where this goes if the numbers are there."}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Fade>
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
                <p className="text-sm text-[#9ca3af] leading-7">Runs continuously. Retargeting drip with frequency caps, creative rotation, and behavioral triggers. Pay-per-engagement -- if it does not perform, it costs you nothing.</p>
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
              6,284 new users last week. Weekly rounds played hit 3,556 -- up 41.6% week over week. Florida is our fourth largest state.
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
