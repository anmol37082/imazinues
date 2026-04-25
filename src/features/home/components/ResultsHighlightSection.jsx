"use client";

import styles from "./ResultsHighlightSection.module.css";

const resultCards = [
  {
    id: 1,
    badge: "UX & Web",
    value: "+38% conversion in sales",
    copy: "We design and build fast, accessible sites that convert with less friction.",
  },
  {
    id: 2,
    badge: "Fluid Branding",
    value: "+3x more brand recall in tests",
    copy: "Adaptive identity systems that scale across every touchpoint without losing clarity.",
  },
];

function ClusterMark() {
  return (
    <div className={styles.clusterMark} aria-hidden="true">
      {Array.from({ length: 7 }).map((_, index) => (
        <span key={index} className={styles.clusterDot} />
      ))}
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
              We&apos;ll help you
              <br />
              figure out what your
              <br />
              brand really needs
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
