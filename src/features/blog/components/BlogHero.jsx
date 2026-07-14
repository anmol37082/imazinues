"use client";

import Image from "next/image";
import styles from "./BlogHero.module.css";

export default function BlogHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.banner}>
        {/* Background Image */}
        <div className={styles.bannerImage}>
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=800&fit=crop"
            alt="Digital Marketing"
            fill
            priority
            className={styles.bgImg}
          />
        </div>

        {/* Gradient Overlay */}
        <div className={styles.bannerOverlay} />

        {/* Content */}
        <div className={styles.bannerContent}>
          <span className={styles.badge}>Digital Marketing Blog</span>

          <h1 className={styles.title}>
            Insights, Strategies & Tips to Grow Your Business Online
          </h1>

          <p className={styles.description}>
            Explore expert articles on SEO, Google Ads, Social Media Marketing,
            Web Development, Branding, and the latest digital marketing trends.
          </p>

          <div className={styles.ctaGroup}>
            <button className={styles.btnPrimary}>Explore Articles</button>
            <button className={styles.btnOutline}>Subscribe Newsletter</button>
          </div>
        </div>
      </div>
    </section>
  );
}