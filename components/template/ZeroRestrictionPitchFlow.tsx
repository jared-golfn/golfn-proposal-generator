'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Eye, Users, Zap, Target, ShoppingBag, ArrowRight, Video, Gift, ChevronDown, Check, X, Minus, MessageCircleQuestion, ShieldCheck, Package, Megaphone, DollarSign, Award, CloudRain, Smartphone, Flag, Droplets } from 'lucide-react'
import { Fade } from './Fade'

const MAILTO = 'mailto:jared@golfn.com,scott@golfn.com?subject=Zero%20Restriction%20x%20GolfN%20Partnership'
const APP_SCREENS = {
  gps: 'https://cdn.sanity.io/images/e3wja34v/production/ea2549d1c86abc8a532a3fee0d556c08707773d2-1500x3248.png',
  dailyGrind: 'https://cdn.sanity.io/images/e3wja34v/production/b2bc4cf588faf556017e1fb0b83505c1c50ee602-1500x3248.png',
  marketplace: 'https://cdn.sanity.io/images/e3wja34v/production/e604b64cd4ce527750267b9c795f44363ed9d816-2364x5120.png',
  pointExchange: 'https://cdn.sanity.io/images/e3wja34v/production/50e76b526bb2c7ba2808fc22ec9c532cf9cabfc8-750x3802.png',
}

/* ============================================================
   PLATFORM EDUCATION
   ============================================================ */

const platformFeatures = [
  { title: 'GPS Round Tracking', desc: 'Full GPS round tracking with shot data, scoring, and performance analytics. Every round builds the user profile.', Icon: Flag },
  { title: 'Rewards Marketplace', desc: 'Points earned from rounds and engagement are redeemable for premium gear from brand partners like Callaway, TaylorMade, Cobra, and more.', Icon: Gift },
  { title: 'Campaigns & Sweepstakes', desc: 'Brand-sponsored sweepstakes, Learn & Earn education modules, and targeted offers drive deep engagement with partner products.', Icon: Target },
  { title: 'Behavioral Intelligence', desc: 'Every interaction writes to the user profile. What they play, what they browse, what they buy. AI scoring segments users by intent and spend potential.', Icon: Eye },
]

function PlatformEducation() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-3"><Smartphone className="w-5 h-5 text-[#00ff9d]" /><p className="text-sm font-mono text-[#00ff9d] uppercase tracking-[0.2em]">The Platform</p></div>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-3">Credit card rewards<br /><span className="text-[#00ff9d]">for golf.</span></h2>
          <p className="text-base md:text-lg text-[#9ca3af] max-w-3xl mb-10 leading-7">GolfN is a rewards app where golfers earn points and tickets by playing rounds, completing challenges, and engaging with the platform. Points are redeemable for premium gear from brand partners. 125,000+ verified golfers. 35,000+ monthly active users. Growing 30%+ month-over-month.</p>
        </Fade>
        <Fade delay={0.05}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            {[{ src: APP_SCREENS.gps, label: 'GPS Round Tracking' }, { src: APP_SCREENS.dailyGrind, label: 'Daily Grind' }, { src: APP_SCREENS.marketplace, label: 'Rewards Marketplace' }, { src: APP_SCREENS.pointExchange, label: 'Points Exchange' }].map(screen => (
              <div key={screen.label} className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-3 md:p-4 overflow-hidden">
                <div className="rounded-xl overflow-hidden mb-3 bg-[#0f1217]"><img src={screen.src} alt={screen.label} className="w-full h-auto block" style={{ maxHeight: 320, objectFit: 'cover', objectPosition: 'top center' }} /></div>
                <p className="text-xs md:text-sm text-[#9ca3af] text-center font-medium">{screen.label}</p>
              </div>
            ))}
          </div>
        </Fade>
        <Fade delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {platformFeatures.map(f => (
              <div key={f.title} className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-5 md:p-6 hover:border-[#00ff9d]/30 transition-colors">
                <div className="flex items-start gap-4"><div className="w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center shrink-0 mt-0.5"><f.Icon className="w-5 h-5 text-[#00ff9d]" /></div><div><h3 className="text-base md:text-lg font-bold text-white mb-1">{f.title}</h3><p className="text-sm text-[#9ca3af] leading-6">{f.desc}</p></div></div>
              </div>
            ))}
          </div>
        </Fade>
        <Fade delay={0.15}>
          <div className="mt-6 bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-6 md:p-8">
            <p className="text-base md:text-lg text-[#d1d5db] leading-8">This is not another GPS app. GolfN is a <span className="text-[#00ff9d] font-semibold">rewards and engagement platform</span> that brands pay to access because the audience is verified, active, and spending. Revenue from brand partnerships and optional memberships ($25-$900/mo) hit <span className="text-white font-semibold">$100K/month</span> and growing.</p>
          </div>
        </Fade>
      </div>
    </section>
  )
}

