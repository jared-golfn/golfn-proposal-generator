'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

export type SuccessGoal = 'reach' | 'education' | 'sales' | 'audience' | 'awareness'

export const GOAL_LABELS: Record<SuccessGoal, string> = {
  reach: 'Reach efficiency',
  education: 'Product education',
  sales: 'Sales / conversion',
  audience: 'Audience ownership',
  awareness: 'Brand awareness',
}

export const GOAL_DESCRIPTIONS: Record<SuccessGoal, string> = {
  reach: 'Getting in front of more golfers for less money',
  education: 'Golfers who actually understand what you make and why it matters',
  sales: 'Attributed purchases or revenue from qualified golfers',
  audience: 'Building a re-activatable cohort you can keep marketing to',
  awareness: 'Being visible in a golf-native environment to the right demographic',
}

interface BrandSpendData {
  cpm: number | null
  cac: number | null
  ltv: number | null
  monthlyBudget: number | null
  successGoals: Set<SuccessGoal>
  setCpm: (v: number | null) => void
  setCac: (v: number | null) => void
  setLtv: (v: number | null) => void
  setMonthlyBudget: (v: number | null) => void
  toggleGoal: (g: SuccessGoal) => void
}

const BrandSpendContext = createContext<BrandSpendData>({
  cpm: null, cac: null, ltv: null, monthlyBudget: null, successGoals: new Set(),
  setCpm: () => {}, setCac: () => {}, setLtv: () => {}, setMonthlyBudget: () => {}, toggleGoal: () => {},
})

export function BrandSpendProvider({ children }: { children: ReactNode }) {
  const [cpm, setCpm] = useState<number | null>(null)
  const [cac, setCac] = useState<number | null>(null)
  const [ltv, setLtv] = useState<number | null>(null)
  const [monthlyBudget, setMonthlyBudget] = useState<number | null>(null)
  const [successGoals, setSuccessGoals] = useState<Set<SuccessGoal>>(new Set())

  function toggleGoal(g: SuccessGoal) {
    setSuccessGoals(prev => {
      const next = new Set(prev)
      if (next.has(g)) next.delete(g); else next.add(g)
      return next
    })
  }

  return (
    <BrandSpendContext.Provider value={{ cpm, cac, ltv, monthlyBudget, successGoals, setCpm, setCac, setLtv, setMonthlyBudget, toggleGoal }}>
      {children}
    </BrandSpendContext.Provider>
  )
}

export function useBrandSpend() {
  return useContext(BrandSpendContext)
}
