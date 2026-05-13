import ServiceHero from "@/features/services/components/ServiceHero";
import ServiceHeroImage from "@/features/services/components/ServiceHeroImage";
import ServiceVideo from "@/features/services/components/ServiceVideo";
import ServiceScrollVideo from "@/features/services/components/ServiceScrollVideo";
import ServiceAutoPlayVideo from "@/features/services/components/ServiceAutoPlayVideo";
import ServiceAutoPlayVideoAlt from "@/features/services/components/ServiceAutoPlayVideoAlt";
import ServiceScrollVideoAlt from "@/features/services/components/ServiceScrollVideoAlt";
import ServiceContextSection from "@/features/services/components/ServiceContextSection";
import ConceptSection from "@/features/services/components/ConceptSection";
import ServiceCreativeProcessSection from "@/features/services/components/ServiceCreativeProcessSection";
import ServiceMakingOfSection from "@/features/services/components/ServiceMakingOfSection";
import ServiceInnovationSection from "@/features/services/components/ServiceInnovationSection";
import ServiceAutoplayTriptych from "@/features/services/components/ServiceAutoplayTriptych";
import ServiceCreditsSection from "@/features/services/components/ServiceCreditsSection";
import styles from "./ServiceDetailPage.module.css";

export default function ServiceDetailPage({ data }) {
  const {
    hero,
    heroImage,
    video,
    context,
    scrollVideo,
    concept,
    autoPlayVideo,
    creativeProcess,
    makingOf,
    innovation,
    autoPlayVideoAlt,
    triptych,
    scrollVideoAlt,
    credits,
  } = data;

  return (
    <main className={styles.page}>
      <ServiceHero {...hero} />
      <ServiceHeroImage {...heroImage} />
      <ServiceVideo {...video} />
      <ServiceContextSection {...context} />
      <ServiceScrollVideo {...scrollVideo} />
      <ConceptSection {...concept} />
      <ServiceAutoPlayVideo {...autoPlayVideo} />
      <ServiceCreativeProcessSection {...creativeProcess} />
      <ServiceMakingOfSection {...makingOf} />
      <ServiceAutoplayTriptych {...triptych} />
      <ServiceInnovationSection {...innovation} />
      <ServiceAutoPlayVideoAlt {...autoPlayVideoAlt} />
      <ServiceScrollVideoAlt {...scrollVideoAlt} />
      <ServiceCreditsSection {...credits} />
    </main>
  );
}
