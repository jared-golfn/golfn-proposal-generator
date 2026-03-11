// ─────────────────────────────────────────────────────────────
// GolfN Partnership Structure — Content Data
// Source: Partnership_Structure_v9_FINAL.docx
// This file is the static content source until Sanity CMS is populated.
// ─────────────────────────────────────────────────────────────

export interface PlatformMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface CommercialTier {
  name: string;
  range: string;
  description: string;
}

export interface ImpressionBank {
  volume: string;
  price: string;
  cpm: string;
}

export interface ManagementTier {
  name: string;
  price: string;
}

export interface ProgressionStage {
  number: number;
  name: string;
  description: string;
  channels: string[];
}

export interface PartnershipArchetype {
  name: string;
  subtitle: string;
  stages: string;
  managementTier: string;
  dailyGrind: string;
  description: string;
}

export interface PartnerPresentation {
  partnerName: string;
  partnerLogo?: string;
  partnerColor: string;
  partnerCategory: string;
  slug: string;
  password?: string;
}

// ─── Platform Stats ──────────────────────────────────────────

export const platformMetrics: PlatformMetric[] = [
  { label: "Registered Users", value: "100,000+", detail: "Growing ~6,000/month at sub-$2 CAC" },
  { label: "Engaged Users", value: "4,766", detail: "A+B+C tiers, Feb 2026" },
  { label: "Peak MAU", value: "12,405" },
  { label: "Under 34", value: "56%", detail: "Of total user base" },
  { label: "Avg Monthly Logins", value: "30+", detail: "Per engaged user" },
  { label: "Ad-Eligible Views", value: "336/mo", detail: "Per engaged user per month" },
  { label: "Global Presence", value: "57 countries" },
];

export const positioning = {
  headline: "GolfN is a premium golf-specific demand generation, activation, and customer progression platform.",
  subhead: "Built around verified golfers, first-party intent signals, and measurable downstream action.",
  notList: [
    "Not a sponsorship package",
    "Not a sweepstakes company",
    "Not a CPM product",
    "Not a passive affiliate channel",
  ],
};

export const setupTiers: CommercialTier[] = [
  { name: "Focused Launch", range: "$7,500 – $12,500", description: "Targeted activation with core integration" },
  { name: "Full Program", range: "$12,500 – $20,000", description: "Comprehensive program with full platform integration" },
  { name: "Enterprise", range: "$20,000 – $35,000+", description: "Custom enterprise implementation" },
];

export const contentExtensions = [
  { name: "Executive Brand Storytelling", price: "$2,500/video" },
  { name: "Campaign Content Production", price: "$1,000/piece" },
  { name: "Platform Distribution Extension", price: "$750/platform" },
];

export const managementFunctions = [
  { name: "Audience Intelligence & Lookalike Enrollment", description: "Behavioral profiling, interest cohort building, AI-driven lookalike model expansion" },
  { name: "Live Program Orchestration", description: "Learn & Earn campaigns, offer deployment, Daily Grind activations, social activation management" },
  { name: "Creative Refresh & Performance Optimization", description: "Content iteration, A/B testing, creative performance analysis, campaign tuning" },
  { name: "Reporting, Insights & Strategic Management", description: "Performance dashboards, cohort analysis, strategic recommendations, partner communication" },
];

export const managementTiers: ManagementTier[] = [
  { name: "Growth", price: "$2,500/mo" },
  { name: "Scale", price: "$4,500/mo" },
  { name: "Enterprise", price: "$6,500/mo" },
];

export const impressionBanks: ImpressionBank[] = [
  { volume: "50K", price: "$3,500", cpm: "$70" },
  { volume: "100K", price: "$7,000", cpm: "$70" },
  { volume: "250K", price: "$15,750", cpm: "$63" },
  { volume: "500K+", price: "$30,000+", cpm: "$60" },
];

export const performanceEconomics = {
  preferred: {
    name: "Attributed Commerce / Wholesale-Equivalent Participation",
    range: "20–40%",
    preferredRange: "30–40%",
    floor: "20%",
    description: "GolfN does not hold inventory or fulfill orders. Partner fulfills and drop-ships directly to customer. Orders generated through GolfN's marketplace or attributed commerce flow.",
    note: "Standard affiliate rates (3–5%) are explicitly insufficient. Margin funds user incentives, activation costs, and GolfN working margin.",
  },
  alternatives: [
    { name: "Revenue Share", range: "12–25%" },
    { name: "Fixed CPA", range: "$10–$75+" },
    { name: "Hybrid", range: "Custom" },
  ],
};

