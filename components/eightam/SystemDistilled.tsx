'use client'

import { motion } from 'framer-motion'

interface LoopNugget {
  number: string
  title: string
  headline: string
  body: string
  nugget: string
}

const loopNuggets: LoopNugget[] = [
  {
    number: '02',
    title: 'Verify',
    headline: "We know they're real golfers.",
    body: "Not Meta inferences. Not panel data. Not 'people who liked a golf page.' GolfN users hand us GPS-confirmed rounds, a home course, a handicap, and their bag setup before they ever see a brand.",
    nugget: 'Every user is a confirmed golfer, not a probable one.',
  },
  {
    number: '03',
    title: 'Engage',
    headline: 'We turn golf into a daily habit.',
    body: '75 logins per user per month. 2.5 sessions a day. 15× more frequent than the typical golf app. Driven by features golfers anticipate — Press Your Luck spins, point balances ticking up after rounds, sweepstakes, marketplace browsing.',
    nugget: 'The app is a daily habit, not a seasonal tool.',
  },
  {
    number: '04',
    title: 'Activate',
    headline: 'Brands plug into existing behavior.',
    body: "Six surfaces: sweepstakes cards, Press Your Luck spin wheel, marketplace listings, featured banners, push notifications, in-app messages. Each one sits inside a habit we already built. A brand doesn't teach golfers a new motion — they slot into the motions GolfN runs every day.",
    nugget: 'Every brand surface lives inside an existing golfer behavior.',
  },
  {
    number: '05',
    title: 'Measure',
    headline: 'Every interaction makes the system smarter.',
    body: "Click an iron, we know. Enter a wedge sweep but skip the driver one, we know. Buy a recovery unit two weeks after the campaign closed, we know. The data isn't a deliverable at the end — it's the feedstock for the next campaign.",
    nugget: 'The loop closes and starts over sharper every time.',
  },
]

export function SystemDistilled() {
  return (
    <section className="py-16 md:py-24" id="system">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* CATEGORY THESIS — massive display headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28 max-w-5xl"
        >
          <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#6b7280] mb-6">The Category</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            GolfN is the <span className="text-gradient">first rewards-native</span> golf platform.
          </h2>
        </motion.div>

        {/* HOOK — oversized standalone card with its own accent treatment */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 md:mb-28"
        >
          <div className="bg-gradient-to-br from-[#001a14] to-[#002a1f] border border-[#00ff9d]/30 rounded-3xl p-8 md:p-14 relative overflow-hidden">
            {/* faint background number */}
            <div
              aria-hidden
              className="absolute -top-8 -right-4 md:-right-8 text-[200px] md:text-[300px] font-bold font-mono text-[#00ff9d]/[0.04] leading-none select-none pointer-events-none"
            >
              01
            </div>

            <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-4 relative z-10">
              01 · The Hook
            </p>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6 relative z-10">
              Get rewarded for golf.
            </h3>
            <p className="text-lg md:text-xl text-[#d1d5db] leading-8 mb-6 max-w-3xl relative z-10">
              Existing golf apps charge users for GPS, scoring, and stats. GolfN flipped the model: give golfers the tools for free, then reward them for playing. Points stack up after every round. Sweepstakes and prize drops sit one tap away. The marketplace turns rounds into real gear.
            </p>
            <div className="border-l-2 border-[#00ff9d] pl-6 max-w-3xl relative z-10">
              <p className="text-base md:text-lg text-white font-semibold leading-relaxed">
                <span className="text-[#00ff9d] font-mono text-xs tracking-wide uppercase mr-2">The nugget —</span>
                golfers pay other apps. GolfN pays them.
              </p>
            </div>
          </div>
        </motion.div>

        {/* THE LOOP intro */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#6b7280] mb-4">The Operating Loop</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight max-w-4xl">
            Underneath the hook, <span className="text-gradient">a closed loop</span> runs every day.
          </h3>
        </motion.div>

        {/* 4 LOOP NUGGETS — 2x2 grid on md+, single column on mobile */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {loopNuggets.map((n, i) => (
            <motion.div
              key={n.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-7 md:p-9 relative overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute top-4 right-6 text-7xl md:text-8xl font-bold font-mono text-[#00ff9d]/[0.06] leading-none select-none pointer-events-none"
              >
                {n.number}
              </div>

              <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-3 relative z-10">
                {n.number} · {n.title}
              </p>
              <h4 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-4 relative z-10">
                {n.headline}
              </h4>
              <p className="text-sm md:text-base text-[#9ca3af] leading-7 mb-5 relative z-10">
                {n.body}
              </p>
              <div className="border-l-2 border-[#00ff9d] pl-4 relative z-10">
                <p className="text-sm md:text-base text-white font-medium leading-relaxed">
                  <span className="text-[#00ff9d] font-mono text-xs tracking-wide uppercase mr-2">The nugget —</span>
                  {n.nugget}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Loop indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-2 mb-20 md:mb-28 justify-center text-[#6b7280]"
        >
          <span className="text-xs md:text-sm font-mono tracking-[0.18em] uppercase">↻ &nbsp;The loop closes and starts over</span>
        </motion.div>

        {/* MOAT — closing pullquote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#6b7280] mb-6">The Moat</p>
          <div className="border-l-4 border-[#00ff9d] pl-6 md:pl-10 max-w-4xl">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-white mb-5">
              The loop is the moat.
            </p>
            <p className="text-lg md:text-xl text-[#d1d5db] leading-relaxed">
              Each turn makes the next one cheaper, smarter, and more profitable. Not because the pieces are secret — because <span className="text-white font-semibold">nobody else trained golfers to expect rewards this way.</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
