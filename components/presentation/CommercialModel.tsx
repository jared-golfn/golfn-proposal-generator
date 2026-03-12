'use client'

import { motion, useInView } from 'framer-motion'
import { type PartnerConfig, commercialModel } from '@/lib/presentation-data'
import { useRef } from 'react'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  )
}

export function CommercialModel({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="section-padding relative">
      <div className="section-divider" />
      <div className="max-w-6xl mx-auto pt-16">
        <FadeIn>
          <div className="mb-20">
            <span className="font-mono text-sm text-golfn-white-faint tracking-widest uppercase">Three-Layer Model</span>
            <h2 className="font-display text-5xl md:text-7xl mt-4 leading-[0.95]">Commercial<br /><span className="text-gradient">Architecture</span></h2>
          </div>
        </FadeIn>

        {/* Money Map */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-24">
            {[
              { label: 'SETUP', sub: 'One-Time', range: '$7.5K – $35K+', color: partner.primaryColor },
              { label: 'MANAGEMENT', sub: 'Monthly', range: '$2.5K – $6.5K/mo', color: partner.primaryColor },
              { label: 'MEDIA', sub: 'Impression Banks', range: '$3.5K – $30K+', color: partner.secondaryColor },
              { label: 'PERFORMANCE', sub: 'Variable', range: '20–40%', color: partner.secondaryColor },
            ].map((col, i) => (
              <div key={col.label} className="card p-7 relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: col.color }}
                />
                <span className="font-mono text-xs tracking-[0.2em] text-golfn-white-faint">{col.label}</span>
                <div className="text-3xl font-bold mt-4 mb-2" style={{ color: col.color }}>{col.range}</div>
                <span className="text-sm text-golfn-white-faint">{col.sub}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Setup Tiers */}
        <FadeIn delay={0.15}>
          <div className="mb-20">
            <h3 className="font-display text-3xl mb-3">{commercialModel.setup.title}</h3>
            <p className="text-base text-golfn-white-faint mb-8">{commercialModel.setup.subtitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {commercialModel.setup.tiers.map((tier, i) => (
                <div key={tier.name} className="card p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: partner.primaryColor, opacity: 0.4 + i * 0.3 }}
                    />
                    <span className="font-semibold text-base">{tier.name}</span>
                  </div>
                  <div className="text-3xl font-bold font-mono mb-3" style={{ color: partner.primaryColor }}>
                    {tier.range}
                  </div>
                  <p className="text-sm text-golfn-white-faint leading-relaxed">{tier.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Content Extensions */}
        <FadeIn delay={0.2}>
          <div className="mb-20">
            <h4 className="text-base font-semibold text-golfn-white-dim mb-5">Premium Content Extensions</h4>
            <div className="flex flex-wrap gap-4">
              {commercialModel.setup.extensions.map((ext) => (
                <div key={ext.name} className="card px-6 py-4 flex items-center gap-5">
                  <span className="text-base text-golfn-white-dim">{ext.name}</span>
                  <span className="font-mono text-base font-semibold" style={{ color: partner.secondaryColor }}>{ext.price}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Impression Banks */}
        <FadeIn delay={0.25}>
          <div className="mb-20">
            <h3 className="font-display text-3xl mb-3">{commercialModel.media.title}</h3>
            <p className="text-base text-golfn-white-faint mb-8">{commercialModel.media.subtitle}</p>
            <div className="card overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-golfn-grid">
                    <th className="p-5 font-mono text-xs text-golfn-white-faint tracking-[0.15em]">IMPRESSIONS</th>
                    <th className="p-5 font-mono text-xs text-golfn-white-faint tracking-[0.15em]">COST</th>
                    <th className="p-5 font-mono text-xs text-golfn-white-faint tracking-[0.15em]">EFF. CPM</th>
                  </tr>
                </thead>
                <tbody>
                  {commercialModel.media.tiers.map((tier) => (
                    <tr key={tier.impressions} className="border-b border-golfn-grid/50">
                      <td className="p-5 text-base font-medium">{tier.impressions}</td>
                      <td className="p-5 font-mono text-base font-bold" style={{ color: partner.primaryColor }}>{tier.cost}</td>
                      <td className="p-5 font-mono text-base text-golfn-white-faint">{tier.cpm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* Performance Economics */}
        <FadeIn delay={0.3}>
          <div>
            <h3 className="font-display text-3xl mb-3">{commercialModel.performance.title}</h3>
            <p className="text-base text-golfn-white-faint mb-8">{commercialModel.performance.subtitle}</p>
            <div className="card p-10 glow-green">
              <div className="flex items-center gap-3 mb-5">
                <div className="text-xs font-mono px-4 py-1.5 rounded-full font-semibold" style={{ background: `${partner.primaryColor}20`, color: partner.primaryColor }}>PREFERRED</div>
                <span className="font-semibold text-lg">{commercialModel.performance.preferred.name}</span>
              </div>
              <div className="text-6xl md:text-7xl font-bold font-mono mb-4" style={{ color: partner.primaryColor }}>
                {commercialModel.performance.preferred.range}
              </div>
              <p className="text-lg text-golfn-white-dim mb-4">
                Preferred: {commercialModel.performance.preferred.preferredRange} · Floor: {commercialModel.performance.preferred.floor}
              </p>
              <p className="text-base text-golfn-white-faint leading-relaxed max-w-2xl">
                {commercialModel.performance.preferred.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
              {commercialModel.performance.alternatives.map((alt) => (
                <div key={alt.name} className="card p-6">
                  <span className="text-base text-golfn-white-dim">{alt.name}</span>
                  <div className="text-2xl font-mono font-bold mt-2" style={{ color: partner.secondaryColor }}>{alt.range}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Separation note */}
        <FadeIn delay={0.35}>
          <div className="mt-16 card p-8 border-l-[3px]" style={{ borderLeftColor: partner.primaryColor }}>
            <p className="text-base text-golfn-white-dim leading-relaxed">
              <span className="font-semibold text-golfn-white">Management and media are separate by design.</span>{' '}
              The management fee funds people and operations. Media and impression spend funds delivery volume.
              These are never bundled — each serves a distinct function in program delivery.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
