// Type definitions for the design brief template
// Compatible with both static data and Sanity CMS

export interface CampaignPrize {
  place: string
  description: string
  value: string
}

export interface LearnEarnStep {
  label: string
  imageUrl: string
}

export interface BrandCampaign {
  brandName: string
  brandLogoUrl?: string
  brandColor?: string
  title: string
  prizePool: string
  description: string
  heroImageUrl?: string
  heroImagePosition?: string
  heroImageScale?: string
  prizes: CampaignPrize[]
  learnEarnSteps?: LearnEarnStep[]
}

export interface PortfolioDiscount {
  startupPct: number
  perUserPct: number
}

export interface MarketData {
  country: string
  users: number
  flag?: string
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

  heroSubtitle?: string
  heroHeadline?: string
  heroVideoUrl?: string
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

  campaigns?: BrandCampaign[]
  portfolioDiscount?: PortfolioDiscount
  marketReach?: MarketData[]
  defaultCohortSize?: number

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

  commerceModel?: 'affiliate' | 'wholesale' | 'hybrid' | 'undecided'
  commerceNotes?: string[]
  hasExistingAffiliate?: boolean

  contactEmail?: string
  bookingUrl?: string
}

export interface PlatformKPI {
  label: string
  value: string
  subtitle?: string
}
