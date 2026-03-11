import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GolfN — Partner Presentation',
  description: 'Premium golf-specific demand generation, activation, and customer progression platform.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-golfn-bg text-golfn-white font-body">
        {children}
      </body>
    </html>
  )
}
