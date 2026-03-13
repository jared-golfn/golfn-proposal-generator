'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig } from '@/lib/presentation-data'
import { caseStudies } from '@/lib/case-studies'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

export function CaseStudies({ partner }: { partner: PartnerConfig }) {
  // For portfolio presentations, show all case studies
  // For single-brand presentations, filter to relevant ones
  const isPortfolio = partner.isPortfolio
  const studies = isPortfolio
    ? caseStudies
    : caseStudies.filter(cs => cs.relevantTo.includes(partner.slug))

  if (studies.length === 0) return null

  return (
    <section className="py-20 md:py-32">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <span className="font-mono text-sm text-[#71717A] tracking-[0.2em] uppercase">Proven Results</span>
          <h2 className="font-display text-3xl md:text-5xl mt-3 mb-4 leading-[0.95]">What Brands Have<br /><span className="text-gradient">Already Achieved</span></h2>
          <p className="text-base md:text-lg text-[#B0B0B4] max-w-xl mb-3 leading-[1.75]">Real campaign results from GolfN partner activations. Some brands anonymized at their request.</p>
        </Fade>
      </div>

      <div className="w-content-wide px-4 md:px-6 mt-8 md:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {studies.map((study, i) => (
            <Fade key={study.id} delay={0.08 * i}>
              <div className="bg-[#131315] border border-[#2A2A2C] rounded-2xl overflow-hidden h-full flex flex-col" style={{ borderTopColor: study.color, borderTopWidth: '2px' }}>
                <div className="p-6 md:p-8 flex-1">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div>
                      <p className="text-xs font-mono tracking-wider uppercase" style={{ color: study.color }}>{study.category}</p>
                      <h3 className="text-lg md:text-xl font-bold text-white mt-1">{study.title}</h3>
                    </div>
                  </div>

                  <div className="mb-5">
                    <p className="text-xs font-mono text-[#52525B] tracking-wider uppercase mb-2">Challenge</p>
                    <p className="text-sm md:text-base text-[#A1A1AA] leading-relaxed">{study.challenge}</p>
                  </div>

                  <div className="mb-5">
                    <p className="text-xs font-mono text-[#52525B] tracking-wider uppercase mb-2">GolfN Approach</p>
                    <p className="text-sm md:text-base text-[#B0B0B4] leading-relaxed">{study.approach}</p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-mono text-[#52525B] tracking-wider uppercase">Results</p>
                    {study.results.map((r, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0" style={{ background: study.color }} />
                        <div>
                          <span className="text-sm font-semibold text-[#D4D4D8]">{r.metric}: </span>
                          <span className="text-sm text-[#A1A1AA]">{r.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {study.pullQuote && (
                  <div className="px-6 md:px-8 py-4 md:py-5 border-t border-[#2A2A2C]/50" style={{ background: `${study.color}06` }}>
                    <p className="text-sm md:text-base text-[#D4D4D8] italic leading-relaxed">&ldquo;{study.pullQuote}&rdquo;</p>
                  </div>
                )}

                {/* Relevant-to tags */}
                {isPortfolio && study.relevantTo.length > 0 && (
                  <div className="px-6 md:px-8 py-3 border-t border-[#2A2A2C]/30 flex items-center gap-2">
                    <span className="text-[10px] font-mono text-[#52525B] tracking-wider uppercase">Relevant for:</span>
                    {study.relevantTo.map(slug => {
                      const brand = partner.portfolioBrands?.find(b => b.slug === slug)
                      if (!brand) return null
                      return (
                        <img key={slug} src={brand.logoUrl} alt={brand.name} className="h-3 md:h-3.5 w-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.5 }} />
                      )
                    })}
                  </div>
                )}
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  )
}
