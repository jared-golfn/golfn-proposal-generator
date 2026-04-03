'use client'

import { motion } from 'framer-motion'
import { Trophy, ArrowRight, Rocket, Target } from 'lucide-react'
import { useBusinessNeed } from '@/lib/business-need-context'
import { getNeedById, awarenessNeed } from '@/lib/business-needs'
import { Fade } from './Fade'

export function NeedCampaignCard() {
  const { selectedNeed, downstreamObjective } = useBusinessNeed()

  // If awareness is selected, show the awareness campaign with optional downstream framing
  if (selectedNeed === 'build-awareness') {
    const aw = awarenessNeed
    const downstream = getNeedById(downstreamObjective)

    return (
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <Fade>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-2.5 mb-5">
                <Rocket className="w-5 h-5 text-[#00ff9d]" />
                <h3 className="text-2xl md:text-3xl font-semibold text-white">Phase 1: Awareness Campaign</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{aw.icon}</span>
                    <div>
                      <h4 className="text-xl font-bold text-white">{aw.campaignVariant.title}</h4>
                      <p className="text-sm text-[#00ff9d]">{aw.campaignVariant.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-base text-[#d1d5db] leading-7 mb-6">{aw.campaignVariant.description}</p>
                  <div className="mb-6">
                    <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-3">Prize Ideas</p>
                    <p className="text-base text-[#9ca3af] leading-7">{aw.campaignVariant.prizeIdea}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono tracking-wider px-2.5 py-0.5 rounded-full font-bold bg-[#00ff9d] text-[#0f1217]">PRIZE POOL</span>
                      <span className="text-xl font-mono font-bold text-[#00ff9d]">~$4,500</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono tracking-wider px-2.5 py-0.5 rounded-full font-bold bg-[#2a3347] text-[#9ca3af]">STARTUP</span>
                      <span className="text-lg font-mono font-bold text-white">$2,500</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="bg-[#0f1217] rounded-xl p-6 h-full">
                    <p className="text-sm font-mono text-[#00ff9d] uppercase tracking-wider mb-4">Activation Flow</p>
                    <div className="space-y-0">
                      {aw.campaignVariant.activationSteps.map((step, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-[#00ff9d]/15 flex items-center justify-center text-sm font-bold text-[#00ff9d] shrink-0">{i + 1}</div>
                            {i < aw.campaignVariant.activationSteps.length - 1 && <div className="w-px h-full bg-[#2a3347] my-1" />}
                          </div>
                          <div className="pb-5"><p className="text-sm text-[#d1d5db] leading-6">{step}</p></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 teaser if downstream objective is selected */}
            {downstream && (
              <div className="border-t border-[#2a3347] bg-[#0f1217]/50 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-5 h-5 text-[#00ff9d]" />
                  <h4 className="text-xl font-bold text-white">Phase 2: {downstream.title}</h4>
                  <span className="text-xs font-mono text-[#6b7280] uppercase tracking-wider">After cohort is built</span>
                </div>
                <p className="text-base text-[#9ca3af] leading-7 mb-4">{downstream.campaignVariant.description}</p>
                <div className="flex flex-wrap gap-2">
                  {downstream.activationMethods.map(method => (
                    <span key={method} className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/20">{method}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Fade>
      </div>
    )
  }

  // Specific need selected (not awareness)
  const need = getNeedById(selectedNeed)

  if (!need) {
    return (
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <Fade>
          <div className="bg-[#1a1f2e] border border-[#2a3347] border-dashed rounded-2xl p-10 text-center">
            <p className="text-lg text-[#6b7280]">Select your business need above to see a tailored campaign example.</p>
          </div>
        </Fade>
      </div>
    )
  }

  const cv = need.campaignVariant

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
      <Fade>
        <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-2.5 mb-5">
              <Trophy className="w-5 h-5 text-[#00ff9d]" />
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Recommended Campaign</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{need.icon}</span>
                  <div>
                    <h4 className="text-xl font-bold text-white">{cv.title}</h4>
                    <p className="text-sm text-[#00ff9d]">{cv.subtitle}</p>
                  </div>
                </div>
                <p className="text-base text-[#d1d5db] leading-7 mb-6">{cv.description}</p>
                <div className="mb-6">
                  <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider mb-3">Prize Ideas</p>
                  <p className="text-base text-[#9ca3af] leading-7">{cv.prizeIdea}</p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono tracking-wider px-2.5 py-0.5 rounded-full font-bold bg-[#00ff9d] text-[#0f1217]">PRIZE POOL</span>
                    <span className="text-xl font-mono font-bold text-[#00ff9d]">~$4,500</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono tracking-wider px-2.5 py-0.5 rounded-full font-bold bg-[#2a3347] text-[#9ca3af]">STARTUP</span>
                    <span className="text-lg font-mono font-bold text-white">$2,500</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-[#0f1217] rounded-xl p-6 h-full">
                  <p className="text-sm font-mono text-[#00ff9d] uppercase tracking-wider mb-4">Activation Flow</p>
                  <div className="space-y-0">
                    {cv.activationSteps.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-[#00ff9d]/15 flex items-center justify-center text-sm font-bold text-[#00ff9d] shrink-0">{i + 1}</div>
                          {i < cv.activationSteps.length - 1 && <div className="w-px h-full bg-[#2a3347] my-1" />}
                        </div>
                        <div className="pb-5"><p className="text-sm text-[#d1d5db] leading-6">{step}</p></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}
