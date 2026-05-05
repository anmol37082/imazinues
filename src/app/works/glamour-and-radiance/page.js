import WorkHero from "@/features/works/components/WorkHero";
import WorkCaseStudyShowcase from "@/features/works/components/WorkCaseStudyShowcase";
import WorkStudyDetailsSection from "@/features/works/components/WorkStudyDetailsSection";
import WorkGalleryShowcase from "@/features/works/components/WorkGalleryShowcase";
import WorkImpactSection from "@/features/works/components/WorkImpactSection";
import WorkMoreProjectsSection from "@/features/works/components/WorkMoreProjectsSection";
import WorkFooter from "@/features/works/components/WorkFooter";

const glamourBanner1 = "/creativeagency/packagingdesign.webp";
const glamourBanner2 = "/creativeagency/photovideoshoot.jpg.webp";
const glamourBanner3 = "/creativeagency/BrandGuidelines.webp";
const glamourBanner4 = "/creativeagency/socialmediamanagement.webp";
const glamourBanner5 = "/creativeagency/advideo.webp";

const glamourGalleryProps = {
  firstBannerImage: glamourBanner1,
  firstBannerAlt: "Glamour and Radiance skincare hero banner one",
  firstRow: [
    {
      src: glamourBanner2,
      alt: "Glamour and Radiance skincare product display one",
    },
    {
      src: glamourBanner3,
      alt: "Glamour and Radiance skincare product display two",
    },
  ],
  secondBannerImage: glamourBanner4,
  secondBannerAlt: "Glamour and Radiance skincare hero banner two",
  cards: [
    {
      src: glamourBanner5,
      alt: "Glamour and Radiance model based brand visual",
    },
    {
      src: glamourBanner1,
      alt: "Glamour and Radiance skincare hero banner one repeat",
    },
    {
      src: glamourBanner2,
      alt: "Glamour and Radiance skincare product display one repeat",
    },
    {
      src: glamourBanner3,
      alt: "Glamour and Radiance skincare product display two repeat",
    },
  ],
};

const glamourFooterImage = glamourBanner5;

export default function GlamourAndRadiancePage() {
  return (
    <>
      <WorkHero
        title="Glamour and Radiance"
        description="From zero to launch, Shopify store, packaging, product shoots, model videos, and full brand marketing."
        details={[
          { label: "Company", value: "Glamour and Radiance" },
          { label: "Segment", value: "Skincare & Beauty Products" },
          { label: "Year", value: "2024" },
          { label: "Role", value: "Complete Brand Development & Digital Marketing" },
          {
            label: "Expertise",
            value: [
              "Shopify Website Design",
              "Brand Identity & Packaging Design",
              "Product Naming Strategy",
              "Social Media Management",
              "Ad Campaigns",
              "Product Photography & Model Shoots",
              "Concept & Theme-Based Videos",
            ],
          },
        ]}
      />
      <WorkCaseStudyShowcase
        leftImage={glamourBanner1}
        leftAlt="Glamour and Radiance skincare concept visual one"
        rightImage={glamourBanner4}
        rightAlt="Glamour and Radiance skincare concept visual two"
      />
      <WorkStudyDetailsSection
        researchTitle="Research Methods"
        researchItems={[
          "Skincare Market Research",
          "Competitor Analysis",
          "Consumer Behavior Study",
          "Product Positioning Research",
        ]}
        ideationTitle="Ideation"
        ideationItems={[
          "Brand Identity Development",
          "Packaging Concepts",
          "Product Launch Campaigns",
          "Visual Content Strategy",
        ]}
        overview="For Glamour and Radiance, Imazine Us built the brand completely from scratch, from concept to full digital presence. The project included Shopify website development, brand identity creation, social media management, ad campaigns, SEO, product photo shoots, model-based product photo and video shoots, product packaging design, and product name suggestions. The goal was to create a premium skincare brand with a strong visual identity and a powerful online presence."
        challenge="The main challenge was to build an entirely new skincare brand from scratch and position it as a trustworthy and premium product line in a highly competitive beauty market. This required developing a unique brand identity, attractive packaging, high-quality product visuals, and a strong digital marketing strategy to build awareness and credibility."
      />
      <WorkGalleryShowcase {...glamourGalleryProps} />
      <WorkImpactSection
        impactParagraph="Through strategic branding, premium packaging design, professional product photography, and model-based video production, the brand gained a strong visual identity. Along with a professionally designed website, social media marketing, ads, and SEO optimization, the brand achieved a complete digital ecosystem that helped it look professional and appealing across all platforms."
        resultParagraph="The project successfully transformed Glamour and Radiance into a fully established skincare brand with a modern identity, professional e-commerce platform, and strong digital presence, enabling the brand to confidently enter the beauty and skincare market."
      />
      <WorkMoreProjectsSection currentProjectHref="/works/glamour-and-radiance" />
      <WorkFooter
        imageSrc={glamourFooterImage}
        imageAlt="Glamour and Radiance premium skincare editorial portrait"
      />
    </>
  );
}
