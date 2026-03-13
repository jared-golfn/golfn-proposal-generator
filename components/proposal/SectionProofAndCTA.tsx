'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig, strategicSummary, closingStatement } from '@/lib/presentation-data'
import { caseStudies } from '@/lib/case-studies'
import { images } from '@/lib/images'
import { Expandable } from './Expandable'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>{children}</motion.div>
}

export function SectionProofAndCTA({ partner }: { partner: PartnerConfig }) {
  const isPortfolio = partner.isPortfolio
  const studies = isPortfolio
    ? caseStudies.slice(0, 2)
    : caseStudies.filter(cs => cs.relevantTo.includes(partner.slug)).slice(0, 2)
  const allStudies = isPortfolio
    ? caseStudies
    : caseStudies.filter(cs => cs.relevantTo.includes(partner.slug))

  return (
    <section className="py-20 md:py-32">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <h2 className="font-display text-4xl md:text-7xl leading-[0.9] mb-4">
            Proven <span className="text-gradient">Results</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#A1A1AA] max-w-2xl mb-12 md:mb-16">
            Real campaign results from GolfN partner activations.
          </p>
        </Fade>

        {/* Featured case studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-8">
          {studies.map((study, i) => (
            <Fade key={study.id} delay={0.08 * i}>
              <div className="bg-[#131315] border border-[#2A2A2C] rounded-2xl p-6 md:p-8" style={{ borderTopColor: study.color, borderTopWidth: '3px' }}>
                <p className="text-xs font-mono tracking-wider uppercase mb-1" style={{ color: study.color }}>{study.category}</p>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{study.title}</h3>
                <p className="text-base text-[#A1A1AA] leading-relaxed mb-4">{study.approach}</p>
                <div className="space-y-2 mb-4">
                  {study.results.map((r, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: study.color }} />
                      <span className="text-sm text-[#D4D4D8]"><strong>{r.metric}:</strong> {r.value}</span>
                    </div>
                  ))}
                </div>
                {study.pullQuote && (
                  <p className="text-base text-[#D4D4D8] italic border-l-2 pl-4" style={{ borderColor: study.color }}>&ldquo;{study.pullQuote}&rdquo;</p>
                )}
              </div>
            </Fade>
          ))}
        </div>

        {/* See all case studies */}
        {allStudies.length > 2 && (
          <Fade delay={0.2}>
            <Expandable
              accentColor={partner.primaryColor}
              trigger={<span className="text-lg font-semibold text-white">See All {allStudies.length} Case Studies</span>}
            >
              <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
                {allStudies.slice(2).map((study) => (
                  <div key={study.id} className="bg-[#0F0F10] border border-[#2A2A2C] rounded-xl p-5" style={{ borderTopColor: study.color, borderTopWidth: '2px' }}>
                    <p className="text-xs font-mono tracking-wider uppercase mb-1" style={{ color: study.color }}>{study.category}</p>
                    <h4 className="text-lg font-bold text-white mb-2">{study.title}</h4>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed mb-3">{study.approach}</p>
                    {study.pullQuote && <p className="text-sm text-[#D4D4D8] italic">&ldquo;{study.pullQuote}&rdquo;</p>}
                  </div>
                ))}
              </div>
            </Expandable>
          </Fade>
        )}

        {/* Testimonial screenshots */}
        <div className="mt-5">
          <Fade delay={0.25}>
            <Expandable
              accentColor={partner.primaryColor}
              trigger={<span className="text-lg font-semibold text-white">Real Golfer Feedback</span>}
            >
              <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                {[images.testimonial1, images.testimonial2, images.testimonial3, images.testimonial4].map((img, i) => (
                  <img key={i} src={img} alt="Golfer feedback" className="rounded-xl w-full" />
                ))}
              </div>
            </Expandable>
          </Fade>
        </div>

        {/* Why GolfN */}
        <div className="mt-16 md:mt-24 space-y-6">
          {strategicSummary.map((point, i) => (
            <Fade key={i} delay={0.1 * i}>
              <div className="flex gap-4 md:gap-6">
                <span className="text-4xl md:text-5xl font-mono font-bold shrink-0" style={{ color: partner.primaryColor, opacity: 0.3 }}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{point.lead}</h3>
                  <p className="text-base md:text-lg text-[#A1A1AA] leading-relaxed">{point.body}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* Closing statement */}
        <Fade delay={0.4}>
          <div className="mt-12 md:mt-16 bg-[#161618] border border-[#2A2A2C] rounded-2xl p-8 md:p-12">
            <p className="text-xl md:text-2xl leading-relaxed font-light text-[#D4D4D8]">{closingStatement}</p>
          </div>
        </Fade>

        {/* Final CTA */}
        <Fade delay={0.5}>
          <div className="mt-20 md:mt-28 text-center">
            <img src={images.logo} alt="GolfN" className="h-14 md:h-20 w-auto mx-auto mb-8 opacity-80" />
            <h3 className="font-display text-4xl md:text-6xl mb-5">{"Let's"} <span className="text-gradient">Build This</span></h3>
            <p className="text-lg md:text-xl text-[#8C8C8C] max-w-lg mx-auto mb-10">
              {"We'll scope the right program based on your goals."}
            </p>
            <a href={`mailto:jared@golfn.com?subject=Partnership%20Discussion%20%E2%80%94%20${encodeURIComponent(partner.partnerName)}`} className="inline-flex items-center gap-3 px-10 py-5 md:px-14 md:py-6 rounded-2xl font-bold text-xl md:text-2xl transition-all hover:scale-[1.03]" style={{ background: `linear-gradient(135deg, ${partner.primaryColor}, ${partner.secondaryColor})`, color: '#0F0F10' }}>
              Start the Conversation &rarr;
            </a>
          </div>
        </Fade>
      </div>
    </section>
  )
}
