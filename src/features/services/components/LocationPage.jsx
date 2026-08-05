import ServiceHero from "./ServiceHero";
import ServiceHeroImage from "./ServiceHeroImage";
import ServiceVideo from "./ServiceVideo";
import ServiceScrollVideo from "./ServiceScrollVideo";
import ServiceAutoPlayVideo from "./ServiceAutoPlayVideo";
import ServiceAutoPlayVideoAlt from "./ServiceAutoPlayVideoAlt";
import ServiceScrollVideoAlt from "./ServiceScrollVideoAlt";
import ServiceContextSection from "./ServiceContextSection";
import ConceptSection from "./ConceptSection";
import ServiceCreativeProcessSection from "./ServiceCreativeProcessSection";
import ServiceMakingOfSection from "./ServiceMakingOfSection";
import ServiceInnovationSection from "./ServiceInnovationSection";
import ServiceAutoplayTriptych from "./ServiceAutoplayTriptych";
import ServiceLocationSection from "./ServiceLocationSection";
import ServiceCreditsSection from "./ServiceCreditsSection";
import styles from "./LocationPage.module.css";

export default function LocationPage({ data }) {
  return (
    <main className={styles.page}>
      <ServiceHero {...data.hero} />
      <ServiceHeroImage {...data.heroImage} />
      <ServiceVideo {...data.video} />
      <ServiceContextSection {...data.context} />
      <ServiceScrollVideo {...data.scrollVideo} />
      <ConceptSection {...data.concept} />
      <ServiceAutoPlayVideo {...data.autoPlayVideo} />
      <ServiceCreativeProcessSection {...data.creativeProcess} />
      <ServiceMakingOfSection {...data.makingOf} />
      <ServiceAutoplayTriptych {...data.triptych} />
      <ServiceInnovationSection {...data.innovation} />
      <ServiceAutoPlayVideoAlt {...data.autoPlayVideoAlt} />
      <ServiceScrollVideoAlt {...data.scrollVideoAlt} />
      <ServiceLocationSection
        {...(data.locationSection ?? {})}
        serviceSlug={data.serviceSlug}
      />
      <ServiceCreditsSection {...data.credits} />
    </main>
  );
}
