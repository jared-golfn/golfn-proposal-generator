'use client'

import { useEffect, useRef } from 'react'

const TRACKED_SECTIONS = [
  { id: 'top', label: 'Hero' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'ways-to-work', label: 'Pricing' },
  { id: 'faq-section', label: 'FAQ' },
]

const HEARTBEAT_INTERVAL = 30_000 // 30 seconds

export function SessionTracker({ slug }: { slug: string }) {
  const startTime = useRef(Date.now())
  const sectionsViewed = useRef<Set<string>>(new Set(['Hero']))
  const sectionOrder = useRef<string[]>(['Hero'])
  const interactions = useRef<Set<string>>(new Set())
  const maxScrollPct = useRef(0)
  const deepestSection = useRef('Hero')
  const lastSentAt = useRef(0)

  useEffect(() => {
    function getPayload() {
      const duration = Math.round((Date.now() - startTime.current) / 1000)
      const minutes = Math.floor(duration / 60)
      const seconds = duration % 60
      return {
        slug,
        duration: minutes > 0 ? `${minutes} min ${seconds} sec` : `${seconds} sec`,
        durationSec: duration,
        sectionsViewed: sectionOrder.current,
        deepestScroll: `${maxScrollPct.current}%`,
        deepestSection: deepestSection.current,
        interactions: Array.from(interactions.current),
      }
    }

    function sendHeartbeat() {
      const now = Date.now()
      const elapsed = Math.round((now - startTime.current) / 1000)
      // Don't send if less than 5 seconds or if sent in last 25 seconds
      if (elapsed < 5 || (now - lastSentAt.current) < 25_000) return
      lastSentAt.current = now

      const payload = getPayload()
      fetch('/api/session-end', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {})
    }

    // Periodic heartbeat every 30s
    const heartbeatTimer = setInterval(sendHeartbeat, HEARTBEAT_INTERVAL)

    // IntersectionObserver for section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = TRACKED_SECTIONS.find(s => s.id === entry.target.id)
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

    // Scroll depth
    function handleScroll() {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        const pct = Math.round((window.scrollY / docHeight) * 100)
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

    // Click interactions
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (target.closest('[data-track="video-play"]')) interactions.current.add('Played L.A.B. video')
      if (target.closest('[data-track="campaign-expand"]')) interactions.current.add('Expanded campaign card')
      if (target.closest('[data-track="calculator"]')) interactions.current.add('Used pricing calculator')
      if (target.closest('[data-track="market-reach"]')) interactions.current.add('Opened market reach')

      const btn = target.closest('button')
      if (btn) {
        const text = btn.textContent?.toLowerCase() || ''
        if (text.includes('view prizes') || text.includes('hide prizes')) interactions.current.add('Expanded campaign card')
        if (btn.closest('#how-it-works')) interactions.current.add('Explored How It Works steps')
      }
      if (target.tagName === 'VIDEO' || target.closest('video')) interactions.current.add('Played L.A.B. video')
      const link = target.closest('a')
      if (link?.textContent?.toLowerCase().includes('full version')) interactions.current.add('Clicked full version link')
      if (target.closest('#ways-to-work') && (target instanceof HTMLInputElement)) {
        if (target.type === 'range' || target.type === 'number') interactions.current.add('Used pricing calculator')
      }
    }

    function handleInput(e: Event) {
      const target = e.target as HTMLElement
      if (target.closest('#ways-to-work') && (target instanceof HTMLInputElement)) {
        if (target.type === 'range' || target.type === 'number') interactions.current.add('Used pricing calculator')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('click', handleClick, true)
    document.addEventListener('input', handleInput, true)

    // Still try sendBeacon on close as a bonus
    function handleClose() {
      const payload = getPayload()
      if (payload.durationSec >= 5) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' })
        navigator.sendBeacon('/api/session-end', blob)
      }
    }
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') handleClose()
    })
    window.addEventListener('beforeunload', handleClose)

    return () => {
      clearInterval(heartbeatTimer)
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClick, true)
      document.removeEventListener('input', handleInput, true)
    }
  }, [slug])

  return null
}
