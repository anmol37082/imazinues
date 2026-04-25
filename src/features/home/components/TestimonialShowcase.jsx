"use client";

import styles from "./TestimonialShowcase.module.css";

export default function TestimonialShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <article className={styles.testimonialCard}>
          <div className={styles.testimonialContent}>
            <span className={styles.brandRow}>
              <span className={styles.brandMark} aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </span>
              waterline
            </span>

            <h2 className={styles.testimonialTitle}>
              Great brands start
              <br />
              with understanding
              <br />
              the story behind
              <br />
              them.
            </h2>

            <div className={styles.authorRow}>
              <span className={styles.authorAvatar}>CM</span>
              <span>
                <strong className={styles.authorName}>Carla Mendes</strong>
                <span className={styles.authorRole}>Art Director</span>
              </span>
            </div>
          </div>

          <div className={styles.testimonialVisual} aria-hidden="true" />
        </article>
      </div>
    </section>
  );
}
