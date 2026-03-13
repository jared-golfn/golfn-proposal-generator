'use client'

import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'

const cards = [
  {
    title: 'Create Real Attention',
    body: 'Launch premium campaigns designed to showcase your brand, your product, and your best foot forward.',
    icon: '01',
  },
  {
    title: 'Build Qualified Audiences',
    body: 'Use real user engagement and intent signals to identify golfers who are actually responding.',
    icon: '02',
  },
  {
    title: 'Activate Beyond Launch',
    body: 'Continue reaching that audience through follow-up offers, education, commerce, social, and progression-based experiences.',
    icon: '03',
  },
]

export function S02_WhyBrands({ partner }: { partner: PartnerData }) {
  return (
    <section className="py-20 md:py-28">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <p className="text-xs font-mono tracking-[0.2em] uppercase mb-4" style={{ color: partner.primaryColor }}>Why Brands Use GolfN</p>
          <h2 className="font-display text-3xl md:text-5xl leading-[0.95] mb-4">More than impressions.<br /><span className="text-gradient">Measurable progression.</span></h2>
          <p className="text-base md:text-lg text-[#9ca3af] max-w-2xl mb-14">
            GolfN helps brands do more than show up. It helps them generate premium attention, identify qualified interest, and continue activating responsive golfers over time.
          </p>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <Fade key={card.title} delay={0.08 * i}>
              <div className="bg-[#131619] border border-[#1e2128] rounded-2xl p-7 md:p-8 hover:border-[#2a2f38] transition-all hover:-translate-y-1 duration-300">
                <span className="text-3xl font-mono font-bold block mb-4" style={{ color: partner.primaryColor, opacity: 0.4 }}>{card.icon}</span>
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-[#9ca3af] text-base leading-relaxed">{card.body}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  )
}
