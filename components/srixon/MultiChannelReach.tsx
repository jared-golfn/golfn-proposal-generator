'use client'

import { motion } from 'framer-motion'

interface ChannelRow { channel: string; type: string; posts: string; impressions: string; notes: string; isTotal?: boolean }

const channelData: ChannelRow[] = [
  { channel: 'Meta (Paid Ads)', type: 'Paid', posts: '11', impressions: '2,728,287', notes: 'Source: Meta Ads Manager export' },
  { channel: 'Meta (Organic)', type: 'Organic', posts: '10', impressions: '25,711', notes: 'Jul 30 marketplace reveal = 17,965 views' },
  { channel: 'X / Twitter', type: 'Organic', posts: '24', impressions: '29,647', notes: '4.17% engagement rate' },
  { channel: 'LinkedIn', type: 'Organic', posts: '2', impressions: '727', notes: 'Marketplace announcements' },
  { channel: 'YouTube', type: 'Organic', posts: '1', impressions: '182', notes: 'Points Exchange feature video' },
  { channel: 'Totals (known)', type: '', posts: '', impressions: '2,784,554', notes: 'Excludes Discord and TikTok', isTotal: true },
]

interface MediaValueRow { channel: string; volume: string; rate: string; value: string; isTotal?: boolean }

const mediaValueData: MediaValueRow[] = [
  { channel: 'Meta paid ads (Srixon-branded)', volume: '2,728,287 impressions', rate: '$15 CPM', value: '$40,924' },
  { channel: 'Meta organic posts', volume: '25,711 impressions', rate: '$10 CPM', value: '$257' },
  { channel: 'X / Twitter organic', volume: '29,647 impressions', rate: '$8 CPM', value: '$237' },
  { channel: 'LinkedIn organic', volume: '727 impressions', rate: '$8 CPM', value: '$6' },
  { channel: 'YouTube organic', volume: '182 impressions', rate: '$15 CPM', value: '$3' },
  { channel: 'Braze push notifications', volume: '9,805 delivered', rate: '$15 per 1K', value: '$147' },
  { channel: 'Combined media value', volume: '', rate: '', value: '$41,574', isTotal: true },
]

export function MultiChannelReach() {
  return (
    <section className="py-20 md:py-32 border-t border-[#2a3347]/40 scroll-mt-8" id="channels">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-end justify-between gap-4 mb-8 md:mb-10 pb-4 border-b border-[#2a3347]/40">
          <div>
            <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-2">Part 2 &middot; Multi-Channel Reach</p>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight">Where Srixon &amp; Cleveland showed up.</h3>
          </div>
          <div className="flex items-baseline gap-2 shrink-0">
            <p className="text-3xl md:text-5xl font-mono font-bold text-[#00ff9d] leading-none tabular-nums">2.78M</p>
            <p className="text-xs md:text-sm font-mono text-[#9ca3af] uppercase tracking-[0.18em] pb-0.5">Impressions</p>
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base md:text-lg text-[#9ca3af] leading-8 max-w-4xl mb-12">
          Srixon/Cleveland brand impressions were tracked across paid and organic channels from the original marketplace launch (August 2025) through April 2026. At conservative floor pricing, these touchpoints represent{' '}
          <span className="text-white font-semibold">$41,574 in media value</span> delivered directly to the Srixon/Cleveland brand &mdash; funded entirely by GolfN.
        </motion.p>

        <p className="text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-3">Channel Summary</p>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-[#2a3347] overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="bg-[#1a1f2e] border-b border-[#2a3347]">
                <th className="text-left px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Channel</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Type</th>
                <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Posts</th>
                <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Impressions</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Notes</th>
              </tr></thead>
              <tbody>
                {channelData.map((row, i) => (
                  <tr key={i} className={`border-b border-[#2a3347]/50 ${row.isTotal ? 'bg-[#00ff9d]/5' : i % 2 === 0 ? 'bg-[#0f1217]' : 'bg-[#131720]'}`}>
                    <td className={`px-4 py-3 ${row.isTotal ? 'font-bold text-white' : 'text-[#d1d5db] font-medium'}`}>{row.channel}</td>
                    <td className="px-4 py-3">{row.type && <span className={`inline-flex px-2 py-0.5 rounded text-xs font-semibold ${row.type === 'Paid' ? 'bg-blue-500/15 text-blue-400' : 'bg-[#2a3347] text-[#9ca3af]'}`}>{row.type}</span>}</td>
                    <td className="px-4 py-3 text-right font-mono tabular-nums text-white">{row.posts}</td>
                    <td className={`px-4 py-3 text-right font-mono tabular-nums ${row.isTotal ? 'font-bold text-white' : 'text-white font-semibold'}`}>{row.impressions}</td>
                    <td className="px-4 py-3 text-[#6b7280] text-xs">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <p className="text-xs font-mono uppercase tracking-wider text-[#9ca3af] mb-3">Estimated Media Value Delivered (Conservative)</p>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-[#2a3347] overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="bg-[#1a1f2e] border-b border-[#2a3347]">
                <th className="text-left px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Channel</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Volume</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Equivalent Rate</th>
                <th className="text-right px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#9ca3af]">Value Delivered</th>
              </tr></thead>
              <tbody>
                {mediaValueData.map((row, i) => (
                  <tr key={i} className={`border-b border-[#2a3347]/50 ${row.isTotal ? 'bg-[#00ff9d]/5' : i % 2 === 0 ? 'bg-[#0f1217]' : 'bg-[#131720]'}`}>
                    <td className={`px-4 py-3 ${row.isTotal ? 'font-bold text-white' : 'text-[#d1d5db] font-medium'}`}>{row.channel}</td>
                    <td className="px-4 py-3 text-[#9ca3af] text-xs">{row.volume}</td>
                    <td className="px-4 py-3 text-[#9ca3af] text-xs">{row.rate}</td>
                    <td className={`px-4 py-3 text-right font-mono tabular-nums font-bold ${row.isTotal ? 'text-[#00ff9d]' : 'text-white'}`}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        <p className="text-xs text-[#6b7280] mb-10">Conservative estimate using the low end of golf-adjacent media rates. Actual market value at mid-range CPMs ($25&ndash;35) would be $68K&ndash;$96K.</p>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#0a0d12] border border-[#2a3347] rounded-3xl p-8 md:p-12 text-center">
          <p className="text-3xl md:text-5xl font-bold mb-3"><span className="text-[#00ff9d]">$41,574</span>{' '}<span className="text-white">in media value delivered</span></p>
          <p className="text-base md:text-lg text-[#9ca3af] mb-2">at conservative floor rates &mdash; driven by <span className="text-[#00ff9d] font-semibold">2.73M paid impressions</span> GolfN funded featuring Srixon branding</p>
          <p className="text-sm text-[#6b7280]">Actual market value at mid-range CPMs ($25&ndash;35) would be $68K&ndash;$96K</p>
        </motion.div>
      </div>
    </section>
  )
}
