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
  },
  {
    num: 2,
    title: 'Capture Attention & Intent',
    short: 'Every interaction writes to the user profile. Real behavioral signal, not guesswork.',
    detail: 'GolfN identifies and segments golfers showing relevant interest signals, moving beyond broad reach into measurable audience qualification. Every campaign interaction writes to the user profile. The platform constructs behavioral profiles of interested users, producing a defined interest cohort and an AI-powered lookalike model.',
  },
  {
    num: 3,
    title: 'Build a Qualified Cohort',
    short: 'AI-powered lookalike modeling identifies who is actually responding.',
    detail: 'After the campaign window closes, GolfN produces a qualified audience cohort. These are golfers who engaged, showed interest, and can be specifically re-engaged. The cohort is permanent and continues to grow as new users match the behavioral pattern.',
  },
  {
    num: 4,
    title: 'Activate Post-Campaign',
    short: 'Follow-up offers, education, commerce, social, and progression experiences.',
    detail: 'Within 30 days of campaign close, GolfN activates the cohort through multiple channels: targeted offers, Learn & Earn education modules, points-backed commerce, social activation via OAuth, Daily Grind check-ins, and ongoing progression-based experiences. This is where the real value compounds.',
  },
  {
    num: 5,
    title: 'Report, Optimize, Expand',
    short: 'Monthly reporting with audience intelligence. Optimize and scale what works.',
    detail: 'Every month, GolfN delivers performance reporting with audience composition, progression metrics, conversion data, and cohort growth. Strategic recommendations guide the next period. Successful campaigns expand in scope and depth.',
  },
]

export function S03_HowItWorks({ partner }: { partner: PartnerData }) {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <p className="text-xs font-mono tracking-[0.2em] uppercase mb-4" style={{ color: partner.primaryColor }}>How It Works</p>
          <h2 className="font-display text-3xl md:text-5xl leading-[0.95] mb-4">Five steps from launch<br />to <span className="text-gradient">compounding value</span></h2>
          <p className="text-base md:text-lg text-[#9ca3af] max-w-2xl mb-14">
            GolfN programs begin with a premium campaign, use real behavior to identify qualified interest, and then continue activating that audience over time.
          </p>
        </Fade>

        {/* Desktop: horizontal stepper */}
        <div className="hidden md:flex gap-0 mb-8">
          {steps.map((step, i) => (
            <Fade key={step.num} delay={0.06 * i} className="flex-1">
              <button
                onClick={() => setExpanded(expanded === step.num ? null : step.num)}
                className={`w-full text-left p-5 rounded-xl border transition-all ${
                  expanded === step.num ? 'bg-[#131619] border-[#2a2f38]' : 'bg-transparent border-transparent hover:bg-[#131619]/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lg font-mono font-bold" style={{ color: partner.primaryColor }}>{String(step.num).padStart(2, '0')}</span>
                  {i < steps.length - 1 && <div className="h-px flex-1" style={{ background: `${partner.primaryColor}25` }} />}
                </div>
                <h3 className="text-base font-bold text-white mb-1">{step.title}</h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">{step.short}</p>
              </button>
            </Fade>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <Fade key={step.num} delay={0.04 * i}>
              <button
                onClick={() => setExpanded(expanded === step.num ? null : step.num)}
                className="w-full text-left flex gap-4 py-5 border-b border-[#1e2128]/50"
              >
                <div className="flex flex-col items-center shrink-0">
                  <span className="text-lg font-mono font-bold" style={{ color: partner.primaryColor }}>{String(step.num).padStart(2, '0')}</span>
                  {i < steps.length - 1 && <div className="w-px flex-1 mt-2" style={{ background: `${partner.primaryColor}20` }} />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{step.short}</p>
                </div>
              </button>
            </Fade>
          ))}
        </div>

        {/* Expanded detail */}
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
                <p className="text-base text-[#d1d5db] leading-relaxed">{steps.find(s => s.num === expanded)?.detail}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
