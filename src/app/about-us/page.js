import AboutTopSection from "@/features/about/components/AboutTopSection";
import AboutValuesSection from "@/features/about/components/AboutValuesSection";

export const metadata = {
  title: "About Us | Imazine Us",
  description:
    "Learn how Imazine Us approaches branding, design, websites, and digital communication for modern brands.",
};

export default function AboutUsPage() {
  return (
    <>
      <AboutTopSection />
      <AboutValuesSection />
    </>
  );
}
