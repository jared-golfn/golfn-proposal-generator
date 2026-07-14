'use client'

import { useEffect, useMemo, useRef } from 'react'
import Map, { Marker, Source, Layer, NavigationControl, type MapRef } from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import type { LabMode } from './types'
import {
  GOLFER_SEEDS,
  PINS,
  hash,
  milesBetween,
  circlePolygon,
} from './golferData'

type Props = {
  mode: LabMode
  intensity: number
  scope: number
}

// Free dark basemap (no API key)
const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'

export function LabStageMap({ mode, intensity, scope }: Props) {
  const mapRef = useRef<MapRef>(null)
  const pin = PINS[mode.pinKey ?? 'national']
  const t = intensity / 100
  const s = scope / 100

  const radiusMiles =
    mode.stageKind === 'map-event'
      ? 25 + s * 175
      : mode.stageKind === 'map-course'
        ? 8 + s * 45
        : 0

  const golfers = useMemo(() => {
    return GOLFER_SEEDS.map((g, i) => {
      const id = i
      const d = milesBetween(g.lng, g.lat, pin.lng, pin.lat)
      let active = false
      let outOfPlay = false

      switch (mode.stageKind) {
        case 'map-event': {
          const inRadius = d <= radiusMiles
          outOfPlay = !inRadius
          active = inRadius && hash(id, 10) < 0.12 + t * 0.88
          break
        }
        case 'map-course': {
          const near = d <= radiusMiles
          outOfPlay = !near
          active = near && hash(id, 11) < 0.1 + t * 0.9
          break
        }
        case 'map-weather': {
          const isWet = Boolean(g.wet)
          const dayOf =
            isWet && (g.region === 'fl' || g.region === 'se' || g.region === 'nc')
          const week =
            dayOf ||
            isWet ||
            g.region === 'se' ||
            g.region === 'fl' ||
            g.region === 'nc'
          const broad = week || g.region === 'w' || isWet
          const qualifies: boolean = s < 0.34 ? dayOf : s < 0.7 ? week : broad
          outOfPlay = !qualifies
          active = qualifies && hash(id, 12) < 0.15 + t * 0.85
          break
        }
        case 'map-national':
        case 'map-pyl': {
          active = hash(id, 13) < 0.08 + t * 0.78
          outOfPlay = !active && hash(id, 14) > 0.55
          break
        }
        case 'map-convert': {
          const hasPoints = hash(id, 15) < 0.58
          outOfPlay = !hasPoints
          active = hasPoints && hash(id, 16) < 0.1 + t * 0.88
          break
        }
        default:
          active = hash(id, 17) < t
      }

      const favorite =
        !!mode.showFavorite &&
        active &&
        hash(id, 20) < 0.3 + t * 0.55

      const hand = !!mode.showHands && active && hash(id, 21) < 0.5 + t * 0.35

      // Pull toward pin when activated (event / convert / pyl network)
      let lng = g.lng
      let lat = g.lat
      if (active && (mode.stageKind === 'map-event' || mode.stageKind === 'map-convert')) {
        const pull = 0.15 + t * 0.55
        lng = g.lng + (pin.lng - g.lng) * pull * 0.35
        lat = g.lat + (pin.lat - g.lat) * pull * 0.35
      }

      return { ...g, id, active, outOfPlay, favorite, hand, lng, lat, d }
    })
  }, [mode, t, s, pin.lng, pin.lat, radiusMiles])

  const activeCount = golfers.filter((g) => g.active).length

  const radiusGeo = useMemo(() => {
    if (!radiusMiles) return null
    return {
      type: 'FeatureCollection' as const,
      features: [circlePolygon(pin.lng, pin.lat, radiusMiles)],
    }
  }, [pin.lng, pin.lat, radiusMiles])

  // Fly camera when pin / mode changes
  useEffect(() => {
    const map = mapRef.current
    if (!map) return
    map.flyTo({
      center: [pin.lng, pin.lat],
      zoom: pin.zoom,
      duration: 900,
      essential: true,
    })
  }, [mode.id, pin.lng, pin.lat, pin.zoom])

  return (
    <div className="relative w-full rounded-xl border border-[#2a3347] overflow-hidden bg-[#0b0f14]">
      <div className="h-[min(52vh,480px)] w-full min-h-[320px]">
        <Map
          ref={mapRef}
          initialViewState={{
            longitude: pin.lng,
            latitude: pin.lat,
            zoom: pin.zoom,
          }}
          mapStyle={MAP_STYLE}
          attributionControl={false}
          style={{ width: '100%', height: '100%' }}
          reuseMaps
        >
          <NavigationControl position="top-right" showCompass={false} />

          {radiusGeo && (
            <Source id="radius" type="geojson" data={radiusGeo}>
              <Layer
                id="radius-fill"
                type="fill"
                paint={{
                  'fill-color': '#8DC54A',
                  'fill-opacity': 0.1,
                }}
              />
              <Layer
                id="radius-line"
                type="line"
                paint={{
                  'line-color': '#8DC54A',
                  'line-width': 2,
                  'line-opacity': 0.65,
                  'line-dasharray': [2, 1.5],
                }}
              />
            </Source>
          )}

          {/* Brand / event pin */}
          <Marker longitude={pin.lng} latitude={pin.lat} anchor="bottom">
            <div className="flex flex-col items-center pointer-events-none">
              <div className="px-2 py-1 rounded-md bg-[#0a0d12]/95 border border-[#8DC54A]/50 text-[10px] font-mono text-[#8DC54A] whitespace-nowrap mb-1 shadow-lg">
                {mode.pinLabel ?? pin.label}
              </div>
              <div className="relative">
                <div className="absolute inset-0 -m-3 rounded-full bg-[#8DC54A]/25 animate-ping" />
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#8DC54A] to-[#17A455] border-2 border-[#041208] shadow-[0_0_16px_rgba(141,197,74,0.6)]" />
              </div>
            </div>
          </Marker>

          {/* Golfers */}
          {golfers.map((g) => {
            if (g.outOfPlay && !g.active) {
              return (
                <Marker key={g.id} longitude={g.lng} latitude={g.lat} anchor="center">
                  <div
                    className="w-2 h-2 rounded-full bg-[#3a4558] opacity-40"
                    title={g.city}
                  />
                </Marker>
              )
            }
            return (
              <Marker key={g.id} longitude={g.lng} latitude={g.lat} anchor="center">
                <div
                  className="relative flex flex-col items-center transition-all duration-500"
                  style={{
                    opacity: g.active ? 1 : 0.35,
                    transform: g.active ? 'scale(1)' : 'scale(0.75)',
                  }}
                  title={`${g.city}${g.active ? ' · active' : ''}`}
                >
                  {g.hand && g.active && (
                    <span className="absolute -top-3 text-[10px] leading-none">✋</span>
                  )}
                  {g.favorite && g.active && (
                    <span className="absolute -top-3 -right-2 text-[9px] text-[#8DC54A] leading-none">
                      ★
                    </span>
                  )}
                  <div
                    className={`w-3.5 h-3.5 rounded-full border-2 shadow-md ${
                      g.active
                        ? 'bg-[#8DC54A] border-[#041208] shadow-[0_0_10px_rgba(141,197,74,0.7)]'
                        : 'bg-[#4b5563] border-[#1a1f2e]'
                    }`}
                  />
                  {g.active && (
                    <span className="mt-0.5 text-[8px] font-mono text-[#9ca3af] whitespace-nowrap max-w-[64px] truncate">
                      {g.city}
                    </span>
                  )}
                </div>
              </Marker>
            )
          })}
        </Map>
      </div>

      {/* Overlay chrome */}
      <div className="absolute top-3 left-3 flex flex-col gap-2 pointer-events-none">
        <div className="rounded-lg bg-[#0a0d12]/90 border border-[#2a3347] px-3 py-2 text-[11px] font-mono text-[#9ca3af] shadow-lg">
          <span className="text-[#8DC54A] font-semibold tabular-nums">{activeCount}</span>
          {' '}golfers responding
          {radiusMiles > 0 && (
            <span className="text-[#6b7280]"> · {Math.round(radiusMiles)} mi radius</span>
          )}
        </div>
        {mode.stageKind === 'map-pyl' && intensity > 35 && (
          <div className="rounded-lg bg-[#0a0d12]/95 border border-[#8DC54A]/40 px-3 py-2 text-[11px] shadow-lg max-w-[220px]">
            <div className="font-mono text-[#8DC54A] text-[10px] uppercase tracking-wider mb-1">
              Social feed
            </div>
            <div className="text-white text-xs">Someone won your prize</div>
            <div className="text-[#9ca3af] text-[10px] mt-0.5">→ Jump into spin · View product</div>
          </div>
        )}
      </div>

      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-3 pointer-events-none">
        <div className="rounded-md bg-[#0a0d12]/85 border border-[#2a3347] px-2 py-1 text-[10px] font-mono text-[#9ca3af] flex items-center gap-3">
          <span className="inline-flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#8DC54A]" /> Active
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#3a4558]" /> Out of play
          </span>
          {mode.showHands && <span>✋ Hand up</span>}
          {mode.showFavorite && <span className="text-[#8DC54A]">★ Favorited</span>}
        </div>
        <div className="text-[9px] font-mono text-[#4b5563] ml-auto self-end">
          MapLibre · illustrative population
        </div>
      </div>
    </div>
  )
}
