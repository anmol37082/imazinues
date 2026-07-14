"use client";

import Link from "next/link";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.contactHero}>
      <div className={styles.gridPattern}></div>
      <div className={styles.floatShape}></div>

      <div className={styles.container}>
        <span className={styles.secLabel}>Contact Us</span>
        <h1>
          Let&apos;s Work <span className={styles.accent}>Together</span>
        </h1>
        <p>
          Have a project in mind? We&apos;d love to hear about it. Drop us a line
          and let&apos;s create something amazing.
        </p>

        <div className={styles.quickLinks}>
          <Link href="mailto:hello@imazine.com" className={styles.btnPrimary}>
            <span>📧</span> hello@imazine.com
          </Link>
          <Link href="tel:+919876543210" className={styles.btnSecondary}>
            <span>📱</span> +91 98765 43210
          </Link>
        </div>
      </div>
    </section>
  );
}