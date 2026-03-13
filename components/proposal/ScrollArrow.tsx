'use client'

import { motion } from 'framer-motion'

export function ScrollArrow({ label, targetId, color = '#17A455' }: { label: string; targetId: string; color?: string }) {
  return (
    <div className="py-12 md:py-16 flex flex-col items-center gap-3">
      <motion.button
        onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })}
        className="flex flex-col items-center gap-2 group cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-base md:text-lg font-semibold text-[#A1A1AA] group-hover:text-white transition-colors">{label}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M8 12l8 8 8-8" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.button>
    </div>
  )
}
