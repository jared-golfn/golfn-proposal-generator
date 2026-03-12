'use client'

import { motion, useInView } from 'framer-motion'
import { type PartnerConfig, commercialModel } from '@/lib/presentation-data'
import { images } from '@/lib/images'
import { useRef } from 'react'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

export function CommercialModel({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="max-w-[960px] mx-auto px-6 md:px-12 py-32">
      <Fade>
        <span className="font-mono text-sm text-[#71717A] tracking-[0.2em] uppercase">Three-Layer Model</span>
        <h2 className="font-display text-4xl md:text-6xl mt-3 mb-6 leading-[0.95]">Commercial<br /><span className="text-gradient">Architecture</span></h2>
        <p className="text-[17px] text-[#B0B0B4] max-w-2xl mb-16 leading-[1.75]">GolfN\u2019s compensation is structured in three layers. Each reflects a distinct category of value. Together, they create aligned incentives: GolfN is compensated for strategic and operational work, then participates in the upside when measurable downstream results occur.</p>
      </Fade>

      <Fade delay={0.1}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-24">
          {[
            { label: 'SETUP', sub: 'One-Time', range: '$7.5K\u2013$35K+' },
            { label: 'MANAGEMENT', sub: 'Monthly', range: '$2.5K\u2013$6.5K/mo' },
            { label: 'MEDIA', sub: 'Impressions', range: '$3.5K\u2013$30K+' },
            { label: 'PERFORMANCE', sub: 'Variable', range: '20\u201340%' },
          ].map((c, i) => (
            <div key={c.label} className="bg-[#161618] border border-[#2A2A2C] rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: i < 2 ? partner.primaryColor : partner.secondaryColor }} />
              <span className="font-mono text-[11px] tracking-[0.2em] text-[#71717A]">{c.label}</span>
              <div className="text-xl md:text-2xl font-bold mt-3 mb-1" style={{ color: i < 2 ? partner.primaryColor : partner.secondaryColor }}>{c.range}</div>
              <span className="text-sm text-[#71717A]">{c.sub}</span>
            </div>
          ))}
        </div>
      </Fade>

      <Fade delay={0.15}>
        <h3 className="font-display text-3xl mb-2">{commercialModel.setup.title}</h3>
        <p className="text-[17px] text-[#8C8C8C] mb-8 leading-[1.75] max-w-2xl">{commercialModel.setup.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {commercialModel.setup.tiers.map((t) => (
            <div key={t.name} className="bg-[#161618] border border-[#2A2A2C] rounded-2xl p-7">
              <span className="text-base font-semibold">{t.name}</span>
              <div className="text-2xl font-bold font-mono mt-2 mb-3" style={{ color: partner.primaryColor }}>{t.range}</div>
              <p className="text-sm text-[#8C8C8C] leading-relaxed">{t.description}</p>
            </div>
          ))}
        </div>
      </Fade>

      <Fade delay={0.2}>
        <p className="text-base font-semibold text-[#A1A1AA] mb-4">Premium Content Extensions</p>
        <div className="flex flex-wrap gap-3 mb-20">
          {commercialModel.setup.extensions.map((e) => (
            <div key={e.name} className="bg-[#161618] border border-[#2A2A2C] rounded-xl px-5 py-3 flex items-center gap-4">
              <span className="text-base text-[#A1A1AA]">{e.name}</span>
              <span className="font-mono text-base font-semibold" style={{ color: partner.secondaryColor }}>{e.price}</span>
            </div>
          ))}
        </div>
      </Fade>

      <Fade delay={0.25}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h3 className="font-display text-3xl mb-2">{commercialModel.media.title}</h3>
            <p className="text-[17px] text-[#8C8C8C] mb-8 leading-[1.75]">{commercialModel.media.description}</p>
            <div className="bg-[#161618] border border-[#2A2A2C] rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead><tr className="border-b border-[#2A2A2C]">
                  <th className="text-left p-5 font-mono text-[11px] tracking-[0.15em] text-[#71717A]">IMPRESSIONS</th>
                  <th className="text-left p-5 font-mono text-[11px] tracking-[0.15em] text-[#71717A]">COST</th>
                  <th className="text-left p-5 font-mono text-[11px] tracking-[0.15em] text-[#71717A]">CPM</th>
                </tr></thead>
                <tbody>{commercialModel.media.tiers.map((t) => (
                  <tr key={t.impressions} className="border-b border-[#2A2A2C]/40">
                    <td className="p-5 text-base font-medium">{t.impressions}</td>
                    <td className="p-5 font-mono text-base font-bold" style={{ color: partner.primaryColor }}>{t.cost}</td>
                    <td className="p-5 font-mono text-sm text-[#71717A]">{t.cpm}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-8 blur-[80px] opacity-[0.08] rounded-full" style={{ background: partner.primaryColor }} />
              <img src={images.srixonAd2} alt="GolfN ad placement" className="relative w-56 md:w-64 rounded-[24px]" style={{ filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.6))', transform: 'rotate(-2deg)' }} />
            </div>
          </div>
        </div>
      </Fade>

      <Fade delay={0.3}>
        <h3 className="font-display text-3xl mb-2">{commercialModel.performance.title}</h3>
        <p className="text-[17px] text-[#8C8C8C] mb-8 leading-[1.75] max-w-2xl">{commercialModel.performance.description}</p>
        <div className="bg-[#161618] border border-[#2A2A2C] rounded-2xl p-8 md:p-10 mb-4" style={{ boxShadow: `0 0 80px ${partner.primaryColor}06` }}>
          <div className="inline-block text-xs font-mono px-3 py-1 rounded-full mb-4" style={{ background: `${partner.primaryColor}15`, color: partner.primaryColor }}>PREFERRED</div>
          <h4 className="text-xl font-semibold mb-3">{commercialModel.performance.preferred.name}</h4>
          <div className="text-5xl md:text-6xl font-bold font-mono mb-4" style={{ color: partner.primaryColor }}>{commercialModel.performance.preferred.range}</div>
          <p className="text-lg text-[#A1A1AA] mb-4">{"Preferred: " + commercialModel.performance.preferred.preferredRange + " \u00b7 Floor: " + commercialModel.performance.preferred.floor}</p>
          <p className="text-[17px] text-[#8C8C8C] leading-[1.75] max-w-2xl mb-4">{commercialModel.performance.preferred.description}</p>
          <p className="text-[15px] text-[#71717A] leading-[1.75] border-l-2 pl-5 mt-6" style={{ borderColor: `${partner.primaryColor}40` }}>{commercialModel.performance.preferred.whyNotAffiliate}</p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {commercialModel.performance.alternatives.map((a) => (
            <div key={a.name} className="bg-[#161618] border border-[#2A2A2C] rounded-2xl p-5">
              <span className="text-sm text-[#A1A1AA]">{a.name}</span>
              <div className="text-xl font-mono font-bold mt-1" style={{ color: partner.secondaryColor }}>{a.range}</div>
            </div>
          ))}
        </div>
      </Fade>

      <Fade delay={0.35}>
        <div className="mt-16 bg-[#161618] border border-[#2A2A2C] rounded-2xl p-8 border-l-[3px]" style={{ borderLeftColor: partner.primaryColor }}>
          <p className="text-[17px] text-[#B0B0B4] leading-[1.75]"><span className="text-white font-semibold">Different fees fund different layers of value. They are separate by design.</span> The setup fee builds infrastructure. The monthly management fee runs and optimizes it. Impression spend pays for delivery volume. Performance economics are realized only when qualifying downstream actions occur. Each layer is independent.</p>
        </div>
      </Fade>
    </section>
  )
}
