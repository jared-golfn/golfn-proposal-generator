'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { images } from '@/lib/images'

interface Section { id: string; label: string }

export function ScrollNav({ sections, partnerColor }: { sections: Section[]; partnerColor: string }) {
  const [active, setActive] = useState(sections[0]?.id || '')
  const [visible, setVisible] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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

  const activeLabel = sections.find(s => s.id === active)?.label || ''

  return (
    <>
      {/* Desktop: right rail (xl+) */}
      <motion.nav
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-6"
      >
        {sections.map((section) => {
          const isActive = active === section.id
          return (
            <a key={section.id} href={`#${section.id}`} className="group flex items-center gap-5 justify-end">
              <span
                className={`text-base font-medium transition-all duration-300 whitespace-nowrap ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3 group-hover:opacity-50 group-hover:translate-x-0'}`}
                style={{ color: isActive ? partnerColor : '#A1A1AA' }}
              >
                {section.label}
              </span>
              {isActive ? (
                <motion.img
                  src={images.logoIcon}
                  alt=""
                  className="shrink-0"
                  style={{ width: 40, height: 40, filter: `drop-shadow(0 0 12px ${partnerColor}60)` }}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                />
              ) : (
                <span
                  className="block rounded-full transition-all duration-300 shrink-0 group-hover:bg-[#71717A]"
                  style={{ width: 10, height: 10, backgroundColor: '#52525B' }}
                />
              )}
            </a>
          )
        })}
      </motion.nav>

      {/* Mobile: compact top pill nav (<xl) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-3 left-3 right-3 z-40 xl:hidden"
      >
        <div className="bg-[#131315]/95 backdrop-blur-xl border border-[#2A2A2C] rounded-2xl" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
          {/* Compact bar — tap to expand */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-full flex items-center justify-between px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <img src={images.logoIcon} alt="" className="w-6 h-6" style={{ filter: `drop-shadow(0 0 8px ${partnerColor}40)` }} />
              <span className="text-sm font-semibold" style={{ color: partnerColor }}>{activeLabel}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#52525B]">{sections.findIndex(s => s.id === active) + 1}/{sections.length}</span>
              <motion.svg animate={{ rotate: mobileOpen ? 180 : 0 }} width="16" height="16" viewBox="0 0 16 16" className="text-[#52525B]">
                <path d="M4 6l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" />
              </motion.svg>
            </div>
          </button>

          {/* Expanded section list */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-3 pb-3 border-t border-[#2A2A2C]">
                  <div className="grid grid-cols-3 gap-1.5 pt-3">
                    {sections.map((section) => {
                      const isActive2 = active === section.id
                      return (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          onClick={() => setMobileOpen(false)}
                          className={`text-center px-2 py-2.5 rounded-xl text-xs font-medium transition-all ${isActive2 ? 'text-white' : 'text-[#71717A]'}`}
                          style={isActive2 ? { background: `${partnerColor}20`, color: partnerColor } : {}}
                        >
                          {section.label}
                        </a>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  )
}
