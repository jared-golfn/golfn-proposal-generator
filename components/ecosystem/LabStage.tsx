'use client'

import { useMemo } from 'react'
import type { LabMode } from './types'

type Props = {
  mode: LabMode
  intensity: number
  scope: number
}

type Person = {
  id: number
  homeX: number
  homeY: number
  region: 'se' | 'ne' | 'mw' | 'w' | 'tx' | 'fl' | 'nc'
  wet: boolean
}

/** Approximate metro golfers on a simplified US map (viewBox 0 0 1000 620) */
const HOMES: { x: number; y: number; region: Person['region']; wet?: boolean }[] = [
  // Florida
  { x: 780, y: 500, region: 'fl' },
  { x: 770, y: 470, region: 'fl' },
  { x: 790, y: 520, region: 'fl' },
  { x: 755, y: 455, region: 'fl' },
  { x: 800, y: 490, region: 'fl' },
  { x: 765, y: 510, region: 'fl' },
  { x: 785, y: 460, region: 'fl' },
  { x: 745, y: 485, region: 'fl' },
  // Carolinas / SE
  { x: 780, y: 340, region: 'nc' },
  { x: 800, y: 355, region: 'nc' },
  { x: 760, y: 330, region: 'nc' },
  { x: 790, y: 370, region: 'nc' },
  { x: 720, y: 380, region: 'se' },
  { x: 700, y: 360, region: 'se' },
  { x: 740, y: 400, region: 'se' },
  { x: 680, y: 390, region: 'se' },
  // NE
  { x: 820, y: 200, region: 'ne' },
  { x: 840, y: 220, region: 'ne' },
  { x: 800, y: 180, region: 'ne' },
  { x: 860, y: 190, region: 'ne' },
  { x: 830, y: 240, region: 'ne' },
  // Midwest
  { x: 620, y: 220, region: 'mw' },
  { x: 580, y: 250, region: 'mw' },
  { x: 650, y: 240, region: 'mw' },
  { x: 600, y: 280, region: 'mw' },
  { x: 560, y: 200, region: 'mw' },
  // Texas
  { x: 480, y: 420, region: 'tx' },
  { x: 520, y: 400, region: 'tx' },
  { x: 460, y: 450, region: 'tx' },
  { x: 500, y: 380, region: 'tx' },
  // West / PNW wet
  { x: 120, y: 160, region: 'w', wet: true },
  { x: 100, y: 200, region: 'w', wet: true },
  { x: 140, y: 140, region: 'w', wet: true },
  { x: 180, y: 280, region: 'w' },
  { x: 160, y: 340, region: 'w' },
  { x: 200, y: 400, region: 'w' },
  // Mountain / plains
  { x: 320, y: 260, region: 'mw' },
  { x: 360, y: 320, region: 'mw' },
  { x: 280, y: 200, region: 'w' },
  // More SE density for event demos
  { x: 750, y: 420, region: 'se', wet: true },
  { x: 730, y: 440, region: 'se', wet: true },
  { x: 710, y: 410, region: 'se' },
  { x: 690, y: 430, region: 'fl', wet: true },
  { x: 810, y: 400, region: 'nc' },
  { x: 770, y: 300, region: 'nc' },
  { x: 820, y: 320, region: 'nc' },
  { x: 640, y: 340, region: 'se' },
  { x: 660, y: 300, region: 'se' },
  { x: 880, y: 260, region: 'ne' },
  { x: 540, y: 300, region: 'tx' },
  { x: 420, y: 280, region: 'mw' },
  { x: 380, y: 400, region: 'tx' },
  { x: 240, y: 240, region: 'w', wet: true },
  { x: 300, y: 360, region: 'w' },
]

const PINS: Record<string, { x: number; y: number; label: string }> = {
  fl: { x: 775, y: 485, label: 'Your event · FL' },
  nc: { x: 785, y: 345, label: 'Activation · NC' },
  course: { x: 780, y: 350, label: 'Partner course' },
  national: { x: 520, y: 300, label: 'Your brand' },
  brand: { x: 520, y: 300, label: 'Your product' },
  rain: { x: 720, y: 400, label: 'Condition zone' },
}

