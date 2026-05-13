// Anonymized case studies for the public partners.golfn.com page.
// Real brand names live in components/template/CaseStudy.tsx for the
// internal /template pitch deck only. Update here when new case studies
// are added or numbers change.
// Last updated: May 13, 2026

export type CaseStudyId = 'forged-iron' | 'major-oem' | 'recovery-brand'

export interface CaseStudyTab {
  id: CaseStudyId
  brand: string
  tagline: string
}

export const publicCaseStudyTabs: CaseStudyTab[] = [
  { id: 'forged-iron', brand: 'Premium Iron Brand', tagline: '$22k wholesale, 2,764 leads, 45 units sold' },
  { id: 'major-oem', brand: 'Major Equipment OEM', tagline: '$57k retail, 102 units, 6 months' },
  { id: 'recovery-brand', brand: 'Recovery and Wellness Brand', tagline: '$21k retail, $0 discounts, $0 returns' },
]

// Forged iron case study (anonymizes Miura)
export const forgedIronCaseStudy = {
  category: 'A premium Japanese forged iron brand',
  hero: [
    { label: 'Wholesale Revenue', value: '~$22k', sub: '45 units through GolfN' },
    { label: 'Qualified Leads', value: '2,764', sub: 'Verified golfers. $0.28 prize-cost CPL.' },
    { label: 'Brand Impressions', value: '271k+', sub: '$10,856 media value at $40 CPM' },
    { label: 'Order Accuracy', value: '97%', sub: 'Most shipped within 2 weeks' },
  ],
  sweeps: [
    { value: '2,764', label: 'Unique Entrants', sub: 'Opted in during 22 day flight' },
    { value: '74%', label: 'Card to Entry Rate', sub: 'Highest in GolfN history' },
    { value: '43%', label: 'IAM Conversion', sub: '1,158 of 2,706 recipients' },
    { value: '$0.28', label: 'Prize-Cost CPL', sub: 'Based on $769 wholesale prize cost' },
  ],
  commerce: [
    { value: '$31,780', label: 'Net Retail Revenue', sub: '~$22k wholesale to the brand' },
    { value: '45', label: 'Units Sold', sub: '37 wedges + 8 iron sets' },
    { value: '10,951', label: 'Product Views', sub: '4,424 unique browsers' },
    { value: '271,393', label: 'Marketplace Impressions', sub: '27 day banner flight' },
  ],
  funnel: { cardViews: '3,732', entered: '2,764' },
  audience: [
    { value: '79%', label: 'Active in last 30 days' },
    { value: '67%', label: 'Handicap 10 to 24' },
    { value: '70%', label: 'iOS users' },
    { value: '32%', label: 'Full adoption users' },
  ],
  pullQuote: {
    text: 'You guys are doing exactly what you figured you would do. The consumer base is latching on. We never doubted for a second.',
    attribution: 'CEO of one of our equipment partners',
  },
  closingLine: 'They provided $769 in prizes. We delivered $22k wholesale revenue, 2,764 first party leads, and $10,856 in equivalent media value.',
}

