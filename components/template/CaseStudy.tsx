'use client'

import { useRef, useState } from 'react'
import { Play, TrendingUp, DollarSign, Package, Clock, ExternalLink, Pause } from 'lucide-react'
import { Fade } from './Fade'

const VIDEO_MP4 = 'https://cdn.sanity.io/files/e3wja34v/production/bf78e2998073f2b7ccdc798d8f68a5cb8d601ae1.mp4'
const YOUTUBE_FULL = 'https://www.youtube.com/watch?v=e8YaanzP9oQ'
const YOUTUBE_THUMB = 'https://img.youtube.com/vi/e8YaanzP9oQ/maxresdefault.jpg'

const metrics = [
  { label: 'Total Revenue', value: '$44,692', sub: '8 months', Icon: DollarSign },
  { label: 'Units Sold', value: '90', sub: '~$497 avg order', Icon: Package },
  { label: 'Time to #1', value: '90 days', sub: '#1 sales channel in Indiana', Icon: Clock },
  { label: 'Monthly Recurring', value: '$3,500+', sub: 'Sustained post-campaign', Icon: TrendingUp },
]

export function CaseStudy() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  function handlePlay() {
    const v = videoRef.current
    if (!v) return
    if (playing) {
      v.pause()
      setPlaying(false)
    } else {
      v.play()
      setPlaying(true)
      setHasStarted(true)
    }
  }

  function handleEnded() {
    setPlaying(false)
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
            From brand film to<br /><span className="text-gradient">#1 sales channel in 90 days</span>
          </h2>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-8 mb-10">
            GolfN produced a world-class brand film experience with L.A.B. Golf, launched a sweepstakes campaign, and activated the resulting cohort through commerce. The result: the #1 sales channel for L.A.B. Golf in Indiana from a standing start.
          </p>
        </Fade>

        <Fade delay={0.06}>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden">
            {/* Native video player */}
            <div className="relative cursor-pointer group" onClick={handlePlay}>
              <video
                ref={videoRef}
                src={VIDEO_MP4}
                poster={YOUTUBE_THUMB}
                onEnded={handleEnded}
                playsInline
                preload="metadata"
                className="w-full aspect-video object-cover"
              />

              {/* Play/pause overlay */}
              {!playing && (
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#00ff9d] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-[#0f1217] ml-1" fill="#0f1217" />
                  </div>
                </div>
              )}

              {/* Title overlay - only before first play */}
              {!hasStarted && (
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                  <p className="text-white font-bold text-lg md:text-xl">GolfN x L.A.B. Golf</p>
                  <p className="text-[#9ca3af] text-sm md:text-base">Brand Film Experience &mdash; 60 second cut</p>
                </div>
              )}

              {/* Pause indicator */}
              {playing && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
                    <Pause className="w-7 h-7 text-white" fill="white" />
                  </div>
                </div>
              )}
            </div>

            {/* Watch full version link */}
            <div className="px-6 md:px-8 py-3 border-t border-[#2a3347] flex items-center justify-between">
              <span className="text-sm text-[#6b7280]">60 second cut</span>
              <a href={YOUTUBE_FULL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#00ff9d] hover:underline transition-colors">
                Watch the full version <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Metrics row */}
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

            {/* Details */}
            <div className="px-6 md:px-8 py-6 border-t border-[#2a3347] bg-[#0f1217]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-2">The Activation</h4>
                  <p className="text-sm text-[#d1d5db] leading-6">Full production brand film shot on location. Sweepstakes campaign distributed across the entire GolfN ecosystem. 30-day post-campaign cohort activation with targeted commerce.</p>
                </div>
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-2">The Result</h4>
                  <p className="text-sm text-[#d1d5db] leading-6">Zero to $20K in a single month. 90 premium putters moved at full price (~$497 avg). GolfN became the #1 sales channel for L.A.B. Golf in Indiana within 90 days of launch.</p>
                </div>
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-[#6b7280] mb-2">The Takeaway</h4>
                  <p className="text-sm text-[#d1d5db] leading-6">The campaign ended. The commerce didn't. Sustained $3,500+/month in ongoing revenue through the cohort -- proving GolfN builds permanent commerce channels, not one-time spikes.</p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}
