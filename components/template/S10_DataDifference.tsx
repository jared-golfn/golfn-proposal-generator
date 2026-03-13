'use client'

import { Shield } from 'lucide-react'
import type { PartnerData } from '@/lib/template-types'
import { images } from '@/lib/images'
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
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-[#00ff9d]" />
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">Data Advantage</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight mb-5">Why GolfN data<br />is <span className="text-gradient">different</span></h2>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-9 mb-14">GolfN audience intelligence is built from verified golf behavior, not broad assumptions or purchased audience models.</p>
        </Fade>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-14">
          {proofCards.map((card, i) => (
            <Fade key={card.label} delay={0.04 * i}>
              <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-6 hover:border-[#00ff9d]/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center bg-[#00ff9d]/10">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="#00ff9d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h4 className="text-base font-bold text-white mb-1">{card.label}</h4>
                <p className="text-base text-[#6b7280] leading-7">{card.desc}</p>
              </div>
            </Fade>
          ))}
        </div>

        {/* Enlarged comparison table with GolfN logo */}
        <Fade delay={0.25}>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-[1fr_1.5fr_1.5fr] gap-6 px-8 md:px-12 py-7 border-b border-[#2a3347] items-center">
              <span></span>
              <span><img src={images.logo} alt="GolfN" className="h-7 md:h-9 w-auto" /></span>
              <span className="text-lg md:text-xl font-mono tracking-wider text-[#6b7280]">BROAD MEDIA</span>
            </div>
            {differentiators.map((d, i) => (
              <div key={d.label} className={`grid grid-cols-[1fr_1.5fr_1.5fr] gap-6 px-8 md:px-12 py-7 md:py-8 ${i < differentiators.length - 1 ? 'border-b border-[#2a3347]/50' : ''} hover:bg-[#1f2538] transition-colors`}>
                <span className="text-lg md:text-xl font-semibold text-[#d1d5db]">{d.label}</span>
                <span className="text-lg md:text-xl font-medium text-[#00ff9d] leading-7">{d.golfn}</span>
                <span className="text-lg md:text-xl text-[#6b7280] leading-7">{d.broad}</span>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  )
}
