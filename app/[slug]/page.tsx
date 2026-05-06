import { cookies } from 'next/headers'
import { partners, type PartnerConfig } from '@/lib/presentation-data'
import { wilsonMotocaddyConfig } from '@/lib/wilson-motocaddy-config'
import { sub70Config } from '@/lib/sub-70-config'
import { TemplateClient } from '@/components/template/TemplateClient'
import { PasswordGate } from '@/components/template/PasswordGate'
import type { PartnerData, MarketData } from '@/lib/template-types'
import { partnerScenarioOverrides } from '@/lib/partnership-paths'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

const allPartners: Record<string, PartnerConfig> = { ...partners, 'wilson-motocaddy': wilsonMotocaddyConfig, 'sub-70': sub70Config }

// Updated May 6, 2026 — Amplitude all-time deduped + user property data
// US combines "United States" + "United States of America" + untagged users
const defaultMarketReach: MarketData[] = [
  { country: 'United States', users: 70000, flag: '\ud83c\uddfa\ud83c\uddf8' },
  { country: 'United Kingdom', users: 8654, flag: '\ud83c\uddec\ud83c\udde7' },
  { country: 'Australia', users: 2636, flag: '\ud83c\udde6\ud83c\uddfa' },
  { country: 'South Africa', users: 2464, flag: '\ud83c\uddff\ud83c\udde6' },
  { country: 'Canada', users: 1223, flag: '\ud83c\udde8\ud83c\udde6' },
  { country: 'New Zealand', users: 1114, flag: '\ud83c\uddf3\ud83c\uddff' },
]

function toPartnerData(config: PartnerConfig): PartnerData {
  const scenarios = partnerScenarioOverrides[config.slug]

  return {
    partnerName: config.partnerName,
    slug: config.slug,
    partnerLogoUrl: config.logoUrl,
    primaryColor: config.primaryColor,
    secondaryColor: config.secondaryColor,
    productCategory: config.productCategory,
    productNames: config.productNames,
    recommendedPath: config.defaultPath,
    keyMarkets: config.keyMarkets,
    heroSubtitle: config.heroSubtitle,
    heroHeadline: config.heroHeadline,
    heroVideoUrl: config.heroVideoUrl,
    howItWorksIntro: config.howItWorksIntro,
    pricingIntro: config.pricingIntro,
    pricingNote: config.pricingNote,
    defaultCohortSize: config.defaultCohortSize,
    recommendedPathRationale: undefined,
    customScenarios: scenarios ? {
      pilotTitle: scenarios.pilot?.title,
      pilotDescription: scenarios.pilot?.description,
      growthTitle: scenarios.growth?.title,
      growthDescription: scenarios.growth?.description,
      strategicTitle: scenarios.strategic?.title,
      strategicDescription: scenarios.strategic?.description,
    } : undefined,
    isPortfolio: config.isPortfolio,
    agencyName: config.agencyName,
    agencyLogoUrl: config.agencyLogoUrl,
    campaigns: config.campaigns,
    portfolioDiscount: config.portfolioDiscount,
    marketReach: config.marketReach || defaultMarketReach,
    marketReachTitle: config.marketReachTitle,
    portfolioBrands: config.portfolioBrands?.map(b => ({
      brandName: b.name,
      brandLogoUrl: b.logoUrl,
      brandColor: b.color,
      category: b.category,
      products: b.products,
      pitch: b.pitch,
      targetingEdge: b.targetingEdge,
    })),
    commerceNotes: config.commerceNotes,
  }
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BrandPage({ params }: PageProps) {
  const { slug } = await params
  const config = allPartners[slug]
  if (!config) notFound()

  if (config.password) {
    const cookieStore = await cookies()
    const authCookie = cookieStore.get(`golfn-auth-${slug}`)
    if (!authCookie?.value) {
      return <PasswordGate slug={slug} partnerName={config.partnerName} />
    }
  }

  const partner = toPartnerData(config)
  return <TemplateClient partner={partner} />
}
