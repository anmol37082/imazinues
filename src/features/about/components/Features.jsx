"use client";

import styles from "./Features.module.css";

const features = [
  {
    icon: "📊",
    title: "Data-Driven Campaigns",
    desc: "Every decision is backed by real numbers. We track, test, and improve every campaign to get you the best ROI.",
  },
  {
    icon: "🎯",
    title: "Precision Targeting",
    desc: "We find your perfect customers and show them the right message at the right time. No wasted budget.",
  },
];

const orbitIcons = [
  { icon: "📢", color: "#ef4444", pos: "top" },
  { icon: "📱", color: "#3b82f6", pos: "right" },
  { icon: "🔍", color: "#22c55e", pos: "bottom" },
  { icon: "✍️", color: "#f59e0b", pos: "left" },
];

export default function Features() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        
        {/* SECTION HEADING - Full Width Center */}
        <div className={styles.sectionHeading}>
          <h2>Smart Marketing That <br /> Actually Works</h2>
          <p>We use data and creativity together to get you the best results.</p>
        </div>

        <div className={styles.featuresGrid}>
          
          {/* LEFT - Features List */}
          <div className={styles.featLeft}>
            {features.map((f) => (
              <div className={styles.featItem} key={f.title}>
                <div className={styles.featIcon}>{f.icon}</div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
            
            <a href="#" className={styles.btnSolid}>Learn More</a>
          </div>

          {/* RIGHT - Orbit */}
          <div className={styles.featRight}>
            <div className={styles.orbitRing}></div>
            <div className={styles.orbitCenter}>⚡</div>
            
            {orbitIcons.map((o) => (
              <div
                className={`${styles.orbitDot} ${styles[o.pos]}`}
                key={o.icon}
                style={{ color: o.color }}
              >
                {o.icon}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}