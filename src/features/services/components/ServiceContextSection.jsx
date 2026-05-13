"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import GoldenGlowEffect from "./GoldenGlowEffect";
import styles from "./ServiceContextSection.module.css";

export default function ServiceContextSection({
  label = "CONTEXT",
  title = "TOOSOON GRADUATION PROJECT",
  overview = "This project began as a collective TOOSOON graduation project for the interactive design and development master at Gobelins Paris.",
  details = "We reached out to Mai Lan with an idea for an interactive music video and developed the concept into a collaborative piece that blended design, direction, and development.",
  leftTopImage = "/modernlifestyle/banner2.webp",
  leftTopAlt = "Service context visual one",
  leftBottomImage = "/modernlifestyle/banner3.webp",
  leftBottomAlt = "Service context visual two",
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let rafId = 0;

    const updateProgress = () => {
      rafId = 0;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const start = viewportHeight * 0.85;
      const end = -rect.height * 0.25;
      const rawProgress = (start - rect.top) / (start - end);
      const progress = Math.max(0, Math.min(1, rawProgress));

      section.style.setProperty("--context-progress", progress.toFixed(4));
    };

    const requestUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateProgress);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Project context">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.visuals}>
            <div className={styles.topImageWrap}>
              <Image
                src={leftTopImage}
                alt={leftTopAlt}
                fill
                sizes="(max-width: 768px) 92vw, 45vw"
                className={styles.image}
              />
            </div>
            <div className={styles.bottomImageWrap}>
              <Image
                src={leftBottomImage}
                alt={leftBottomAlt}
                fill
                sizes="(max-width: 768px) 76vw, 32vw"
                className={styles.image}
              />
            </div>
          </div>

          <GoldenGlowEffect className={styles.copy}>
            <p className={styles.label}>{label}</p>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.text}>
              <p>{overview}</p>
              <p>{details}</p>
            </div>
          </GoldenGlowEffect>
        </div>
      </div>
    </section>
  );
}