// Major OEM case study (anonymizes Cobra)
export const majorOEMCaseStudy = {
  category: 'A major equipment OEM',
  hero: [
    { label: 'Retail Revenue', value: '$57,678', sub: '102 units. $565 AOV.' },
    { label: 'Qualified Leads', value: '3,213', sub: 'Across 4 sweepstakes activations' },
    { label: 'Brand Impressions', value: '1.72M+', sub: 'In-app, banner, CRM, social' },
    { label: 'Sweepstakes Entries', value: '584k+', sub: 'Total chances to win logged' },
  ],
  sweeps: [
    { value: '4', label: 'Sweepstakes Activations', sub: 'Sep 2025 to Feb 2026' },
    { value: '3,213', label: 'Unique Entrants', sub: 'Cumulative across all sweeps' },
    { value: '584,699', label: 'Total Entries', sub: 'Tickets, points, free entries combined' },
    { value: '2', label: 'Banner Takeovers', sub: 'Concurrent with sweepstakes flights' },
  ],
  commerce: [
    { value: '$57,678', label: 'Retail Revenue', sub: 'Net $56,732 after taxes' },
    { value: '102', label: 'Units Sold', sub: 'Drivers, irons, fairways, wedges, hybrids' },
    { value: '$565', label: 'Average Order Value', sub: 'Premium club price points hold' },
    { value: '~95', label: 'Distinct Customers', sub: 'Buyers across the 6 month window' },
  ],
  campaigns: [
    { name: 'Signed Tour Pro Memorabilia (Player 1)', dates: 'Sep 7 to Oct 6, 2025', entrants: '483', note: 'Signed memorabilia. Brand provided prize.' },
    { name: 'Signed Tour Pro Driver (Player 2)', dates: 'Sep 7 to Oct 6, 2025', entrants: '459', note: 'Concurrent with first sweep. Shared push surface.' },
    { name: 'Full Bag Tour Fitting Experience', dates: 'Jan 16 to Feb 10, 2026', entrants: '868', note: '52% paid members. 50% card view to entry. Co-funded experience prize.' },
    { name: 'New Driver Lineup Launch Package', dates: 'Feb 5 to Feb 25, 2026', entrants: '1,403', note: 'Full driver lineup launch. Ran with banner takeover. Largest sweep.' },
  ],
  audience: [
    { value: '52%', label: 'Paid GolfN members (Fitting Card)' },
    { value: '50%', label: 'Card view to entry rate' },
    { value: '64 to 74%', label: 'iOS user share' },
    { value: '2,323', label: 'Marketplace browsers' },
  ],
  closingLine: '$57k retail revenue, 3,213 leads, and 1.72M brand impressions across six months. Signed memorabilia. Brand experience prize. Product launch campaign. Two banner takeovers. They came back four times.',
}

// Recovery brand case study (anonymizes Hyperice)
export const recoveryBrandCaseStudy = {
  category: 'A global recovery and wellness brand',
  hero: [
    { label: 'Retail Revenue', value: '$21,188', sub: '52 units. $407 AOV.' },
    { label: 'Qualified Leads', value: '2,141', sub: 'Cumulative across 2 sweeps' },
    { label: 'Equivalent Media Value', value: '$27.5k', sub: '655k impressions at $42 CPM' },
    { label: 'Returns', value: '$0', sub: 'Zero returns recorded in the measured window' },
  ],
  sweeps: [
    { value: '2,141', label: 'Unique Entrants', sub: 'Across Recovery Bundle and Recovery Trio' },
    { value: '195,751', label: 'Total Entries', sub: 'Tickets 73.5%, free 17.6%, points 8.9%' },
    { value: '+209%', label: 'Entrants per Day Growth', sub: 'Sweep 1 to sweep 2 iteration lift' },
    { value: '88.5%', label: 'Non Paying Members', sub: 'Incremental reach they cannot buy elsewhere' },
  ],
  commerce: [
    { value: '$21,188', label: 'Retail Revenue', sub: 'Net $20,563. Taxes $625.' },
    { value: '52', label: 'Units Sold', sub: 'Across 8 distinct SKUs' },
    { value: '$0', label: 'Discounts and Returns', sub: 'Premium pricing held in the measured window' },
    { value: '18x', label: 'Post Sweep View Lift', sub: '1.1/day pre, 20.5/day post (6+ wks sustained)' },
  ],
  iterationLift: { sweep1: '22.6', sweep2: '69.7', delta: '+209%', sweep1Days: '30 days', sweep2Days: '21 days' },
  audience: [
    { value: '88.5%', label: 'No paid GolfN membership' },
    { value: '36%', label: 'Public course players' },
    { value: '24%', label: 'Semi private course players' },
    { value: '64', label: 'UK and England entrants' },
  ],
  closingLine: '$21k retail. $0 discounts. $0 returns in the measured window. A marketplace audience still browsing six weeks later.',
}