export const thresholds = [
  { label: "Setup Minimum", value: "$7,500" },
  { label: "Monthly Recurring Floor", value: "$5,000/mo", detail: "Management + Media combined" },
  { label: "Minimum Duration", value: "3 months" },
  { label: "Commerce Minimum", value: "20% margin", detail: "30–40% preferred" },
];

export const progressionStages: ProgressionStage[] = [
  { number: 1, name: "Awareness", description: "Full ecosystem distribution across all GolfN touchpoints", channels: ["Email", "In-app", "Push", "Banners", "Social", "Daily Grind awareness banners", "Blog/SEO"] },
  { number: 2, name: "Intent Capture", description: "Behavioral profiles, interest cohort building, AI lookalike model. Campaign is temporary — intelligence is permanent.", channels: ["Behavioral profiling", "Interest cohorts", "AI lookalike modeling"] },
  { number: 3, name: "Education", description: "Learn & Earn (More Ways to Earn). Verified comprehension — wrong answers mean no or reduced points.", channels: ["Learn & Earn modules", "Comprehension verification", "Points rewards"] },
  { number: 4, name: "Activation", description: "OAuth social connections, Daily Grind check-ins, offer saves, bookings", channels: ["Instagram OAuth", "X OAuth", "Facebook OAuth", "Daily Grind check-ins", "Offer saves"] },
  { number: 5, name: "Conversion", description: "Exclusive offers, points-back incentives, marketplace pathways, fuller-funnel attribution", channels: ["Exclusive offers", "Points-back", "Marketplace", "Attribution tracking"] },
  { number: 6, name: "Adoption & Real-World Engagement", description: "Course use, fittings, demo days, retail visits, QR scans, Daily Grind location check-ins", channels: ["Course check-ins", "Fittings", "Demo days", "Retail visits", "QR activations"] },
  { number: 7, name: "Advocacy & Social Proof", description: "OAuth-verified social proof, user-generated content, reviews, referrals", channels: ["Verified UGC", "Reviews", "Referrals", "Social sharing"] },
  { number: 8, name: "Retention & Evergreen", description: "AI lookalike auto-enrollment, seasonal re-activation, progressive engagement", channels: ["Auto-enrollment", "Seasonal campaigns", "Progressive rewards"] },
];

export const dailyGrindPhases = [
  { phase: "Early", model: "Managed", description: "Fixed monthly managed activation layer covering setup, infrastructure, reporting, and management" },
  { phase: "Growth", model: "Hybrid", description: "Monthly base fee + performance billing tied to verified check-ins" },
  { phase: "Mature", model: "Performance-Led", description: "Platform minimum + per-verified-check-in billing with volume tiers" },
];

export const archetypes: PartnershipArchetype[] = [
  { name: "Emerging / Test Program", subtitle: "Prove the model", stages: "Awareness + Cohort + Early Activation", managementTier: "Growth ($2,500/mo)", dailyGrind: "Fixed-fee if included", description: "Ideal for brands entering the platform. Build awareness, capture intent signals, and validate the partnership model with measurable early results." },
  { name: "Growth / Full-Funnel", subtitle: "Scale what works", stages: "Through Education, Activation, Conversion, Early Adoption/Advocacy", managementTier: "Scale ($4,500/mo)", dailyGrind: "Hybrid", description: "Full-funnel execution from education through conversion. Daily Grind moves to hybrid billing as check-in volume grows. Attribution deepens across the journey." },
  { name: "Enterprise / Strategic", subtitle: "Full platform integration", stages: "All Eight Stages", managementTier: "Enterprise ($6,500/mo)", dailyGrind: "Performance-led verified check-in model", description: "Complete platform integration with performance-led economics. Every stage activated. Real-world engagement drives measurable commerce outcomes." },
];

export const productDistinctions = {
  dailyGrind: { name: "Daily Grind", tagline: "What you do on the course", description: "Real-world, location-based check-in system. Golfers check in at courses, pro shops, events, Topgolf, PGA Tour events, partner retail locations.", notThis: "Not a general-purpose task engine" },
  learnAndEarn: { name: "Learn & Earn", tagline: "What you do on the couch", description: "Digital education and comprehension system. Lives within 'More Ways to Earn' section of the app. Users earn points by consuming content and proving comprehension.", notThis: "Wrong answers = no or reduced points" },
};

export const moneyMapLayers = [
  { name: "Setup", type: "One-time", range: "$7,500 – $35,000+", color: "#17A455" },
  { name: "Management", type: "Recurring", range: "$2,500 – $6,500/mo", color: "#4DB86A" },
  { name: "Media", type: "As served", range: "$3,500 – $30,000+", color: "#8DC54A" },
  { name: "Performance", type: "Variable", range: "20–40% margin", color: "#BFC951" },
];
