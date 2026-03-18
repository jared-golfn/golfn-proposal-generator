'use client'

import { useEffect, useRef, useCallback } from 'react'

const TRACKED_SECTIONS = [
  { id: 'top', label: 'Hero' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'ways-to-work', label: 'Pricing' },
  { id: 'faq-section', label: 'FAQ' },
]

const TRACKED_INTERACTIONS = [
  { selector: '[data-track="video-play"]', label: 'Played L.A.B. video' },
  { selector: '[data-track="campaign-expand"]', label: 'Expanded campaign card' },
  { selector: '[data-track="calculator"]', label: 'Used pricing calculator' },
  { selector: '[data-track="market-reach"]', label: 'Opened market reach' },
]

export function SessionTracker({ slug }: { slug: string }) {
  const startTime = useRef(Date.now())
  const sectionsViewed = useRef<Set<string>>(new Set())
  const sectionOrder = useRef<string[]>([])
  const interactions = useRef<Set<string>>(new Set())
  const maxScrollPct = useRef(0)
  const deepestSection = useRef('Hero')
  const hasSent = useRef(false)

  const sendSessionData = useCallback(() => {
    if (hasSent.current) return
    hasSent.current = true

    const duration = Math.round((Date.now() - startTime.current) / 1000)
    // Don't report sessions under 3 seconds (bot/accidental)
    if (duration < 3) return

    const minutes = Math.floor(duration / 60)
    const seconds = duration % 60
    const durationStr = minutes > 0 ? `${minutes} min ${seconds} sec` : `${seconds} sec`

    const payload = {
      slug,
      duration: durationStr,
      durationSec: duration,
      sectionsViewed: sectionOrder.current.length > 0 ? sectionOrder.current : ['Hero'],
      deepestScroll: `${maxScrollPct.current}%`,
      deepestSection: deepestSection.current,
      interactions: Array.from(interactions.current),
    }

    // Use sendBeacon for reliability on page close
    const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' })
    navigator.sendBeacon('/api/session-end', blob)
  }, [slug])

  useEffect(() => {
    // Track section visibility with IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            const section = TRACKED_SECTIONS.find(s => s.id === id)
            if (section && !sectionsViewed.current.has(section.label)) {
              sectionsViewed.current.add(section.label)
              sectionOrder.current.push(section.label)
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    // Observe all tracked sections
    TRACKED_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    // Track scroll depth
    function handleScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        const pct = Math.round((scrollTop / docHeight) * 100)
        if (pct > maxScrollPct.current) {
          maxScrollPct.current = pct
          // Determine deepest section
          const allSections = TRACKED_SECTIONS.slice().reverse()
          for (const s of allSections) {
            const el = document.getElementById(s.id)
            if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) {
              deepestSection.current = s.label
              break
            }
          }
        }
      }
    }

    // Track click interactions via event delegation
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      TRACKED_INTERACTIONS.forEach(({ selector, label }) => {
        if (target.closest(selector)) {
          interactions.current.add(label)
        }
      })
    }

    // Track calculator input changes
    function handleInput(e: Event) {
      const target = e.target as HTMLElement
      if (target.closest('[data-track="calculator"]')) {
        interactions.current.add('Used pricing calculator')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('click', handleClick, true)
    document.addEventListener('input', handleInput, true)

    // Send on page close
    function handleVisibilityChange() {
      if (document.visibilityState === 'hidden') {
        sendSessionData()
      }
    }

    function handleBeforeUnload() {
      sendSessionData()
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClick, true)
      document.removeEventListener('input', handleInput, true)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [sendSessionData])

  return null
}
