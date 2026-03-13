'use client'

import { useState } from 'react'
import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'

const initialSignals = [
  'Sweepstakes viewed', 'Email opened', 'Deep link clicked',
  'In-app banner clicked', 'Offer viewed', 'Landing page viewed',
]

const strongerSignals = [
  'Multiple views', 'Multiple entries', 'Repeated offer interaction',
  'Cross-surface engagement', 'Return engagement', 'High-frequency interaction',
]

function Tooltip({ title, body }: { title: string; body: string }) {
  const [show, setShow] = useState(false)
  return (
    <span className="relative inline-block">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow(!show)}
        className="inline-flex items-center gap-1.5 text-base font-semibold underline underline-offset-2 decoration-dotted cursor-help text-[#00ff9d]"
      >
        {title}
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 7v4M8 5.5v0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      {show && (
        <span className="absolute left-0 top-full mt-2 z-30 w-80 md:w-96 block">
          <span className="block bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-5 shadow-2xl">
            <span className="block text-base font-bold text-white mb-2">{title}</span>
            <span className="block text-base text-[#d1d5db] leading-7">{body}</span>
          </span>
        </span>
      )}
    </span>
  )
}

export function S05_QualifiedInterest({ partner }: { partner: PartnerData }) {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-mono font-bold text-[#00ff9d]">02</span>
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">Qualification</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight mb-5">From attention to<br /><span className="text-gradient">qualified interest</span></h2>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-2xl leading-8 mb-14">
            GolfN does more than count views. It analyzes how users engage with a campaign and uses those signals to identify which golfers are most likely to care.
          </p>
        </Fade>

        {/* Signal Ladder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Fade delay={0.05}>
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-white mb-5">Initial Interest Signals</h3>
              <div className="flex flex-wrap gap-2">
                {initialSignals.map(s => (
                  <span key={s} className="text-base px-4 py-2 rounded-full border border-[#2a3347] text-[#9ca3af] bg-[#0f1217]">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#4b5563] mr-2" />{s}
                  </span>
                ))}
              </div>
            </div>
          </Fade>
          <Fade delay={0.1}>
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-6 md:p-8" style={{ borderLeftWidth: 2, borderLeftColor: '#00ff9d' }}>
              <h3 className="text-2xl font-semibold text-white mb-5">Stronger Intent Signals</h3>
              <div className="flex flex-wrap gap-2">
                {strongerSignals.map(s => (
                  <span key={s} className="text-base px-4 py-2 rounded-full border border-[#00ff9d]/30 text-white bg-[#00ff9d]/5">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#00ff9d] mr-2" />{s}
                  </span>
                ))}
              </div>
            </div>
          </Fade>
        </div>

        {/* Cohort + Tooltip */}
        <Fade delay={0.15}>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-6 md:p-8 mb-6">
            <h3 className="text-2xl font-semibold text-white mb-3">Cohort Qualification</h3>
            <p className="text-lg text-[#d1d5db] leading-8 mb-4">
              GolfN uses the behavior of users who show the strongest campaign-relevant interest to define a partner-specific audience cohort. That cohort becomes the basis for future follow-up, optimization, and continued prospect identification.
            </p>
            <Tooltip
              title="How GolfN Builds Qualified Cohorts"
              body="GolfN collects behavioral and contextual signals across the ecosystem as users interact with campaigns and the app. These signals include clubs used, products viewed, price ranges, courses played, public vs. private patterns, estimated spend behavior, content engagement, social interactions, and playing partners. When a campaign identifies users showing strong interest, GolfN uses those patterns to identify additional users with similar characteristics over time."
            />
          </div>
        </Fade>

        {/* Why the Launch Offer Matters */}
        <Fade delay={0.2}>
          <div className="bg-[#1a1f2e] border-l-2 border-[#00ff9d] rounded-r-xl p-6 md:p-8">
            <h4 className="text-xl font-semibold text-white mb-2">Why the Launch Offer Matters</h4>
            <p className="text-lg text-[#d1d5db] leading-8 mb-3">
              The quality of the initial prize or offer affects both campaign participation and the strength of the behavioral signal generated. A stronger launch experience helps GolfN identify more responsive users and creates a better foundation for future cohort expansion.
            </p>
            <p className="text-lg font-semibold text-[#00ff9d]">Recommended prize value: up to $5,000 total</p>
          </div>
        </Fade>
      </div>
    </section>
  )
}
