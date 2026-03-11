'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Section {
  id: string
  label: string
}

export function ScrollNav({ sections, partnerColor }: { sections: Section[]; partnerColor: string }) {
  const [active, setActive] = useState(sections[0]?.id || '')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)

      const offsets = sections.map(s => {
        const el = document.getElementById(s.id)
        if (!el) return { id: s.id, top: Infinity }
        return { id: s.id, top: Math.abs(el.getBoundingClientRect().top) }
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
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="group flex items-center gap-3 justify-end"
          title={section.label}
        >
          <span className={`text-xs font-medium transition-all duration-300 ${
            active === section.id
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-2 group-hover:opacity-70 group-hover:translate-x-0'
          }`}
          style={{ color: active === section.id ? partnerColor : undefined }}
          >
            {section.label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === section.id
                ? 'w-3 h-3'
                : 'w-2 h-2 bg-golfn-muted group-hover:bg-golfn-white-dim'
            }`}
            style={{
              backgroundColor: active === section.id ? partnerColor : undefined,
              boxShadow: active === section.id ? `0 0 12px ${partnerColor}60` : undefined,
            }}
          />
        </a>
      ))}
    </motion.nav>
  )
}
