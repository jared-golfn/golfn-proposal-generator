'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Check, ArrowRight, Loader2 } from 'lucide-react'
import { useRateRequest } from '@/lib/rate-request-context'

const CALENDLY_URL = 'https://calendly.com/golfn'

const SURFACES = [
  'Sweepstakes',
  'Sponsored Challenge',
  'Press Your Luck monthly sponsorship',
  'Marketplace category takeover',
  'In-feed pinned video',
  'Course page sponsorship',
  'Per verified check-in',
  'CPM media (verified audience)',
  'Triggered targeting (weather, UV, handicap, club-in-bag)',
  'Annual partnership',
]

const BUDGETS = [
  'Under $10k',
  '$10k – $25k',
  '$25k – $75k',
  '$75k – $150k',
  '$150k+',
  'Not sure yet',
]

const TIMELINES = [
  'This month',
  'Next 60 days',
  'This quarter',
  'No specific timeline',
]

interface FormState {
  name: string
  company: string
  email: string
  phone: string
  surfaces: string[]
  budget: string
  timeline: string
  notes: string
}

const EMPTY_FORM: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  surfaces: [],
  budget: '',
  timeline: '',
  notes: '',
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function CaptureFormModal() {
  const { isOpen, preselectedSurface, close } = useRateRequest()
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const firstFieldRef = useRef<HTMLInputElement>(null)

  // Seed the surfaces list when opened from a specific RateCard row.
  useEffect(() => {
    if (isOpen) {
      setForm({
        ...EMPTY_FORM,
        surfaces: preselectedSurface ? [preselectedSurface] : [],
      })
      setStatus('idle')
      setErrorMsg(null)
    }
  }, [isOpen, preselectedSurface])

  // Focus the first field on open.
  useEffect(() => {
    if (isOpen && status === 'idle') {
      const t = setTimeout(() => firstFieldRef.current?.focus(), 50)
      return () => clearTimeout(t)
    }
  }, [isOpen, status])

  // ESC closes the modal.
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close])

  // Lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  function toggleSurface(s: string) {
    setForm((f) => {
      const has = f.surfaces.includes(s)
      return { ...f, surfaces: has ? f.surfaces.filter((x) => x !== s) : [...f.surfaces, s] }
    })
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg(null)
    try {
      const res = await fetch('/api/rate-request', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone || undefined,
          surfaces: form.surfaces.length > 0 ? form.surfaces : undefined,
          budget: form.budget || undefined,
          timeline: form.timeline || undefined,
          notes: form.notes || undefined,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus('error')
        setErrorMsg(data?.error || 'Something went wrong. Please email jared@golfn.com directly.')
        return
      }
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg('Network error. Please email jared@golfn.com directly.')
      console.warn('rate-request submit failed', err)
    }
  }

  const canSubmit =
    form.name.trim().length > 0 &&
    form.company.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) &&
    status !== 'submitting'

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[100] flex items-start md:items-center justify-center bg-black/70 backdrop-blur-sm overflow-y-auto py-8 px-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="rate-request-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.99 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-[#0f1217] border border-[#2a3347] rounded-2xl shadow-2xl my-auto"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 rounded-lg flex items-center justify-center text-[#6b7280] hover:text-white hover:bg-[#1a1f2e] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {status === 'success' ? (
              <SuccessPanel onClose={close} />
            ) : (
              <form onSubmit={onSubmit} className="px-6 md:px-10 py-8 md:py-10">
                <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#c5a572] mb-3">
                  Request the rate card
                </p>
                <h3 id="rate-request-title" className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
                  Tell us what you&rsquo;re trying to do.
                </h3>
                <p className="text-sm md:text-base text-[#9ca3af] mb-7 leading-7">
                  Jared replies personally, usually within a day. Pricing is bespoke and depends on flight length, exclusivity, and bundle.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Your name" required>
                    <input
                      ref={firstFieldRef}
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Company" required>
                    <input
                      type="text"
                      autoComplete="organization"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Work email" required>
                    <input
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Phone (optional)">
                    <input
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputCls}
                    />
                  </Field>
                </div>

                <div className="mt-5">
                  <Field label={`Interested in${preselectedSurface ? ' (preselected from rate card)' : ' (select any)'}`}>
                    <div className="flex flex-wrap gap-2">
                      {SURFACES.map((s) => {
                        const active = form.surfaces.includes(s)
                        return (
                          <button
                            key={s}
                            type="button"
                            onClick={() => toggleSurface(s)}
                            className={`px-3 py-2 rounded-lg text-xs md:text-sm border transition-colors ${
                              active
                                ? 'bg-[#00ff9d]/15 border-[#00ff9d]/40 text-[#00ff9d]'
                                : 'bg-[#1a1f2e] border-[#2a3347] text-[#d1d5db] hover:border-[#2a3347] hover:text-white'
                            }`}
                          >
                            {s}
                          </button>
                        )
                      })}
                    </div>
                  </Field>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                  <Field label="Budget range (optional)">
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className={selectCls}
                    >
                      <option value="">Pick one…</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Timeline (optional)">
                    <select
                      value={form.timeline}
                      onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                      className={selectCls}
                    >
                      <option value="">Pick one…</option>
                      {TIMELINES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="mt-5">
                  <Field label="Notes (optional)">
                    <textarea
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      rows={3}
                      placeholder="What are you trying to do? Any context helps."
                      className={`${inputCls} resize-y min-h-[88px]`}
                    />
                  </Field>
                </div>

                {status === 'error' && errorMsg && (
                  <p className="mt-4 text-sm text-[#fb7185]">{errorMsg}</p>
                )}

                <div className="mt-7 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p className="text-xs text-[#6b7280]">
                    Or email <a href="mailto:jared@golfn.com" className="text-[#9ca3af] hover:text-white underline underline-offset-2">jared@golfn.com</a> directly.
                  </p>
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00ff9d] text-[#0f1217] font-bold text-sm hover:bg-[#00e68a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send request
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function SuccessPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="px-6 md:px-10 py-10 md:py-14 text-center">
      <div className="w-14 h-14 rounded-full bg-[#00ff9d]/15 border border-[#00ff9d]/40 flex items-center justify-center mx-auto mb-6">
        <Check className="w-7 h-7 text-[#00ff9d]" />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Got it. Talk soon.</h3>
      <p className="text-base text-[#9ca3af] mb-8 leading-7 max-w-md mx-auto">
        Jared will be in touch personally, usually within a day. If you want to jump the queue, grab a 20-minute slot on his calendar.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00ff9d] text-[#0f1217] font-bold text-sm hover:bg-[#00e68a] transition-colors"
        >
          Book 20 min with Jared
          <ArrowRight className="w-4 h-4" />
        </a>
        <button
          type="button"
          onClick={onClose}
          className="text-sm font-semibold text-[#9ca3af] hover:text-white transition-colors px-4 py-3"
        >
          Close
        </button>
      </div>
    </div>
  )
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-[0.15em] text-[#9ca3af] mb-2">
        {label}{required && <span className="text-[#00ff9d] ml-1">*</span>}
      </span>
      {children}
    </label>
  )
}

const inputCls =
  'w-full px-4 py-3 rounded-lg bg-[#1a1f2e] border border-[#2a3347] text-white text-sm placeholder:text-[#6b7280] focus:outline-none focus:border-[#00ff9d]/60 focus:ring-2 focus:ring-[#00ff9d]/15 transition-colors'

const selectCls =
  'w-full px-4 py-3 rounded-lg bg-[#1a1f2e] border border-[#2a3347] text-white text-sm focus:outline-none focus:border-[#00ff9d]/60 focus:ring-2 focus:ring-[#00ff9d]/15 transition-colors appearance-none cursor-pointer'
