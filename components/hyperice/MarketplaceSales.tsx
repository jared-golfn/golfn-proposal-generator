'use client'

import { motion } from 'framer-motion'

interface TopMetric { value: string; label: string }
const topMetrics: TopMetric[] = [
  { value: '$21,188', label: 'Total retail revenue' },
  { value: '52', label: 'Hyperice units sold' },
  { value: '$407', label: 'Average order value' },
  { value: '8', label: 'Distinct SKUs sold' },
]

interface Category { name: string; units: string; rev: string; pct: string }
const categories: Category[] = [
  { name: 'Compression (Normatec)', units: '18', rev: '$13,982', pct: '66.0% of revenue \u00b7 34.6% of units' },
  { name: 'Heat/Vibration (Venom)', units: '16', rev: '$4,344', pct: '20.5% of revenue \u00b7 30.8% of units' },
  { name: 'Massage Guns (Hypervolt)', units: '8', rev: '$1,472', pct: '6.9% of revenue \u00b7 15.4% of units' },
  { name: 'Hypersphere', units: '7', rev: '$763', pct: '3.6% of revenue \u00b7 13.5% of units' },
  { name: 'Vyper', units: '3', rev: '$627', pct: '3.0% of revenue \u00b7 5.8% of units' },
]

interface SkuRow { sku: string; units: string; net: string; taxes: string; total: string; isTotal?: boolean }
const skuData: SkuRow[] = [
  { sku: 'Normatec 3 Leg System', units: '9', net: '$7,791', taxes: '$300', total: '$8,091' },
  { sku: 'Normatec Elite Hips', units: '8', net: '$4,692', taxes: '$100', total: '$4,792' },
  { sku: 'Venom 2 Back', units: '16', net: '$4,214', taxes: '$130', total: '$4,344' },
  { sku: 'Normatec Elite Legs', units: '1', net: '$1,099', taxes: '$0', total: '$1,099' },
  { sku: 'Hypervolt 2', units: '4', net: '$878', taxes: '$38', total: '$916' },
  { sku: 'Hypersphere Go', units: '7', net: '$763', taxes: '$0', total: '$763' },
  { sku: 'Vyper 3', units: '3', net: '$592', taxes: '$35', total: '$627' },
  { sku: 'Hypervolt Go 2', units: '4', net: '$533', taxes: '$23', total: '$556' },
  { sku: 'Total', units: '52', net: '$20,563', taxes: '$626', total: '$21,188', isTotal: true },
]

interface PointsProduct { name: string; points: number }
const pointsData: PointsProduct[] = [
  { name: 'Venom 2 Back', points: 2485560 },
  { name: 'Normatec Elite Hips', points: 1749080 },
  { name: 'Hypervolt 3', points: 388800 },
  { name: 'Hypersphere Go', points: 322640 },
  { name: 'Hypervolt Go 2', points: 119679 },
]

