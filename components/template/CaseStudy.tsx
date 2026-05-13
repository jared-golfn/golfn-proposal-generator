'use client'

import { useRef, useState } from 'react'
import { Play, TrendingUp, DollarSign, Package, Clock, ExternalLink, Volume2, VolumeX, Users, Target, BarChart3, ArrowRight, Zap, ShoppingBag, Eye, Award, Megaphone, RefreshCcw } from 'lucide-react'
import { Fade } from './Fade'

const VIDEO_MP4 = 'https://cdn.sanity.io/files/e3wja34v/production/bf78e2998073f2b7ccdc798d8f68a5cb8d601ae1.mp4'
const YOUTUBE_FULL = 'https://www.youtube.com/watch?v=e8YaanzP9oQ'

type CaseStudyId = 'miura' | 'cobra' | 'hyperice'

interface CaseStudyTab {
  id: CaseStudyId
  brand: string
  tagline: string
}

const TABS: CaseStudyTab[] = [
  { id: 'miura', brand: 'Miura Golf', tagline: '$22K wholesale · 2,764 leads · 40 days' },
  { id: 'cobra', brand: 'Cobra Golf', tagline: '$57K retail · 102 units · 6 months' },
  { id: 'hyperice', brand: 'Hyperice', tagline: '$21K retail · $0 discounts · $0 returns' },
]

// ---------------------------------------------------------------
// MIURA DATA (unchanged from the original component)
// ---------------------------------------------------------------
const miuraHero = [
  { label: 'Wholesale Revenue', value: '~$22K', sub: '45 units through GolfN', Icon: DollarSign },
  { label: 'Qualified Leads', value: '2,764', sub: 'Verified golfers, $0.28 CPL', Icon: Users },
  { label: 'Brand Impressions', value: '271K+', sub: '$10,856 equiv. at $40 CPM', Icon: Eye },
  { label: 'Order Accuracy', value: '97%', sub: 'Most shipped within 2 weeks', Icon: Award },
]

const miuraSweeps = [
  { value: '2,764', label: 'Unique Entrants', sub: 'Opted in during 22-day flight' },
  { value: '74%', label: 'Card-to-Entry Rate', sub: 'Highest in GolfN history' },
  { value: '43%', label: 'IAM Conversion', sub: '1,158 of 2,706 recipients' },
  { value: '$0.28', label: 'Cost Per Lead', sub: 'From $769 in prizes' },
]

const miuraCommerce = [
  { value: '$31,780', label: 'Net Retail Revenue', sub: '~$22K wholesale to Miura' },
  { value: '45', label: 'Units Sold', sub: '37 wedges + 8 iron sets' },
  { value: '10,951', label: 'Product Views', sub: '4,424 unique browsers' },
  { value: '271,393', label: 'Marketplace Impressions', sub: '27-day banner flight' },
]

const miuraProducts = [
  { name: 'TC-202 | Steel', units: 4, revenue: '$10,500', type: 'Iron Set' },
  { name: 'Forged Wedge Series', units: 22, revenue: '~$6,900', type: 'Wedges' },
  { name: 'K-Grind 2.0 (all)', units: 10, revenue: '$3,000', type: 'Wedges' },
  { name: 'MC-502 | Steel', units: 1, revenue: '$2,800', type: 'Iron Set' },
  { name: 'KM-700 | Steel', units: 1, revenue: '$2,800', type: 'Iron Set' },
  { name: 'Milled Tour Wedge (all)', units: 4, revenue: '$800', type: 'Wedges' },
]

// ---------------------------------------------------------------
// COBRA DATA (6 months, 4 sweeps, 2 banner windows, 102 units sold)
// ---------------------------------------------------------------
const cobraHero = [
  { label: 'Retail Revenue', value: '$57,678', sub: '102 units · $565 AOV', Icon: DollarSign },
  { label: 'Qualified Leads', value: '3,213', sub: 'Across 4 sweepstakes activations', Icon: Users },
  { label: 'Brand Impressions', value: '1.72M+', sub: 'In-app + banner + CRM + social', Icon: Eye },
  { label: 'Sweepstakes Entries', value: '584K+', sub: 'Total chances to win logged', Icon: Target },
]

