'use client'

import { motion } from 'framer-motion'

export function SectionDivider({ color = '#00ff9d', label, targetId }: { color?: string; label?: string; targetId?: string }) {
  const inner = (
    <div className="flex flex-col items-center py-8">
      <motion.div
        className="w-px h-16"
        style={{ background: `linear-gradient(to bottom, transparent, ${color}40, transparent)` }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      />
      {label && (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-[0.2em] uppercase mt-2"
          style={{ color: `${color}80` }}
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
