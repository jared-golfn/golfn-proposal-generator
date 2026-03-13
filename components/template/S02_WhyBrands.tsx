'use client'

import { Eye, BarChart3, Rocket } from 'lucide-react'
import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'

const cards = [
  {
    title: 'Create Real Attention',
    body: 'Launch premium campaigns designed to showcase your brand, your product, and your best foot forward.',
    Icon: Eye,
  },
  {
    title: 'Build Qualified Audiences',
    body: 'Use real user engagement and intent signals to identify golfers who are actually responding.',
    Icon: BarChart3,
  },
  {
    title: 'Activate Beyond Launch',
    body: 'Continue reaching that audience through follow-up offers, education, commerce, social, and progression-based experiences.',
    Icon: Rocket,
  },
]

export function S02_WhyBrands({ partner }: { partner: PartnerData }) {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase mb-4 text-[#00ff9d]">Why Brands Use GolfN</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight mb-5">More than impressions.<br /><span className="text-gradient">Measurable progression.</span></h2>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-8 mb-16">
            GolfN helps brands do more than show up. It helps them generate premium attention, identify qualified interest, and continue activating responsive golfers over time.
          </p>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <Fade key={card.title} delay={0.08 * i}>
              <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-8 group cursor-default hover:border-[#00ff9d]/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="mb-5 group-hover:scale-110 transition-transform duration-300">
                  <card.Icon className="w-8 h-8 text-[#00ff9d]" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-lg text-[#9ca3af] leading-8">{card.body}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  )
}
