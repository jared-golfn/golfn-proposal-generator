'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

interface BrandSpendData {
  cpm: number | null
  monthlyBudget: number | null
  setCpm: (v: number | null) => void
  setMonthlyBudget: (v: number | null) => void
}

const BrandSpendContext = createContext<BrandSpendData>({
  cpm: null, monthlyBudget: null, setCpm: () => {}, setMonthlyBudget: () => {},
})

export function BrandSpendProvider({ children }: { children: ReactNode }) {
  const [cpm, setCpm] = useState<number | null>(null)
  const [monthlyBudget, setMonthlyBudget] = useState<number | null>(null)
  return (
    <BrandSpendContext.Provider value={{ cpm, monthlyBudget, setCpm, setMonthlyBudget }}>
      {children}
    </BrandSpendContext.Provider>
  )
}

export function useBrandSpend() {
  return useContext(BrandSpendContext)
}
