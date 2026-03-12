'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { type PartnerConfig, archetypes } from '@/lib/presentation-data'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

export function PartnerArchetypes({ partner }: { partner: PartnerConfig }) {
  const [tab, setTab] = useState(0)
  const a = archetypes[tab]

  return (
    <section className="max-w-[960px] mx-auto px-6 md:px-12 py-32">
      <Fade>
        <span className="font-mono text-sm text-[#71717A] tracking-[0.2em] uppercase">Partnership Models</span>
        <h2 className="font-display text-4xl md:text-6xl mt-3 mb-6 leading-[0.95]">Program<br /><span className="text-gradient">Archetypes</span></h2>
        <p className="text-[17px] text-[#B0B0B4] max-w-xl mb-12 leading-[1.75]">The GolfN system scales from focused test programs to sustained strategic partnerships. Three archetypes illustrate how the framework interacts at different levels of commitment.</p>
      </Fade>

      <Fade delay={0.1}>
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {archetypes.map((arch, i) => (
            <button key={arch.name} onClick={() => setTab(i)} className={`px-5 py-3 rounded-xl text-[15px] font-medium transition-all whitespace-nowrap ${tab === i ? '' : 'bg-[#161618] border border-[#2A2A2C] text-[#A1A1AA] hover:text-white'}`} style={tab === i ? { background: `linear-gradient(135deg, ${partner.primaryColor}, ${partner.secondaryColor})`, color: '#0F0F10' } : {}}>
              {arch.name}
            </button>
          ))}
        </div>
      </Fade>

      <Fade delay={0.15}>
        <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="bg-[#161618] border border-[#2A2A2C] rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <span className="inline-block text-xs font-mono px-3 py-1 rounded-full mb-4" style={{ background: `${partner.primaryColor}15`, color: partner.primaryColor }}>{a.stages}</span>
              <h3 className="font-display text-3xl mb-4">{a.name}</h3>
              <p className="text-[17px] text-[#B0B0B4] leading-[1.75]">{a.description}</p>
            </div>
            <div className="space-y-4">
              {[
                { l: 'Setup Investment', v: a.setupRange },
                { l: 'Monthly Minimum', v: a.monthlyMin },
                { l: 'Management Tier', v: a.management },
                { l: 'Daily Grind', v: a.dailyGrind },
              ].map((r) => (
                <div key={r.l} className="flex items-center justify-between py-3 border-b border-[#2A2A2C]/50">
                  <span className="text-[15px] text-[#71717A]">{r.l}</span>
                  <span className="text-[15px] font-mono font-semibold" style={{ color: partner.primaryColor }}>{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Fade>

      <Fade delay={0.25}>
        <div className="mt-8 bg-[#161618] border border-[#2A2A2C] rounded-2xl p-7 border-l-[3px]" style={{ borderLeftColor: partner.secondaryColor }}>
          <p className="text-[17px] text-[#B0B0B4]"><span className="text-white font-semibold">Multi-Brand Pricing:</span> When an agency activates multiple brands through GolfN, consolidated pricing applies. Efficiencies increase when campaign architecture, audience intelligence, and infrastructure are shared. Pricing customized based on scope overlap and execution complexity.</p>
        </div>
      </Fade>
    </section>
  )
}
