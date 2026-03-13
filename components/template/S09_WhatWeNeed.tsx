'use client'

import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'
import { Badge } from './Badge'

const golfnHandles = [
  'Strategy and campaign architecture',
  'Creative production and distribution',
  'Audience qualification and cohort building',
  'Reporting and optimization',
  'Follow-on activation logic',
  'Monthly management and creative refreshes',
  'Ongoing prospect identification',
]

const partnerProvides = [
  'Prize package or launch offer',
  'Brand assets and guidelines',
  'Approved logos and product photography',
  'Product descriptions and messaging hierarchy',
  'Landing pages or approved destinations',
  'Affiliate terms where relevant',
  'Wholesale terms where relevant',
  'Social handles where relevant',
  'Educational content where relevant',
  'Approval process and contacts',
]

export function S09_WhatWeNeed({ partner }: { partner: PartnerData }) {
  return (
    <section className="py-20 md:py-28">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <p className="text-xs font-mono tracking-[0.2em] uppercase mb-4" style={{ color: partner.primaryColor }}>Requirements</p>
          <h2 className="font-display text-3xl md:text-5xl leading-[0.95] mb-4">What we need<br /><span className="text-gradient">from you</span></h2>
          <p className="text-base md:text-lg text-[#9ca3af] max-w-2xl mb-12">
            Every GolfN program requires a few key inputs from the partner to launch successfully. GolfN handles everything else.
          </p>
        </Fade>

        {/* Two-column split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Fade delay={0.05}>
            <div className="bg-[#131619] border border-[#1e2128] rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${partner.primaryColor}15` }}>
                  <span className="text-sm font-bold" style={{ color: partner.primaryColor }}>G</span>
                </div>
                <h3 className="text-base font-bold text-white">GolfN Handles</h3>
              </div>
              <ul className="space-y-2.5">
                {golfnHandles.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#d1d5db]">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: partner.primaryColor }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Fade>

          <Fade delay={0.1}>
            <div className="bg-[#131619] border border-[#1e2128] rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#1e2128]">
                  <span className="text-sm font-bold text-[#9ca3af]">P</span>
                </div>
                <h3 className="text-base font-bold text-white">Partner Provides</h3>
              </div>
              <ul className="space-y-2.5">
                {partnerProvides.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#d1d5db]">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-[#6b7280]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Fade>
        </div>

        {/* Commerce requirement callout */}
        <Fade delay={0.2}>
          <div className="bg-[#131619] border border-[#1e2128] rounded-2xl p-6 md:p-8 border-l-2" style={{ borderLeftColor: partner.primaryColor }}>
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
