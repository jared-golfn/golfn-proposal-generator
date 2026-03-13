// Wilson + Motorcaddy combined partner config
// Imported by presentation-data.ts

import type { PartnerConfig } from './presentation-data'

export const wilsonMotocaddyConfig: PartnerConfig = {
  slug: 'wilson-motocaddy',
  partnerName: 'Wilson Golf & Motorcaddy',
  logoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/70846939f70fe368db2cd0c03686d96aa31e5bab-769x186.png',
  primaryColor: '#C41E3A',
  secondaryColor: '#3399FF',
  productCategory: 'Golf Equipment & Electric Trolleys',
  productNames: ['Wilson Golf', 'Motorcaddy'],
  heroSubtitle: 'A combined partnership framework for Wilson Golf and Motorcaddy \u2014 equipment-readiness targeting meets walker identification across two complementary product categories.',
  keyMarkets: ['United States', 'United Kingdom', 'Australia', 'Canada'],
  agencyName: 'Sports Impact',
  agencyLogoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/70846939f70fe368db2cd0c03686d96aa31e5bab-769x186.png',
  defaultPath: 'pilot',
  isPortfolio: true,
  portfolioBrands: [
    {
      slug: 'wilson-golf',
      name: 'Wilson Golf',
      logoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/dea5a3da06394dc9f1d779c94d3d75e847ba623f-807x200.svg',
      color: '#C41E3A',
      category: 'Golf Equipment',
      products: ['Dynapower Drivers', 'Staff Model Irons', 'Triad Golf Balls', 'Quiver Stand Bags'],
      pitch: 'Full-funnel activation for equipment launches and demo day programs. Affiliate partnerships with strong price-point breadth across clubs, balls, and bags.',
      targetingEdge: 'GolfN tracks what clubs users play, when they last upgraded, and their handicap range \u2014 so Wilson campaigns reach golfers ready to switch.',
    },
    {
      slug: 'motocaddy',
      name: 'Motorcaddy',
      logoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/073b40e51baf4d2834e956318fd683966a711dd2-476x102.webp',
      color: '#0066CC',
      category: 'Electric Golf Trolleys',
      products: ['M7 GPS', 'M5 GPS', 'S1 DHC', 'Cube Push Trolley'],
      pitch: 'Precision targeting for a high-ticket product. GolfN identifies walkers vs. riders, making every impression count at a $2,000+ price point with strong affiliate commission.',
      targetingEdge: 'GolfN is the only platform that knows which golfers walk. Every Motorcaddy impression goes to a verified walker \u2014 zero waste.',
    },
  ],
  commerceNotes: [
    'Both brands have existing affiliate partnerships. GolfN\u2019s points economy layers on top \u2014 users earn points for purchases through tracked links, creating dual incentive without replacing current affiliate structures.',
    'Consolidated dual-brand pricing applies. Campaign architecture, audience intelligence, and infrastructure are shared \u2014 reducing per-brand costs compared to activating each brand independently.',
    'Wilson targets equipment-readiness. Motorcaddy targets walkers. Cross-brand insights surface golfers who walk AND play competitor clubs \u2014 the ideal dual-brand prospect that neither brand could find alone.',
  ],
}
