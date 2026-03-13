'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig } from '@/lib/presentation-data'
import { brandRecommendations } from '@/lib/case-studies'
import { partnershipPaths } from '@/lib/partnership-paths'
import { marketData, marketDataTotal, getPartnerMarkets } from '@/lib/market-data'
import { Expandable } from './Expandable'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>{children}</motion.div>
}

export function SectionRecommendation({ partner }: { partner: PartnerConfig }) {
  const isPortfolio = partner.isPortfolio && partner.portfolioBrands
  const recs = isPortfolio
    ? brandRecommendations
    : brandRecommendations.filter(r => r.brandSlug === partner.slug)

  const partnerMarkets = partner.keyMarkets ? getPartnerMarkets(partner.keyMarkets) : []
  const maxUsers = marketData.length > 0 ? marketData[0].users : 1
  const partnerMarketsTotal = partnerMarkets.reduce((sum, m) => sum + m.users, 0)

  return (
    <section className="py-20 md:py-32">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <h2 className="font-display text-4xl md:text-7xl leading-[0.9] mb-4">
            Our <span className="text-gradient">Recommendation</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#A1A1AA] max-w-2xl mb-12 md:mb-16">
            Based on your goals and market position, here is where we suggest starting.
          </p>
        </Fade>

        {/* Recommendation cards */}
        <div className={`grid grid-cols-1 ${isPortfolio ? 'md:grid-cols-3' : 'max-w-2xl'} gap-5 md:gap-6 mb-12`}>
          {recs.map((rec, i) => {
            const path = partnershipPaths[rec.recommendedPath]
            return (
              <Fade key={rec.brandSlug} delay={0.1 * i}>
                <div className="bg-[#131315] border-2 rounded-2xl overflow-hidden" style={{ borderColor: `${rec.brandColor}40` }}>
                  {/* Brand header */}
                  <div className="px-6 py-5 md:px-8 md:py-6" style={{ background: `${rec.brandColor}08` }}>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <img src={rec.brandLogoUrl} alt={rec.brandName} className="h-7 md:h-9 w-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
                      <span className="text-sm md:text-base font-mono font-bold px-4 py-2 rounded-xl" style={{ background: `${rec.brandColor}20`, color: rec.brandColor }}>
                        {path.name} Path
                      </span>
                    </div>
                    <p className="text-base md:text-lg text-[#B0B0B4] leading-relaxed">{rec.rationale}</p>
                  </div>
                  {/* Pricing quick-look */}
                  <div className="px-6 py-4 md:px-8 md:py-5 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-[#71717A] mb-1">Setup</p>
                      <p className="text-xl md:text-2xl font-mono font-bold" style={{ color: rec.brandColor }}>{path.setup.range}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#71717A] mb-1">Monthly</p>
                      <p className="text-xl md:text-2xl font-mono font-bold" style={{ color: rec.brandColor }}>{path.monthly.starting}</p>
                    </div>
                  </div>
                  {/* CTA */}
                  <div className="px-6 py-4 md:px-8 border-t border-[#2A2A2C]/50">
                    <a href={`mailto:jared@golfn.com?subject=Partnership%20Discussion%20%E2%80%94%20${encodeURIComponent(rec.brandName)}%20(${path.name}%20Path)`} className="text-base md:text-lg font-semibold transition-all hover:opacity-80" style={{ color: rec.brandColor }}>
                      Scope {rec.brandName} Program &rarr;
                    </a>
                  </div>
                </div>
              </Fade>
            )
          })}
        </div>

        {/* Portfolio callout */}
        {isPortfolio && (
          <Fade delay={0.3}>
            <div className="bg-[#131315] border border-[#2A2A2C] rounded-2xl p-6 md:p-8 border-l-4 mb-10" style={{ borderLeftColor: partner.primaryColor }}>
              <p className="text-lg md:text-xl text-[#D4D4D8] leading-relaxed">
                <span className="font-bold text-white">Portfolio play:</span> Start all three brands as Pilots on shared infrastructure. Consolidated pricing kicks in from day one. Successful Pilots become Growth programs with proven data behind them.
              </p>
            </div>
          </Fade>
        )}

        {/* Market data — expandable */}
        {partnerMarkets.length > 0 && (
          <Fade delay={0.35}>
            <Expandable
              accentColor={partner.primaryColor}
              trigger={
                <div className="flex items-center gap-4">
                  <span className="text-lg md:text-xl font-semibold text-white">Your Market Reach</span>
                  <span className="text-lg md:text-xl font-mono font-bold" style={{ color: partner.primaryColor }}>{partnerMarketsTotal.toLocaleString()} verified golfers</span>
                  <span className="text-base text-[#71717A]">across {partnerMarkets.length} key markets</span>
                </div>
              }
            >
              <div className="pt-4 space-y-4">
                {partnerMarkets.sort((a, b) => b.users - a.users).map((market) => {
                  const pct = (market.users / maxUsers) * 100
                  return (
                    <div key={market.code}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{market.flag}</span>
                          <span className="text-base md:text-lg text-[#D4D4D8] font-medium">{market.country}</span>
                        </div>
                        <span className="text-base md:text-lg font-mono font-bold" style={{ color: partner.primaryColor }}>{market.users.toLocaleString()}</span>
                      </div>
                      <div className="h-2.5 bg-[#1A1A1D] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${partner.primaryColor}, ${partner.secondaryColor})`, width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
                <p className="text-sm text-[#71717A] mt-4">All-time unique verified golfers across {marketDataTotal.countriesGlobal} countries globally. As of {marketDataTotal.asOfDate}.</p>
              </div>
            </Expandable>
          </Fade>
        )}
      </div>
    </section>
  )
}