function hash(i: number, s: number) {
  const x = Math.sin(i * 12.9898 + s * 78.233) * 43758.5453
  return x - Math.floor(x)
}

function dist(ax: number, ay: number, bx: number, by: number) {
  return Math.hypot(ax - bx, ay - by)
}

/** Simplified contiguous US outline */
function UsMapOutline() {
  return (
    <path
      d="M 160 140
         L 200 120 L 280 115 L 360 120 L 420 110 L 480 115 L 520 105 L 580 110
         L 640 100 L 700 105 L 760 115 L 800 130 L 840 150 L 870 180 L 880 220
         L 875 260 L 860 290 L 840 300 L 820 280 L 800 290 L 790 320 L 800 360
         L 810 400 L 800 440 L 790 470 L 800 510 L 780 540 L 750 550 L 730 520
         L 720 480 L 700 450 L 680 430 L 640 420 L 600 430 L 560 450 L 520 470
         L 480 490 L 450 480 L 420 450 L 400 420 L 380 400 L 340 390 L 300 400
         L 260 420 L 230 400 L 200 380 L 170 360 L 150 320 L 140 280 L 130 240
         L 125 200 L 140 160 Z"
      fill="#141a22"
      stroke="#2a3347"
      strokeWidth="2"
    />
  )
}

function PersonGlyph({
  x,
  y,
  active,
  favorite,
  hand,
  moving,
  dim,
}: {
  x: number
  y: number
  active: boolean
  favorite?: boolean
  hand?: boolean
  moving?: boolean
  dim?: boolean
}) {
  const fill = dim ? '#3a4558' : active ? '#8DC54A' : '#5a6578'
  const op = dim ? 0.35 : active ? 1 : 0.55
  return (
    <g
      transform={`translate(${x}, ${y})`}
      opacity={op}
      style={{
        transition: 'transform 0.55s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease',
      }}
    >
      {/* body */}
      <circle cx={0} cy={-6} r={5.5} fill={fill} />
      <path
        d="M -7 2 Q 0 0 7 2 L 8 14 L -8 14 Z"
        fill={fill}
      />
      {hand && active && (
        <g transform="translate(8,-4)">
          {/* raised hand */}
          <circle cx={0} cy={0} r={3} fill="#B9E08A" />
          <line x1={0} y1={3} x2={0} y2={8} stroke="#B9E08A" strokeWidth="2" strokeLinecap="round" />
        </g>
      )}
      {favorite && active && (
        <text x={8} y={-10} fontSize="10" fill="#8DC54A">
          ★
        </text>
      )}
      {moving && active && (
        <circle cx={0} cy={4} r={14} fill="none" stroke="#8DC54A" strokeWidth="1" opacity={0.25} />
      )}
    </g>
  )
}

