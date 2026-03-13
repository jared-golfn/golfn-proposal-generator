'use client'

import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'

const signals = [
  { name: 'Campaign entry', desc: 'User entered the sweepstakes or engaged with the launch campaign' },
  { name: 'Content interaction', desc: 'Clicked through, read details, watched video content' },
  { name: 'Offer save', desc: 'Saved an offer or bookmarked a product for later' },
  { name: 'Social follow-through', desc: 'Followed the brand via OAuth-connected social activation' },
  { name: 'Learn & Earn completion', desc: 'Completed an educational module and demonstrated comprehension' },
  { name: 'Repeat engagement', desc: 'Came back to interact with the brand across multiple sessions' },
]

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
            Every campaign generates behavioral signal. GolfN uses that signal to separate casual impressions from genuine interest and build a qualified audience cohort that grows over time.
          </p>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {signals.map((s, i) => (
            <Fade key={s.name} delay={0.05 * i}>
              <div className="bg-[#131619] border border-[#1e2128] rounded-xl p-5 hover:border-[#2a2f38] transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: partner.primaryColor }} />
                  <h3 className="text-sm font-bold text-white">{s.name}</h3>
                </div>
                <p className="text-sm text-[#6b7280] leading-relaxed">{s.desc}</p>
              </div>
            </Fade>
          ))}
        </div>

        <Fade delay={0.35}>
          <div className="mt-8 bg-[#131619] border-l-2 rounded-r-xl p-6 md:p-8" style={{ borderLeftColor: partner.primaryColor }}>
            <p className="text-base text-[#d1d5db]">
              <strong className="text-white">30 days post-campaign</strong> is the critical window. GolfN activates the qualified cohort within this period through targeted follow-on campaigns, ensuring the behavioral signal converts into measurable downstream action.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  )
}
