'use client'

import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'

const proofCards = [
  { label: 'Verified Identity', desc: 'Every user is a real, verified golfer.' },
  { label: 'Verified Equipment', desc: 'GolfN knows what clubs users carry.' },
  { label: 'Verified Spend', desc: 'Real purchase behavior and price sensitivity.' },
  { label: 'Verified Behavior', desc: 'Rounds, courses, handicap changes, check-ins.' },
  { label: '100% First-Party', desc: 'All data collected directly inside GolfN.' },
  { label: 'Guaranteed Delivery', desc: 'Real golfers, golf-native environment. No fraud.' },
]

const differentiators = [
  { label: 'Verified Golfers', golfn: 'Every user is a verified golfer on the course.', broad: 'Inferred from modeled interests.' },
  { label: 'Behavioral Signal', golfn: 'Rounds, equipment, courses, handicap changes.', broad: 'Click and impression data only.' },
  { label: 'Context', golfn: 'Golf-native. Users engaged in golf.', broad: 'Mixed feed. Golf competes with everything.' },
  { label: 'Education', golfn: 'Learn & Earn with verified comprehension.', broad: 'Not available.' },
  { label: 'Post-Purchase', golfn: 'Course use, check-ins, ongoing measurement.', broad: 'Retargeting only.' },
  { label: 'Attribution', golfn: 'Impression to education to conversion to use.', broad: 'Stops at click.' },
]

export function S10_DataDifference({ partner }: { partner: PartnerData }) {
  return (
    <section className="py-24 md:py-32">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <p className="text-sm font-mono tracking-[0.2em] uppercase mb-4 text-[#00ff9d]">Data Advantage</p>
          <h2 className="text-3xl md:text-[3.5rem] font-bold leading-[0.95] mb-5">Why GolfN data<br />is <span className="text-gradient">different</span></h2>
          <p className="text-lg text-[#9ca3af] max-w-2xl mb-14">
            GolfN audience intelligence is built from verified golf behavior, not broad assumptions or purchased audience models.
          </p>
        </Fade>

        {/* Proof cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-14">
          {proofCards.map((card, i) => (
            <Fade key={card.label} delay={0.04 * i}>
              <div className="card-lift bg-[#131619] border border-[#1e2128] rounded-xl p-5">
                <div className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center bg-[#00ff9d]/10">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 5" stroke="#00ff9d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
              <span></span>
              <span className="text-sm font-mono tracking-wider text-[#00ff9d]">GOLFN</span>
              <span className="text-sm font-mono tracking-wider text-[#6b7280]">BROAD MEDIA</span>
            </div>
            {differentiators.map((d, i) => (
              <div key={d.label} className={`grid grid-cols-3 gap-4 px-6 py-4 ${i < differentiators.length - 1 ? 'border-b border-[#1e2128]/50' : ''} hover:bg-[#161a21] transition-colors`}>
                <span className="text-sm font-semibold text-[#d1d5db]">{d.label}</span>
                <span className="text-sm font-medium text-[#00ff9d]">{d.golfn}</span>
                <span className="text-sm text-[#6b7280]">{d.broad}</span>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  )
}
