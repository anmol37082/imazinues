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
      <svg viewBox="0 0 80 80" className={styles.clusterIcon}>
        <path
          d="M18 62h44"
          className={styles.clusterBase}
        />
        <rect x="22" y="38" width="10" height="24" rx="4" className={styles.clusterBar} />
        <rect x="36" y="28" width="10" height="34" rx="4" className={styles.clusterBar} />
        <rect x="50" y="18" width="10" height="44" rx="4" className={styles.clusterBar} />
        <path
          d="M20 50l13-10 11 6 17-18"
          className={styles.clusterTrend}
        />
        <path
          d="M51 28h7v7"
          className={styles.clusterArrow}
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
