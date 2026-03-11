'use client'

import { motion } from 'framer-motion'
import { type PartnerConfig, commercialModel } from '@/lib/presentation-data'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export function CommercialModel({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="section-padding bg-grid relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16">
            <span className="font-mono text-xs text-golfn-white-faint tracking-widest uppercase">Three-Layer Model</span>
            <h2 className="font-display text-4xl md:text-6xl mt-3">Commercial<br /><span className="text-gradient">Architecture</span></h2>
          </div>
        </FadeIn>

        {/* Money Map — 4-column horizontal */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-20">
            {[
              { label: 'SETUP', sub: 'One-Time', range: '$7.5K – $35K+', color: partner.primaryColor },
              { label: 'MANAGEMENT', sub: 'Monthly', range: '$2.5K – $6.5K/mo', color: partner.primaryColor },
              { label: 'MEDIA', sub: 'Impression Banks', range: '$3.5K – $30K+', color: partner.secondaryColor },
              { label: 'PERFORMANCE', sub: 'Variable', range: '20–40%', color: partner.secondaryColor },
            ].map((col, i) => (
              <div key={col.label} className="card p-6 relative overflow-hidden group">
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: col.color, opacity: 0.8 + i * 0.05 }}
                />
                <span className="font-mono text-[10px] tracking-widest text-golfn-white-faint">{col.label}</span>
                <div className="text-2xl font-bold mt-3 mb-1" style={{ color: col.color }}>{col.range}</div>
                <span className="text-xs text-golfn-white-faint">{col.sub}</span>
                {i < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                    <svg width="20" height="20" viewBox="0 0 20 20" className="text-golfn-muted">
                      <path d="M8 4l6 6-6 6" stroke="currentColor" fill="none" strokeWidth="1.5" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Setup Tiers */}
        <FadeIn delay={0.15}>
          <div className="mb-16">
            <h3 className="font-display text-2xl mb-2">{commercialModel.setup.title}</h3>
            <p className="text-sm text-golfn-white-faint mb-6">{commercialModel.setup.subtitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {commercialModel.setup.tiers.map((tier, i) => (
                <div key={tier.name} className="card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: partner.primaryColor, opacity: 0.5 + i * 0.25 }}
                    />
                    <span className="font-medium text-sm">{tier.name}</span>
                  </div>
                  <div className="text-2xl font-bold font-mono mb-2" style={{ color: partner.primaryColor }}>
                    {tier.range}
                  </div>
                  <p className="text-xs text-golfn-white-faint leading-relaxed">{tier.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Content Extensions */}
        <FadeIn delay={0.2}>
          <div className="mb-16">
            <h4 className="text-sm font-medium text-golfn-white-dim mb-4">Premium Content Extensions</h4>
            <div className="flex flex-wrap gap-3">
              {commercialModel.setup.extensions.map((ext) => (
                <div key={ext.name} className="card px-5 py-3 flex items-center gap-4">
                  <span className="text-sm text-golfn-white-dim">{ext.name}</span>
                  <span className="font-mono text-sm font-medium" style={{ color: partner.secondaryColor }}>{ext.price}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Impression Banks */}
        <FadeIn delay={0.25}>
          <div className="mb-16">
            <h3 className="font-display text-2xl mb-2">{commercialModel.media.title}</h3>
            <p className="text-sm text-golfn-white-faint mb-6">{commercialModel.media.subtitle}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-golfn-grid">
                    <th className="pb-3 font-mono text-xs text-golfn-white-faint tracking-wider">IMPRESSIONS</th>
                    <th className="pb-3 font-mono text-xs text-golfn-white-faint tracking-wider">COST</th>
                    <th className="pb-3 font-mono text-xs text-golfn-white-faint tracking-wider">EFF. CPM</th>
                  </tr>
                </thead>
                <tbody>
                  {commercialModel.media.tiers.map((tier, i) => (
                    <tr key={tier.impressions} className="border-b border-golfn-grid/50">
                      <td className="py-4 font-medium">{tier.impressions}</td>
                      <td className="py-4 font-mono font-bold" style={{ color: partner.primaryColor }}>{tier.cost}</td>
                      <td className="py-4 font-mono text-golfn-white-faint">{tier.cpm}</td>
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
            <h3 className="font-display text-2xl mb-2">{commercialModel.performance.title}</h3>
            <p className="text-sm text-golfn-white-faint mb-6">{commercialModel.performance.subtitle}</p>
            <div className="card p-8 glow-green">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-xs font-mono px-3 py-1 rounded-full" style={{ background: `${partner.primaryColor}20`, color: partner.primaryColor }}>PREFERRED</div>
                <span className="font-medium">{commercialModel.performance.preferred.name}</span>
              </div>
              <div className="text-5xl font-bold font-mono mb-3" style={{ color: partner.primaryColor }}>
                {commercialModel.performance.preferred.range}
              </div>
              <p className="text-sm text-golfn-white-dim mb-4">
                Preferred: {commercialModel.performance.preferred.preferredRange} · Floor: {commercialModel.performance.preferred.floor}
              </p>
              <p className="text-sm text-golfn-white-faint leading-relaxed max-w-2xl">
                {commercialModel.performance.preferred.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {commercialModel.performance.alternatives.map((alt) => (
                <div key={alt.name} className="card p-5">
                  <span className="text-sm text-golfn-white-dim">{alt.name}</span>
                  <div className="text-xl font-mono font-bold mt-1" style={{ color: partner.secondaryColor }}>{alt.range}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Explicit separation note */}
        <FadeIn delay={0.35}>
          <div className="mt-12 card p-6 border-l-2" style={{ borderLeftColor: partner.primaryColor }}>
            <p className="text-sm text-golfn-white-dim leading-relaxed">
              <span className="font-medium text-golfn-white">Management and media are separate by design.</span>{' '}
              The management fee funds people and operations. Media and impression spend funds delivery volume.
              These are never bundled — each serves a distinct function in program delivery.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
