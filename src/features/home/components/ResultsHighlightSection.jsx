"use client";

import styles from "./ResultsHighlightSection.module.css";

const resultCards = [
  {
    id: 1,
    badge: "Brand Identity & Visual Storytelling",
    value: "+3x stronger brand recognition",
    copy: "We craft powerful brand identities, from logos and brand guidelines to visual language, ensuring your brand stands out clearly across every platform.",
  },
  {
    id: 2,
    badge: "Performance Ads & Lead Generation",
    value: "+45% improvement in qualified leads",
    copy: "With smart ad strategies, optimized campaigns, and data-driven targeting, we help businesses reach the right audience and convert attention into real growth.",
  },
];

function ClusterMark() {
  return (
    <div className={styles.clusterMark} aria-hidden="true">
      <svg viewBox="0 0 72 72" className={styles.clusterIcon}>
        <circle cx="36" cy="36" r="12" className={styles.clusterCore} />
        <circle cx="36" cy="14" r="4.5" className={styles.clusterOrb} />
        <circle cx="54" cy="25" r="4.5" className={styles.clusterOrb} />
        <circle cx="54" cy="47" r="4.5" className={styles.clusterOrb} />
        <circle cx="36" cy="58" r="4.5" className={styles.clusterOrb} />
        <circle cx="18" cy="47" r="4.5" className={styles.clusterOrb} />
        <circle cx="18" cy="25" r="4.5" className={styles.clusterOrb} />
        <path
          d="M36 18v7M50 26l-5 4M50 46l-5-4M36 54v-7M22 46l5-4M22 26l5 4"
          className={styles.clusterLines}
        />
      </svg>
    </div>
  );
}

function RatingStars() {
  return (
    <div className={styles.stars} aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className={styles.starIcon}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2.75l2.83 5.73 6.32.92-4.57 4.46 1.08 6.29L12 17.17l-5.66 2.98 1.08-6.29L2.85 9.4l6.32-.92L12 2.75z" />
        </svg>
      ))}
    </div>
  );
}

export default function ResultsHighlightSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <section className={styles.resultsSection}>
          <div className={styles.resultsHeader}>
            <RatingStars />
            <span className={styles.pill}>Award-winning agency</span>
            <h2 className={styles.resultsTitle}>
              We help you discover
              <br />
              what your brand truly
              <br />
              needs to grow.
            </h2>
          </div>

          <div className={styles.resultsGrid}>
            {resultCards.map((card) => (
              <article key={card.id} className={styles.resultCard}>
                <span className={styles.resultBadge}>{card.badge}</span>
                <h3 className={styles.resultValue}>{card.value}</h3>
                <ClusterMark />
                <p className={styles.resultCopy}>{card.copy}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
