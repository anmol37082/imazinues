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
  const [imageWidth, setImageWidth] = useState(40);

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

  // --- Smooth scroll-linked image width (lerp-based rAF loop) ---
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 769px)");

    // current + target are tracked outside React state so the rAF loop
    // can read/write every frame without extra re-renders per frame.
    const currentWidthRef = { current: 40 };
    const targetWidthRef = { current: 40 };
    const LERP_FACTOR = 0.12; // lower = smoother/slower catch-up, higher = snappier

    const computeTargetWidth = () => {
      const node = sectionRef.current;
      if (!node || !mediaQuery.matches) return 40;

      const rect = node.getBoundingClientRect();
      const sectionHeight = node.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrolledInSection = -rect.top + windowHeight * 0.3;
      const totalScrollable = sectionHeight - windowHeight * 0.5;
      const progress = Math.max(0, Math.min(1, scrolledInSection / totalScrollable));

      return 40 + progress * 60;
    };

    const tick = () => {
      targetWidthRef.current = computeTargetWidth();

      const diff = targetWidthRef.current - currentWidthRef.current;

      // snap when close enough so it doesn't animate forever on a micro-tail
      if (Math.abs(diff) < 0.05) {
        currentWidthRef.current = targetWidthRef.current;
      } else {
        currentWidthRef.current += diff * LERP_FACTOR;
      }

      setImageWidth(currentWidthRef.current);
      imageFrameRef.current = window.requestAnimationFrame(tick);
    };

    const handleMediaChange = () => {
      if (!mediaQuery.matches) {
        currentWidthRef.current = 40;
        targetWidthRef.current = 40;
        setImageWidth(40);
      }
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    // Runs continuously (not just on the scroll event) — this continuous
    // lerp is what removes the jitter between scroll events.
    imageFrameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (imageFrameRef.current) {
        window.cancelAnimationFrame(imageFrameRef.current);
        imageFrameRef.current = null;
      }
      mediaQuery.removeEventListener("change", handleMediaChange);
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
            <span className={styles.revealLineInner}>We</span>
          </span>
          <span
            className={`${styles.revealLine} ${styles.headingLineMobile}`}
            style={{ "--line-delay": "0.1s" }}
          >
            <span className={styles.revealLineInner}>build brands with</span>
          </span>
          <span
            className={`${styles.revealLine} ${styles.headingLineMobile}`}
            style={{ "--line-delay": "0.14s" }}
          >
            <span className={styles.revealLineInner}>digital power.</span>
          </span>
        </h2>

        <p className={styles.copy}>
          <span className={styles.revealLine} style={{ "--line-delay": "0.14s" }}>
            <span className={styles.revealLineInner}>
              <span className={styles.mobileCopyNoWrap}>
                Strategic creativity and data-driven
              </span>
              <br className={styles.mobileLineBreak} />
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
        style={{ width: `${imageWidth}%` }}
      >

        <div
          className={styles.image}
          style={{
            backgroundImage:
              "url(/images/mainbanner.webp)",
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