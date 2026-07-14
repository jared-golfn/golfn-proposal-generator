'use client'

import { useState, useEffect } from 'react'
import { IncentiveLab } from './IncentiveLab'
import { SPINE_STAGES, LAB_MODES, getMode } from './modes'
import { images } from '@/lib/images'

const CALENDLY = 'https://calendly.com/golfn'

const STORY = [
  {
    id: 'open',
    act: '0',
    title: 'Not a golf app that sells ads.',
    body: 'A verified play-and-earn OS. You fund the carrot. Golfers raise hands, act, and convert — with proof.',
    modeId: null as string | null,
  },
  {
    id: 'capture',
    act: '2',
    title: 'Get a hand up — with real intent.',
    body: 'Better prize → more hands. Entry marks interested + favorites your product. Ticket depth scores intent.',
    modeId: 'sweep',
  },
  {
    id: 'daily',
    act: '3',
    title: 'Own the daily moment.',
    body: 'Press Your Luck: fund spins, earn via video/quiz, favorites, wins hit the feed and pull the network to your listing. Or Learn & Earn — bounty must be worth the work.',
    modeId: 'pyl',
  },
  {
    id: 'cohort',
    act: '4',
    title: 'Turn hands into a cohort.',
    body: 'Favorites, intent, bag signals — a segment you can work. Not a dead CSV.',
    modeId: 'cohort',
  },
  {
    id: 'activate',
    act: '5',
    title: 'Activate in the wild. Pay for truth.',
    body: 'Geo show-ups, weather at felt need, off-peak tee times. Same dial. Results-only when you want it.',
    modeId: 'geo',
  },
  {
    id: 'offer',
    act: '6',
    title: 'We facilitate the follow-up.',
    body: 'Offers to people who already raised a hand. Unlisted paths only they can see.',
    modeId: 'offer',
  },
  {
    id: 'convert',
    act: '7',
    title: 'Close the loop.',
    body: 'Points earned activating for you unlock a contained % on your SKU. Activation and conversion — same humans.',
    modeId: 'contained',
  },
]

