"use client";

import styles from "./CTA.module.css";

const campaigns = [
  { name: "Google Search Ads", sub: "Running", cost: "Rs.45K/day", bg: "#dbeafe", icon: "📢" },
  { name: "Instagram Ads", sub: "Running", cost: "Rs.32K/day", bg: "#fce7f3", icon: "📱" },
  { name: "YouTube Ads", sub: "Running", cost: "Rs.28K/day", bg: "#dcfce7", icon: "🎥" },
  { name: "SEO Content", sub: "Ongoing", cost: "Rs.15K/mo", bg: "#fef3c7", icon: "🔍" },
  { name: "Email Marketing", sub: "Ongoing", cost: "Rs.8K/mo", bg: "#e0e7ff", icon: "✉️" },
];

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaInner}>
        <div className={styles.ctaLeft}>
          <h2>Ready to Grow Your Business?</h2>
          <p>Let us have a free 15-minute chat. No pressure, no sales pitch — just honest advice on what will work for you.</p>
          <a href="#" className={styles.btnSolid}>Book a Free Call</a>
        </div>
        <div className={styles.ctaRight}>
          <div className={styles.phoneMock2}>
            <div className={styles.p2Header}>
              <span>9:41</span>
              <span>Campaigns</span>
              <span>...</span>
            </div>
            <div className={styles.p2Body}>
              <div className={styles.p2Title}>Active Campaigns</div>
              {campaigns.map((c) => (
                <div className={styles.txRow} key={c.name}>
                  <div className={styles.txl}>
                    <div className={styles.txlIcon} style={{background: c.bg}}>{c.icon}</div>
                    <div>
                      <div className={styles.txlName}>{c.name}</div>
                      <div className={styles.txlSub}>{c.sub}</div>
                    </div>
                  </div>
                  <div className={`${styles.txr} ${styles.red}`}>{c.cost}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}