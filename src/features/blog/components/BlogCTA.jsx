"use client";

import Link from "next/link";
import styles from "./BlogCTA.module.css";

export default function BlogCTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.card}>
        <div className={styles.accentLine} />

        <div className={styles.content}>
          <span className={styles.badge}>Web Build Support</span>

          <h2>Ready to Grow Your Business Online?</h2>

          <p>
            Whether you need technical SEO, local SEO, content optimization, or a complete digital marketing strategy, Imazine Us is here to help. Let&apos;s improve your Google rankings and grow your business, one search at a time.
          </p>

          <Link href="/contact" className={styles.button}>
          Start Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
