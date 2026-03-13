import { partners } from '@/lib/presentation-data'
import { wilsonMotocaddyConfig } from '@/lib/wilson-motocaddy-config'
import { PresentationClient } from './PresentationClient'
import { notFound } from 'next/navigation'

// Merge additional partner configs
const allPartners = { ...partners, 'wilson-motocaddy': wilsonMotocaddyConfig }

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function PresentationPage({ params }: PageProps) {
  const { slug } = await params
  const partner = allPartners[slug]

  if (!partner) {
    notFound()
  }

  return <PresentationClient partner={partner} />
}

export function generateStaticParams() {
  return Object.keys(allPartners).map((slug) => ({ slug }))
}
