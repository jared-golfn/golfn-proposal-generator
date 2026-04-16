'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Users, Globe, TrendingUp, ShoppingBag } from 'lucide-react'
import { invitedClubs, userLocations, stateRounds, stateMap, equipmentBrands, homeCourseTypes } from '@/lib/invited-data'

declare global { interface Window { L: any } }

const GOLFN_LOGO = 'https://cdn.sanity.io/images/e3wja34v/production/3bcfd9b87d10769072b59ff0fe7cbefe7d36286e-3594x860.png'
const INVITED_LOGO = 'https://cdn.sanity.io/images/e3wja34v/production/979509db5eef4af2f790a5d1f5df0ffe11dc5599-2673x1399.jpg'
const INVITED_ICON = 'https://cdn.sanity.io/images/e3wja34v/production/f7163ce097e461801f9e5da9c9f1f00e8aa57eec-512x512.png'

const partnerLogos = [
  { name: 'L.A.B. Golf', url: 'https://www.golfn.com/LAB.png', h: 28 },
  { name: 'Cobra Puma Golf', url: 'https://www.golfn.com/cobra.webp', h: 28 },
  { name: 'Bettinardi', url: 'https://www.golfn.com/bettinardi.webp', h: 28 },
  { name: 'Finn', url: 'https://cdn.sanity.io/images/e3wja34v/production/e325118a1a6270a4e7887a895cbf469cd211d40b-131x55.svg', h: 32 },
]

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

function StatCard({ value, label, accent = false }: { value: string; label: string; accent?: boolean }) {
  return (
    <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-6 md:p-8 text-center">
      <p className={`text-3xl md:text-4xl font-mono font-bold mb-2 ${accent ? 'text-[#00ff9d]' : 'text-white'}`}>{value}</p>
      <p className="text-sm text-[#6b7280]">{label}</p>
    </div>
  )
}

