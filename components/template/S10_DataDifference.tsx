'use client'

import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'

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
            Meta and Google help brands find likely buyers. GolfN helps brands activate verified golfers with context, qualification, and post-purchase measurement that broad platforms cannot provide.
          </p>
        </Fade>

        <div className="bg-[#131619] border border-[#1e2128] rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-[#1e2128]">
            <span className="text-xs font-mono text-[#6b7280] tracking-wider"></span>
            <span className="text-xs font-mono tracking-wider" style={{ color: partner.primaryColor }}>GOLFN</span>
            <span className="text-xs font-mono text-[#6b7280] tracking-wider">BROAD MEDIA</span>
          </div>
          {differentiators.map((d, i) => (
            <Fade key={d.label} delay={0.04 * i}>
              <div className={`grid grid-cols-3 gap-4 px-6 py-4 ${i < differentiators.length - 1 ? 'border-b border-[#1e2128]/50' : ''}`}>
                <span className="text-sm font-semibold text-[#d1d5db]">{d.label}</span>
                <span className="text-sm font-medium" style={{ color: partner.primaryColor }}>{d.golfn}</span>
                <span className="text-sm text-[#6b7280]">{d.broad}</span>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  )
}
