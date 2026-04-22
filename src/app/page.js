import Hero from "../features/home/components/Hero.jsx";
import CreativeAgency from "@/features/home/components/CreativeAgency.jsx";
import WhoWeAre from "@/features/home/components/WhoWeAre.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <CreativeAgency />
      <WhoWeAre />
      <div className="landing-page-bottom-blur" aria-hidden="true" />
    </>
  );
}
