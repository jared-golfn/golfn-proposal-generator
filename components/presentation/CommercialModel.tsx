'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { type PartnerConfig, commercialModel } from '@/lib/presentation-data'
import { images } from '@/lib/images'
import { useRef, useState } from 'react'
import { usePartnership } from '@/lib/partnership-context'
import { partnershipPaths } from '@/lib/partnership-paths'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

function LayerPanel({ number, title, subtitle, accent, isOpen, onToggle, pathBadge, children }: { number: string; title: string; subtitle: string; accent: string; isOpen: boolean; onToggle: () => void; pathBadge?: string; children: React.ReactNode }) {
  return (
    <div className={`bg-[#131315] border rounded-2xl overflow-hidden transition-colors ${isOpen ? 'border-[#3A3A3F]' : 'border-[#2A2A2C]'}`}>
      <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${accent}, ${accent}40)` }} />
      <button onClick={onToggle} className="w-full p-6 md:p-8 flex items-center justify-between text-left group">
        <div className="flex items-center gap-5">
          <span className="font-mono text-2xl md:text-3xl font-bold" style={{ color: accent, opacity: 0.5 }}>{number}</span>
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-lg md:text-2xl font-semibold">{title}</h3>
              {pathBadge && <span className="text-[10px] md:text-xs font-mono tracking-wider px-2 py-0.5 rounded" style={{ background: `${accent}20`, color: accent }}>{pathBadge}</span>}
            </div>
            <p className="text-sm md:text-base text-[#71717A] mt-0.5">{subtitle}</p>
          </div>
        </div>
        <motion.svg animate={{ rotate: isOpen ? 180 : 0 }} width="24" height="24" viewBox="0 0 24 24" className="text-[#52525B] shrink-0 group-hover:text-[#8C8C8C] transition-colors"><path d="M6 9l6 6 6-6" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" /></motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} className="overflow-hidden"><div className="px-6 md:px-8 pb-8 md:pb-10 border-t border-[#2A2A2C]"><div className="pt-6 md:pt-8">{children}</div></div></motion.div>)}
      </AnimatePresence>
    </div>
  )
}

const pathToSetupTier: Record<string, number> = { pilot: 0, growth: 1, strategic: 2 }
const pathToMgmtTier: Record<string, number> = { pilot: 0, growth: 1, strategic: 2 }

export function CommercialModel({ partner }: { partner: PartnerConfig }) {
  const [openLayer, setOpenLayer] = useState<number | null>(null)
  const { state, dispatch } = usePartnership()
  const { selectedPath, viewMode } = state
  const activePath = selectedPath ? partnershipPaths[selectedPath] : null
  const isDetailed = viewMode === 'detailed'
  const toggle = (i: number) => setOpenLayer(openLayer === i ? null : i)
  const recommendedImpressions = activePath ? activePath.impressionRecommendation : []
  const setViewMode = (mode: 'simple' | 'detailed') => { dispatch({ type: 'SET_VIEW_MODE', mode }); if (mode === 'detailed' && openLayer === null) setOpenLayer(0) }

  return (
    <section className="py-20 md:py-32">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="font-mono text-sm text-[#71717A] tracking-[0.2em] uppercase">How Pricing Works</span>
              <h2 className="font-display text-3xl md:text-5xl mt-3 leading-[0.95]">{selectedPath ? <>Pricing for <span className="text-gradient">{activePath?.name}</span></> : <>How Pricing <span className="text-gradient">Works</span></>}</h2>
            </div>
            <div className="flex items-center bg-[#131315] border border-[#2A2A2C] rounded-xl p-1 shrink-0 mt-4">
              <button onClick={() => setViewMode('simple')} className={`px-3 py-1.5 md:px-5 md:py-2.5 rounded-lg text-sm md:text-base font-medium transition-all ${!isDetailed ? 'text-white' : 'text-[#52525B] hover:text-[#71717A]'}`} style={!isDetailed ? { background: `${partner.primaryColor}20`, color: partner.primaryColor } : {}}>Simple</button>
              <button onClick={() => setViewMode('detailed')} className={`px-3 py-1.5 md:px-5 md:py-2.5 rounded-lg text-sm md:text-base font-medium transition-all ${isDetailed ? 'text-white' : 'text-[#52525B] hover:text-[#71717A]'}`} style={isDetailed ? { background: `${partner.primaryColor}20`, color: partner.primaryColor } : {}}>Detailed</button>
            </div>
          </div>
          <p className="text-base md:text-lg text-[#B0B0B4] max-w-2xl mb-6 leading-[1.75]">Every GolfN program is built from four components. The mix depends on the partnership path selected.</p>
          {selectedPath && (<div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl mb-8 border" style={{ background: `${partner.primaryColor}08`, borderColor: `${partner.primaryColor}30` }}><div className="w-2.5 h-2.5 rounded-full" style={{ background: partner.primaryColor }} /><span className="text-sm md:text-base font-mono" style={{ color: partner.primaryColor }}>Showing pricing for: {activePath?.name} Path</span></div>)}
          {!selectedPath && <div className="mb-8" />}
        </Fade>

        <Fade delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-10">
            {[{ label: 'SETUP', sub: 'Builds the program', range: selectedPath ? activePath!.setup.range : '$7.5K\u2013$35K+', layer: 0 }, { label: 'MANAGEMENT', sub: 'Runs and optimizes', range: selectedPath ? activePath!.monthly.starting : '$2.5K\u2013$6.5K/mo', layer: 1 }, { label: 'MEDIA', sub: 'Funds delivery volume', range: selectedPath ? recommendedImpressions.join('\u2013') : '$3.5K\u2013$30K+', layer: 1 }, { label: 'PERFORMANCE', sub: 'Aligned with downstream results', range: 'When applicable', layer: 2 }].map((c, i) => (
              <button key={c.label} onClick={() => { setViewMode('detailed'); setOpenLayer(c.layer) }} className={`bg-[#161618] border rounded-2xl p-5 md:p-7 relative overflow-hidden text-left transition-all ${isDetailed && openLayer === c.layer ? 'border-[#3A3A3F] scale-[1.02]' : 'border-[#2A2A2C] hover:border-[#3A3A3F]'}`}>
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: i < 2 ? partner.primaryColor : partner.secondaryColor }} />
                <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-[#71717A]">{c.label}</span>
                <div className={`font-bold mt-2 md:mt-3 mb-1 ${i === 3 ? 'text-lg md:text-xl' : 'text-xl md:text-3xl'}`} style={{ color: i < 2 ? partner.primaryColor : partner.secondaryColor }}>{c.range}</div>
                <span className="text-sm md:text-base text-[#71717A]">{c.sub}</span>
              </button>))}
          </div>
        </Fade>

        {!isDetailed && selectedPath && (<Fade delay={0.15}><div className="bg-[#131315] border border-[#2A2A2C] rounded-2xl overflow-hidden mb-8"><div className="p-6 md:p-10"><p className="text-xs md:text-sm font-mono text-[#71717A] tracking-wider uppercase mb-6">Program Foundation</p><div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">{[{ label: 'Setup Investment', value: activePath!.setup.range, sub: 'One-time' }, { label: 'Monthly Program Fee', value: activePath!.monthly.starting, sub: activePath!.managementTier }, { label: 'Recommended Duration', value: activePath!.duration.recommended, sub: `${activePath!.duration.minimum} month minimum` }].map(item => (<div key={item.label}><span className="text-sm md:text-base text-[#71717A]">{item.label}</span><div className="text-2xl md:text-4xl font-bold font-mono mt-1" style={{ color: partner.primaryColor }}>{item.value}</div><span className="text-xs md:text-sm text-[#52525B] mt-1 block">{item.sub}</span></div>))}</div><div className="border-t border-[#2A2A2C] pt-6"><p className="text-xs md:text-sm font-mono text-[#71717A] tracking-wider uppercase mb-4">Delivery Scale</p><p className="text-base md:text-lg text-[#B0B0B4] mb-4">Media volume determines reach and visibility. Recommended for {activePath!.name}:</p><div className="flex gap-3">{recommendedImpressions.map(tier => (<span key={tier} className="px-4 py-2.5 md:px-5 md:py-3 rounded-lg font-mono text-sm md:text-base font-semibold border" style={{ background: `${partner.primaryColor}10`, borderColor: `${partner.primaryColor}30`, color: partner.primaryColor }}>{tier} impressions</span>))}</div></div><div className="border-t border-[#2A2A2C] pt-6 mt-6"><p className="text-xs md:text-sm font-mono text-[#71717A] tracking-wider uppercase mb-4">Upside Alignment</p><p className="text-base md:text-lg text-[#B0B0B4]">Performance economics apply when qualifying downstream actions are part of the program. GolfN participates in upside when measurable results occur.</p></div></div><div className="px-6 md:px-10 py-5 border-t border-[#2A2A2C] bg-[#0F0F10]"><button onClick={() => setViewMode('detailed')} className="text-sm md:text-base font-mono hover:underline" style={{ color: partner.primaryColor }}>See detailed pricing breakdown {'\u2192'}</button></div></div></Fade>)}

        {!isDetailed && !selectedPath && (<Fade delay={0.15}><div className="bg-[#131315] border border-[#2A2A2C] rounded-2xl overflow-hidden mb-8"><div className="p-6 md:p-10"><p className="text-xs md:text-sm font-mono text-[#71717A] tracking-wider uppercase mb-6">Typical Pricing by Path</p><div className="space-y-4">{(['pilot', 'growth', 'strategic'] as const).map(pathId => { const p = partnershipPaths[pathId]; return (<div key={pathId} className="flex items-center justify-between py-4 md:py-5 border-b border-[#2A2A2C]/50 last:border-0"><div><span className="text-lg md:text-xl font-semibold">{p.name}</span><p className="text-sm md:text-base text-[#71717A]">{p.tagline}</p></div><div className="text-right"><div className="text-lg md:text-xl font-mono font-bold" style={{ color: partner.primaryColor }}>{p.setup.range}</div><span className="text-sm md:text-base text-[#52525B]">{p.monthly.starting}/mo</span></div></div>) })}</div></div><div className="px-6 md:px-10 py-5 border-t border-[#2A2A2C] bg-[#0F0F10]"><button onClick={() => setViewMode('detailed')} className="text-sm md:text-base font-mono hover:underline" style={{ color: partner.primaryColor }}>See detailed pricing breakdown {'\u2192'}</button></div></div></Fade>)}

        {isDetailed && (<Fade delay={0.15}><div className="space-y-3">
          <LayerPanel number="01" title="Program Setup" subtitle="One-time investment to build the system" accent={partner.primaryColor} isOpen={openLayer === 0} onToggle={() => toggle(0)} pathBadge={selectedPath ? activePath!.setup.range : undefined}>
            <p className="text-base md:text-[17px] text-[#8C8C8C] mb-8 leading-[1.75] max-w-2xl">{commercialModel.setup.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">{commercialModel.setup.tiers.map((t, idx) => { const isPathTier = selectedPath && pathToSetupTier[selectedPath] === idx; return (<div key={t.name} className={`bg-[#0F0F10] border rounded-xl p-5 md:p-7 relative ${isPathTier ? 'border-[#3A3A3F]' : 'border-[#2A2A2C]'}`} style={isPathTier ? { boxShadow: `0 0 30px ${partner.primaryColor}10` } : {}}>{isPathTier && <span className="absolute -top-2.5 left-4 text-[9px] md:text-[10px] font-mono tracking-wider px-2 py-0.5 rounded" style={{ background: partner.primaryColor, color: '#0F0F10' }}>YOUR PATH</span>}<span className="text-base md:text-lg font-semibold">{t.name}</span><div className="text-xl md:text-2xl font-bold font-mono mt-2 mb-3" style={{ color: partner.primaryColor }}>{t.range}</div><p className="text-sm md:text-base text-[#8C8C8C] leading-relaxed">{t.description}</p></div>) })}</div>
            <p className="text-sm md:text-base font-semibold text-[#A1A1AA] mb-3">Premium Content Extensions</p>
            <div className="flex flex-wrap gap-3">{commercialModel.setup.extensions.map((e) => (<div key={e.name} className="bg-[#0F0F10] border border-[#2A2A2C] rounded-lg px-4 py-2.5 md:px-5 md:py-3 flex items-center gap-3"><span className="text-sm md:text-base text-[#A1A1AA]">{e.name}</span><span className="font-mono text-sm md:text-base font-semibold" style={{ color: partner.secondaryColor }}>{e.price}</span></div>))}</div>
          </LayerPanel>

          <LayerPanel number="02" title="Managed Program Delivery" subtitle="Recurring monthly execution and optimization" accent={partner.primaryColor} isOpen={openLayer === 1} onToggle={() => toggle(1)} pathBadge={selectedPath ? activePath!.managementTier : undefined}>
            <p className="text-base md:text-[17px] text-[#8C8C8C] mb-8 leading-[1.75] max-w-2xl">{commercialModel.management.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-8">{commercialModel.management.functions.map((fn, i) => (<div key={fn.name} className="bg-[#0F0F10] border border-[#2A2A2C] rounded-xl p-5 md:p-7 relative overflow-hidden"><div className="absolute top-0 left-0 w-[2px] h-full" style={{ background: `linear-gradient(to bottom, ${partner.primaryColor}, ${partner.secondaryColor})`, opacity: 0.4 + i * 0.15 }} /><span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-[#71717A]">0{i + 1}</span><h4 className="text-base md:text-lg font-semibold mt-2 mb-2">{fn.name}</h4><p className="text-sm md:text-base text-[#8C8C8C] leading-[1.65]">{fn.description}</p></div>))}</div>
            <div className="flex flex-col md:flex-row gap-3 mb-8">{commercialModel.management.tiers.map((t, i) => { const isPathTier = selectedPath && pathToMgmtTier[selectedPath] === i; return (<div key={t.name} className={`bg-[#0F0F10] border rounded-xl p-5 md:p-7 flex-1 relative ${isPathTier ? 'border-[#3A3A3F]' : 'border-[#2A2A2C]'}`} style={isPathTier ? { boxShadow: `0 0 30px ${partner.primaryColor}10` } : {}}>{isPathTier && <span className="absolute -top-2.5 left-4 text-[9px] md:text-[10px] font-mono tracking-wider px-2 py-0.5 rounded" style={{ background: partner.primaryColor, color: '#0F0F10' }}>YOUR PATH</span>}<div className="text-sm md:text-base text-[#A1A1AA] mb-1">{t.name}</div><div className="text-xl md:text-3xl font-bold font-mono" style={{ color: partner.primaryColor }}>{t.price}</div></div>) })}</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h4 className="text-lg md:text-xl font-semibold mb-2">Impression Banks</h4>
                <p className="text-sm md:text-base text-[#8C8C8C] mb-4 leading-[1.7]">{commercialModel.media.description}</p>
                <div className="bg-[#0F0F10] border border-[#2A2A2C] rounded-xl overflow-hidden"><table className="w-full"><thead><tr className="border-b border-[#2A2A2C]"><th className="text-left p-3 md:p-4 font-mono text-[10px] md:text-xs tracking-[0.15em] text-[#71717A]">IMPRESSIONS</th><th className="text-left p-3 md:p-4 font-mono text-[10px] md:text-xs tracking-[0.15em] text-[#71717A]">COST</th><th className="text-left p-3 md:p-4 font-mono text-[10px] md:text-xs tracking-[0.15em] text-[#71717A]">CPM</th>{selectedPath && <th className="p-3 md:p-4"></th>}</tr></thead><tbody>{commercialModel.media.tiers.map((t) => { const isRec = recommendedImpressions.includes(t.impressions); return (<tr key={t.impressions} className="border-b border-[#2A2A2C]/40" style={isRec ? { background: `${partner.primaryColor}06` } : {}}><td className="p-3 md:p-4 text-sm md:text-base font-medium">{t.impressions}</td><td className="p-3 md:p-4 font-mono text-sm md:text-base font-bold" style={{ color: partner.primaryColor }}>{t.cost}</td><td className="p-3 md:p-4 font-mono text-xs md:text-sm text-[#71717A]">{t.cpm}</td>{selectedPath && <td className="p-3 md:p-4 text-right">{isRec && <span className="text-[9px] md:text-[10px] font-mono tracking-wider px-2 py-0.5 rounded" style={{ background: `${partner.primaryColor}20`, color: partner.primaryColor }}>REC</span>}</td>}</tr>) })}</tbody></table></div>
              </div>
              <div className="flex justify-center items-center"><div className="relative"><div className="absolute -inset-6 blur-[60px] opacity-[0.08] rounded-full" style={{ background: partner.primaryColor }} /><img src={images.srixonAd2} alt="GolfN ad" className="relative w-48 md:w-64 rounded-[20px]" style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.6))', transform: 'rotate(-2deg)' }} /></div></div>
            </div>
          </LayerPanel>

          <LayerPanel number="03" title="Performance Economics" subtitle="GolfN participates in upside when measurable downstream actions occur" accent={partner.secondaryColor} isOpen={openLayer === 2} onToggle={() => toggle(2)} pathBadge={selectedPath ? 'When applicable' : undefined}>
            <p className="text-base md:text-[17px] text-[#8C8C8C] mb-8 leading-[1.75] max-w-2xl">{commercialModel.performance.description}</p>
            <div className="bg-[#0F0F10] border border-[#2A2A2C] rounded-xl p-6 md:p-8 mb-4" style={{ boxShadow: `0 0 60px ${partner.primaryColor}06` }}>
              <div className="inline-block text-xs md:text-sm font-mono px-3 py-1 rounded-full mb-4" style={{ background: `${partner.primaryColor}15`, color: partner.primaryColor }}>PREFERRED</div>
              <h4 className="text-lg md:text-xl font-semibold mb-2">{commercialModel.performance.preferred.name}</h4>
              <div className="text-4xl md:text-6xl font-bold font-mono mb-3" style={{ color: partner.primaryColor }}>{commercialModel.performance.preferred.range}</div>
              <p className="text-base md:text-lg text-[#A1A1AA] mb-3">Preferred: {commercialModel.performance.preferred.preferredRange} | Floor: {commercialModel.performance.preferred.floor}</p>
              <p className="text-sm md:text-base text-[#8C8C8C] leading-[1.75] max-w-2xl mb-4">{commercialModel.performance.preferred.description}</p>
              <p className="text-sm md:text-base text-[#71717A] leading-[1.7] border-l-2 pl-4 mt-4" style={{ borderColor: `${partner.primaryColor}40` }}>{commercialModel.performance.preferred.whyNotAffiliate}</p>
            </div>
            <div className="grid grid-cols-3 gap-3">{commercialModel.performance.alternatives.map((a) => (<div key={a.name} className="bg-[#0F0F10] border border-[#2A2A2C] rounded-xl p-4 md:p-5"><span className="text-sm md:text-base text-[#A1A1AA]">{a.name}</span><div className="text-lg md:text-xl font-mono font-bold mt-1" style={{ color: partner.secondaryColor }}>{a.range}</div></div>))}</div>
          </LayerPanel>
        </div></Fade>)}

        <Fade delay={0.3}>
          <div className="mt-10 bg-[#161618] border border-[#2A2A2C] rounded-2xl p-6 md:p-8 border-l-[3px]" style={{ borderLeftColor: partner.primaryColor }}>
            <p className="text-base md:text-lg text-[#B0B0B4] leading-[1.75]"><span className="text-white font-semibold">These components are not meant to be purchased separately.</span> They combine differently based on the partnership path selected. The setup fee builds infrastructure. The monthly management fee runs and optimizes it. Impression spend pays for delivery volume. Performance economics are realized only when qualifying downstream actions occur.</p>
          </div>
        </Fade>
      </div>
    </section>
  )
}
