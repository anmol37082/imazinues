"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./TestimonialShowcase.module.css";

const AUTOPLAY_DELAY = 4000;

const testimonials = [
  {
    id: 1,
    quote:
      "Imazine Us gave our brand a sharper identity and a smoother digital experience. Everything now feels clearer, faster, and far more premium.",
    name: "Ritika Sharma",
    role: "Founder, Modern Lifestyle Jewellers",
    initials: "RS",
  },
  {
    id: 2,
    quote:
      "Their team turned scattered ideas into a system that actually performs. Our website, content, and campaigns finally feel aligned and purposeful.",
    name: "Karan Mehta",
    role: "Director, Kiner Kailash Jewellers",
    initials: "KM",
  },
  {
    id: 3,
    quote:
      "From packaging to launch assets, the execution was consistent across every touchpoint. The brand now looks polished and ready to scale.",
    name: "Aisha Kapoor",
    role: "Brand Lead, Glamour & Radiance",
    initials: "AK",
  },
  {
    id: 4,
    quote:
      "We needed creative direction with measurable business focus, and that is exactly what came through. The engagement uplift was visible almost immediately.",
    name: "Dev Arora",
    role: "Marketing Head, Retail Growth Studio",
    initials: "DA",
  },
  {
    id: 5,
    quote:
      "The process was fast, structured, and genuinely collaborative. Instead of just good visuals, we ended up with a stronger brand presence overall.",
    name: "Neha Batra",
    role: "Co-founder, House of Craft",
    initials: "NB",
  },
];

const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials];
const START_INDEX = testimonials.length;
const END_INDEX = testimonials.length * 2 - 1;
const MIN_LOOP_INDEX = 0;
const MAX_LOOP_INDEX = loopedTestimonials.length - 1;

