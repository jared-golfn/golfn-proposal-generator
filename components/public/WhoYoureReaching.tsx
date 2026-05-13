// DEPRECATED — May 13, 2026
//
// This component previously rendered audience demographics (age band,
// household income, handicap distribution, geo). Those numbers were
// flagged as unverified during the B2B graphics spec review and were
// removed from the public partners page in favor of WhatsInTheirBag.tsx
// which uses verified first-party equipment data from Amplitude.
//
// Keeping this file as a no-op stub so any stale import from another
// branch fails loudly rather than silently rendering bad data.

export function WhoYoureReaching() {
  return null
}
