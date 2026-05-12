"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ServiceScrollVideo.module.css";

export default function ServiceScrollVideoAlt({
  src = "/glamourandradiance/G&R-10.mp4",
  fallbackSrc = null,
  poster = "/glamourandradiance/G&R-02.webp",
  alt = "Services alternate scroll video visual",
}) {
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const currentShiftRef = useRef(0);
  const targetShiftRef = useRef(0);
  const rafRef = useRef(0);
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
        threshold: 0.12,
      }
    );

    observer.observe(sectionNode);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const frameNode = frameRef.current;
    const sectionNode = sectionRef.current;

    if (!frameNode || !sectionNode) return undefined;

    const updateTarget = () => {
      const rect = sectionNode.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 0;
      const sectionMidpoint = rect.top + rect.height / 2;
      const viewportMidpoint = viewportHeight / 2;
      const distanceFromCenter = sectionMidpoint - viewportMidpoint;
      const maxShift = 240;
      const scrollProgress = Math.max(
        0,
        Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height * 0.25))
      );

      targetShiftRef.current = Math.max(
        -maxShift,
        Math.min(maxShift, -distanceFromCenter * 0.14)
      );
    };

    const tick = () => {
      const nextShift =
        currentShiftRef.current + (targetShiftRef.current - currentShiftRef.current) * 0.12;
      currentShiftRef.current = nextShift;

      frameNode.style.transform = `translate3d(0, ${nextShift}px, 0)`;
      rafRef.current = window.requestAnimationFrame(tick);
    };

    const onScroll = () => updateTarget();
    const onResize = () => updateTarget();

    updateTarget();
    rafRef.current = window.requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
      aria-label={alt}
    >
      <div ref={frameRef} className={styles.frame}>
        <video className={styles.video} autoPlay loop muted playsInline preload="metadata" poster={poster}>
          <source src={src} type="video/mp4" />
          {fallbackSrc ? <source src={fallbackSrc} type="video/mp4" /> : null}
        </video>
      </div>
    </section>
  );
}
