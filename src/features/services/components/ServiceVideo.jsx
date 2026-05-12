"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ServiceVideo.module.css";

export default function ServiceVideo({
  src = "/ceativecontent/GIFanimation2.webm",
  fallbackSrc = "/ceativecontent/GIFanimation2.mp4",
  poster = "/creativeagency/advideo.webp",
  alt = "Services showcase video",
}) {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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

  const togglePlayback = async () => {
    const videoNode = videoRef.current;
    if (!videoNode) return;

    if (videoNode.paused) {
      try {
        await videoNode.play();
        setIsPlaying(true);
      } catch {
        // Ignore playback failures caused by browser restrictions.
      }
      return;
    }

    videoNode.pause();
    setIsPlaying(false);
  };

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
              ref={videoRef}
              className={styles.video}
              loop
              muted
              playsInline
              preload="metadata"
              poster={poster}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={src} type="video/webm" />
              {fallbackSrc ? <source src={fallbackSrc} type="video/mp4" /> : null}
            </video>
            <div className={styles.overlay} aria-hidden="true" />
            <button
              className={styles.clickLayer}
              onClick={togglePlayback}
              type="button"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {!isPlaying ? (
                <span className={styles.playIcon} aria-hidden="true" />
              ) : null}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
