"use client";

import { useRef } from "react";
import GoldenGlowEffect from "./GoldenGlowEffect";
import styles from "./ServiceCreativeProcessSection.module.css";

export default function ServiceCreativeProcessSection({
  eyebrow = "CREATIVE PROCESS",
  title = "FUN AND SURREAL INTERACTIVE MUSIC VIDEO",
  description = "Mai Lan has a very surreal universe, so we agreed that the interactive music video would be a trippy adventure enlightened by a colorful and sweet pop art direction.",
  src = "/footervideo/footervideo.mp4",
  fallbackSrc = "/footervideo/footervideo1.mp4",
  poster = "/creativeagency/advideo.webp",
  alt = "Creative process video",
}) {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Creative process">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.videoColumn}>
            <div className={styles.videoFrame}>
              <video
                className={styles.video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster={poster}
              >
                <source src={src} type="video/mp4" />
                {fallbackSrc ? <source src={fallbackSrc} type="video/mp4" /> : null}
              </video>
            </div>
          </div>

          <GoldenGlowEffect className={styles.copyColumn}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </GoldenGlowEffect>
        </div>
      </div>
    </section>
  );
}
