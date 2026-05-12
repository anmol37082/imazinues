import WorkHero from "@/features/works/components/WorkHero";
import WorkCaseStudyShowcase from "@/features/works/components/WorkCaseStudyShowcase";
import WorkStudyDetailsSection from "@/features/works/components/WorkStudyDetailsSection";
import WorkGalleryShowcase from "@/features/works/components/WorkGalleryShowcase";
import WorkImpactSection from "@/features/works/components/WorkImpactSection";
import WorkMoreProjectsSection from "@/features/works/components/WorkMoreProjectsSection";
import WorkFooter from "@/features/works/components/WorkFooter";

const vetrajBanner1 = "/vetrajpethospital/WorkCaseStudyShowcase1.webp";
const vetrajBanner2 = "/vetrajpethospital/WorkCaseStudyShowcase2.webp";
const vetrajBanner3 = "/vetrajpethospital/WorkGalleryShowcase1.webp";
const vetrajBanner4 = "/vetrajpethospital/WorkGalleryShowcase2.webp";
const vetrajBanner5 = "/vetrajpethospital/WorkGalleryShowcase3.webp";
const vetrajBanner6 = "/vetrajpethospital/WorkGalleryShowcase4.webp";
const vetrajBanner7 = "/vetrajpethospital/WorkGalleryShowcase5.webp";
const vetrajBanner8 = "/vetrajpethospital/WorkGalleryShowcase6.webp";
const vetrajBanner9 = "/vetrajpethospital/WorkGalleryShowcase7.webp";
const vetrajBanner10 = "/vetrajpethospital/WorkGalleryShowcase8.webp";

const vetrajGalleryProps = {
  firstBannerImage: vetrajBanner3,
  firstBannerAlt: "Vetraj Pet Hospital banner one",
  firstRow: [
    {
      src: vetrajBanner4,
      alt: "Vetraj Pet Hospital promotional visual one",
    },
    {
      src: vetrajBanner5,
      alt: "Vetraj Pet Hospital promotional visual two",
    },
  ],
  secondBannerImage: vetrajBanner6,
  secondBannerAlt: "Vetraj Pet Hospital banner two",
  cards: [
    {
      src: vetrajBanner7,
      alt: "Vetraj Pet Hospital model-based promotional visual",
    },
    {
      src: vetrajBanner8,
      alt: "Vetraj Pet Hospital banner one repeat",
    },
    {
      src: vetrajBanner9,
      alt: "Vetraj Pet Hospital promotional visual one repeat",
    },
    {
      src: vetrajBanner10,
      alt: "Vetraj Pet Hospital promotional visual two repeat",
    },
  ],
};

const vetrajFooterImage = vetrajBanner5;

export default function VetrajPetHospitalPage() {
  return (
    <>
      <WorkHero
        title="Vetraj Pet Hospital"
        description="Ads, outdoor branding, product shoots, and promotional campaigns to grow the pet care brand's visibility."
        details={[
          { label: "Company", value: "Vetraj Pet Hospital" },
          { label: "Segment", value: "Pet Care & Veterinary Services" },
          { label: "Year", value: "2024" },
          { label: "Role", value: "Brand Marketing, Advertising & Creative Production" },
          {
            label: "Expertise",
            value: [
              "Ad Campaign Strategy",
              "Outdoor Branding",
              "Product Photography",
              "Promotional Video Production",
              "Offline Marketing Materials Design",
            ],
          },
        ]}
      />
      <WorkCaseStudyShowcase
        leftImage={vetrajBanner1}
        leftAlt="Vetraj Pet Hospital promotional visual one"
        rightImage={vetrajBanner2}
        rightAlt="Vetraj Pet Hospital promotional visual two"
      />
      <WorkStudyDetailsSection
        researchTitle="Research Methods"
        researchItems={[
          "Pet Care Market Research",
          "Competitor Analysis",
          "Audience Targeting Research",
          "Campaign Performance Tracking",
        ]}
        ideationTitle="Ideation"
        ideationItems={[
          "Ad Campaign Concepts",
          "Product Promotion Strategy",
          "Outdoor Branding Planning",
          "Promotional Content Creation",
        ]}
        overview="For Vetraj Pet Hospital, Imazine US executed a complete marketing and branding strategy, including online ad campaigns, offline advertising campaigns, product photo shoots, product photo & video shoots with models, and outdoor branding activities. The project also included the design and production of hoardings, banners, flex boards, brochures, and other promotional materials to strengthen the brand’s visibility."
        challenge="The main challenge was to increase brand awareness and reach a larger audience of pet owners through both digital and offline platforms. The brand required impactful advertising creatives, professional product visuals, and strong outdoor visibility to effectively communicate its services and products."
      />
      <WorkGalleryShowcase {...vetrajGalleryProps} />
      <WorkImpactSection
        impactParagraph="Through strategic ad campaigns, professional product photography, model-based promotional videos, and large-scale outdoor branding, the brand gained stronger recognition in the market. Well-designed hoardings, banners, flex boards, and brochures helped create a consistent and noticeable brand presence across multiple touchpoints."
        resultParagraph="The project successfully enhanced the visibility and promotional reach of Vetraj Pet Hospital, helping the brand connect with more pet owners and establish a stronger presence in both digital and offline marketing channels."
      />
      <WorkMoreProjectsSection currentProjectHref="/works/vetraj-pet-hospital" />
      <WorkFooter imageSrc={vetrajFooterImage} imageAlt="Vetraj Pet Hospital promotional portrait" />
    </>
  );
}
