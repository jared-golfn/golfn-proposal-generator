// GolfN Market Data by Country
// All-time unique users as of Mar 12, 2026
// Source: Amplitude export

export interface MarketStat {
  country: string
  /** ISO 3166-1 alpha-2 country code */
  code: string
  users: number
  /** Flag emoji */
  flag: string
}

export const marketData: MarketStat[] = [
  { country: 'United States', code: 'US', users: 46416, flag: '\uD83C\uDDFA\uD83C\uDDF8' },
  { country: 'Australia', code: 'AU', users: 2957, flag: '\uD83C\uDDE6\uD83C\uDDFA' },
  { country: 'South Africa', code: 'ZA', users: 2886, flag: '\uD83C\uDDFF\uD83C\uDDE6' },
  { country: 'United Kingdom', code: 'GB', users: 2892, flag: '\uD83C\uDDEC\uD83C\uDDE7' },
  { country: 'Canada', code: 'CA', users: 1341, flag: '\uD83C\uDDE8\uD83C\uDDE6' },
  { country: 'New Zealand', code: 'NZ', users: 1186, flag: '\uD83C\uDDF3\uD83C\uDDFF' },
]

export const marketDataTotal = {
  markets: 6,
  totalUsers: 57678,
  countriesGlobal: 57,
  asOfDate: 'Mar 12, 2026',
}

/** Returns only markets matching the partner's keyMarkets list */
export function getPartnerMarkets(keyMarkets?: string[]): MarketStat[] {
  if (!keyMarkets || keyMarkets.length === 0) return marketData
  return marketData.filter(m => keyMarkets.includes(m.country))
}
