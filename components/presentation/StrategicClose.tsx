'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig, strategicSummary, closingStatement } from '@/lib/presentation-data'
import { images } from '@/lib/images'
import { usePartnership } from '@/lib/partnership-context'
import { partnershipPaths, extensions as allExtensions } from '@/lib/partnership-paths'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

const goalLabels: Record<string, string> = {
  awareness: 'Awareness', education: 'Education', activation: 'Activation',
  conversion: 'Conversion', adoption: 'Adoption', advocacy: 'Advocacy',
}

function getExtensionName(id: string): string {
  return allExtensions.find(e => e.id === id)?.name || id
}

export function StrategicClose({ partner }: { partner: PartnerConfig }) {
  const { state, resetAll } = usePartnership()
  const { selectedPath, selectedGoals, selectedExtensions, isRecommended } = state
  const activePath = selectedPath ? partnershipPaths[selectedPath] : null

  // Build email subject with context
  const emailSubject = selectedPath
    ? `Partnership Discussion — ${partner.partnerName} (${activePath?.name} Path)`
    : `Partnership Discussion — ${partner.partnerName}`

  // Personalized headline
  const headline = selectedPath
    ? { pre: "Let's ", verb: selectedPath === 'pilot' ? 'Launch a ' : selectedPath === 'growth' ? 'Build a ' : 'Scope a ', noun: `${activePath?.name} Program` }
    : { pre: "Let's ", verb: 'Scope the Right ', noun: 'Partnership Path' }

  return (
    <section className="max-w-[960px] mx-auto px-6 md:px-12 py-32">
      <Fade>
        <span className="font-mono text-sm tracking-[0.2em] uppercase" style={{ color: partner.primaryColor }}>Strategic Summary</span>
        <h2 className="font-display text-4xl md:text-6xl mt-4 mb-16 leading-[0.95]">Why <span className="text-gradient">GolfN</span></h2>
      </Fade>

      <div className="space-y-12 mb-20">
        {strategicSummary.map((point, i) => (
          <Fade key={i} delay={0.1 + i * 0.1}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-1">
                <span className="font-mono text-3xl font-bold" style={{ color: partner.primaryColor, opacity: 0.4 }}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-2xl font-semibold mb-2">{point.lead}</h3>
                <p className="text-[17px] text-[#B0B0B4] leading-[1.75]">{point.body}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      <Fade delay={0.5}>
        <div className="bg-[#161618] border border-[#2A2A2C] rounded-2xl p-10 md:p-12">
          <p className="text-xl md:text-2xl leading-[1.6] font-light text-[#D4D4D8]">
            {closingStatement}
          </p>
        </div>
      </Fade>

      {/* Personalized selection summary — only shows when path is selected */}
      {selectedPath && (
        <Fade delay={0.55}>
          <div className="mt-16 bg-[#131315] border border-[#2A2A2C] rounded-2xl overflow-hidden" style={{ boxShadow: `0 0 60px ${partner.primaryColor}08` }}>
            <div className="px-8 md:px-10 py-6 border-b border-[#2A2A2C]" style={{ background: `${partner.primaryColor}06` }}>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: partner.primaryColor }} />
                <span className="text-sm font-mono tracking-wider" style={{ color: partner.primaryColor }}>YOUR PROGRAM SUMMARY</span>
                {isRecommended && <span className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded" style={{ background: `${partner.primaryColor}20`, color: partner.primaryColor }}>RECOMMENDED</span>}
              </div>
            </div>

            <div className="px-8 md:px-10 py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div>
                  <span className="text-xs text-[#52525B] font-mono">PATH</span>
                  <div className="text-xl font-semibold mt-1">{activePath?.name}</div>
                </div>
                <div>
                  <span className="text-xs text-[#52525B] font-mono">SETUP</span>
                  <div className="text-xl font-mono font-bold mt-1" style={{ color: partner.primaryColor }}>{activePath?.setup.range}</div>
                </div>
                <div>
                  <span className="text-xs text-[#52525B] font-mono">MONTHLY</span>
                  <div className="text-xl font-mono font-bold mt-1" style={{ color: partner.primaryColor }}>{activePath?.monthly.starting}</div>
                </div>
                <div>
                  <span className="text-xs text-[#52525B] font-mono">DURATION</span>
                  <div className="text-xl font-mono font-bold mt-1" style={{ color: partner.primaryColor }}>{activePath?.duration.recommended}</div>
                </div>
              </div>

              {(selectedGoals.length > 0 || selectedExtensions.length > 0) && (
                <div className="border-t border-[#2A2A2C] pt-6 space-y-4">
                  {selectedGoals.length > 0 && (
                    <div>
                      <span className="text-xs text-[#52525B] font-mono">SELECTED GOALS</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedGoals.map(g => (
                          <span key={g} className="text-sm px-3 py-1.5 rounded-lg bg-[#1A1A1D] border border-[#2A2A2C] text-[#D4D4D8]">{goalLabels[g]}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {selectedExtensions.length > 0 && (
                    <div>
                      <span className="text-xs text-[#52525B] font-mono">SELECTED EXTENSIONS</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedExtensions.map(e => (
                          <span key={e} className="text-sm px-3 py-1.5 rounded-lg border text-[#D4D4D8]" style={{ background: `${partner.primaryColor}08`, borderColor: `${partner.primaryColor}20` }}>{getExtensionName(e)}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Fade>
      )}

      {/* CTA section */}
      <Fade delay={0.6}>
        <div className="mt-24 text-center">
          <img src={images.logo} alt="GolfN" className="h-14 md:h-16 w-auto mx-auto mb-8 opacity-80" />

          {/* Adaptive headline */}
          <h3 className="font-display text-4xl md:text-5xl mb-5">
            {headline.pre}<span className="text-gradient">{headline.verb}{headline.noun}</span>
          </h3>

          {/* Adaptive subtitle */}
          <p className="text-lg text-[#8C8C8C] max-w-lg mx-auto mb-10">
            {selectedPath
              ? `We'll build a ${activePath?.name} program for ${partner.partnerName} that drives real golfers to real action.`
              : `We'll recommend the right structure based on your goals, product complexity, activation requirements, and preferred commercial model.`
            }
          </p>

          {/* Primary CTA */}
          <a
            href={`mailto:jared@golfn.com?subject=${encodeURIComponent(emailSubject)}`}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-[1.02]"
            style={{ background: `linear-gradient(135deg, ${partner.primaryColor}, ${partner.secondaryColor})`, color: '#0F0F10' }}
          >
            {selectedPath
              ? `Scope My ${activePath?.name} Program →`
              : 'Start the Conversation →'
            }
          </a>

          {/* Secondary actions */}
          <div className="flex items-center justify-center gap-6 mt-6">
            {selectedPath && (
              <button onClick={resetAll} className="text-sm text-[#52525B] hover:text-[#71717A] transition-colors">
                Reset Selection
              </button>
            )}
            {!selectedPath && (
              <button
                onClick={() => document.getElementById('best-fit')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm hover:underline transition-colors"
                style={{ color: partner.primaryColor }}
              >
                Find Your Best Fit First
              </button>
            )}
          </div>
        </div>
      </Fade>
    </section>
  )
}
