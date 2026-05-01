import WorkHero from "@/features/works/components/WorkHero";
import WorkCaseStudyShowcase from "@/features/works/components/WorkCaseStudyShowcase";
import WorkStudyDetailsSection from "@/features/works/components/WorkStudyDetailsSection";
import WorkGalleryShowcase from "@/features/works/components/WorkGalleryShowcase";
import WorkImpactSection from "@/features/works/components/WorkImpactSection";
import WorkMoreProjectsSection from "@/features/works/components/WorkMoreProjectsSection";
import WorkFooter from "@/features/works/components/WorkFooter";

const modernGalleryProps = {
  firstBannerImage:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  firstBannerAlt: "Modern jewellery display with soft editorial lighting",
  firstRow: [
    {
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
      alt: "Minimal gold jewellery close-up",
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      alt: "Elegant jewellery pieces on a soft background",
    },
  ],
  secondBannerImage:
    "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
  secondBannerAlt: "Luxury jewellery store interior",
  cards: [
    {
      src: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80",
      alt: "Gold ring on a neutral backdrop",
    },
    {
      src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
      alt: "Jewellery detail with editorial crop",
    },
    {
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      alt: "Premium jewellery collection display",
    },
    {
      src: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=80",
      alt: "Soft lit fashion jewellery close-up",
    },
  ],
};

const modernFooterImage =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80";

export default function ModernLifestyleJewellersPage() {
  return (
    <>
      <WorkHero
        title="Modern Lifestyle Jewellers"
        description="A modern storefront experience designed to present collections with a premium, editorial feel."
        details={[
          { label: "Company", value: "Modern Lifestyle Jewellers" },
          { label: "Expertise", value: "Brand website" },
          { label: "Segment", value: "Jewellery" },
          { label: "Year", value: "2024" },
          { label: "Role", value: "Product designer" },
        ]}
      />
      <WorkCaseStudyShowcase
        leftImage="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80"
        leftAlt="Modern jewellery close-up"
        rightImage="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1400&q=80"
        rightAlt="Modern lifestyle jewellery display"
      />
      <WorkStudyDetailsSection
        overview="Modern Lifestyle Jewellers was structured around a cleaner storytelling flow so customers could explore categories, compare collections, and understand the brand without visual clutter."
        challenge="The main challenge was to simplify the experience while still keeping it premium, making the interface feel elegant, informative, and easy to navigate on every screen."
      />
      <WorkGalleryShowcase {...modernGalleryProps} />
      <WorkImpactSection
        paragraphs={[
          "After working with the website analytics and conducting some research, it became clear which problems needed to be addressed in order to improve the conversion rate of the landing page.",
          "The updated architecture allowed us to connect every piece to the brand new navigation system.",
          "After A/B testing the mockups, the general direction was approved, and the visuals were added quickly.",
          "The updated website set a new standard for product conversion and minimized the number of support requests.",
        ]}
      />
      <WorkMoreProjectsSection />
      <WorkFooter imageSrc={modernFooterImage} imageAlt="Modern Lifestyle Jewellers editorial portrait" />
    </>
  );
}