export function MarketplaceSales() {
  const maxPoints = pointsData[0].points
  return (
    <section className="py-20 md:py-32 border-t border-[#2a3347]/40 scroll-mt-8" id="marketplace">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-end justify-between gap-4 mb-8 md:mb-10 pb-4 border-b border-[#2a3347]/40">
          <div>
            <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-2">Marketplace &mdash; Browse &amp; Buy</p>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight">$21K revenue. Zero returns. Zero discounts.</h3>
          </div>
          <div className="flex items-baseline gap-2 shrink-0">
            <p className="text-3xl md:text-5xl font-mono font-bold text-[#00ff9d] leading-none tabular-nums">$407</p>
            <p className="text-xs md:text-sm font-mono text-[#9ca3af] uppercase tracking-[0.18em] pb-0.5">AOV</p>
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base md:text-lg text-[#9ca3af] leading-8 max-w-4xl mb-10">
          Verified golfers purchased across the entire Hyperice portfolio &mdash; premium compression systems, heat/vibration wraps, massage guns, and recovery accessories. Every buyer is a real golfer with tracked round activity. Premium pricing held end-to-end with{' '}
          <span className="text-white font-semibold">$0 in discounts and $0 in returns</span>.
        </motion.p>

        {/* Top metric cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
          {topMetrics.map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.4 }} className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-5 text-center">
              <p className="text-2xl md:text-3xl font-mono font-bold text-white leading-none mb-2 tabular-nums">{m.value}</p>
              <p className="text-xs md:text-sm text-[#d1d5db] font-semibold leading-tight">{m.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Financial summary bar */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-[#0a1628] to-[#0f2a1e] border border-[#2a3347] rounded-2xl p-6 md:p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 text-center">
            <div><p className="text-2xl md:text-3xl font-bold font-mono text-[#00ff9d] tabular-nums">$20,563</p><p className="text-xs text-white/50 uppercase tracking-wider font-semibold mt-1">Net Sales</p></div>
            <div><p className="text-2xl md:text-3xl font-bold font-mono text-[#00ff9d] tabular-nums">$0.00</p><p className="text-xs text-white/50 uppercase tracking-wider font-semibold mt-1">Discounts</p></div>
            <div><p className="text-2xl md:text-3xl font-bold font-mono text-[#00ff9d] tabular-nums">$0.00</p><p className="text-xs text-white/50 uppercase tracking-wider font-semibold mt-1">Returns</p></div>
            <div><p className="text-2xl md:text-3xl font-bold font-mono text-white tabular-nums">$626</p><p className="text-xs text-white/50 uppercase tracking-wider font-semibold mt-1">Taxes Collected</p></div>
          </div>
        </motion.div>

        {/* Category breakdown */}
        <p className="text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-3">Sales by Product Family</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
          {categories.map((c, i) => (
            <motion.div key={c.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-4">
              <p className="text-[10px] font-mono uppercase tracking-wider text-[#6b7280] mb-2">{c.name}</p>
              <p className="text-xl font-bold font-mono text-white tabular-nums leading-none mb-1">{c.units} units</p>
              <p className="text-sm font-bold text-[#00ff9d] mb-2">{c.rev}</p>
              <p className="text-[10px] text-[#6b7280]">{c.pct}</p>
            </motion.div>
          ))}
        </div>

        {/* SKU table */}
        <p className="text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-3">All Hyperice SKUs Sold</p>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-[#2a3347] overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="bg-[#1a1f2e] border-b border-[#2a3347]">
                <th className="text-left px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">SKU</th>
                <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Units</th>
                <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Net Sales</th>
                <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Taxes</th>
                <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Total Sales</th>
              </tr></thead>
              <tbody>
                {skuData.map((row, i) => (
                  <tr key={i} className={`border-b border-[#2a3347]/50 ${row.isTotal ? 'bg-[#00ff9d]/5' : i % 2 === 0 ? 'bg-[#0f1217]' : 'bg-[#131720]'}`}>
                    <td className={`px-4 py-3 ${row.isTotal ? 'font-bold text-white' : 'text-[#d1d5db] font-medium'}`}>Hyperice | {row.sku}</td>
                    <td className="px-4 py-3 text-right font-mono tabular-nums text-white font-semibold">{row.units}</td>
                    <td className="px-4 py-3 text-right font-mono tabular-nums text-white">{row.net}</td>
                    <td className="px-4 py-3 text-right font-mono tabular-nums text-[#6b7280]">{row.taxes}</td>
                    <td className={`px-4 py-3 text-right font-mono tabular-nums font-bold ${row.isTotal ? 'text-[#00ff9d]' : 'text-[#00ff9d]'}`}>{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        <p className="text-xs text-[#6b7280] mb-12">Top 3 SKUs (Normatec 3, Normatec Elite Hips, Venom 2 Back) = 33 of 52 units (63.5%) and $17,227 of revenue (81.3%). Source: Shopify Sales by Product.</p>

        {/* Points redeemed chart */}
        <p className="text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-3">Points Redeemed by Product (Mar 23 &ndash; May 12, 2026)</p>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-3 mb-6">
          {pointsData.map((p) => (
            <div key={p.name} className="flex items-center gap-3">
              <span className="text-xs text-[#d1d5db] w-44 md:w-52 shrink-0 font-medium truncate">Hyperice | {p.name}</span>
              <div className="flex-1 h-5 bg-[#1a1f2e] rounded-md overflow-hidden">
                <div className="h-full bg-[#00ff9d] rounded-md" style={{ width: `${Math.round((p.points / maxPoints) * 100)}%` }} />
              </div>
              <span className="text-xs font-mono text-[#6b7280] w-20 text-right tabular-nums shrink-0">{p.points.toLocaleString()}</span>
            </div>
          ))}
        </motion.div>
        <p className="text-xs text-[#6b7280]">Source: Amplitude purchase events, product_name contains &ldquo;Hyperice&rdquo;, payment.points_amount summed.</p>
      </div>
    </section>
  )
}
