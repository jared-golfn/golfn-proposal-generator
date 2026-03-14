'use client'

import type { PartnerData } from '@/lib/template-types'
import { images } from '@/lib/images'
import { Fade } from './Fade'

export function S12_FinalCTA({ partner }: { partner: PartnerData }) {
  return (
    <section className="py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <Fade>
          <img src={images.logo} alt="GolfN" className="h-16 md:h-24 w-auto mx-auto mb-12 opacity-80" />
        </Fade>
        <Fade delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold leading-[0.92] tracking-tight mb-6">
            Ready to launch with <span className="text-gradient">{partner.partnerName}</span>
          </h2>
        </Fade>
        <Fade delay={0.2}>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-xl mx-auto leading-8 mb-6">
            Everything in this proposal is ready to execute. GolfN will handle campaign setup, creative production, distribution, and ongoing optimization from day one.
          </p>
        </Fade>
        <Fade delay={0.3}>
          <p className="text-base text-[#6b7280]">
            Reach out to Jared to get started or discuss any questions.
          </p>
        </Fade>
      </div>
    </section>
  )
}
