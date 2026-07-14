export type SpineStage =
  | 'Aware'
  | 'Capture'
  | 'Cohort'
  | 'Activate'
  | 'Offer'
  | 'Convert'
  | 'Sustain'

export type ModeStatus = 'Live' | 'Coming' | 'Eng confirm' | 'Exploratory'

export type ResultMetric = {
  id: string
  label: string
  /** Map dial 0–100 → display value */
  format: (intensity: number, scope: number) => string
}

export type LabMode = {
  id: string
  label: string
  spineStage: SpineStage
  caption: string
  dialLabel: string
  /** If set, show second control */
  scopeLabel?: string
  scopeMinLabel?: string
  scopeMaxLabel?: string
  pinLabel?: string
  dotSemantic: string
  status: ModeStatus
  showFavoritePulse?: boolean
  showFeedBlip?: boolean
  showPayPerResult?: boolean
  results: ResultMetric[]
  /** Story act for scroll nav */
  act: number
}
