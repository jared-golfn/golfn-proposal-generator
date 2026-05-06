'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircleQuestion } from 'lucide-react'
import { Fade } from './Fade'

const faqs = [
  {
    question: 'Can we get category exclusivity?',
    answer: 'Yes, within your campaign window. GolfN will not run a competing brand sweepstakes simultaneously in the same product category (e.g., putters, rangefinders, outerwear). Your campaign gets undivided attention from the audience. If a competitor wants to run, they wait until your activation window closes.',
  },
  {
    question: 'Who owns the golfer data and cohort?',
    answer: 'GolfN retains the privacy-safe audience graph and individual user profiles on platform. You receive full campaign performance reports, aggregate cohort composition data, behavioral insights, and attribution reporting. The cohort is yours to reactivate through GolfN whenever you want to come back. You do not need to rebuild from scratch.',
  },
  {
    question: 'What if we want to run multiple campaigns per year?',
    answer: 'Most partners start with one sweepstakes and expand from results. Seasonal reactivation campaigns that re-engage existing cohorts are significantly more efficient than the initial build because the audience already exists. The longer you run, the better the targeting gets and the lower the effective cost per qualified user.',
  },
  {
    question: 'What happens if results are not there after 60 days?',
    answer: 'We schedule a 60-day review where we walk through every metric together. If the numbers do not justify continuing, we will be the first to tell you. Your only investment was the sweepstakes prize product. There are no long-term contracts, no ongoing commitments, and nothing to unwind.',
  },
  {
    question: 'How is this different from running a giveaway on Instagram?',
    answer: 'An Instagram giveaway gets you followers (many of whom are not golfers), has no behavioral data capture, no post-campaign activation path, and results stop when the campaign ends. GolfN captures 57 behavioral data points per user, builds a permanent qualified cohort, activates that cohort through 6+ channels for 30 days post-campaign, and expands it automatically through AI lookalike modeling. The audience compounds instead of evaporating.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-[#2a3347]/50 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className={`text-base md:text-lg font-semibold transition-colors ${isOpen ? 'text-[#00ff9d]' : 'text-white group-hover:text-[#d1d5db]'}`}>
          {question}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className={`w-5 h-5 shrink-0 ml-4 transition-colors ${isOpen ? 'text-[#00ff9d]' : 'text-[#4b5563]'}`} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-base text-[#9ca3af] leading-7 pb-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function PitchFAQ() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-4">
            <MessageCircleQuestion className="w-5 h-5 text-[#00ff9d]" />
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">Common Questions</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.05] tracking-tight mb-10">
            Questions that come up<br /><span className="text-[#00ff9d]">on every call</span>
          </h2>
        </Fade>

        <Fade delay={0.05}>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl px-6 md:px-10">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Fade>
      </div>
    </section>
  )
}
