"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ServiceAutoPlayVideo.module.css";

export default function ServiceAutoPlayVideoAlt({
  src = "/modernlifestyle/designcase2.mp4",
  fallbackSrc = null,
  poster = "/modernlifestyle/banner2.webp",
  alt = "Services autoplay video alternate",
}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionNode = sectionRef.current;
    if (!sectionNode) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    observer.observe(sectionNode);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
      aria-label={alt}
    >
      <div className={styles.shell}>
        <div className={styles.frame}>
          <div className={styles.mediaWrap}>
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
      </div>
    </section>
  );
}
