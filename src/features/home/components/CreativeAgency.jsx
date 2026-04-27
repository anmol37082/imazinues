"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./CreativeAgency.module.css";

const LOOP_COPIES = 3;
const AUTO_SCROLL_SPEED = 0.028;
const DRAG_THRESHOLD = 8;
const MOBILE_BREAKPOINT = 768;
const MOBILE_AUTO_ADVANCE_MS = 3000;
const MOBILE_TRANSITION_MS = 550;

const cards = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    subtitle:
      "Strategic online marketing that grows your brand, leads, and sales.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    overlay:
      "linear-gradient(180deg, rgba(15,18,24,0.08) 0%, rgba(15,18,24,0.18) 35%, rgba(15,18,24,0.82) 100%)",
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    subtitle:
      "Growing your brand online with creative content and powerful engagement.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    overlay:
      "linear-gradient(180deg, rgba(20,14,10,0.1) 0%, rgba(20,14,10,0.24) 34%, rgba(20,14,10,0.84) 100%)",
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    subtitle: "Generating quality leads that convert into real customers.",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80",
    overlay:
      "linear-gradient(180deg, rgba(18,20,24,0.08) 0%, rgba(18,20,24,0.22) 34%, rgba(18,20,24,0.84) 100%)",
  },
  {
    id: "seo",
    title: "SEO",
    subtitle:
      "Improving search rankings to bring consistent organic traffic to your website.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    overlay:
      "linear-gradient(180deg, rgba(17,20,26,0.08) 0%, rgba(17,20,26,0.18) 35%, rgba(17,20,26,0.82) 100%)",
  },
  {
    id: "website-revamp-development",
    title: "Website Revamp & Development",
    subtitle:
      "Creating modern, fast, and user-friendly websites that represent your brand.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
    overlay:
      "linear-gradient(180deg, rgba(26,18,16,0.08) 0%, rgba(26,18,16,0.18) 35%, rgba(26,18,16,0.82) 100%)",
  },
  {
    id: "brand-guidelines",
    title: "Brand Guidelines",
    subtitle:
      "Building clear brand rules to keep your identity consistent everywhere.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    overlay:
      "linear-gradient(180deg, rgba(18,16,22,0.08) 0%, rgba(18,16,22,0.18) 35%, rgba(18,16,22,0.82) 100%)",
  },
  {
    id: "print-design",
    title: "Print Design",
    subtitle:
      "Designing impactful print materials that strengthen your brand presence.",
    image:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1200&q=80",
    overlay:
      "linear-gradient(180deg, rgba(18,24,18,0.08) 0%, rgba(18,24,18,0.18) 35%, rgba(18,24,18,0.82) 100%)",
  },
  {
    id: "indoor-branding",
    title: "Indoor Branding",
    subtitle:
      "Transforming interior spaces with creative branding that attracts attention.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    overlay:
      "linear-gradient(180deg, rgba(20,18,24,0.08) 0%, rgba(20,18,24,0.18) 35%, rgba(20,18,24,0.82) 100%)",
  },
  {
    id: "outdoor-branding",
    title: "Outdoor Branding",
    subtitle:
      "Creating bold outdoor branding that makes your business stand out.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    overlay:
      "linear-gradient(180deg, rgba(14,18,24,0.08) 0%, rgba(14,18,24,0.18) 35%, rgba(14,18,24,0.82) 100%)",
  },
  {
    id: "ad-videos",
    title: "Ad Videos",
    subtitle:
      "Producing engaging advertisement videos that highlight your brand story.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    overlay:
      "linear-gradient(180deg, rgba(17,20,26,0.08) 0%, rgba(17,20,26,0.18) 35%, rgba(17,20,26,0.82) 100%)",
  },
  {
    id: "photo-video-shoot",
    title: "Photo & Video Shoot",
    subtitle:
      "Capturing professional visuals that showcase your brand beautifully.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
    overlay:
      "linear-gradient(180deg, rgba(26,18,16,0.08) 0%, rgba(26,18,16,0.18) 35%, rgba(26,18,16,0.82) 100%)",
  },
  {
    id: "packaging-designing",
    title: "Packaging Designing",
    subtitle:
      "Designing attractive packaging that enhances product appeal and brand value.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    overlay:
      "linear-gradient(180deg, rgba(18,16,22,0.08) 0%, rgba(18,16,22,0.18) 35%, rgba(18,16,22,0.82) 100%)",
  },
];

