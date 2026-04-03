'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

export type BusinessNeedId = 'build-awareness' | 'fill-capacity' | 'product-trial' | 'educate-market' | 'precision-targeting' | 'market-share' | 'social-growth' | null

interface BusinessNeedState {
  selectedNeed: BusinessNeedId
  setSelectedNeed: (id: BusinessNeedId) => void
  // Secondary objective: what the awareness campaign is optimized toward
  downstreamObjective: BusinessNeedId
  setDownstreamObjective: (id: BusinessNeedId) => void
}

const BusinessNeedContext = createContext<BusinessNeedState>({
  selectedNeed: null,
  setSelectedNeed: () => {},
  downstreamObjective: null,
  setDownstreamObjective: () => {},
})

export function BusinessNeedProvider({ children }: { children: ReactNode }) {
  const [selectedNeed, setSelectedNeed] = useState<BusinessNeedId>(null)
  const [downstreamObjective, setDownstreamObjective] = useState<BusinessNeedId>(null)
  return (
    <BusinessNeedContext.Provider value={{ selectedNeed, setSelectedNeed, downstreamObjective, setDownstreamObjective }}>
      {children}
    </BusinessNeedContext.Provider>
  )
}

export function useBusinessNeed() {
  return useContext(BusinessNeedContext)
}
