"use client";

import Link from "next/link";
import DotFieldHero from "./DotFieldHero";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.gridPattern}></div>
      <div className={styles.floatShape1}></div>
      <div className={styles.floatShape2}></div>

      <div className={styles.heroLeft}>
        <div className={styles.heroBadge}>
          <span className={styles.dot}></span> About Us
        </div>

        <h1>
          We Turn <span className={styles.accent}>Clicks</span>
          <br />
          Into <span className={styles.accent}>Customers</span>
        </h1>

        <p>
          We are a digital marketing agency that helps businesses grow online.
          No fancy jargon — just real results, real growth, and real people who care about your success.
        </p>

        <div className={styles.heroBtns}>
          <Link href="/contact" className={styles.btnSolid}>
            Let&apos;s Talk <span>→</span>
          </Link>
          <Link href="/work" className={styles.btnOutline}>
            Our Work
          </Link>
        </div>

        <div className={styles.trustBadges}>
          <div className={styles.trustItem}>
            <div className={styles.avatars}>
              <span className={styles.avatar}>R</span>
              <span className={styles.avatar}>A</span>
              <span className={styles.avatar}>P</span>
            </div>
            <div>
              <div className={styles.trustTitle}>180+ Clients</div>
              <div className={styles.trustSub}>Trust us worldwide</div>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.trustItem}>
            <div className={styles.stars}>
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <div className={styles.trustSub}>4.9/5 Rating</div>
          </div>
        </div>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.dotFieldWrap}>
          <DotFieldHero dotColor="17,17,17" dotOpacity={0.45} density={350} />
        </div>
      </div>
    </section>
  );
}