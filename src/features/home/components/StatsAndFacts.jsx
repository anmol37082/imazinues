"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StatsAndFacts.module.css";

const COUNT_DURATION = 2400;
const COUNT_START_THRESHOLD = 0.35;

const stats = [
  {
    value: "100+",
    labelLines: [
      "Projects Delivered",
      <>
        Turning ideas into impactful projects with
        <span className={styles.mobileStatBreak}> creativity, strategy, and precision.</span>
      </>,
    ],
  },
  {
    value: "99%",
    labelLines: [
      "Client Satisfaction",
      <>
        Built on trust, creativity, and consistent results
        <span className={styles.mobileStatBreak}> that keep clients happy.</span>
      </>,
    ],
  },
  {
    value: "30+",
    labelLines: [
      "Clients Served",
      <>
        Empowering brands with smart strategy,<span className={styles.mobileStatBreak}> bold creativity,
         and growth focus.</span>
      </>,
    ],
  },
  {
    value: "5L+",
    labelLines: [
      "Ads Spent",
      <>
      Smartly managed ad spend delivering reach, <span className={styles.mobileStatBreak}></span>
       engagement, and quality leads.,
      </>,
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

function StatsAndFacts() {
  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);
  const imageFrameRef = useRef(null);
  const wasCountZoneVisibleRef = useRef(false);
  const [imageScale, setImageScale] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState(() =>
    parsedStats.map(() => 0)
  );
  const [countRunId, setCountRunId] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsVisible(inView);

        const inCountZone = inView && entry.intersectionRatio >= COUNT_START_THRESHOLD;

        if (inCountZone && !wasCountZoneVisibleRef.current) {
          setAnimatedValues(parsedStats.map(() => 0));
          setCountRunId((current) => current + 1);
        }

        if (!inCountZone) {
          setAnimatedValues(parsedStats.map(() => 0));
        }

        wasCountZoneVisibleRef.current = inCountZone;
      },
      {
        threshold: [0.12, COUNT_START_THRESHOLD],
        rootMargin: "0px 0px -12% 0px",
      }
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
      const start = viewportHeight * 1.12;
      const end = -viewportHeight * 0.55;
      const rawProgress = (start - rect.top) / (start - end);
      const progress = Math.min(1, Math.max(0, rawProgress));
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setImageScale(1 + easedProgress * 0.4285714286);
    };

    const requestUpdateImageWidth = () => {
      if (imageFrameRef.current) {
        window.cancelAnimationFrame(imageFrameRef.current);
      }

      imageFrameRef.current = window.requestAnimationFrame(() => {
        updateImageWidth();
        imageFrameRef.current = null;
      });
    };

    requestUpdateImageWidth();
    window.addEventListener("scroll", requestUpdateImageWidth, { passive: true });
    window.addEventListener("resize", requestUpdateImageWidth);

    return () => {
      if (imageFrameRef.current) {
        window.cancelAnimationFrame(imageFrameRef.current);
      }
      window.removeEventListener("scroll", requestUpdateImageWidth);
      window.removeEventListener("resize", requestUpdateImageWidth);
    };
  }, []);

  useEffect(() => {
    if (!countRunId) {
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
  }, [countRunId]);

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
              Strategic creativity and data-driven
              <span className={styles.mobileCopyBreak}> marketing that turn attention into engagement</span>
              <span className={styles.mobileCopyInline}> and engagement into real business</span>
              <span className={styles.mobileCopyBreak}> growth.</span>
            </span>
          </span>
        </p>
      </div>

      <div
        className={styles.imageWrap}
        ref={imageWrapRef}
        style={{ transform: `translate3d(0, 0, 0) scaleX(${imageScale})` }}
      >
        <div
          className={styles.image}
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.26) 100%), url(/images/resizebanner3.png)",
          }}
        />
      </div>

      <div className={styles.statsGrid}>
        {parsedStats.map((item, index) => (
          <div
            className={styles.statCard}
            key={item.value}
          >
            <strong className={styles.statValue}>
              {animatedValues[index]}
              {item.suffix}
            </strong>
            <p className={styles.statLabel}>
              {item.labelLines.map((line, lineIndex) => (
                <span
                  className={item.compactLabel ? styles.statLabelNoWrap : undefined}
                  key={`${item.value}-${lineIndex}`}
                >
                  <span
                    className={
                      lineIndex === 0 ? styles.statLabelHeading : styles.statLabelCopy
                    }
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

export default StatsAndFacts;
