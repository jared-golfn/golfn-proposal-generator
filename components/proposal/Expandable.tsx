'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, type ReactNode } from 'react'

interface ExpandableProps {
  trigger: ReactNode
  children: ReactNode
  defaultOpen?: boolean
  accentColor?: string
}

export function Expandable({ trigger, children, defaultOpen = false, accentColor = '#17A455' }: ExpandableProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border border-[#2A2A2C] rounded-2xl overflow-hidden transition-colors" style={open ? { borderColor: `${accentColor}30` } : {}}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 md:px-8 md:py-6 text-left hover:bg-[#161618] transition-colors"
      >
        <div className="flex-1">{trigger}</div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border border-[#2A2A2C]"
          style={open ? { background: `${accentColor}15`, borderColor: `${accentColor}30` } : {}}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 8l5 5 5-5" stroke={open ? accentColor : '#71717A'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
            <div className="px-6 pb-6 md:px-8 md:pb-8 border-t border-[#2A2A2C]/50">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
