import { PresentationPage } from "@/components/presentation/PresentationPage";
import { client } from "@/lib/sanity/client";

// Partner data from Sanity (falls back to slug-based defaults)
async function getPartner(slug: string) {
  // Try Sanity first
  try {
    const partner = await client.fetch(
      `*[_type == "partnerPresentation" && slug.current == $slug][0]{
        partnerName,
        partnerColor,
        "partnerLogo": partnerLogo.asset->url,
        partnerCategory,
        password
      }`,
      { slug }
    );
    if (partner) return partner;
  } catch {
    // Sanity not configured yet — fall through to defaults
  }

  // Fallback: generate from slug
  const name = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    partnerName: name,
    partnerColor: "#17A455",
    partnerLogo: null,
    partnerCategory: null,
    password: null,
  };
}

export default async function PartnerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const partner = await getPartner(slug);

  return (
    <PresentationPage
      partnerName={partner.partnerName}
      partnerColor={partner.partnerColor}
    />
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const partner = await getPartner(slug);

  return {
    title: `GolfN × ${partner.partnerName} — Partner Presentation`,
    description: `Partnership presentation prepared for ${partner.partnerName}`,
  };
}