export function LabStage({ mode, intensity, scope }: Props) {
  const pin = PINS[mode.pinKey ?? 'national']

  const people = useMemo(() => {
    return HOMES.map((h, i) => {
      const jitter = (hash(i, 1) - 0.5) * 18
      const jitterY = (hash(i, 2) - 0.5) * 14
      return {
        id: i,
        homeX: h.x + jitter,
        homeY: h.y + jitterY,
        region: h.region,
        wet: !!h.wet || hash(i, 3) > 0.72,
      } satisfies Person
    })
  }, [])

  const rendered = useMemo(() => {
    const t = intensity / 100
    const s = scope / 100
    // radius in map units — scope dial
    const radius = 40 + s * 140

    return people.map((p) => {
      const d = dist(p.homeX, p.homeY, pin.x, pin.y)
      let active = false
      let dim = false
      let moveT = 0

      switch (mode.stageKind) {
        case 'map-event': {
          const inRadius = d < radius
          // intensity = share of in-radius who activate and move to pin
          active = inRadius && hash(p.id, 10) < 0.15 + t * 0.85
          dim = !inRadius
          moveT = active ? 0.25 + t * 0.7 : 0
          break
        }
        case 'map-weather': {
          // day-of wet vs broader
          const qualifies =
            s < 0.35
              ? p.wet && (p.region === 'se' || p.region === 'fl' || p.region === 'nc')
              : s < 0.7
                ? p.wet || p.region === 'se' || p.region === 'fl'
                : p.wet || p.region === 'se' || p.region === 'fl' || p.region === 'w' || p.region === 'nc'
          active = qualifies && hash(p.id, 11) < 0.2 + t * 0.8
          dim = !qualifies
          moveT = 0
          break
        }
        case 'map-course': {
          const nearCourse = d < 50 + s * 80
          active = nearCourse && hash(p.id, 12) < 0.12 + t * 0.88
          dim = !nearCourse
          moveT = active ? 0.15 + t * 0.55 : 0
          break
        }
        case 'map-national':
        case 'map-pyl': {
          // nationwide; intensity = how many engage
          active = hash(p.id, 13) < 0.08 + t * 0.75
          dim = !active && hash(p.id, 14) > 0.5
          // high intensity: slight pull toward brand pin
          moveT = active && mode.stageKind === 'map-pyl' ? t * 0.35 : active ? t * 0.12 : 0
          break
        }
        case 'map-convert': {
          // people who "have points" = subset; intensity unlock pulls them to brand
          const hasPoints = hash(p.id, 15) < 0.55
          active = hasPoints && hash(p.id, 16) < 0.1 + t * 0.85
          dim = !hasPoints
          moveT = active ? 0.3 + t * 0.65 : 0
          break
        }
        default:
          active = hash(p.id, 17) < t
      }

      const x = p.homeX + (pin.x - p.homeX) * moveT
      const y = p.homeY + (pin.y - p.homeY) * moveT

      const favorite =
        !!mode.showFavorite && active && (mode.id === 'sweep' || mode.id === 'pyl' || mode.id === 'cohort'
          ? hash(p.id, 20) < 0.35 + t * 0.5
          : hash(p.id, 21) < 0.4)

      const hand = !!mode.showHands && active && hash(p.id, 22) < 0.55 + t * 0.3

      return { ...p, x, y, active, dim, favorite, hand, moveT, inRadius: d < radius }
    })
  }, [people, intensity, scope, mode, pin.x, pin.y])

  const activeCount = rendered.filter((p) => p.active).length
  const radiusPx = 40 + (scope / 100) * 140
  const showRadius = mode.stageKind === 'map-event' || mode.stageKind === 'map-course'

  // Weather wash regions
  const showRain = mode.stageKind === 'map-weather'

  return (
    <div className="relative w-full rounded-xl border border-[#2a3347] bg-[#080b10] overflow-hidden">
      <svg viewBox="0 0 1000 620" className="w-full h-auto block" role="img" aria-label="United States map with golfers">
        <defs>
          <radialGradient id="pinGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8DC54A" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#8DC54A" stopOpacity="0" />
          </radialGradient>
          <filter id="soft">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {/* ocean */}
        <rect width="1000" height="620" fill="#080b10" />

        <UsMapOutline />

        {/* Great Lakes hint */}
        <ellipse cx="640" cy="180" rx="28" ry="16" fill="#0a1018" stroke="#1e2633" strokeWidth="1" opacity="0.8" />
        <ellipse cx="680" cy="170" rx="18" ry="12" fill="#0a1018" stroke="#1e2633" strokeWidth="1" opacity="0.8" />

        {/* Rain / condition zones */}
        {showRain && (
          <g opacity={0.35 + (scope / 100) * 0.35}>
            <ellipse cx="740" cy="420" rx={90 + scope * 0.5} ry={70 + scope * 0.35} fill="#1e4a6e" filter="url(#soft)" />
            <ellipse cx="130" cy="170" rx={50 + scope * 0.25} ry={40 + scope * 0.2} fill="#1e4a6e" filter="url(#soft)" />
            <text x="700" y="400" fill="#7eb8e0" fontSize="11" fontFamily="ui-monospace, monospace">
              RAIN / WIND
            </text>
          </g>
        )}

        {/* Radius ring for geo / course */}
        {showRadius && (
          <circle
            cx={pin.x}
            cy={pin.y}
            r={radiusPx}
            fill="rgba(141,197,74,0.06)"
            stroke="#8DC54A"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            opacity={0.7}
            style={{ transition: 'r 0.35s ease' }}
          />
        )}

        {/* Soft pin glow */}
        <circle cx={pin.x} cy={pin.y} r={50 + intensity * 0.3} fill="url(#pinGlow)" />

        {/* Movement trails for active movers */}
        {rendered
          .filter((p) => p.active && p.moveT > 0.1)
          .map((p) => (
            <line
              key={`t-${p.id}`}
              x1={p.homeX}
              y1={p.homeY}
              x2={p.x}
              y2={p.y}
              stroke="#8DC54A"
              strokeWidth="1"
              opacity={0.15 + p.moveT * 0.25}
            />
          ))}

        {/* People */}
        {rendered.map((p) => (
          <PersonGlyph
            key={p.id}
            x={p.x}
            y={p.y}
            active={p.active}
            dim={p.dim}
            favorite={p.favorite}
            hand={p.hand}
            moving={p.moveT > 0.15}
          />
        ))}

        {/* Pin marker */}
        <g transform={`translate(${pin.x}, ${pin.y})`}>
          <circle r={10} fill="#041208" stroke="#8DC54A" strokeWidth="2.5" />
          <circle r={4} fill="#8DC54A" />
          {/* teardrop stem */}
          <path d="M 0 10 L -6 22 L 6 22 Z" fill="#8DC54A" opacity="0.9" />
        </g>

        {/* Pin label */}
        <g transform={`translate(${pin.x}, ${pin.y + 36})`}>
          <rect
            x={-54}
            y={-10}
            width={108}
            height={20}
            rx={6}
            fill="#0a0d12"
            stroke="#2a3347"
            strokeWidth="1"
          />
          <text
            textAnchor="middle"
            y={4}
            fill="#8DC54A"
            fontSize="10"
            fontFamily="ui-monospace, monospace"
            fontWeight="600"
          >
            {(mode.pinLabel ?? pin.label).slice(0, 18)}
          </text>
        </g>

        {/* PYL feed card */}
        {mode.stageKind === 'map-pyl' && intensity > 35 && (
          <g transform="translate(720, 80)">
            <rect width="220" height="72" rx="10" fill="#12161e" stroke="#8DC54A" strokeWidth="1.5" opacity="0.95" />
            <text x="14" y="22" fill="#8DC54A" fontSize="10" fontFamily="ui-monospace, monospace">
              SOCIAL FEED
            </text>
            <text x="14" y="40" fill="#FAFAFA" fontSize="12" fontFamily="system-ui, sans-serif">
              Someone won your prize
            </text>
            <text x="14" y="58" fill="#9ca3af" fontSize="11" fontFamily="system-ui, sans-serif">
              → Spin · View product
            </text>
          </g>
        )}

        {/* Legend */}
        <g transform="translate(24, 560)">
          <circle cx={0} cy={0} r={4} fill="#8DC54A" />
          <text x={10} y={4} fill="#9ca3af" fontSize="11" fontFamily="ui-monospace, monospace">
            Active golfer
          </text>
          <circle cx={110} cy={0} r={4} fill="#3a4558" />
          <text x={120} y={4} fill="#9ca3af" fontSize="11" fontFamily="ui-monospace, monospace">
            Not in play
          </text>
          {mode.showHands && (
            <>
              <circle cx={230} cy={-2} r={3} fill="#B9E08A" />
              <text x={240} y={4} fill="#9ca3af" fontSize="11" fontFamily="ui-monospace, monospace">
                Hand up
              </text>
            </>
          )}
          {mode.showFavorite && (
            <text x={320} y={4} fill="#8DC54A" fontSize="11" fontFamily="ui-monospace, monospace">
              ★ Favorited your product
            </text>
          )}
        </g>

        <text x="24" y="36" fill="#4b5563" fontSize="11" fontFamily="ui-monospace, monospace">
          {activeCount} golfers responding · illustrative map
        </text>
      </svg>
    </div>
  )
}
