'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'

const steps = [
  {
    num: 1,
    title: 'Launch Campaign',
    short: 'Create awareness with a premium sweepstakes or promotional experience.',
    detail: 'GolfN launch campaigns are designed to create awareness, showcase your brand and product, and generate the first wave of meaningful attention and participation. These campaigns are typically structured around a premium sweepstakes or promotional experience that gives golfers a reason to engage while capturing the first wave of behavioral signal.',
    icon: '\u2728',
  },
  {
    num: 2,
    title: 'Capture Attention & Intent',
    short: 'Every interaction writes to the user profile. Real behavioral signal, not guesswork.',
    detail: 'GolfN identifies and segments golfers showing relevant interest signals, moving beyond broad reach into measurable audience qualification. Every campaign interaction writes to the user profile. The platform constructs behavioral profiles of interested users, producing a defined interest cohort and an AI-powered lookalike model.',
    icon: '\u{1F3AF}',
  },
  {
    num: 3,
    title: 'Build a Qualified Cohort',
    short: 'AI-powered lookalike modeling identifies who is actually responding.',
    detail: 'After the campaign window closes, GolfN produces a qualified audience cohort. These are golfers who engaged, showed interest, and can be specifically re-engaged. The cohort is permanent and continues to grow as new users match the behavioral pattern.',
    icon: '\u{1F465}',
  },
  {
    num: 4,
    title: 'Activate Post-Campaign',
    short: 'Follow-up offers, education, commerce, social, and progression experiences.',
    detail: 'Within 30 days of campaign close, GolfN activates the cohort through multiple channels: targeted offers, Learn & Earn education modules, points-backed commerce, social activation via OAuth, Daily Grind check-ins, and ongoing progression-based experiences. This is where the real value compounds.',
    icon: '\u{1F680}',
  },
  {
    num: 5,
    title: 'Report, Optimize, Expand',
    short: 'Monthly reporting with audience intelligence. Optimize and scale what works.',
    detail: 'Every month, GolfN delivers performance reporting with audience composition, progression metrics, conversion data, and cohort growth. Strategic recommendations guide the next period. Successful campaigns expand in scope and depth.',
    icon: '\u{1F4C8}',
  },
]

export function S03_HowItWorks({ partner }: { partner: PartnerData }) {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <p className="text-sm font-mono tracking-[0.2em] uppercase mb-4 text-[#00ff9d]">How It Works</p>
          <h2 className="text-3xl md:text-[3.5rem] font-bold leading-[0.95] mb-5">Five steps from launch<br />to <span className="text-gradient">compounding value</span></h2>
          <p className="text-lg text-[#9ca3af] max-w-2xl mb-14">
            GolfN programs begin with a premium campaign, use real behavior to identify qualified interest, and then continue activating that audience over time.
          </p>
        </Fade>

        {/* Desktop: horizontal stepper with green circles + connector */}
        <div className="hidden md:block mb-8">
          {/* Connector line */}
          <div className="relative">
            <div className="absolute top-5 left-[40px] right-[40px] h-px bg-gradient-to-r from-[#00ff9d]/40 via-[#00ff9d]/20 to-[#00ff9d]/40" />
          </div>
          <div className="flex gap-0">
            {steps.map((step, i) => (
              <Fade key={step.num} delay={0.06 * i} className="flex-1">
                <button
                  onClick={() => setExpanded(expanded === step.num ? null : step.num)}
                  className={`card-lift w-full text-left p-5 rounded-xl border-2 transition-all ${
                    expanded === step.num ? 'bg-[#131619] border-[#00ff9d]/40' : 'bg-transparent border-transparent hover:bg-[#131619]/50 hover:border-[#1e2128]'
                  }`}
                >
                  {/* Green numbered circle */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-mono font-bold shrink-0 transition-colors ${
                      expanded === step.num ? 'bg-[#00ff9d] text-[#0f1217]' : 'bg-[#00ff9d]/10 text-[#00ff9d]'
                    }`}>
                      {String(step.num).padStart(2, '0')}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{step.short}</p>
                </button>
              </Fade>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline with green circles + line */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <Fade key={step.num} delay={0.04 * i}>
              <button
                onClick={() => setExpanded(expanded === step.num ? null : step.num)}
                className="w-full text-left flex gap-4 py-5 border-b border-[#1e2128]/50"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-mono font-bold ${
                    expanded === step.num ? 'bg-[#00ff9d] text-[#0f1217]' : 'bg-[#00ff9d]/10 text-[#00ff9d]'
                  }`}>
                    {String(step.num).padStart(2, '0')}
                  </div>
                  {i < steps.length - 1 && <div className="w-px flex-1 mt-2 bg-[#00ff9d]/15" />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{step.short}</p>
                </div>
              </button>
            </Fade>
          ))}
        </div>

        {/* Expanded detail panel */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="bg-[#131619] border border-[#1e2128] rounded-2xl p-6 md:p-8 mt-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{steps.find(s => s.num === expanded)?.icon}</span>
                  <h4 className="text-lg font-bold text-white">{steps.find(s => s.num === expanded)?.title}</h4>
                </div>
                <p className="text-base text-[#d1d5db] leading-relaxed">{steps.find(s => s.num === expanded)?.detail}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