function CreativeAgency() {
  const [activeCardKey, setActiveCardKey] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isTrackAnimating, setIsTrackAnimating] = useState(false);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const sliderTrackRef = useRef(null);
  const segmentWidthRef = useRef(0);
  const offsetRef = useRef(0);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const isDraggingRef = useRef(false);
  const pointerDownRef = useRef(false);
  const pressedCardKeyRef = useRef("");
  const mobileIndexRef = useRef(cards.length);
  const loopedCards = Array.from({ length: LOOP_COPIES }, (_, copyIndex) =>
    cards.map((card, index) => ({
      ...card,
      loopKey: `${card.id}-${copyIndex}-${index}`,
    }))
  ).flat();

  const applyOffset = useCallback((nextOffset, { wrap = true } = {}) => {
    const track = sliderTrackRef.current;
    const segmentWidth = segmentWidthRef.current;
    if (!track || segmentWidth <= 0) return;

    if (wrap) {
      offsetRef.current = ((nextOffset % segmentWidth) + segmentWidth) % segmentWidth;
    } else {
      const slider = sliderRef.current;
      const maxOffset = slider
        ? Math.max(0, track.scrollWidth - slider.clientWidth)
        : nextOffset;

      offsetRef.current = Math.min(Math.max(nextOffset, 0), maxOffset);
    }

    offsetRef.current = Math.round(offsetRef.current);

    track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
  }, []);

  const resetMobileLoopPosition = useCallback((nextIndex, step) => {
    const track = sliderTrackRef.current;
    if (!track || step <= 0) return;

    mobileIndexRef.current = nextIndex;
    setIsTrackAnimating(false);
    track.style.transition = "none";
    applyOffset(nextIndex * step, { wrap: false });
    track.getBoundingClientRect();
    track.style.transition = "";
  }, [applyOffset]);

  const getSliderStep = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return 0;

    const card = slider.querySelector(`.${styles.card}`);
    if (!card) return 0;

    const track = sliderTrackRef.current;
    const gap = track
      ? Number.parseFloat(
          window.getComputedStyle(track).columnGap ||
            window.getComputedStyle(track).gap ||
            "0"
        )
      : 0;

    return card.clientWidth + gap;
  }, []);

  const handleSliderNav = useCallback(
    (direction, { animated = true } = {}) => {
      const step = getSliderStep();
      if (step <= 0) return;

      if (isMobileView) {
        setIsTrackAnimating(animated);
        mobileIndexRef.current += direction;
        applyOffset(mobileIndexRef.current * step, { wrap: false });
        return;
      }

      applyOffset(offsetRef.current + direction * step);
    },
    [applyOffset, getSliderStep, isMobileView]
  );

  useEffect(() => {
    const updateViewportMode = () => {
      setIsMobileView(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    updateViewportMode();
    window.addEventListener("resize", updateViewportMode);

    return () => {
      window.removeEventListener("resize", updateViewportMode);
    };
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.32);
      },
      { threshold: [0.32, 0.45] }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const track = sliderTrackRef.current;
    if (!track) return;

    const updateTrackMetrics = () => {
      segmentWidthRef.current = track.scrollWidth / LOOP_COPIES;
      if (segmentWidthRef.current <= 0) {
        return;
      }

      if (isMobileView) {
        const step = getSliderStep();
        const minimumIndex = cards.length;
        const maximumIndex = cards.length * 2 - 1;

        if (mobileIndexRef.current < minimumIndex || mobileIndexRef.current > maximumIndex) {
          mobileIndexRef.current =
            minimumIndex +
            (((mobileIndexRef.current - minimumIndex) % cards.length) + cards.length) %
              cards.length;
        }

        offsetRef.current = step > 0 ? mobileIndexRef.current * step : 0;
      } else {
        offsetRef.current = offsetRef.current % segmentWidthRef.current;
      }

      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    };

    updateTrackMetrics();
    window.addEventListener("resize", updateTrackMetrics);

    return () => {
      window.removeEventListener("resize", updateTrackMetrics);
    };
  }, [getSliderStep, isMobileView]);

  useEffect(() => {
    const track = sliderTrackRef.current;
    if (!track) return;

    let frameId = 0;
    let previousTime = 0;

    const step = (time) => {
      if (!previousTime) {
        previousTime = time;
      }

      const segmentWidth = segmentWidthRef.current;

      if (
        isVisible &&
        !isMobileView &&
        !activeCardKey &&
        !pointerDownRef.current &&
        !isDraggingRef.current &&
        segmentWidth > 0
      ) {
        const delta = time - previousTime;
        offsetRef.current =
          (offsetRef.current + delta * AUTO_SCROLL_SPEED) % segmentWidth;
        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }

      previousTime = time;
      frameId = window.requestAnimationFrame(step);
    };

    frameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [activeCardKey, isMobileView, isVisible]);

  useEffect(() => {
    if (!isMobileView || !isVisible) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      if (activeCardKey || pointerDownRef.current || isDraggingRef.current) {
        return;
      }

      handleSliderNav(1, { animated: true });
    }, MOBILE_AUTO_ADVANCE_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [activeCardKey, handleSliderNav, isMobileView, isVisible]);

  const handlePointerDown = (event) => {
    setIsTrackAnimating(false);
    pointerDownRef.current = true;
    isDraggingRef.current = false;
    dragStartXRef.current = event.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    pressedCardKeyRef.current =
      event.target.closest("[data-card-key]")?.getAttribute("data-card-key") ?? "";
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!pointerDownRef.current) return;
    const deltaX = event.clientX - dragStartXRef.current;

    if (!isDraggingRef.current && Math.abs(deltaX) < DRAG_THRESHOLD) {
      return;
    }

    isDraggingRef.current = true;
    applyOffset(dragStartOffsetRef.current - deltaX, { wrap: !isMobileView });
  };

  const handlePointerUp = (event) => {
    const clickedToggle = event?.target?.closest?.(`.${styles.cardToggle}`);
    const shouldToggleCard =
      pointerDownRef.current &&
      !isDraggingRef.current &&
      pressedCardKeyRef.current &&
      (!isMobileView || clickedToggle);
    const nextCardKey = shouldToggleCard ? pressedCardKeyRef.current : "";

    pointerDownRef.current = false;
    isDraggingRef.current = false;
    pressedCardKeyRef.current = "";
    if (event?.currentTarget?.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (nextCardKey) {
      setActiveCardKey((currentKey) =>
        currentKey === nextCardKey ? "" : nextCardKey
      );
    }

    if (isMobileView) {
      const step = getSliderStep();
      if (step > 0) {
        const rawIndex = Math.round(offsetRef.current / step);
        const snappedIndex = Math.min(
          cards.length * 2 - 1,
          Math.max(cards.length, rawIndex)
        );
        mobileIndexRef.current = snappedIndex;
        setIsTrackAnimating(true);
        applyOffset(snappedIndex * step, { wrap: false });
      }
    }
  };

  useEffect(() => {
    if (!isMobileView || !isTrackAnimating) {
      return undefined;
    }

    const step = getSliderStep();
    if (step <= 0) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      if (mobileIndexRef.current >= cards.length * 2) {
        resetMobileLoopPosition(mobileIndexRef.current - cards.length, step);
      } else if (mobileIndexRef.current < cards.length) {
        resetMobileLoopPosition(mobileIndexRef.current + cards.length, step);
      } else {
        return;
      }
    }, MOBILE_TRANSITION_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [getSliderStep, isMobileView, isTrackAnimating, resetMobileLoopPosition]);

  return (
    <section
      className={`${styles.container} ${isVisible ? styles.sectionVisible : ""}`}
      ref={sectionRef}
    >
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>Creative agency</span>
          </div>

          <h2 className={styles.title}>
            <span
              className={`${styles.revealLine} ${styles.headingLineDesktop}`}
              style={{ "--line-delay": "0s" }}
            >
              <span className={styles.revealLineInner}>Behind Every Big </span>
            </span>
            <span
              className={`${styles.revealLine} ${styles.headingLineDesktop}`}
              style={{ "--line-delay": "0.08s" }}
            >
              <span className={styles.revealLineInner}>Success Is a Powerful Process</span>
            </span>
            <span
              className={`${styles.revealLine} ${styles.headingLineMobile}`}
              style={{ "--line-delay": "0s" }}
            >
              <span className={styles.revealLineInner}>Behind Every Big</span>
            </span>
            <span
              className={`${styles.revealLine} ${styles.headingLineMobile}`}
              style={{ "--line-delay": "0.08s" }}
            >
              <span className={styles.revealLineInner}>Success Is a Powerful</span>
            </span>
            <span
              className={`${styles.revealLine} ${styles.headingLineMobile}`}
              style={{ "--line-delay": "0.16s" }}
            >
              <span className={styles.revealLineInner}>Process</span>
            </span>
          </h2>

          <p className={styles.copy}>
            <span className={styles.revealLine} style={{ "--line-delay": "0.16s" }}>
              <span className={styles.revealLineInner}>
               We Believe in Process, It’s a Way to Succeed.
              </span>
            </span>
          </p>
        </div>
      </div>

      <div className={styles.sliderSection}>
        <div className={styles.sliderContainer}>
          <button
            className={`${styles.navButton} ${styles.navButtonLeft}`}
            type="button"
            aria-label="Scroll cards left"
            onClick={() => handleSliderNav(-1)}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 6L9 12L15 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className={`${styles.navButton} ${styles.navButtonRight}`}
            type="button"
            aria-label="Scroll cards right"
            onClick={() => handleSliderNav(1)}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className={`${styles.cardAction} ${styles.cardActionOutside}`}
            type="button"
            aria-label="Start project"
          >
            <span className={styles.cardActionLabel}>Start project</span>
            <span className={styles.cardActionArrow} aria-hidden="true">
              <svg
                className={styles.cardActionIcon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M18 6H10M18 6V14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className={styles.cardActionTrack} aria-hidden="true">
              <span className={styles.cardActionDot} />
              <span className={styles.cardActionLine} />
            </span>
          </button>

          <div
            className={styles.sliderViewport}
            ref={sliderRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <div
              className={`${styles.sliderTrack} ${
                isTrackAnimating ? styles.sliderTrackAnimated : ""
              }`}
              ref={sliderTrackRef}
            >
              {loopedCards.map((card) => (
                <article
                  className={`${styles.card} ${
                    activeCardKey === card.loopKey ? styles.cardActive : ""
                  }`}
                  data-card-key={card.loopKey}
                  key={card.loopKey}
                >
                  <div className={styles.cardImageWrapper}>
                    <div
                      className={`${styles.cardMedia} ${
                        activeCardKey === card.loopKey ? styles.cardMediaActive : ""
                      }`}
                      style={{
                        backgroundImage: `${card.overlay}, url(${card.image})`,
                      }}
                    />

                    <button
                      className={`${styles.cardToggle} ${
                        activeCardKey === card.loopKey ? styles.cardToggleActive : ""
                      }`}
                      type="button"
                      aria-label={
                        activeCardKey === card.loopKey
                          ? `Close ${card.title} details`
                          : `Open ${card.title} details`
                      }
                    >
                      <span className={`${styles.cardToggleLine} ${styles.cardToggleLine1}`} />
                      <span className={`${styles.cardToggleLine} ${styles.cardToggleLine2}`} />
                    </button>

                    <div
                      className={`${styles.cardOverlay} ${
                        activeCardKey === card.loopKey ? styles.cardOverlayVisible : ""
                      }`}
                    />

                    <div
                      className={`${styles.cardContent} ${
                        activeCardKey === card.loopKey ? styles.cardContentVisible : ""
                      }`}
                    >
                      <h3 className={styles.cardTitle}>{card.title}</h3>
                      <p className={styles.cardSubtitle}>{card.subtitle}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <p className={styles.sectionNote}>
            <span className={styles.revealLine} style={{ "--line-delay": "0.18s" }}>
              <span className={styles.revealLineInner}>
                Over 190 design projects created for top brands including
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default CreativeAgency;
