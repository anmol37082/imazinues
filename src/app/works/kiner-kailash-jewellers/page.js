import WorkHero from "@/features/works/components/WorkHero";
import WorkCaseStudyShowcase from "@/features/works/components/WorkCaseStudyShowcase";
import WorkStudyDetailsSection from "@/features/works/components/WorkStudyDetailsSection";
import WorkGalleryShowcase from "@/features/works/components/WorkGalleryShowcase";
import WorkImpactSection from "@/features/works/components/WorkImpactSection";
import WorkMoreProjectsSection from "@/features/works/components/WorkMoreProjectsSection";
import WorkFooter from "@/features/works/components/WorkFooter";

const kinerGalleryProps = {
  firstBannerImage:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  firstBannerAlt: "Luxury jewellery showcase with warm reflections",
  firstRow: [
    {
      src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
      alt: "Diamond ring close-up",
    },
    {
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      alt: "Gold jewellery arranged on a dark surface",
    },
  ],
  secondBannerImage:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  secondBannerAlt: "High-end jewellery display in a luxury showroom",
  cards: [
    {
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      alt: "Necklace detail on velvet",
    },
    {
      src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
      alt: "Luxury bracelet with soft highlights",
    },
    {
      src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
      alt: "Gold and diamond pieces in a retail display",
    },
    {
      src: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80",
      alt: "Premium ring collection close-up",
    },
  ],
};

const kinerFooterImage =
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80";

export default function KinerKailashJewellersPage() {
  return (
    <>
      <WorkHero
        title="Kiner Kailash Jewellers"
        description="A refined digital presence for a jewellery brand focused on trust, luxury, and clear product storytelling."
        details={[
          { label: "Company", value: "Kiner Kailash Jewellers" },
          { label: "Expertise", value: "Web design" },
          { label: "Segment", value: "Luxury retail" },
          { label: "Year", value: "2024" },
          { label: "Role", value: "Web designer" },
        ]}
      />
      <WorkCaseStudyShowcase
        leftImage="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1400&q=80"
        leftAlt="Kiner Kailash jewellery close-up"
        rightImage="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80"
        rightAlt="Kiner Kailash luxury jewellery display"
      />
      <WorkStudyDetailsSection
        overview="Kiner Kailash Jewellers needed a clearer digital structure that could present collections with more trust, stronger product discovery, and a premium feel across the shopping journey."
        challenge="The existing experience needed to be reorganized so customers could find answers faster, understand product value earlier, and move through the site with less friction."
      />
      <WorkGalleryShowcase {...kinerGalleryProps} />
      <WorkImpactSection
        paragraphs={[
          "After working with the website analytics and conducting some research, it became clear which problems needed to be addressed in order to improve the conversion rate of the landing page.",
          "The updated architecture allowed us to connect every piece to the brand new navigation system.",
          "After A/B testing the mockups, the general direction was approved, and the visuals were added quickly.",
          "The updated website set a new standard for product conversion and minimized the number of support requests.",
        ]}
      />
      <WorkMoreProjectsSection />
      <WorkFooter imageSrc={kinerFooterImage} imageAlt="Kiner Kailash Jewellers luxury portrait" />
    </>
  );
}
