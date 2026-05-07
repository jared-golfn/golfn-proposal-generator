'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Eye, Users, TrendingUp, Zap, Target, ShoppingBag, ArrowRight, BarChart3, Video, Gift, ChevronDown, Check, X, Minus, MessageCircleQuestion, ShieldCheck, Package, Megaphone, DollarSign, Award } from 'lucide-react'
import { Fade } from './Fade'

const MAILTO = 'mailto:jared@golfn.com,scott@golfn.com?subject=PUTTR%20x%20GolfN%20Partnership'

/* ============================================================
   SECTION 1: THE CAMPAIGN
   ============================================================ */

const pylStats = [
  { value: '205,000+', label: 'Monthly Page Views', sub: 'Press Your Luck alone' },
  { value: '30,000', label: 'Verified Golfers in PYL', sub: 'Growing 30% month-over-month' },
  { value: '7x', label: 'Avg Monthly Visits', sub: 'Per user, habitual engagement' },
  { value: '30%', label: 'MoM Growth', sub: 'Audience compounds every month' },
]

function TheCampaign() {
  return (
    <section id="the-campaign" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-4">
            <Play className="w-5 h-5 text-[#00ff9d]" />
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">The Campaign</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[0.95] tracking-tight mb-5">
            Two phases. <span className="text-gradient">One closed ecosystem.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-8 mb-8">
            PUTTR enters Press Your Luck as a featured prize. 30,000 verified golfers play PYL every month, and that number is growing 30% month-over-month. The ones who want a PUTTR self-select by watching your video. Then we convert that intent into purchases.
          </p>
        </Fade>

        {/* PYL Stats */}
        <Fade delay={0.04}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
            {pylStats.map((m) => (
              <div key={m.label} className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl p-5 text-center">
                <p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d] mb-1">{m.value}</p>
                <p className="text-sm text-white font-semibold">{m.label}</p>
                <p className="text-xs text-[#6b7280] mt-0.5">{m.sub}</p>
              </div>
            ))}
          </div>
        </Fade>

        {/* Phase 1 */}
        <Fade delay={0.06}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00ff9d]/10 text-[#00ff9d] font-mono font-bold text-sm">1</div>
              <div>
                <p className="text-lg font-bold text-white">Press Your Luck Unveiling</p>
                <p className="text-sm text-[#6b7280]">PUTTR enters the prize pool with a branded video introduction</p>
              </div>
            </div>
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
              <div className="px-6 md:px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Gift className="w-4 h-4 text-[#00ff9d]" />
                      <h4 className="text-sm font-semibold text-white">The Prize</h4>
                    </div>
                    <p className="text-sm text-[#d1d5db] leading-6">4 PUTTR Smart Putting Greens enter the Press Your Luck prize pool. Every golfer who plays PYL has a chance to win one. $2,796 retail value across all four units.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Video className="w-4 h-4 text-[#00ff9d]" />
                      <h4 className="text-sm font-semibold text-white">The Unveiling</h4>
                    </div>
                    <p className="text-sm text-[#d1d5db] leading-6">The first time a user enters PYL after launch, a 15-second video plays introducing PUTTR as the newest prize. 30,000 unique monthly users see this. No way to skip, no way to miss it.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-4 h-4 text-[#00ff9d]" />
                      <h4 className="text-sm font-semibold text-white">The Second Spin</h4>
                    </div>
                    <p className="text-sm text-[#d1d5db] leading-6">Every user gets one free spin. But if they watch a longer PUTTR video, they unlock a second free spin. One-time offer. This is the intent signal: anyone who watches is telling you they want a PUTTR.</p>
                  </div>
                </div>
              </div>
              <div className="px-6 md:px-8 py-5 border-t border-[#2a3347] bg-[#0f1217]">
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl px-5 py-4 text-center flex-1 min-w-[140px]">
                    <p className="text-xs text-[#6b7280] mb-1">Monthly PYL Users</p>
                    <p className="text-2xl font-mono font-bold text-white">30,000</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#00ff9d] shrink-0" />
                  <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl px-5 py-4 text-center flex-1 min-w-[140px]">
                    <p className="text-xs text-[#6b7280] mb-1">See 15-sec Unveiling</p>
                    <p className="text-2xl font-mono font-bold text-[#00ff9d]">30,000</p>
                    <p className="text-xs text-[#6b7280]">100% reach</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#00ff9d] shrink-0" />
                  <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl px-5 py-4 text-center flex-1 min-w-[140px]">
                    <p className="text-xs text-[#00ff9d] mb-1">Watch Longer Video</p>
                    <p className="text-2xl font-mono font-bold text-[#00ff9d]">12-15K</p>
                    <p className="text-xs text-[#6b7280]">intent cohort</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        {/* Phase 2 */}
        <Fade delay={0.08}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00ff9d]/10 text-[#00ff9d] font-mono font-bold text-sm">2</div>
              <div>
                <p className="text-lg font-bold text-white">Commerce Follow-Up</p>
                <p className="text-sm text-[#6b7280]">Convert the intent cohort into PUTTR buyers</p>
              </div>
            </div>
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
              <div className="px-6 md:px-8 py-6">
                <p className="text-base text-[#d1d5db] leading-7 mb-6">
                  Everyone who watched the PUTTR video is now a tagged intent cohort inside GolfN. We hit them with an aggressive, multi-channel follow-up campaign to drive purchases through the Points Exchange marketplace.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl p-5">
                    <Zap className="w-5 h-5 text-[#00ff9d] mb-2" />
                    <p className="text-sm font-semibold text-white mb-1">In-App Messages</p>
                    <p className="text-xs text-[#9ca3af]">Targeted IAMs to video watchers. Miura campaign hit 43% conversion rate on IAMs.</p>
                  </div>
                  <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl p-5">
                    <Target className="w-5 h-5 text-[#00ff9d] mb-2" />
                    <p className="text-sm font-semibold text-white mb-1">Push Notifications</p>
                    <p className="text-xs text-[#9ca3af]">Sequenced pushes to the intent cohort with product education and urgency.</p>
                  </div>
                  <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl p-5">
                    <ShoppingBag className="w-5 h-5 text-[#00ff9d] mb-2" />
                    <p className="text-sm font-semibold text-white mb-1">Marketplace Placement</p>
                    <p className="text-xs text-[#9ca3af]">Featured banner + product listing in Points Exchange. PUTTR available for purchase with points.</p>
                  </div>
                  <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl p-5">
                    <Eye className="w-5 h-5 text-[#00ff9d] mb-2" />
                    <p className="text-sm font-semibold text-white mb-1">Ongoing Impressions</p>
                    <p className="text-xs text-[#9ca3af]">PUTTR stays in PYL after launch. 205K+ views per month, compounding every month.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        {/* Key Insight */}
        <Fade delay={0.1}>
          <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-8 md:p-10">
            <p className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-3">
              A $699 product is not an impulse buy. <span className="text-[#00ff9d]">Repeated exposure is what closes it.</span>
            </p>
            <p className="text-base text-[#9ca3af] leading-7">
              PYL users come back 7 times a month. They see PUTTR every time. The 15-second unveiling creates awareness. The opt-in video creates intent. The commerce campaign closes the sale. This is not a one-off impression. It is a persistent, multi-touch funnel inside a closed ecosystem of verified golfers.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 2: CPM COMPARISON
   ============================================================ */

const cpmRows = [
  { channel: 'Golf media (Golf Digest, etc.)', cpm: '$30-50', audience: 'Readers, unverified', good: false as boolean | null },
  { channel: 'Meta / Instagram', cpm: '$15-25', audience: 'Probabilistic lookalikes', good: null },
  { channel: 'YouTube pre-roll', cpm: '$10-20', audience: 'Interest-based targeting', good: null },
  { channel: 'GolfN full campaign (4 PUTTRs)', cpm: '$3.92', audience: 'Verified golfers, first-party, 7x/mo frequency', good: true },
]

function CpmIcon({ good }: { good: boolean | null }) {
  if (good === true) return <Check className="w-4 h-4 text-[#00ff9d] shrink-0" />
  if (good === false) return <X className="w-4 h-4 text-[#ef4444] shrink-0" />
  return <Minus className="w-4 h-4 text-[#6b7280] shrink-0" />
}

function MediaValue() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-5 h-5 text-[#00ff9d]" />
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">Media Value</p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.05] tracking-tight mb-4">
            Your media buy <span className="text-gradient">is the product itself</span>
          </h2>
          <p className="text-lg text-[#9ca3af] max-w-3xl leading-8 mb-8">
            4 PUTTRs at wholesale is roughly $1,960. GolfN delivers 500,000+ total impressions across PYL, marketplace banners, IAMs, push, and email. That math does not exist anywhere else in golf.
          </p>
        </Fade>

        <Fade delay={0.04}>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#2a3347]">
                    <th className="py-4 px-6 text-left text-xs font-mono text-[#6b7280] uppercase tracking-wider">Channel</th>
                    <th className="py-4 px-5 text-left text-xs font-mono text-[#6b7280] uppercase tracking-wider">CPM</th>
                    <th className="py-4 px-5 text-left text-xs font-mono text-[#6b7280] uppercase tracking-wider">Audience Quality</th>
                  </tr>
                </thead>
                <tbody>
                  {cpmRows.map((row, i) => (
                    <tr key={row.channel} className={`${i < cpmRows.length - 1 ? 'border-b border-[#2a3347]/40' : ''} ${row.good === true ? 'bg-[#001a14]/30' : ''}`}>
                      <td className="py-4 px-6 text-sm text-white font-medium">{row.channel}</td>
                      <td className={`py-4 px-5 text-lg font-mono font-bold ${row.good === true ? 'text-[#00ff9d]' : 'text-[#9ca3af]'}`}>{row.cpm}</td>
                      <td className="py-4 px-5">
                        <div className="flex items-center gap-2">
                          <CpmIcon good={row.good} />
                          <span className={`text-sm ${row.good === true ? 'text-white font-medium' : 'text-[#9ca3af]'}`}>{row.audience}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Fade>

        <Fade delay={0.06}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl p-6 text-center">
              <p className="text-3xl font-mono font-bold text-[#00ff9d] mb-1">$9.80</p>
              <p className="text-sm text-white font-semibold">CPM on PYL alone</p>
              <p className="text-xs text-[#6b7280] mt-1">200K+ views / $1,960 wholesale</p>
            </div>
            <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl p-6 text-center">
              <p className="text-3xl font-mono font-bold text-[#00ff9d] mb-1">$3.92</p>
              <p className="text-sm text-white font-semibold">Full-Campaign CPM</p>
              <p className="text-xs text-[#6b7280] mt-1">500K+ impressions across all channels</p>
            </div>
            <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl p-6 text-center">
              <p className="text-3xl font-mono font-bold text-[#00ff9d] mb-1">10 units?</p>
              <p className="text-sm text-white font-semibold">CPM barely moves</p>
              <p className="text-xs text-[#6b7280] mt-1">More prizes, same audience. Longer campaign, more social proof. Impressions are driven by users, not prizes.</p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 3: MIURA PROOF
   ============================================================ */

const miuraProofMetrics = [
  { value: '28x', label: 'Return on Prize Investment', sub: 'Wholesale revenue vs. prize cost' },
  { value: '2,764', label: 'Qualified Leads', sub: 'Verified golfers who raised their hand' },
  { value: '$10,856', label: 'Brand Impression Value', sub: '271K impressions at $40 CPM' },
  { value: '$10K+', label: 'Total Prize Commitment', sub: 'After seeing first-campaign results' },
]

function MiuraProof() {
  return (
    <section id="the-proof" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-5 h-5 text-[#00ff9d]" />
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">Proof</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.05] tracking-tight mb-4">
            Miura Golf ran this playbook. <span className="text-gradient">Here is what happened.</span>
          </h2>
          <p className="text-lg text-[#9ca3af] max-w-3xl leading-8 mb-8">
            Miura provided premium product as sweepstakes prizes. GolfN ran the full campaign and marketplace activation. In 40 days, Miura generated <span className="text-white font-semibold">$22,000 in wholesale revenue</span> and 2,764 qualified leads. They immediately committed to multiple additional campaigns.
          </p>
        </Fade>

        {/* Hero revenue callout */}
        <Fade delay={0.03}>
          <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-8 mb-8 text-center">
            <p className="text-5xl md:text-6xl font-mono font-bold text-[#00ff9d] mb-2">$22,000</p>
            <p className="text-lg text-white font-semibold">wholesale revenue in 40 days</p>
            <p className="text-sm text-[#6b7280] mt-1">From a single sweepstakes campaign inside GolfN</p>
          </div>
        </Fade>

        <Fade delay={0.04}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
            {miuraProofMetrics.map((m) => (
              <div key={m.label} className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl p-5 text-center">
                <p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d] mb-1">{m.value}</p>
                <p className="text-sm text-white font-semibold">{m.label}</p>
                <p className="text-xs text-[#6b7280] mt-0.5">{m.sub}</p>
              </div>
            ))}
          </div>
        </Fade>

        <Fade delay={0.06}>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl px-8 py-7">
            <p className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-3">
              {"\"You guys are doing exactly what you figured you would do. The consumer base is latching on. "}
              <span className="text-[#00ff9d]">We never doubted for a second.</span>{"\""}
            </p>
            <p className="text-sm text-[#6b7280]">Anthony Newville, VP Sales \u2014 Miura Golf</p>
          </div>
        </Fade>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 4: THE DEAL
   ============================================================ */

const puttrBrings = [
  { icon: Gift, title: '4 PUTTRs for Press Your Luck', detail: '$699 retail each. These are the prizes that drive 30,000 verified golfer eyeballs to your product every month.' },
  { icon: Package, title: 'Marketplace inventory at wholesale', detail: 'PUTTR Smart Putting Greens available for purchase in the Points Exchange. We buy at wholesale, you ship direct.' },
]

const golfnDoes = [
  { icon: Video, title: 'Video production + PYL integration', detail: '15-second unveiling video and longer education video, integrated into the PYL spin mechanic.' },
  { icon: Megaphone, title: 'Full campaign execution', detail: 'IAMs, push sequences, marketplace banners, email flows, social feed. The entire CRM and marketing stack.' },
  { icon: Users, title: 'Intent cohort building', detail: 'Everyone who watches the video is tagged. We build the cohort, run AI lookalike expansion, and activate commerce flows.' },
  { icon: ShieldCheck, title: 'Fulfillment + operations', detail: 'Order processing, customer service, inventory coordination. 97% accuracy rate with our current partners.' },
]

const comparisonRows = [
  { label: 'Upfront cost', traditional: 'High fixed fee', paidSocial: 'High media spend', golfn: 'Product only', tGood: false as boolean | null, pGood: false as boolean | null, gGood: true as boolean | null },
  { label: 'Audience', traditional: 'Broad / unverified', paidSocial: 'Lookalikes', golfn: 'Verified buyers', tGood: false, pGood: null, gGood: true },
  { label: 'Audience after campaign ends', traditional: 'One-and-done', paidSocial: 'Rented \u2014 gone when spend stops', golfn: 'Persistent cohort \u2014 activate anytime', tGood: false, pGood: false, gGood: true },
  { label: 'Compounding effect', traditional: 'One-off', paidSocial: 'None', golfn: 'Yes \u2014 points + marketplace', tGood: false, pGood: false, gGood: true },
  { label: 'Wholesale revenue', traditional: 'No', paidSocial: 'Indirect', golfn: 'Direct \u2014 you ship, we sell', tGood: false, pGood: null, gGood: true },
  { label: 'Attribution', traditional: 'Vague', paidSocial: 'Platform-dependent', golfn: 'Full-funnel, Amplitude-powered', tGood: false, pGood: null, gGood: true },
]

function CompIcon({ good }: { good: boolean | null }) {
  if (good === true) return <Check className="w-4 h-4 text-[#00ff9d] shrink-0" />
  if (good === false) return <X className="w-4 h-4 text-[#ef4444] shrink-0" />
  return <Minus className="w-4 h-4 text-[#6b7280] shrink-0" />
}

function TheDeal() {
  return (
    <section id="the-deal" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-3">The Deal</p>
          <h2 className="text-3xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.05] tracking-tight mb-4">
            {"We'll put our money"}<br /><span className="text-[#00ff9d]">where our mouth is</span>
          </h2>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl mb-10 leading-8">
            No startup fees. No retainers. No media buy minimums. PUTTR provides product. GolfN provides 30,000 verified golfers and the full execution stack to convert them.
          </p>
        </Fade>

        <Fade delay={0.04}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-8">
              <p className="text-xs font-mono text-[#6b7280] uppercase tracking-[0.2em] mb-6">What PUTTR Brings</p>
              <div className="space-y-6">
                {puttrBrings.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#00ff9d]/10 shrink-0">
                      <item.icon className="w-5 h-5 text-[#00ff9d]" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white mb-1">{item.title}</p>
                      <p className="text-sm text-[#9ca3af] leading-6">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-[#2a3347]/50">
                <p className="text-sm text-[#6b7280]">{"That's it. No other upfront costs."}</p>
              </div>
            </div>

            <div className="bg-[#1a1f2e] border border-[#00ff9d]/20 rounded-2xl p-8">
              <p className="text-xs font-mono text-[#00ff9d] uppercase tracking-[0.2em] mb-6">What GolfN Does</p>
              <div className="space-y-6">
                {golfnDoes.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#00ff9d]/10 shrink-0">
                      <item.icon className="w-5 h-5 text-[#00ff9d]" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white mb-1">{item.title}</p>
                      <p className="text-sm text-[#9ca3af] leading-6">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>

        <Fade delay={0.05}>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden mb-10">
            <div className="px-6 md:px-8 py-5 border-b border-[#2a3347]">
              <p className="text-xs font-mono text-[#6b7280] uppercase tracking-[0.2em]">How GolfN Compares</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#2a3347]">
                    <th className="py-4 px-6 text-left text-xs font-mono text-[#6b7280] uppercase tracking-wider w-[180px]"></th>
                    <th className="py-4 px-5 text-left text-xs font-mono text-[#6b7280] uppercase tracking-wider">Traditional Sponsorship</th>
                    <th className="py-4 px-5 text-left text-xs font-mono text-[#6b7280] uppercase tracking-wider">Paid Social Ads</th>
                    <th className="py-4 px-5 text-left text-xs font-mono text-[#00ff9d] uppercase tracking-wider bg-[#001a14]/30">GolfN Activation</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.label} className={i < comparisonRows.length - 1 ? 'border-b border-[#2a3347]/40' : ''}>
                      <td className="py-4 px-6 text-sm font-semibold text-white">{row.label}</td>
                      <td className="py-4 px-5"><div className="flex items-center gap-2"><CompIcon good={row.tGood} /><span className="text-sm text-[#9ca3af]">{row.traditional}</span></div></td>
                      <td className="py-4 px-5"><div className="flex items-center gap-2"><CompIcon good={row.pGood} /><span className="text-sm text-[#9ca3af]">{row.paidSocial}</span></div></td>
                      <td className="py-4 px-5 bg-[#001a14]/30"><div className="flex items-center gap-2"><CompIcon good={row.gGood} /><span className="text-sm text-white font-medium">{row.golfn}</span></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Fade>

        <Fade delay={0.06}>
          <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-8 md:p-10">
            <p className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-3">
              PUTTR invests <span className="text-[#00ff9d]">~$2,000 in product</span>. GolfN puts it in front of <span className="text-[#00ff9d]">30,000 golfers who come back 7 times a month</span>.
            </p>
            <p className="text-base text-[#9ca3af] leading-7">
              Imagine what 10 units would do. The CPM gets better. The campaign runs longer. More winners means more social proof. The impression volume is driven by audience size, not prize count.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 5: FAQ
   ============================================================ */

const faqs = [
  {
    q: 'How does the video mechanic work?',
    a: 'When PYL launches with PUTTR as a prize, every user sees a 15-second unveiling video on their first visit. They get one free spin automatically. To unlock a second free spin, they watch a longer PUTTR product video. This is a one-time offer per user, which means the longer video functions as an intent signal: everyone who watches it is self-selecting as interested in PUTTR.',
  },
  {
    q: 'Do we get category exclusivity?',
    a: 'Yes. GolfN will not run a competing smart putting system or putting mat in PYL or the marketplace simultaneously. Your campaign gets undivided attention from the audience.',
  },
  {
    q: 'What happens after the PYL campaign?',
    a: 'The intent cohort is permanent. Everyone who watched your video, played PYL for a PUTTR, or viewed your marketplace listing is tagged and reactivatable at any time. You can run seasonal campaigns, new product launches, or subscription promotions against this cohort without rebuilding from scratch.',
  },
  {
    q: 'What if we want to increase the prize count later?',
    a: 'More prizes means a longer campaign window, more winners generating social proof, and more reasons to re-engage the cohort with push and email. The impression volume is driven by audience size, not prize count, so your effective CPM actually improves at scale.',
  },
]

function PuttrFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-4">
            <MessageCircleQuestion className="w-5 h-5 text-[#00ff9d]" />
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">Common Questions</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.05] tracking-tight mb-10">
            Questions that come up <span className="text-[#00ff9d]">on every call</span>
          </h2>
        </Fade>
        <Fade delay={0.05}>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl px-6 md:px-10">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="border-b border-[#2a3347]/50 last:border-b-0">
                <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left group">
                  <span className={`text-base md:text-lg font-semibold transition-colors ${openIdx === i ? 'text-[#00ff9d]' : 'text-white group-hover:text-[#d1d5db]'}`}>{faq.q}</span>
                  <motion.div animate={{ rotate: openIdx === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className={`w-5 h-5 shrink-0 ml-4 transition-colors ${openIdx === i ? 'text-[#00ff9d]' : 'text-[#4b5563]'}`} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIdx === i && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                      <p className="text-base text-[#9ca3af] leading-7 pb-5">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 6: FINAL CTA
   ============================================================ */

function PuttrCTA() {
  return (
    <section id="next-steps" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <Fade>
          <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-4">Next Steps</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-6">
            {"Let's get PUTTR"}<br /><span className="text-[#00ff9d]">in front of 30,000 golfers</span>
          </h2>
          <p className="text-lg text-[#9ca3af] max-w-2xl mx-auto mb-8 leading-8">
            We handle everything. You provide the product. The first campaign can be live within weeks.
          </p>
          <a
            href={MAILTO}
            className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-[#00ff9d] text-[#0f1217] font-bold text-lg hover:bg-[#00e68a] transition-colors"
          >
            Book a 15-Minute Partnership Briefing <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm text-[#4b5563] mt-4">jared@golfn.com | scott@golfn.com</p>
        </Fade>
      </div>
    </section>
  )
}

/* ============================================================
   MAIN EXPORT
   ============================================================ */

export function PuttrPitchFlow() {
  return (
    <>
      <TheCampaign />
      <div className="max-w-7xl mx-auto px-6 md:px-12"><div className="h-px bg-gradient-to-r from-transparent via-[#2a3347] to-transparent" /></div>
      <MediaValue />
      <div className="max-w-7xl mx-auto px-6 md:px-12"><div className="h-px bg-gradient-to-r from-transparent via-[#2a3347] to-transparent" /></div>
      <MiuraProof />
      {/* Mid-page CTA */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 text-center">
        <Fade>
          <p className="text-lg text-[#9ca3af] mb-4">Like what you see?</p>
          <a href={MAILTO} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00ff9d] text-[#0f1217] font-bold text-base hover:bg-[#00e68a] transition-colors">
            Book a 15-Minute Partnership Briefing
          </a>
          <p className="text-sm text-[#4b5563] mt-3">Or keep scrolling to see the full deal structure.</p>
        </Fade>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12"><div className="h-px bg-gradient-to-r from-transparent via-[#2a3347] to-transparent" /></div>
      <TheDeal />
      <div className="max-w-7xl mx-auto px-6 md:px-12"><div className="h-px bg-gradient-to-r from-transparent via-[#2a3347] to-transparent" /></div>
      <PuttrFAQ />
      <div className="max-w-7xl mx-auto px-6 md:px-12"><div className="h-px bg-gradient-to-r from-transparent via-[#2a3347] to-transparent" /></div>
      <PuttrCTA />
    </>
  )
}
