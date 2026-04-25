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

export default function ResultsHighlightSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <section className={styles.resultsSection}>
          <div className={styles.resultsHeader}>
            <div className={styles.stars} aria-label="5 star rating">
              <span>* * * * *</span>
            </div>
            <span className={styles.pill}>Award-winning agency</span>
            <h2 className={styles.resultsTitle}>
              We&apos;ll help you figure
              <br />
              out what your brand
              <br />
              really needs
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
