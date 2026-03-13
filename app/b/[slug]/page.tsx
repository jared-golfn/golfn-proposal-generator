import { partners, type PartnerConfig } from '@/lib/presentation-data'
import { wilsonMotocaddyConfig } from '@/lib/wilson-motocaddy-config'
import { TemplateClient } from '@/components/template/TemplateClient'
import type { PartnerData } from '@/lib/template-types'
import { partnerScenarioOverrides } from '@/lib/partnership-paths'
import { notFound } from 'next/navigation'

// All known partner configs
const allPartners: Record<string, PartnerConfig> = { ...partners, 'wilson-motocaddy': wilsonMotocaddyConfig }

// Convert PartnerConfig to PartnerData for the template
function toPartnerData(config: PartnerConfig): PartnerData {
  // Pull scenario overrides for this partner
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
    recommendedPathRationale: undefined,
    customScenarios: scenarios ? {
      pilotTitle: scenarios.pilot?.title,
      pilotDescription: scenarios.pilot?.description,
      growthTitle: scenarios.growth?.title,
      growthDescription: scenarios.growth?.description,
      strategicTitle: scenarios.strategic?.title,
      strategicDescription: scenarios.strategic?.description,
    } : undefined,
    highlightedActivations: config.highlightedActivations,
    customFAQ: config.customFAQ,
    isPortfolio: config.isPortfolio,
    agencyName: config.agencyName,
    agencyLogoUrl: config.agencyLogoUrl,
    portfolioBrands: config.portfolioBrands?.map(b => ({
      brandName: b.name,
      brandLogoUrl: b.logoUrl,
      brandColor: b.color,
      category: b.category,
      products: b.products,
      pitch: b.pitch,
      targetingEdge: b.targetingEdge,
    })),
    commerceModel: config.commerceModel as PartnerData['commerceModel'],
    commerceNotes: config.commerceNotes,
    hasExistingAffiliate: config.hasExistingAffiliate,
    contactEmail: config.contactEmail,
    bookingUrl: config.bookingUrl,
  }
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BrandPage({ params }: PageProps) {
  const { slug } = await params
  const config = allPartners[slug]
  if (!config) notFound()
  const partner = toPartnerData(config)
  return <TemplateClient partner={partner} />
}

export function generateStaticParams() {
  return Object.keys(allPartners).map((slug) => ({ slug }))
}
