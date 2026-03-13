'use client'

import { Send } from 'lucide-react'
import type { PartnerData } from '@/lib/template-types'
import { images } from '@/lib/images'
import { Fade } from './Fade'

export function S12_FinalCTA({ partner }: { partner: PartnerData }) {
  const email = partner.contactEmail || 'jared@golfn.com'

  return (
    <section className="py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <Fade>
          <img src={images.logo} alt="GolfN" className="h-16 md:h-24 w-auto mx-auto mb-12 opacity-80" />
        </Fade>
        <Fade delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold leading-[0.92] tracking-tight mb-6">
            See what a GolfN program<br />could look like <span className="text-gradient">for your brand</span>
          </h2>
        </Fade>
        <Fade delay={0.2}>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-xl mx-auto leading-8 mb-12">
            GolfN will recommend the right campaign structure, follow-up pathways, reporting rhythm, and activation mix based on your goals, product, and audience.
          </p>
        </Fade>
        <Fade delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${email}?subject=Partnership%20Proposal%20%E2%80%94%20${encodeURIComponent(partner.partnerName)}`}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg md:text-xl transition-all hover:scale-[1.03] glow-green"
              style={{ background: 'linear-gradient(135deg, #00ff9d, #17A455)', color: '#0f1217' }}
            >
              <Send className="w-5 h-5" />
              Request a Proposal
            </a>
            {partner.bookingUrl && (
              <a
                href={partner.bookingUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-8 py-5 rounded-2xl font-bold text-lg border border-[#2a3347] text-white hover:bg-[#1a1f2e] transition-all"
              >
                Book a Walkthrough
              </a>
            )}
          </div>
        </Fade>
      </div>
    </section>
  )
}
