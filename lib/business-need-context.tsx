'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

export type BusinessNeedId = 'fill-capacity' | 'product-trial' | 'educate-market' | 'precision-targeting' | 'market-share' | 'social-growth' | null

interface BusinessNeedState {
  selectedNeed: BusinessNeedId
  setSelectedNeed: (id: BusinessNeedId) => void
}

const BusinessNeedContext = createContext<BusinessNeedState>({
  selectedNeed: null,
  setSelectedNeed: () => {},
})

export function BusinessNeedProvider({ children }: { children: ReactNode }) {
  const [selectedNeed, setSelectedNeed] = useState<BusinessNeedId>(null)
  return (
    <BusinessNeedContext.Provider value={{ selectedNeed, setSelectedNeed }}>
      {children}
    </BusinessNeedContext.Provider>
  )
}

export function useBusinessNeed() {
  return useContext(BusinessNeedContext)
}
