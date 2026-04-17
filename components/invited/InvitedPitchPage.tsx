'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Users, Globe, TrendingUp, ShoppingBag, Rocket, Smartphone, Target, Gift, Eye, Zap, Flag } from 'lucide-react'
import { invitedClubs, coursePins, userLocations, stateRounds, stateMap, equipmentBrands, homeCourseTypes } from '@/lib/invited-data'

declare global { interface Window { L: any } }

const GOLFN_LOGO = 'https://cdn.sanity.io/images/e3wja34v/production/3bcfd9b87d10769072b59ff0fe7cbefe7d36286e-3594x860.png'
const INVITED_LOGO = 'https://cdn.sanity.io/images/e3wja34v/production/979509db5eef4af2f790a5d1f5df0ffe11dc5599-2673x1399.jpg'
const INVITED_ICON = 'https://cdn.sanity.io/images/e3wja34v/production/f7163ce097e461801f9e5da9c9f1f00e8aa57eec-512x512.png'

// Verified app screenshots from lib/images.ts (Sanity CDN)
const APP_SCREENS = {
  offCourse: 'https://cdn.sanity.io/images/e3wja34v/production/9f201313469c4cc0362d686a174246ba51e688c5-750x1624.png',
  dailyGrind: 'https://cdn.sanity.io/images/e3wja34v/production/b2bc4cf588faf556017e1fb0b83505c1c50ee602-1500x3248.png',
  marketplace: 'https://cdn.sanity.io/images/e3wja34v/production/e604b64cd4ce527750267b9c795f44363ed9d816-2364x5120.png',
  pointExchange: 'https://cdn.sanity.io/images/e3wja34v/production/50e76b526bb2c7ba2808fc22ec9c532cf9cabfc8-750x3802.png',
}

// Verified campaign creative examples from lib/images.ts
const CAMPAIGN_EXAMPLES = {
  cobraSweeps: 'https://cdn.sanity.io/images/e3wja34v/production/144c9c147afe0f7b4123c22bac1f3f33cdb6c581-2064x2736.png',
  labPointsExchange: 'https://cdn.sanity.io/images/e3wja34v/production/7bf965f5c6ddd349ae2218d198771e824daf07c8-6034x2754.png',
  emailIntentFollowUp: 'https://cdn.sanity.io/images/e3wja34v/production/51d6a3937f93961fe3d32bab6b0dc74e690d5abf-2400x9616.png',
  inAppMsg1: 'https://cdn.sanity.io/images/e3wja34v/production/70e9eb2eb28c428a2c23b054fc08ccc547209a28-1500x2724.png',
}

const partnerLogos = [
  { name: 'L.A.B. Golf', url: 'https://www.golfn.com/LAB.png', h: 28 },
  { name: 'Cobra Puma Golf', url: 'https://www.golfn.com/cobra.webp', h: 28 },
  { name: 'Bettinardi', url: 'https://www.golfn.com/bettinardi.webp', h: 28 },
  { name: 'Finn', url: 'https://cdn.sanity.io/images/e3wja34v/production/e325118a1a6270a4e7887a895cbf469cd211d40b-131x55.svg', h: 32 },
]

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>)
}

function PctRing({ pct, label, color = '#00ff9d', size = 120 }: { pct: number; label: string; color?: string; size?: number }) {
  const r = (size - 12) / 2, circ = 2 * Math.PI * r, offset = circ - (pct / 100) * circ
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90"><circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#1a1f2e" strokeWidth="8" /><circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth="8" strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round" style={{ transition: 'stroke-dashoffset 1s ease-out' }} /></svg>
        <div className="absolute inset-0 flex items-center justify-center"><span className="text-2xl md:text-3xl font-mono font-bold text-white">{pct}%</span></div>
      </div>
      <span className="text-xs md:text-sm text-[#9ca3af] text-center max-w-[120px]">{label}</span>
    </div>
  )
}

