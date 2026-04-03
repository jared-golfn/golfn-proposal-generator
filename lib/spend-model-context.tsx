'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

export type SpendModel = 'cpm' | 'cpa' | 'roas' | 'audience' | null

interface SpendModelState {
  model: SpendModel
  setModel: (m: SpendModel) => void
  cohortSize: number
  setCohortSize: (n: number) => void
  aov: number
  setAov: (n: number) => void
  conversionRate: number
  setConversionRate: (n: number) => void
}

const SpendModelContext = createContext<SpendModelState>({
  model: null,
  setModel: () => {},
  cohortSize: 2000,
  setCohortSize: () => {},
  aov: 493,
  setAov: () => {},
  conversionRate: 3,
  setConversionRate: () => {},
})

export function SpendModelProvider({ children }: { children: ReactNode }) {
  const [model, setModel] = useState<SpendModel>(null)
  const [cohortSize, setCohortSize] = useState(2000)
  const [aov, setAov] = useState(493)
  const [conversionRate, setConversionRate] = useState(3)
  return (
    <SpendModelContext.Provider value={{ model, setModel, cohortSize, setCohortSize, aov, setAov, conversionRate, setConversionRate }}>
      {children}
    </SpendModelContext.Provider>
  )
}

export function useSpendModel() {
  return useContext(SpendModelContext)
}

// Derived metrics based on model and cohort size
export function useSpendMetrics() {
  const { model, cohortSize, aov, conversionRate } = useSpendModel()
  const startupFee = 2500
  const prizeValue = 4500
  const totalInitial = startupFee + prizeValue
  const perUser = 5
  const ongoingMonthly = cohortSize * perUser

  // Sweepstakes typically get 50-100x entries vs cohort
  const estimatedEntries = cohortSize * 40
  const estimatedImpressions = estimatedEntries * 6 // ~6 touchpoints per entrant
  const effectiveCPM = (totalInitial / estimatedImpressions) * 1000
  const costPerQualifiedLead = totalInitial / cohortSize
  const rateDecimal = conversionRate / 100
  const projectedRevenue = cohortSize * rateDecimal * aov
  const projectedROAS = projectedRevenue / totalInitial

  return {
    model,
    cohortSize,
    startupFee,
    prizeValue,
    totalInitial,
    perUser,
    ongoingMonthly,
    estimatedEntries,
    estimatedImpressions,
    effectiveCPM: Math.round(effectiveCPM * 100) / 100,
    costPerQualifiedLead: Math.round(costPerQualifiedLead * 100) / 100,
    projectedRevenue: Math.round(projectedRevenue),
    projectedROAS: Math.round(projectedROAS * 10) / 10,
    avgAOV: aov,
    conversionRate,
  }
}
