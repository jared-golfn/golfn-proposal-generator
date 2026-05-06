'use client'

import { useRef, useState } from 'react'
import { Play, TrendingUp, DollarSign, Package, Clock, ExternalLink, Volume2, VolumeX, Users, Target, BarChart3, ArrowRight, Zap, ShoppingBag, Eye, Award } from 'lucide-react'
import { Fade } from './Fade'

const VIDEO_MP4 = 'https://cdn.sanity.io/files/e3wja34v/production/bf78e2998073f2b7ccdc798d8f68a5cb8d601ae1.mp4'
const YOUTUBE_FULL = 'https://www.youtube.com/watch?v=e8YaanzP9oQ'

/* ───── Miura data from the May 5 2026 campaign wrap report ───── */

const heroMetrics = [
  { label: 'Wholesale Revenue', value: '~$22K', sub: '45 units through GolfN', Icon: DollarSign },
  { label: 'Qualified Leads', value: '2,764', sub: 'Verified golfers, $0.28 CPL', Icon: Users },
  { label: 'Brand Impressions', value: '271K+', sub: '$10,856 equiv. at $40 CPM', Icon: Eye },
  { label: 'Order Accuracy', value: '97%', sub: 'Most shipped within 2 weeks', Icon: Award },
]

const sweepsMetrics = [
  { value: '2,764', label: 'Unique Entrants', sub: 'Opted in during 22-day flight' },
  { value: '74%', label: 'Card-to-Entry Rate', sub: 'Highest in GolfN history' },
  { value: '43%', label: 'IAM Conversion', sub: '1,158 of 2,706 recipients' },
  { value: '$0.28', label: 'Cost Per Lead', sub: 'From $769 in prizes' },
]

const commerceMetrics = [
  { value: '$31,780', label: 'Net Retail Revenue', sub: '~$22K wholesale to Miura' },
  { value: '45', label: 'Units Sold', sub: '37 wedges + 8 iron sets' },
  { value: '10,951', label: 'Product Views', sub: '4,424 unique browsers' },
  { value: '271,393', label: 'Marketplace Impressions', sub: '27-day banner flight' },
]

const topProducts = [
  { name: 'TC-202 | Steel', units: 4, revenue: '$10,500', type: 'Iron Set' },
  { name: 'Forged Wedge Series', units: 22, revenue: '~$6,900', type: 'Wedges' },
  { name: 'K-Grind 2.0 (all)', units: 10, revenue: '$3,000', type: 'Wedges' },
  { name: 'MC-502 | Steel', units: 1, revenue: '$2,800', type: 'Iron Set' },
  { name: 'KM-700 | Steel', units: 1, revenue: '$2,800', type: 'Iron Set' },
  { name: 'Milled Tour Wedge (all)', units: 4, revenue: '$800', type: 'Wedges' },
]

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

