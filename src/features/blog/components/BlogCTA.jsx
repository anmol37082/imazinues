"use client";

import Link from "next/link";
import styles from "./BlogCTA.module.css";

export default function BlogCTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.card}>
        <div className={styles.accentLine} />

        <div className={styles.content}>
          <span className={styles.badge}>Let&apos;s Grow Together</span>

          <h2>Ready to Grow Your Business Online?</h2>

          <p>
            Whether you need SEO, Google Ads, Social Media Marketing, or a
            professional website, our team is here to help your business reach
            the next level.
          </p>

          <Link href="/contact" className={styles.button}>
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}