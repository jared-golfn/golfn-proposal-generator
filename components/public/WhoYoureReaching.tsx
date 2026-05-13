'use client'

import { motion } from 'framer-motion'
import { Users, DollarSign, Target, Globe } from 'lucide-react'

interface Stat {
  Icon: typeof Users
  value: string
  label: string
  sub: string
}

const demographics: Stat[] = [
  {
    Icon: Users,
    value: '59%',
    label: 'aged 25 to 44',
    sub: 'A younger, higher-spending skew than legacy golf demos.',
  },
  {
    Icon: DollarSign,
    value: '$125k',
    label: 'average household income',
    sub: 'Self-reported through in-app gear and lifestyle surveys.',
  },
  {
    Icon: Target,
    value: '67%',
    label: 'handicap 10 to 24',
    sub: 'Active, competitive players. Not weekend warriors.',
  },
  {
    Icon: Globe,
    value: '78%',
    label: 'USA, 60+ countries',
    sub: 'Concentrated US TAM with a global tail.',
  },
]

export function WhoYoureReaching() {
  return (
    <section className="py-24 md:py-32" id="who-youre-reaching">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-4">Who You&rsquo;re Reaching</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight mb-4 max-w-4xl">
          Real golfers. <span className="text-gradient">Real data.</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-base md:text-lg text-[#9ca3af] mb-12 max-w-3xl">
          The question every brand asks first: who exactly is in here? First-party data from the app, surveyed in profile, verified by play.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {demographics.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-6 md:p-7"
            >
              <div className="w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center mb-5">
                <s.Icon className="w-5 h-5 text-[#00ff9d]" />
              </div>
              <p className="text-4xl md:text-5xl font-mono font-bold text-[#00ff9d] mb-2 leading-none">{s.value}</p>
              <p className="text-sm md:text-base text-white font-semibold mb-2">{s.label}</p>
              <p className="text-xs md:text-sm text-[#9ca3af] leading-6">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-sm text-[#6b7280] mt-10 max-w-4xl">
          Full audience cohorts available on call. Custom audience match upload and lookalike modeling for partnership-tier brands.
        </motion.p>
      </div>
    </section>
  )
}
