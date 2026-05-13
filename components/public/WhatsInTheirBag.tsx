'use client'

import { motion } from 'framer-motion'

interface CourseType {
  name: string
  share: number
  color: string
  sub: string
}

// Course types — public and uncategorized municipal combined per Jared.
// More distinct color palette so each wedge is clearly differentiated.
const courseTypes: CourseType[] = [
  { name: 'Public',       share: 67.7, color: '#00ff9d', sub: 'Daily-fee, municipal, and uncategorized public access' },
  { name: 'Semi-Private', share: 15.1, color: '#4ade80', sub: 'Public access with member tiers' },
  { name: 'Private',      share: 12.7, color: '#06b6d4', sub: 'Country clubs and member-only courses' },
  { name: 'Resort',       share: 3.9,  color: '#fbbf24', sub: 'Destination and resort courses' },
  { name: 'Military',     share: 0.7,  color: '#94a3b8', sub: 'Military base courses' },
]

interface BrandStat {
  brand: string
  share: number
}

interface Category {
  name: string
  brands: BrandStat[]
}

// Top 5 brands per category. Verified Amplitude pull May 13, 2026.
const clubs: Category[] = [
  { name: 'Driver',  brands: [
    { brand: 'TaylorMade', share: 32.8 },
    { brand: 'Callaway',   share: 24.1 },
    { brand: 'Ping',       share: 11.5 },
    { brand: 'Cobra',      share: 10.4 },
    { brand: 'Titleist',   share: 9.6 },
  ]},
  { name: 'Fairway', brands: [
    { brand: 'TaylorMade', share: 32.2 },
    { brand: 'Callaway',   share: 25.0 },
    { brand: 'Cobra',      share: 12.5 },
    { brand: 'Ping',       share: 7.7 },
    { brand: 'Titleist',   share: 7.2 },
  ]},
  { name: 'Hybrid', brands: [
    { brand: 'TaylorMade', share: 26.9 },
    { brand: 'Callaway',   share: 23.2 },
    { brand: 'Ping',       share: 13.6 },
    { brand: 'Cobra',      share: 11.3 },
    { brand: 'Titleist',   share: 7.9 },
  ]},
  { name: 'Iron', brands: [
    { brand: 'Callaway',     share: 31.8 },
    { brand: 'Mizuno',       share: 15.9 },
    { brand: 'Cobra',        share: 8.7 },
    { brand: 'Takomo',       share: 8.5 },
    { brand: 'Wilson Staff', share: 7.2 },
  ]},
  { name: 'Wedge', brands: [
    { brand: 'Callaway',    share: 24.9 },
    { brand: 'Cleveland',   share: 22.1 },
    { brand: 'TaylorMade',  share: 17.2 },
    { brand: 'Mizuno',      share: 6.3 },
    { brand: 'Cobra',       share: 5.1 },
  ]},
  { name: 'Putter', brands: [
    { brand: 'Odyssey',        share: 17.7 },
    { brand: 'Scotty Cameron', share: 17.1 },
    { brand: 'Bettinardi',     share: 12.7 },
    { brand: 'L.A.B. Golf',    share: 8.2 },
    { brand: 'Cleveland',      share: 8.1 },
  ]},
]

const gear: Category[] = [
  { name: 'Ball', brands: [
    { brand: 'Titleist',   share: 28.7 },
    { brand: 'Callaway',   share: 25.6 },
    { brand: 'TaylorMade', share: 18.8 },
    { brand: 'Srixon',     share: 7.8 },
    { brand: 'Vice',       share: 5.1 },
  ]},
  { name: 'Glove', brands: [
    { brand: 'Callaway',   share: 29.1 },
    { brand: 'FootJoy',    share: 21.6 },
    { brand: 'TaylorMade', share: 12.1 },
    { brand: 'Titleist',   share: 11.0 },
    { brand: 'Kirkland',   share: 5.5 },
  ]},
  { name: 'Shoes', brands: [
    { brand: 'FootJoy',  share: 21.4 },
    { brand: 'Adidas',   share: 20.3 },
    { brand: 'Nike',     share: 18.7 },
    { brand: 'Callaway', share: 8.3 },
    { brand: 'Puma',     share: 6.5 },
  ]},
  { name: 'Apparel', brands: [
    { brand: 'Callaway',     share: 18.9 },
    { brand: 'Nike',         share: 14.0 },
    { brand: 'Adidas',       share: 11.0 },
    { brand: 'Under Armour', share: 7.4 },
    { brand: 'Peter Millar', share: 5.7 },
  ]},
  { name: 'Bag', brands: [
    { brand: 'Callaway',     share: 22.7 },
    { brand: 'TaylorMade',   share: 16.6 },
    { brand: 'Titleist',     share: 12.1 },
    { brand: 'Ping',         share: 7.1 },
    { brand: 'Sun Mountain', share: 6.4 },
  ]},
  { name: 'Rangefinder', brands: [
    { brand: 'Bushnell',  share: 29.6 },
    { brand: 'Callaway',  share: 17.9 },
    { brand: 'Blue Tees', share: 12.7 },
    { brand: 'Garmin',    share: 10.0 },
    { brand: 'Arccos',    share: 6.0 },
  ]},
]

