'use client'

import { Globe } from 'lucide-react'
import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'

export function MarketReach({ partner }: { partner: PartnerData }) {
  const markets = partner.marketReach
  if (!markets || markets.length === 0) return null

  const total = markets.reduce((s, m) => s + m.users, 0)
  const maxUsers = Math.max(...markets.map(m => m.users))

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-5 h-5 text-[#00ff9d]" />
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">Market Reach</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight mb-5">
            Verified golfers in<br /><span className="text-gradient">your key markets</span>
          </h2>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-8 mb-14">
            GolfN has verified, active golfers across the markets that matter most to {partner.agencyName || partner.partnerName}'s portfolio. These are all-time unique users -- real golfers with known behavior, location, and equipment data.
          </p>
        </Fade>

        <Fade delay={0.06}>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="px-6 md:px-8 py-5 border-b border-[#2a3347] bg-[#0f1217] flex items-center justify-between">
              <h3 className="text-lg md:text-xl font-bold text-white">All-Time Unique Users by Market</h3>
              <div className="text-right">
                <span className="text-sm font-mono text-[#6b7280] uppercase tracking-wider">Total</span>
                <span className="block text-2xl md:text-3xl font-mono font-bold text-[#00ff9d]">{total.toLocaleString()}</span>
              </div>
            </div>

            {/* Bars */}
            <div className="px-6 md:px-8 py-6 space-y-5">
              {markets.map((m, i) => {
                const pct = (m.users / maxUsers) * 100
                return (
                  <Fade key={m.country} delay={0.08 + i * 0.04}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          {m.flag && <span className="text-xl">{m.flag}</span>}
                          <span className="text-base md:text-lg font-semibold text-white">{m.country}</span>
                        </div>
                        <span className="text-lg md:text-xl font-mono font-bold text-[#00ff9d]">{m.users.toLocaleString()}</span>
                      </div>
                      <div className="w-full h-3 rounded-full bg-[#0f1217] overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${pct}%`,
                            background: i === 0
                              ? 'linear-gradient(90deg, #00ff9d, #17A455)'
                              : `linear-gradient(90deg, rgba(0,255,157,${0.6 - i * 0.08}), rgba(23,164,85,${0.6 - i * 0.08}))`,
                          }}
                        />
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs font-mono text-[#6b7280]">{((m.users / total) * 100).toFixed(1)}% of total</span>
                      </div>
                    </div>
                  </Fade>
                )
              })}
            </div>

            {/* Footer total */}
            <div className="px-6 md:px-8 py-5 border-t border-[#2a3347] bg-[#0f1217]">
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-white">Total ({markets.length} markets)</span>
                <span className="text-2xl font-mono font-bold text-[#00ff9d]">{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </Fade>

        {/* Callout */}
        <Fade delay={0.3}>
          <div className="mt-6 bg-[#001a14]/60 border border-[#00ff9d]/30 rounded-xl p-6">
            <p className="text-base md:text-lg text-[#d1d5db] leading-8">
              These are <span className="text-white font-semibold">verified golfers</span> -- not estimated audiences or lookalikes. GolfN knows their handicap, equipment, play frequency, walk-vs-ride preference, and geographic location. Every impression delivered to these markets reaches a confirmed golfer.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  )
}
