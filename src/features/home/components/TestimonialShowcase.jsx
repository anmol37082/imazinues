"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./TestimonialShowcase.module.css";

const AUTOPLAY_DELAY = 4000;

const testimonials = [
  {
    id: 1,
    quote:
      "I’m really happy with the work that Imazine Us has done for my brand. Their team has handled many successful campaigns for us. I have been working with them for the past 3 years, and the journey is still continuing. They truly understand our brand and our customers’ needs, and always deliver creative and professional work. I highly recommend them for social media management, SEO, product photoshoots, and short video creation.",
    name: "Mr. Anil Singh Thakur",
    role: "Founder, Kiner Kailash Jewellers",
    initials: "AT",
    image: "/review/anilsinghthakur.webp",
  },
  {
    id: 2,
    quote:
      "From logo creation and complete profile setup to website development, product photoshoots, video shoots, and running multiple successful campaigns, the team at Imazine Us has played a key role in building and strengthening our brand. Their creativity, professionalism, and clear understanding of brand needs helped us present our jewellery business more powerfully and professionally. Working with them has been a smooth and valuable experience, and I truly appreciate the dedication and effort their team puts into every project.",
    name: "Mr. Bhadur Singh",
    role: "Managing Director, Modern Lifestyle Jewellery",
    initials: "BS",
    image: "/review/bahadursingh.webp",
  },
  {
    id: 3,
    quote:
      "Choosing Imazine Us for our social media management and ad campaigns has been a smart decision for Aarti Jewellers. Their team creates simple, creative, and eye-catching content that truly connects with our audience. The ad campaigns are well-planned and result-focused, helping our brand grow stronger online every day.",
    name: "Mr. Rajat Singh",
    role: "Managing Director, Aarti Jewellers",
    initials: "RS",
    image: "/review/rajatsinghthakur.webp",
  },
  {
    id: 4,
    quote:
      "Building Glamour & Radiance into a strong and recognizable brand became much easier with the support of Imazine Us. Their team worked closely with us on every important aspect, from creating our brand logo and detailed brand guidelines to designing our e-commerce website, product packaging, and professional product shoots. They also managed our complete social media presence and advertising campaigns, helping us present the brand beautifully and reach the right audience online. What I appreciate most is their ability to combine creativity with strategy, ensuring that every element of our brand looks premium and communicates our vision clearly.",
    name: "Mrs. Neha Bhatia",
    role: "Founder, Glamour and Radiance",
    initials: "NB",
    image: "/review/neha.webp",
  },
  {
    id: 5,
    quote:
      "Partnering with Imazine Us for our digital growth has been a great decision for Vetraj Pet Hospital. From handling our social media management to planning and running effective ad campaigns, organizing professional shoots, and even managing our podcast content, their team has supported us at every step. They understand how to communicate our services with clarity and care, helping us connect better with pet owners. Their strategic approach and creative execution have truly added value to our brand.",
    name: "Mr. Mohit Saini",
    role: "Founder, Vetraj Pet Hospital",
    initials: "MS",
    image: "/review/mohitsaini.webp",
  },
  {
    id: 6,
    quote:
      "For Savik Academy, building a strong and professional brand presence became possible with the support of Imazine Us. Their team helped us with brand guidelines, website development, and complete social media management, ensuring our academy is presented clearly and professionally online. They also managed ad campaigns, lead generation, and sales management, which helped us connect with the right audience and grow steadily. Their strategic thinking and consistent support have truly added value to our brand.",
    name: "Mr. Kapil Saini",
    role: "Founder, Savik Academy",
    initials: "KS",
    image: "/review/kapilsaini.webp",
  },
  {
    id: 7,
    quote:
      "Working with Imazine Us for our social media management has been a great experience for our brand. Their team understands how to present jewellery creatively and engagingly, helping us connect better with our audience online. From planning content to maintaining a strong and consistent presence on social media, they have handled everything professionally and with great attention to detail. Their creative approach has helped our brand stand out and grow digitally.",
    name: "Mrs. Binney Kaur",
    role: "Founder, Binny’s Nail Bar",
    initials: "BK",
    image: "/review/binnykour.webp",
  },
  {
    id: 8,
    quote:
      "For Farmers Pride India, working with Imazine Us has been a great experience. Their team handled our brand product video shoot and professional photoshoot with great creativity and attention to detail. They perfectly captured the quality and essence of our products, helping us present our brand in a more impactful and professional way. The visuals they created have added real value to how our brand connects with customers.",
    name: "Mr. Sundeep Sharma",
    role: "Co-Founder, Farmers Pride India",
    initials: "SS",
    image: "/review/Mr.SundeepSharma.webp",
  },
  {
    id: 9,
    quote:
      "Collaborating with Imazine Us for our brand video shoot was a great decision for The Divora. Their team understood our vision clearly and transformed it into a powerful visual story that reflects our brand identity. From concept planning to final execution, everything was handled with creativity and professionalism. The final video not only enhanced our brand image but also helped us connect better with our audience.",
    name: "Mr. Dupesh",
    role: "Founder, The Divora",
    initials: "MD",
    image: "/review/mr.dupesh.webp",
  },
  {
    id: 10,
    quote:
      "For Physics Wallah Panchkula, timely execution and quality branding were our top priorities, and Imazine Us delivered exactly that. From umbrella printing and auto hood branding to pole kiosks and other outdoor branding solutions, their team managed every task with precision and professionalism. What stood out the most was their commitment to on-time delivery without compromising on quality. Their reliable service and smooth coordination made the entire branding process efficient and hassle-free.",
    name: "Mr. Ashish Shaghwal",
    role: "Business Head, Physics Wallah Panchkula",
    initials: "AS",
    image: "/review/ashis.webp",
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
                    <span className={styles.authorAvatar}>
                      <Image
                        src={item.image}
                        alt={`${item.name} profile photo`}
                        width={64}
                        height={64}
                        className={styles.authorAvatarImage}
                      />
                    </span>
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
