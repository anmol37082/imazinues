"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ServiceHeroImage.module.css";

export default function ServiceHeroImage({
  src = "/modernlifestyle/banner1.webp",
  alt = "Services hero visual",
}) {
  const frameRef = useRef(null);
  const mediaRef = useRef(null);

  useEffect(() => {
    const frameNode = frameRef.current;
    const mediaNode = mediaRef.current;

    if (!frameNode || !mediaNode) return undefined;

    const isMobile = () => window.matchMedia("(max-width: 768px)").matches;
    let rafId = 0;
    let currentShift = 0;
    let targetShift = 0;
    let currentScale = 1.18;
    let targetScale = 1.18;

    const updateTarget = () => {
      if (isMobile()) {
        targetShift = 0;
        targetScale = 1;
        return;
      }

      const rect = frameNode.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 0;
      const viewportMidpoint = viewportHeight / 2;
      const frameMidpoint = rect.top + rect.height / 2;
      const distanceFromCenter = frameMidpoint - viewportMidpoint;
      const scrollProgress = Math.max(
        0,
        Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height * 0.25))
      );

      targetShift = Math.max(-220, Math.min(220, -distanceFromCenter * 0.14));
      targetScale = 1.18 - scrollProgress * 0.18;
    };

    const tick = () => {
      const mobile = isMobile();

      if (mobile) {
        frameNode.style.transform = "none";
        mediaNode.style.transform = "none";
        rafId = window.requestAnimationFrame(tick);
        return;
      }

      currentShift += (targetShift - currentShift) * 0.12;
      currentScale += (targetScale - currentScale) * 0.12;

      frameNode.style.transform = "translate3d(0, 0, 0)";
      mediaNode.style.transform = `translate3d(0, ${currentShift}px, 0) scale(${currentScale})`;
      rafId = window.requestAnimationFrame(tick);
    };

    const onScroll = () => updateTarget();
    const onResize = () => {
      updateTarget();
      if (isMobile()) {
        frameNode.style.transform = "none";
        mediaNode.style.transform = "none";
      }
    };

    updateTarget();
    rafId = window.requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className={styles.section} aria-label="Services hero image">
      <div ref={frameRef} className={styles.frame}>
        <div ref={mediaRef} className={styles.media}>
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(max-width: 768px) calc(100vw - 24px), (max-width: 1080px) calc(100vw - 32px), calc(100vw - 48px)"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
