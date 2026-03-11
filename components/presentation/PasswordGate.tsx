'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface PasswordGateProps {
  partnerName: string
  partnerColor: string
  onAuthenticated: () => void
}

export function PasswordGate({ partnerName, partnerColor, onAuthenticated }: PasswordGateProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    // TODO: Check password against Sanity document
    // For now, accept any non-empty password
    await new Promise(r => setTimeout(r, 500))

    if (password.trim()) {
      onAuthenticated()
    } else {
      setError(true)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-golfn-bg flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-sm w-full"
      >
        <div className="text-center mb-8">
          <div
            className="w-12 h-12 rounded-xl mx-auto mb-4"
            style={{ background: `linear-gradient(135deg, ${partnerColor}, ${partnerColor}80)` }}
          />
          <h1 className="font-display text-2xl">GolfN × {partnerName}</h1>
          <p className="text-sm text-golfn-white-faint mt-2">Enter your access code to view this presentation.</p>
        </div>

        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Access code"
            className="w-full px-4 py-3 bg-golfn-card border border-golfn-grid rounded-lg text-center font-mono text-lg focus:outline-none focus:border-golfn-muted transition-colors"
            autoFocus
          />
          {error && (
            <p className="text-red-400 text-xs text-center mt-2">Invalid access code. Please try again.</p>
          )}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full mt-4 px-4 py-3 rounded-lg font-medium text-golfn-bg transition-all hover:opacity-90 disabled:opacity-50"
            style={{ background: `linear-gradient(135deg, ${partnerColor}, ${partnerColor}80)` }}
          >
            {loading ? 'Verifying...' : 'View Presentation'}
          </button>
        </div>
      </motion.div>
    </div>
  )
}
