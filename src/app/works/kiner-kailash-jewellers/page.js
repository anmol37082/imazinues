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
        leftImage="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1400&q=80"
        leftAlt="Kiner Kailash jewellery close-up"
        rightImage="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80"
        rightAlt="Kiner Kailash luxury jewellery display"
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
      <WorkFooter imageSrc={kinerFooterImage} imageAlt="Kiner Kailash Jewellers luxury portrait" />
    </>
  );
}
