"use client";

import { useEffect, useRef } from "react";
import styles from "./ServiceAutoplayTriptych.module.css";

const defaultVideos = [
  {
    src: "/ceativecontent/GIFanimation1.webm",
    fallbackSrc: "/ceativecontent/GIFanimation1.mp4",
    poster: "/creativeagency/advideo.webp",
    alt: "Autoplay visual one",
  },
  {
    src: "/modernlifestyle/galleryv1.webm",
    fallbackSrc: "/modernlifestyle/designcase1.mp4",
    poster: "/modernlifestyle/mainbanner1.webp",
    alt: "Autoplay visual two",
  },
  {
    src: "/binnynail,sbar/WorkGalleryShowcase8.webm",
    fallbackSrc: "/binnynail,sbar/WorkGalleryShowcasefallback8.mp4",
    poster: "/creativeagency/photovideoshoot.jpg.webp",
    alt: "Autoplay visual three",
  },
];

export default function ServiceAutoplayTriptych({
  videos = defaultVideos,
}) {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const currentShiftRef = useRef(0);
  const targetShiftRef = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const sectionNode = sectionRef.current;
    if (!sectionNode) return undefined;

    const updateTargets = () => {
      const rect = sectionNode.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 0;
      const sectionMidpoint = rect.top + rect.height / 2;
      const viewportMidpoint = viewportHeight / 2;
      const distanceFromCenter = sectionMidpoint - viewportMidpoint;

      targetShiftRef.current = Math.max(-140, Math.min(40, -distanceFromCenter * 0.1));
    };

    const tick = () => {
      const nextShift = currentShiftRef.current + (targetShiftRef.current - currentShiftRef.current) * 0.12;
      currentShiftRef.current = nextShift;

      cardRefs.current.forEach((cardNode, index) => {
        if (!cardNode) return;
        cardNode.style.transform = `translate3d(0, ${nextShift}px, 0)`;
      });

      rafRef.current = window.requestAnimationFrame(tick);
    };

    const onScroll = () => updateTargets();
    const onResize = () => updateTargets();

    updateTargets();
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
    <section ref={sectionRef} className={styles.section} aria-label="Autoplay videos">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {videos.map((video, index) => (
            <div
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className={styles.card}
              key={video.alt}
            >
              <video
                className={styles.video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster={video.poster}
              >
                <source src={video.src} type="video/webm" />
                {video.fallbackSrc ? <source src={video.fallbackSrc} type="video/mp4" /> : null}
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
