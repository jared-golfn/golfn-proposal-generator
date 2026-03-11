// Sanity GROQ queries for partner presentations
// Phase 1: Using static data. These queries are ready for when content is migrated to Sanity.

export const partnerPresentationQuery = `*[_type == "partnerPresentation" && slug.current == $slug][0]{
  title,
  partnerName,
  partnerLogo,
  primaryColor,
  secondaryColor,
  productCategory,
  productNames,
  linkPassword,
  "commercialLayers": *[_type == "commercialLayer"] | order(order asc),
  "progressionStages": *[_type == "progressionStage"] | order(order asc),
  "archetypes": *[_type == "partnershipArchetype"] | order(order asc),
  "metrics": *[_type == "platformMetric"] | order(order asc),
  "settings": *[_type == "globalSettings"][0]
}`
