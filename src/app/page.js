import Hero from "../features/home/components/Hero.jsx";
import CreativeAgency from "@/features/home/components/CreativeAgency.jsx";
import CasesDeliver from "@/features/home/components/CasesDeliver.jsx";
import StatsAndFacts from "@/features/home/components/StatsAndFacts.jsx";
// import BottomBlur from "@/features/home/components/BottomBlur.jsx";
import Services from "@/features/home/components/Services.jsx";
import TestimonialShowcase from "@/features/home/components/TestimonialShowcase.jsx";
import LatestWorksSection from "@/features/home/components/LatestWorksSection.jsx";
import ResultsHighlightSection from "@/features/home/components/ResultsHighlightSection.jsx";
import Gallery from "@/features/home/components/Gallery.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <CreativeAgency />
     
      <StatsAndFacts />
      <Services />
      {/* <BottomBlur /> */}
      <CasesDeliver />
      <TestimonialShowcase />
      <LatestWorksSection />
      <ResultsHighlightSection />
      <Gallery />
    </>
  );
}
