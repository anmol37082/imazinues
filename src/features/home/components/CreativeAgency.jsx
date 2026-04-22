"use client";

import { useRef, useState } from "react";
import styles from "./CreativeAgency.module.css";

const cards = [
  {
    id: "brand-strategy",
    title: "Covers",
    subtitle: "We delivered over 250 editorial designs this year",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    overlay:
      "linear-gradient(180deg, rgba(15,18,24,0.08) 0%, rgba(15,18,24,0.18) 35%, rgba(15,18,24,0.82) 100%)",
  },
  {
    id: "content-systems",
    title: "Campaigns",
    subtitle: "Social launches and motion-led stories built to hold attention",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    overlay:
      "linear-gradient(180deg, rgba(20,14,10,0.1) 0%, rgba(20,14,10,0.24) 34%, rgba(20,14,10,0.84) 100%)",
  },
  {
    id: "digital-experiences",
    title: "Portraits",
    subtitle: "Identity-forward visual systems for modern editorial and brand work",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80",
    overlay:
      "linear-gradient(180deg, rgba(18,20,24,0.08) 0%, rgba(18,20,24,0.22) 34%, rgba(18,20,24,0.84) 100%)",
  },
  {
    id: "foam-serum",
    title: "Foam Serum",
    subtitle: "Bubbly product visuals crafted for hero launches and ad stories.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    overlay:
      "linear-gradient(180deg, rgba(17,20,26,0.08) 0%, rgba(17,20,26,0.18) 35%, rgba(17,20,26,0.82) 100%)",
  },
  {
    id: "editorial-motion",
    title: "Editorial",
    subtitle: "Motion-led compositions built for reels, covers, and campaign edits.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
    overlay:
      "linear-gradient(180deg, rgba(26,18,16,0.08) 0%, rgba(26,18,16,0.18) 35%, rgba(26,18,16,0.82) 100%)",
  },
  {
    id: "brand-launches",
    title: "Launches",
    subtitle: "Product-first creative systems that stay sharp across every touchpoint.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    overlay:
      "linear-gradient(180deg, rgba(18,16,22,0.08) 0%, rgba(18,16,22,0.18) 35%, rgba(18,16,22,0.82) 100%)",
  },
  {
    id: "social-frames",
    title: "Social Frames",
    subtitle: "Fast-moving content packages tuned for paid and organic campaigns.",
    image:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1200&q=80",
    overlay:
      "linear-gradient(180deg, rgba(18,24,18,0.08) 0%, rgba(18,24,18,0.18) 35%, rgba(18,24,18,0.82) 100%)",
  },
  {
    id: "identity-systems",
    title: "Identity",
    subtitle: "Distinct art direction with typography and image systems that scale.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    overlay:
      "linear-gradient(180deg, rgba(20,18,24,0.08) 0%, rgba(20,18,24,0.18) 35%, rgba(20,18,24,0.82) 100%)",
  },
  {
    id: "digital-stories",
    title: "Stories",
    subtitle: "Narrative-led digital pieces designed for product pages and socials.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    overlay:
      "linear-gradient(180deg, rgba(14,18,24,0.08) 0%, rgba(14,18,24,0.18) 35%, rgba(14,18,24,0.82) 100%)",
  },
];

function CreativeAgency() {
  const [activeCardId, setActiveCardId] = useState("");
  const sliderRef = useRef(null);
  const activeCard = cards.find((card) => card.id === activeCardId) ?? cards[0];

  const handleSliderNav = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector(`.${styles.card}`);
    const gap = 12;
    const step = card ? card.clientWidth + gap : 292;

    slider.scrollBy({
      left: direction * step,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h2 className={styles.title}>
            Creative agency
            <br />
            focused on clarity
          </h2>
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
            aria-label={activeCardId ? "Close active project details" : "Open project details"}
            onClick={() =>
              setActiveCardId((currentId) => (currentId ? "" : activeCard.id))
            }
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

          <div className={styles.slider} ref={sliderRef}>
            {cards.map((card) => (
              <article
                className={`${styles.card} ${
                  activeCardId === card.id ? styles.cardActive : ""
                }`}
                key={card.id}
                onClick={() =>
                  setActiveCardId((currentId) =>
                    currentId === card.id ? "" : card.id
                  )
                }
              >
                <div className={styles.cardImageWrapper}>
                  <div
                    className={`${styles.cardMedia} ${
                      activeCardId === card.id ? styles.cardMediaActive : ""
                    }`}
                    style={{
                      backgroundImage: `${card.overlay}, url(${card.image})`,
                    }}
                  />

                  <button
                    className={`${styles.cardToggle} ${
                      activeCardId === card.id ? styles.cardToggleActive : ""
                    }`}
                    type="button"
                    aria-label={
                      activeCardId === card.id
                        ? `Close ${card.title} details`
                        : `Open ${card.title} details`
                    }
                    onClick={(event) => {
                      event.stopPropagation();
                      setActiveCardId((currentId) =>
                        currentId === card.id ? "" : card.id
                      );
                    }}
                  >
                    <span className={`${styles.cardToggleLine} ${styles.cardToggleLine1}`} />
                    <span className={`${styles.cardToggleLine} ${styles.cardToggleLine2}`} />
                  </button>

                  <div
                    className={`${styles.cardOverlay} ${
                      activeCardId === card.id ? styles.cardOverlayVisible : ""
                    }`}
                  />

                  <div
                    className={`${styles.cardContent} ${
                      activeCardId === card.id ? styles.cardContentVisible : ""
                    }`}
                  >
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardSubtitle}>{card.subtitle}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className={styles.sectionNote}>
            Over 190 design projects created for top brands including
          </p>
        </div>
      </div>
    </section>
  );
}

export default CreativeAgency;
