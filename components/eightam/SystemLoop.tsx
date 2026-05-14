'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, Activity, Zap, LineChart } from 'lucide-react'

interface Nugget {
  id: string
  number: string
  name: string
  tagline: string
  body: string
  keyLine: string
  Icon: React.ComponentType<{ className?: string }>
}

const nuggets: Nugget[] = [
  {
    id: 'capture',
    number: '01',
    name: 'Capture',
    tagline: 'Get verified golfers.',
    body: 'Not panel data. Not Meta inferences. Not "people who liked a golf page." GolfN users hand us GPS-confirmed rounds, a home course, a handicap, and their bag setup before they ever see a brand. That\u2019s the raw material \u2014 first-party, verified golfers \u2014 and it\u2019s the thing nobody else in golf media actually has.',
    keyLine: 'Every user is a confirmed golfer, not a probable one.',
    Icon: Target,
  },
  {
    id: 'engage',
    number: '02',
    name: 'Engage',
    tagline: 'Make it a daily habit.',
    body: '75 logins per user per month. 2.5 times a day. 15\u00d7 more frequent than the typical golf app. We don\u2019t get this from features golfers tolerate \u2014 we get it from features golfers anticipate. Press Your Luck spins, sweepstakes cards, points balances that tick up after every round, marketplace browsing between trips to the course.',
    keyLine: 'The app is a daily habit, not a seasonal tool.',
    Icon: Activity,
  },
  {
    id: 'activate',
    number: '03',
    name: 'Activate',
    tagline: 'Give brands a home.',
    body: 'Sweepstakes cards. Press Your Luck spin wheel. Marketplace listings. Featured banners. Push notifications. In-app messages. Six distinct surfaces a brand can show up on, each one tied to a behavior we already know the user does daily. Brands don\u2019t need to teach golfers a new habit \u2014 they plug into the habits we built.',
    keyLine: 'Every brand surface sits inside an existing golfer behavior.',
    Icon: Zap,
  },
  {
    id: 'measure',
    number: '04',
    name: 'Measure',
    tagline: 'Make the next loop sharper.',
    body: 'Click an iron in the marketplace, we know. Enter a wedge sweep but ignore the driver one, we know. Buy a Hyperice unit two weeks after the campaign closed, we know. The data isn\u2019t a report at the end \u2014 it\u2019s the feedstock that makes the next campaign better. Every interaction trains the system to spend the next dollar smarter.',
    keyLine: 'The loop closes and starts over smarter every time.',
    Icon: LineChart,
  },
]

