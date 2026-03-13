'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Flag, Target, Users, Zap, TrendingUp } from 'lucide-react'
import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'

const steps = [
  { num: 1, title: 'Launch Campaign', short: 'Create awareness with a premium sweepstakes or promotional experience.', detail: 'GolfN launch campaigns are designed to create awareness, showcase your brand and product, and generate the first wave of meaningful attention and participation. These campaigns are typically structured around a premium sweepstakes or promotional experience that gives golfers a reason to engage while capturing the first wave of behavioral signal.', Icon: Flag },
  { num: 2, title: 'Capture Intent', short: 'Every interaction writes to the user profile. Real behavioral signal, not guesswork.', detail: 'GolfN identifies and segments golfers showing relevant interest signals, moving beyond broad reach into measurable audience qualification. Every campaign interaction writes to the user profile. The platform constructs behavioral profiles of interested users, producing a defined interest cohort and an AI-powered lookalike model.', Icon: Target },
  { num: 3, title: 'Build Cohort', short: 'AI-powered lookalike modeling identifies who is actually responding.', detail: 'After the campaign window closes, GolfN produces a qualified audience cohort. These are golfers who engaged, showed interest, and can be specifically re-engaged. The cohort is permanent and continues to grow as new users match the behavioral pattern.', Icon: Users },
  { num: 4, title: 'Activate', short: 'Follow-up offers, education, commerce, social, and progression experiences.', detail: 'Within 30 days of campaign close, GolfN activates the cohort through multiple channels: targeted offers, Learn & Earn education modules, points-backed commerce, social activation via OAuth, Daily Grind check-ins, and ongoing progression-based experiences.', Icon: Zap },
  { num: 5, title: 'Optimize & Expand', short: 'Monthly reporting with audience intelligence. Optimize and scale what works.', detail: 'Every month, GolfN delivers performance reporting with audience composition, progression metrics, conversion data, and cohort growth. Strategic recommendations guide the next period. Successful campaigns expand in scope and depth.', Icon: TrendingUp },
]

export function S03_HowItWorks({ partner }: { partner: PartnerData }) {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase mb-4 text-[#00ff9d]">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight mb-5">Five steps from launch<br />to <span className="text-gradient">compounding value</span></h2>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-8 mb-14">
            GolfN programs begin with a premium campaign, use real behavior to identify qualified interest, and then continue activating that audience over time.
          </p>
        </Fade>

        {/* Desktop: horizontal stepper */}
        <div className="hidden md:block mb-8">
          <div className="relative">
            <div className="absolute top-5 left-[40px] right-[40px] h-px bg-gradient-to-r from-[#00ff9d]/40 via-[#00ff9d]/20 to-[#00ff9d]/40" />
          </div>
          <div className="flex gap-0">
            {steps.map((step, i) => (
              <Fade key={step.num} delay={0.06 * i} className="flex-1">
                <button
                  onClick={() => setExpanded(expanded === step.num ? null : step.num)}
                  className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-300 ${
                    expanded === step.num ? 'bg-[#1a1f2e] border-[#00ff9d]/40 shadow-xl' : 'bg-transparent border-transparent hover:bg-[#1a1f2e]/50 hover:border-[#2a3347]'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      expanded === step.num ? 'bg-[#00ff9d] text-[#0f1217]' : 'bg-[#00ff9d]/10 text-[#00ff9d]'
                    }`}>
                      <step.Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-base text-[#6b7280] leading-relaxed">{step.short}</p>
                </button>
              </Fade>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline with icons */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <Fade key={step.num} delay={0.04 * i}>
              <button
                onClick={() => setExpanded(expanded === step.num ? null : step.num)}
                className="w-full text-left flex gap-4 py-5 border-b border-[#2a3347]/50"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    expanded === step.num ? 'bg-[#00ff9d] text-[#0f1217]' : 'bg-[#00ff9d]/10 text-[#00ff9d]'
                  }`}>
                    <step.Icon className="w-5 h-5" />
                  </div>
                  {i < steps.length - 1 && <div className="w-px flex-1 mt-2 bg-[#00ff9d]/15" />}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-base text-[#6b7280] leading-relaxed">{step.short}</p>
                </div>
              </button>
            </Fade>
          ))}
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-8 mt-4">
                <div className="flex items-center gap-3 mb-3">
                  {(() => { const s = steps.find(s => s.num === expanded); return s ? <s.Icon className="w-6 h-6 text-[#00ff9d]" /> : null })()}
                  <h4 className="text-xl font-semibold text-white">{steps.find(s => s.num === expanded)?.title}</h4>
                </div>
                <p className="text-lg text-[#d1d5db] leading-8">{steps.find(s => s.num === expanded)?.detail}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
