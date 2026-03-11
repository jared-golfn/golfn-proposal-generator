import { partners } from '@/lib/presentation-data'
import { PresentationClient } from './PresentationClient'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function PresentationPage({ params }: PageProps) {
  const { slug } = await params
  const partner = partners[slug]

  if (!partner) {
    notFound()
  }

  return <PresentationClient partner={partner} />
}

export function generateStaticParams() {
  return Object.keys(partners).map((slug) => ({ slug }))
}
