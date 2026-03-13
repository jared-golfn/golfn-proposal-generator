'use client'

import { CheckCircle, Upload } from 'lucide-react'
import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'

const golfnHandles = [
  'Strategy and campaign architecture', 'Creative production and distribution', 'Audience qualification and cohort building',
  'Reporting and optimization', 'Follow-on activation logic', 'Monthly management and creative refreshes', 'Ongoing prospect identification',
]

const partnerProvides = [
  'Prize package or launch offer', 'Brand assets and guidelines', 'Approved logos and product photography',
  'Product descriptions and messaging hierarchy', 'Landing pages or approved destinations', 'Affiliate terms where relevant',
  'Wholesale terms where relevant', 'Social handles where relevant', 'Educational content where relevant', 'Approval process and contacts',
]

export function S09_WhatWeNeed({ partner }: { partner: PartnerData }) {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase mb-4 text-[#00ff9d]">Requirements</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight mb-5">What we need<br /><span className="text-gradient">from you</span></h2>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-8 mb-14">Every GolfN program requires a few key inputs from the partner to launch successfully. GolfN handles everything else.</p>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Fade delay={0.05}>
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-[#00ff9d]" />
                <h3 className="text-2xl md:text-3xl font-semibold text-white">GolfN Handles</h3>
              </div>
              <ul className="space-y-3">
                {golfnHandles.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#d1d5db]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-1 shrink-0"><path d="M3 8l3.5 3.5L13 5" stroke="#00ff9d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Fade>
          <Fade delay={0.1}>
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Upload className="w-6 h-6 text-[#6b7280]" />
                <h3 className="text-2xl md:text-3xl font-semibold text-white">Partner Provides</h3>
              </div>
              <ul className="space-y-3">
                {partnerProvides.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#d1d5db]">
                    <div className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0 bg-[#6b7280]" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Fade>
        </div>

        <Fade delay={0.2}>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-8 border-l-2 border-l-[#00ff9d]">
            <h4 className="text-xl font-semibold text-white mb-2">Commerce Economics</h4>
            <p className="text-lg text-[#d1d5db] leading-8">
              GolfN requires either an <strong>affiliate structure with 20%+ commission</strong> or a <strong>wholesale account with 30%+ margin</strong>. Standard affiliate rates of 3-5% are insufficient.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  )
}