const cobraSweeps = [
  { value: '4', label: 'Sweepstakes Activations', sub: 'Sep 2025 – Feb 2026' },
  { value: '3,213', label: 'Unique Entrants', sub: 'Cumulative across all sweeps' },
  { value: '584,699', label: 'Total Entries', sub: 'Tickets, points, free entries combined' },
  { value: '2', label: 'Banner Takeovers', sub: 'Cobra/PUMA + Cobra OPTM windows' },
]

const cobraCommerce = [
  { value: '$57,678', label: 'Retail Revenue', sub: 'Net $56,732 after taxes' },
  { value: '102', label: 'Units Sold', sub: 'Drivers, irons, fairways, wedges, hybrids' },
  { value: '$565', label: 'Average Order Value', sub: 'Premium club price points hold' },
  { value: '~95', label: 'Distinct Customers', sub: 'Buyers across the 6-month window' },
]

const cobraCampaigns = [
  { name: 'Gary Woodland Signed Memorabilia', dates: 'Sep 7 – Oct 6, 2025', entrants: '483', note: 'Signed memorabilia — Cobra-provided prize' },
  { name: 'Rickie Fowler Signed Cobra Driver', dates: 'Sep 7 – Oct 6, 2025', entrants: '459', note: 'Concurrent with Woodland sweep — shared push surface' },
  { name: 'Full Bag Tour Fitting at Cobra HQ', dates: 'Jan 16 – Feb 10, 2026', entrants: '868', note: '52% paid members · 50% card-view-to-entry · GolfN-funded trip' },
  { name: '2026 Cobra Driver Package (OPTM)', dates: 'Feb 5 – Feb 25, 2026', entrants: '1,403', note: 'Full OPTM driver lineup · ran with banner takeover · largest entrant pool' },
]

// ---------------------------------------------------------------
// HYPERICE DATA (2 sweeps, $0 returns, marketplace discovery story)
// ---------------------------------------------------------------
const hypericeHero = [
  { label: 'Retail Revenue', value: '$21,188', sub: '52 units · $407 AOV', Icon: DollarSign },
  { label: 'Qualified Leads', value: '2,141', sub: 'Cumulative across 2 sweeps', Icon: Users },
  { label: 'Equiv. Media Value', value: '$27.5K', sub: '655K impressions × $42 CPM', Icon: Eye },
  { label: 'Returns', value: '$0', sub: 'Zero returns across all 52 units', Icon: Award },
]

const hypericeSweeps = [
  { value: '2,141', label: 'Unique Entrants', sub: 'Across Recovery Bundle + Recovery Trio' },
  { value: '195,751', label: 'Total Entries', sub: 'Tickets 73.5% · Free 17.6% · Points 8.9%' },
  { value: '+209%', label: 'Entrants/Day Growth', sub: 'Sweep 1 → Sweep 2 iteration lift' },
  { value: '88.5%', label: 'Non-Paying Members', sub: 'Incremental reach Hyperice can\u2019t buy elsewhere' },
]

const hypericeCommerce = [
  { value: '$21,188', label: 'Retail Revenue', sub: 'Net $20,563 · taxes $625' },
  { value: '52', label: 'Units Sold', sub: 'Across 8 distinct Hyperice SKUs' },
  { value: '$0', label: 'Discounts & Returns', sub: 'Zero refund risk, premium pricing held' },
  { value: '18\u00d7', label: 'Post-Sweep View Lift', sub: '1.1/day pre \u2192 20.5/day post (sustained 6+ wks)' },
]

const hypericeProducts = [
  { name: 'Normatec 3 Leg System', units: 9, revenue: '$8,091', type: 'Compression' },
  { name: 'Normatec Elite Hips', units: 8, revenue: '$4,792', type: 'Compression' },
  { name: 'Venom 2 Back', units: 16, revenue: '$4,344', type: 'Heat/Vibration' },
  { name: 'Normatec Elite Legs (Standard)', units: 1, revenue: '$1,099', type: 'Compression' },
  { name: 'Hypervolt 2', units: 4, revenue: '$916', type: 'Massage Gun' },
  { name: 'Hypersphere Go', units: 7, revenue: '$763', type: 'Recovery Ball' },
  { name: 'Vyper 3', units: 3, revenue: '$627', type: 'Recovery Roller' },
  { name: 'Hypervolt Go 2', units: 4, revenue: '$556', type: 'Massage Gun' },
]

