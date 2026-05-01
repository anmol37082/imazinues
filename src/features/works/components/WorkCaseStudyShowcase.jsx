import Image from "next/image";
import styles from "./WorkCaseStudyShowcase.module.css";

export default function WorkCaseStudyShowcase({
  leftImage = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80",
  leftAlt = "Editorial jewellery close-up",
  rightImage = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  rightAlt = "Luxury jewellery display",
}) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Design case study</p>
        <div className={styles.grid}>
          <article className={styles.card} aria-label={leftAlt}>
            <Image
              className={styles.media}
              src={leftImage}
              alt={leftAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </article>

          <article className={styles.card} aria-label={rightAlt}>
            <Image
              className={styles.media}
              src={rightImage}
              alt={rightAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