// ---- DONUT ----
// Each wedge is rendered as its own <path> with an arc command. No
// strokeDasharray gymnastics, no rotation transforms — just clean geometry.
function DonutChart({ data, size = 280 }: { data: CourseType[]; size?: number }) {
  const strokeWidth = Math.round(size / 5.5)
  const radius = (size - strokeWidth) / 2
  const center = size / 2

  // angle measured in degrees; 0° = top of circle (12 o'clock), increases clockwise
  function polarToCartesian(angle: number) {
    const rad = ((angle - 90) * Math.PI) / 180
    return {
      x: center + radius * Math.cos(rad),
      y: center + radius * Math.sin(rad),
    }
  }

  function arcPath(startAngle: number, endAngle: number) {
    const start = polarToCartesian(startAngle)
    const end = polarToCartesian(endAngle)
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`
  }

  let cumulativeAngle = 0
  const wedges = data.map((segment) => {
    const startAngle = cumulativeAngle
    const endAngle = cumulativeAngle + (segment.share / 100) * 360
    cumulativeAngle = endAngle
    return { ...segment, startAngle, endAngle }
  })

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block max-w-full h-auto">
      {/* Background track */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="#1a1f2e"
        strokeWidth={strokeWidth}
      />

      {/* Wedges */}
      {wedges.map((w, i) => (
        <motion.path
          key={w.name}
          d={arcPath(w.startAngle, w.endAngle)}
          fill="none"
          stroke={w.color}
          strokeWidth={strokeWidth}
          strokeLinecap="butt"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.12, duration: 0.5, ease: 'easeOut' }}
        />
      ))}

      {/* Center label */}
      <text
        x={center}
        y={center - 6}
        textAnchor="middle"
        fill="#00ff9d"
        fontSize={size * 0.13}
        fontWeight="bold"
        fontFamily="ui-monospace, monospace"
      >
        100%
      </text>
      <text
        x={center}
        y={center + 22}
        textAnchor="middle"
        fill="#6b7280"
        fontSize={size * 0.045}
        letterSpacing="0.15em"
        fontFamily="ui-monospace, monospace"
      >
        GPS-VERIFIED
      </text>
    </svg>
  )
}

// ---- EQUIPMENT ROW ----
function EquipmentRow({ category, index }: { category: Category; index: number }) {
  const topFive = category.brands.reduce((sum, b) => sum + b.share, 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-5"
    >
      {/* Header */}
      <div className="flex items-baseline justify-between mb-3 gap-3">
        <p className="text-xs md:text-sm font-mono text-white uppercase tracking-[0.18em] font-bold">{category.name}</p>
        <p className="text-[10px] md:text-xs font-mono text-[#6b7280] shrink-0">Top 5 = {topFive.toFixed(0)}%</p>
      </div>

      {/* Stacked bar */}
      <div className="flex h-2.5 rounded-full overflow-hidden bg-[#0a0d12] mb-4">
        {category.brands.map((b, i) => (
          <motion.div
            key={b.brand}
            initial={{ width: 0 }}
            whileInView={{ width: `${b.share}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.04 + i * 0.05, duration: 0.7, ease: 'easeOut' }}
            className="h-full"
            style={{
              backgroundColor: '#00ff9d',
              opacity: 1 - i * 0.18,
            }}
          />
        ))}
      </div>

      {/* Brand readout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-2">
        {category.brands.map((b, i) => (
          <div key={b.brand}>
            <p className={`text-xs leading-tight truncate ${i === 0 ? 'text-white font-semibold' : 'text-[#9ca3af]'}`}>{b.brand}</p>
            <p className="text-sm font-mono leading-none mt-0.5" style={{ color: i === 0 ? '#00ff9d' : '#6b7280' }}>{b.share}%</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// ---- SECTION ----
export function WhatsInTheirBag() {
  return (
    <section className="py-24 md:py-32" id="who-youre-reaching">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-4">Audience Intelligence</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight mb-4 max-w-4xl">
          We know <span className="text-gradient">where they play.</span><br />And <span className="text-gradient">what&rsquo;s in their bag.</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-base md:text-lg text-[#9ca3af] mb-12 max-w-3xl leading-7">
          Every GolfN user logs verified rounds and self-reports their full equipment profile in the app. First-party data on the courses they play and the brands they carry. Not inferred. Not panel.
        </motion.p>

        {/* WHERE THEY PLAY — Hero Donut */}
        <div className="bg-[#0a0d12] border border-[#2a3347]/70 rounded-3xl p-6 md:p-10 mb-14">
          <p className="text-xs md:text-sm font-mono text-[#6b7280] uppercase tracking-[0.2em] mb-2">Where They Play</p>
          <p className="text-xl md:text-2xl font-bold text-white mb-8 leading-snug">Verified rounds by course type.</p>

          <div className="grid lg:grid-cols-5 gap-8 md:gap-10 items-center">
            {/* Donut */}
            <div className="lg:col-span-2 flex justify-center">
              <DonutChart data={courseTypes} size={300} />
            </div>

            {/* Legend */}
            <div className="lg:col-span-3 space-y-1">
              {courseTypes.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-4 py-3 border-b border-[#2a3347]/40 last:border-0"
                >
                  <div className="w-3.5 h-3.5 rounded-sm shrink-0" style={{ backgroundColor: c.color }} />
                  <div className="flex-1 min-w-0">
                    <p className="text-base md:text-lg font-bold text-white leading-tight">{c.name}</p>
                    <p className="text-xs text-[#6b7280] leading-tight mt-0.5">{c.sub}</p>
                  </div>
                  <p className="text-2xl md:text-3xl font-mono font-bold tabular-nums shrink-0" style={{ color: c.color }}>{c.share}%</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9 }} className="text-sm md:text-base text-[#9ca3af] mt-8 max-w-3xl leading-7">
            <span className="text-white font-semibold">Public and municipal courses dominate.</span> Two out of three verified rounds happen at daily-fee public access courses. The exact audience Meta charges premium CPMs to guess at.
          </motion.p>
        </div>

        {/* HOOK */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="bg-[#001a14]/60 border border-[#00ff9d]/30 rounded-2xl px-7 py-6 mb-10 max-w-3xl">
          <p className="text-lg md:text-xl font-bold text-white leading-relaxed">
            One brand appears in the top two of every single category we track.
          </p>
          <p className="text-sm text-[#9ca3af] mt-2 leading-6">We&rsquo;ll tell you which one on the call. And show you exactly where your brand sits.</p>
        </motion.div>

        {/* WHAT THEY SWING */}
        <p className="text-xs md:text-sm font-mono text-[#6b7280] uppercase tracking-[0.2em] mb-5">What They Swing</p>
        <div className="grid md:grid-cols-2 gap-3 mb-12">
          {clubs.map((c, i) => <EquipmentRow key={c.name} category={c} index={i} />)}
        </div>

        {/* WHAT THEY WEAR AND CARRY */}
        <p className="text-xs md:text-sm font-mono text-[#6b7280] uppercase tracking-[0.2em] mb-5">What They Wear and Carry</p>
        <div className="grid md:grid-cols-2 gap-3">
          {gear.map((c, i) => <EquipmentRow key={c.name} category={c} index={i} />)}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-xs md:text-sm text-[#6b7280] mt-10 max-w-4xl leading-6">
          Course types pulled from GPS-confirmed rounds against our internal course database. Equipment profiles self-reported inside the GolfN app, verified against active play. Brand share reflects our user base only, not endorsements or paid partnerships. The kind of first-party audience intelligence Meta, Google, and Golf Digest don&rsquo;t have because they don&rsquo;t ask the question.
        </motion.p>
      </div>
    </section>
  )
}
