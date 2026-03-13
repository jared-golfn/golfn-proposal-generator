'use client'

import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'
import { Badge } from './Badge'

const requirements = [
  {
    title: 'Brand & Creative Assets',
    desc: 'Logo files, product photography, brand guidelines. We handle all campaign creative production.',
    badge: 'Day 1',
  },
  {
    title: 'Product or Prize for Launch',
    desc: 'A premium product, experience, or prize package for the launch sweepstakes. Higher prize value drives higher participation.',
    badge: 'Day 1',
  },
  {
    title: 'Affiliate or Commerce Structure',
    desc: 'An affiliate program (20%+ commission) or wholesale account (30%+ margin) for points-based commerce and tracked conversions.',
    badge: 'Required',
  },
  {
    title: 'Product Knowledge',
    desc: 'Key product details, differentiators, and messaging priorities for Learn & Earn education modules.',
    badge: 'Week 1',
  },
  {
    title: 'Strategic Input',
    desc: 'Your goals, target audience priorities, seasonal timing preferences, and any geographic or demographic focus areas.',
    badge: 'Kickoff',
  },
  {
    title: 'A Point of Contact',
    desc: 'One person who can make decisions, approve creative, and participate in monthly strategy reviews.',
    badge: 'Ongoing',
  },
]

export function S09_WhatWeNeed({ partner }: { partner: PartnerData }) {
  return (
    <section className="py-20 md:py-28">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <p className="text-xs font-mono tracking-[0.2em] uppercase mb-4" style={{ color: partner.primaryColor }}>Requirements</p>
          <h2 className="font-display text-3xl md:text-5xl leading-[0.95] mb-4">What we need<br /><span className="text-gradient">from you</span></h2>
          <p className="text-base md:text-lg text-[#9ca3af] max-w-2xl mb-12">
            GolfN handles campaign strategy, creative production, distribution, optimization, and reporting. Here is what we need from your side to get started.
          </p>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {requirements.map((req, i) => (
            <Fade key={req.title} delay={0.06 * i}>
              <div className="bg-[#131619] border border-[#1e2128] rounded-xl p-6 hover:border-[#2a2f38] transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-bold text-white">{req.title}</h3>
                  <Badge label={req.badge} color={partner.primaryColor} />
                </div>
                <p className="text-sm text-[#9ca3af] leading-relaxed">{req.desc}</p>
              </div>
            </Fade>
          ))}
        </div>

        {/* Commerce requirement callout */}
        <Fade delay={0.4}>
          <div className="mt-8 bg-[#131619] border border-[#1e2128] rounded-2xl p-6 md:p-8 border-l-2" style={{ borderLeftColor: partner.primaryColor }}>
            <h4 className="text-base font-bold text-white mb-2">Commerce Economics</h4>
            <p className="text-sm text-[#d1d5db] leading-relaxed">
              GolfN requires either an <strong>affiliate structure with 20%+ commission</strong> or a <strong>wholesale account with 30%+ margin</strong>. Standard affiliate rates of 3-5% are insufficient. The margin must support meaningful points-back incentives for users while maintaining working margin for activation costs.
              {partner.hasExistingAffiliate && <> This partner has an existing affiliate program that GolfN can layer on top of.</>}
            </p>
          </div>
        </Fade>
      </div>
    </section>
  )
}
