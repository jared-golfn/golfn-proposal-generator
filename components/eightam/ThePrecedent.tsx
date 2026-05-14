'use client'

import { motion } from 'framer-motion'

interface LineageItem {
  number: string
  year: string
  industry: string
  obsession: string
  stat: string
  isGolfN?: boolean
}

const lineage: LineageItem[] = [
  {
    number: '01',
    year: '1981',
    industry: 'Airline Miles',
    obsession: 'The original consumer-behavior modification program. Status tiers. Award charts. Mileage runs to keep elite status.',
    stat: '44 years of psychological lock-in',
  },
  {
    number: '02',
    year: '1991',
    industry: 'Credit Card Points',
    obsession: 'Where rewards became an investable asset class. People restructure their entire spending around points.',
    stat: 'Chase Sapphire. Amex Platinum.',
  },
  {
    number: '03',
    year: '2009',
    industry: 'Starbucks Rewards',
    obsession: 'The blueprint for daily-app rewards loops. Customers open the app even when ordering in store.',
    stat: '34M+ active members',
  },
  {
    number: '04',
    year: '2025',
    industry: 'GolfN',
    obsession: 'The first time this pattern has existed in golf. Same hook. New category.',
    stat: '75 logins/user/month',
    isGolfN: true,
  },
]

export function ThePrecedent() {
  return (
    <section className="py-16 md:py-24 border-t border-[#2a3347]/40" id="precedent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20 max-w-5xl"
        >
          <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-6">The Precedent</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            The behavior is <span className="text-gradient">familiar.</span><br />
            The category is new.
          </h2>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-8">
            What GolfN is doing is what credit cards, airlines, and coffee chains have been doing for decades — converting daily consumer behavior into obsessive loyalty through rewards. That kind of obsession has never existed in golf. Until now.
          </p>
        </motion.div>

        {/* LINEAGE GRID */}
        <div className="grid md:grid-cols-4 gap-4 md:gap-3 mb-12 md:mb-14">
          {lineage.map((item, i) => (
            <motion.div
              key={item.industry}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl p-6 md:p-7 flex flex-col overflow-hidden ${
                item.isGolfN
                  ? 'bg-gradient-to-br from-[#001a14] to-[#002a1f] border border-[#00ff9d]/40'
                  : 'bg-[#1a1f2e] border border-[#2a3347]'
              }`}
            >
              {/* Faint background number */}
              <div
                aria-hidden
                className={`absolute -top-4 -right-2 text-7xl md:text-8xl font-bold font-mono leading-none select-none pointer-events-none ${
                  item.isGolfN ? 'text-[#00ff9d]/[0.08]' : 'text-[#00ff9d]/[0.05]'
                }`}
              >
                {item.number}
              </div>

              <p className={`text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase mb-2 relative z-10 ${
                item.isGolfN ? 'text-[#00ff9d]' : 'text-[#6b7280]'
              }`}>
                {item.number} · {item.year}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold leading-[1.1] tracking-tight mb-4 text-white relative z-10">
                {item.industry}
              </h3>
              <p className={`text-sm leading-6 mb-5 relative z-10 ${
                item.isGolfN ? 'text-[#d1d5db]' : 'text-[#9ca3af]'
              }`}>
                {item.obsession}
              </p>

              <div className={`mt-auto pt-4 border-t relative z-10 ${
                item.isGolfN ? 'border-[#00ff9d]/30' : 'border-[#2a3347]'
              }`}>
                <p className={`text-sm font-mono font-semibold leading-tight ${
                  item.isGolfN ? 'text-[#00ff9d]' : 'text-[#9ca3af]'
                }`}>
                  {item.stat}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PULL QUOTE */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-l-4 border-[#00ff9d] pl-6 md:pl-10 max-w-4xl"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2] tracking-tight text-white mb-3">
            That&rsquo;s the energy GolfN is channeling.
          </p>
          <p className="text-lg md:text-xl text-[#d1d5db] leading-relaxed">
            The same psychological pattern that built modern consumer loyalty — pointed at <span className="text-white font-semibold">the only major sport that&rsquo;s never had it.</span>
          </p>
        </motion.div>

      </div>
    </section>
  )
}
