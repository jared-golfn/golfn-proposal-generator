'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig } from '@/lib/presentation-data'
import { brandRecommendations } from '@/lib/case-studies'
import { partnershipPaths } from '@/lib/partnership-paths'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

export function Recommendations({ partner }: { partner: PartnerConfig }) {
  const isPortfolio = partner.isPortfolio && partner.portfolioBrands

  // For portfolio: show recommendations for all brands
  // For single brand: show recommendation for that brand only
  const recs = isPortfolio
    ? brandRecommendations
    : brandRecommendations.filter(r => r.brandSlug === partner.slug)

  if (recs.length === 0) return null

  return (
    <section className="py-20 md:py-32">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <span className="font-mono text-sm text-[#71717A] tracking-[0.2em] uppercase">Our Recommendation</span>
          <h2 className="font-display text-3xl md:text-5xl mt-3 mb-4 leading-[0.95]">
            {isPortfolio ? (<>What We Recommend<br /><span className="text-gradient">Per Brand</span></>) : (<>What We Recommend<br /><span className="text-gradient">For {partner.partnerName}</span></>)}
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B4] max-w-xl mb-3 leading-[1.75]">
            Based on your goals, market position, and existing affiliate infrastructure, here is our recommended starting point for each brand.
          </p>
        </Fade>
      </div>

      <div className="w-content-wide px-4 md:px-6 mt-8 md:mt-12">
        <div className={`grid grid-cols-1 ${isPortfolio ? 'md:grid-cols-3' : 'md:grid-cols-1 max-w-2xl'} gap-5 md:gap-6`}>
          {recs.map((rec, i) => {
            const path = partnershipPaths[rec.recommendedPath]
            return (
              <Fade key={rec.brandSlug} delay={0.08 * i}>
                <div className="bg-[#131315] border border-[#2A2A2C] rounded-2xl overflow-hidden" style={{ borderTopColor: rec.brandColor, borderTopWidth: '3px' }}>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <img src={rec.brandLogoUrl} alt={rec.brandName} className="h-5 md:h-6 w-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
                      <span className="text-xs md:text-sm font-mono tracking-wider px-3 py-1.5 rounded-lg font-bold" style={{ background: `${rec.brandColor}20`, color: rec.brandColor, border: `1px solid ${rec.brandColor}30` }}>
                        REC: {path.name.toUpperCase()}
                      </span>
                    </div>

                    <p className="text-sm md:text-base text-[#B0B0B4] leading-relaxed mb-6">{rec.rationale}</p>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#0F0F10] rounded-xl p-3">
                        <p className="text-[10px] font-mono text-[#52525B] tracking-wider uppercase">Setup</p>
                        <p className="text-sm font-mono font-bold mt-1" style={{ color: rec.brandColor }}>{path.setup.range}</p>
                      </div>
                      <div className="bg-[#0F0F10] rounded-xl p-3">
                        <p className="text-[10px] font-mono text-[#52525B] tracking-wider uppercase">Monthly</p>
                        <p className="text-sm font-mono font-bold mt-1" style={{ color: rec.brandColor }}>{path.monthly.starting}</p>
                      </div>
                      <div className="bg-[#0F0F10] rounded-xl p-3">
                        <p className="text-[10px] font-mono text-[#52525B] tracking-wider uppercase">Duration</p>
                        <p className="text-sm font-mono font-bold mt-1" style={{ color: rec.brandColor }}>{path.duration.recommended}</p>
                      </div>
                      <div className="bg-[#0F0F10] rounded-xl p-3">
                        <p className="text-[10px] font-mono text-[#52525B] tracking-wider uppercase">Impressions</p>
                        <p className="text-sm font-mono font-bold mt-1" style={{ color: rec.brandColor }}>{path.impressionRecommendation.join(' \u2013 ')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 md:px-8 py-4 border-t border-[#2A2A2C]/50">
                    <a href={`mailto:jared@golfn.com?subject=Partnership%20Discussion%20%E2%80%94%20${encodeURIComponent(rec.brandName)}%20(${path.name}%20Path%20%E2%80%94%20Recommended)`} className="inline-flex items-center gap-2 text-sm md:text-base font-semibold transition-all hover:opacity-80" style={{ color: rec.brandColor }}>
                      Scope {rec.brandName} {path.name} Program &rarr;
                    </a>
                  </div>
                </div>
              </Fade>
            )
          })}
        </div>

        {isPortfolio && (
          <Fade delay={0.3}>
            <div className="mt-6 md:mt-8 bg-[#131315] border border-[#2A2A2C] rounded-2xl p-6 md:p-8 border-l-[3px]" style={{ borderLeftColor: partner.primaryColor }}>
              <p className="text-base md:text-lg text-[#B0B0B4]">
                <span className="text-white font-semibold">Portfolio Recommendation:</span>{' '}
                Start all three brands as Pilots on shared infrastructure. This validates the model per brand, builds three distinct audience cohorts, and unlocks consolidated agency pricing from day one. Successful Pilots naturally expand into Growth programs with proven data behind them.
              </p>
            </div>
          </Fade>
        )}
      </div>
    </section>
  )
}
