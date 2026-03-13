'use client'

export function Badge({ label, color = '#00ff9d' }: { label: string; color?: string }) {
  return (
    <span
      className="inline-flex items-center text-xs font-mono tracking-wider px-3 py-1 rounded-full"
      style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}
    >
      {label}
    </span>
  )
}
