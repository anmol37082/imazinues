"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WhoWeAre.module.css";

const stats = [
  {
    value: "90+",
    label: "Projects that were shipped with care, reviewed end to end",
  },
  {
    value: "100%",
    label: "Happy clients that quickly come back for new projects and ideas",
  },
  {
    value: "30+",
    label: "Brands and startups that trusted us to shape their identity",
  },
  {
    value: "120",
    label: "Design concepts explored before landing on the perfect fit",
  },
];

function WhoWeAre() {
  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);
  const [imageWidth, setImageWidth] = useState(70);

  useEffect(() => {
    const updateImageWidth = () => {
      const imageWrap = imageWrapRef.current;
      if (!imageWrap) return;

      const rect = imageWrap.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.88;
      const end = -viewportHeight * 0.55;
      const rawProgress = (start - rect.top) / (start - end);
      const progress = Math.min(1, Math.max(0, rawProgress));

      setImageWidth(70 + progress * 30);
    };

    updateImageWidth();
    window.addEventListener("scroll", updateImageWidth, { passive: true });
    window.addEventListener("resize", updateImageWidth);

    return () => {
      window.removeEventListener("scroll", updateImageWidth);
      window.removeEventListener("resize", updateImageWidth);
    };
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.intro}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          <span>Who we are</span>
        </div>

        <h2 className={styles.title}>
          Agency of ideas
          <br />
          and impact
        </h2>

        <p className={styles.copy}>
          We turn sharp strategy into brands and experiences people remember
        </p>
      </div>

      <div
        className={styles.imageWrap}
        ref={imageWrapRef}
        style={{ width: `${imageWidth}%` }}
      >
        <div
          className={styles.image}
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.26) 100%), url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1600&q=80)",
          }}
        />
      </div>

      <div className={styles.statsGrid}>
        {stats.map((item) => (
          <div className={styles.statCard} key={item.value}>
            <strong className={styles.statValue}>{item.value}</strong>
            <p className={styles.statLabel}>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhoWeAre;
