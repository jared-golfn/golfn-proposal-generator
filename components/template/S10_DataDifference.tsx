'use client'

import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'

const proofCards = [
  { label: 'Verified Identity', desc: 'Every user is a real, verified golfer. No bots, no modeled audiences.' },
  { label: 'Verified Equipment', desc: 'GolfN knows what clubs users carry, what they play, and what they are considering.' },
  { label: 'Verified Spend', desc: 'Real purchase behavior and price sensitivity from marketplace and redemption data.' },
  { label: 'Verified Behavior', desc: 'Rounds played, courses visited, handicap changes, check-in frequency, and play patterns.' },
  { label: '100% First-Party', desc: 'All data is first-party, collected directly from user interactions inside the GolfN ecosystem.' },
  { label: 'Guaranteed Delivery', desc: 'Impressions are delivered to real golfers in a golf-native environment. No fraud, no waste.' },
]

const differentiators = [
  {
    label: 'Verified Golfers',
    golfn: 'Every user is a verified golfer who uses the app on the course.',
    broad: 'Inferred golfers from modeled interests and browsing behavior.',
  },
  {
    label: 'Behavioral Signal',
    golfn: 'Real engagement data: rounds played, equipment used, courses visited, handicap changes.',
    broad: 'Click and impression data. No real-world behavior.',
  },
  {
    label: 'Context',
    golfn: 'Golf-native environment. Users are actively engaged in golf when they see your brand.',
    broad: 'Mixed content feed. Golf competes with everything else.',
  },
  {
    label: 'Education',
    golfn: 'Learn & Earn with verified comprehension. Users prove they understand your product.',
    broad: 'Not available on any broad platform.',
  },
  {
    label: 'Post-Purchase',
    golfn: 'Course use verification, check-ins, ongoing engagement measurement.',
    broad: 'Retargeting only. No real-world usage data.',
  },
  {
    label: 'Attribution',
    golfn: 'Full path from impression to education to conversion to real-world use.',
    broad: 'Landing page handoff. Attribution stops at click.',
  },
]

export function S10_DataDifference({ partner }: { partner: PartnerData }) {
  return (
    <section className="py-20 md:py-28">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <p className="text-xs font-mono tracking-[0.2em] uppercase mb-4" style={{ color: partner.primaryColor }}>Data Advantage</p>
          <h2 className="font-display text-3xl md:text-5xl leading-[0.95] mb-4">Why GolfN data<br />is <span className="text-gradient">different</span></h2>
          <p className="text-base md:text-lg text-[#9ca3af] max-w-2xl mb-12">
            GolfN audience intelligence is built from verified golf behavior, not broad assumptions or purchased audience models. That allows campaigns to identify and activate users based on real participation, real interest, and real progression over time.
          </p>
        </Fade>

        {/* Proof cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
          {proofCards.map((card, i) => (
            <Fade key={card.label} delay={0.04 * i}>
              <div className="bg-[#131619] border border-[#1e2128] rounded-xl p-5 hover:border-[#2a2f38] transition-colors">
                <div className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center" style={{ background: `${partner.primaryColor}15` }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 5" stroke={partner.primaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{card.label}</h4>
                <p className="text-xs text-[#6b7280] leading-relaxed">{card.desc}</p>
              </div>
            </Fade>
          ))}
        </div>

        {/* Comparison table */}
        <Fade delay={0.25}>
          <div className="bg-[#131619] border border-[#1e2128] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-[#1e2128]">
              <span className="text-xs font-mono text-[#6b7280] tracking-wider"></span>
              <span className="text-xs font-mono tracking-wider" style={{ color: partner.primaryColor }}>GOLFN</span>
              <span className="text-xs font-mono text-[#6b7280] tracking-wider">BROAD MEDIA</span>
            </div>
            {differentiators.map((d, i) => (
              <div key={d.label} className={`grid grid-cols-3 gap-4 px-6 py-4 ${i < differentiators.length - 1 ? 'border-b border-[#1e2128]/50' : ''}`}>
                <span className="text-sm font-semibold text-[#d1d5db]">{d.label}</span>
                <span className="text-sm font-medium" style={{ color: partner.primaryColor }}>{d.golfn}</span>
                <span className="text-sm text-[#6b7280]">{d.broad}</span>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  )
}
