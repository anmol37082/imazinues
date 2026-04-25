import Hero from "../features/home/components/Hero.jsx";
import CreativeAgency from "@/features/home/components/CreativeAgency.jsx";
import CreativeContent from "@/features/home/components/CreativeContent.jsx";
import WhoWeAre from "@/features/home/components/WhoWeAre.jsx";
// import BottomBlur from "@/features/home/components/BottomBlur.jsx";
import FeatureGrid from "@/features/home/components/FeatureGrid.jsx";
import TestimonialShowcase from "@/features/home/components/TestimonialShowcase.jsx";
import LatestWorksSection from "@/features/home/components/LatestWorksSection.jsx";
import ResultsHighlightSection from "@/features/home/components/ResultsHighlightSection.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <CreativeAgency />
     
      <WhoWeAre />
      <FeatureGrid />
      {/* <BottomBlur /> */}
      <CreativeContent />
      <TestimonialShowcase />
      <LatestWorksSection />
      <ResultsHighlightSection />
    </>
  );
}
