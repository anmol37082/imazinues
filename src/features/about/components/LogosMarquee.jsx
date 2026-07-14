"use client";

import styles from "./LogosMarquee.module.css";

const logos = [
  "Google", "Meta", "Amazon", "Flipkart", 
  "Zomato", "Swiggy", "Paytm", "PhonePe"
];

export default function LogosMarquee() {
  return (
    <section className={styles.logosSection}>
      <p>Trusted by Brands Worldwide</p>
      <div className={styles.trackWrapper}>
        <div className={styles.logosTrack}>
          {[...logos, ...logos].map((logo, index) => (
            <span key={index} className={styles.logoItem}>{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
}