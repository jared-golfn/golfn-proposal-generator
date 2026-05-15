'use client'

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

interface RateRequestContextValue {
  isOpen: boolean
  preselectedSurface: string | null
  open: (surface?: string) => void
  close: () => void
}

const RateRequestContext = createContext<RateRequestContextValue | null>(null)

export function RateRequestProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [preselectedSurface, setPreselectedSurface] = useState<string | null>(null)

  const open = useCallback((surface?: string) => {
    setPreselectedSurface(surface ?? null)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    // Clear after the close animation so a re-open without a surface starts clean.
    setTimeout(() => setPreselectedSurface(null), 300)
  }, [])

  const value = useMemo<RateRequestContextValue>(
    () => ({ isOpen, preselectedSurface, open, close }),
    [isOpen, preselectedSurface, open, close],
  )

  return <RateRequestContext.Provider value={value}>{children}</RateRequestContext.Provider>
}

export function useRateRequest(): RateRequestContextValue {
  const ctx = useContext(RateRequestContext)
  if (!ctx) {
    throw new Error('useRateRequest must be used inside <RateRequestProvider>')
  }
  return ctx
}
