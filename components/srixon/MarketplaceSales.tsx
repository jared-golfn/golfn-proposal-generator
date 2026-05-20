'use client'

import { motion } from 'framer-motion'

interface MetricCard { value: string; label: string }
const topMetrics: MetricCard[] = [
  { value: '$66,979', label: 'Combined total sales' },
  { value: '372', label: 'Net items sold' },
  { value: '$47,994', label: 'Srixon total sales' },
  { value: '$18,985', label: 'Cleveland total sales' },
]

interface BrandRow { brand: string; items: string; gross: string; discounts: string; returns: string; net: string; total: string; isTotal?: boolean }
const brandData: BrandRow[] = [
  { brand: 'Srixon', items: '259', gross: '$48,298', discounts: '-$250', returns: '-$935', net: '$47,113', total: '$47,994' },
  { brand: 'Cleveland', items: '113', gross: '$20,582', discounts: '-$543', returns: '-$1,337', net: '$18,702', total: '$18,985' },
  { brand: 'Combined', items: '372', gross: '$68,880', discounts: '-$793', returns: '-$2,272', net: '$65,815', total: '$66,979', isTotal: true },
]

interface TopProduct { rank: number; brand: string; product: string; sales: string }
const topProducts: TopProduct[] = [
  { rank: 1, brand: 'Srixon', product: 'ZXi7 Irons w/ Steel Shafts', sales: '$9,100' },
  { rank: 2, brand: 'Srixon', product: "ZXi4 Women\u2019s Irons w/ Graphite", sales: '$4,200' },
  { rank: 3, brand: 'Srixon', product: 'ZXi5 Irons w/ Steel Shafts', sales: '$3,900' },
  { rank: 4, brand: 'Cleveland', product: 'RTZ Wedge w/ Steel (Tour Rack 46\u00b0)', sales: '$3,560' },
  { rank: 5, brand: 'Srixon', product: 'Z-STAR DIAMOND 2025 Golf Balls (69 units)', sales: '$3,349' },
  { rank: 6, brand: 'Srixon', product: 'ZXi4 Irons w/ Graphite Shafts', sales: '$2,800' },
  { rank: 7, brand: 'Srixon', product: 'Z-Star 2025 Golf Balls (56 units)', sales: '$2,757' },
  { rank: 8, brand: 'Srixon', product: 'ZXi4 Irons w/ Steel Shafts', sales: '$2,600' },
  { rank: 9, brand: 'Srixon', product: 'ZXi Hybrid 17\u00b0 Stiff (7 units)', sales: '$1,960' },
  { rank: 10, brand: 'Srixon', product: 'Z-STAR XV 2025 Golf Balls (40 units)', sales: '$1,900' },
]

