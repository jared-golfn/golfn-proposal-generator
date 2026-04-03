'use client'

import { useRef, useState } from 'react'
import { Play, TrendingUp, DollarSign, Package, Clock, ExternalLink, Volume2, VolumeX } from 'lucide-react'
import { Fade } from './Fade'

const VIDEO_MP4 = 'https://cdn.sanity.io/files/e3wja34v/production/bf78e2998073f2b7ccdc798d8f68a5cb8d601ae1.mp4'
const YOUTUBE_FULL = 'https://www.youtube.com/watch?v=e8YaanzP9oQ'

const metrics = [
  { label: 'Total Revenue', value: '$44,692', sub: 'Aug 2025 -- Dec 2025', Icon: DollarSign },
  { label: 'Units Sold', value: '90', sub: '~$497 avg order', Icon: Package },
  { label: 'Time to #1', value: '90 days', sub: '#1 channel in Indiana', Icon: Clock },
  { label: 'Monthly Recurring', value: '$3,500+', sub: 'Sustained post-campaign', Icon: TrendingUp },
]

export function CaseStudy() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  function toggleMute() {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setIsMuted(v.muted)
  }

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-4">
            <Play className="w-5 h-5 text-[#00ff9d]" />
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">Case Study</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight mb-5">
            GolfN became L.A.B. Golf{"'"}s<br /><span className="text-gradient">#1 Indiana channel in 90 days</span>
          </h2>

          {/* Before/After one-liner */}
          <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl px-6 py-4 mb-8 max-w-3xl">
            <p className="text-lg md:text-xl text-[#d1d5db] leading-8">
              L.A.B. Golf already had Indiana sales channels. GolfN launched in August 2025 and <span className="text-[#00ff9d] font-semibold">outperformed every one of them through the end of the year</span>. No additional ad spend. No discount. Full price premium putters.
            </p>
          </div>

          <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-8 mb-10">
            GolfN produced a brand film, launched a sweepstakes campaign, and activated the resulting cohort through commerce. From August through December 2025: $44,692 in attributed revenue, 90 units at ~$497 average order, and sustained $3,500+/month recurring after the campaign ended.
          </p>
        </Fade>

        <Fade delay={0.06}>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
            <div className="relative bg-black">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <video
                  ref={videoRef}
                  src={VIDEO_MP4}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  controls
                  controlsList="nodownload"
                  className="absolute inset-0 w-full h-full object-contain"
                />
                {/* Mute/unmute overlay button */}
                <button
                  onClick={toggleMute}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors"
                >
                  {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-[#00ff9d]" />}
                </button>
              </div>
            </div>

            <div className="px-6 md:px-8 py-3 border-t border-[#2a3347] flex items-center justify-between">
              <span className="text-sm text-[#6b7280]">60 second cut -- {isMuted ? 'tap to unmute' : 'playing with sound'}</span>
              <a href={YOUTUBE_FULL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#00ff9d] hover:underline transition-colors">
                Watch the full version (5:31) <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#2a3347] border-t border-[#2a3347]">
              {metrics.map((m) => (
                <div key={m.label} className="px-5 md:px-6 py-5 md:py-6 text-center">
                  <m.Icon className="w-5 h-5 text-[#00ff9d] mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d]">{m.value}</p>
                  <p className="text-sm text-white font-semibold mt-1">{m.label}</p>
                  <p className="text-xs text-[#6b7280] mt-0.5">{m.sub}</p>
                </div>
              ))}
            </div>

            <div className="px-6 md:px-8 py-6 border-t border-[#2a3347] bg-[#0f1217]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-2">The Activation</h4>
                  <p className="text-sm text-[#d1d5db] leading-6">Full production brand film shot on location. Sweepstakes campaign distributed across the entire GolfN ecosystem. 30-day post-campaign cohort activation with targeted commerce.</p>
                </div>
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-2">The Result</h4>
                  <p className="text-sm text-[#d1d5db] leading-6">$20K revenue month within 90 days of launch. 90 premium putters moved at full price (~$497 avg). GolfN outperformed every existing L.A.B. Golf sales channel in Indiana from August through December 2025.</p>
                </div>
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-2">The Takeaway</h4>
                  <p className="text-sm text-[#d1d5db] leading-6">The campaign ended. The commerce did not. Sustained $3,500+/month in ongoing revenue through the cohort -- proving GolfN builds permanent commerce channels, not one-time spikes.</p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}
