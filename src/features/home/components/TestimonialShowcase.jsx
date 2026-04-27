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

export default function TestimonialShowcase() {
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(START_INDEX);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [stepSize, setStepSize] = useState(0);
  const [centerOffset, setCenterOffset] = useState(0);

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
    const intervalId = window.setInterval(() => {
      setIsTransitionEnabled(true);
      setActiveIndex((current) => (current >= END_INDEX ? START_INDEX : current + 1));
    }, AUTOPLAY_DELAY);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

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
            Creativity that doesn't just look
            <span className={styles.titleBreak}>good, it works.</span>
          </h2>
          <p className={styles.copy}>
            For us, creativity is not only about design, it's about results. The real
            proof lies in the experiences and success stories shared by the brands
            we've worked with.
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
                  <p className={styles.quote}>{item.quote}</p>

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
            onClick={() => {
              setIsTransitionEnabled(true);
              setActiveIndex((current) =>
                current <= testimonials.length ? END_INDEX : current - 1
              );
            }}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.5 5.5L8 12l6.5 6.5" />
            </svg>
          </button>

          <button
            type="button"
            className={styles.controlButton}
            aria-label="Next review"
            onClick={() => {
              setIsTransitionEnabled(true);
              setActiveIndex((current) =>
                current >= END_INDEX ? START_INDEX : current + 1
              );
            }}
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
