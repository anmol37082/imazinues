"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./ConceptSection.module.css";

export default function ConceptSection({
  label = "CONCEPT",
  title = "A MUSIC VIDEO YOU CAN PLAY WITH",
  overview = "We crafted a unique experience combining live action, motion graphics and interactivity.",
  details = "Pumper highlights the song's sunny and dancing mood with a psychedelic visual universe that the user can manipulate and play with.",
  topImage = "/modernlifestyle/banner1.webp",
  topAlt = "Concept visual one",
  bottomImage = "/modernlifestyle/banner2.webp",
  bottomAlt = "Concept visual two",
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

      section.style.setProperty("--concept-progress", progress.toFixed(4));
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
    <section ref={sectionRef} className={styles.section} aria-label="Project concept">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={styles.label}>{label}</p>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.text}>
              <p>{overview}</p>
              <p>{details}</p>
            </div>
          </div>

          <div className={styles.visuals}>
            <div className={styles.topImageWrap}>
              <Image
                src={topImage}
                alt={topAlt}
                fill
                sizes="(max-width: 768px) 92vw, 42vw"
                className={styles.image}
              />
            </div>
            <div className={styles.bottomImageWrap}>
              <Image
                src={bottomImage}
                alt={bottomAlt}
                fill
                sizes="(max-width: 768px) 76vw, 34vw"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
