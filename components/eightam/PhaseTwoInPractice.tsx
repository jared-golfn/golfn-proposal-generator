'use client'

import { motion } from 'framer-motion'
import {
  Flag,
  Star,
  ClipboardList,
  Briefcase,
  Target,
  Crosshair,
  Store,
  Wrench,
  Calendar,
  Sparkles,
  Trophy,
  GraduationCap,
  Users,
} from 'lucide-react'

interface Surface {
  icon: typeof Flag
  name: string
  desc: string
}

const onCourseSurfaces: Surface[] = [
  { icon: Flag, name: 'GPS-verified rounds', desc: 'Every round logged with coordinates, course, score' },
  { icon: Star, name: 'Course ratings & reviews', desc: 'Earn for rating layout, conditions, value' },
  { icon: ClipboardList, name: 'Scorecard completion', desc: 'Points credited at round end based on engagement' },
  { icon: Briefcase, name: 'Bag updates', desc: 'Clubs, balls, gloves, gear — every item adds to the profile' },
]

const offCourseSurfaces: Surface[] = [
  { icon: Crosshair, name: 'Driving ranges', desc: 'Check-in points at any range, anywhere, year-round' },
  { icon: Target, name: 'Indoor simulators', desc: 'Topgolf, X-Golf, sim bays — the winter golf engine' },
  { icon: Store, name: 'Pro shop & retail', desc: 'Golf Galaxy, PGA Tour Superstore, local shops' },
  { icon: Wrench, name: 'Club fitting appointments', desc: 'Visit a fitter, earn points, log the new bag setup' },
]

interface InAppLoop {
  icon: typeof Calendar
  name: string
  headline: string
  body: string
  live: boolean
}

const inAppLoops: InAppLoop[] = [
  {
    icon: Calendar,
    name: 'Daily Grind',
    headline: 'The daily check-in habit',
    body: 'Quests, streaks, and progress bars that reset every 24 hours. The reason a golfer opens the app on a Tuesday in February.',
    live: true,
  },
  {
    icon: Sparkles,
    name: 'Press Your Luck',
    headline: 'The daily reward moment',
    body: 'Free daily spin. Prize wheel with real tickets, points, and brand drops. One tap, instant payoff.',
    live: true,
  },
  {
    icon: Trophy,
    name: 'Sweepstakes',
    headline: 'The entry surface',
    body: 'Branded sweep cards. Spend tickets to enter. Win real prizes from real brands. The campaign engine.',
    live: true,
  },
  {
    icon: GraduationCap,
    name: 'Learn & Earn',
    headline: 'Quest-based instruction',
    body: 'Year-round skill-building quests with point payouts. Improve your game, earn while you do it.',
    live: false,
  },
  {
    icon: Users,
    name: 'Social Feed',
    headline: 'The lurk surface',
    body: "What other GolfN users are doing. Scores, reviews, brand activity. Engagement that doesn't require user action.",
    live: true,
  },
]

function SurfaceRow({ icon: Icon, name, desc, index }: Surface & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="flex items-start gap-4 py-3 border-b border-[#2a3347]/40 last:border-0"
    >
      <div className="w-9 h-9 rounded-lg bg-[#00ff9d]/10 border border-[#00ff9d]/20 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-[#00ff9d]" strokeWidth={2.2} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-base md:text-lg font-bold text-white leading-tight">{name}</p>
        <p className="text-xs md:text-sm text-[#9ca3af] mt-0.5 leading-snug">{desc}</p>
      </div>
    </motion.div>
  )
}

