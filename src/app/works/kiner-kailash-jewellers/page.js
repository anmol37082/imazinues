import WorkHero from "@/features/works/components/WorkHero";
import WorkCaseStudyShowcase from "@/features/works/components/WorkCaseStudyShowcase";
import WorkStudyDetailsSection from "@/features/works/components/WorkStudyDetailsSection";
import WorkGalleryShowcase from "@/features/works/components/WorkGalleryShowcase";
import WorkImpactSection from "@/features/works/components/WorkImpactSection";
import WorkMoreProjectsSection from "@/features/works/components/WorkMoreProjectsSection";
import WorkFooter from "@/features/works/components/WorkFooter";

const kinerBanner1 = "/kinerkailash/bigbnner1.webp";
const kinerBanner2 = "/kinerkailash/bigbnner2.webp";
const kinerBanner3 = "/kinerkailash/KKJ_1.webp";
const kinerBanner4 = "/kinerkailash/KKJ_2.webp";
const kinerBanner5 = "/kinerkailash/KKJ_3.webp";
const kinerBanner6 = "/kinerkailash/KKJ_4.webp";
const kinerBanner7 = "/kinerkailash/KKJ_5.webp";
const kinerBanner8 = "/kinerkailash/KKJ_6.webp";
const kinerBanner9 = "/kinerkailash/KKJ_7.webp";
const kinerBanner10 = "/kinerkailash/KKJ_8.webp";

const kinerGalleryProps = {
  firstBannerImage: kinerBanner1,
  firstBannerAlt: "Kiner Kailash Jewellers product visual one",
  firstRow: [
    {
      src: kinerBanner5,
      alt: "Kiner Kailash Jewellers product visual two",
    },
    {
      src: kinerBanner6,
      alt: "Kiner Kailash Jewellers product visual three",
    },
  ],
  secondBannerImage: kinerBanner2,
  secondBannerAlt: "Kiner Kailash Jewellers product visual four",
  cards: [
    {
      src: kinerBanner7,
      alt: "Kiner Kailash Jewellers product visual five",
    },
    {
      src: kinerBanner8,
      alt: "Kiner Kailash Jewellers product visual six",
    },
    {
      src: kinerBanner9,
      alt: "Kiner Kailash Jewellers product visual seven",
    },
    {
      src: kinerBanner10,
      alt: "Kiner Kailash Jewellers product visual eight",
    },
  ],
};



export default function KinerKailashJewellersPage() {
  return (
    <>
      <WorkHero
        title="Kiner Kailash Jewellers"
        description="Website, SEO, social media, ad campaigns, and premium jewellery shoots to build a strong digital presence."
        details={[
          { label: "Company", value: "Kiner Kailash Jewellers" },
          { label: "Segment", value: "Jewellers" },
          { label: "Year", value: "2024" },
          { label: "Role", value: "Website Design, Digital Marketing & Brand Promotion" },
          {
            label: "Expertise",
            value: [
              "Website Design",
              "Social Media Management",
              "Ad Campaign Strategy",
              "SEO Optimization",
              "Product Photography",
              "Jewellery Video Production",
            ],
          },
        ]}
      />
      <WorkCaseStudyShowcase
        leftImage={kinerBanner3}
        leftAlt="Kiner Kailash Jewellers brand visual one"
        rightImage={kinerBanner4}
        rightAlt="Kiner Kailash Jewellers brand visual two"
      />
      <WorkStudyDetailsSection
        researchTitle="Research Methods"
        researchItems={[
          "Jewellery Market Research",
          "Competitor Benchmarking",
          "Audience Behavior Analysis",
          "SEO Keyword Research",
        ]}
        ideationTitle="Ideation"
        ideationItems={[
          "Campaign Concepts",
          "Content Strategy",
          "Jewellery Product Visual Planning",
          "Brand Promotion Strategy",
        ]}
        overview="For Kiner Kailash Jewellers, Imazine Us executed a complete digital growth strategy, including website design, social media management, ad campaigns, SEO, product photo shoots, product videos, model-based concept videos, and theme-based brand videos. The goal was to create a strong online presence with premium visual content that reflects the brand's legacy, craftsmanship, and trust in the jewellery market."
        challenge="The key challenge was to bring a traditional jewellery brand into the digital space while maintaining its credibility and heritage. The brand required a modern website, consistent social media presence, high-quality product visuals, and performance-driven advertising to attract new customers and increase online engagement."
      />
      <WorkGalleryShowcase {...kinerGalleryProps} />
      <WorkImpactSection
        impactParagraph="Through professional product photography, cinematic model shoots, creative concept videos, and theme-based brand content, a strong and premium visual identity was created. Along with a professionally designed website, social media strategy, targeted ad campaigns, and SEO optimization, the brand achieved higher visibility and stronger audience engagement across digital platforms."
        resultParagraph="The project successfully built a powerful digital presence for Kiner Kailash Jewellers, improving brand visibility, increasing online inquiries, and positioning the brand as a trusted and modern jewellery destination in the digital space."
      />
      <WorkMoreProjectsSection currentProjectHref="/works/kiner-kailash-jewellers" />
      <WorkFooter
    
      />
    </>
  );
}
