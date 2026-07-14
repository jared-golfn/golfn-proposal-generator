'use client'

import { useMemo } from 'react'
import { LAB_MODES } from './modes'

type Props = {
  modeId: string
  onModeChange: (id: string) => void
  intensity: number
  onIntensityChange: (v: number) => void
  scope: number
  onScopeChange: (v: number) => void
  /** Limit mode chips; default all */
  modeIds?: string[]
}

/** Deterministic pseudo-random from seed */
function hash(i: number, s: number) {
  const x = Math.sin(i * 12.9898 + s * 78.233) * 43758.5453
  return x - Math.floor(x)
}

export function IncentiveLab({
  modeId,
  onModeChange,
  intensity,
  onIntensityChange,
  scope,
  onScopeChange,
  modeIds,
}: Props) {
  const mode = LAB_MODES.find((m) => m.id === modeId) ?? LAB_MODES[0]
  const modes = modeIds
    ? LAB_MODES.filter((m) => modeIds.includes(m.id))
    : LAB_MODES

  const dots = useMemo(() => {
    // Base population scales with intensity; scope modulates spread / filter
    const count = Math.round(12 + (intensity / 100) * 70 + (scope / 100) * 15)
    const items: { x: number; y: number; r: number; o: number; fav?: boolean }[] = []
    for (let i = 0; i < count; i++) {
      const a = hash(i, 1) * Math.PI * 2
      // Higher intensity → tighter toward pin (center-right)
      const spread = 0.42 - (intensity / 100) * 0.18 + (scope / 100) * 0.08
      const dist = hash(i, 2) * spread
      const cx = 0.58 + Math.cos(a) * dist * 1.1
      const cy = 0.5 + Math.sin(a) * dist * 0.95
      const x = Math.min(0.92, Math.max(0.08, cx + (hash(i, 3) - 0.5) * 0.08))
      const y = Math.min(0.9, Math.max(0.1, cy + (hash(i, 4) - 0.5) * 0.08))
      items.push({
        x,
        y,
        r: 3 + hash(i, 5) * 3,
        o: 0.35 + hash(i, 6) * 0.55,
        fav: mode.showFavoritePulse && hash(i, 7) > 0.55 - intensity / 300,
      })
    }
    return items
  }, [intensity, scope, mode.showFavoritePulse, mode.id])

  const statusColor =
    mode.status === 'Live'
      ? 'text-[#8DC54A] border-[#8DC54A]/40 bg-[#8DC54A]/10'
      : mode.status === 'Eng confirm'
        ? 'text-amber-300 border-amber-400/40 bg-amber-400/10'
        : mode.status === 'Coming'
          ? 'text-[#9ca3af] border-[#4b5563] bg-white/5'
          : 'text-[#9ca3af] border-[#4b5563] bg-white/5'

  return (
    <div className="rounded-2xl border border-[#2a3347] bg-[#12161e] overflow-hidden shadow-2xl shadow-black/40">
      {/* Mode chips */}
      <div className="flex flex-wrap gap-2 p-4 md:p-5 border-b border-[#2a3347]">
        {modes.map((m) => {
          const on = m.id === mode.id
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => onModeChange(m.id)}
              className={`text-xs md:text-sm font-mono px-3 py-1.5 rounded-full border transition-all ${
                on
                  ? 'border-[#8DC54A]/60 bg-[#8DC54A]/15 text-[#8DC54A]'
                  : 'border-[#2a3347] text-[#9ca3af] hover:border-[#4b5563] hover:text-white'
              }`}
            >
              {m.label}
            </button>
          )
        })}
      </div>

      {/* Context */}
      <div className="px-4 md:px-6 pt-5 pb-3 flex flex-wrap items-center gap-3 justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8DC54A]">
              {mode.spineStage}
            </span>
            <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${statusColor}`}>
              {mode.status}
            </span>
            {mode.showPayPerResult && (
              <span className="text-[10px] font-mono text-[#9ca3af] border border-[#2a3347] rounded-full px-2 py-0.5">
                Pay per result
              </span>
            )}
          </div>
          <p className="text-sm md:text-base text-[#9ca3af] max-w-2xl leading-relaxed">{mode.caption}</p>
        </div>
      </div>

      {/* Abstract stage */}
      <div className="px-4 md:px-6 pb-4">
        <div
          className="relative w-full rounded-xl border border-[#2a3347] bg-[#0a0d12] overflow-hidden"
          style={{ aspectRatio: '16 / 10', minHeight: 240 }}
        >
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'linear-gradient(rgba(141,197,74,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(141,197,74,0.06) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          {/* Soft glow */}
          <div
            className="absolute rounded-full blur-3xl pointer-events-none"
            style={{
              width: '40%',
              height: '50%',
              left: '45%',
              top: '25%',
              background: 'radial-gradient(circle, rgba(141,197,74,0.15), transparent 70%)',
            }}
          />

          {/* Dots */}
          <svg className="absolute inset-0 w-full h-full" aria-hidden>
            {dots.map((d, i) => (
              <g key={i}>
                <circle
                  cx={`${d.x * 100}%`}
                  cy={`${d.y * 100}%`}
                  r={d.r}
                  fill={d.fav ? '#8DC54A' : '#17A455'}
                  opacity={d.o}
                />
                {d.fav && (
                  <circle
                    cx={`${d.x * 100}%`}
                    cy={`${d.y * 100}%`}
                    r={d.r + 3}
                    fill="none"
                    stroke="#8DC54A"
                    strokeWidth="1"
                    opacity={0.35}
                  />
                )}
              </g>
            ))}
          </svg>

          {/* Pin */}
          <div
            className="absolute flex flex-col items-center pointer-events-none"
            style={{ left: '58%', top: '48%', transform: 'translate(-50%, -50%)' }}
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#8DC54A] to-[#17A455] shadow-[0_0_20px_rgba(141,197,74,0.5)] border-2 border-[#041208]" />
            <span className="mt-2 text-[10px] font-mono uppercase tracking-wider text-[#8DC54A] bg-[#0a0d12]/90 px-2 py-0.5 rounded border border-[#2a3347]">
              {mode.pinLabel ?? 'Target'}
            </span>
          </div>

          {/* Feed blip */}
          {mode.showFeedBlip && intensity > 40 && (
            <div className="absolute top-3 right-3 text-[10px] font-mono text-[#8DC54A] border border-[#8DC54A]/30 bg-[#8DC54A]/10 rounded-lg px-2 py-1 animate-pulse">
              Win → feed → network
            </div>
          )}

          <div className="absolute bottom-2 left-3 text-[10px] font-mono text-[#4b5563] uppercase tracking-wider">
            {mode.dotSemantic} · abstract
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="px-4 md:px-6 pb-5 space-y-4">
        <label className="block">
          <div className="flex justify-between text-xs font-mono text-[#9ca3af] mb-2">
            <span>{mode.dialLabel}</span>
            <span className="text-[#8DC54A]">{intensity}</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={intensity}
            onChange={(e) => onIntensityChange(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer bg-[#1a1f2e] accent-[#8DC54A]"
            aria-label={mode.dialLabel}
          />
          <div className="flex justify-between text-[10px] font-mono text-[#4b5563] mt-1">
            <span>Lower carrot</span>
            <span>Higher carrot</span>
          </div>
        </label>

        {mode.scopeLabel && (
          <label className="block">
            <div className="flex justify-between text-xs font-mono text-[#9ca3af] mb-2">
              <span>{mode.scopeLabel}</span>
              <span className="text-[#8DC54A]">{scope}</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={scope}
              onChange={(e) => onScopeChange(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer bg-[#1a1f2e] accent-[#17A455]"
              aria-label={mode.scopeLabel}
            />
            <div className="flex justify-between text-[10px] font-mono text-[#4b5563] mt-1">
              <span>{mode.scopeMinLabel ?? 'Low'}</span>
              <span>{mode.scopeMaxLabel ?? 'High'}</span>
            </div>
          </label>
        )}
      </div>

      {/* Results panel */}
      <div className="border-t border-[#2a3347] bg-[#0d1118] px-4 md:px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#4b5563]">
            Results
          </span>
          <span className="text-[10px] font-mono text-[#4b5563]">Illustrative</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {mode.results.map((r) => (
            <div
              key={r.id}
              className="rounded-xl border border-[#2a3347] bg-[#12161e] px-3 py-3"
            >
              <div className="text-lg md:text-xl font-mono font-semibold text-white tracking-tight">
                {r.format(intensity, scope)}
              </div>
              <div className="text-[11px] text-[#9ca3af] mt-0.5 leading-snug">{r.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
