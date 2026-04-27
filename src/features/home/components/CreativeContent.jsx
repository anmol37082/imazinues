"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CreativeContent.module.css";

const contentRows = [
  {
    id: "generate",
    badge: "Generate",
    title: "Modern Lifestyle Jewellers",
    points: [
      <>
        From logo creation to full brand setup, Imazine Us built the brand from
        zero to hero with social media profiles, brand photoshoot, product
        shoot, and creative video production.
      </>,
    ],
    cta: "Start for free",
    mediaSide: "left",
    videoWebm: "/ceativecontent/GIFanimation1.webm",
    videoMp4: "/ceativecontent/GIFanimation1.mp4",
  },
  {
    id: "optimize",
    badge: "Optimize",
    title: "Kiner Kailash Jewellers",
    points: [
      "Imazine Us managed social media growth with brand photoshoot, product shoot, video content, website development, SEO strategy, and Google Business profile management.",
    ],
    cta: "Explore workflow",
    mediaSide: "right",
    videoMp4: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "publish",
    badge: "Publish",
    title: "Glamour & Radiance",
    points: [
      <>
        From logo design to complete brand setup, packaging design, social media
        creation, and a powerful e-commerce website, Imazine Us built the brand
      
        identity and digital presence.
      </>,
    ],
    cta: "Plan your launch",
    mediaSide: "left",
    videoMp4: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
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
            <span className={styles.revealLineInner}>Ideas that move at</span>
          </span>
          <span
            className={`${styles.revealLine} ${styles.headingLineDesktop}`}
            style={{ "--line-delay": "0.08s" }}
          >
            <span className={styles.revealLineInner}>the speed of creativity.</span>
          </span>
          <span
            className={`${styles.revealLine} ${styles.headingLineMobile}`}
            style={{ "--line-delay": "0s" }}
          >
            <span className={styles.revealLineInner}>Ideas that move</span>
          </span>
          <span
            className={`${styles.revealLine} ${styles.headingLineMobile}`}
            style={{ "--line-delay": "0.08s" }}
          >
            <span className={styles.revealLineInner}>at the speed of</span>
          </span>
          <span
            className={`${styles.revealLine} ${styles.headingLineMobile}`}
            style={{ "--line-delay": "0.16s" }}
          >
            <span className={styles.revealLineInner}>creativity.</span>
          </span>
        </h2>
      </div>

      <div className={styles.stack}>
        {contentRows.map((row, index) => {
          const mediaFirst = row.mediaSide === "left";

          return (
            <article
              key={row.id}
              className={`${styles.row} ${!mediaFirst ? styles.rowReverse : ""} ${
                row.id === "generate" ? styles.rowGenerate : ""
              }`}
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
                  {row.videoWebm ? <source src={row.videoWebm} type="video/webm" /> : null}
                  <source src={row.videoMp4} type="video/mp4" />
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
