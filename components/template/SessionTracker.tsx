'use client'

import { useEffect, useRef, useCallback } from 'react'

const TRACKED_SECTIONS = [
  { id: 'top', label: 'Hero' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'ways-to-work', label: 'Pricing' },
  { id: 'faq-section', label: 'FAQ' },
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

    const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' })
    navigator.sendBeacon('/api/session-end', blob)
  }, [slug])

  useEffect(() => {
    // Track section visibility
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

    // Track interactions via event delegation
    // Uses data-track attributes AND smart DOM heuristics
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement

      // Explicit data-track attributes
      if (target.closest('[data-track="video-play"]')) {
        interactions.current.add('Played L.A.B. video')
      }
      if (target.closest('[data-track="campaign-expand"]')) {
        interactions.current.add('Expanded campaign card')
      }
      if (target.closest('[data-track="calculator"]')) {
        interactions.current.add('Used pricing calculator')
      }
      if (target.closest('[data-track="market-reach"]')) {
        interactions.current.add('Opened market reach')
      }

      // Smart heuristic: detect "View prizes" / "Hide prizes" buttons
      const btn = target.closest('button')
      if (btn) {
        const text = btn.textContent?.toLowerCase() || ''
        if (text.includes('view prizes') || text.includes('hide prizes')) {
          interactions.current.add('Expanded campaign card')
        }
      }

      // Detect video play via native controls (user clicks play on the <video> element)
      if (target.tagName === 'VIDEO' || target.closest('video')) {
        interactions.current.add('Played L.A.B. video')
      }

      // Detect "Watch the full version" link click
      const link = target.closest('a')
      if (link && link.textContent?.toLowerCase().includes('full version')) {
        interactions.current.add('Clicked full version link')
      }

      // Detect How It Works step clicks
      if (btn) {
        const stepParent = btn.closest('#how-it-works')
        if (stepParent) {
          interactions.current.add('Explored How It Works steps')
        }
      }
    }

    // Track calculator slider/input changes
    function handleInput(e: Event) {
      const target = e.target as HTMLElement
      if (target.closest('[data-track="calculator"]')) {
        interactions.current.add('Used pricing calculator')
      }
      // Heuristic: detect range input or number input inside #ways-to-work
      if (target.closest('#ways-to-work') && (target instanceof HTMLInputElement)) {
        if (target.type === 'range' || target.type === 'number') {
          interactions.current.add('Used pricing calculator')
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('click', handleClick, true)
    document.addEventListener('input', handleInput, true)

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
