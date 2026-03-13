'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, type ReactNode } from 'react'

interface ExpandProps {
  trigger: ReactNode
  children: ReactNode
  defaultOpen?: boolean
  accentColor?: string
}

export function Expand({ trigger, children, defaultOpen = false, accentColor = '#00ff9d' }: ExpandProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border border-[#1e2128] rounded-2xl overflow-hidden transition-colors hover:border-[#2a2f38]" style={open ? { borderColor: `${accentColor}25` } : {}}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 md:px-8 md:py-6 text-left group"
      >
        <div className="flex-1">{trigger}</div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center border transition-colors"
          style={{
            borderColor: open ? `${accentColor}40` : '#2a2f38',
            background: open ? `${accentColor}10` : 'transparent',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4.5 7l4.5 4.5L13.5 7" stroke={open ? accentColor : '#6b7280'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 md:px-8 md:pb-8 border-t border-[#1e2128]/60 pt-5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