export default function TestimonialShowcase() {
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const quoteRefs = useRef({});
  const [activeIndex, setActiveIndex] = useState(START_INDEX);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [stepSize, setStepSize] = useState(0);
  const [centerOffset, setCenterOffset] = useState(0);
  const [expandedCards, setExpandedCards] = useState({});
  const [overflowingCards, setOverflowingCards] = useState({});
  const [truncatedQuotes, setTruncatedQuotes] = useState({});
  const isAutoplayPaused = Object.values(expandedCards).some(Boolean);

  const moveToPrevious = () => {
    setIsTransitionEnabled(true);
    setExpandedCards({});
    setActiveIndex((current) => (current <= MIN_LOOP_INDEX ? END_INDEX : current - 1));
  };

  const moveToNext = () => {
    setIsTransitionEnabled(true);
    setExpandedCards({});
    setActiveIndex((current) => (current >= MAX_LOOP_INDEX ? START_INDEX : current + 1));
  };

  useEffect(() => {
    const updateMeasurements = () => {
      const carousel = carouselRef.current;
      const firstCard = trackRef.current?.querySelector(`.${styles.card}`);
      if (!firstCard || !carousel) return;

      const cardWidth = firstCard.getBoundingClientRect().width;
      const trackStyles = window.getComputedStyle(trackRef.current);
      const carouselStyles = window.getComputedStyle(carousel);
      const gap = Number.parseFloat(trackStyles.columnGap || trackStyles.gap || "0");
      const paddingLeft = Number.parseFloat(carouselStyles.paddingLeft || "0");
      const paddingRight = Number.parseFloat(carouselStyles.paddingRight || "0");
      const visibleWidth = carousel.clientWidth - paddingLeft - paddingRight;
      setStepSize(cardWidth + gap);
      setCenterOffset((visibleWidth - cardWidth) / 2);
    };

    updateMeasurements();
    window.addEventListener("resize", updateMeasurements);

    return () => {
      window.removeEventListener("resize", updateMeasurements);
    };
  }, []);

  useEffect(() => {
    const getTruncatedQuote = (node, text) => {
      const computedStyles = window.getComputedStyle(node);
      const lineHeight = Number.parseFloat(computedStyles.lineHeight || "0");
      const clampHeight = lineHeight * 2.5;
      const measureNode = node.cloneNode();

      measureNode.style.position = "absolute";
      measureNode.style.visibility = "hidden";
      measureNode.style.pointerEvents = "none";
      measureNode.style.zIndex = "-1";
      measureNode.style.left = "-9999px";
      measureNode.style.top = "0";
      measureNode.style.width = `${node.clientWidth}px`;
      measureNode.style.maxHeight = "none";
      measureNode.style.overflow = "visible";
      measureNode.style.whiteSpace = "normal";
      document.body.appendChild(measureNode);

      measureNode.textContent = text;
      const hasOverflow = measureNode.scrollHeight > clampHeight + 1;

      if (!hasOverflow) {
        document.body.removeChild(measureNode);
        return { hasOverflow: false, truncatedText: text };
      }

      let low = 0;
      let high = text.length;
      let bestFit = "";

      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const candidate = `${text.slice(0, mid).trimEnd()}...`;
        measureNode.textContent = candidate;

        if (measureNode.scrollHeight <= clampHeight + 1) {
          bestFit = candidate;
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }

      document.body.removeChild(measureNode);

      return {
        hasOverflow: true,
        truncatedText: bestFit || `${text.slice(0, 1)}...`,
      };
    };

    const updateOverflowState = () => {
      const nextOverflowingCards = {};
      const nextTruncatedQuotes = {};

      Object.entries(quoteRefs.current).forEach(([key, node]) => {
        if (!node) return;
        const fullText = testimonials[(Number.parseInt(key.split("-")[0], 10) || 1) - 1]?.quote ?? "";
        const { hasOverflow, truncatedText } = getTruncatedQuote(node, fullText);
        nextOverflowingCards[key] = hasOverflow;
        nextTruncatedQuotes[key] = truncatedText;
      });

      setOverflowingCards(nextOverflowingCards);
      setTruncatedQuotes(nextTruncatedQuotes);
    };

    updateOverflowState();
    window.addEventListener("resize", updateOverflowState);

    return () => {
      window.removeEventListener("resize", updateOverflowState);
    };
  }, [expandedCards]);

  useEffect(() => {
    if (isAutoplayPaused) return undefined;

    const intervalId = window.setInterval(() => {
      moveToNext();
    }, AUTOPLAY_DELAY);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isAutoplayPaused]);

  const handleTransitionEnd = () => {
    if (activeIndex > END_INDEX) {
      setIsTransitionEnabled(false);
      setActiveIndex((current) => current - testimonials.length);
    } else if (activeIndex < testimonials.length) {
      setIsTransitionEnabled(false);
      setActiveIndex((current) => current + testimonials.length);
    }
  };

  useEffect(() => {
    if (!isTransitionEnabled) {
      const frameId = window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsTransitionEnabled(true);
        });
      });

      return () => {
        window.cancelAnimationFrame(frameId);
      };
    }
  }, [isTransitionEnabled]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={styles.title}>
            <span className={styles.titleDesktop}>
              Creativity that doesn&apos;t just look
              <span className={styles.titleBreak}>good, it works.</span>
            </span>
            <span className={styles.titleMobile}>
              <span className={styles.titleBreak}>Creativity</span>
              <span className={styles.titleBreak}>that doesn&apos;t just</span>
              <span className={styles.titleBreak}>look good, it</span>
              <span className={styles.titleBreak}>works.</span>
            </span>
          </h2>
          <p className={styles.copy}>
            <span className={styles.copyDesktop}>
              For us, creativity is not only about design, it&apos;s about results. The
              real proof lies in the experiences and success stories shared by the
              brands we&apos;ve worked with.
            </span>
            <span className={styles.copyMobile}>
              <span className={styles.copyLine}>
                For us, creativity is not only
              </span>
              <span className={styles.copyLine}>
                about design, it&apos;s about results. The real proof
              </span>
              <span className={styles.copyLine}>
                lies in the experiences and success
              </span>
              <span className={styles.copyLine}>
                stories shared by the brands
              </span>
              <span className={styles.copyLine}>we&apos;ve worked with.</span>
            </span>
          </p>
        </div>

        <div ref={carouselRef} className={styles.carousel}>
          <div className={styles.edgeFadeLeft} aria-hidden="true" />
          <div className={styles.edgeFadeRight} aria-hidden="true" />

          <div
            ref={trackRef}
            className={`${styles.track} ${
              isTransitionEnabled ? styles.trackAnimated : styles.trackStatic
            }`}
            style={{
              transform:
                stepSize || centerOffset
                  ? `translateX(${Math.round(centerOffset - activeIndex * stepSize)}px)`
                  : undefined,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopedTestimonials.map((item, index) => {
              const distance = Math.abs(index - activeIndex);
              const isActive = index === activeIndex;
              const isSidePreview = distance === 1;

              return (
                <article
                  key={`${item.id}-${index}`}
                  className={`${styles.card} ${
                    isActive
                      ? styles.cardActive
                      : isSidePreview
                        ? styles.cardPreview
                        : styles.cardHidden
                  }`}
                  aria-hidden={!isActive}
                >
                  <div className={styles.quoteBlock}>
                    <p
                      ref={(node) => {
                        if (node) {
                          quoteRefs.current[`${item.id}-${index}`] = node;
                        } else {
                          delete quoteRefs.current[`${item.id}-${index}`];
                        }
                      }}
                      className={styles.quote}
                    >
                      {expandedCards[`${item.id}-${index}`]
                        ? item.quote
                        : truncatedQuotes[`${item.id}-${index}`] ?? item.quote}
                    </p>

                    {overflowingCards[`${item.id}-${index}`] ? (
                      <button
                        type="button"
                        className={styles.readMoreButton}
                        onClick={() =>
                          setExpandedCards((current) => ({
                            ...current,
                            [`${item.id}-${index}`]: !current[`${item.id}-${index}`],
                          }))
                        }
                      >
                        {expandedCards[`${item.id}-${index}`] ? "Read less" : "Read more"}
                      </button>
                    ) : null}
                  </div>

                  <div className={styles.authorRow}>
                    <span className={styles.authorAvatar}>{item.initials}</span>
                    <span className={styles.authorMeta}>
                      <strong className={styles.authorName}>{item.name}</strong>
                      <span className={styles.authorRole}>{item.role}</span>
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.controlButton}
            aria-label="Previous review"
            onClick={moveToPrevious}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.5 5.5L8 12l6.5 6.5" />
            </svg>
          </button>

          <button
            type="button"
            className={styles.controlButton}
            aria-label="Next review"
            onClick={moveToNext}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9.5 5.5L16 12l-6.5 6.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