function AreaChart({ weekly, title, color, gradId }: { weekly: number[]; title: string; color: string; gradId: string }) {
  const cumulative: number[] = []; weekly.reduce((a, v) => { const c = a + v; cumulative.push(c); return c }, 0)
  const labels = ['Jan','','','','Feb','','','','Mar','','','','','Apr','','']
  const max = Math.ceil(cumulative[cumulative.length - 1] / 5000) * 5000
  const W = 800, H = 280, PL = 55, PR = 30, PT = 25, PB = 38
  const cw = W - PL - PR, ch = H - PT - PB
  const pts = cumulative.map((v, i) => ({ x: PL + (i / (cumulative.length - 1)) * cw, y: PT + ch - (v / max) * ch }))
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')
  const area = line + ` L${pts[pts.length-1].x},${PT+ch} L${pts[0].x},${PT+ch} Z`
  const tickStep = max <= 25000 ? 5000 : 10000
  const yTicks: number[] = []; for (let t = 0; t <= max; t += tickStep) yTicks.push(t)
  const finalVal = cumulative[cumulative.length - 1]
  const finalLabel = finalVal >= 1000 ? (finalVal / 1000).toFixed(1).replace(/\.0$/, '') + 'k' : finalVal.toString()
  return (
    <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-5 md:p-6">
      <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.2em] mb-1">{title}</p>
      <p className="text-2xl md:text-3xl font-mono font-bold mb-3" style={{ color }}>{finalLabel}</p>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: 280 }}>
        <defs><linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={color} stopOpacity="0.25" /><stop offset="100%" stopColor={color} stopOpacity="0.02" /></linearGradient></defs>
        {yTicks.map(t => { const y = PT + ch - (t / max) * ch; return (<g key={t}><line x1={PL} y1={y} x2={W-PR} y2={y} stroke="#2a3347" strokeWidth="1" /><text x={PL-8} y={y+4} textAnchor="end" fill="#4b5563" fontSize="10" fontFamily="monospace">{(t/1000).toFixed(0)}k</text></g>) })}
        <path d={area} fill={`url(#${gradId})`} />
        <path d={line} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {pts.filter((_, i) => i === 0 || i === pts.length - 1).map((p, idx) => (<circle key={idx} cx={p.x} cy={p.y} r="4" fill={color} stroke="#0f1217" strokeWidth="2" />))}
        {labels.map((l, i) => l ? (<text key={i} x={PL + (i / (labels.length - 1)) * cw} y={H - 6} textAnchor="middle" fill="#4b5563" fontSize="11" fontFamily="monospace">{l}</text>) : null)}
      </svg>
    </div>
  )
}

