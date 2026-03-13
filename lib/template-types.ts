// Type definitions for the design brief template
// Compatible with both static data and Sanity CMS

export interface PartnerData {
  partnerName: string
  slug: string
  partnerLogoUrl?: string
  primaryColor: string
  secondaryColor: string
  productCategory?: string
  productNames?: string[]
  recommendedPath?: 'pilot' | 'growth' | 'strategic'
  keyMarkets?: string[]

  // Campaign customization
  heroSubtitle?: string
  recommendedPathRationale?: string
  customScenarios?: {
    pilotTitle?: string
    pilotDescription?: string
    growthTitle?: string
    growthDescription?: string
    strategicTitle?: string
    strategicDescription?: string
  }
  highlightedActivations?: string[]
  customFAQ?: { question: string; answer: string }[]

  // Agency / Portfolio
  isPortfolio?: boolean
  agencyName?: string
  agencyLogoUrl?: string
  portfolioBrands?: {
    brandName: string
    brandLogoUrl?: string
    brandColor: string
    category?: string
    products?: string[]
    pitch?: string
    targetingEdge?: string
  }[]

  // Commerce
  commerceModel?: 'affiliate' | 'wholesale' | 'hybrid' | 'undecided'
  commerceNotes?: string[]
  hasExistingAffiliate?: boolean

  // Admin
  contactEmail?: string
  bookingUrl?: string
}

export interface PlatformKPI {
  label: string
  value: string
  subtitle?: string
}
