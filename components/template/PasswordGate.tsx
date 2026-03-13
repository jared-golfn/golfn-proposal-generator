'use client'

import { useState } from 'react'
import { Lock, Loader2, ArrowRight } from 'lucide-react'
import { images } from '@/lib/images'

export function PasswordGate({ slug, partnerName }: { slug: string; partnerName: string }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!password.trim() || loading) return
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, password: password.trim() }),
      })

      if (res.ok) {
        // Cookie is set -- reload to show the proposal
        window.location.reload()
      } else {
        setError('Incorrect password. Please try again.')
        setPassword('')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0f1217] flex flex-col items-center justify-center px-6">
      <div className="absolute inset-0 opacity-[0.05]" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, #00ff9d, transparent)' }} />

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-10">
          <img src={images.logo} alt="GolfN" className="h-10 md:h-12 w-auto mx-auto mb-8 opacity-80" />
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1f2e] border border-[#2a3347] mb-6">
            <Lock className="w-4 h-4 text-[#00ff9d]" />
            <span className="text-sm font-mono text-[#9ca3af] uppercase tracking-wider">Protected Proposal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Partnership Proposal
          </h1>
          <p className="text-lg text-[#9ca3af]">
            Prepared for <span className="text-white font-medium">{partnerName}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              autoFocus
              className="w-full px-5 py-4 rounded-xl bg-[#1a1f2e] border border-[#2a3347] text-white text-lg placeholder:text-[#4b5563] focus:outline-none focus:border-[#00ff9d]/50 focus:ring-1 focus:ring-[#00ff9d]/30 transition-all"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !password.trim()}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed glow-green"
            style={{ background: 'linear-gradient(135deg, #00ff9d, #17A455)', color: '#0f1217' }}
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                View Proposal
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-sm text-[#4b5563] mt-8">
          Confidential document. Reach out to Jared for access.
        </p>
      </div>
    </div>
  )
}
