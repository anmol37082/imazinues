import ServiceHero from "@/features/services/components/ServiceHero";
import ServiceHeroImage from "@/features/services/components/ServiceHeroImage";
import ServiceVideo from "@/features/services/components/ServiceVideo";
import ServiceAutoPlayVideo from "@/features/services/components/ServiceAutoPlayVideo";
import ServiceAutoPlayVideoAlt from "@/features/services/components/ServiceAutoPlayVideoAlt";
import ServiceContextSection from "@/features/services/components/ServiceContextSection";
import ServiceScrollVideo from "@/features/services/components/ServiceScrollVideo";
import ServiceScrollVideoAlt from "@/features/services/components/ServiceScrollVideoAlt";
import ConceptSection from "@/features/services/components/ConceptSection";
import ServiceCreativeProcessSection from "@/features/services/components/ServiceCreativeProcessSection";
import ServiceMakingOfSection from "@/features/services/components/ServiceMakingOfSection";
import ServiceAutoplayTriptych from "@/features/services/components/ServiceAutoplayTriptych";
import ServiceInnovationSection from "@/features/services/components/ServiceInnovationSection";
import ServiceQuoteSection from "@/features/services/components/ServiceQuoteSection";
import ServiceCreditsSection from "@/features/services/components/ServiceCreditsSection";
import styles from "./page.module.css";

const credits = {
  heading: "CREDITS",
  title: "Services Overview Team",
  subtitle: "Strategy, design, development, content, and growth services handled by Imazine Us.",
};

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <ServiceHero />
      <ServiceHeroImage />
      <ServiceVideo />
      <ServiceContextSection />
      <ServiceScrollVideo />
      <ConceptSection />
      <ServiceAutoPlayVideo />
      <ServiceCreativeProcessSection />
      <ServiceMakingOfSection />
      <ServiceAutoplayTriptych />
      
      <ServiceInnovationSection />
      <ServiceAutoPlayVideoAlt />
      <ServiceQuoteSection />
      <ServiceScrollVideoAlt />
      <ServiceCreditsSection />
    </main>
  );
}
