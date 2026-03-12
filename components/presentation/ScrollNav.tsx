'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Section { id: string; label: string }

export function ScrollNav({ sections, partnerColor }: { sections: Section[]; partnerColor: string }) {
  const [active, setActive] = useState(sections[0]?.id || '')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
      const offsets = sections.map(s => {
        const el = document.getElementById(s.id)
        if (!el) return { id: s.id, top: Infinity }
        return { id: s.id, top: Math.abs(el.getBoundingClientRect().top - 200) }
      })
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b))
      setActive(closest.id)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  if (!visible) return null

  return (
    <motion.nav
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4"
    >
      {sections.map((section) => {
        const isActive = active === section.id
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex items-center gap-4 justify-end"
          >
            <span
              className={`text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3 group-hover:opacity-60 group-hover:translate-x-0'
              }`}
              style={{ color: isActive ? partnerColor : 'var(--color-golfn-dim)' }}
            >
              {section.label}
            </span>
            <span
              className="block rounded-full transition-all duration-300 shrink-0"
              style={{
                width: isActive ? 14 : 8,
                height: isActive ? 14 : 8,
                backgroundColor: isActive ? partnerColor : 'var(--color-golfn-muted)',
                boxShadow: isActive ? `0 0 16px ${partnerColor}50` : 'none',
              }}
            />
          </a>
        )
      })}
    </motion.nav>
  )
}
