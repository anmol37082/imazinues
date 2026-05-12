import ServiceHero from "@/features/services/components/ServiceHero";
import ServiceHeroImage from "@/features/services/components/ServiceHeroImage";
import ServiceVideo from "@/features/services/components/ServiceVideo";
import ServiceContextSection from "@/features/services/components/ServiceContextSection";
import ConceptSection from "@/features/services/components/ConceptSection";
import ServiceMakingOfSection from "@/features/services/components/ServiceMakingOfSection";
import ServiceInnovationSection from "@/features/services/components/ServiceInnovationSection";
import ServiceAutoplayTriptych from "@/features/services/components/ServiceAutoplayTriptych";
import ServiceQuoteSection from "@/features/services/components/ServiceQuoteSection";
import ServiceCreditsSection from "@/features/services/components/ServiceCreditsSection";
import styles from "../../../app/services/page.module.css";

export default function ServiceDetailPage({ data }) {
  const {
    hero,
    heroImage,
    video,
    context,
    concept,
    makingOf,
    innovation,
    triptych,
    quote,
    credits,
  } = data;

  return (
    <main className={styles.page}>
      <ServiceHero {...hero} />
      <ServiceHeroImage {...heroImage} />
      <ServiceVideo {...video} />
      <ServiceContextSection {...context} />
      <ConceptSection {...concept} />
      <ServiceMakingOfSection {...makingOf} />
      <ServiceInnovationSection {...innovation} />
      <ServiceAutoplayTriptych {...triptych} />
      <ServiceQuoteSection {...quote} />
      <ServiceCreditsSection {...credits} />
    </main>
  );
}
