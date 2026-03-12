'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { type PartnerConfig, commercialModel } from '@/lib/presentation-data'
import { images } from '@/lib/images'
import { useRef, useState } from 'react'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

function LayerPanel({ 
  number, title, subtitle, accent, isOpen, onToggle, children 
}: { 
  number: string; title: string; subtitle: string; accent: string; isOpen: boolean; onToggle: () => void; children: React.ReactNode 
}) {
  return (
    <div className={`bg-[#131315] border rounded-2xl overflow-hidden transition-colors ${isOpen ? 'border-[#3A3A3F]' : 'border-[#2A2A2C]'}`}>
      {/* Accent bar */}
      <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${accent}, ${accent}40)` }} />
      
      {/* Header - clickable */}
      <button onClick={onToggle} className="w-full p-6 md:p-8 flex items-center justify-between text-left group">
        <div className="flex items-center gap-5">
          <span className="font-mono text-3xl font-bold" style={{ color: accent, opacity: 0.5 }}>{number}</span>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
            <p className="text-sm text-[#71717A] mt-0.5">{subtitle}</p>
          </div>
        </div>
        <motion.svg 
          animate={{ rotate: isOpen ? 180 : 0 }} 
          width="24" height="24" viewBox="0 0 24 24" 
          className="text-[#52525B] shrink-0 group-hover:text-[#8C8C8C] transition-colors"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" />
        </motion.svg>
      </button>

      {/* Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-8 border-t border-[#2A2A2C]">
              <div className="pt-6">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function CommercialModel({ partner }: { partner: PartnerConfig }) {
  const [openLayer, setOpenLayer] = useState<number | null>(0)

  const toggle = (i: number) => setOpenLayer(openLayer === i ? null : i)

  return (
    <section className="max-w-[960px] mx-auto px-6 md:px-12 py-32">
      <Fade>
        <span className="font-mono text-sm text-[#71717A] tracking-[0.2em] uppercase">Three-Layer Model</span>
        <h2 className="font-display text-4xl md:text-6xl mt-3 mb-6 leading-[0.95]">Commercial<br /><span className="text-gradient">Architecture</span></h2>
        <p className="text-[17px] text-[#B0B0B4] max-w-2xl mb-16 leading-[1.75]">GolfN's compensation is structured in three layers. Each reflects a distinct category of value. Together, they create aligned incentives: GolfN is compensated for strategic and operational work, then participates in the upside when measurable downstream results occur.</p>
      </Fade>

      {/* Money Map — always visible anchor */}
      <Fade delay={0.1}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {[
            { label: 'SETUP', sub: 'One-Time', range: '$7.5K–$35K+', layer: 0 },
            { label: 'MANAGEMENT', sub: 'Monthly', range: '$2.5K–$6.5K/mo', layer: 1 },
            { label: 'MEDIA', sub: 'Impressions', range: '$3.5K–$30K+', layer: 1 },
            { label: 'PERFORMANCE', sub: 'Variable', range: '20–40%', layer: 2 },
          ].map((c, i) => (
            <button
              key={c.label}
              onClick={() => setOpenLayer(c.layer)}
              className={`bg-[#161618] border rounded-2xl p-6 relative overflow-hidden text-left transition-all ${openLayer === c.layer ? 'border-[#3A3A3F] scale-[1.02]' : 'border-[#2A2A2C] hover:border-[#3A3A3F]'}`}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: i < 2 ? partner.primaryColor : partner.secondaryColor }} />
              <span className="font-mono text-[11px] tracking-[0.2em] text-[#71717A]">{c.label}</span>
              <div className="text-xl md:text-2xl font-bold mt-3 mb-1" style={{ color: i < 2 ? partner.primaryColor : partner.secondaryColor }}>{c.range}</div>
              <span className="text-sm text-[#71717A]">{c.sub}</span>
            </button>
          ))}
        </div>
      </Fade>

      {/* Three collapsible layer panels */}
      <Fade delay={0.15}>
        <div className="space-y-3">
          {/* Layer 1: Setup */}
          <LayerPanel number="01" title="Program Setup" subtitle="One-time investment to build the system" accent={partner.primaryColor} isOpen={openLayer === 0} onToggle={() => toggle(0)}>
            <p className="text-[17px] text-[#8C8C8C] mb-8 leading-[1.75] max-w-2xl">{commercialModel.setup.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {commercialModel.setup.tiers.map((t) => (
                <div key={t.name} className="bg-[#0F0F10] border border-[#2A2A2C] rounded-xl p-6">
                  <span className="text-base font-semibold">{t.name}</span>
                  <div className="text-2xl font-bold font-mono mt-2 mb-3" style={{ color: partner.primaryColor }}>{t.range}</div>
                  <p className="text-sm text-[#8C8C8C] leading-relaxed">{t.description}</p>
                </div>
              ))}
            </div>
            <p className="text-sm font-semibold text-[#A1A1AA] mb-3">Premium Content Extensions</p>
            <div className="flex flex-wrap gap-3">
              {commercialModel.setup.extensions.map((e) => (
                <div key={e.name} className="bg-[#0F0F10] border border-[#2A2A2C] rounded-lg px-4 py-2.5 flex items-center gap-3">
                  <span className="text-sm text-[#A1A1AA]">{e.name}</span>
                  <span className="font-mono text-sm font-semibold" style={{ color: partner.secondaryColor }}>{e.price}</span>
                </div>
              ))}
            </div>
          </LayerPanel>

          {/* Layer 2: Managed Delivery */}
          <LayerPanel number="02" title="Managed Program Delivery" subtitle="Recurring monthly execution and optimization" accent={partner.primaryColor} isOpen={openLayer === 1} onToggle={() => toggle(1)}>
            <p className="text-[17px] text-[#8C8C8C] mb-8 leading-[1.75] max-w-2xl">{commercialModel.management.description}</p>
            
            {/* Four functions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {commercialModel.management.functions.map((fn, i) => (
                <div key={fn.name} className="bg-[#0F0F10] border border-[#2A2A2C] rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-[2px] h-full" style={{ background: `linear-gradient(to bottom, ${partner.primaryColor}, ${partner.secondaryColor})`, opacity: 0.4 + i * 0.15 }} />
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#71717A]">0{i + 1}</span>
                  <h4 className="text-base font-semibold mt-2 mb-2">{fn.name}</h4>
                  <p className="text-sm text-[#8C8C8C] leading-[1.65]">{fn.description}</p>
                </div>
              ))}
            </div>

            {/* Fee tiers */}
            <div className="flex flex-col md:flex-row gap-3 mb-8">
              {commercialModel.management.tiers.map((t, i) => (
                <div key={t.name} className={`bg-[#0F0F10] border rounded-xl p-6 flex-1 ${i === 1 ? 'border-[#3A3A3F]' : 'border-[#2A2A2C]'}`} style={i === 1 ? { boxShadow: `0 0 40px ${partner.primaryColor}06` } : {}}>
                  {i === 1 && <span className="text-[10px] font-mono tracking-[0.2em] mb-2 block" style={{ color: partner.primaryColor }}>POPULAR</span>}
                  <div className="text-sm text-[#A1A1AA] mb-1">{t.name}</div>
                  <div className="text-2xl font-bold font-mono" style={{ color: partner.primaryColor }}>{t.price}</div>
                </div>
              ))}
            </div>

            {/* Impressions with image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h4 className="text-lg font-semibold mb-2">Impression Banks</h4>
                <p className="text-sm text-[#8C8C8C] mb-4 leading-[1.7]">{commercialModel.media.description}</p>
                <div className="bg-[#0F0F10] border border-[#2A2A2C] rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead><tr className="border-b border-[#2A2A2C]">
                      <th className="text-left p-4 font-mono text-[10px] tracking-[0.15em] text-[#71717A]">IMPRESSIONS</th>
                      <th className="text-left p-4 font-mono text-[10px] tracking-[0.15em] text-[#71717A]">COST</th>
                      <th className="text-left p-4 font-mono text-[10px] tracking-[0.15em] text-[#71717A]">CPM</th>
                    </tr></thead>
                    <tbody>{commercialModel.media.tiers.map((t) => (
                      <tr key={t.impressions} className="border-b border-[#2A2A2C]/40">
                        <td className="p-4 text-sm font-medium">{t.impressions}</td>
                        <td className="p-4 font-mono text-sm font-bold" style={{ color: partner.primaryColor }}>{t.cost}</td>
                        <td className="p-4 font-mono text-xs text-[#71717A]">{t.cpm}</td>
                      </tr>
                    ))}</tbody>
                  </table>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="relative">
                  <div className="absolute -inset-6 blur-[60px] opacity-[0.08] rounded-full" style={{ background: partner.primaryColor }} />
                  <img src={images.srixonAd2} alt="GolfN ad" className="relative w-48 md:w-56 rounded-[20px]" style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.6))', transform: 'rotate(-2deg)' }} />
                </div>
              </div>
            </div>
          </LayerPanel>

          {/* Layer 3: Performance */}
          <LayerPanel number="03" title="Performance Economics" subtitle="Variable compensation tied to downstream results" accent={partner.secondaryColor} isOpen={openLayer === 2} onToggle={() => toggle(2)}>
            <p className="text-[17px] text-[#8C8C8C] mb-8 leading-[1.75] max-w-2xl">{commercialModel.performance.description}</p>
            <div className="bg-[#0F0F10] border border-[#2A2A2C] rounded-xl p-8 mb-4" style={{ boxShadow: `0 0 60px ${partner.primaryColor}06` }}>
              <div className="inline-block text-xs font-mono px-3 py-1 rounded-full mb-4" style={{ background: `${partner.primaryColor}15`, color: partner.primaryColor }}>PREFERRED</div>
              <h4 className="text-lg font-semibold mb-2">{commercialModel.performance.preferred.name}</h4>
              <div className="text-4xl md:text-5xl font-bold font-mono mb-3" style={{ color: partner.primaryColor }}>{commercialModel.performance.preferred.range}</div>
              <p className="text-base text-[#A1A1AA] mb-3">Preferred: {commercialModel.performance.preferred.preferredRange} · Floor: {commercialModel.performance.preferred.floor}</p>
              <p className="text-[15px] text-[#8C8C8C] leading-[1.75] max-w-2xl mb-4">{commercialModel.performance.preferred.description}</p>
              <p className="text-sm text-[#71717A] leading-[1.7] border-l-2 pl-4 mt-4" style={{ borderColor: `${partner.primaryColor}40` }}>{commercialModel.performance.preferred.whyNotAffiliate}</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {commercialModel.performance.alternatives.map((a) => (
                <div key={a.name} className="bg-[#0F0F10] border border-[#2A2A2C] rounded-xl p-4">
                  <span className="text-sm text-[#A1A1AA]">{a.name}</span>
                  <div className="text-lg font-mono font-bold mt-1" style={{ color: partner.secondaryColor }}>{a.range}</div>
                </div>
              ))}
            </div>
          </LayerPanel>
        </div>
      </Fade>

      {/* Separation note — ties it all together */}
      <Fade delay={0.3}>
        <div className="mt-10 bg-[#161618] border border-[#2A2A2C] rounded-2xl p-8 border-l-[3px]" style={{ borderLeftColor: partner.primaryColor }}>
          <p className="text-[17px] text-[#B0B0B4] leading-[1.75]"><span className="text-white font-semibold">Different fees fund different layers of value. They are separate by design.</span> The setup fee builds infrastructure. The monthly management fee runs and optimizes it. Impression spend pays for delivery volume. Performance economics are realized only when qualifying downstream actions occur.</p>
        </div>
      </Fade>
    </section>
  )
}
