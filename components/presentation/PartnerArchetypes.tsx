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
    <section className="max-w-5xl mx-auto px-6 md:px-12 py-28">
      <Fade>
        <span className="font-mono text-sm text-golfn-faint tracking-[0.2em] uppercase">Partnership Models</span>
        <h2 className="font-display text-5xl md:text-7xl mt-3 mb-6 leading-[0.92]">Program<br /><span className="text-gradient">Archetypes</span></h2>
        <p className="text-lg text-golfn-dim max-w-xl mb-12">Three proven structures — each maps to a different level of commitment and scale.</p>
      </Fade>

      <Fade delay={0.1}>
        <div className="flex gap-2 mb-8">
          {archetypes.map((arch, i) => (
            <button key={arch.name} onClick={() => setTab(i)} className={`px-5 py-3 rounded-xl text-base font-medium transition-all whitespace-nowrap ${tab === i ? 'text-golfn-bg' : 'bg-golfn-card border border-golfn-border text-golfn-dim hover:text-golfn-white'}`} style={tab === i ? { background: `linear-gradient(135deg, ${partner.primaryColor}, ${partner.secondaryColor})` } : {}}>
              {arch.name}
            </button>
          ))}
        </div>
      </Fade>

      <Fade delay={0.15}>
        <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="bg-golfn-card border border-golfn-border rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <span className="inline-block text-xs font-mono px-3 py-1 rounded-full mb-4" style={{ background: `${partner.primaryColor}18`, color: partner.primaryColor }}>{a.stages}</span>
              <h3 className="font-display text-3xl mb-4">{a.name}</h3>
              <p className="text-base text-golfn-dim leading-relaxed">{a.description}</p>
            </div>
            <div className="space-y-4">
              {[
                { l: 'Setup Investment', v: a.setupRange },
                { l: 'Monthly Minimum', v: a.monthlyMin },
                { l: 'Management Tier', v: a.management },
                { l: 'Daily Grind Model', v: a.dailyGrind },
              ].map((r) => (
                <div key={r.l} className="flex items-center justify-between py-3 border-b border-golfn-border/50">
                  <span className="text-base text-golfn-faint">{r.l}</span>
                  <span className="text-base font-mono font-semibold" style={{ color: partner.primaryColor }}>{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Fade>

      <Fade delay={0.25}>
        <div className="mt-8 bg-golfn-card border border-golfn-border rounded-2xl p-7 border-l-[3px]" style={{ borderLeftColor: partner.secondaryColor }}>
          <p className="text-base text-golfn-dim"><span className="text-golfn-white font-semibold">Multi-Brand Pricing:</span> Consolidated pricing customized based on scope overlap, execution complexity, and shared infrastructure. Not a discount ladder — a strategic conversation.</p>
        </div>
      </Fade>
    </section>
  )
}