function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<any>(null)
  const [loaded, setLoaded] = useState(false)
  const [filter, setFilter] = useState<'all' | 'invited-only'>('all')

  useEffect(() => {
    if (mapInstance.current) return
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(link)
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    script.onload = () => {
      if (!mapRef.current || mapInstance.current) return
      const L = window.L
      const map = L.map(mapRef.current, {
        center: [37.5, -96], zoom: 4, zoomControl: true,
        attributionControl: false, scrollWheelZoom: true, minZoom: 3, maxZoom: 14,
      })
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { subdomains: 'abcd' }).addTo(map)
      mapInstance.current = map
      setLoaded(true)
    }
    document.head.appendChild(script)
    return () => { if (mapInstance.current) { mapInstance.current.remove(); mapInstance.current = null } }
  }, [])

  useEffect(() => {
    if (!loaded || !mapInstance.current) return
    const L = window.L
    const map = mapInstance.current
    map.eachLayer((layer: any) => { if (!(layer instanceof L.TileLayer)) map.removeLayer(layer) })

    if (filter === 'all') {
      const rg = L.layerGroup()
      userLocations.forEach((loc) => {
        const jLa = (Math.random() - 0.5) * 0.15
        const jLn = (Math.random() - 0.5) * 0.15
        const rad = Math.min(Math.max(Math.sqrt(loc.users) * 0.6, 3), 18)
        const circle = L.circleMarker([loc.la + jLa, loc.ln + jLn], {
          radius: rad, fillColor: '#60a5fa', fillOpacity: 0.5,
          color: '#93c5fd', weight: 0.5, opacity: 0.6,
        })
        circle.bindPopup(
          `<div style="font-family:system-ui;font-size:13px;line-height:1.5;min-width:180px">
            <div style="font-weight:700;color:#fff;margin-bottom:4px">${loc.c}, ${loc.s}</div>
            <div style="margin-top:8px;padding-top:8px;border-top:1px solid #2a3347">
              <span style="color:#60a5fa;font-weight:700;font-family:monospace;font-size:16px">${loc.users.toLocaleString()}</span>
              <span style="color:#6b7280;margin-left:4px">active GolfN users</span>
            </div>
          </div>`, { className: 'invited-popup', closeButton: false }
        )
        rg.addLayer(circle)
      })
      rg.addTo(map)
    }

    const invIcon = L.icon({
      iconUrl: INVITED_ICON,
      iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -16],
    })

    invitedClubs.forEach((club) => {
      const fullState = stateMap[club.s] || club.s
      const sr = stateRounds[fullState] || 0
      const marker = L.marker([club.la, club.ln], { icon: invIcon, zIndexOffset: 1000 })
      const rHtml = club.h
        ? `<div style="margin-top:6px">
            <span style="color:#00ff9d;font-weight:700;font-family:monospace;font-size:16px">${club.r}</span>
            <span style="color:#6b7280;margin-left:4px">GolfN rounds at this club</span>
          </div>
          <div style="margin-top:2px">
            <span style="color:#fff;font-weight:600;font-family:monospace">${club.u}</span>
            <span style="color:#6b7280;margin-left:4px">unique GolfN users</span>
          </div>`
        : `<div style="margin-top:6px;color:#4b5563;font-style:italic">No GolfN rounds logged yet</div>`
      marker.bindPopup(
        `<div style="font-family:system-ui;font-size:13px;line-height:1.5;min-width:220px">
          <div style="font-weight:700;color:#00ff9d;font-size:14px;margin-bottom:2px">${club.n}</div>
          <div style="color:#9ca3af">${club.c}, ${club.s}</div>
          <div style="margin-top:8px;padding-top:8px;border-top:1px solid #2a3347">
            <div style="color:#6b7280;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px">Invited Club</div>
            ${rHtml}
          </div>
          <div style="margin-top:8px;padding-top:8px;border-top:1px solid #2a3347">
            <span style="color:#60a5fa;font-weight:700;font-family:monospace;font-size:16px">${sr.toLocaleString()}</span>
            <span style="color:#6b7280;margin-left:4px">total GolfN rounds in ${fullState}</span>
          </div>
          <div style="margin-top:2px">
            <span style="color:#fff;font-weight:600;font-family:monospace">${club.su.toLocaleString()}</span>
            <span style="color:#6b7280;margin-left:4px">active GolfN users in state</span>
          </div>
        </div>`, { className: 'invited-popup', closeButton: false }
      )
      marker.addTo(map)
    })
  }, [loaded, filter])

  return (
    <div className="relative">
      <div className="absolute top-4 right-4 z-[1000] flex gap-2">
        <button onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
            filter === 'all' ? 'bg-[#00ff9d] text-[#0f1217] font-bold' : 'bg-[#1a1f2e]/90 text-[#9ca3af] border border-[#2a3347] hover:text-white'
          }`}>All GolfN Users</button>
        <button onClick={() => setFilter('invited-only')}
          className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
            filter === 'invited-only' ? 'bg-[#00ff9d] text-[#0f1217] font-bold' : 'bg-[#1a1f2e]/90 text-[#9ca3af] border border-[#2a3347] hover:text-white'
          }`}>Invited Clubs Only</button>
      </div>
      <div className="absolute bottom-6 left-4 z-[1000] bg-[#0f1217]/90 border border-[#2a3347] rounded-xl px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={INVITED_ICON} alt="" className="w-5 h-5" />
            <span className="text-xs text-[#9ca3af]">Invited Clubs (113)</span>
          </div>
          {filter === 'all' && (
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#60a5fa] opacity-70" />
              <span className="text-xs text-[#9ca3af]">GolfN Users</span>
            </div>
          )}
        </div>
      </div>
      <div ref={mapRef} className="w-full rounded-2xl border border-[#2a3347] overflow-hidden"
        style={{ height: '70vh', minHeight: 500, background: '#0f1217' }} />
      <style jsx global>{`
        .invited-popup .leaflet-popup-content-wrapper{background:#1a1f2e;border:1px solid #2a3347;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,.5)}
        .invited-popup .leaflet-popup-tip{background:#1a1f2e;border:1px solid #2a3347}
        .leaflet-control-zoom a{background:#1a1f2e!important;color:#9ca3af!important;border-color:#2a3347!important}
        .leaflet-control-zoom a:hover{background:#2a3347!important;color:#fff!important}
      `}</style>
    </div>
  )
}

