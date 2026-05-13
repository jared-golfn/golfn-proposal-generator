'use client'

import { motion } from 'framer-motion'

interface BrandStat {
  brand: string
  share: string
}

interface Category {
  name: string
  top1: BrandStat
  top2: BrandStat
}

const clubs: Category[] = [
  { name: 'Driver',  top1: { brand: 'TaylorMade', share: '32.8%' }, top2: { brand: 'Callaway',       share: '24.1%' } },
  { name: 'Fairway', top1: { brand: 'TaylorMade', share: '32.2%' }, top2: { brand: 'Callaway',       share: '25.0%' } },
  { name: 'Hybrid',  top1: { brand: 'TaylorMade', share: '26.9%' }, top2: { brand: 'Callaway',       share: '23.2%' } },
  { name: 'Iron',    top1: { brand: 'Callaway',   share: '31.8%' }, top2: { brand: 'Mizuno',         share: '15.9%' } },
  { name: 'Wedge',   top1: { brand: 'Callaway',   share: '24.9%' }, top2: { brand: 'Cleveland',      share: '22.1%' } },
  { name: 'Putter',  top1: { brand: 'Odyssey',    share: '17.7%' }, top2: { brand: 'Scotty Cameron', share: '17.1%' } },
]

const gear: Category[] = [
  { name: 'Ball',        top1: { brand: 'Titleist',  share: '28.7%' }, top2: { brand: 'Callaway',   share: '25.6%' } },
  { name: 'Glove',       top1: { brand: 'Callaway',  share: '29.1%' }, top2: { brand: 'FootJoy',    share: '21.6%' } },
  { name: 'Shoes',       top1: { brand: 'FootJoy',   share: '21.4%' }, top2: { brand: 'Adidas',     share: '20.3%' } },
  { name: 'Apparel',     top1: { brand: 'Callaway',  share: '18.9%' }, top2: { brand: 'Nike',       share: '14.0%' } },
  { name: 'Bag',         top1: { brand: 'Callaway',  share: '22.7%' }, top2: { brand: 'TaylorMade', share: '16.6%' } },
  { name: 'Rangefinder', top1: { brand: 'Bushnell',  share: '29.6%' }, top2: { brand: 'Callaway',   share: '17.9%' } },
]

function CategoryCard({ category, index }: { category: Category; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-5 hover:border-[#2a3347] transition-colors"
    >
      <p className="text-xs font-mono text-[#6b7280] uppercase tracking-[0.18em] mb-4">{category.name}</p>
      <div className="space-y-2.5">
        <div>
          <p className="text-base md:text-lg font-bold text-white leading-tight">{category.top1.brand}</p>
          <p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d] leading-none mt-1">{category.top1.share}</p>
        </div>
        <div className="pt-2 border-t border-[#2a3347]/60">
          <p className="text-sm text-[#9ca3af] leading-tight">{category.top2.brand}</p>
          <p className="text-base font-mono font-semibold text-[#6b7280] leading-none mt-1">{category.top2.share}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function WhatsInTheirBag() {
  return (
    <section className="py-24 md:py-32" id="who-youre-reaching">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-4">Audience Intelligence</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight mb-4 max-w-4xl">
          We know <span className="text-gradient">what&rsquo;s in their bag.</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-base md:text-lg text-[#9ca3af] mb-10 max-w-3xl leading-7">
          Every active GolfN user builds a full equipment profile in the app. By club, by ball, by glove, by shoe, by apparel, by bag, by rangefinder. Real brand share inside our user base. Not inferred. Not panel.
        </motion.p>

        {/* Hook quote box */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="bg-[#001a14]/60 border border-[#00ff9d]/30 rounded-2xl px-7 py-6 mb-14 max-w-3xl">
          <p className="text-lg md:text-xl font-bold text-white leading-relaxed">
            One brand appears in the top two of every single category we track.
          </p>
          <p className="text-sm text-[#9ca3af] mt-2 leading-6">We&rsquo;ll tell you which one on the call. And show you exactly where your brand sits.</p>
        </motion.div>

        {/* What they swing */}
        <p className="text-xs md:text-sm font-mono text-[#6b7280] uppercase tracking-[0.2em] mb-5">What They Swing</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-14">
          {clubs.map((c, i) => (
            <CategoryCard key={c.name} category={c} index={i} />
          ))}
        </div>

        {/* What they wear and carry */}
        <p className="text-xs md:text-sm font-mono text-[#6b7280] uppercase tracking-[0.2em] mb-5">What They Wear and Carry</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {gear.map((c, i) => (
            <CategoryCard key={c.name} category={c} index={i} />
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-xs md:text-sm text-[#6b7280] mt-10 max-w-4xl leading-6">
          Self-reported equipment profiles inside the GolfN app, verified against active play. Brand share reflects our user base, not endorsements or paid partnerships. The kind of first-party audience intelligence Meta, Google, and Golf Digest don&rsquo;t have because they don&rsquo;t ask the question.
        </motion.p>
      </div>
    </section>
  )
}
