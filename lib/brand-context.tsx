'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

interface BrandSpendData {
  cpm: number | null
  cac: number | null
  monthlyBudget: number | null
  setCpm: (v: number | null) => void
  setCac: (v: number | null) => void
  setMonthlyBudget: (v: number | null) => void
}

const BrandSpendContext = createContext<BrandSpendData>({
  cpm: null, cac: null, monthlyBudget: null, setCpm: () => {}, setCac: () => {}, setMonthlyBudget: () => {},
})

export function BrandSpendProvider({ children }: { children: ReactNode }) {
  const [cpm, setCpm] = useState<number | null>(null)
  const [cac, setCac] = useState<number | null>(null)
  const [monthlyBudget, setMonthlyBudget] = useState<number | null>(null)
  return (
    <BrandSpendContext.Provider value={{ cpm, cac, monthlyBudget, setCpm, setCac, setMonthlyBudget }}>
      {children}
    </BrandSpendContext.Provider>
  )
}

export function useBrandSpend() {
  return useContext(BrandSpendContext)
}
