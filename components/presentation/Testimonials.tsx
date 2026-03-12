'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { type PartnerConfig } from '@/lib/presentation-data'
import { images } from '@/lib/images'

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>{children}</motion.div>
}

const testimonials = [
  images.testimonial1,
  images.testimonial2,
  images.testimonial3,
  images.testimonial4,
]

export function Testimonials({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="py-20 md:py-32">
      <div className="w-content px-5 md:px-12 mb-10 md:mb-16">
        <Fade>
          <span className="font-mono text-sm text-[#71717A] tracking-[0.2em] uppercase">Proof</span>
          <h2 className="font-display text-3xl md:text-5xl mt-3 mb-4 leading-[0.95]">Real Golfers,<br /><span className="text-gradient">Real Feedback</span></h2>
          <p className="text-base md:text-[17px] text-[#B0B0B4] leading-[1.75] max-w-xl">These are not simulated results. Verified golfers actively engage with partner brands through the GolfN ecosystem every day. Real users, real experiences, real proof of system sophistication.</p>
        </Fade>
      </div>

      <Fade delay={0.2}>
        <div className="w-content-wider px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {testimonials.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="relative rounded-xl md:rounded-2xl overflow-hidden bg-[#131315] border border-[#2A2A2C]"
                style={{ boxShadow: `0 0 40px ${partner.primaryColor}06` }}
              >
                <img src={img} alt="" className="w-full h-auto" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </Fade>
    </section>
  )
}
