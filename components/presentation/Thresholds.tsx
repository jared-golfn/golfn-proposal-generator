'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig, thresholds } from '@/lib/presentation-data'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

export function Thresholds({ partner }: { partner: PartnerConfig }) {
  const items = [
    { label: 'Setup', value: thresholds.setup },
    { label: 'Recurring', value: thresholds.recurring },
    { label: 'Duration', value: thresholds.duration },
    { label: 'Commerce', value: thresholds.commerce },
  ]

  return (
    <section className="max-w-5xl mx-auto px-6 md:px-12 py-28">
      <Fade>
        <span className="font-mono text-sm text-golfn-faint tracking-[0.2em] uppercase">Minimums</span>
        <h2 className="font-display text-5xl md:text-7xl mt-3 mb-16 leading-[0.92]">Partnership<br /><span className="text-gradient">Thresholds</span></h2>
      </Fade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <Fade key={item.label} delay={0.08 + i * 0.06}>
            <div className="bg-golfn-card border border-golfn-border rounded-2xl p-8">
              <span className="text-base text-golfn-faint">{item.label}</span>
              <div className="text-2xl font-bold font-mono mt-2" style={{ color: partner.primaryColor }}>{item.value}</div>
            </div>
          </Fade>
        ))}
      </div>

      <Fade delay={0.4}>
        <div className="mt-28 text-center">
          <div className="w-16 h-[2px] mx-auto mb-10 rounded-full" style={{ background: `linear-gradient(90deg, ${partner.primaryColor}, ${partner.secondaryColor})` }} />
          <h3 className="font-display text-4xl md:text-5xl mb-5">Ready to build together?</h3>
          <p className="text-lg text-golfn-dim max-w-lg mx-auto mb-10">Let's design a {partner.partnerName} program that drives real golfers to real action.</p>
          <a
            href={`mailto:jared@golfn.com?subject=Partnership%20Discussion%20-%20${partner.partnerName}`}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-lg transition-all hover:opacity-90"
            style={{ background: `linear-gradient(135deg, ${partner.primaryColor}, ${partner.secondaryColor})`, color: '#09090B' }}
          >
            Start the Conversation →
          </a>
        </div>
      </Fade>
    </section>
  )
}
