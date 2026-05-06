'use client'

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

export function StickyPitchCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    function onScroll() {
      // Show after scrolling past the hero (~85vh)
      const threshold = window.innerHeight * 0.85
      setVisible(window.scrollY > threshold)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (dismissed || !visible) return null

  return (
    <>
      {/* Desktop: bottom-right floating */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <div className="relative">
          <button
            onClick={() => setDismissed(true)}
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#1a1f2e] border border-[#2a3347] text-[#6b7280] hover:text-white text-xs flex items-center justify-center transition-colors z-10"
            aria-label="Dismiss"
          >
            ×
          </button>
          <a
            href="mailto:jared@golfn.com?subject=Partnership%20Inquiry"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00ff9d] text-[#0f1217] font-bold text-sm hover:bg-[#00e68a] transition-all shadow-lg shadow-[#00ff9d]/20"
          >
            Book a 15-Min Briefing <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Mobile: bottom-center bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-[#0f1217]/95 backdrop-blur-sm border-t border-[#2a3347]">
        <a
          href="mailto:jared@golfn.com?subject=Partnership%20Inquiry"
          className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-[#00ff9d] text-[#0f1217] font-bold text-sm"
        >
          Book a 15-Min Briefing <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </>
  )
}
