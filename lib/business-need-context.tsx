'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import type { BusinessNeedId } from '@/lib/business-needs'

interface BusinessNeedState {
  selectedNeed: BusinessNeedId | null
  setSelectedNeed: (id: BusinessNeedId | null) => void
  downstreamObjective: BusinessNeedId | null
  setDownstreamObjective: (id: BusinessNeedId | null) => void
}

const BusinessNeedContext = createContext<BusinessNeedState>({
  selectedNeed: null,
  setSelectedNeed: () => {},
  downstreamObjective: null,
  setDownstreamObjective: () => {},
})

export function BusinessNeedProvider({ children }: { children: ReactNode }) {
  const [selectedNeed, setSelectedNeed] = useState<BusinessNeedId | null>(null)
  const [downstreamObjective, setDownstreamObjective] = useState<BusinessNeedId | null>(null)
  return (
    <BusinessNeedContext.Provider value={{ selectedNeed, setSelectedNeed, downstreamObjective, setDownstreamObjective }}>
      {children}
    </BusinessNeedContext.Provider>
  )
}

export function useBusinessNeed() {
  return useContext(BusinessNeedContext)
}
