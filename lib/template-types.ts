// Type definitions for the design brief template
// Compatible with both static data and Sanity CMS

export interface CampaignPrize {
  place: string
  description: string
  value: string
}

export interface BrandCampaign {
  brandName: string
  brandLogoUrl?: string
  brandColor?: string
  title: string
  prizePool: string
  description: string
  heroImageUrl?: string
  /** CSS object-position value, e.g. 'center 60%' */
  heroImagePosition?: string
  /** CSS transform scale, e.g. '1.4' to zoom in */
  heroImageScale?: string
  prizes: CampaignPrize[]
}

export interface PortfolioDiscount {
  startupPct: number
  perUserPct: number
}

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
  heroHeadline?: string
  recommendedPathRationale?: string
  howItWorksIntro?: string
  pricingIntro?: string
  pricingNote?: string
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

  // Portfolio campaigns (sweepstakes cards)
  campaigns?: BrandCampaign[]
  portfolioDiscount?: PortfolioDiscount

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
