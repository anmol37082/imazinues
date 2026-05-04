import WorkHero from "@/features/works/components/WorkHero";
import WorkCaseStudyShowcase from "@/features/works/components/WorkCaseStudyShowcase";
import WorkStudyDetailsSection from "@/features/works/components/WorkStudyDetailsSection";
import WorkGalleryShowcase from "@/features/works/components/WorkGalleryShowcase";
import WorkImpactSection from "@/features/works/components/WorkImpactSection";
import WorkMoreProjectsSection from "@/features/works/components/WorkMoreProjectsSection";
import WorkFooter from "@/features/works/components/WorkFooter";

const modernLifestyleBigBanner1 = "/modernlifestyle/bigbanner1.webp";
const modernLifestyleBigBanner2 = "/modernlifestyle/bigbanner2.webp";
const modernLifestyleBanner1 = "/modernlifestyle/banner1.webp";
const modernLifestyleBanner2 = "/modernlifestyle/banner2.webp";
const modernLifestyleBanner3 = "/modernlifestyle/banner3.webp";

const modernGalleryProps = {
  firstBannerImage: modernLifestyleBigBanner1,
  firstBannerAlt: "Modern lifestyle big banner one",
  firstRow: [
    {
      src: modernLifestyleBanner1,
      alt: "Modern lifestyle banner one",
    },
    {
      src: modernLifestyleBanner2,
      alt: "Modern lifestyle banner two",
    },
  ],
  secondBannerImage: modernLifestyleBigBanner2,
  secondBannerAlt: "Modern lifestyle big banner two",
  cards: [
    {
      src: modernLifestyleBanner3,
      alt: "Modern lifestyle banner three",
    },
    {
      src: modernLifestyleBanner1,
      alt: "Modern lifestyle banner one repeat",
    },
    {
      src: modernLifestyleBanner2,
      alt: "Modern lifestyle banner two repeat",
    },
    {
      src: modernLifestyleBanner3,
      alt: "Modern lifestyle banner three repeat",
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
        leftImage={modernLifestyleBanner2}
        leftAlt="Modern lifestyle big banner one"
        rightImage={modernLifestyleBigBanner2}
        rightAlt="Modern lifestyle big banner two"
      />
      <WorkStudyDetailsSection
        overview="Complete brand transformation from logo creation to full brand setup. The project included designing a modern brand identity, setting up professional social media profiles, conducting a brand photoshoot, product shoot, and producing creative model-based video content to present the jewellery in a premium lifestyle format."
        challenge="The main challenge was to convert a traditional jewellery business into a modern lifestyle brand while maintaining its heritage value. The brand needed a fresh visual identity, premium content, and a strong digital presence to connect with today’s audience."
      />
      <WorkGalleryShowcase {...modernGalleryProps} />
      <WorkImpactSection
        impactParagraph="A consistent and premium brand presence was created through modern logo design, professional photography, product visuals, and cinematic video production, helping the brand stand out visually across digital platforms."
        resultParagraph="The project successfully established a strong modern brand identity and digital presence, positioning Modern Lifestyle Jewellers as a premium jewellery brand with a contemporary lifestyle appeal."
      />
      <WorkMoreProjectsSection />
      <WorkFooter imageSrc={modernFooterImage} imageAlt="Modern Lifestyle Jewellers editorial portrait" />
    </>
  );
}
