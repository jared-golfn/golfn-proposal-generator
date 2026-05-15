'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useRateRequest } from '@/lib/rate-request-context'

const CALENDLY_URL = 'https://calendly.com/golfn'

interface Tier {
  id: string
  eyebrow: string
  name: string
  hook: string
  body: string
  includes: string[]
  cta: string
  featured?: boolean
}

const tiers: Tier[] = [
  {
    id: 'starter',
    eyebrow: 'Try us',
    name: 'Starter',
    hook: 'A single-surface trial.',
    body: 'Run one sweepstakes or one campaign with us. Brand provides the prize. We run everything — creative, distribution, CRM, fulfillment. No upfront cost. No setup fee.',
    includes: [
      'Sweepstakes or single-surface trial',
      'Brand provides prize (~$1k+ retail floor)',
      'Full campaign infrastructure on us',
      'Wrap report and audience cohort delivered',
    ],
    cta: 'Book a sweepstakes call',
  },
  {
    id: 'hero',
    eyebrow: 'Run a moment',
    name: 'Hero',
    hook: 'A multi-surface campaign for one big moment.',
    body: 'Tied to a launch, a season, or a tour event. Sweepstakes plus marketplace banner plus push and CRM, sequenced to compound. Bundle priced.',
    includes: [
      'Two to four surfaces sequenced together',
      'Featured marketplace banner window',
      'Push and CRM sends included',
      'Creative production and copy support',
    ],
    cta: 'Plan a Hero moment',
    featured: true,
  },
  {
    id: 'annual',
    eyebrow: 'Be always-on',
    name: 'Annual',
    hook: 'An always-on partnership with category exclusivity.',
    body: 'Annual CPM commitment plus always-on placement, quarterly audience intelligence, and preferred marketplace placement. Your category is yours.',
    includes: [
      'Annual CPM commitment with category exclusivity',
      'Always-on placement (takeover or in-feed)',
      'Quarterly audience intelligence reports',
      'First access to new inventory and beta capabilities',
    ],
    cta: 'Talk partnership',
  },
]

export function OnRamp() {
  const { open } = useRateRequest()

  function ctaFor(t: Tier) {
    if (t.id === 'starter') {
      return (
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#00ff9d] text-[#0f1217] font-bold text-sm hover:bg-[#00e68a] transition-colors w-full justify-center"
        >
          {t.cta}
          <ArrowRight className="w-4 h-4" />
        </a>
      )
    }
    return (
      <button
        type="button"
        onClick={() => open(t.id === 'annual' ? 'Annual partnership' : 'Sweepstakes')}
        className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-colors w-full justify-center ${
          t.featured
            ? 'bg-[#00ff9d] text-[#0f1217] hover:bg-[#00e68a]'
            : 'border border-[#2a3347] text-white hover:border-[#00ff9d]/40 hover:text-[#00ff9d]'
        }`}
      >
        {t.cta}
        <ArrowRight className="w-4 h-4" />
      </button>
    )
  }

  return (
    <section className="py-24 md:py-32" id="on-ramp">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#c5a572] mb-4"
        >
          The On-Ramp
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight mb-6 max-w-4xl"
        >
          Three ways to start. <span className="text-gradient">Pick your shape.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base md:text-lg text-[#9ca3af] mb-12 max-w-3xl leading-7"
        >
          We&rsquo;ll prove the audience before we ask you for a dollar. A premium Japanese forged iron brand gave us $769 in product. In 40 days, our users bought <span className="text-white font-semibold">$31k in their gear</span>. Most of them first time buyers of the brand.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {tiers.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className={`relative rounded-2xl p-7 md:p-8 flex flex-col card-lift ${
                t.featured
                  ? 'bg-gradient-to-br from-[#001a14] to-[#0f1217] border border-[#00ff9d]/40'
                  : 'bg-[#1a1f2e] border border-[#2a3347]'
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-7">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00ff9d] text-[#0f1217] text-[10px] font-mono uppercase tracking-[0.18em] font-bold">
                    <Sparkles className="w-3 h-3" />
                    Most run
                  </div>
                </div>
              )}

              <p className="text-xs font-mono text-[#c5a572] tracking-[0.18em] uppercase mb-2">{t.eyebrow}</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{t.name}</h3>
              <p className="text-base md:text-lg text-white leading-7 mb-3 font-semibold">{t.hook}</p>
              <p className="text-sm text-[#9ca3af] leading-7 mb-6">{t.body}</p>

              <ul className="space-y-2 mb-7 flex-1">
                {t.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#00ff9d] mt-0.5 shrink-0 leading-none">{'>'}</span>
                    <span className="text-sm text-[#d1d5db] leading-6">{item}</span>
                  </li>
                ))}
              </ul>

              {ctaFor(t)}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-sm text-[#6b7280] mt-8 text-center"
        >
          We do well when our customers do well.
        </motion.p>
      </div>
    </section>
  )
}
