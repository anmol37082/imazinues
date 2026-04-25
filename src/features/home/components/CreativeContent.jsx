"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CreativeContent.module.css";

function PointIcon() {
  return (
    <span className={styles.pointIcon} aria-hidden="true">
      <svg viewBox="0 0 20 20" fill="none" className={styles.pointIconSvg}>
        <path
          d="M10 2.5L11.9 7.1L16.5 9L11.9 10.9L10 15.5L8.1 10.9L3.5 9L8.1 7.1L10 2.5Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

const contentRows = [
  {
    id: "generate",
    badge: "Generate",
    title: "Skip the blank page, create brilliance in a flash.",
    mobileTitle: (
      <>
        Skip the blank page,
        <span className={styles.mobileTitleBreak}> create brilliance in a flash.</span>
      </>
    ),
    points: [
      <>
        Start with an idea, paste in an outline, or
        <span className={styles.mobilePointBreak}> import existing content</span>
      </>,
      "20+ AI models for highest-quality output",
      <>
        Import your brand or use one of our 100+
        <span className={styles.mobilePointBreak}> themes</span>
      </>,
    ],
    cta: "Start for free",
    mediaSide: "left",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    id: "optimize",
    badge: "Optimize",
    title: "Refine every draft with sharper messaging and cleaner visuals.",
    points: [
      "Rework copy, layouts, and hooks without rebuilding from scratch",
      "Keep your team aligned with fast content iteration",
      "Prepare each scene for production-ready delivery",
    ],
    cta: "Explore workflow",
    mediaSide: "right",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "publish",
    badge: "Publish",
    title: "Move from concept to launch with content that is ready to perform.",
    points: [
      <>
        Package campaigns for ads, reels, websites,
        <span className={styles.mobilePointBreak}> and presentations</span>
      </>,
      "Keep every output consistent with your brand direction",
      "Swap the blank panel with a final video when production is ready",
    ],
    cta: "Plan your launch",
    mediaSide: "left",
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
  },
];

function CreativeContent() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const isMobileView = window.innerWidth <= 768;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: isMobileView ? 0.04 : 0.12,
        rootMargin: isMobileView ? "0px 0px 6% 0px" : "0px 0px -8% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.sectionVisible : ""}`}
    >
      <div className={styles.intro}>
        <h2 className={styles.heading}>
          <span
            className={`${styles.revealLine} ${styles.headingLineDesktop}`}
            style={{ "--line-delay": "0s" }}
          >
            <span className={styles.revealLineInner}>Creative content at the</span>
          </span>
          <span
            className={`${styles.revealLine} ${styles.headingLineDesktop}`}
            style={{ "--line-delay": "0.08s" }}
          >
            <span className={styles.revealLineInner}>speed of light.</span>
          </span>
          <span
            className={`${styles.revealLine} ${styles.headingLineMobile}`}
            style={{ "--line-delay": "0s" }}
          >
            <span className={styles.revealLineInner}>Creative content</span>
          </span>
          <span
            className={`${styles.revealLine} ${styles.headingLineMobile}`}
            style={{ "--line-delay": "0.08s" }}
          >
            <span className={styles.revealLineInner}>at the speed</span>
          </span>
          <span
            className={`${styles.revealLine} ${styles.headingLineMobile}`}
            style={{ "--line-delay": "0.16s" }}
          >
            <span className={styles.revealLineInner}>of light.</span>
          </span>
        </h2>
      </div>

      <div className={styles.stack}>
        {contentRows.map((row, index) => {
          const mediaFirst = row.mediaSide === "left";

          return (
            <article
              key={row.id}
              className={`${styles.row} ${!mediaFirst ? styles.rowReverse : ""}`}
            >
              <div className={styles.mediaCard} aria-label={`${row.badge} preview video`}>
                <video
                  className={styles.mediaVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={row.videoUrl} type="video/mp4" />
                </video>
              </div>

              <div className={styles.content}>
                <div className={styles.badge}>{row.badge}</div>

                <h3 className={styles.title}>
                  <span
                    className={styles.revealLine}
                    style={{ "--line-delay": `${0.06 + index * 0.04}s` }}
                  >
                    <span className={styles.revealLineInner}>
                      {row.mobileTitle ?? row.title}
                    </span>
                  </span>
                </h3>

                <ul className={styles.points}>
                  {row.points.map((point, pointIndex) => (
                    <li key={`${row.id}-${pointIndex}`} className={styles.point}>
                      <PointIcon />
                      <span
                        className={styles.revealLine}
                        style={{
                          "--line-delay": `${0.12 + index * 0.05 + pointIndex * 0.05}s`,
                        }}
                      >
                        <span className={styles.revealLineInner}>{point}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <button type="button" className={styles.button}>
                  {row.cta}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default CreativeContent;