export function CaseStudy() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  function toggleMute() {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setIsMuted(v.muted)
  }

  return (
    <section className="py-20 md:py-28" id="case-study">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ─── Header ─── */}
        <Fade>
          <div className="flex items-center gap-3 mb-4">
            <Play className="w-5 h-5 text-[#00ff9d]" />
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">Proof</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[0.95] tracking-tight mb-5">
            Miura Golf: <span className="text-gradient">$22K wholesale,</span><br />
            <span className="text-gradient">2,764 leads, 40 days</span>
          </h2>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-8 mb-4">
            In March 2026, GolfN launched a Miura Forged Wedge Trio sweepstakes. Miura provided the prizes — three forged wedges ($769 wholesale). GolfN handled everything else — creative, distribution, CRM, fulfillment. Here is exactly what happened.
          </p>
        </Fade>

        {/* ─── Hero Metrics ─── */}
        <Fade delay={0.04}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
            {heroMetrics.map((m) => (
              <div key={m.label} className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl p-5 text-center">
                <m.Icon className="w-5 h-5 text-[#00ff9d] mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d]">{m.value}</p>
                <p className="text-sm text-white font-semibold mt-1">{m.label}</p>
                <p className="text-xs text-[#6b7280] mt-0.5">{m.sub}</p>
              </div>
            ))}
          </div>
        </Fade>

        {/* ─── Partner Quote ─── */}
        <Fade delay={0.06}>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl px-8 py-7 mb-12">
            <p className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-3">
              {'"You guys are doing exactly what you figured you would do. The consumer base is latching on. '}
              <span className="text-[#00ff9d]">We never doubted for a second.</span>{'"'}
            </p>
            <p className="text-sm text-[#6b7280]">Anthony Newville, VP Sales — Miura Golf · May 5, 2026 Partnership Review</p>
          </div>
        </Fade>


        {/* ═══ PART 1: SWEEPSTAKES ═══ */}
        <Fade delay={0.08}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00ff9d]/10 text-[#00ff9d] font-mono font-bold text-sm">1</div>
              <div>
                <p className="text-lg font-bold text-white">Sweepstakes Campaign</p>
                <p className="text-sm text-[#6b7280]">Forged Wedge Trio · March 4–25, 2026 · 22 days</p>
              </div>
            </div>

            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
              <div className="px-6 md:px-8 py-6">
                <p className="text-base text-[#d1d5db] leading-7 mb-6">
                  Miura provided three forged wedges ($999 retail / $769 wholesale). GolfN ran the full campaign: launch IAM, three final-day push sequences, and 22 days of organic in-app discovery. The result was the highest card-to-entry conversion rate in GolfN history.
                </p>
                <MetricGrid metrics={sweepsMetrics} />
              </div>

              {/* Funnel visualization */}
              <div className="px-6 md:px-8 py-6 border-t border-[#2a3347]">
                <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.15em] mb-4">Conversion Funnel</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl px-5 py-4 text-center flex-1 min-w-[140px]">
                    <p className="text-xs text-[#6b7280] mb-1">Card Views</p>
                    <p className="text-2xl font-mono font-bold text-white">3,732</p>
                    <p className="text-xs text-[#6b7280]">unique</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#00ff9d] shrink-0" />
                  <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl px-5 py-4 text-center flex-1 min-w-[140px]">
                    <p className="text-xs text-[#00ff9d] mb-1">74% entered</p>
                    <p className="text-2xl font-mono font-bold text-[#00ff9d]">2,764</p>
                    <p className="text-xs text-[#6b7280]">unique entrants</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#00ff9d] shrink-0" />
                  <div className="bg-[#0f1217] border border-[#2a3347]/60 rounded-xl px-5 py-4 text-center flex-1 min-w-[140px]">
                    <p className="text-xs text-[#6b7280] mb-1">Industry Avg.</p>
                    <p className="text-2xl font-mono font-bold text-[#4b5563]">2–5%</p>
                    <p className="text-xs text-[#6b7280]">landing page</p>
                  </div>
                </div>
              </div>

              {/* Channel performance */}
              <div className="px-6 md:px-8 py-6 border-t border-[#2a3347] bg-[#0f1217]">
                <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.15em] mb-4">Channel Breakdown</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#00ff9d]" /> In-App Messages
                    </h4>
                    <p className="text-sm text-[#d1d5db] leading-6">Launch IAM on day 7 drove 1,158 conversions from 2,706 recipients — <span className="text-[#00ff9d] font-semibold">43% conversion rate</span>. Three creative variants A/B/C tested simultaneously.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-[#00ff9d]" /> Push Campaigns
                    </h4>
                    <p className="text-sm text-[#d1d5db] leading-6">Final-day push to active entrants converted at <span className="text-[#00ff9d] font-semibold">34%</span>. Non-entrant push converted at 5%. Total push reach: 4,813 delivered.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                      <Eye className="w-4 h-4 text-[#00ff9d]" /> Organic Discovery
                    </h4>
                    <p className="text-sm text-[#d1d5db] leading-6">60,166 sweepstakes page views organically. Daily unique entrants grew steadily from 69 to 448, peaking on the final day with push support.</p>
                  </div>
                </div>
              </div>

              {/* Audience profile */}
              <div className="px-6 md:px-8 py-6 border-t border-[#2a3347]">
                <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.15em] mb-4">Audience Profile — 2,764 Miura Entrants</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-mono font-bold text-[#00ff9d]">79%</p>
                    <p className="text-xs text-[#9ca3af]">Active in last 30 days</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-mono font-bold text-white">67%</p>
                    <p className="text-xs text-[#9ca3af]">Handicap 10–24</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-mono font-bold text-white">70%</p>
                    <p className="text-xs text-[#9ca3af]">iOS users</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-mono font-bold text-white">32%</p>
                    <p className="text-xs text-[#9ca3af]">Full adoption users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>


        {/* ═══ PART 2: COMMERCE ═══ */}
        <Fade delay={0.1}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00ff9d]/10 text-[#00ff9d] font-mono font-bold text-sm">2</div>
              <div>
                <p className="text-lg font-bold text-white">Points Exchange Commerce</p>
                <p className="text-sm text-[#6b7280]">March 17 – May 5, 2026 · $31,780 net revenue</p>
              </div>
            </div>

            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
              <div className="px-6 md:px-8 py-6">
                <p className="text-base text-[#d1d5db] leading-7 mb-6">
                  Miura launched in the GolfN Points Exchange eight days before the sweepstakes closed. The sweep-to-commerce pipeline worked exactly as designed: golfers who entered the sweepstakes and didn't win found Miura products available for purchase with points. The day after the sweepstakes closed was Miura's single highest-traffic day.
                </p>
                <MetricGrid metrics={commerceMetrics} />
              </div>

              {/* Product detail */}
              <div className="px-6 md:px-8 py-6 border-t border-[#2a3347]">
                <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.15em] mb-4">Shopify Sales Detail</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-xs font-mono text-[#6b7280] uppercase tracking-wider border-b border-[#2a3347]">
                        <th className="py-3 pr-4">Product</th>
                        <th className="py-3 pr-4">Type</th>
                        <th className="py-3 pr-4 text-right">Units</th>
                        <th className="py-3 text-right">Net Revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topProducts.map((p) => (
                        <tr key={p.name} className="border-b border-[#2a3347]/30">
                          <td className="py-3 pr-4 text-[#d1d5db] font-medium">{p.name}</td>
                          <td className="py-3 pr-4 text-[#6b7280]">{p.type}</td>
                          <td className="py-3 pr-4 text-right font-mono text-white">{p.units}</td>
                          <td className="py-3 text-right font-mono text-[#00ff9d] font-semibold">{p.revenue}</td>
                        </tr>
                      ))}
                      <tr className="border-t-2 border-[#00ff9d]/20">
                        <td className="py-3 pr-4 text-white font-bold">Total</td>
                        <td className="py-3 pr-4"></td>
                        <td className="py-3 pr-4 text-right font-mono text-white font-bold">45</td>
                        <td className="py-3 text-right font-mono text-[#00ff9d] font-bold">$31,780</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-[#4b5563] mt-3">Source: Shopify. Net excludes $4,520 in returns. Miura wholesale revenue estimated ~$22K based on standard wholesale pricing.</p>
              </div>

              {/* Operations */}
              <div className="px-6 md:px-8 py-6 border-t border-[#2a3347] bg-[#0f1217]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-2">Operations</h4>
                    <p className="text-sm text-[#d1d5db] leading-6">97% of orders submitted into Miura's system without issues. Most shipped within two weeks. Two sellouts were same-day timing — not process failures.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-2">Post-Sweep Commerce</h4>
                    <p className="text-sm text-[#d1d5db] leading-6">Marketplace banner captured 271,393 impressions over 27 days — $10,856 in display ad value at $40 CPM. Peak: 398 product views the day after the sweepstakes closed.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-2">Partnership Trajectory</h4>
                    <p className="text-sm text-[#d1d5db] leading-6">Miura moved to net 30 terms. Approaching $50K premier dealer threshold. Next campaign: CB302 iron set giveaway with full custom specs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>


        {/* ─── Bottom Line ─── */}
        <Fade delay={0.12}>
          <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-8 md:p-10 text-center">
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-4">
              Miura provided <span className="text-[#00ff9d]">$769 in prizes</span>. GolfN delivered <span className="text-[#00ff9d]">$22K wholesale revenue</span>,{' '}
              <span className="text-[#00ff9d]">2,764 first-party leads</span>, and <span className="text-[#00ff9d]">$10,856 in brand impressions</span>.
            </p>
            <p className="text-lg text-[#9ca3af] max-w-2xl mx-auto">
              No startup fees. No ad spend. Miura provided product. GolfN did the rest.
            </p>
          </div>
        </Fade>


        {/* ─── L.A.B. Golf Secondary Proof ─── */}
        <Fade delay={0.14}>
          <div className="mt-12 bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
            <div className="relative bg-black">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <video
                  ref={videoRef}
                  src={VIDEO_MP4}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  controls
                  controlsList="nodownload"
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <button
                  onClick={toggleMute}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors"
                >
                  {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-[#00ff9d]" />}
                </button>
              </div>
            </div>
            <div className="px-6 md:px-8 py-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">L.A.B. Golf — $55,061 net sales</p>
                <p className="text-xs text-[#6b7280]">Another partner. Same playbook. 113 premium putters at ~$487 average order.</p>
              </div>
              <a href={YOUTUBE_FULL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#00ff9d] hover:underline transition-colors shrink-0">
                Watch <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </Fade>

      </div>
    </section>
  )
}