export function PhaseTwoInPractice() {
  return (
    <section className="py-16 md:py-24 border-t border-[#2a3347]/40" id="in-practice">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 md:mb-28 max-w-5xl"
        >
          <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-6">In Practice</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            The system, <span className="text-gradient">on a screen.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-8">
            Phase 1 described the loop. Here&rsquo;s what it looks like running inside the app — across the real world and inside the product.
          </p>
        </motion.div>

        {/* MOVE 1 — TWO REAL-WORLD PATHS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#6b7280] mb-4">Where they earn</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight max-w-4xl mb-4">
            Two paths. Both real-world. Both year-round.
          </h3>
          <p className="text-base md:text-lg text-[#9ca3af] max-w-3xl leading-7">
            Golfers earn in the same places golf happens — on the course in summer, at golf businesses in winter. Earning never goes seasonal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-7 md:p-9 relative overflow-hidden">
            <div aria-hidden className="absolute top-4 right-6 text-7xl md:text-8xl font-bold font-mono text-[#00ff9d]/[0.06] leading-none select-none pointer-events-none">A</div>
            <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-3 relative z-10">Path A · On the Course</p>
            <h4 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-3 relative z-10">When they&rsquo;re playing.</h4>
            <p className="text-sm md:text-base text-[#9ca3af] leading-7 mb-6 relative z-10">The verified-golfer surfaces. GPS-traced, course-stamped, scorecard-confirmed.</p>
            <div className="relative z-10">
              {onCourseSurfaces.map((s, i) => <SurfaceRow key={s.name} {...s} index={i} />)}
            </div>
          </div>

          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-7 md:p-9 relative overflow-hidden">
            <div aria-hidden className="absolute top-4 right-6 text-7xl md:text-8xl font-bold font-mono text-[#00ff9d]/[0.06] leading-none select-none pointer-events-none">B</div>
            <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-3 relative z-10">Path B · At Golf Businesses</p>
            <h4 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-3 relative z-10">When they&rsquo;re not.</h4>
            <p className="text-sm md:text-base text-[#9ca3af] leading-7 mb-6 relative z-10">The year-round surfaces. Indoor sims in January. Range visits in fog. Retail check-ins in any weather.</p>
            <div className="relative z-10">
              {offCourseSurfaces.map((s, i) => <SurfaceRow key={s.name} {...s} index={i} />)}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-l-4 border-[#00ff9d] pl-6 max-w-4xl mb-20 md:mb-28"
        >
          <p className="text-lg md:text-xl text-[#d1d5db] leading-relaxed">
            Combined, this is the year-round real-world surface. <span className="text-white font-semibold">No other golf app rewards check-ins at all of these places.</span>
          </p>
        </motion.div>

        {/* MOVE 2 — IN-APP LOOPS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#6b7280] mb-4">Why they come back</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight max-w-4xl mb-4">
            Five reasons to open the app, <span className="text-gradient">every day.</span>
          </h3>
          <p className="text-base md:text-lg text-[#9ca3af] max-w-3xl leading-7">
            Real-world earning is the foundation. These surfaces are what make GolfN an app a golfer opens 2.5 times a day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 md:mb-28">
          {inAppLoops.map((loop, i) => {
            const Icon = loop.icon
            return (
              <motion.div
                key={loop.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-7 md:p-8 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#00ff9d]/10 border border-[#00ff9d]/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#00ff9d]" strokeWidth={2.2} />
                  </div>
                  <span className={`text-[10px] font-mono tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border ${loop.live ? 'bg-[#00ff9d]/10 border-[#00ff9d]/30 text-[#00ff9d]' : 'bg-[#2a3347]/40 border-[#3a4357] text-[#9ca3af]'}`}>
                    {loop.live ? 'Live' : 'Coming Soon'}
                  </span>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight mb-1">{loop.name}</p>
                <p className="text-sm md:text-base font-semibold text-[#00ff9d] mb-3">{loop.headline}</p>
                <p className="text-sm text-[#9ca3af] leading-7">{loop.body}</p>
              </motion.div>
            )
          })}
        </div>

        {/* MOVE 3 — THE MATH */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-[#001a14] to-[#002a1f] border border-[#00ff9d]/30 rounded-3xl p-8 md:p-14 mb-20 md:mb-28 relative overflow-hidden"
        >
          <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-4 relative z-10">The Math</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-10 max-w-4xl relative z-10">
            Two paths. Five loops. <span className="text-gradient">75 logins a month.</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6 md:gap-10 mb-8 relative z-10">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <p className="text-7xl md:text-8xl lg:text-9xl font-bold font-mono text-[#00ff9d] leading-none tabular-nums mb-2">75</p>
              <p className="text-sm md:text-base text-white font-semibold leading-tight">Logins per user, per month</p>
              <p className="text-xs md:text-sm text-[#9ca3af] mt-1">Cohort average across the active GolfN base</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <p className="text-7xl md:text-8xl lg:text-9xl font-bold font-mono text-[#00ff9d] leading-none tabular-nums mb-2">2.5×</p>
              <p className="text-sm md:text-base text-white font-semibold leading-tight">Sessions per day</p>
              <p className="text-xs md:text-sm text-[#9ca3af] mt-1">Morning check-in, mid-day spin, evening sweep</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <p className="text-7xl md:text-8xl lg:text-9xl font-bold font-mono text-[#00ff9d] leading-none tabular-nums mb-2">15×</p>
              <p className="text-sm md:text-base text-white font-semibold leading-tight">The golf-app industry average</p>
              <p className="text-xs md:text-sm text-[#9ca3af] mt-1">Typical golf apps see 3 to 5 logins/month</p>
            </motion.div>
          </div>

          <p className="text-base md:text-lg text-[#d1d5db] leading-relaxed max-w-4xl relative z-10">
            When earning runs everywhere golf happens, and the app itself becomes a daily habit, this is the result. <span className="text-white font-semibold">The most engaged audience in golf media — by an order of magnitude.</span>
          </p>
        </motion.div>

        {/* MOVE 4 — GOOGLE MEETS AMAZON */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#6b7280] mb-4">The Category</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight max-w-5xl mb-6">
            Awareness AND point of sale. <span className="text-gradient">Same platform.</span>
          </h3>
          <p className="text-base md:text-lg text-[#9ca3af] max-w-3xl leading-7">
            Every other golf ad ends at &ldquo;go buy it somewhere else.&rdquo; GolfN starts at awareness and ends at the receipt — same login, same audience, same checkout.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-6 md:p-8">
            <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#6b7280] mb-4">Google · Meta</p>
            <p className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight mb-4">Owns Discovery</p>
            <p className="text-sm md:text-base text-[#9ca3af] leading-7 mb-5">Surfaces the ad. Hands the user off to a different site to buy. Attribution dies at the click.</p>
            <p className="text-sm font-mono text-[#6b7280]">✗ Doesn&rsquo;t own purchase</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08, duration: 0.5 }} className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-6 md:p-8">
            <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#6b7280] mb-4">Amazon</p>
            <p className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight mb-4">Owns Purchase</p>
            <p className="text-sm md:text-base text-[#9ca3af] leading-7 mb-5">Closes the sale. Owns the transaction. But doesn&rsquo;t own discovery or the audience relationship.</p>
            <p className="text-sm font-mono text-[#6b7280]">✗ Doesn&rsquo;t own discovery</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16, duration: 0.5 }} className="bg-gradient-to-br from-[#001a14] to-[#002a1f] border border-[#00ff9d]/40 rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div aria-hidden className="absolute -top-4 -right-4 text-9xl font-bold font-mono text-[#00ff9d]/[0.05] leading-none select-none pointer-events-none">★</div>
            <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-4 relative z-10">GolfN</p>
            <p className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight mb-4 relative z-10">Owns Both</p>
            <p className="text-sm md:text-base text-[#d1d5db] leading-7 mb-5 relative z-10">Awareness AND purchase in one platform. Same login. Same audience. Same data. End-to-end attribution because the journey is end-to-end.</p>
            <p className="text-sm font-mono text-[#00ff9d] relative z-10">✓ Full stack</p>
          </motion.div>
        </div>

        {/* PUNCHLINE */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border-l-4 border-[#00ff9d] pl-6 md:pl-10 max-w-4xl mb-20 md:mb-28">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2] tracking-tight text-white mb-3">
            There is no other golf platform doing this.
          </p>
          <p className="text-lg md:text-xl text-[#d1d5db] leading-relaxed">
            Awareness to receipt, same platform, same login, same audience. <span className="text-white font-semibold">Google meets Amazon, built only for golf.</span>
          </p>
        </motion.div>

        {/* BRIDGE TO PHASE 3 */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-3 text-[#6b7280]">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#2a3347]/60" />
          <p className="text-xs md:text-sm font-mono tracking-[0.18em] uppercase">Phase 3 — A brand plugs in →</p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#2a3347]/60" />
        </motion.div>

      </div>
    </section>
  )
}
