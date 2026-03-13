'use client'

import { motion } from 'framer-motion'

export function SectionDivider({ color = '#00ff9d', label, targetId }: { color?: string; label?: string; targetId?: string }) {
  const inner = (
    <div className="flex flex-col items-center py-3">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${color}20, transparent)` }} />
      </div>
      {label && (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-[0.2em] uppercase mt-2"
          style={{ color: `${color}60` }}
        >
          {label}
        </motion.span>
      )}
    </div>
  )

  if (targetId) {
    return <a href={`#${targetId}`} className="block cursor-pointer">{inner}</a>
  }
  return inner
}
