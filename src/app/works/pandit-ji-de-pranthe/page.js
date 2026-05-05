import WorkHero from "@/features/works/components/WorkHero";
import WorkCaseStudyShowcase from "@/features/works/components/WorkCaseStudyShowcase";
import WorkStudyDetailsSection from "@/features/works/components/WorkStudyDetailsSection";
import WorkGalleryShowcase from "@/features/works/components/WorkGalleryShowcase";
import WorkImpactSection from "@/features/works/components/WorkImpactSection";
import WorkMoreProjectsSection from "@/features/works/components/WorkMoreProjectsSection";
import WorkFooter from "@/features/works/components/WorkFooter";

const panditBanner1 =
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1400&q=80";
const panditBanner2 = "/creativeagency/packagingdesign.webp";
const panditBanner3 = "/creativeagency/indorbranding.webp";
const panditBanner4 = "/creativeagency/socialmediamanagement.webp";
const panditBanner5 = "/creativeagency/printdesign.webp";

const panditGalleryProps = {
  firstBannerImage: panditBanner1,
  firstBannerAlt: "Pandit Ji De Pranthe food brand visual one",
  firstRow: [
    {
      src: panditBanner2,
      alt: "Pandit Ji De Pranthe packaging visual",
    },
    {
      src: panditBanner3,
      alt: "Pandit Ji De Pranthe interior branding visual",
    },
  ],
  secondBannerImage: panditBanner4,
  secondBannerAlt: "Pandit Ji De Pranthe food brand visual two",
  cards: [
    {
      src: panditBanner5,
      alt: "Pandit Ji De Pranthe print design visual",
    },
    {
      src: panditBanner1,
      alt: "Pandit Ji De Pranthe food brand visual one repeat",
    },
    {
      src: panditBanner2,
      alt: "Pandit Ji De Pranthe packaging visual repeat",
    },
    {
      src: panditBanner3,
      alt: "Pandit Ji De Pranthe interior branding visual repeat",
    },
  ],
};

const panditFooterImage = panditBanner5;

export default function PanditJiDePranthePage() {
  return (
    <>
      <WorkHero
        title="Pandit Ji De Pranthe"
        description="Grand Mohali launch with ads, influencer buzz, opening event, and mouth-watering food content."
        details={[
          { label: "Company", value: "Pandit Ji De Pranthe" },
          { label: "Segment", value: "Food & Restaurant" },
          { label: "Year", value: "2025" },
          { label: "Role", value: "Brand Strategy, Digital Marketing & Creative Production" },
          {
            label: "Expertise",
            value: [
              "Social Media Management",
              "Ad Campaign Strategy",
              "Influencer Marketing",
              "Event Promotion",
              "Food Photography & Videography",
              "Short-form Video Production",
            ],
          },
        ]}
      />
      <WorkCaseStudyShowcase
        leftImage={panditBanner1}
        leftAlt="Pandit Ji De Pranthe food visual one"
        rightImage={panditBanner4}
        rightAlt="Pandit Ji De Pranthe food visual two"
      />
      <WorkStudyDetailsSection
        researchTitle="Research Methods"
        researchItems={[
          "Market Research",
          "Local Audience Analysis",
          "Competitor Study",
          "Campaign Performance Tracking",
        ]}
        ideationTitle="Ideation"
        ideationItems={[
          "Brand Launch Strategy",
          "Content Planning",
          "Short-form Video Concepts",
          "Influencer Collaboration Strategy",
          "Store Launch Campaign Planning",
        ]}
        overview="For Pandit Ji De Pranthe, Imazine Us managed the brand’s complete digital launch from zero, including social media management, promotional ad campaigns, influencer marketing, opening event promotion, and professional photo & video shoots. The project also included documenting the entire journey of the new Mohali outlet, from the initial store setup to the final makeover, along with creating multiple short-form videos to showcase the brand story and food experience."
        challenge="The main challenge was to successfully launch a new outlet in Mohali while maintaining the strong reputation of the 75-year-old Ludhiana-based brand. The brand required a strong digital introduction, engaging promotional content, and effective marketing campaigns to quickly build awareness in a new market."
      />
      <WorkGalleryShowcase {...panditGalleryProps} />
      <WorkImpactSection
        impactParagraph="Through strategic social media campaigns, influencer collaborations, promotional ads, and high-quality food shoots, the brand gained strong attention during its launch phase. Behind-the-scenes videos, store transformation content, and multiple short-form videos helped create excitement and curiosity among local audiences."
        resultParagraph="The project successfully created a powerful launch presence for Pandit Ji De Pranthe in Mohali, generating strong digital visibility, audience engagement, and awareness for the newly opened outlet while highlighting the legacy of the 75-year-old brand."
      />
      <WorkMoreProjectsSection currentProjectHref="/works/pandit-ji-de-pranthe" />
      <WorkFooter imageSrc={panditFooterImage} imageAlt="Pandit Ji De Pranthe food brand editorial portrait" />
    </>
  );
}