/* ============================================================
   THREE-PHASE CAMPAIGN
   ============================================================ */

function ThreePhaseCampaign() {
  return (
    <section id="the-campaign" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-4"><Play className="w-5 h-5 text-[#00ff9d]" /><p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">The Campaign</p></div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[0.95] tracking-tight mb-5">Awareness. Intent. <span className="text-gradient">Rain-triggered conversion.</span></h2>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-8 mb-12">We set up your wholesale account so Zero Restriction is purchasable inside GolfN. We run a sweepstakes to create mass awareness across 125,000+ golfers and capture 4,000+ intent signals. Then we do something no one else can: every time one of those golfers plays in the rain, we promote Zero Restriction the moment they open the app.</p>
        </Fade>

        {/* Phase 1: Wholesale */}
        <Fade delay={0.04}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00ff9d]/10 text-[#00ff9d] font-mono font-bold text-sm">1</div>
              <div><p className="text-lg font-bold text-white">Wholesale Account Setup</p><p className="text-sm text-[#6b7280]">Get Zero Restriction products live in the Points Exchange</p></div>
            </div>
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
              <div className="px-6 md:px-8 py-6">
                <p className="text-base text-[#d1d5db] leading-7 mb-6">Before we run any campaigns, we need Zero Restriction products available for purchase in the GolfN Points Exchange. This is the infrastructure that makes everything else work. When golfers see Zero Restriction in the sweepstakes, browse it in the marketplace, or get a rain-triggered IAM, they can buy immediately.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl p-5"><Package className="w-5 h-5 text-[#00ff9d] mb-2" /><p className="text-sm font-semibold text-white mb-1">Product Catalog</p><p className="text-xs text-[#9ca3af]">Rain jackets, pants, and layers listed with full product photography and descriptions in the marketplace.</p></div>
                  <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl p-5"><ShoppingBag className="w-5 h-5 text-[#00ff9d] mb-2" /><p className="text-sm font-semibold text-white mb-1">Wholesale Pricing</p><p className="text-xs text-[#9ca3af]">We purchase at wholesale. You ship direct. GolfN handles customer service and order coordination.</p></div>
                  <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl p-5"><ShieldCheck className="w-5 h-5 text-[#00ff9d] mb-2" /><p className="text-sm font-semibold text-white mb-1">97% Order Accuracy</p><p className="text-xs text-[#9ca3af]">Proven fulfillment with Miura, L.A.B. Golf, Cobra, and other premium partners. Most orders ship within 2 weeks.</p></div>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        {/* Phase 2: Sweepstakes */}
        <Fade delay={0.06}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00ff9d]/10 text-[#00ff9d] font-mono font-bold text-sm">2</div>
              <div><p className="text-lg font-bold text-white">Sweepstakes Campaign</p><p className="text-sm text-[#6b7280]">Mass awareness across 125K+ golfers, 4,000+ raise their hand</p></div>
            </div>
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
              <div className="px-6 md:px-8 py-6">
                <p className="text-base text-[#d1d5db] leading-7 mb-6">Zero Restriction provides premium rain gear as the sweepstakes prize. GolfN promotes it across the entire platform: in-app cards, push notifications, email, social feed, and marketplace banners. Every user in the ecosystem sees Zero Restriction. On average, over 4,000 verified golfers enter each sweepstakes, giving you direct, first-party proof of user intent.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
                  <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl p-5 text-center"><p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d] mb-1">125K+</p><p className="text-sm text-white font-semibold">Golfers Exposed</p><p className="text-xs text-[#6b7280] mt-0.5">Entire GolfN userbase sees ZR</p></div>
                  <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl p-5 text-center"><p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d] mb-1">4,000+</p><p className="text-sm text-white font-semibold">Verified Entrants</p><p className="text-xs text-[#6b7280] mt-0.5">Avg. per sweepstakes, all opted-in</p></div>
                  <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl p-5 text-center"><p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d] mb-1">43%</p><p className="text-sm text-white font-semibold">IAM Conversion</p><p className="text-xs text-[#6b7280] mt-0.5">Miura benchmark, in-app messages</p></div>
                  <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl p-5 text-center"><p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d] mb-1">74%</p><p className="text-sm text-white font-semibold">Card-to-Entry Rate</p><p className="text-xs text-[#6b7280] mt-0.5">Highest in GolfN history (Miura)</p></div>
                </div>
                <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl p-5">
                  <p className="text-sm text-[#d1d5db] leading-6"><span className="text-white font-semibold">Why the sweepstakes matters for Phase 3:</span> Every entrant is now tagged in GolfN. We know they are interested in rain gear. When they play a round and it rains, the follow-up IAM is not cold outreach. It is a warm, contextual message to someone who already raised their hand for your product.</p>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        {/* Phase 3: Rain Round Targeting */}
        <Fade delay={0.08}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00ff9d]/10 text-[#00ff9d] font-mono font-bold text-sm">3</div>
              <div><p className="text-lg font-bold text-white">Rain Round Targeting</p><p className="text-sm text-[#6b7280]">The conversion engine that runs itself, every time it rains</p></div>
            </div>
            <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl overflow-hidden">
              <div className="px-6 md:px-8 py-8">
                <div className="flex items-center gap-3 mb-4"><CloudRain className="w-7 h-7 text-[#00ff9d]" /><p className="text-2xl md:text-3xl font-bold text-white">This is the part no one else can do.</p></div>
                <p className="text-base md:text-lg text-[#d1d5db] leading-8 mb-8">GolfN uses a weather API to track real-time conditions during every GPS-tracked round. Wind, temperature, precipitation. We use this data to calculate adjusted performance metrics. But it also means we know <span className="text-[#00ff9d] font-semibold">exactly which golfers played in the rain</span>. And thanks to the sweepstakes, we already know which of those golfers are interested in Zero Restriction.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl p-6 text-center"><Droplets className="w-8 h-8 text-[#00ff9d] mx-auto mb-3" /><p className="text-lg font-bold text-white mb-1">Golfer Plays in Rain</p><p className="text-sm text-[#9ca3af]">Weather API detects precipitation during their round. User is automatically tagged as a rain-round golfer.</p></div>
                  <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl p-6 text-center"><Zap className="w-8 h-8 text-[#00ff9d] mx-auto mb-3" /><p className="text-lg font-bold text-white mb-1">Next App Open</p><p className="text-sm text-[#9ca3af]">Targeted IAM: "You just played 18 in the rain. Here is the best rain gear in golf." Contextual, timely, personal.</p></div>
                  <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl p-6 text-center"><ShoppingBag className="w-8 h-8 text-[#00ff9d] mx-auto mb-3" /><p className="text-lg font-bold text-white mb-1">One Tap to Buy</p><p className="text-sm text-[#9ca3af]">IAM links directly to Zero Restriction in the Points Exchange. The wholesale account from Phase 1 means the product is already there.</p></div>
                </div>
                <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-6">
                  <p className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-3">The three phases compound. <span className="text-[#00ff9d]">Awareness creates intent. Rain creates context. The IAM closes the sale.</span></p>
                  <p className="text-base text-[#9ca3af] leading-7">The rain cohort rebuilds itself automatically every time it rains, anywhere in the world. Sweepstakes entrants who get rained on are the warmest leads in golf. And unlike a one-time ad campaign, this engine runs as long as Zero Restriction is in the marketplace.</p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

/* ============================================================
   MIURA PROOF
   ============================================================ */

const miuraMetrics = [
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
          <div className="flex items-center gap-3 mb-4"><Award className="w-5 h-5 text-[#00ff9d]" /><p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">Proof</p></div>
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.05] tracking-tight mb-4">Miura Golf ran this playbook. <span className="text-gradient">Here is what happened.</span></h2>
          <p className="text-lg text-[#9ca3af] max-w-3xl leading-8 mb-8">Miura provided premium product as sweepstakes prizes. GolfN ran the full campaign and marketplace activation. In 40 days, Miura generated <span className="text-white font-semibold">$22,000 in wholesale revenue</span> and 2,764 qualified leads. They immediately committed to multiple additional campaigns.</p>
        </Fade>
        <Fade delay={0.03}>
          <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-8 mb-8 text-center">
            <p className="text-5xl md:text-6xl font-mono font-bold text-[#00ff9d] mb-2">$22,000</p>
            <p className="text-lg text-white font-semibold">wholesale revenue in 40 days</p>
            <p className="text-sm text-[#6b7280] mt-1">From a single sweepstakes campaign inside GolfN</p>
          </div>
        </Fade>
        <Fade delay={0.04}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
            {miuraMetrics.map((m) => (<div key={m.label} className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl p-5 text-center"><p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d] mb-1">{m.value}</p><p className="text-sm text-white font-semibold">{m.label}</p><p className="text-xs text-[#6b7280] mt-0.5">{m.sub}</p></div>))}
          </div>
        </Fade>
        <Fade delay={0.06}>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl px-8 py-7">
            <p className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-3">{'"You guys are doing exactly what you figured you would do. The consumer base is latching on. '}<span className="text-[#00ff9d]">We never doubted for a second.</span>{'"'}</p>
            <p className="text-sm text-[#6b7280]">{"Anthony Newville, President \u2014 Miura Golf"}</p>
          </div>
        </Fade>
        <Fade delay={0.08}>
          <div className="mt-6 bg-[#0f1217] border border-[#2a3347]/60 rounded-xl p-5">
            <p className="text-sm text-[#d1d5db] leading-6"><span className="text-white font-semibold">The Zero Restriction advantage:</span> Miura ran the sweepstakes and marketplace. Zero Restriction gets that <em>plus</em> rain-triggered targeting. Every rainy round adds another warm lead to the pipeline. Miura generated $22K without weather targeting. Imagine what happens when every golfer who gets rained on sees your product the next time they open the app.</p>
          </div>
        </Fade>
      </div>
    </section>
  )
}

/* ============================================================
   THE DEAL
   ============================================================ */

const zrBrings = [
  { icon: Gift, title: 'Rain gear for the sweepstakes', detail: 'Premium Zero Restriction outerwear as the prize. Creates awareness across 125,000+ golfers and captures 4,000+ intent signals.' },
  { icon: Package, title: 'Wholesale inventory for Points Exchange', detail: 'Zero Restriction products available for purchase in the marketplace. We buy at wholesale, you ship direct. This is the commerce layer that the sweepstakes and rain targeting both drive to.' },
]

const golfnDoes = [
  { icon: CloudRain, title: 'Rain round targeting engine', detail: 'Weather API identifies rain-round golfers. Automated IAMs trigger on next login. Cohort rebuilds every time it rains, compounding with sweepstakes entrants.' },
  { icon: Megaphone, title: 'Full sweepstakes campaign', detail: 'In-app cards, push sequences, email, social feed, marketplace banners. Every user in the ecosystem sees Zero Restriction.' },
  { icon: Users, title: 'Intent cohort + rain cohort layering', detail: 'Sweepstakes entrants are tagged. Rain-round golfers are tagged. When someone is in both cohorts, they get priority messaging. The system gets smarter over time.' },
  { icon: ShieldCheck, title: 'Fulfillment + operations', detail: 'Order processing, customer service, inventory coordination. 97% accuracy rate with current partners.' },
]

function TheDeal() {
  return (
    <section id="the-deal" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-3">The Deal</p>
          <h2 className="text-3xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.05] tracking-tight mb-4">{"We'll put our money"}<br /><span className="text-[#00ff9d]">where our mouth is</span></h2>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl mb-10 leading-8">No startup fees. No retainers. No media buy minimums. Zero Restriction provides product. GolfN provides 125,000 golfers, weather-triggered targeting, and the full execution stack.</p>
        </Fade>
        <Fade delay={0.04}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-8">
              <p className="text-xs font-mono text-[#6b7280] uppercase tracking-[0.2em] mb-6">What Zero Restriction Brings</p>
              <div className="space-y-6">{zrBrings.map((item) => (<div key={item.title} className="flex gap-4"><div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#00ff9d]/10 shrink-0"><item.icon className="w-5 h-5 text-[#00ff9d]" /></div><div><p className="text-base font-semibold text-white mb-1">{item.title}</p><p className="text-sm text-[#9ca3af] leading-6">{item.detail}</p></div></div>))}</div>
              <div className="mt-6 pt-5 border-t border-[#2a3347]/50"><p className="text-sm text-[#6b7280]">{"That's it. No other upfront costs."}</p></div>
            </div>
            <div className="bg-[#1a1f2e] border border-[#00ff9d]/20 rounded-2xl p-8">
              <p className="text-xs font-mono text-[#00ff9d] uppercase tracking-[0.2em] mb-6">What GolfN Does</p>
              <div className="space-y-6">{golfnDoes.map((item) => (<div key={item.title} className="flex gap-4"><div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#00ff9d]/10 shrink-0"><item.icon className="w-5 h-5 text-[#00ff9d]" /></div><div><p className="text-base font-semibold text-white mb-1">{item.title}</p><p className="text-sm text-[#9ca3af] leading-6">{item.detail}</p></div></div>))}</div>
            </div>
          </div>
        </Fade>
        <Fade delay={0.06}>
          <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-8 md:p-10">
            <p className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-3">Zero Restriction provides <span className="text-[#00ff9d]">product</span>. GolfN provides <span className="text-[#00ff9d]">125,000 golfers, real-time weather targeting, and a full commerce engine</span>.</p>
            <p className="text-base text-[#9ca3af] leading-7">The sweepstakes creates the initial wave of awareness and intent. The rain targeting converts that intent every time the weather cooperates. And the wholesale account means every impression has a direct path to purchase.</p>
          </div>
        </Fade>
      </div>
    </section>
  )
}

/* ============================================================
   FAQ
   ============================================================ */

const faqs = [
  { q: 'How does the rain targeting actually work?', a: 'GolfN integrates a weather API that tracks real-time conditions during every GPS-tracked round. When precipitation is detected, the user is automatically tagged. The next time they open the app, they see a targeted in-app message promoting Zero Restriction rain gear. This happens automatically, every time it rains, for every user.' },
  { q: 'How does the sweepstakes connect to the rain targeting?', a: 'The sweepstakes creates mass awareness and captures intent signals. Everyone who enters is tagged as interested in rain gear. When those same golfers later play in the rain, the follow-up IAM is not a cold message. It is a warm, contextual promotion to someone who already raised their hand. The two systems compound each other.' },
  { q: 'Do we get category exclusivity?', a: 'Yes. GolfN will not run a competing rain gear or outerwear brand in the sweepstakes, marketplace, or rain targeting program simultaneously. Your campaign gets undivided attention.' },
  { q: 'What happens after the sweepstakes ends?', a: 'The rain targeting is evergreen. It runs automatically as long as Zero Restriction is in the marketplace. The sweepstakes intent cohort is also permanent and reactivatable for seasonal campaigns, new product launches, or flash promotions. The system keeps working long after the initial campaign.' },
]

function ZrFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-4"><MessageCircleQuestion className="w-5 h-5 text-[#00ff9d]" /><p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">Common Questions</p></div>
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.05] tracking-tight mb-10">Questions that come up <span className="text-[#00ff9d]">on every call</span></h2>
        </Fade>
        <Fade delay={0.05}>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl px-6 md:px-10">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="border-b border-[#2a3347]/50 last:border-b-0">
                <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left group">
                  <span className={`text-base md:text-lg font-semibold transition-colors ${openIdx === i ? 'text-[#00ff9d]' : 'text-white group-hover:text-[#d1d5db]'}`}>{faq.q}</span>
                  <motion.div animate={{ rotate: openIdx === i ? 180 : 0 }} transition={{ duration: 0.2 }}><ChevronDown className={`w-5 h-5 shrink-0 ml-4 transition-colors ${openIdx === i ? 'text-[#00ff9d]' : 'text-[#4b5563]'}`} /></motion.div>
                </button>
                <AnimatePresence>{openIdx === i && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden"><p className="text-base text-[#9ca3af] leading-7 pb-5">{faq.a}</p></motion.div>)}</AnimatePresence>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  )
}

/* ============================================================
   CTA
   ============================================================ */

function ZrCTA() {
  return (
    <section id="next-steps" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <Fade>
          <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-4">Next Steps</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-6">{"Let's put Zero Restriction"}<br /><span className="text-[#00ff9d]">in front of every golfer who gets rained on</span></h2>
          <p className="text-lg text-[#9ca3af] max-w-2xl mx-auto mb-8 leading-8">We handle everything. You provide the product. The sweepstakes creates awareness, and the rain targeting converts it every time the weather cooperates.</p>
          <a href={MAILTO} className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-[#00ff9d] text-[#0f1217] font-bold text-lg hover:bg-[#00e68a] transition-colors">{"Let's Get Started"} <ArrowRight className="w-5 h-5" /></a>
          <p className="text-sm text-[#4b5563] mt-4">jared@golfn.com | scott@golfn.com</p>
        </Fade>
      </div>
    </section>
  )
}

/* ============================================================
   MAIN EXPORT
   ============================================================ */

export function ZeroRestrictionPitchFlow() {
  return (
    <>
      <PlatformEducation />
      <div className="max-w-7xl mx-auto px-6 md:px-12"><div className="h-px bg-gradient-to-r from-transparent via-[#2a3347] to-transparent" /></div>
      <ThreePhaseCampaign />
      <div className="max-w-7xl mx-auto px-6 md:px-12"><div className="h-px bg-gradient-to-r from-transparent via-[#2a3347] to-transparent" /></div>
      <MiuraProof />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 text-center">
        <Fade>
          <p className="text-lg text-[#9ca3af] mb-4">Ready to move forward?</p>
          <a href={MAILTO} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00ff9d] text-[#0f1217] font-bold text-base hover:bg-[#00e68a] transition-colors">{"Let's Get Started"}</a>
          <p className="text-sm text-[#4b5563] mt-3">Or keep scrolling to see the full deal.</p>
        </Fade>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12"><div className="h-px bg-gradient-to-r from-transparent via-[#2a3347] to-transparent" /></div>
      <TheDeal />
      <div className="max-w-7xl mx-auto px-6 md:px-12"><div className="h-px bg-gradient-to-r from-transparent via-[#2a3347] to-transparent" /></div>
      <ZrFAQ />
      <div className="max-w-7xl mx-auto px-6 md:px-12"><div className="h-px bg-gradient-to-r from-transparent via-[#2a3347] to-transparent" /></div>
      <ZrCTA />
    </>
  )
}
