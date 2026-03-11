"use client";

import { HeroSection } from "@/components/presentation/HeroSection";
import { PositioningSection } from "@/components/presentation/PositioningSection";
import { CommercialSection } from "@/components/presentation/CommercialSection";
import { ProgressionSection } from "@/components/presentation/ProgressionSection";
import { ProductSection } from "@/components/presentation/ProductSection";
import { ArchetypeSection } from "@/components/presentation/ArchetypeSection";
import { ClosingSection } from "@/components/presentation/ClosingSection";
import { PresentationNav } from "@/components/presentation/PresentationNav";

interface PresentationPageProps {
  partnerName?: string;
  partnerColor?: string;
}

export function PresentationPage({ partnerName, partnerColor }: PresentationPageProps) {
  return (
    <>
      <PresentationNav />
      <main>
        <div id="hero">
          <HeroSection partnerName={partnerName} />
        </div>
        <div id="positioning">
          <PositioningSection />
        </div>
        <div id="commercial">
          <CommercialSection />
        </div>
        <div id="progression">
          <ProgressionSection />
        </div>
        <div id="products">
          <ProductSection />
        </div>
        <div id="archetypes">
          <ArchetypeSection />
        </div>
        <div id="closing">
          <ClosingSection partnerName={partnerName} />
        </div>
      </main>
    </>
  );
}
