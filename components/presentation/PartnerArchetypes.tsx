'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { type PartnerConfig, archetypes } from '@/lib/presentation-data'

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

export function PartnerArchetypes({ partner }: { partner: PartnerConfig }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="section-padding bg-grid relative">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <span className="font-mono text-xs text-golfn-white-faint tracking-widest uppercase">Partnership Models</span>
            <h2 className="font-display text-4xl md:text-6xl mt-3">Program<br /><span className="text-gradient">Archetypes</span></h2>
            <p className="text-golfn-white-dim mt-4 max-w-xl">
              Three proven structures — each maps to a different level of commitment and scale.
            </p>
          </div>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.1}>
          <div className="flex gap-2 mb-8 overflow-x-auto">
            {archetypes.map((arch, i) => (
              <button
                key={arch.name}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeTab === i
                    ? 'text-golfn-bg'
                    : 'card text-golfn-white-dim hover:text-golfn-white'
                }`}
                style={
                  activeTab === i
                    ? { background: `linear-gradient(135deg, ${partner.primaryColor}, ${partner.secondaryColor})` }
                    : {}
                }
              >
                {arch.name}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Active archetype detail */}
        <FadeIn delay={0.15}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="card p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-mono mb-4"
                  style={{ background: `${partner.primaryColor}20`, color: partner.primaryColor }}
                >
                  {archetypes[activeTab].stages}
                </div>
                <h3 className="text-3xl font-display mb-4">{archetypes[activeTab].name}</h3>
                <p className="text-golfn-white-dim leading-relaxed">{archetypes[activeTab].description}</p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Setup Investment', value: archetypes[activeTab].setupRange },
                  { label: 'Monthly Minimum', value: archetypes[activeTab].monthlyMin },
                  { label: 'Management Tier', value: archetypes[activeTab].management },
                  { label: 'Daily Grind Model', value: archetypes[activeTab].dailyGrind },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-golfn-grid/50">
                    <span className="text-sm text-golfn-white-faint">{item.label}</span>
                    <span className="text-sm font-mono font-medium" style={{ color: partner.primaryColor }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </FadeIn>

        {/* Multi-brand note */}
        <FadeIn delay={0.25}>
          <div className="mt-8 card p-6 border-l-2" style={{ borderLeftColor: partner.secondaryColor }}>
            <p className="text-sm text-golfn-white-dim leading-relaxed">
              <span className="font-medium text-golfn-white">Multi-Brand Pricing:</span>{' '}
              Consolidated pricing is customized based on scope overlap, execution complexity,
              and shared infrastructure. Not a discount ladder — a strategic conversation.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