export function MarketplaceSales() {
  return (
    <section className="py-20 md:py-32 border-t border-[#2a3347]/40 scroll-mt-8" id="sales">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-end justify-between gap-4 mb-8 md:mb-10 pb-4 border-b border-[#2a3347]/40">
          <div>
            <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-2">Part 3 &middot; Points Exchange &amp; Marketplace</p>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight">Verified golfers converting to buyers.</h3>
          </div>
          <div className="flex items-baseline gap-2 shrink-0">
            <p className="text-3xl md:text-5xl font-mono font-bold text-[#00ff9d] leading-none tabular-nums">$67K</p>
            <p className="text-xs md:text-sm font-mono text-[#9ca3af] uppercase tracking-[0.18em] pb-0.5">Revenue</p>
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base md:text-lg text-[#9ca3af] leading-8 max-w-4xl mb-10">
          GolfN&rsquo;s verified golfers converted across the entire Srixon and Cleveland product portfolio &mdash; premium iron sets, golf balls, wedges, hybrids, drivers and fairway woods. Every buyer is a real golfer with tracked round activity and a verified identity. Sales spread across both high-ticket equipment and repeat-purchase consumables, with full first-party attribution from awareness through transaction.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
          {topMetrics.map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.4 }} className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-5 text-center">
              <p className="text-2xl md:text-3xl font-mono font-bold text-white leading-none mb-2 tabular-nums">{m.value}</p>
              <p className="text-xs md:text-sm text-[#d1d5db] font-semibold leading-tight">{m.label}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-3">Brand Breakdown</p>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-[#2a3347] overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="bg-[#1a1f2e] border-b border-[#2a3347]">
                <th className="text-left px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Brand</th>
                <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Net Items</th>
                <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Gross Sales</th>
                <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Discounts</th>
                <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Returns</th>
                <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Net Sales</th>
                <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Total Sales</th>
              </tr></thead>
              <tbody>
                {brandData.map((row, i) => (
                  <tr key={i} className={`border-b border-[#2a3347]/50 ${row.isTotal ? 'bg-[#00ff9d]/5' : i % 2 === 0 ? 'bg-[#0f1217]' : 'bg-[#131720]'}`}>
                    <td className={`px-4 py-3 ${row.isTotal ? 'font-bold text-white' : 'text-[#d1d5db] font-medium'}`}>{row.brand}</td>
                    <td className="px-4 py-3 text-right font-mono tabular-nums text-white font-semibold">{row.items}</td>
                    <td className="px-4 py-3 text-right font-mono tabular-nums text-white">{row.gross}</td>
                    <td className="px-4 py-3 text-right font-mono tabular-nums text-[#6b7280]">{row.discounts}</td>
                    <td className="px-4 py-3 text-right font-mono tabular-nums text-[#6b7280]">{row.returns}</td>
                    <td className="px-4 py-3 text-right font-mono tabular-nums text-white">{row.net}</td>
                    <td className="px-4 py-3 text-right font-mono tabular-nums font-bold text-[#00ff9d]">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <p className="text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-3">Top 10 Products by Total Sales</p>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-[#2a3347] overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="bg-[#1a1f2e] border-b border-[#2a3347]">
                <th className="text-center px-3 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af] w-12">#</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Brand</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Product</th>
                <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Total Sales</th>
              </tr></thead>
              <tbody>
                {topProducts.map((row, i) => (
                  <tr key={i} className={`border-b border-[#2a3347]/50 ${i % 2 === 0 ? 'bg-[#0f1217]' : 'bg-[#131720]'}`}>
                    <td className="px-3 py-3 text-center font-mono text-[#6b7280] text-xs">{row.rank}</td>
                    <td className="px-4 py-3 text-[#9ca3af] text-xs">{row.brand}</td>
                    <td className="px-4 py-3 text-[#d1d5db] font-medium">{row.product}</td>
                    <td className="px-4 py-3 text-right font-mono tabular-nums font-bold text-[#00ff9d]">{row.sales}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#00ff9d]/5 border border-[#00ff9d]/20 rounded-2xl p-6 md:p-8">
          <p className="text-base md:text-lg font-bold text-white mb-3">Consumable repeat-purchase signal from verified golfers</p>
          <p className="text-sm md:text-base text-[#d1d5db] leading-7">
            Srixon golf balls showed strong unit volume across premium lines &mdash; <span className="text-white font-semibold">69 Z-STAR DIAMOND</span>, <span className="text-white font-semibold">56 Z-Star</span>, <span className="text-white font-semibold">40 Z-STAR XV</span>, <span className="text-white font-semibold">13 Q-STAR TOUR</span>, and <span className="text-white font-semibold">11 Q-Star</span> units. Combined with Cleveland&rsquo;s <span className="text-white font-semibold">20-unit RTZ wedge Tour Rack cluster</span>, this demonstrates a healthy mix of high-ticket conversion and repeat consumable purchasing from golfers whose round activity, handicap, and equipment preferences GolfN already knows. That&rsquo;s the kind of closed-loop purchase intelligence no other golf platform can deliver.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
