import Hero from "@/features/about/components/Hero";
import LogosMarquee from "@/features/about/components/LogosMarquee";
import Story from "@/features/about/components/Story";
import Stats from "@/features/about/components/Stats";
import Features from "@/features/about/components/Features";
import Principles from "@/features/about/components/Principles";

import CTA from "@/features/about/components/CTA";
import Banner from "@/features/about/components/Banner";
export const metadata = {
  title: "About Us | Imazine Us",
  description:
    "Learn how Imazine Us approaches branding, design, websites, and digital communication for modern brands.",
};

export default function AboutUsPage() {
  return (
    <>
     <Banner />
     <Hero />
     <LogosMarquee />
      <Story />
      <Stats />
      <Features />
      <Principles />
      
      <CTA />




    </>
  );
}
