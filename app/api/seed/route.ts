import { createClient } from '@sanity/client'
import { NextResponse } from 'next/server'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'e3wja34v',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-03-11',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityDoc = any

export async function GET() {
  if (!process.env.SANITY_API_TOKEN) {
    return NextResponse.json({ error: 'SANITY_API_TOKEN not set' }, { status: 500 })
  }

  const transaction = client.transaction()
  const cor = (doc: SanityDoc) => transaction.createOrReplace(doc)

  // Platform Metrics
  cor({ _id: 'metric-registered-users', _type: 'platformMetric', label: 'Registered Users', value: '100,000+', subtitle: '~6,000/mo growth', order: 1, isHighlighted: true })
  cor({ _id: 'metric-engaged-users', _type: 'platformMetric', label: 'Engaged Users', value: '4,766', subtitle: 'A+B+C Tiers, Feb 2026', order: 2, isHighlighted: false })
  cor({ _id: 'metric-under-34', _type: 'platformMetric', label: 'Under 34', value: '56%', subtitle: 'Core demographic', order: 3, isHighlighted: false })
  cor({ _id: 'metric-monthly-logins', _type: 'platformMetric', label: 'Monthly Logins', value: '30+', subtitle: 'Per user average', order: 4, isHighlighted: false })
  cor({ _id: 'metric-ad-views', _type: 'platformMetric', label: 'Ad-Eligible Views', value: '336/user/month', subtitle: 'Per engaged user', order: 5, isHighlighted: false })
  cor({ _id: 'metric-countries', _type: 'platformMetric', label: 'Countries', value: '57', subtitle: 'Global reach', order: 6, isHighlighted: false })

  // Commercial Layers
  cor({ _id: 'layer-setup', _type: 'commercialLayer', title: 'Program Setup', subtitle: 'One-Time Investment', layerType: 'setup', order: 1, tiers: [
    { _key: 'focused', name: 'Focused Launch', priceRange: '$7,500 \u2013 $12,500', description: 'Core audience build, initial Learn & Earn, single activation pathway' },
    { _key: 'full', name: 'Full Program', priceRange: '$12,500 \u2013 $20,000', description: 'Multi-channel activation, Daily Grind integration, content production' },
    { _key: 'enterprise', name: 'Enterprise', priceRange: '$20,000 \u2013 $35,000+', description: 'Full eight-stage deployment, custom integrations, dedicated strategy' },
  ]})
  cor({ _id: 'layer-management', _type: 'commercialLayer', title: 'Managed Program Delivery', subtitle: 'Recurring Monthly', layerType: 'management', order: 2, tiers: [
    { _key: 'growth', name: 'Growth', priceRange: '$2,500/mo', description: '' },
    { _key: 'scale', name: 'Scale', priceRange: '$4,500/mo', description: '' },
    { _key: 'ent', name: 'Enterprise', priceRange: '$6,500/mo', description: '' },
  ]})
  cor({ _id: 'layer-media', _type: 'commercialLayer', title: 'Impression Banks', subtitle: 'Billed as Served, No Expiration', layerType: 'media', order: 3, tiers: [
    { _key: '50k', name: '50K Impressions', priceRange: '$3,500 ($70 CPM)', description: '' },
    { _key: '100k', name: '100K Impressions', priceRange: '$7,000 ($70 CPM)', description: '' },
    { _key: '250k', name: '250K Impressions', priceRange: '$15,750 ($63 CPM)', description: '' },
    { _key: '500k', name: '500K+ Impressions', priceRange: '$30,000+ ($60 CPM)', description: '' },
  ]})
  cor({ _id: 'layer-performance', _type: 'commercialLayer', title: 'Performance Economics', subtitle: 'Variable \u2014 Attributed Commerce', layerType: 'performance', order: 4, description: 'Attributed Commerce / Wholesale-Equivalent Participation: 20\u201340% (30\u201340% preferred). 20% minimum floor. Partner fulfills directly.', tiers: [
    { _key: 'preferred', name: 'Attributed Commerce (Preferred)', priceRange: '20\u201340%', description: '30\u201340% preferred. 20% minimum floor. Partner fulfills directly.' },
    { _key: 'revshare', name: 'Revenue Share', priceRange: '12\u201325%', description: '' },
    { _key: 'cpa', name: 'Fixed CPA', priceRange: '$10\u2013$75+', description: '' },
    { _key: 'hybrid', name: 'Hybrid', priceRange: 'Custom structure', description: '' },
  ]})

  // Progression Stages
  cor({ _id: 'stage-1', _type: 'progressionStage', stageNumber: 1, name: 'Awareness', description: 'Full ecosystem distribution \u2014 email, in-app, push, banners, social, Daily Grind awareness banners, blog/SEO.', channels: ['Email', 'In-App', 'Push', 'Banners', 'Social', 'Daily Grind', 'Blog/SEO'] })
  cor({ _id: 'stage-2', _type: 'progressionStage', stageNumber: 2, name: 'Intent Capture', description: 'Behavioral profiles, interest cohorts, AI lookalike models. Campaign is temporary \u2014 intelligence is permanent.', channels: ['Behavioral Profiles', 'Interest Cohorts', 'AI Lookalike Models'] })
  cor({ _id: 'stage-3', _type: 'progressionStage', stageNumber: 3, name: 'Education', description: 'Learn & Earn within More Ways to Earn. Verified comprehension \u2014 wrong answers mean no points or reduced points.', channels: ['Learn & Earn', 'Verified Comprehension', 'Points-Based Incentive'] })
  cor({ _id: 'stage-4', _type: 'progressionStage', stageNumber: 4, name: 'Activation', description: 'OAuth social engagement (Instagram, X, Facebook), Daily Grind check-ins, offer saves, bookings.', channels: ['OAuth Social', 'Daily Grind Check-ins', 'Offer Saves', 'Bookings'] })
  cor({ _id: 'stage-5', _type: 'progressionStage', stageNumber: 5, name: 'Conversion', description: 'Exclusive offers, points-back mechanics, marketplace pathways, fuller-funnel attribution.', channels: ['Exclusive Offers', 'Points-Back', 'Marketplace', 'Attribution'] })
  cor({ _id: 'stage-6', _type: 'progressionStage', stageNumber: 6, name: 'Adoption & Real-World Engagement', description: 'Course use, fittings, demo days, retail visits, QR scans, Daily Grind location check-ins.', channels: ['Course Use', 'Fittings', 'Demo Days', 'Retail Visits', 'QR Scans'] })
  cor({ _id: 'stage-7', _type: 'progressionStage', stageNumber: 7, name: 'Advocacy & Social Proof', description: 'OAuth-verified social proof, UGC, reviews, referrals \u2014 authentic endorsement at scale.', channels: ['Social Proof', 'UGC', 'Reviews', 'Referrals'] })
  cor({ _id: 'stage-8', _type: 'progressionStage', stageNumber: 8, name: 'Retention & Evergreen', description: 'AI lookalike auto-enrollment, seasonal re-activation, progressive engagement loops.', channels: ['Auto-Enrollment', 'Seasonal Re-activation', 'Progressive Engagement'] })

  // Archetypes
  cor({ _id: 'archetype-emerging', _type: 'partnershipArchetype', name: 'Emerging / Test Program', stages: 'Stages 1\u20134', description: 'Awareness + cohort building + early activation. Ideal for brands entering the GolfN ecosystem.', managementTier: 'Growth ($2,500/mo)', dailyGrindModel: 'Fixed fee if included', setupRange: '$7,500 \u2013 $12,500', monthlyMinimum: '$5,000+', order: 1 })
  cor({ _id: 'archetype-growth', _type: 'partnershipArchetype', name: 'Growth / Full-Funnel', stages: 'Stages 1\u20137', description: 'Through education, activation, conversion, early adoption and advocacy. For brands ready to drive measurable commerce.', managementTier: 'Scale ($4,500/mo)', dailyGrindModel: 'Hybrid model', setupRange: '$12,500 \u2013 $20,000', monthlyMinimum: '$8,000+', order: 2 })
  cor({ _id: 'archetype-enterprise', _type: 'partnershipArchetype', name: 'Enterprise / Strategic', stages: 'All 8 Stages', description: 'Full eight-stage deployment with performance-led economics. For brands committed to owning a category within GolfN.', managementTier: 'Enterprise ($6,500/mo)', dailyGrindModel: 'Performance-led verified check-in model', setupRange: '$20,000 \u2013 $35,000+', monthlyMinimum: '$12,000+', order: 3 })

  // Partners
  cor({ _id: 'partner-galvin-green', _type: 'partnerPresentation', partnerName: 'Galvin Green', slug: { _type: 'slug', current: 'galvin-green' }, primaryColor: '#17A455', secondaryColor: '#8DC54A', productCategory: 'Premium Golf Outerwear', productNames: ['GORE-TEX Jackets', 'Interface Layers', 'Base Layers', 'Accessories'], isActive: true, contactEmail: 'jared@golfn.com', notes: 'Intro via Lou Delfino. Natalie Collard at Sports Impact manages spend.' })
  cor({ _id: 'partner-wilson-golf', _type: 'partnerPresentation', partnerName: 'Wilson Golf', slug: { _type: 'slug', current: 'wilson-golf' }, primaryColor: '#C41E3A', secondaryColor: '#E8344E', productCategory: 'Golf Equipment', productNames: ['Dynapower Drivers', 'Staff Model Irons', 'Triad Golf Balls', 'Quiver Stand Bags'], isActive: true, contactEmail: 'jared@golfn.com' })
  cor({ _id: 'partner-motocaddy', _type: 'partnerPresentation', partnerName: 'Motocaddy', slug: { _type: 'slug', current: 'motocaddy' }, primaryColor: '#0066CC', secondaryColor: '#3399FF', productCategory: 'Electric Golf Caddies', productNames: ['M7 GPS', 'M5 GPS', 'S1 DHC', 'Cube Push Trolley'], isActive: true, contactEmail: 'jared@golfn.com' })
  cor({ _id: 'partner-demo', _type: 'partnerPresentation', partnerName: 'Your Brand', slug: { _type: 'slug', current: 'demo' }, primaryColor: '#17A455', secondaryColor: '#8DC54A', productCategory: 'Golf Products', productNames: ['Product Line 1', 'Product Line 2', 'Product Line 3'], isActive: true, contactEmail: 'jared@golfn.com' })

  // Settings
  cor({ _id: 'presentationSettings', _type: 'presentationSettings',
    positioningStatement: 'GolfN is a premium golf-specific demand generation, activation, and customer progression platform built around verified golfers, first-party intent signals, and measurable downstream action.',
    notStatements: ['Not a sponsorship', 'Not a sweepstakes company', 'Not a CPM product', 'Not a passive affiliate channel'],
    managementFunctions: [
      { _key: 'ai', name: 'Audience Intelligence & Lookalike Enrollment', description: 'Behavioral profiles, lookalike enrollment, segment migration tracking' },
      { _key: 'orch', name: 'Live Program Orchestration', description: 'Learn & Earn, offers, Daily Grind, social activation campaigns' },
      { _key: 'opt', name: 'Creative Refresh & Performance Optimization', description: 'A/B testing, creative rotation, performance-based iteration' },
      { _key: 'rpt', name: 'Reporting, Insights & Strategic Management', description: 'Campaign analytics, progression metrics, strategic recommendations' },
    ],
    setupMinimum: '$7,500 minimum',
    recurringMinimum: '$5,000/month absolute floor',
    durationMinimum: '3 months minimum',
    commerceMinimum: '20% minimum margin, 30\u201340% preferred',
    dailyGrindDescription: "Daily Grind is GolfN's real-world, location-based check-in system. Golfers check in at courses, pro shops, events, Topgolf, PGA Tour events, and partner retail locations.",
    learnAndEarnDescription: 'Learn & Earn is the digital education and comprehension system. Users earn points by consuming content and proving comprehension \u2014 wrong answers mean no points or reduced points.',
  })

  try {
    const result = await transaction.commit()
    return NextResponse.json({ success: true, count: result.results.length, ids: result.results.map((r: { id: string }) => r.id) })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
