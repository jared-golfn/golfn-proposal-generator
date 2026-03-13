'use client'

import { motion } from 'framer-motion'

export function SectionDivider({ label, targetId, color = '#00ff9d' }: { label?: string; targetId?: string; color?: string }) {
  return (
    <div className="py-10 md:py-14 flex flex-col items-center gap-3">
      <div className="w-px h-12 md:h-16" style={{ background: `linear-gradient(to bottom, transparent, ${color}40, transparent)` }} />
      {label && targetId && (
        <motion.button
          onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 text-sm text-[#6b7280] hover:text-white transition-colors group"
          whileHover={{ y: 2 }}
        >
          <span>{label}</span>
          <motion.svg
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            width="14" height="14" viewBox="0 0 14 14" fill="none"
          >
            <path d="M3 5.5l4 4 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          </motion.svg>
        </motion.button>
      )}
    </div>
  )
}
