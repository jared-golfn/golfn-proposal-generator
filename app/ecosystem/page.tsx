import type { Metadata } from 'next'
import { EcosystemPage } from '@/components/ecosystem/EcosystemPage'

export const metadata: Metadata = {
  title: 'GolfN Ecosystem OS — Partner Activation',
  description:
    'Interactive partner OS: raise the carrot, watch density move. Capture, activate, convert — same loop.',
  openGraph: {
    title: 'GolfN Ecosystem OS',
    description: 'Raise the carrot. Watch density move. Brand partner activation system.',
    url: 'https://partners.golfn.com/ecosystem',
    siteName: 'GolfN',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function Page() {
  return <EcosystemPage />
}
