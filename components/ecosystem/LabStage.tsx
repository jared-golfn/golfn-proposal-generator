'use client'

import dynamic from 'next/dynamic'
import type { LabMode } from './types'

const LabStageMap = dynamic(
  () => import('./LabStageMap').then((m) => m.LabStageMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-[min(52vh,480px)] min-h-[320px] w-full rounded-xl border border-[#2a3347] bg-[#0b0f14] flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 mx-auto mb-3 rounded-full border-2 border-[#8DC54A] border-t-transparent animate-spin" />
          <p className="text-xs font-mono text-[#6b7280]">Loading map…</p>
        </div>
      </div>
    ),
  }
)

type Props = {
  mode: LabMode
  intensity: number
  scope: number
}

export function LabStage({ mode, intensity, scope }: Props) {
  return <LabStageMap mode={mode} intensity={intensity} scope={scope} />
}
