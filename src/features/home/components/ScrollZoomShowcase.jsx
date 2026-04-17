"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import showcaseImages from "@/features/home/data/showcaseImages";
import styles from "./ScrollZoomShowcase.module.css";

function ScrollZoomShowcase() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const maxTravel = Math.max(rect.height - window.innerHeight, 1);
      const nextProgress = Math.min(Math.max(-rect.top / maxTravel, 0), 1);
      setProgress(nextProgress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const zoomProgress = Math.min(progress / 0.35, 1);

  return (
    <section className={styles.scrollZoomShowcase} ref={sectionRef}>
      <div className={styles.scrollZoomSticky}>
        <div className={styles.scrollZoomGrid}>
          {showcaseImages.map((image, index) => {
            const scale = 0.82 + zoomProgress * 0.18;
            const lift = 38 - zoomProgress * 38;

            return (
              <div
                className={styles.scrollZoomBox}
                key={`${image}-${index}`}
                style={{
                  transform: `translateY(${lift}px) scale(${scale})`,
                }}
              >
                <Image
                  src={image}
                  alt={`Showcase ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1100px) 33vw, 25vw"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ScrollZoomShowcase;
