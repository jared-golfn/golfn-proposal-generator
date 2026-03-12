'use client'

import { motion, useInView } from 'framer-motion'
import { type PartnerConfig, commercialModel } from '@/lib/presentation-data'
import { useRef } from 'react'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

export function CommercialModel({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-12 py-28">
      <Fade>
        <span className="font-mono text-sm text-golfn-faint tracking-[0.2em] uppercase">Three-Layer Model</span>
        <h2 className="font-display text-5xl md:text-7xl mt-3 mb-16 leading-[0.92]">Commercial<br /><span className="text-gradient">Architecture</span></h2>
      </Fade>

      {/* Money Map */}
      <Fade delay={0.1}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-24">
          {[
            { label: 'SETUP', sub: 'One-Time', range: '$7.5K–$35K+' },
            { label: 'MANAGEMENT', sub: 'Monthly', range: '$2.5K–$6.5K/mo' },
            { label: 'MEDIA', sub: 'Impressions', range: '$3.5K–$30K+' },
            { label: 'PERFORMANCE', sub: 'Variable', range: '20–40%' },
          ].map((c, i) => (
            <div key={c.label} className="bg-golfn-card border border-golfn-border rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: i < 2 ? partner.primaryColor : partner.secondaryColor }} />
              <span className="font-mono text-[11px] tracking-[0.2em] text-golfn-faint">{c.label}</span>
              <div className="text-2xl md:text-3xl font-bold mt-3 mb-1" style={{ color: i < 2 ? partner.primaryColor : partner.secondaryColor }}>{c.range}</div>
              <span className="text-sm text-golfn-faint">{c.sub}</span>
            </div>
          ))}
        </div>
      </Fade>

      {/* Setup */}
      <Fade delay={0.15}>
        <h3 className="font-display text-3xl mb-2">{commercialModel.setup.title}</h3>
        <p className="text-base text-golfn-faint mb-8">{commercialModel.setup.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {commercialModel.setup.tiers.map((t, i) => (
            <div key={t.name} className="bg-golfn-card border border-golfn-border rounded-2xl p-7">
              <span className="text-base font-semibold">{t.name}</span>
              <div className="text-2xl font-bold font-mono mt-2 mb-3" style={{ color: partner.primaryColor }}>{t.range}</div>
              <p className="text-sm text-golfn-faint leading-relaxed">{t.description}</p>
            </div>
          ))}
        </div>
      </Fade>

      {/* Extensions */}
      <Fade delay={0.2}>
        <p className="text-base font-semibold text-golfn-dim mb-4">Premium Content Extensions</p>
        <div className="flex flex-wrap gap-3 mb-20">
          {commercialModel.setup.extensions.map((e) => (
            <div key={e.name} className="bg-golfn-card border border-golfn-border rounded-xl px-5 py-3 flex items-center gap-4">
              <span className="text-base text-golfn-dim">{e.name}</span>
              <span className="font-mono text-base font-semibold" style={{ color: partner.secondaryColor }}>{e.price}</span>
            </div>
          ))}
        </div>
      </Fade>

      {/* Impressions */}
      <Fade delay={0.25}>
        <h3 className="font-display text-3xl mb-2">{commercialModel.media.title}</h3>
        <p className="text-base text-golfn-faint mb-8">{commercialModel.media.subtitle}</p>
        <div className="bg-golfn-card border border-golfn-border rounded-2xl overflow-hidden mb-20">
          <table className="w-full">
            <thead><tr className="border-b border-golfn-border">
              <th className="text-left p-5 font-mono text-xs tracking-[0.15em] text-golfn-faint">IMPRESSIONS</th>
              <th className="text-left p-5 font-mono text-xs tracking-[0.15em] text-golfn-faint">COST</th>
              <th className="text-left p-5 font-mono text-xs tracking-[0.15em] text-golfn-faint">EFF. CPM</th>
            </tr></thead>
            <tbody>{commercialModel.media.tiers.map((t) => (
              <tr key={t.impressions} className="border-b border-golfn-border/40">
                <td className="p-5 text-base font-medium">{t.impressions}</td>
                <td className="p-5 font-mono text-base font-bold" style={{ color: partner.primaryColor }}>{t.cost}</td>
                <td className="p-5 font-mono text-sm text-golfn-faint">{t.cpm}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </Fade>

      {/* Performance */}
      <Fade delay={0.3}>
        <h3 className="font-display text-3xl mb-2">{commercialModel.performance.title}</h3>
        <p className="text-base text-golfn-faint mb-8">{commercialModel.performance.subtitle}</p>
        <div className="bg-golfn-card border border-golfn-border rounded-2xl p-8 md:p-10 mb-4" style={{ boxShadow: `0 0 80px ${partner.primaryColor}08` }}>
          <div className="inline-block text-xs font-mono px-3 py-1 rounded-full mb-4" style={{ background: `${partner.primaryColor}18`, color: partner.primaryColor }}>PREFERRED</div>
          <div className="text-5xl md:text-6xl font-bold font-mono mb-3" style={{ color: partner.primaryColor }}>{commercialModel.performance.preferred.range}</div>
          <p className="text-lg text-golfn-dim mb-2">Preferred: {commercialModel.performance.preferred.preferredRange} · Floor: {commercialModel.performance.preferred.floor}</p>
          <p className="text-base text-golfn-faint max-w-2xl">{commercialModel.performance.preferred.description}</p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {commercialModel.performance.alternatives.map((a) => (
            <div key={a.name} className="bg-golfn-card border border-golfn-border rounded-2xl p-5">
              <span className="text-sm text-golfn-dim">{a.name}</span>
              <div className="text-xl font-mono font-bold mt-1" style={{ color: partner.secondaryColor }}>{a.range}</div>
            </div>
          ))}
        </div>
      </Fade>

      {/* Separation */}
      <Fade delay={0.35}>
        <div className="mt-16 bg-golfn-card border border-golfn-border rounded-2xl p-8 border-l-[3px]" style={{ borderLeftColor: partner.primaryColor }}>
          <p className="text-base text-golfn-dim"><span className="text-golfn-white font-semibold">Management and media are separate by design.</span> The management fee funds people and operations. Media spend funds delivery volume. Never bundled.</p>
        </div>
      </Fade>
    </section>
  )
}
