'use client'

import { LAB_MODES } from './modes'
import { LabStage } from './LabStage'

type Props = {
  modeId: string
  onModeChange: (id: string) => void
  intensity: number
  onIntensityChange: (v: number) => void
  scope: number
  onScopeChange: (v: number) => void
  modeIds?: string[]
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
  const modes = modeIds ? LAB_MODES.filter((m) => modeIds.includes(m.id)) : LAB_MODES

  const statusColor =
    mode.status === 'Live'
      ? 'text-[#8DC54A] border-[#8DC54A]/40 bg-[#8DC54A]/10'
      : mode.status === 'Eng confirm'
        ? 'text-amber-300 border-amber-400/40 bg-amber-400/10'
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
      <div className="px-4 md:px-6 pt-5 pb-3">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8DC54A]">
            {mode.spineStage}
          </span>
          <span
            className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${statusColor}`}
          >
            {mode.status}
          </span>
          {mode.showPayPerResult && (
            <span className="text-[10px] font-mono text-[#9ca3af] border border-[#2a3347] rounded-full px-2 py-0.5">
              Pay per verified result
            </span>
          )}
        </div>
        <p className="text-sm md:text-base text-[#9ca3af] max-w-3xl leading-relaxed">{mode.caption}</p>
      </div>

      {/* Map stage */}
      <div className="px-4 md:px-6 pb-4">
        <LabStage mode={mode} intensity={intensity} scope={scope} />
        <p className="mt-2 text-[11px] font-mono text-[#4b5563]">
          Drag the dials — golfers light up, raise hands, and move toward your pin. Map is schematic, not
          production GPS.
        </p>
      </div>

      {/* Controls */}
      <div className="px-4 md:px-6 pb-5 space-y-5">
        <label className="block">
          <div className="flex justify-between text-xs font-mono text-[#9ca3af] mb-2">
            <span>{mode.dialLabel}</span>
            <span className="text-[#8DC54A] tabular-nums">{intensity}</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={intensity}
            onChange={(e) => onIntensityChange(Number(e.target.value))}
            className="w-full h-2.5 rounded-full appearance-none cursor-pointer bg-[#1a1f2e] accent-[#8DC54A]"
            aria-label={mode.dialLabel}
          />
          <div className="flex justify-between text-[10px] font-mono text-[#4b5563] mt-1.5">
            <span>Weaker carrot → fewer people</span>
            <span>Stronger carrot → more respond</span>
          </div>
        </label>

        {mode.scopeLabel && (
          <label className="block">
            <div className="flex justify-between text-xs font-mono text-[#9ca3af] mb-2">
              <span>{mode.scopeLabel}</span>
              <span className="text-[#8DC54A] tabular-nums">{scope}</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={scope}
              onChange={(e) => onScopeChange(Number(e.target.value))}
              className="w-full h-2.5 rounded-full appearance-none cursor-pointer bg-[#1a1f2e] accent-[#17A455]"
              aria-label={mode.scopeLabel}
            />
            <div className="flex justify-between text-[10px] font-mono text-[#4b5563] mt-1.5">
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
            Results panel
          </span>
          <span className="text-[10px] font-mono text-[#4b5563]">Illustrative</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {mode.results.map((r) => (
            <div key={r.id} className="rounded-xl border border-[#2a3347] bg-[#12161e] px-3 py-3">
              <div className="text-lg md:text-xl font-mono font-semibold text-white tracking-tight tabular-nums">
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
