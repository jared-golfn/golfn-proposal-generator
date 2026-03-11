'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig, thresholds } from '@/lib/presentation-data'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export function Thresholds({ partner }: { partner: PartnerConfig }) {
  const items = [
    { label: 'Setup', value: thresholds.setup, icon: '◆' },
    { label: 'Recurring', value: thresholds.recurring, icon: '◆' },
    { label: 'Duration', value: thresholds.duration, icon: '◆' },
    { label: 'Commerce', value: thresholds.commerce, icon: '◆' },
  ]

  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <span className="font-mono text-xs text-golfn-white-faint tracking-widest uppercase">Minimums</span>
            <h2 className="font-display text-4xl md:text-6xl mt-3">Partnership<br /><span className="text-gradient">Thresholds</span></h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <FadeIn key={item.label} delay={0.1 + i * 0.08}>
              <div className="card p-8 flex items-start gap-4">
                <div
                  className="mt-1 text-xs"
                  style={{ color: partner.primaryColor }}
                >
                  {item.icon}
                </div>
                <div>
                  <span className="text-sm text-golfn-white-faint">{item.label}</span>
                  <div className="text-xl font-bold font-mono mt-1" style={{ color: partner.primaryColor }}>
                    {item.value}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA / Next Steps */}
        <FadeIn delay={0.4}>
          <div className="mt-20 text-center">
            <div
              className="inline-block w-16 h-1 rounded-full mb-8"
              style={{ background: `linear-gradient(90deg, ${partner.primaryColor}, ${partner.secondaryColor})` }}
            />
            <h3 className="font-display text-3xl md:text-4xl mb-4">Ready to build together?</h3>
            <p className="text-golfn-white-dim max-w-lg mx-auto">
              Let's design a {partner.partnerName} program that drives real golfers to real action.
            </p>
            <div className="mt-8">
              <a
                href="mailto:jared@golfn.com?subject=Partnership%20Discussion%20-%20{partner.partnerName}"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium text-golfn-bg transition-all hover:opacity-90"
                style={{ background: `linear-gradient(135deg, ${partner.primaryColor}, ${partner.secondaryColor})` }}
              >
                Start the Conversation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M3 8h8M8 4l4 4-4 4" stroke="currentColor" fill="none" strokeWidth="2" />
                </svg>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
