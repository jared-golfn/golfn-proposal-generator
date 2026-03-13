// Sanity GROQ queries for partner presentations
// Updated to match expanded partnerPresentation schema

import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'

const builder = imageUrlBuilder(client)
export function urlFor(source: any) {
  return builder.image(source)
}

// ── Main presentation query ─────────────────────────────────────
export const partnerPresentationQuery = `*[_type == "partnerPresentation" && slug.current == $slug && isActive == true][0]{
  partnerName,
  "slug": slug.current,
  partnerLogo,
  primaryColor,
  secondaryColor,
  productCategory,
  productNames,
  recommendedPath,
  keyMarkets,

  // Campaign customization
  heroSubtitle,
  recommendedPathRationale,
  customScenarios,
  highlightedActivations,
  customFAQ,

  // Agency / Portfolio
  isPortfolio,
  agencyName,
  agencyLogo,
  portfolioBrands[]{
    brandName,
    brandLogo,
    brandColor,
    category,
    products,
    pitch,
    targetingEdge
  },

  // Commerce
  commerceModel,
  commerceNotes,
  hasExistingAffiliate,

  // Admin
  linkPassword,
  contactEmail,
  bookingUrl,

  // Related global data
  "metrics": *[_type == "platformMetric"] | order(order asc){
    label, value, subtitle, isHighlighted
  },
  "settings": *[_type == "presentationSettings"][0]{
    positioningStatement,
    notStatements,
    setupMinimum,
    recurringMinimum,
    durationMinimum,
    commerceMinimum
  }
}`

// ── List all active presentations (for generateStaticParams) ────
export const allPresentationSlugsQuery = `*[_type == "partnerPresentation" && isActive == true]{
  "slug": slug.current
}`

// ── Quick list for the Studio dashboard ─────────────────────────
export const presentationListQuery = `*[_type == "partnerPresentation"] | order(partnerName asc){
  partnerName,
  "slug": slug.current,
  productCategory,
  isActive,
  partnerLogo
}`
