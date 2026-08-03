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

          <h2>Need a Website That Looks Sharp and Loads Fast?</h2>

          <p>
            From UI polish and responsive layouts to performance and clean
            structure, we help shape websites that feel modern and convert
            better.
          </p>

          <Link href="/contact" className={styles.button}>
            Talk to Us
          </Link>
        </div>
      </div>
    </section>
  );
}
