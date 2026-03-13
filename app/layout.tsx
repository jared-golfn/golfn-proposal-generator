import type { Metadata } from 'next'
import { Figtree, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-figtree',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
})

const LOGO_ICON = 'https://cdn.sanity.io/images/e3wja34v/production/4093e34c1af9c32f46bb63fc2ceed885e1fd8855-1036x998.png'

export const metadata: Metadata = {
  title: 'GolfN \u2014 Brand Partnerships',
  description: 'Premium golf-specific demand generation, audience qualification, and post-campaign activation system.',
  icons: {
    icon: [
      { url: LOGO_ICON, type: 'image/png' },
    ],
    apple: LOGO_ICON,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${figtree.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0f1217] text-white font-sans">
        {children}
      </body>
    </html>
  )
}
