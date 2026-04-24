"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WhoWeAre.module.css";

const COUNT_DURATION = 1400;

const stats = [
  {
    value: "100+",
    labelLines: [
      "Projects Delivered",
      "Turning ideas into impactful projects with creativity, strategy, and precision.",
    ],
  },
  {
    value: "99%",
    labelLines: [
      "Client Satisfaction",
      "Built on trust, creativity, and consistent results that keep clients happy.",
    ],
  },
  {
    value: "30+",
    labelLines: [
      "Clients Served",
      "Empowering brands with smart strategy, bold creativity, and growth focus.",
    ],
  },
  {
    value: "5L+",
    labelLines: [
      "Ads Spent",
      "Smartly managed ad spend delivering reach, engagement, and quality leads.",
    ],
  },
];

const parsedStats = stats.map((item) => {
  const numericValue = Number.parseInt(item.value, 10);
  const suffix = item.value.replace(String(numericValue), "");

  return {
    ...item,
    numericValue,
    suffix,
  };
});

function WhoWeAre() {
  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);
  const [imageWidth, setImageWidth] = useState(70);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState(() =>
    parsedStats.map(() => 0)
  );

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const updateImageWidth = () => {
      const imageWrap = imageWrapRef.current;
      if (!imageWrap) return;

      const rect = imageWrap.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.88;
      const end = -viewportHeight * 0.55;
      const rawProgress = (start - rect.top) / (start - end);
      const progress = Math.min(1, Math.max(0, rawProgress));

      setImageWidth(70 + progress * 30);
    };

    updateImageWidth();
    window.addEventListener("scroll", updateImageWidth, { passive: true });
    window.addEventListener("resize", updateImageWidth);

    return () => {
      window.removeEventListener("scroll", updateImageWidth);
      window.removeEventListener("resize", updateImageWidth);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    let frameId = 0;
    let startTime = 0;

    const animateCounts = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / COUNT_DURATION, 1);

      setAnimatedValues(
        parsedStats.map((item) => Math.round(item.numericValue * progress))
      );

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animateCounts);
      }
    };

    frameId = window.requestAnimationFrame(animateCounts);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [isVisible]);

  return (
    <section
      className={`${styles.section} ${isVisible ? styles.sectionVisible : ""}`}
      ref={sectionRef}
    >
      <div className={styles.intro}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          <span>Who we are</span>
        </div>

        <h2 className={styles.title}>
          <span
            className={`${styles.revealLine} ${styles.headingLineDesktop}`}
            style={{ "--line-delay": "0.06s" }}
          >
            <span className={styles.revealLineInner}>We build brands with </span>
          </span>
          <span
            className={`${styles.revealLine} ${styles.headingLineDesktop}`}
            style={{ "--line-delay": "0.1s" }}
          >
            <span className={styles.revealLineInner}>digital power.</span>
          </span>
          <span
            className={`${styles.revealLine} ${styles.headingLineMobile}`}
            style={{ "--line-delay": "0.06s" }}
          >
            <span className={styles.revealLineInner}>We build brands</span>
          </span>
          <span
            className={`${styles.revealLine} ${styles.headingLineMobile}`}
            style={{ "--line-delay": "0.1s" }}
          >
            <span className={styles.revealLineInner}>with digital</span>
          </span>
          <span
            className={`${styles.revealLine} ${styles.headingLineMobile}`}
            style={{ "--line-delay": "0.14s" }}
          >
            <span className={styles.revealLineInner}>power.</span>
          </span>
        </h2>

        <p className={styles.copy}>
          <span className={styles.revealLine} style={{ "--line-delay": "0.14s" }}>
            <span className={styles.revealLineInner}>
             Strategic creativity and data-driven marketing that turn attention into engagement and engagement into real business growth.
            </span>
          </span>
        </p>
      </div>

      <div
        className={styles.imageWrap}
        ref={imageWrapRef}
        style={{ width: `${imageWidth}%` }}
      >
        <div
          className={styles.image}
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.26) 100%), url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1600&q=80)",
          }}
        />
      </div>

      <div className={styles.statsGrid}>
        {parsedStats.map((item, index) => (
          <div
            className={styles.statCard}
            key={item.value}
            style={{ "--line-delay": `${0.3 + index * 0.08}s` }}
          >
            <strong className={`${styles.statValue} ${styles.revealLine}`}>
              <span className={styles.revealLineInner}>
                {isVisible ? animatedValues[index] : 0}
                {item.suffix}
              </span>
            </strong>
            <p className={styles.statLabel}>
              {item.labelLines.map((line, lineIndex) => (
                <span
                  className={`${styles.revealLine} ${
                    item.compactLabel ? styles.revealLineNoWrap : ""
                  }`}
                  key={line}
                  style={{ "--line-delay": `${0.38 + index * 0.08 + lineIndex * 0.06}s` }}
                >
                  <span
                    className={`${styles.revealLineInner} ${
                      lineIndex === 0 ? styles.statLabelHeading : ""
                    }`}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhoWeAre;
