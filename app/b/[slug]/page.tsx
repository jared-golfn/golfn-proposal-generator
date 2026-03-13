import { cookies } from 'next/headers'
import { partners, type PartnerConfig } from '@/lib/presentation-data'
import { wilsonMotocaddyConfig } from '@/lib/wilson-motocaddy-config'
import { TemplateClient } from '@/components/template/TemplateClient'
import { PasswordGate } from '@/components/template/PasswordGate'
import type { PartnerData } from '@/lib/template-types'
import { partnerScenarioOverrides } from '@/lib/partnership-paths'
import { notFound } from 'next/navigation'

// All known partner configs
const allPartners: Record<string, PartnerConfig> = { ...partners, 'wilson-motocaddy': wilsonMotocaddyConfig }

// Convert PartnerConfig to PartnerData for the template
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

  // If this partner has a password, check for auth cookie
  if (config.password) {
    const cookieStore = await cookies()
    const authCookie = cookieStore.get(`golfn-auth-${slug}`)
    if (!authCookie?.value) {
      // Not authenticated -- show password gate
      return <PasswordGate slug={slug} partnerName={config.partnerName} />
    }
  }

  const partner = toPartnerData(config)
  return <TemplateClient partner={partner} />
}

export function generateStaticParams() {
  return Object.keys(allPartners).map((slug) => ({ slug }))
}
