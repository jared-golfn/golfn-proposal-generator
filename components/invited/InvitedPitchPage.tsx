'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Users, Globe, TrendingUp } from 'lucide-react'
import { invitedClubs, roundCourses, stateRounds } from '@/lib/invited-data'

declare global { interface Window { L: any } }

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
      roundCourses.forEach((course) => {
        const jLa = (Math.random() - 0.5) * 0.08
        const jLn = (Math.random() - 0.5) * 0.08
        const rad = Math.min(Math.max(course.r * 0.12, 3), 12)
        const circle = L.circleMarker([course.la + jLa, course.ln + jLn], {
          radius: rad, fillColor: '#60a5fa', fillOpacity: 0.55,
          color: '#93c5fd', weight: 0.5, opacity: 0.7,
        })
        circle.bindPopup(
          `<div style="font-family:system-ui;font-size:13px;line-height:1.5;min-width:180px">
            <div style="font-weight:700;color:#fff;margin-bottom:4px">${course.n}</div>
            <div style="color:#9ca3af">${course.c}, ${course.s}</div>
            <div style="margin-top:8px;padding-top:8px;border-top:1px solid #2a3347">
              <span style="color:#60a5fa;font-weight:700;font-family:monospace;font-size:16px">${course.r}</span>
              <span style="color:#6b7280;margin-left:4px">rounds (12mo)</span>
            </div>
          </div>`, { className: 'invited-popup', closeButton: false }
        )
        rg.addLayer(circle)
      })
      rg.addTo(map)
    }

    const invIcon = L.icon({
      iconUrl: 'https://cdn.sanity.io/images/e3wja34v/production/f7163ce097e461801f9e5da9c9f1f00e8aa57eec-512x512.png',
      iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -16],
    })

    invitedClubs.forEach((club) => {
      const sr = stateRounds[club.s] || 0
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
            <span style="color:#6b7280;margin-left:4px">total GolfN rounds in ${club.s}</span>
          </div>
          <div style="margin-top:2px">
            <span style="color:#fff;font-weight:600;font-family:monospace">${club.su.toLocaleString()}</span>
            <span style="color:#6b7280;margin-left:4px">active GolfN users in ${club.s}</span>
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
          }`}>All GolfN Activity</button>
        <button onClick={() => setFilter('invited-only')}
          className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
            filter === 'invited-only' ? 'bg-[#00ff9d] text-[#0f1217] font-bold' : 'bg-[#1a1f2e]/90 text-[#9ca3af] border border-[#2a3347] hover:text-white'
          }`}>Invited Clubs Only</button>
      </div>
      <div className="absolute bottom-6 left-4 z-[1000] bg-[#0f1217]/90 border border-[#2a3347] rounded-xl px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="https://cdn.sanity.io/images/e3wja34v/production/f7163ce097e461801f9e5da9c9f1f00e8aa57eec-512x512.png" alt="" className="w-5 h-5" />
            <span className="text-xs text-[#9ca3af]">Invited Clubs</span>
          </div>
          {filter === 'all' && (
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#60a5fa] opacity-70" />
              <span className="text-xs text-[#9ca3af]">GolfN Rounds</span>
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

  return (
    <div className="min-h-screen bg-[#0f1217] text-white">
      <section className="pt-12 md:pt-20 pb-10 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Fade>
            <div className="flex items-center gap-5 mb-10">
              <img src="https://cdn.sanity.io/images/e3wja34v/production/979509db5eef4af2f790a5d1f5df0ffe11dc5599-2673x1399.jpg"
                alt="Invited Clubs" className="h-10 md:h-14 w-auto object-contain" />
              <div className="w-px h-10 bg-[#2a3347]" />
              <svg viewBox="0 0 120 32" className="h-7 md:h-9 w-auto" fill="none">
                <text x="0" y="26" fontFamily="system-ui" fontWeight="800" fontSize="28" fill="white" letterSpacing="-1">Golf</text>
                <text x="58" y="26" fontFamily="system-ui" fontWeight="800" fontSize="28" fill="#00ff9d" letterSpacing="-1">N</text>
              </svg>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-5">
              Your members are<br /><span className="text-[#00ff9d]">already using us.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-8 mb-10">
              GolfN users have logged rounds at 41 Invited Club properties in the last 12 months. But the bigger story is the thousands of verified golfers playing rounds near every one of your 113 clubs.
            </p>
          </Fade>
          <Fade delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard value="245" label="rounds at Invited properties" accent />
              <StatCard value="41" label="Invited clubs with GolfN activity" accent />
              <StatCard value="27,000+" label="total US rounds logged (12mo)" />
              <StatCard value="59%" label="of GolfN users are under 35" accent />
            </div>
          </Fade>
        </div>
      </section>

      <section className="py-10 md:py-16">
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
              Each Invited club icon marks one of your 113 properties. The blue dots are GolfN rounds logged at courses across the US. Click any marker to see the data.
            </p>
          </Fade>
          <Fade delay={0.1}><InteractiveMap /></Fade>
          <Fade delay={0.2}>
            <div className="mt-8 bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-6 md:p-8">
              <p className="text-base md:text-lg text-[#d1d5db] leading-8">
                Toggle to <span className="text-white font-semibold">&ldquo;Invited Clubs Only&rdquo;</span> and you see your footprint. Toggle back to <span className="text-white font-semibold">&ldquo;All GolfN Activity&rdquo;</span> and you see the golfers playing around your properties that you have <span className="text-[#00ff9d] font-semibold">zero visibility into today</span>.
              </p>
            </div>
          </Fade>
        </div>
      </section>

      <section className="py-10 md:py-16">
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

      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Fade>
            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-5 h-5 text-[#00ff9d]" />
              <p className="text-sm font-mono text-[#00ff9d] uppercase tracking-[0.2em]">The Platform</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.05] tracking-tight mb-8">
              Verified golfers.<br /><span className="text-[#00ff9d]">Not scraped email lists.</span>
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard value="107,000+" label="registered golfers" />
              <StatCard value="57" label="countries" />
              <StatCard value="75x" label="app opens per month, per user" accent />
              <StatCard value="500+" label="new users per day" />
            </div>
          </Fade>
          <Fade delay={0.2}>
            <div className="mt-8 bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-[#00ff9d] shrink-0 mt-1" />
                <div>
                  <p className="text-base md:text-lg text-[#d1d5db] leading-8 mb-4">
                    <span className="text-white font-semibold">59% of GolfN users are 35 or younger.</span> Your average member age is 59. We have the next generation of private club members — verified, active golfers who have logged rounds, tracked scores, and demonstrated purchasing behavior inside our app.
                  </p>
                  <p className="text-sm text-[#6b7280] leading-7">
                    Over a third of rounds logged on GolfN are at private, semi-private, or resort courses. These are not budget golfers. They are your future members.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <Fade>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-6">
              The overlap is not theoretical.
            </h2>
            <p className="text-lg md:text-xl text-[#9ca3af] max-w-2xl mx-auto mb-4 leading-8">
              245 rounds. 41 clubs. 27,000+ rounds in your markets. And the numbers are growing — we added 6,200+ users last week alone.
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

      <footer className="py-8 border-t border-[#2a3347]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs text-[#4b5563]">
            Prepared for Invited Clubs leadership · April 2026 · Data from GolfN platform analytics
          </p>
        </div>
      </footer>
    </div>
  )
}
