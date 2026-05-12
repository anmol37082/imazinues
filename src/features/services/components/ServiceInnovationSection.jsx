"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./ServiceInnovationSection.module.css";

export default function ServiceInnovationSection({
  eyebrow = "INNOVATION",
  title = "MERGING VIDEO AND REAL-TIME EFFECTS",
  description = "The interactive music video was built using a mix of psychedelic visuals, motion design and real-time WebGL effects. The challenge was to ensure smooth performances across devices while maintaining high visual fidelity.",
  src = "/modernlifestyle/mainbanner1.webp",
  alt = "Innovation visual",
}) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const currentShiftRef = useRef(0);
  const targetShiftRef = useRef(0);
  const currentScaleRef = useRef(1.18);
  const targetScaleRef = useRef(1.18);
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
    const imageNode = imageRef.current;
    const sectionNode = sectionRef.current;

    if (!imageNode || !sectionNode) return undefined;

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
      targetScaleRef.current = 1.18 - scrollProgress * 0.18;
    };

    const tick = () => {
      const nextShift =
        currentShiftRef.current + (targetShiftRef.current - currentShiftRef.current) * 0.12;
      currentShiftRef.current = nextShift;
      const nextScale =
        currentScaleRef.current + (targetScaleRef.current - currentScaleRef.current) * 0.12;
      currentScaleRef.current = nextScale;

      imageNode.style.transform = `translate3d(0, ${nextShift}px, 0) scale(${nextScale})`;
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
      aria-label="Innovation section"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.mediaColumn}>
            <div className={styles.frame}>
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 92vw, 45vw"
                className={styles.image}
                ref={imageRef}
              />
            </div>
          </div>

          <div className={styles.copyColumn}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
