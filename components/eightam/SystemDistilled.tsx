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
    title: 'Convert',
    headline: 'Awareness AND purchase, same login.',
    body: "Buy a wedge from the marketplace. Redeem points for gear. Spend tickets to enter a sweep. Spin Press Your Luck. Every value-bearing user action happens inside GolfN — not on a redirect to someone else's site.",
    nugget: 'Discovery and transaction live under the same login.',
  },
  {
    number: '06',
    title: 'Measure',
    headline: 'Every interaction makes the loop smarter.',
    body: 'Click an iron, we know. Enter a wedge sweep but skip the driver one, we know. Buy a recovery unit two weeks after the campaign closed, we know. Every action across the loop becomes feedstock for the next one — sharper than the last.',
    nugget: 'The loop closes and starts over sharper every time.',
  },
]

// SVG loop diagram for desktop — 5 nodes with arrows and curved loop-back
function LoopDiagramDesktop() {
  const nodes = [
    { num: '02', title: 'Verify', x: 100 },
    { num: '03', title: 'Engage', x: 300 },
    { num: '04', title: 'Activate', x: 500 },
    { num: '05', title: 'Convert', x: 700 },
    { num: '06', title: 'Measure', x: 900 },
  ]
  const nodeY = 50
  const nodeWidth = 150
  const nodeHeight = 100
  const midY = nodeY + nodeHeight / 2 // 100

  return (
    <svg viewBox="0 0 1000 290" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Connecting arrows between adjacent nodes (4 arrows for 5 nodes) */}
      {[0, 1, 2, 3].map((i) => {
        const fromX = nodes[i].x + nodeWidth / 2
        const toX = nodes[i + 1].x - nodeWidth / 2
        return (
          <motion.g
            key={`arrow-${i}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.12, duration: 0.4 }}
          >
            <line
              x1={fromX + 4}
              y1={midY}
              x2={toX - 12}
              y2={midY}
              stroke="#00ff9d"
              strokeWidth="2"
            />
            <polygon
              points={`${toX - 12},${midY - 5} ${toX - 2},${midY} ${toX - 12},${midY + 5}`}
              fill="#00ff9d"
            />
          </motion.g>
        )
      })}

      {/* Loop-back curve: from bottom of last node (Measure, x=900), down, across, up to bottom of first node (Verify, x=100) */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        <path
          d={`M ${nodes[4].x} ${nodeY + nodeHeight}
              C ${nodes[4].x} 220, ${nodes[4].x - 60} 240, ${nodes[4].x - 100} 240
              L ${nodes[0].x + 100} 240
              C ${nodes[0].x + 60} 240, ${nodes[0].x} 220, ${nodes[0].x} ${nodeY + nodeHeight + 8}`}
          stroke="#00ff9d"
          strokeWidth="2"
          strokeOpacity="0.55"
          fill="none"
          strokeLinecap="round"
        />
        {/* Arrowhead at end pointing up into Verify */}
        <polygon
          points={`${nodes[0].x - 6},${nodeY + nodeHeight + 6} ${nodes[0].x},${nodeY + nodeHeight - 6} ${nodes[0].x + 6},${nodeY + nodeHeight + 6}`}
          fill="#00ff9d"
          fillOpacity="0.55"
        />
        {/* "loop closes" label centered under the curve */}
        <text
          x="500"
          y="265"
          textAnchor="middle"
          fill="#6b7280"
          fontSize="11"
          fontFamily="ui-monospace, monospace"
          letterSpacing="3"
          fontWeight="600"
        >
          ↻  THE LOOP CLOSES, SHARPER EACH TIME
        </text>
      </motion.g>

      {/* Nodes */}
      {nodes.map((n, i) => (
        <motion.g
          key={n.title}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.1, duration: 0.4, ease: 'easeOut' }}
          style={{ transformOrigin: `${n.x}px ${nodeY + nodeHeight / 2}px` }}
        >
          <rect
            x={n.x - nodeWidth / 2}
            y={nodeY}
            width={nodeWidth}
            height={nodeHeight}
            rx="14"
            fill="#1a1f2e"
            stroke="#2a3347"
            strokeWidth="1.5"
          />
          <text
            x={n.x}
            y={nodeY + 38}
            textAnchor="middle"
            fill="#00ff9d"
            fontSize="13"
            fontFamily="ui-monospace, monospace"
            letterSpacing="3"
            fontWeight="700"
          >
            {n.num}
          </text>
          <text
            x={n.x}
            y={nodeY + 72}
            textAnchor="middle"
            fill="white"
            fontSize="22"
            fontWeight="800"
            letterSpacing="-0.5"
          >
            {n.title}
          </text>
        </motion.g>
      ))}
    </svg>
  )
}

// Mobile version — vertical stack of 5 small nodes with down arrows
function LoopDiagramMobile() {
  const nodes = [
    { num: '02', title: 'Verify' },
    { num: '03', title: 'Engage' },
    { num: '04', title: 'Activate' },
    { num: '05', title: 'Convert' },
    { num: '06', title: 'Measure' },
  ]
  return (
    <div className="flex flex-col items-center gap-2 relative pr-12">
      {nodes.map((n, i) => (
        <div key={n.title} className="contents">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
            className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl px-6 py-3 w-48 text-center relative z-10"
          >
            <p className="text-xs font-mono text-[#00ff9d] tracking-[0.18em] mb-0.5">{n.num}</p>
            <p className="text-lg font-bold text-white leading-tight">{n.title}</p>
          </motion.div>
          {i < nodes.length - 1 && (
            <motion.svg
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1 }}
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              className="relative z-10"
            >
              <path d="M7 12L0 0h14L7 12z" fill="#00ff9d" />
            </motion.svg>
          )}
        </div>
      ))}

      {/* Loop-back indicator on the right side */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute right-0 top-6 bottom-6 w-8 border-t-2 border-r-2 border-b-2 border-[#00ff9d]/55 rounded-r-2xl"
        aria-hidden
      />
      <motion.svg
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.05 }}
        width="12"
        height="14"
        viewBox="0 0 12 14"
        fill="none"
        className="absolute right-[18px] top-[14px]"
      >
        <path d="M6 0l6 7H0l6-7z" fill="#00ff9d" fillOpacity="0.55" />
      </motion.svg>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.15 }}
        className="text-[10px] font-mono tracking-[0.18em] uppercase text-[#6b7280] mt-4"
      >
        ↻ The loop closes
      </motion.p>
    </div>
  )
}

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
          className="mb-4 md:mb-6"
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
                Golfers pay other apps. GolfN pays them.
              </p>
            </div>
          </div>
        </motion.div>

        {/* HOOK -> LOOP transition arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-2 mb-10 md:mb-14"
          aria-hidden
        >
          <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-[#6b7280]">Feeds the system below</span>
          <div className="w-px h-12 md:h-16 bg-gradient-to-b from-transparent via-[#00ff9d]/40 to-[#00ff9d]" />
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden>
            <path d="M7 12L0 0h14L7 12z" fill="#00ff9d" />
          </svg>
        </motion.div>

        {/* THE LOOP intro */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#6b7280] mb-4">The Operating Loop</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight max-w-4xl">
            Underneath the hook, <span className="text-gradient">a closed loop</span> runs every day.
          </h3>
        </motion.div>

        {/* LOOP DIAGRAM — SVG on desktop, vertical stack on mobile */}
        <div className="hidden md:block mb-12 md:mb-14">
          <LoopDiagramDesktop />
        </div>
        <div className="md:hidden mb-12 flex justify-center">
          <LoopDiagramMobile />
        </div>

        {/* 5 LOOP NUGGETS — detail cards for each stage */}
        <p className="text-xs md:text-sm font-mono tracking-[0.18em] uppercase text-[#6b7280] mb-6 text-center md:text-left">Each stage, up close</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 md:mb-28">
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
                  {n.nugget}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOAT — closing section with a compounding visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#6b7280] mb-6">The Moat</p>

          {/* Compounding loop icons — each turn gets larger and brighter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end gap-3 md:gap-5 mb-8"
            aria-hidden
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-2xl md:text-3xl text-[#00ff9d]/25 leading-none"
            >
              ↻
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="text-3xl md:text-4xl text-[#00ff9d]/45 leading-none"
            >
              ↻
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-4xl md:text-5xl text-[#00ff9d]/70 leading-none"
            >
              ↻
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="text-5xl md:text-6xl text-[#00ff9d] leading-none"
            >
              ↻
            </motion.span>
            <span className="text-[10px] md:text-xs font-mono tracking-[0.18em] uppercase text-[#6b7280] pb-1 md:pb-2 ml-1 md:ml-2">
              Each turn sharper
            </span>
          </motion.div>

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
