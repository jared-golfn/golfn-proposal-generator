'use client'

import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'

const cards = [
  {
    title: 'Create Real Attention',
    body: 'Launch premium campaigns designed to showcase your brand, your product, and your best foot forward.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="#00ff9d" strokeWidth="2" opacity="0.3" />
        <path d="M12 16l3 3 5-6" stroke="#00ff9d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Build Qualified Audiences',
    body: 'Use real user engagement and intent signals to identify golfers who are actually responding.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="12" width="6" height="14" rx="2" fill="#00ff9d" opacity="0.2" />
        <rect x="13" y="8" width="6" height="18" rx="2" fill="#00ff9d" opacity="0.35" />
        <rect x="22" y="4" width="6" height="22" rx="2" fill="#00ff9d" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: 'Activate Beyond Launch',
    body: 'Continue reaching that audience through follow-up offers, education, commerce, social, and progression-based experiences.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="10" cy="16" r="3" fill="#00ff9d" opacity="0.2" />
        <circle cx="16" cy="10" r="3" fill="#00ff9d" opacity="0.35" />
        <circle cx="22" cy="16" r="3" fill="#00ff9d" opacity="0.5" />
        <path d="M12.5 14.5L14 11.5M18 11.5L19.5 14.5" stroke="#00ff9d" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
  },
]

export function S02_WhyBrands({ partner }: { partner: PartnerData }) {
  return (
    <section className="py-24 md:py-32">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <p className="text-sm font-mono tracking-[0.2em] uppercase mb-4 text-[#00ff9d]">Why Brands Use GolfN</p>
          <h2 className="text-3xl md:text-[3.5rem] font-bold leading-[0.95] mb-5">More than impressions.<br /><span className="text-gradient">Measurable progression.</span></h2>
          <p className="text-lg text-[#9ca3af] max-w-2xl mb-16">
            GolfN helps brands do more than show up. It helps them generate premium attention, identify qualified interest, and continue activating responsive golfers over time.
          </p>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <Fade key={card.title} delay={0.08 * i}>
              <div className="card-lift bg-[#131619] border border-[#1e2128] rounded-2xl p-8 md:p-9 group cursor-default">
                <div className="mb-5 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-[#9ca3af] leading-relaxed">{card.body}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  )
}
