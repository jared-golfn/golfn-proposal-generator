'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Flag, Target, Users, Zap, TrendingUp, ArrowRight, ChevronRight } from 'lucide-react'
import type { PartnerData } from '@/lib/template-types'
import { useBusinessNeed } from '@/lib/business-need-context'
import { getNeedById, type HowItWorksOverride } from '@/lib/business-needs'
import { Fade } from './Fade'

const defaultSteps = [
  { num: 1, title: 'Launch Campaign', short: 'Premium sweepstakes that create real awareness.', detail: 'GolfN launch campaigns are structured around premium sweepstakes that give golfers a genuine reason to engage with your brand. Multiple prize tiers maximize participation. Distribution hits email, push, in-app, social, and daily engagement systems simultaneously.', whyDifferent: 'Traditional sponsorship puts your logo somewhere and hopes. GolfN puts your product in front of golfers who are actively earning, competing, and paying attention.', metric: '250,000+', metricLabel: 'entries in a single campaign', Icon: Flag },
  { num: 2, title: 'Capture Intent', short: 'Every interaction builds a behavioral profile.', detail: 'Every campaign interaction writes to the user profile. GolfN knows who entered, what they browsed, how long they engaged, and what other brands they interact with. First-party behavioral data from verified golfers inside a golf-native environment.', whyDifferent: 'Meta tells you someone is "interested in golf." GolfN tells you they play 3x/month, walk, carry a 14 handicap, and their driver is 3 years old.', metric: '57', metricLabel: 'data points per golfer profile', Icon: Target },
  { num: 3, title: 'Build Qualified Cohort', short: 'AI identifies who is actually responding to your brand.', detail: 'After the campaign, GolfN produces a qualified audience cohort -- golfers who engaged, showed interest, and match your profile. The cohort is permanent and grows as new users match the behavioral pattern through AI lookalike modeling.', whyDifferent: 'You are not renting an audience. You are building one. This cohort is yours to activate repeatedly.', metric: '2,000+', metricLabel: 'qualified golfers per campaign (typical)', Icon: Users },
  { num: 4, title: 'Activate the Cohort', short: 'Targeted offers, education, commerce, social proof.', detail: 'Within 30 days, GolfN activates the qualified cohort: targeted offers, Learn and Earn education, points-backed commerce, social activation via OAuth, and Daily Grind check-in incentives.', whyDifferent: 'Every activation is measurable and attributed. You see which golfers engaged with which touchpoint and what happened next.', metric: '6+', metricLabel: 'simultaneous activation channels', Icon: Zap },
  { num: 5, title: 'Compound and Scale', short: 'The cohort grows. The data improves. Results compound.', detail: 'Monthly reporting shows audience composition, progression, conversion, and cohort growth. New matching users auto-enroll. Seasonal reactivation re-engages lapsed interest. Month 6 is significantly more efficient than month 1.', whyDifferent: 'Most marketing is a treadmill. Spend stops, results stop. GolfN builds an asset that compounds.', metric: '53%', metricLabel: 'avg MoM growth in power user cohort', Icon: TrendingUp },
]

export function S03_PitchHowItWorks({ partner }: { partner: PartnerData }) {
  const [activeStep, setActiveStep] = useState(1)
  const { selectedNeed } = useBusinessNeed()
  const need = getNeedById(selectedNeed)
  const overrides = need?.howItWorksOverrides

  const steps = defaultSteps.map((step, i) => {
    if (overrides && overrides[i]) {
      return {
        ...step,
        whyDifferent: overrides[i].whyDifferent,
        metric: overrides[i].metric,
        metricLabel: overrides[i].metricLabel,
      }
    }
    return step
  })

  const current = steps.find(s => s.num === activeStep) || steps[0]

  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase mb-4 text-[#00ff9d]">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight mb-5">
            Five steps to a<br /><span className="text-[#00ff9d]">compounding audience</span>
          </h2>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-8 mb-14">
            {partner.howItWorksIntro || 'This is not a one-off campaign. It is a system that builds a qualified audience, activates it, and makes it more valuable every month.'}
          </p>
        </Fade>

        <div className="flex flex-wrap gap-2 mb-10">
          {steps.map((step) => (
            <button key={step.num} onClick={() => setActiveStep(step.num)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeStep === step.num ? 'bg-[#00ff9d] text-[#0f1217]' : 'bg-[#1a1f2e] text-[#9ca3af] border border-[#2a3347] hover:border-[#00ff9d]/30 hover:text-white'
              }`}>
              <step.Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{step.title}</span>
              <span className="sm:hidden">{step.num}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeStep} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#00ff9d] flex items-center justify-center shrink-0">
                    <current.Icon className="w-6 h-6 text-[#0f1217]" />
                  </div>
                  <div>
                    <p className="text-sm font-mono text-[#6b7280] uppercase tracking-wider">Step {current.num} of 5</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{current.title}</h3>
                  </div>
                </div>
                <p className="text-lg text-[#d1d5db] leading-8 mb-8">{current.detail}</p>
                <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl p-6">
                  <p className="text-sm font-mono text-[#00ff9d] uppercase tracking-wider mb-2">Why This Is Different</p>
                  <p className="text-base text-[#d1d5db] leading-7">{current.whyDifferent}</p>
                </div>
                {activeStep < 5 && (
                  <button onClick={() => setActiveStep(activeStep + 1)} className="mt-6 flex items-center gap-2 text-[#00ff9d] text-sm font-semibold hover:gap-3 transition-all">
                    Next: {steps[activeStep].title} <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
              <div className="flex flex-col gap-6">
                <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-8 flex-1 flex flex-col justify-center text-center">
                  <p className="text-6xl md:text-7xl font-mono font-bold text-[#00ff9d] mb-3">{current.metric}</p>
                  <p className="text-base text-[#9ca3af]">{current.metricLabel}</p>
                </div>
                <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-6">
                  <p className="text-xs font-mono text-[#4b5563] uppercase tracking-wider mb-3">Value Accumulation</p>
                  <div className="space-y-2">
                    {steps.map((step) => (
                      <div key={step.num} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full transition-colors ${step.num <= activeStep ? 'bg-[#00ff9d]' : 'bg-[#2a3347]'}`} />
                        <span className={`text-sm transition-colors ${step.num === activeStep ? 'text-[#00ff9d] font-semibold' : step.num < activeStep ? 'text-[#9ca3af]' : 'text-[#4b5563]'}`}>{step.title}</span>
                        {step.num < activeStep && <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="ml-auto"><path d="M3 8l3.5 3.5L13 5" stroke="#00ff9d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                        {step.num === activeStep && <ChevronRight className="w-3 h-3 text-[#00ff9d] ml-auto" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
