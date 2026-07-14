"use client";

import styles from "./Principles.module.css";

const principles = [
  {
    num: "01",
    title: "We Listen First",
    desc: "Before we spend a single rupee, we understand your business, your customers, and your goals. No one-size-fits-all.",
  },
  {
    num: "02",
    title: "We Show Real Numbers",
    desc: "No hiding behind confusing reports. You see exactly where your money goes and what you get back. Full transparency.",
  },
  {
    num: "03",
    title: "We Keep Improving",
    desc: "Marketing is not a one-time thing. We test, learn, and keep getting better results for you every single week.",
  },
];

export default function Principles() {
  return (
    <section className={styles.principlesSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.secHeader}>
          <span className={styles.secLabel}>Our Philosophy</span>
          <h2>How We Work</h2>
          <p>Three simple rules that guide everything we do for your business.</p>
        </div>

        {/* Principles Grid */}
        <div className={styles.principlesGrid}>
          {principles.map((p) => (
            <div className={styles.principleCard} key={p.num}>
              <div className={styles.principleNum}>{p.num}</div>
              <div className={styles.principleLine}></div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}