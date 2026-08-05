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

          <h2>Your Success Is Our Next Project
Together, We&apos;ll Build a Brand That Gets Noticed.</h2>

          <p>
           From startups to established businesses, we create digital solutions that deliver real results, not just promises.
          </p>

          <Link href="/contact" className={styles.button}>
          Start Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
