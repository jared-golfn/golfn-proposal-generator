'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { type PartnerConfig } from '@/lib/presentation-data'
import { usePartnership } from '@/lib/partnership-context'
import { selectorQuestions } from '@/lib/partnership-paths'
import type { NeedId, GoalId, ComplexityId, ActivationImportance, PathId } from '@/lib/partnership-paths'
import { partnershipPaths } from '@/lib/partnership-paths'

export function FindYourFit({ partner }: { partner: PartnerConfig }) {
  const { state, dispatch, runRecommendation } = usePartnership()
  const { selectorStep, selectedNeed, selectedGoals, selectedComplexity, selectedActivation, recommendation } = state

  const currentQuestion = selectorStep > 0 && selectorStep <= 4 ? selectorQuestions[selectorStep - 1] : null
  const isComplete = selectorStep === 5

  const handleStart = () => dispatch({ type: 'SET_SELECTOR_STEP', step: 1 })

  const handleSelect = (questionId: string, optionId: string) => {
    if (questionId === 'need') {
      dispatch({ type: 'SET_NEED', need: optionId as NeedId })
      dispatch({ type: 'SET_SELECTOR_STEP', step: 2 })
    } else if (questionId === 'goals') {
      dispatch({ type: 'TOGGLE_GOAL', goal: optionId as GoalId })
    } else if (questionId === 'complexity') {
      dispatch({ type: 'SET_COMPLEXITY', complexity: optionId as ComplexityId })
      dispatch({ type: 'SET_SELECTOR_STEP', step: 4 })
    } else if (questionId === 'activation') {
      dispatch({ type: 'SET_ACTIVATION', activation: optionId as ActivationImportance })
      runRecommendation()
    }
  }

  const handleGoalsNext = () => {
    if (selectedGoals.length > 0) {
      dispatch({ type: 'SET_SELECTOR_STEP', step: 3 })
    }
  }

  const isOptionSelected = (questionId: string, optionId: string) => {
    if (questionId === 'need') return selectedNeed === optionId
    if (questionId === 'goals') return selectedGoals.includes(optionId as GoalId)
    if (questionId === 'complexity') return selectedComplexity === optionId
    if (questionId === 'activation') return selectedActivation === optionId
    return false
  }

  const progressPct = Math.min((selectorStep / 4) * 100, 100)

  return (
    <section className="max-w-[960px] mx-auto px-6 md:px-12 py-32">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="font-mono text-sm tracking-[0.2em] uppercase" style={{ color: partner.primaryColor }}>Interactive</span>
        <h2 className="font-display text-4xl md:text-5xl mt-3 mb-4 leading-[0.95]">Find Your <span className="text-gradient">Best Fit</span></h2>
        <p className="text-[17px] text-[#B0B0B4] leading-[1.75] max-w-xl mb-12">Answer a few quick questions and we will highlight the partnership path most aligned with your goals.</p>
      </motion.div>

      {/* Progress bar */}
      {selectorStep > 0 && !isComplete && (
        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-mono text-[#71717A]">Step {Math.min(selectorStep, 4)} of 4</span>
            <span className="text-sm font-mono text-[#71717A]">{Math.round(progressPct)}%</span>
          </div>
          <div className="h-1 bg-[#2A2A2C] rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${partner.primaryColor}, ${partner.secondaryColor})` }} animate={{ width: `${progressPct}%` }} transition={{ duration: 0.4 }} />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* Not started */}
        {selectorStep === 0 && (
          <motion.div key="start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <button
              onClick={handleStart}
              className="group flex items-center gap-4 px-8 py-5 rounded-2xl border border-[#2A2A2C] bg-[#161618] hover:border-[#3A3A3F] transition-all"
              style={{ boxShadow: `0 0 40px ${partner.primaryColor}08` }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${partner.primaryColor}15` }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 4l6 6-6 6" stroke={partner.primaryColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-left">
                <span className="text-lg font-semibold block">Find Your Best Fit</span>
                <span className="text-sm text-[#71717A]">Takes about 30 seconds</span>
              </div>
            </button>
          </motion.div>
        )}

        {/* Active question */}
        {currentQuestion && !isComplete && (
          <motion.div key={`q-${currentQuestion.id}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <div className="bg-[#131315] border border-[#2A2A2C] rounded-3xl p-8 md:p-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{currentQuestion.question}</h3>
              {currentQuestion.subtitle && <p className="text-base text-[#71717A] mb-6">{currentQuestion.subtitle}</p>}
              {!currentQuestion.subtitle && <div className="mb-6" />}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentQuestion.options.map((opt) => {
                  const selected = isOptionSelected(currentQuestion.id, opt.id)
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect(currentQuestion.id, opt.id)}
                      className={`text-left p-5 rounded-xl border transition-all duration-200 ${selected ? 'border-[#3A3A3F] bg-[#1A1A1D]' : 'border-[#2A2A2C] bg-[#161618] hover:border-[#3A3A3F]'}`}
                      style={selected ? { boxShadow: `0 0 20px ${partner.primaryColor}15`, borderColor: `${partner.primaryColor}40` } : {}}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${selected ? '' : 'border-[#52525B]'}`} style={selected ? { borderColor: partner.primaryColor, background: `${partner.primaryColor}20` } : {}}>
                          {selected && <div className="w-2.5 h-2.5 rounded-full" style={{ background: partner.primaryColor }} />}
                        </div>
                        <div>
                          <span className="text-base font-medium">{opt.label}</span>
                          {opt.description && <p className="text-sm text-[#71717A] mt-0.5">{opt.description}</p>}
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Goals step needs a "Continue" button since it's multi-select */}
              {currentQuestion.id === 'goals' && (
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={handleGoalsNext}
                    disabled={selectedGoals.length === 0}
                    className="px-6 py-3 rounded-xl font-semibold text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{ background: selectedGoals.length > 0 ? partner.primaryColor : '#2A2A2C', color: selectedGoals.length > 0 ? '#0F0F10' : '#71717A' }}
                  >
                    Continue with {selectedGoals.length} selected
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Recommendation result */}
        {isComplete && recommendation && (
          <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-[#131315] border border-[#2A2A2C] rounded-3xl overflow-hidden" style={{ boxShadow: `0 0 60px ${partner.primaryColor}10` }}>
              {/* Result header */}
              <div className="p-8 md:p-10 border-b border-[#2A2A2C]" style={{ background: `${partner.primaryColor}08` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${partner.primaryColor}20` }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10l3 3 7-7" stroke={partner.primaryColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="font-mono text-sm tracking-[0.15em]" style={{ color: partner.primaryColor }}>RECOMMENDED PATH</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-display">{partnershipPaths[recommendation.recommended].name}</h3>
                <p className="text-lg text-[#B0B0B4] mt-2">{partnershipPaths[recommendation.recommended].tagline}</p>

                {recommendation.alsoConsider && (
                  <p className="text-sm text-[#71717A] mt-4 font-mono">Also worth considering: <span className="text-[#A1A1AA]">{partnershipPaths[recommendation.alsoConsider].name}</span></p>
                )}
              </div>

              {/* Why this fits */}
              <div className="p-8 md:p-10 border-b border-[#2A2A2C]">
                <p className="text-sm font-mono text-[#71717A] tracking-wider uppercase mb-4">Why this fits</p>
                <p className="text-base text-[#B0B0B4]">Based on your selections: {recommendation.reasoning.join(', ')}</p>
              </div>

              {/* What this includes */}
              <div className="p-8 md:p-10 border-b border-[#2A2A2C]">
                <p className="text-sm font-mono text-[#71717A] tracking-wider uppercase mb-4">What this typically includes</p>
                <div className="flex flex-wrap gap-2">
                  {partnershipPaths[recommendation.recommended].includes.map((item) => (
                    <span key={item} className="text-sm px-4 py-2 rounded-lg bg-[#1A1A1D] border border-[#2A2A2C] text-[#D4D4D8]">{item}</span>
                  ))}
                </div>
              </div>

              {/* Typical pricing frame */}
              <div className="p-8 md:p-10 border-b border-[#2A2A2C]">
                <p className="text-sm font-mono text-[#71717A] tracking-wider uppercase mb-4">Typical pricing frame</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Setup', value: partnershipPaths[recommendation.recommended].setup.range },
                    { label: 'Monthly', value: partnershipPaths[recommendation.recommended].monthly.starting },
                    { label: 'Duration', value: partnershipPaths[recommendation.recommended].duration.recommended },
                    { label: 'Management', value: partnershipPaths[recommendation.recommended].managementTier },
                  ].map((item) => (
                    <div key={item.label}>
                      <span className="text-xs text-[#71717A] font-mono">{item.label}</span>
                      <div className="text-lg font-semibold mt-1" style={{ color: partner.primaryColor }}>{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="p-8 md:p-10 flex flex-wrap gap-4">
                <a
                  href={`mailto:jared@golfn.com?subject=Partnership%20Discussion%20%E2%80%94%20${encodeURIComponent(partner.partnerName)}%20(${partnershipPaths[recommendation.recommended].name}%20Path)`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:scale-[1.02]"
                  style={{ background: `linear-gradient(135deg, ${partner.primaryColor}, ${partner.secondaryColor})`, color: '#0F0F10' }}
                >
                  Start the Conversation
                </a>
                <button
                  onClick={() => dispatch({ type: 'RESET_ALL' })}
                  className="px-6 py-4 rounded-xl font-medium text-base text-[#71717A] border border-[#2A2A2C] hover:border-[#3A3A3F] transition-all"
                >
                  Reset Selection
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