// ---------------------------------------------------------------
// SHARED UI HELPERS
// ---------------------------------------------------------------
function MetricGrid({ metrics, cols = 4 }: { metrics: { value: string; label: string; sub: string }[]; cols?: number }) {
  const gridCols = cols === 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2 md:grid-cols-3'
  return (
    <div className={`grid ${gridCols} gap-3 md:gap-4`}>
      {metrics.map((m) => (
        <div key={m.label} className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl p-5 text-center">
          <p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d] mb-1">{m.value}</p>
          <p className="text-sm text-white font-semibold">{m.label}</p>
          <p className="text-xs text-[#6b7280] mt-0.5">{m.sub}</p>
        </div>
      ))}
    </div>
  )
}

function HeroGrid({ metrics }: { metrics: { label: string; value: string; sub: string; Icon: typeof DollarSign }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
      {metrics.map((m) => (
        <div key={m.label} className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl p-5 text-center">
          <m.Icon className="w-5 h-5 text-[#00ff9d] mx-auto mb-2" />
          <p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d]">{m.value}</p>
          <p className="text-sm text-white font-semibold mt-1">{m.label}</p>
          <p className="text-xs text-[#6b7280] mt-0.5">{m.sub}</p>
        </div>
      ))}
    </div>
  )
}

function ProductTable({ products, totalLabel, totalUnits, totalRevenue, sourceNote }: { products: { name: string; units: number; revenue: string; type: string }[]; totalLabel: string; totalUnits: number; totalRevenue: string; sourceNote: string }) {
  return (
    <div className="px-6 md:px-8 py-6 border-t border-[#2a3347]">
      <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.15em] mb-4">Shopify Sales Detail</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="text-left text-xs font-mono text-[#6b7280] uppercase tracking-wider border-b border-[#2a3347]"><th className="py-3 pr-4">Product</th><th className="py-3 pr-4">Type</th><th className="py-3 pr-4 text-right">Units</th><th className="py-3 text-right">Net Revenue</th></tr></thead>
          <tbody>
            {products.map((p) => (<tr key={p.name} className="border-b border-[#2a3347]/30"><td className="py-3 pr-4 text-[#d1d5db] font-medium">{p.name}</td><td className="py-3 pr-4 text-[#6b7280]">{p.type}</td><td className="py-3 pr-4 text-right font-mono text-white">{p.units}</td><td className="py-3 text-right font-mono text-[#00ff9d] font-semibold">{p.revenue}</td></tr>))}
            <tr className="border-t-2 border-[#00ff9d]/20"><td className="py-3 pr-4 text-white font-bold">{totalLabel}</td><td className="py-3 pr-4"></td><td className="py-3 pr-4 text-right font-mono text-white font-bold">{totalUnits}</td><td className="py-3 text-right font-mono text-[#00ff9d] font-bold">{totalRevenue}</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-[#4b5563] mt-3">{sourceNote}</p>
    </div>
  )
}

// ---------------------------------------------------------------
// PER-BRAND PANELS
// ---------------------------------------------------------------
function MiuraPanel() {
  return (
    <>
      <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[0.95] tracking-tight mb-5">
        Miura Golf: <span className="text-gradient">$22K wholesale,</span><br />
        <span className="text-gradient">2,764 leads, 40 days</span>
      </h2>
      <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-8 mb-4">
        In March 2026, GolfN launched a Miura Forged Wedge Trio sweepstakes. Miura provided the prizes &mdash; three forged wedges ($769 wholesale). GolfN handled everything else &mdash; creative, distribution, CRM, fulfillment. Here is exactly what happened.
      </p>
      <HeroGrid metrics={miuraHero} />
      <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl px-8 py-7 mb-12">
        <p className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-3">
          {'"You guys are doing exactly what you figured you would do. The consumer base is latching on. '}
          <span className="text-[#00ff9d]">We never doubted for a second.</span>{'"'}
        </p>
        <p className="text-sm text-[#6b7280]">Anthony Newville, President &mdash; Miura Golf &middot; May 5, 2026 Partnership Review</p>
      </div>
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00ff9d]/10 text-[#00ff9d] font-mono font-bold text-sm">1</div>
          <div>
            <p className="text-lg font-bold text-white">Sweepstakes Campaign</p>
            <p className="text-sm text-[#6b7280]">Forged Wedge Trio &middot; March 4&ndash;25, 2026 &middot; 22 days</p>
          </div>
        </div>
        <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
          <div className="px-6 md:px-8 py-6">
            <p className="text-base text-[#d1d5db] leading-7 mb-6">Miura provided three forged wedges ($999 retail / $769 wholesale). GolfN ran the full campaign: launch IAM, three final-day push sequences, and 22 days of organic in-app discovery. The result was the highest card-to-entry conversion rate in GolfN history.</p>
            <MetricGrid metrics={miuraSweeps} />
          </div>
          <div className="px-6 md:px-8 py-6 border-t border-[#2a3347]">
            <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.15em] mb-4">Conversion Funnel</p>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl px-5 py-4 text-center flex-1 min-w-[140px]"><p className="text-xs text-[#6b7280] mb-1">Card Views</p><p className="text-2xl font-mono font-bold text-white">3,732</p><p className="text-xs text-[#6b7280]">unique</p></div>
              <ArrowRight className="w-5 h-5 text-[#00ff9d] shrink-0" />
              <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl px-5 py-4 text-center flex-1 min-w-[140px]"><p className="text-xs text-[#00ff9d] mb-1">74% entered</p><p className="text-2xl font-mono font-bold text-[#00ff9d]">2,764</p><p className="text-xs text-[#6b7280]">unique entrants</p></div>
              <ArrowRight className="w-5 h-5 text-[#00ff9d] shrink-0" />
              <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl px-5 py-4 text-center flex-1 min-w-[140px]"><p className="text-xs text-[#6b7280] mb-1">Industry Avg.</p><p className="text-2xl font-mono font-bold text-[#4b5563]">2&ndash;5%</p><p className="text-xs text-[#6b7280]">landing page</p></div>
            </div>
          </div>
          <div className="px-6 md:px-8 py-6 border-t border-[#2a3347] bg-[#0f1217]">
            <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.15em] mb-4">Channel Breakdown</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div><h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2"><Zap className="w-4 h-4 text-[#00ff9d]" /> In-App Messages</h4><p className="text-sm text-[#d1d5db] leading-6">Launch IAM on day 7 drove 1,158 conversions from 2,706 recipients &mdash; <span className="text-[#00ff9d] font-semibold">43% conversion rate</span>. Three creative variants A/B/C tested simultaneously.</p></div>
              <div><h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2"><Target className="w-4 h-4 text-[#00ff9d]" /> Push Campaigns</h4><p className="text-sm text-[#d1d5db] leading-6">Final-day push to active entrants converted at <span className="text-[#00ff9d] font-semibold">34%</span>. Non-entrant push converted at 5%. Total push reach: 4,813 delivered.</p></div>
              <div><h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2"><Eye className="w-4 h-4 text-[#00ff9d]" /> Organic Discovery</h4><p className="text-sm text-[#d1d5db] leading-6">60,166 sweepstakes page views organically. Daily unique entrants grew steadily from 69 to 448, peaking on the final day with push support.</p></div>
            </div>
          </div>
          <div className="px-6 md:px-8 py-6 border-t border-[#2a3347]">
            <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.15em] mb-4">Audience Profile &mdash; 2,764 Miura Entrants</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center"><p className="text-2xl font-mono font-bold text-[#00ff9d]">79%</p><p className="text-xs text-[#9ca3af]">Active in last 30 days</p></div>
              <div className="text-center"><p className="text-2xl font-mono font-bold text-white">67%</p><p className="text-xs text-[#9ca3af]">Handicap 10&ndash;24</p></div>
              <div className="text-center"><p className="text-2xl font-mono font-bold text-white">70%</p><p className="text-xs text-[#9ca3af]">iOS users</p></div>
              <div className="text-center"><p className="text-2xl font-mono font-bold text-white">32%</p><p className="text-xs text-[#9ca3af]">Full adoption users</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00ff9d]/10 text-[#00ff9d] font-mono font-bold text-sm">2</div>
          <div>
            <p className="text-lg font-bold text-white">Points Exchange Commerce</p>
            <p className="text-sm text-[#6b7280]">March 17 &ndash; May 5, 2026 &middot; $31,780 net revenue</p>
          </div>
        </div>
        <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
          <div className="px-6 md:px-8 py-6">
            <p className="text-base text-[#d1d5db] leading-7 mb-6">Miura launched in the GolfN Points Exchange eight days before the sweepstakes closed. The sweep-to-commerce pipeline worked exactly as designed: golfers who entered the sweepstakes and didn&rsquo;t win found Miura products available for purchase with points. The day after the sweepstakes closed was Miura&rsquo;s single highest-traffic day.</p>
            <MetricGrid metrics={miuraCommerce} />
          </div>
          <ProductTable products={miuraProducts} totalLabel="Total" totalUnits={45} totalRevenue="$31,780" sourceNote="Source: Shopify. Net excludes $4,520 in returns. Miura wholesale revenue estimated ~$22K based on standard wholesale pricing." />
          <div className="px-6 md:px-8 py-6 border-t border-[#2a3347] bg-[#0f1217]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div><h4 className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-2">Operations</h4><p className="text-sm text-[#d1d5db] leading-6">97% of orders submitted into Miura&rsquo;s system without issues. Most shipped within two weeks. Two sellouts were same-day timing &mdash; not process failures.</p></div>
              <div><h4 className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-2">Post-Sweep Commerce</h4><p className="text-sm text-[#d1d5db] leading-6">Marketplace banner captured 271,393 impressions over 27 days &mdash; $10,856 in display ad value at $40 CPM. Peak: 398 product views the day after the sweepstakes closed.</p></div>
              <div><h4 className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-2">What Happened Next</h4><p className="text-sm text-[#d1d5db] leading-6">Miura immediately committed to two additional promotional campaigns, starting with the CB-302 iron set. The partnership is expanding, not winding down.</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-8 md:p-10 text-center">
        <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-4">Miura provided <span className="text-[#00ff9d]">$769 in prizes</span>. GolfN delivered <span className="text-[#00ff9d]">$22K wholesale revenue</span>,{' '}<span className="text-[#00ff9d]">2,764 first-party leads</span>, and <span className="text-[#00ff9d]">$10,856 in brand impressions</span>.</p>
        <p className="text-lg text-[#9ca3af] max-w-2xl mx-auto">No startup fees. No ad spend. Miura provided product. GolfN did the rest.</p>
      </div>
    </>
  )
}

function CobraPanel() {
  return (
    <>
      <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[0.95] tracking-tight mb-5">
        Cobra Golf: <span className="text-gradient">$57K retail,</span><br />
        <span className="text-gradient">102 units, 6 months</span>
      </h2>
      <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-8 mb-4">
        Cobra was GolfN&rsquo;s most active equipment partner in 2025&ndash;2026: four sweepstakes activations spanning signed memorabilia, a Cobra HQ fitting experience, and the 2026 OPTM driver launch &mdash; plus two featured marketplace banner windows. 102 Cobra units sold across drivers, irons, fairways, wedges, and hybrids.
      </p>
      <HeroGrid metrics={cobraHero} />
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00ff9d]/10 text-[#00ff9d] font-mono font-bold text-sm">1</div>
          <div>
            <p className="text-lg font-bold text-white">Sweepstakes Portfolio</p>
            <p className="text-sm text-[#6b7280]">4 activations &middot; Sep 7, 2025 &ndash; Feb 25, 2026 &middot; 3,213 unique entrants</p>
          </div>
        </div>
        <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
          <div className="px-6 md:px-8 py-6">
            <p className="text-base text-[#d1d5db] leading-7 mb-6">Four distinct Cobra sweepstakes ran across six months. Each tested a different prize mechanic: tour-pro memorabilia (Woodland, Fowler), a flagship Cobra HQ fitting experience, and a new-product launch package (2026 OPTM driver lineup). The Driver Package became the largest single Cobra sweep on the platform.</p>
            <MetricGrid metrics={cobraSweeps} />
          </div>
          <div className="px-6 md:px-8 py-6 border-t border-[#2a3347]">
            <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.15em] mb-4">Campaign-by-Campaign</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cobraCampaigns.map((c) => (
                <div key={c.name} className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl p-5">
                  <p className="text-sm font-semibold text-white mb-1">{c.name}</p>
                  <p className="text-xs text-[#6b7280] mb-3 font-mono">{c.dates}</p>
                  <p className="text-2xl font-mono font-bold text-[#00ff9d] mb-2">{c.entrants} <span className="text-xs text-[#6b7280] font-normal font-sans">entrants</span></p>
                  <p className="text-xs text-[#9ca3af] leading-5">{c.note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="px-6 md:px-8 py-6 border-t border-[#2a3347] bg-[#0f1217]">
            <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.15em] mb-4">Audience Profile &mdash; 2026 Sweepstakes Cohort (n~2,271)</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center"><p className="text-2xl font-mono font-bold text-[#00ff9d]">52%</p><p className="text-xs text-[#9ca3af]">Paid GolfN members (Fitting Card)</p></div>
              <div className="text-center"><p className="text-2xl font-mono font-bold text-white">50%</p><p className="text-xs text-[#9ca3af]">Card-view-to-entry rate</p></div>
              <div className="text-center"><p className="text-2xl font-mono font-bold text-white">64&ndash;74%</p><p className="text-xs text-[#9ca3af]">iOS user share</p></div>
              <div className="text-center"><p className="text-2xl font-mono font-bold text-white">2,323</p><p className="text-xs text-[#9ca3af]">Marketplace browsers</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00ff9d]/10 text-[#00ff9d] font-mono font-bold text-sm">2</div>
          <div>
            <p className="text-lg font-bold text-white">Marketplace Banner &amp; Commerce</p>
            <p className="text-sm text-[#6b7280]">2 featured banner windows &middot; 102 units sold &middot; $57,678 retail</p>
          </div>
        </div>
        <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
          <div className="px-6 md:px-8 py-6">
            <p className="text-base text-[#d1d5db] leading-7 mb-6">Cobra held the featured marketplace banner twice in this window. The first slot followed the Woodland + Fowler sweeps (Oct 9 &ndash; Nov 12, 2025) as a Cobra/PUMA takeover. The second was a full Cobra OPTM brand takeover (Feb 4 &ndash; Feb 27, 2026) running concurrent with the Fitting Card and OPTM Driver Package sweeps &mdash; featured banner + two active sweepstakes + final-day push pulses on Feb 10 and Feb 25.</p>
            <MetricGrid metrics={cobraCommerce} />
          </div>
          <div className="px-6 md:px-8 py-6 border-t border-[#2a3347] bg-[#0f1217]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div><h4 className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-2"><Megaphone className="w-4 h-4 inline mr-1 text-[#00ff9d]" />Reach</h4><p className="text-sm text-[#d1d5db] leading-6">1.72M+ total Cobra brand impressions across in-app surfaces, marketplace banner, CRM (Braze push/email/IAM), organic social (Meta/X/LinkedIn/YouTube), and paid Meta.</p></div>
              <div><h4 className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-2"><ShoppingBag className="w-4 h-4 inline mr-1 text-[#00ff9d]" />Commerce mix</h4><p className="text-sm text-[#d1d5db] leading-6">102 units across drivers, irons, fairways, wedges, and hybrids. $565 average order value confirms Cobra&rsquo;s premium price points hold in this audience.</p></div>
              <div><h4 className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-2"><RefreshCcw className="w-4 h-4 inline mr-1 text-[#00ff9d]" />Repeat partner</h4><p className="text-sm text-[#d1d5db] leading-6">Two banner windows, four sweepstakes, two co-funded campaigns (Fitting Card trip + OPTM driver package). Cobra came back four times in six months.</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-8 md:p-10 text-center">
        <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-4">Cobra: <span className="text-[#00ff9d]">$57K retail revenue</span>, <span className="text-[#00ff9d]">3,213 leads</span>, and <span className="text-[#00ff9d]">1.72M brand impressions</span> across six months.</p>
        <p className="text-lg text-[#9ca3af] max-w-2xl mx-auto">The full-spectrum playbook: signed memorabilia, brand experience prize, product launch campaign, two banner takeovers. Cobra came back four times.</p>
      </div>
    </>
  )
}

function HypericePanel() {
  return (
    <>
      <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[0.95] tracking-tight mb-5">
        Hyperice: <span className="text-gradient">$21K retail,</span><br />
        <span className="text-gradient">$0 discounts, $0 returns</span>
      </h2>
      <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-8 mb-4">
        Two Hyperice sweepstakes &mdash; Recovery Bundle (Nov 2025) and Recovery Trio (Mar 2026) &mdash; built a 2,141-entrant audience and seeded a marketplace storefront that has kept producing views and sales for six weeks after the second sweep ended. 52 units sold at $407 AOV with zero discounts and zero returns.
      </p>
      <HeroGrid metrics={hypericeHero} />
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00ff9d]/10 text-[#00ff9d] font-mono font-bold text-sm">1</div>
          <div>
            <p className="text-lg font-bold text-white">Sweepstakes Portfolio</p>
            <p className="text-sm text-[#6b7280]">2 activations &middot; Nov 18, 2025 &ndash; Apr 1, 2026 &middot; 2,141 unique entrants</p>
          </div>
        </div>
        <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
          <div className="px-6 md:px-8 py-6">
            <p className="text-base text-[#d1d5db] leading-7 mb-6">The Recovery Bundle ran for 30 days (Nov &rsquo;25) and pulled 678 unique entrants. The Recovery Trio ran for just 21 days (Mar &rsquo;26) and pulled 1,463 &mdash; a 116% lift in unique entrants in a 30% shorter window. Iteration compounds: entrants per day grew +209% sweep-over-sweep.</p>
            <MetricGrid metrics={hypericeSweeps} />
          </div>
          <div className="px-6 md:px-8 py-6 border-t border-[#2a3347] bg-[#0f1217]">
            <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.15em] mb-4">Iteration Lift &mdash; Recovery Bundle &rarr; Recovery Trio</p>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl px-5 py-4 text-center flex-1 min-w-[160px]"><p className="text-xs text-[#6b7280] mb-1">Sweep 1: 30 days</p><p className="text-2xl font-mono font-bold text-white">22.6</p><p className="text-xs text-[#6b7280]">entrants per day</p></div>
              <ArrowRight className="w-5 h-5 text-[#00ff9d] shrink-0" />
              <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl px-5 py-4 text-center flex-1 min-w-[160px]"><p className="text-xs text-[#00ff9d] mb-1">+209%</p><p className="text-2xl font-mono font-bold text-[#00ff9d]">69.7</p><p className="text-xs text-[#6b7280]">entrants per day</p></div>
              <ArrowRight className="w-5 h-5 text-[#00ff9d] shrink-0" />
              <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl px-5 py-4 text-center flex-1 min-w-[160px]"><p className="text-xs text-[#6b7280] mb-1">Sweep 2: 21 days</p><p className="text-2xl font-mono font-bold text-white">1,463</p><p className="text-xs text-[#6b7280]">total entrants</p></div>
            </div>
          </div>
          <div className="px-6 md:px-8 py-6 border-t border-[#2a3347]">
            <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.15em] mb-4">Audience Profile &mdash; Recovery Trio Cohort (n=1,463)</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center"><p className="text-2xl font-mono font-bold text-[#00ff9d]">88.5%</p><p className="text-xs text-[#9ca3af]">No paid GolfN membership</p></div>
              <div className="text-center"><p className="text-2xl font-mono font-bold text-white">36%</p><p className="text-xs text-[#9ca3af]">Public course players</p></div>
              <div className="text-center"><p className="text-2xl font-mono font-bold text-white">24%</p><p className="text-xs text-[#9ca3af]">Semi-private course players</p></div>
              <div className="text-center"><p className="text-2xl font-mono font-bold text-white">64</p><p className="text-xs text-[#9ca3af]">UK&ndash;England entrants</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00ff9d]/10 text-[#00ff9d] font-mono font-bold text-sm">2</div>
          <div>
            <p className="text-lg font-bold text-white">Marketplace Discovery &amp; Commerce</p>
            <p className="text-sm text-[#6b7280]">52 units sold &middot; $21,188 retail &middot; 18&times; post-sweep product-view lift</p>
          </div>
        </div>
        <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
          <div className="px-6 md:px-8 py-6">
            <p className="text-base text-[#d1d5db] leading-7 mb-6">The sweepstakes wasn&rsquo;t a one-shot impression event &mdash; it was a discovery mechanism. Daily Hyperice product views averaged 1.1/day before the sweep, 11.2/day during, and <strong className="text-white">20.5/day after</strong>. Six weeks post-sweep, daily views are still nearly 2&times; higher than during the sweep itself. The peak day (58 views) was 24 days after the sweepstakes ended.</p>
            <MetricGrid metrics={hypericeCommerce} />
          </div>
          <ProductTable products={hypericeProducts} totalLabel="Total" totalUnits={52} totalRevenue="$21,188" sourceNote="Source: Shopify Sales by Product, Hyperice brand filter. Zero discounts and zero returns across all 8 SKUs. Top three SKUs (Normatec 3 Leg System, Normatec Elite Hips, Venom 2 Back) = 33 of 52 units (63.5%) and $17,227 of revenue (81.3%)." />
          <div className="px-6 md:px-8 py-6 border-t border-[#2a3347] bg-[#0f1217]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div><h4 className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-2"><Award className="w-4 h-4 inline mr-1 text-[#00ff9d]" />Clean economics</h4><p className="text-sm text-[#d1d5db] leading-6">Zero discounts and zero returns across all 52 Hyperice units. Premium pricing held end-to-end &mdash; the Normatec 3 Leg System moved 9 units at $8,091 without a single promotional mechanic.</p></div>
              <div><h4 className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-2"><Eye className="w-4 h-4 inline mr-1 text-[#00ff9d]" />Free media bonus</h4><p className="text-sm text-[#d1d5db] leading-6">655,588 sweepstakes page impressions delivered to Hyperice during the Recovery Trio window = <span className="text-[#00ff9d] font-semibold">$27.5K in equivalent media value</span> at Golf Digest&rsquo;s $42 CPM rate. Hyperice paid GolfN $0 for these impressions.</p></div>
              <div><h4 className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-2"><Target className="w-4 h-4 inline mr-1 text-[#00ff9d]" />Incremental reach</h4><p className="text-sm text-[#d1d5db] leading-6">88.5% of the Recovery Trio cohort had no paid GolfN membership &mdash; meaning these are customers Hyperice can&rsquo;t reach through their own paid channels.</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-8 md:p-10 text-center">
        <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-4">Hyperice: <span className="text-[#00ff9d]">$21K retail</span>, <span className="text-[#00ff9d]">$0 discounts</span>, <span className="text-[#00ff9d]">$0 returns</span>, and a marketplace audience still <span className="text-[#00ff9d]">browsing 6 weeks later</span>.</p>
        <p className="text-lg text-[#9ca3af] max-w-2xl mx-auto">The proof that sweepstakes don&rsquo;t end when the prize is awarded. They start a relationship between the brand and a verified audience.</p>
      </div>
    </>
  )
}

// ---------------------------------------------------------------
// MAIN COMPONENT (tab strip + active panel + L.A.B. video footer)
// ---------------------------------------------------------------
export function CaseStudy() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [activeTab, setActiveTab] = useState<CaseStudyId>('miura')

  function toggleMute() {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setIsMuted(v.muted)
  }

  return (
    <section className="py-20 md:py-28" id="case-study">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-4">
            <Play className="w-5 h-5 text-[#00ff9d]" />
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">Proof</p>
          </div>
          <p className="text-sm md:text-base text-[#9ca3af] mb-6 max-w-3xl">Three brand wins, each from a different category of partnership. Click through to see what actually happened.</p>
        </Fade>

        <Fade delay={0.02}>
          <div className="flex flex-wrap gap-2 mb-10 border-b border-[#2a3347]/60 pb-1">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`group relative px-4 md:px-6 py-3 md:py-4 rounded-t-lg transition-all duration-200 ${activeTab === t.id ? 'bg-[#1a1f2e] border border-[#2a3347] border-b-transparent -mb-px' : 'border border-transparent hover:bg-[#1a1f2e]/40'}`}
              >
                <p className={`text-sm md:text-base font-bold text-left ${activeTab === t.id ? 'text-[#00ff9d]' : 'text-white group-hover:text-[#00ff9d]'}`}>{t.brand}</p>
                <p className="text-xs text-[#6b7280] mt-0.5 text-left">{t.tagline}</p>
              </button>
            ))}
          </div>
        </Fade>

        <Fade key={activeTab} delay={0.04}>
          {activeTab === 'miura' && <MiuraPanel />}
          {activeTab === 'cobra' && <CobraPanel />}
          {activeTab === 'hyperice' && <HypericePanel />}
        </Fade>

        <Fade delay={0.14}>
          <div className="mt-12 bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
            <div className="relative bg-black">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <video ref={videoRef} src={VIDEO_MP4} autoPlay muted loop playsInline preload="metadata" controls controlsList="nodownload" className="absolute inset-0 w-full h-full object-contain" />
                <button onClick={toggleMute} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors">
                  {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-[#00ff9d]" />}
                </button>
              </div>
            </div>
            <div className="px-6 md:px-8 py-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">L.A.B. Golf &mdash; $55,061 net sales</p>
                <p className="text-xs text-[#6b7280]">Another partner. Same playbook. 113 premium putters at ~$487 average order.</p>
              </div>
              <a href={YOUTUBE_FULL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#00ff9d] hover:underline transition-colors shrink-0">Watch <ExternalLink className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}