export function SystemLoop() {
  const [activeId, setActiveId] = useState<string>('capture')
  const active = nuggets.find((n) => n.id === activeId)!

  return (
    <section className="py-24 md:py-32" id="system">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-4"
        >
          The System
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight mb-4 max-w-4xl"
        >
          The whole machine,
          <br />
          <span className="text-gradient">in four moves.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base md:text-lg text-[#9ca3af] mb-14 max-w-3xl leading-7"
        >
          GolfN is a closed loop that turns golfer behavior into brand outcomes &mdash; and every loop generates the data that makes the next one sharper. Tap any move to see what it actually does.
        </motion.p>

        {/* Nodes Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 relative z-10">
          {nuggets.map((n) => {
            const isActive = n.id === activeId
            const Icon = n.Icon
            return (
              <motion.button
                key={n.id}
                onClick={() => setActiveId(n.id)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`group relative text-left rounded-2xl p-6 md:p-7 min-h-[200px] md:min-h-[220px] transition-all duration-300 overflow-hidden ${
                  isActive
                    ? 'bg-[#001a14]/80 border-2 border-[#00ff9d] shadow-[0_0_40px_rgba(0,255,157,0.15)]'
                    : 'bg-[#1a1f2e] border-2 border-[#2a3347] hover:border-[#3a4561] hover:bg-[#1f2434]'
                }`}
              >
                {/* Ghost number behind */}
                <p
                  className={`absolute top-3 right-4 text-6xl md:text-7xl font-mono font-bold leading-none tracking-tighter pointer-events-none select-none transition-colors duration-300 ${
                    isActive ? 'text-[#00ff9d]/15' : 'text-white/[0.04]'
                  }`}
                >
                  {n.number}
                </p>

                {/* Icon */}
                <Icon
                  className={`w-7 h-7 md:w-8 md:h-8 mb-5 relative z-10 transition-colors duration-300 ${
                    isActive ? 'text-[#00ff9d]' : 'text-[#6b7280] group-hover:text-[#9ca3af]'
                  }`}
                />

                {/* Name */}
                <p
                  className={`text-2xl md:text-3xl font-bold mb-1.5 relative z-10 transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-white/90'
                  }`}
                >
                  {n.name}
                </p>

                {/* Tagline */}
                <p
                  className={`text-sm md:text-base relative z-10 leading-snug transition-colors duration-300 ${
                    isActive ? 'text-[#9ca3af]' : 'text-[#6b7280]'
                  }`}
                >
                  {n.tagline}
                </p>

                {/* Active indicator pulse dot */}
                {isActive && (
                  <motion.div
                    layoutId="active-pulse"
                    className="absolute bottom-5 left-7 w-2 h-2 rounded-full bg-[#00ff9d]"
                    animate={{ boxShadow: ['0 0 4px #00ff9d', '0 0 12px #00ff9d', '0 0 4px #00ff9d'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>

        {/* Loop-back arc — desktop only */}
        <div className="hidden md:block relative -mt-1 mb-2">
          <svg viewBox="0 0 1000 70" className="w-full h-[70px]" preserveAspectRatio="none">
            <defs>
              <marker
                id="arrow-loop-back"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#00ff9d" opacity="0.7" />
              </marker>
            </defs>
            <path
              d="M 920 5 Q 920 60, 500 60 Q 80 60, 80 5"
              fill="none"
              stroke="#00ff9d"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              opacity="0.5"
              markerEnd="url(#arrow-loop-back)"
            />
            <text
              x="500"
              y="56"
              textAnchor="middle"
              fill="#6b7280"
              fontSize="10"
              fontFamily="ui-monospace, monospace"
              letterSpacing="0.18em"
            >
              EACH LOOP SHARPENS THE NEXT
            </text>
          </svg>
        </div>

        {/* Mobile loop indicator */}
        <p className="md:hidden text-center text-[10px] font-mono text-[#6b7280] tracking-[0.18em] mt-4 mb-2">
          &uarr; LOOPS BACK \u00b7 EACH PASS SHARPENS THE NEXT
        </p>

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="mt-10 md:mt-12 bg-[#0a0d12] border border-[#2a3347]/70 rounded-3xl p-7 md:p-12"
          >
            <div className="grid md:grid-cols-12 gap-8">
              {/* Left column */}
              <div className="md:col-span-3">
                <p className="text-xs md:text-sm font-mono text-[#00ff9d] uppercase tracking-[0.2em] mb-2">Move {active.number}</p>
                <p className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">{active.name}</p>
                <p className="text-base text-[#9ca3af] leading-relaxed">{active.tagline}</p>
              </div>
              {/* Right column */}
              <div className="md:col-span-9">
                <p className="text-base md:text-lg text-[#d1d5db] leading-[1.75] mb-7">{active.body}</p>
                <div className="border-l-2 border-[#00ff9d] pl-5 py-1">
                  <p className="text-lg md:text-xl font-semibold text-white leading-snug">{active.keyLine}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Closing rhetorical kicker */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 md:mt-24 max-w-4xl mx-auto text-center"
        >
          <p className="text-xl md:text-2xl text-[#9ca3af] leading-relaxed mb-3">
            Capture without Engage is a database.<br className="hidden md:inline" /> Engage without Activate is a game.<br className="hidden md:inline" /> Activate without Measure is a campaign.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
            All four together is <span className="text-gradient">a flywheel.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