function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null), mapInstance = useRef<any>(null), [loaded, setLoaded] = useState(false), [filter, setFilter] = useState<'all' | 'invited-only'>('all')
  useEffect(() => {
    if (mapInstance.current) return
    const link = document.createElement('link'); link.rel='stylesheet'; link.href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'; document.head.appendChild(link)
    const script = document.createElement('script'); script.src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    script.onload = () => { if (!mapRef.current||mapInstance.current) return; const L=window.L; const map=L.map(mapRef.current,{center:[37.5,-96],zoom:4,zoomControl:true,attributionControl:false,scrollWheelZoom:true,minZoom:3,maxZoom:14}); L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{subdomains:'abcd'}).addTo(map); mapInstance.current=map; setLoaded(true) }
    document.head.appendChild(script)
    return () => { if (mapInstance.current) { mapInstance.current.remove(); mapInstance.current=null } }
  }, [])
  useEffect(() => {
    if (!loaded||!mapInstance.current) return; const L=window.L,map=mapInstance.current
    map.eachLayer((l:any)=>{if(!(l instanceof L.TileLayer))map.removeLayer(l)})
    if (filter==='all') { const rg=L.layerGroup(),mx=Math.max(...coursePins.map(p=>p.r)); coursePins.forEach(pin=>{const i=Math.log(pin.r+1)/Math.log(mx+1);L.circleMarker([pin.la,pin.ln],{radius:1.8+i*3.5,fillColor:'#60a5fa',fillOpacity:0.35+i*0.5,color:'#93c5fd',weight:pin.r>=10?0.5:0.2,opacity:0.3+i*0.4}).addTo(rg)}); rg.addTo(map) }
    const ic=L.divIcon({html:`<div style="width:40px;height:40px;border-radius:50%;border:2.5px solid #00ff9d;background:#0f1217;display:flex;align-items:center;justify-content:center;box-shadow:0 0 12px rgba(0,255,157,0.4)"><img src="${INVITED_ICON}" style="width:28px;height:28px;border-radius:50%"/></div>`,iconSize:[40,40],iconAnchor:[20,20],popupAnchor:[0,-22],className:''})
    invitedClubs.forEach(club=>{const fs=stateMap[club.s]||club.s,sr=stateRounds[fs]||0,mk=L.marker([club.la,club.ln],{icon:ic,zIndexOffset:1000}); const rH=club.h?`<div style="margin-top:6px"><span style="color:#00ff9d;font-weight:700;font-family:monospace;font-size:16px">${club.r}</span><span style="color:#6b7280;margin-left:4px">rounds</span></div><div style="margin-top:2px"><span style="color:#fff;font-weight:600;font-family:monospace">${club.u}</span><span style="color:#6b7280;margin-left:4px">unique users</span></div>`:`<div style="margin-top:6px;color:#4b5563;font-style:italic">No rounds logged yet</div>`; mk.bindPopup(`<div style="font-family:system-ui;font-size:13px;line-height:1.5;min-width:220px"><div style="font-weight:700;color:#00ff9d;font-size:14px;margin-bottom:2px">${club.n}</div><div style="color:#9ca3af">${club.c}, ${club.s}</div><div style="margin-top:8px;padding-top:8px;border-top:1px solid #2a3347">${rH}</div><div style="margin-top:8px;padding-top:8px;border-top:1px solid #2a3347"><span style="color:#60a5fa;font-weight:700;font-family:monospace;font-size:16px">${sr.toLocaleString()}</span><span style="color:#6b7280;margin-left:4px">GolfN rounds in ${fs}</span></div></div>`,{className:'invited-popup',closeButton:false}); mk.addTo(map) })
  }, [loaded, filter])
  return (
    <div className="relative">
      <div className="absolute top-4 right-4 z-[1000] flex gap-2">
        <button onClick={()=>setFilter('all')} className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${filter==='all'?'bg-[#00ff9d] text-[#0f1217] font-bold':'bg-[#1a1f2e]/90 text-[#9ca3af] border border-[#2a3347] hover:text-white'}`}>Rounds Played</button>
        <button onClick={()=>setFilter('invited-only')} className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${filter==='invited-only'?'bg-[#00ff9d] text-[#0f1217] font-bold':'bg-[#1a1f2e]/90 text-[#9ca3af] border border-[#2a3347] hover:text-white'}`}>Invited Clubs Only</button>
      </div>
      <div className="absolute bottom-6 left-4 z-[1000] bg-[#0f1217]/90 border border-[#2a3347] rounded-xl px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full border-2 border-[#00ff9d] flex items-center justify-center" style={{boxShadow:'0 0 8px rgba(0,255,157,0.4)'}}><img src={INVITED_ICON} alt="" className="w-3.5 h-3.5 rounded-full"/></div><span className="text-xs text-[#9ca3af]">Invited Clubs (113)</span></div>
          {filter==='all'&&(<div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#60a5fa] opacity-70"/><span className="text-xs text-[#9ca3af]">Courses with GolfN Rounds ({coursePins.length.toLocaleString()})</span></div>)}
        </div>
      </div>
      <div ref={mapRef} className="w-full rounded-2xl border border-[#2a3347] overflow-hidden" style={{height:'70vh',minHeight:500,background:'#0f1217'}}/>
      <style jsx global>{`.invited-popup .leaflet-popup-content-wrapper{background:#1a1f2e;border:1px solid #2a3347;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,.5)}.invited-popup .leaflet-popup-tip{background:#1a1f2e;border:1px solid #2a3347}.leaflet-control-zoom a{background:#1a1f2e!important;color:#9ca3af!important;border-color:#2a3347!important}.leaflet-control-zoom a:hover{background:#2a3347!important;color:#fff!important}`}</style>
    </div>
  )
}

