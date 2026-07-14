export type SpineStage =
  | 'Aware'
  | 'Capture'
  | 'Cohort'
  | 'Activate'
  | 'Offer'
  | 'Convert'
  | 'Sustain'

export type ModeStatus = 'Live' | 'Coming' | 'Eng confirm' | 'Exploratory'

/** How the shared map stage behaves */
export type StageKind =
  | 'map-event' // pin + radius, people stream to event
  | 'map-weather' // rain regions light up people
  | 'map-course' // local course cluster, hands for tee times
  | 'map-national' // nationwide capture (sweep / L&E / cohort)
  | 'map-pyl' // national + feed network pull
  | 'map-convert' // people with points flow to brand SKU pin

export type ResultMetric = {
  id: string
  label: string
  format: (intensity: number, scope: number) => string
}

export type LabMode = {
  id: string
  label: string
  spineStage: SpineStage
  caption: string
  dialLabel: string
  scopeLabel?: string
  scopeMinLabel?: string
  scopeMaxLabel?: string
  pinLabel?: string
  /** Map pin key: fl | nc | national | course | brand */
  pinKey?: 'fl' | 'nc' | 'national' | 'course' | 'brand' | 'rain'
  stageKind: StageKind
  status: ModeStatus
  showFavorite?: boolean
  showHands?: boolean
  showPayPerResult?: boolean
  results: ResultMetric[]
  act: number
}
