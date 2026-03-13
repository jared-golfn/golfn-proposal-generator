'use client'

import { useState } from 'react'
import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'

const initialSignals = [
  { name: 'Sweepstakes viewed', desc: 'User saw and opened the campaign' },
  { name: 'Email opened', desc: 'Opened a campaign email or product announcement' },
  { name: 'Deep link clicked', desc: 'Clicked through to a landing page or offer' },
  { name: 'In-app banner clicked', desc: 'Engaged with an in-app campaign placement' },
  { name: 'Offer viewed', desc: 'Viewed a partner offer or product detail page' },
  { name: 'Landing page viewed', desc: 'Arrived at the partner destination via GolfN' },
]

const strongerSignals = [
  { name: 'Multiple views', desc: 'Returned to view the campaign or product more than once' },
  { name: 'Multiple entries', desc: 'Engaged across multiple campaign touchpoints' },
  { name: 'Repeated offer interaction', desc: 'Saved, revisited, or clicked through to an offer multiple times' },
  { name: 'Cross-surface engagement', desc: 'Clicked across multiple distribution surfaces (email + in-app + social)' },
  { name: 'Return engagement', desc: 'Came back after initial touch to engage again unprompted' },
  { name: 'High-frequency interaction', desc: 'Higher-than-average interaction rate across the campaign window' },
]

function Tooltip({ title, body, color }: { title: string; body: string; color: string }) {
  const [show, setShow] = useState(false)
  return (
    <span className="relative inline-block">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow(!show)}
        className="inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-2 decoration-dotted cursor-help"
        style={{ color }}
      >
        {title}
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 7v4M8 5.5v0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      {show && (
        <span className="absolute left-0 top-full mt-2 z-30 w-80 md:w-96 block">
          <span className="block bg-[#131619] border border-[#2a2f38] rounded-xl p-5 shadow-xl" style={{ boxShadow: `0 8px 32px rgba(0,0,0,0.6), 0 0 20px ${color}08` }}>
            <span className="block text-sm font-bold text-white mb-2">{title}</span>
            <span className="block text-sm text-[#d1d5db] leading-relaxed">{body}</span>
          </span>
        </span>
      )}
    </span>
  )
}

export function S05_QualifiedInterest({ partner }: { partner: PartnerData }) {
  return (
    <section className="py-20 md:py-28">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-mono font-bold" style={{ color: partner.primaryColor }}>02</span>
            <p className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: partner.primaryColor }}>Qualification</p>
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-[0.95] mb-4">From attention to<br /><span className="text-gradient">qualified interest</span></h2>
          <p className="text-base md:text-lg text-[#9ca3af] max-w-2xl mb-12">
            GolfN does more than count views. It analyzes how users engage with a campaign and uses those signals to identify which golfers are most likely to care.
          </p>
        </Fade>

        {/* Part A: Signal Ladder */}
        <Fade delay={0.05}>
          <h3 className="text-lg font-bold text-white mb-4">Initial Interest Signals</h3>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
          {initialSignals.map((s, i) => (
            <Fade key={s.name} delay={0.04 * i}>
              <div className="bg-[#131619] border border-[#1e2128] rounded-xl p-4 hover:border-[#2a2f38] transition-colors">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#6b7280]" />
                  <h4 className="text-sm font-bold text-white">{s.name}</h4>
                </div>
                <p className="text-xs text-[#6b7280] leading-relaxed">{s.desc}</p>
              </div>
            </Fade>
          ))}
        </div>

        <Fade delay={0.15}>
          <h3 className="text-lg font-bold text-white mb-4">Stronger Intent Signals</h3>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
          {strongerSignals.map((s, i) => (
            <Fade key={s.name} delay={0.04 * i}>
              <div className="bg-[#131619] border border-[#1e2128] rounded-xl p-4 hover:border-[#2a2f38] transition-colors" style={{ borderLeftWidth: 2, borderLeftColor: partner.primaryColor }}>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ background: partner.primaryColor }} />
                  <h4 className="text-sm font-bold text-white">{s.name}</h4>
                </div>
                <p className="text-xs text-[#6b7280] leading-relaxed">{s.desc}</p>
              </div>
            </Fade>
          ))}
        </div>

        {/* Part B: Cohort Qualification with Tooltip */}
        <Fade delay={0.25}>
          <div className="bg-[#131619] border border-[#1e2128] rounded-2xl p-6 md:p-8 mb-6">
            <h3 className="text-lg font-bold text-white mb-3">Cohort Qualification</h3>
            <p className="text-base text-[#d1d5db] leading-relaxed mb-4">
              GolfN uses the behavior of users who show the strongest campaign-relevant interest to define a partner-specific audience cohort. That cohort becomes the basis for future follow-up, optimization, and continued prospect identification.
            </p>
            <Tooltip
              title="How GolfN Builds Qualified Cohorts"
              body="GolfN collects behavioral and contextual signals across the ecosystem as users interact with campaigns and the app. These signals include clubs used, products viewed, price ranges, courses played, public vs. private patterns, estimated spend behavior, content engagement, social interactions, and playing partners. When a campaign identifies users showing strong interest and intent, GolfN uses those patterns to identify additional users with similar characteristics over time."
              color={partner.primaryColor}
            />
          </div>
        </Fade>

        {/* Why the Launch Offer Matters callout */}
        <Fade delay={0.3}>
          <div className="bg-[#131619] border-l-2 rounded-r-xl p-6 md:p-8 mb-6" style={{ borderLeftColor: partner.primaryColor }}>
            <h4 className="text-base font-bold text-white mb-2">Why the Launch Offer Matters</h4>
            <p className="text-sm text-[#d1d5db] leading-relaxed mb-3">
              The quality of the initial prize or offer affects both campaign participation and the strength of the behavioral signal generated. A stronger launch experience helps GolfN identify more responsive users and creates a better foundation for future cohort expansion and follow-on campaigns.
            </p>
            <p className="text-sm font-semibold" style={{ color: partner.primaryColor }}>Recommended prize value: up to $5,000 total</p>
          </div>
        </Fade>

        {/* 30-day callout */}
        <Fade delay={0.35}>
          <div className="bg-[#131619] border border-[#1e2128] rounded-xl p-6">
            <p className="text-base text-[#d1d5db]">
              <strong className="text-white">This creates the basis for future prospect identification.</strong> As new users enter GolfN and resemble those who showed strong campaign interest, GolfN can continue adding them to your audience over time.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  )
}