export default function InvitedPitchPage() {
  const userWeekly = [1624,1339,1048,1844,1358,1813,3140,3576,2590,2905,3177,3916,3629,3905,6301,3467]
  const roundWeekly = [708,703,621,599,582,703,824,999,1149,1219,1560,1915,2329,2512,3557,1608]
  const marketData = [
    {state:'California',abbr:'CA',clubs:12,rounds:3280,users:1215},{state:'Texas',abbr:'TX',clubs:21,rounds:2310,users:1374},
    {state:'Florida',abbr:'FL',clubs:11,rounds:2307,users:867},{state:'Illinois',abbr:'IL',clubs:3,rounds:985,users:1189},
    {state:'Indiana',abbr:'IN',clubs:1,rounds:905,users:643},{state:'Ohio',abbr:'OH',clubs:3,rounds:882,users:843},
    {state:'North Carolina',abbr:'NC',clubs:8,rounds:709,users:745},{state:'Georgia',abbr:'GA',clubs:12,rounds:719,users:726},
    {state:'Colorado',abbr:'CO',clubs:2,rounds:699,users:462},{state:'Virginia',abbr:'VA',clubs:5,rounds:592,users:501},
    {state:'Tennessee',abbr:'TN',clubs:2,rounds:583,users:752},{state:'South Carolina',abbr:'SC',clubs:3,rounds:595,users:342},
  ]
  const maxRounds = Math.max(...marketData.map(m=>m.rounds)), totalRounds = marketData.reduce((s,m)=>s+m.rounds,0), totalUsers = marketData.reduce((s,m)=>s+m.users,0), totalClubs = new Set(marketData.map(m=>m.abbr)).size
  const brandShare = [{brand:'TaylorMade',pct:26},{brand:'Callaway',pct:20,highlight:true},{brand:'Titleist',pct:15},{brand:'Ping',pct:9},{brand:'Cobra',pct:8},{brand:'Cleveland',pct:7},{brand:'Mizuno',pct:5},{brand:'Others',pct:10}]
  const shopCategories = [{cat:'Clubs & Equipment',pct:64,icon:'\u26F3'},{cat:'Golf Balls',pct:16,icon:'\u26BE'},{cat:'Bags & Accessories',pct:8,icon:'\uD83C\uDFD2'},{cat:'Apparel, Shoes & Gloves',pct:5,icon:'\uD83D\uDC5F'},{cat:'Training & Tech',pct:4,icon:'\uD83D\uDCF1'},{cat:'Golf Carts',pct:3,icon:'\uD83D\uDE97'}]
  const mktBrands = ['Miura','Srixon','L.A.B. Golf','Cobra','Cleveland','Bettinardi','Puma','Jones','Stewart','Hyperice','Oakley','Holderness & Bourne']

  const platformFeatures = [
    { title: 'GPS Round Tracking', desc: 'Full GPS round tracking with shot data, scoring, and performance analytics. Every round builds the user profile.', Icon: Flag },
    { title: 'Rewards Marketplace', desc: 'Points earned from rounds and engagement are redeemable for premium gear from brand partners like Callaway, TaylorMade, Cobra, and more.', Icon: Gift },
    { title: 'Campaigns & Sweepstakes', desc: 'Brand-sponsored sweepstakes, Learn & Earn education modules, and targeted offers drive deep engagement with partner products.', Icon: Target },
    { title: 'Behavioral Intelligence', desc: 'Every interaction writes to the user profile — what they play, what they browse, what they buy. AI scoring segments users by intent and spend potential.', Icon: Eye },
  ]

  const partnershipOpps = [
    { title: 'Closed-Loop Rewards', desc: 'Members earn GolfN points for activity at Invited clubs — rounds played, F&B spend, pro shop purchases. Points convert to credits within your ecosystem, driving repeat visits and on-site spending.', Icon: Gift },
    { title: 'Member Acquisition Engine', desc: 'Incentivize club tours, practice rounds, and trial visits with bonus points. Pay-for-performance model — you only pay when a prospect actually shows up. Target by geography, age, and equipment profile.', Icon: Target },
    { title: 'Out-of-Club Behavior Data', desc: 'See what your members do when they leave the property. Where they play, what they spend on, which brands they engage with. Data you currently have zero visibility into.', Icon: Eye },
    { title: 'Filtered Marketplace', desc: 'GolfN can restrict visible offers and point redemptions to align with your existing brand partnerships — like your Callaway exclusivity. A tailored experience that reinforces your ecosystem.', Icon: Zap },
  ]

  return (
    <div className="min-h-screen bg-[#0f1217] text-white">
      <div className="fixed inset-0 pointer-events-none" style={{zIndex:0}}><div className="absolute inset-0 opacity-[0.07]" style={{background:'radial-gradient(ellipse 60% 50% at 15% 50%, #001a14, transparent)'}}/><div className="absolute inset-0 opacity-[0.04]" style={{background:'radial-gradient(ellipse 40% 40% at 85% 30%, #00ff9d, transparent)'}}/></div>

      {/* HERO */}
      <section className="relative pt-12 md:pt-20 pb-10 md:pb-16" style={{zIndex:1}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}} className="flex items-center justify-between mb-12 md:mb-20 gap-4">
            <img src={GOLFN_LOGO} alt="GolfN" className="h-10 md:h-14 w-auto shrink-0"/>
            <div className="flex items-center gap-2 md:gap-3 shrink-0"><span className="text-[#6b7280] text-sm md:text-base hidden sm:inline">Prepared for</span><img src={INVITED_LOGO} alt="Invited Clubs" className="h-8 md:h-12 w-auto object-contain"/></div>
          </motion.div>
          <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.9,ease:[0.22,1,0.36,1]}} className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-[0.95] tracking-tight mb-6">Your members are<br/><span className="text-[#00ff9d]">already using us.</span></motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.5,duration:0.7}} className="text-lg md:text-2xl text-[#9ca3af] max-w-4xl leading-relaxed mb-8">271 verified rounds at 49 Invited properties in 2026. 50,000+ rounds tracked across 5,200+ US courses — growing by 4,000+ users per week. 59% under 35. We have the next generation of your members — and the data to prove it.</motion.p>
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.7}} className="mb-8">
            <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.2em] mb-4">Current Partners</p>
            <div className="flex items-center gap-6 md:gap-8 flex-wrap">{partnerLogos.map(l=>(<img key={l.name} src={l.url} alt={l.name} className="w-auto object-contain" style={{filter:'brightness(0) invert(1)',opacity:0.5,height:l.h}}/>))}<span className="text-sm font-mono text-[#4b5563]">& more</span></div>
          </motion.div>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.0}} className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-6 md:gap-8 lg:gap-12">
            {[{value:'107,000+',label:'Registered Golfers'},{value:'59%',label:'Under 35'},{value:'75x',label:'Monthly App Opens'},{value:'57',label:'Countries'},{value:'4,000+',label:'Rounds / Week'}].map(kpi=>(
              <div key={kpi.label}><span className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono text-[#00ff9d]">{kpi.value}</span><span className="block mt-1 text-base text-[#6b7280]">{kpi.label}</span></div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT IS GOLFN */}
      <section className="relative py-10 md:py-16" style={{zIndex:1}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Fade>
            <div className="flex items-center gap-3 mb-3"><Smartphone className="w-5 h-5 text-[#00ff9d]"/><p className="text-sm font-mono text-[#00ff9d] uppercase tracking-[0.2em]">The Platform</p></div>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-3">Credit card rewards<br/><span className="text-[#00ff9d]">for golf.</span></h2>
            <p className="text-base md:text-lg text-[#9ca3af] max-w-3xl mb-10 leading-7">GolfN is a rewards app where golfers earn points and tickets by playing rounds, completing challenges, and engaging with the platform. Points are redeemable for premium gear from brand partners. It{'\u2019'}s why users open the app 75 times a month — not 4.</p>
          </Fade>

          {/* App screenshots */}
          <Fade delay={0.05}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
              {[
                { src: APP_SCREENS.offCourse, label: 'GPS Round Tracking' },
                { src: APP_SCREENS.dailyGrind, label: 'Daily Grind' },
                { src: APP_SCREENS.marketplace, label: 'Rewards Marketplace' },
                { src: APP_SCREENS.pointExchange, label: 'Points Exchange' },
              ].map(screen => (
                <div key={screen.label} className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-3 md:p-4 overflow-hidden">
                  <div className="rounded-xl overflow-hidden mb-3 bg-[#0f1217]">
                    <img src={screen.src} alt={screen.label} className="w-full h-auto block" style={{ maxHeight: 320, objectFit: 'cover', objectPosition: 'top center' }} />
                  </div>
                  <p className="text-xs md:text-sm text-[#9ca3af] text-center font-medium">{screen.label}</p>
                </div>
              ))}
            </div>
          </Fade>

          {/* Platform capabilities */}
          <Fade delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {platformFeatures.map(f => (
                <div key={f.title} className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-5 md:p-6 hover:border-[#00ff9d]/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center shrink-0 mt-0.5"><f.Icon className="w-5 h-5 text-[#00ff9d]" /></div>
                    <div><h3 className="text-base md:text-lg font-bold text-white mb-1">{f.title}</h3><p className="text-sm text-[#9ca3af] leading-6">{f.desc}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </Fade>

          <Fade delay={0.15}>
            <div className="mt-6 bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-6 md:p-8">
              <p className="text-base md:text-lg text-[#d1d5db] leading-8">This is not another GPS app. GolfN is a <span className="text-[#00ff9d] font-semibold">rewards and engagement platform</span> that brands pay to access because the audience is verified, active, and spending. Revenue from brand partnerships and optional memberships ($25-$900/mo) hit <span className="text-white font-semibold">$100K/month</span> and growing.</p>
            </div>
          </Fade>
        </div>
      </section>

      {/* GROWTH */}
      <section className="relative py-10 md:py-16" style={{zIndex:1}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Fade>
            <div className="flex items-center gap-3 mb-3"><Rocket className="w-5 h-5 text-[#00ff9d]"/><p className="text-sm font-mono text-[#00ff9d] uppercase tracking-[0.2em]">The Growth</p></div>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-3">Hockey stick.<br/><span className="text-[#00ff9d]">Both sides.</span></h2>
            <p className="text-base text-[#9ca3af] max-w-2xl mb-8">Users and rounds are both accelerating. 45,000+ new golfers and 21,000+ rounds played in 2026 — with the curve steepening every week.</p>
          </Fade>
          <Fade delay={0.1}><div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"><AreaChart weekly={userWeekly} title="Cumulative new users — 2026" color="#00ff9d" gradId="ugrd" /><AreaChart weekly={roundWeekly} title="Cumulative rounds played — 2026" color="#60a5fa" gradId="rgrd" /></div></Fade>
          <Fade delay={0.15}><div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-6">
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-4 text-center"><p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d]">45.6K</p><p className="text-xs text-[#6b7280] mt-1">new users in 2026</p></div>
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-4 text-center"><p className="text-2xl md:text-3xl font-mono font-bold text-[#60a5fa]">21.6K</p><p className="text-xs text-[#6b7280] mt-1">rounds in 2026</p></div>
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-4 text-center"><p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d]">6,301</p><p className="text-xs text-[#6b7280] mt-1">best week — users</p></div>
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-4 text-center"><p className="text-2xl md:text-3xl font-mono font-bold text-[#60a5fa]">3,557</p><p className="text-xs text-[#6b7280] mt-1">Avg. Rounds / Week</p></div>
          </div></Fade>
        </div>
      </section>

      {/* MAP */}
      <section className="relative py-10 md:py-16" style={{zIndex:1}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Fade><div className="flex items-center gap-3 mb-3"><MapPin className="w-5 h-5 text-[#00ff9d]"/><p className="text-sm font-mono text-[#00ff9d] uppercase tracking-[0.2em]">The Overlap</p></div><h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-3">Your clubs.<br/><span className="text-[#00ff9d]">Our golfers.</span></h2><p className="text-base md:text-lg text-[#9ca3af] max-w-2xl mb-8 leading-7">Each Invited icon marks one of your 113 properties. Every blue dot is a real course where GolfN users have played rounds — {coursePins.length.toLocaleString()} courses, 50,000+ rounds tracked.</p></Fade>
          <Fade delay={0.1}><InteractiveMap /></Fade>
          <Fade delay={0.2}><div className="mt-8 bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-6 md:p-8"><p className="text-base md:text-lg text-[#d1d5db] leading-8">Toggle to <span className="text-white font-semibold">&ldquo;Invited Clubs Only&rdquo;</span> and you see your footprint. Toggle back to <span className="text-white font-semibold">&ldquo;Rounds Played&rdquo;</span> and you see {coursePins.length.toLocaleString()} real courses where GolfN users are actively playing — courses around your properties that you have <span className="text-[#00ff9d] font-semibold">zero visibility into today</span>.</p></div></Fade>
        </div>
      </section>

      {/* WHO THEY ARE */}
      <section className="relative py-10 md:py-16" style={{zIndex:1}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Fade><div className="flex items-center gap-3 mb-3"><Users className="w-5 h-5 text-[#00ff9d]"/><p className="text-sm font-mono text-[#00ff9d] uppercase tracking-[0.2em]">Who They Are</p></div><h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-3">Premium golfers.<br/><span className="text-[#00ff9d]">Full picture.</span></h2><p className="text-base text-[#9ca3af] max-w-2xl mb-8">Not just what clubs they carry — what they buy, where they play, and what brands they engage with inside the app.</p></Fade>
          <Fade delay={0.05}><div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-6 md:p-8 mb-6"><p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.2em] mb-8">User Demographics</p><div className="flex flex-wrap justify-around gap-8"><PctRing pct={59} label="Under 35" color="#00ff9d"/><PctRing pct={37} label="Premium course members" color="#00ff9d"/><PctRing pct={97} label="Male" color="#60a5fa"/><PctRing pct={20} label="Callaway in bag" color="#00ff9d"/></div></div></Fade>
          <Fade delay={0.1}><div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-6 md:p-8 mb-6"><p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.2em] mb-6">Brand share — what{'\u2019'}s in their bags</p><div className="space-y-3">{brandShare.map(b=>(<div key={b.brand} className="flex items-center gap-3 md:gap-4"><span className="text-sm text-white font-medium w-28 md:w-32 shrink-0">{b.brand}</span><div className="flex-1 h-3 rounded-full bg-[#0f1217] overflow-hidden"><div className="h-full rounded-full" style={{width:`${(b.pct/brandShare[0].pct)*100}%`,background:b.highlight?'linear-gradient(90deg, #00ff9d, #17A455)':'linear-gradient(90deg, #60a5fa, #3b82f6)'}}/></div><span className={`text-sm font-mono font-bold w-10 text-right shrink-0 ${b.highlight?'text-[#00ff9d]':'text-white'}`}>{b.pct}%</span></div>))}</div></div></Fade>
          <Fade delay={0.15}><div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-6 md:p-8 mb-6"><p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.2em] mb-6">What they{'\u2019'}re shopping for in the GolfN marketplace</p><div className="grid grid-cols-2 md:grid-cols-3 gap-4">{shopCategories.map(c=>(<div key={c.cat} className="bg-[#0f1217] rounded-xl p-4 md:p-5"><div className="flex items-center justify-between mb-3"><span className="text-2xl">{c.icon}</span><span className="text-2xl md:text-3xl font-mono font-bold text-[#60a5fa]">{c.pct}%</span></div><p className="text-xs md:text-sm text-[#9ca3af]">{c.cat}</p><div className="mt-2 h-1.5 rounded-full bg-[#1a1f2e] overflow-hidden"><div className="h-full rounded-full bg-[#60a5fa]" style={{width:`${c.pct}%`}}/></div></div>))}</div></div></Fade>
          <Fade delay={0.2}><div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-6 md:p-8"><p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.2em] mb-4">Brands they engage with in the GolfN marketplace</p><div className="flex flex-wrap gap-2">{mktBrands.map(b=>(<span key={b} className="px-3 py-1.5 rounded-lg bg-[#1a1f2e] border border-[#2a3347] text-sm text-[#d1d5db] font-medium">{b}</span>))}</div><p className="mt-4 text-sm text-[#9ca3af]">Active golfers browsing, comparing, and redeeming rewards for premium products. Directly addressable through targeted campaigns, push notifications, and in-app placements.</p></div></Fade>
        </div>
      </section>

      {/* STATE BREAKDOWN */}
      <section className="relative py-10 md:py-16" style={{zIndex:1}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Fade><div className="flex items-center gap-3 mb-3"><TrendingUp className="w-5 h-5 text-[#00ff9d]"/><p className="text-sm font-mono text-[#00ff9d] uppercase tracking-[0.2em]">Your Markets</p></div><h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-3">Everywhere you<br/><span className="text-[#00ff9d]">operate.</span></h2><p className="text-base text-[#9ca3af] max-w-2xl mb-6">GolfN activity across every state where Invited has properties.</p></Fade>
          <Fade delay={0.05}><div className="grid grid-cols-3 gap-4 md:gap-6 mb-8"><div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-5 md:p-6 text-center"><p className="text-3xl md:text-4xl font-mono font-bold text-[#00ff9d]">{totalRounds.toLocaleString()}</p><p className="text-xs md:text-sm text-[#6b7280] mt-1">rounds in these markets</p></div><div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-5 md:p-6 text-center"><p className="text-3xl md:text-4xl font-mono font-bold text-[#60a5fa]">{totalUsers.toLocaleString()}</p><p className="text-xs md:text-sm text-[#6b7280] mt-1">active users in these states</p></div><div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-5 md:p-6 text-center"><p className="text-3xl md:text-4xl font-mono font-bold text-white">{totalClubs}</p><p className="text-xs md:text-sm text-[#6b7280] mt-1">states with Invited clubs</p></div></div></Fade>
          <Fade delay={0.1}><div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-6 md:p-8"><div className="flex items-center justify-between mb-6"><p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.2em]">Rounds by state (last 30 days)</p><p className="text-xs font-mono text-[#4b5563]">Invited clubs shown right</p></div><div className="space-y-4">{marketData.map((m,i)=>{const pct=(m.rounds/maxRounds)*100;return(<div key={m.state}><div className="flex items-center gap-3 md:gap-4 mb-1.5"><span className="text-xs font-mono text-[#4b5563] w-5 shrink-0">{i+1}</span><span className="text-sm md:text-base text-white font-semibold w-28 md:w-36 shrink-0">{m.state}</span><div className="flex-1 h-3 rounded-full bg-[#0f1217] overflow-hidden"><div className="h-full rounded-full" style={{width:`${pct}%`,background:'linear-gradient(90deg, #60a5fa, #3b82f6)'}}/></div><span className="text-sm md:text-base font-mono font-bold text-[#60a5fa] w-14 text-right shrink-0">{m.rounds.toLocaleString()}</span><span className="text-xs font-mono text-[#4b5563] w-16 text-right shrink-0 hidden sm:block">{m.clubs} club{m.clubs!==1?'s':''}</span></div><div className="pl-8 md:pl-9"><span className="text-xs text-[#6b7280]">{m.users.toLocaleString()} active users</span></div></div>)})}</div></div></Fade>
        </div>
      </section>

      {/* WHAT THIS LOOKS LIKE FOR INVITED */}
      <section className="relative py-10 md:py-16" style={{zIndex:1}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Fade>
            <div className="flex items-center gap-3 mb-3"><Zap className="w-5 h-5 text-[#00ff9d]"/><p className="text-sm font-mono text-[#00ff9d] uppercase tracking-[0.2em]">The Opportunity</p></div>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-3">What this looks like<br/><span className="text-[#00ff9d]">for Invited.</span></h2>
            <p className="text-base md:text-lg text-[#9ca3af] max-w-3xl mb-10 leading-7">GolfN isn{'\u2019'}t a media buy. It{'\u2019'}s an engagement and data engine that plugs into your membership ecosystem. Here{'\u2019'}s what a partnership could look like.</p>
          </Fade>

          <Fade delay={0.05}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-8">
              {partnershipOpps.map(opp => (
                <div key={opp.title} className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-6 md:p-7 hover:border-[#00ff9d]/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center shrink-0 mt-0.5"><opp.Icon className="w-5 h-5 text-[#00ff9d]" /></div>
                    <div><h3 className="text-lg font-bold text-white mb-2">{opp.title}</h3><p className="text-sm md:text-base text-[#9ca3af] leading-7">{opp.desc}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </Fade>

          <Fade delay={0.1}>
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-6 md:p-8 mb-6">
              <p className="text-xs font-mono text-[#4b5563] uppercase tracking-[0.2em] mb-6">How GolfN campaigns work with brand partners today</p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-3">
                {[
                  { num: 1, title: 'Launch', desc: 'Sweepstakes or promotional campaign creates awareness and captures first wave of engagement.' },
                  { num: 2, title: 'Capture Intent', desc: 'Every interaction writes to the user profile. Real behavioral signal, not guesswork.' },
                  { num: 3, title: 'Build Cohort', desc: 'AI-powered modeling identifies who is responding and builds a qualified audience.' },
                  { num: 4, title: 'Activate', desc: 'Follow-up offers, education, commerce, and progression experiences convert interest to action.' },
                  { num: 5, title: 'Optimize', desc: 'Monthly reporting with audience intelligence. Scale what works.' },
                ].map(step => (
                  <div key={step.num} className="flex md:flex-col items-start md:items-center gap-3 md:gap-2 text-center">
                    <div className="w-8 h-8 rounded-full bg-[#00ff9d] text-[#0f1217] flex items-center justify-center text-sm font-bold shrink-0">{step.num}</div>
                    <div className="md:text-center"><h4 className="text-sm font-bold text-white">{step.title}</h4><p className="text-xs text-[#6b7280] leading-5 mt-1">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </Fade>

          <Fade delay={0.15}>
            <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-6 md:p-8">
              <p className="text-base md:text-lg text-[#d1d5db] leading-8">The model is <span className="text-[#00ff9d] font-semibold">pay-for-performance</span>. No upfront media commitment. If a campaign drives 10x points for attending a demo day at one of your clubs and nobody shows up, you don{'\u2019'}t pay. We{'\u2019'}re aligned on outcomes — not impressions.</p>
            </div>
          </Fade>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24" style={{zIndex:1}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <Fade>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-6">The overlap is not theoretical.</h2>
            <p className="text-lg md:text-xl text-[#9ca3af] max-w-2xl mx-auto mb-4 leading-8">271 rounds at 49 of your clubs in 2026. 50,000+ rounds across 5,200+ courses. And the numbers are growing — 4,000+ new users every week.</p>
            <p className="text-xl md:text-2xl text-[#d1d5db] font-medium mb-10">Happy to walk through the data on a call.</p>
            <a href="mailto:jared@golfn.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00ff9d] text-[#0f1217] font-bold text-lg hover:bg-[#00ff9d]/90 transition-colors">Get in Touch <ArrowRight className="w-5 h-5"/></a>
          </Fade>
        </div>
      </section>

      <footer className="relative py-8 border-t border-[#2a3347]" style={{zIndex:1}}><div className="max-w-7xl mx-auto px-6 md:px-12 text-center"><p className="text-xs text-[#4b5563]">Prepared for Invited Clubs leadership &middot; April 2026 &middot; Data from GolfN platform analytics</p></div></footer>
    </div>
  )
}
