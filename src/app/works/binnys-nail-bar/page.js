import WorkHero from "@/features/works/components/WorkHero";
import WorkCaseStudyShowcase from "@/features/works/components/WorkCaseStudyShowcase";
import WorkStudyDetailsSection from "@/features/works/components/WorkStudyDetailsSection";
import WorkGalleryShowcase from "@/features/works/components/WorkGalleryShowcase";
import WorkImpactSection from "@/features/works/components/WorkImpactSection";
import WorkMoreProjectsSection from "@/features/works/components/WorkMoreProjectsSection";
import WorkFooter from "@/features/works/components/WorkFooter";

const binnysBanner1 = "/binnynail,sbar/WorkCaseStudyShowcase1.webp";
const binnysBanner2 = "/binnynail,sbar/WorkCaseStudyShowcase2.webp";
const binnysBanner3 = "/binnynail,sbar/WorkGalleryShowcase1.webp";
const binnysBanner4 = "/binnynail,sbar/WorkGalleryShowcase2.webp";
const binnysBanner5 = "/binnynail,sbar/WorkGalleryShowcase3.webp";
const binnysBanner6 = "/binnynail,sbar/WorkGalleryShowcase4.webp";
const binnysBanner7 = "/binnynail,sbar/WorkGalleryShowcase5.webp";
const binnysBanner8 = "/binnynail,sbar/WorkGalleryShowcase6.webp";
const binnysBanner9 = "/binnynail,sbar/WorkGalleryShowcase7.webp";
const binnysBanner10 = "/binnynail,sbar/WorkGalleryShowcase8.webm";
const binnysBanner10Fallback = "/binnynail,sbar/WorkGalleryShowcasefallback10.mp4";
const binnysGalleryProps = {
  firstBannerImage: binnysBanner3,
  firstBannerAlt: "Binny's Nail Bar premium brand visual one",
  firstRow: [
    {
      src: binnysBanner4,
      alt: "Binny's Nail Bar interior branding visual",
    },
    {
      src: binnysBanner5,
      alt: "Binny's Nail Bar campaign visual one",
    },
  ],
  secondBannerImage: binnysBanner6,
  secondBannerAlt: "Binny's Nail Bar premium brand visual two",
  cards: [
    {
      src: binnysBanner7,
      alt: "Binny's Nail Bar campaign visual two",
    },
    {
      src: binnysBanner8,
      alt: "Binny's Nail Bar campaign visual three",
    },
    {
      src: binnysBanner9,
      alt: "Binny's Nail Bar campaign visual four",
    },
    {
      src: binnysBanner10,
      fallbackSrc: binnysBanner10Fallback,
      alt: "Binny's Nail Bar campaign visual five",
    },
  ],
};



export default function BinnysNailBarPage() {
  return (
    <>
      <WorkHero
        title="Binny's Nail Bar"
        description="Social media, influencer marketing, salon events, campaigns, and shoots for a multi-branch brand."
        details={[
          { label: "Company", value: "Binny's Nail Bar" },
          { label: "Segment", value: "Beauty & Nail Salon Industry" },
          { label: "Year", value: "2024" },
          { label: "Role", value: "Brand Marketing, Social Media Management & Creative Campaign Strategy" },
          {
            label: "Expertise",
            value: [
              "Social Media Management",
              "Festival & Offer Campaigns",
              "Influencer Marketing",
              "Event Planning & Promotion",
              "Salon Photoshoots & Video Shoots",
              "Multi-Branch Digital Marketing",
            ],
          },
        ]}
      />
      <WorkCaseStudyShowcase
        leftImage={binnysBanner1}
        leftAlt="Binny's Nail Bar salon branding visual one"
        rightImage={binnysBanner2}
        rightAlt="Binny's Nail Bar salon branding visual two"
      />
      <WorkStudyDetailsSection
        researchTitle="Research Methods"
        researchItems={[
          "Beauty Industry Market Research",
          "Competitor Analysis",
          "Customer Trend Analysis",
          "Campaign Performance Tracking",
        ]}
        ideationTitle="Ideation"
        ideationItems={[
          "Festival Campaign Concepts",
          "Salon Event Planning",
          "Influencer Collaboration Strategy",
          "Offer & Promotion Campaign Planning",
          "Content Strategy for Multi-Branch Engagement",
        ]}
        overview="For Binny's Nail Bar, Imazine Us handled complete social media management, festival campaigns, promotional ad campaigns, influencer marketing, and professional shoots. The work was executed for five different branches across multiple locations, focusing on building strong digital engagement and promoting seasonal offers, their services, and salon experiences."
        challenge="The key challenge was to maintain a consistent brand presence across multiple branches while continuously creating engaging content for festivals, offers, and beauty trends. The brand also required creative campaigns and events to attract new clients and keep the audience excited throughout the year."
      />
      <WorkGalleryShowcase {...binnysGalleryProps} />
      <WorkImpactSection
        impactParagraph="Through well-planned social media strategies, festival-based campaigns, influencer collaborations, and professional photoshoots, the brand maintained a vibrant and active online presence. In-salon events and themed promotions helped increase customer engagement and created buzz around the brand."
        resultParagraph="The project successfully strengthened the digital presence of Binny's Nail Bar, increased customer engagement across its branches, and positioned the brand as a trendy and highly active beauty destination in the nail and beauty industry."
      />
      <WorkMoreProjectsSection currentProjectHref="/works/binnys-nail-bar" />
      
    </>
  );
}