export function EcosystemPage() {
  const [modeId, setModeId] = useState('sweep')
  const [intensity, setIntensity] = useState(55)
  const [scope, setScope] = useState(45)
  const [activeAct, setActiveAct] = useState('2')

  const mode = getMode(modeId)

  // Keep spine highlight in sync with mode
  useEffect(() => {
    const m = LAB_MODES.find((x) => x.id === modeId)
    if (m) setActiveAct(String(m.act))
  }, [modeId])

  function selectStory(modeIdNext: string | null, act: string) {
    setActiveAct(act)
    if (modeIdNext) {
      setModeId(modeIdNext)
      setIntensity(55)
      setScope(45)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0d12] text-white">
      <div className="accent-line fixed top-0 left-0 right-0 z-50" />

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-[#2a3347]/80 bg-[#0a0d12]/85 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-14 md:h-16 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3 min-w-0">
            <img src={images.logo} alt="GolfN" className="h-6 md:h-7 w-auto" />
            <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-[0.2em] text-[#6b7280] border-l border-[#2a3347] pl-3">
              Ecosystem OS
            </span>
          </a>
          <div className="flex items-center gap-3 md:gap-5">
            <a href="/" className="text-xs md:text-sm text-[#9ca3af] hover:text-white transition-colors">
              Partners home
            </a>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-mono font-semibold uppercase tracking-wide px-4 py-2 rounded-full bg-gradient-to-r from-[#8DC54A] to-[#17A455] text-[#041208] hover:brightness-110 transition-all"
            >
              Book 20 min
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 pt-14 md:pt-20 pb-10 md:pb-14">
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8DC54A] mb-4">
          For brand partners · Interactive
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl">
          Raise the carrot.{' '}
          <span className="text-gradient">Watch density move.</span>
        </h1>
        <p className="mt-6 text-base md:text-xl text-[#9ca3af] max-w-2xl leading-relaxed">
          One abstract machine. Every activation is a skin on the same law: higher incentive → denser
          verified response. Drag the dial. Read the panel. That&apos;s the OS.
        </p>
        <p className="mt-3 text-sm font-mono text-[#4b5563]">
          Metrics are illustrative · same shell stands up over time
        </p>
      </section>

      {/* Spine */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-10">
        <div className="flex flex-wrap gap-2">
          {SPINE_STAGES.map((s) => {
            const on = mode.spineStage === s
            return (
              <div
                key={s}
                className={`text-[11px] md:text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full border transition-colors ${
                  on
                    ? 'border-[#8DC54A]/50 bg-[#8DC54A]/15 text-[#8DC54A]'
                    : 'border-[#2a3347] text-[#6b7280]'
                }`}
              >
                {s}
              </div>
            )
          })}
        </div>
      </section>

      {/* Lab — primary interactive */}
      <section id="lab" className="max-w-6xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <IncentiveLab
          modeId={modeId}
          onModeChange={setModeId}
          intensity={intensity}
          onIntensityChange={setIntensity}
          scope={scope}
          onScopeChange={setScope}
        />
        <p className="mt-4 text-center text-xs font-mono text-[#4b5563]">
          Law: higher carrot → denser response · lower still works — thinner
        </p>
      </section>

      {/* Story beats — jump Lab to mode */}
      <section className="border-t border-[#2a3347] bg-[#0d1118]">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">The partner journey</h2>
          <p className="text-[#9ca3af] mb-10 max-w-xl text-sm md:text-base">
            Scroll the story. Each beat loads a mode in the Lab above — same graphics, new config.
          </p>
          <div className="space-y-4">
            {STORY.map((beat) => {
              const active = beat.modeId === modeId || (beat.modeId === null && activeAct === beat.act)
              return (
                <button
                  key={beat.id}
                  type="button"
                  onClick={() => selectStory(beat.modeId, beat.act)}
                  className={`w-full text-left rounded-2xl border p-5 md:p-6 transition-all ${
                    active
                      ? 'border-[#8DC54A]/40 bg-[#8DC54A]/5'
                      : 'border-[#2a3347] bg-[#12161e] hover:border-[#3a4558]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-[#8DC54A] shrink-0 pt-1">
                      {beat.act === '0' ? '00' : beat.act.padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-1.5">
                        {beat.title}
                      </h3>
                      <p className="text-sm md:text-base text-[#9ca3af] leading-relaxed">{beat.body}</p>
                      {beat.modeId && (
                        <span className="inline-block mt-3 text-[10px] font-mono uppercase tracking-wider text-[#6b7280]">
                          → Lab mode: {LAB_MODES.find((m) => m.id === beat.modeId)?.label}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick law + loop */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              t: 'Capture',
              d: 'Sweeps, PYL, L&E — hands up, favorites, intent.',
            },
            {
              t: 'Activate',
              d: 'Geo, weather, course — fund the carrot, pay for proof.',
            },
            {
              t: 'Convert',
              d: 'Contained % when points hit your SKU. Loop closed.',
            },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-[#2a3347] bg-[#12161e] p-6">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#8DC54A] mb-2">{c.t}</div>
              <p className="text-[#9ca3af] text-sm leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#2a3347]">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Fund a loop, not a banner.
          </h2>
          <p className="text-[#9ca3af] max-w-lg mx-auto mb-8">
            Walk this system on a live brief — sweep, wheel, market, weather, convert.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-mono text-sm font-semibold uppercase tracking-wide px-6 py-3.5 rounded-full bg-gradient-to-r from-[#8DC54A] to-[#17A455] text-[#041208] hover:brightness-110 transition-all"
            >
              Book 20 min with Jared
            </a>
            <a
              href="/template"
              className="inline-flex items-center font-mono text-sm px-6 py-3.5 rounded-full border border-[#2a3347] text-[#9ca3af] hover:border-[#8DC54A]/40 hover:text-white transition-all"
            >
              Named cases
            </a>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-4 md:px-8 py-10 text-center border-t border-[#2a3347]/50">
        <img src={images.logo} alt="GolfN" className="h-7 w-auto mx-auto mb-3 opacity-30" />
        <p className="text-[#4b5563] text-sm">GolfN, Inc. · partners.golfn.com/ecosystem</p>
      </footer>
    </div>
  )
}