export default function InvitedPitchPage() {
  const topStates = [
    { state: 'Texas', clubs: 21, rounds: 2310, users: 1374 },
    { state: 'California', clubs: 12, rounds: 3280, users: 1215 },
    { state: 'Florida', clubs: 11, rounds: 2307, users: 867 },
    { state: 'Georgia', clubs: 12, rounds: 719, users: 726 },
    { state: 'Illinois', clubs: 3, rounds: 985, users: 1189 },
    { state: 'North Carolina', clubs: 8, rounds: 709, users: 745 },
  ]
  const premiumPct = Math.round((homeCourseTypes.private + homeCourseTypes.semiPrivate + homeCourseTypes.resort) / (homeCourseTypes.public + homeCourseTypes.semiPrivate + homeCourseTypes.private + homeCourseTypes.resort + homeCourseTypes.military) * 100)

  return (
    <div className="min-h-screen bg-[#0f1217] text-white">
      {/* Subtle background glow */}
      <div className="fixed inset-0 pointer-events-none" style={{zIndex:0}}>
        <div className="absolute inset-0 opacity-[0.07]" style={{ background: 'radial-gradient(ellipse 60% 50% at 15% 50%, #001a14, transparent)' }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ background: 'radial-gradient(ellipse 40% 40% at 85% 30%, #00ff9d, transparent)' }} />
      </div>

      {/* HERO */}
      <section className="relative pt-12 md:pt-20 pb-10 md:pb-16" style={{zIndex:1}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
            className="flex items-center justify-between mb-12 md:mb-20 gap-4">
            <img src={GOLFN_LOGO} alt="GolfN" className="h-10 md:h-14 w-auto shrink-0" />
            <div className="flex items-center gap-2 md:gap-3 shrink-0">
              <span className="text-[#6b7280] text-sm md:text-base hidden sm:inline">Prepared for</span>
              <img src={INVITED_LOGO} alt="Invited Clubs" className="h-8 md:h-12 w-auto object-contain" />
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-[0.95] tracking-tight mb-6">
            Your members are<br /><span className="text-[#00ff9d]">already using us.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-lg md:text-2xl text-[#9ca3af] max-w-4xl leading-relaxed mb-8">
            245 verified rounds at 41 Invited properties. 27,000+ rounds in your markets. 1,278 users with Callaway in their bag. 59% under 35. We have the next generation of your members — and the data to prove it.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }} className="mb-8">
            <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.2em] mb-4">Current Partners</p>
            <div className="flex items-center gap-6 md:gap-8 flex-wrap">
              {partnerLogos.map((logo) => (
                <img key={logo.name} src={logo.url} alt={logo.name} className="w-auto object-contain"
                  style={{ filter: 'brightness(0) invert(1)', opacity: 0.5, height: logo.h }} />
              ))}
              <span className="text-sm font-mono text-[#4b5563]">& more</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-6 md:gap-8 lg:gap-12">
            {[
              { value: '107,000+', label: 'Registered Golfers' },
              { value: '59%', label: 'Under 35' },
              { value: '75x', label: 'Monthly App Opens' },
              { value: '57', label: 'Countries' },
              { value: '500+', label: 'New Users / Day' },
            ].map((kpi) => (
              <div key={kpi.label}>
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono text-[#00ff9d]">{kpi.value}</span>
                <span className="block mt-1 text-base text-[#6b7280]">{kpi.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MAP */}
      <section className="relative py-10 md:py-16" style={{zIndex:1}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Fade>
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-[#00ff9d]" />
              <p className="text-sm font-mono text-[#00ff9d] uppercase tracking-[0.2em]">The Overlap</p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-3">
              Your clubs.<br /><span className="text-[#00ff9d]">Our golfers.</span>
            </h2>
            <p className="text-base md:text-lg text-[#9ca3af] max-w-2xl mb-8 leading-7">
              Each Invited icon marks one of your 113 properties. The blue dots are active GolfN users in 129 US cities. Click any marker to see the data.
            </p>
          </Fade>
          <Fade delay={0.1}><InteractiveMap /></Fade>
          <Fade delay={0.2}>
            <div className="mt-8 bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-6 md:p-8">
              <p className="text-base md:text-lg text-[#d1d5db] leading-8">
                Toggle to <span className="text-white font-semibold">&ldquo;Invited Clubs Only&rdquo;</span> and you see your footprint. Toggle back to <span className="text-white font-semibold">&ldquo;All GolfN Users&rdquo;</span> and you see the verified golfers living around your properties that you have <span className="text-[#00ff9d] font-semibold">zero visibility into today</span>.
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* WHO THEY ARE */}
      <section className="relative py-10 md:py-16" style={{zIndex:1}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Fade>
            <div className="flex items-center gap-3 mb-3">
              <ShoppingBag className="w-5 h-5 text-[#00ff9d]" />
              <p className="text-sm font-mono text-[#00ff9d] uppercase tracking-[0.2em]">Who They Are</p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-3">
              Premium equipment.<br /><span className="text-[#00ff9d]">Premium golfers.</span>
            </h2>
            <p className="text-base text-[#9ca3af] max-w-2xl mb-8">
              These are not casual golfers. They log their equipment, track their handicap, and play at private clubs. Here is what is in their bags.
            </p>
          </Fade>

          {/* Equipment brands */}
          <Fade delay={0.1}>
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-6 md:p-8 mb-6">
              <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.2em] mb-6">Equipment brands in user bags (unique users, April 2026)</p>
              <div className="space-y-3">
                {equipmentBrands.slice(0, 8).map((b, i) => {
                  const maxU = equipmentBrands[0].users
                  const pct = (b.users / maxU) * 100
                  return (
                    <div key={b.brand} className="flex items-center gap-4">
                      <span className="text-sm text-white font-medium w-32 md:w-40 shrink-0">{b.brand}</span>
                      <div className="flex-1 h-2.5 rounded-full bg-[#0f1217] overflow-hidden">
                        <div className="h-full rounded-full" style={{
                          width: `${pct}%`,
                          background: b.brand === 'Callaway' ? 'linear-gradient(90deg, #00ff9d, #17A455)' : 'linear-gradient(90deg, #60a5fa, #3b82f6)'
                        }} />
                      </div>
                      <span className={`text-sm font-mono font-bold w-16 text-right shrink-0 ${b.brand === 'Callaway' ? 'text-[#00ff9d]' : 'text-white'}`}>
                        {b.users.toLocaleString()}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </Fade>

          {/* Callaway callout + home course types */}
          <Fade delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-6 md:p-8">
                <p className="text-4xl md:text-5xl font-mono font-bold text-[#00ff9d] mb-2">1,278</p>
                <p className="text-lg text-white font-medium mb-3">users with Callaway in their bag</p>
                <p className="text-sm text-[#9ca3af] leading-7">
                  Current-gen equipment: Paradym Ai Smoke, Elyte, Jaws Raw, Opus. These are serious golfers buying premium. Directly relevant to your Callaway relationship.
                </p>
              </div>
              <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-6 md:p-8">
                <p className="text-4xl md:text-5xl font-mono font-bold text-[#00ff9d] mb-2">{premiumPct}%</p>
                <p className="text-lg text-white font-medium mb-3">play at premium courses</p>
                <div className="space-y-2 mt-4">
                  <div className="flex justify-between text-sm"><span className="text-[#9ca3af]">Private club members</span><span className="text-white font-mono">{homeCourseTypes.private.toLocaleString()}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-[#9ca3af]">Semi-private</span><span className="text-white font-mono">{homeCourseTypes.semiPrivate.toLocaleString()}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-[#9ca3af]">Resort</span><span className="text-white font-mono">{homeCourseTypes.resort.toLocaleString()}</span></div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* STATE BREAKDOWN */}
      <section className="relative py-10 md:py-16" style={{zIndex:1}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Fade>
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-[#00ff9d]" />
              <p className="text-sm font-mono text-[#00ff9d] uppercase tracking-[0.2em]">The Numbers</p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-3">
              Activity in your<br /><span className="text-[#00ff9d]">top markets.</span>
            </h2>
            <p className="text-base text-[#9ca3af] max-w-2xl mb-8">
              GolfN rounds played in the last 12 months in states where Invited operates — not just at your clubs, but at every course nearby.
            </p>
          </Fade>
          <Fade delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topStates.map((s) => (
                <div key={s.state} className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">{s.state}</h3>
                    <span className="text-xs font-mono text-[#4b5563] bg-[#0f1217] px-2 py-1 rounded-md">{s.clubs} clubs</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-3xl font-mono font-bold text-[#60a5fa]">{s.rounds.toLocaleString()}</p>
                      <p className="text-xs text-[#6b7280]">total GolfN rounds in state</p>
                    </div>
                    <div>
                      <p className="text-xl font-mono font-bold text-[#00ff9d]">{s.users.toLocaleString()}</p>
                      <p className="text-xs text-[#6b7280]">active GolfN users (Apr 2026)</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24" style={{zIndex:1}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <Fade>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-6">
              The overlap is not theoretical.
            </h2>
            <p className="text-lg md:text-xl text-[#9ca3af] max-w-2xl mx-auto mb-4 leading-8">
              245 rounds. 41 clubs. 27,000+ rounds in your markets. 1,278 Callaway users. And the numbers are growing — we added 6,200+ users last week alone.
            </p>
            <p className="text-xl md:text-2xl text-[#d1d5db] font-medium mb-10">
              Happy to walk through the data on a call.
            </p>
            <a href="mailto:jared@golfn.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00ff9d] text-[#0f1217] font-bold text-lg hover:bg-[#00ff9d]/90 transition-colors">
              Get in Touch <ArrowRight className="w-5 h-5" />
            </a>
          </Fade>
        </div>
      </section>

      <footer className="relative py-8 border-t border-[#2a3347]" style={{zIndex:1}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs text-[#4b5563]">
            Prepared for Invited Clubs leadership &middot; April 2026 &middot; Data from GolfN platform analytics
          </p>
        </div>
      </footer>
    </div>
  )
}
