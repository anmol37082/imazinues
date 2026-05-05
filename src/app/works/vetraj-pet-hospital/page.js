import WorkHero from "@/features/works/components/WorkHero";
import WorkCaseStudyShowcase from "@/features/works/components/WorkCaseStudyShowcase";
import WorkStudyDetailsSection from "@/features/works/components/WorkStudyDetailsSection";
import WorkGalleryShowcase from "@/features/works/components/WorkGalleryShowcase";
import WorkImpactSection from "@/features/works/components/WorkImpactSection";
import WorkMoreProjectsSection from "@/features/works/components/WorkMoreProjectsSection";
import WorkFooter from "@/features/works/components/WorkFooter";

const vetrajBanner1 = "/creativeagency/outdoorbrandingDesign.jpg.webp";
const vetrajBanner2 = "/creativeagency/advideo.webp";
const vetrajBanner3 = "/creativeagency/digitalmarketing.jpg.webp";
const vetrajBanner4 = "/creativeagency/printdesign.webp";
const vetrajBanner5 = "/creativeagency/socialmediamanagement.webp";

const vetrajGalleryProps = {
  firstBannerImage: vetrajBanner1,
  firstBannerAlt: "Vetraj Pet Hospital banner one",
  firstRow: [
    {
      src: vetrajBanner2,
      alt: "Vetraj Pet Hospital promotional visual one",
    },
    {
      src: vetrajBanner3,
      alt: "Vetraj Pet Hospital promotional visual two",
    },
  ],
  secondBannerImage: vetrajBanner4,
  secondBannerAlt: "Vetraj Pet Hospital banner two",
  cards: [
    {
      src: vetrajBanner5,
      alt: "Vetraj Pet Hospital model-based promotional visual",
    },
    {
      src: vetrajBanner1,
      alt: "Vetraj Pet Hospital banner one repeat",
    },
    {
      src: vetrajBanner2,
      alt: "Vetraj Pet Hospital promotional visual one repeat",
    },
    {
      src: vetrajBanner3,
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
        rightImage={vetrajBanner4}
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
