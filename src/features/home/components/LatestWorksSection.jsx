"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./LatestWorksSection.module.css";

const workCards = [
  {
    id: 1,
    title: "Kiner Kailash Jewellers",
    timeline: "2 weeks",
    href: "/works/kiner-kailash-jewellers",
    img: "/kinerkailash/KKJ_1.webp",
  },
  {
    id: 2,
    title: "Modern Lifestyle Jewellers",
    timeline: "3 weeks",
    href: "/works/modern-lifestyle-jewellers",
    img: "/modernlifestyle/banner2.webp",
  },
  {
    id: 3,
    title: "Glamour and Radiance",
    timeline: "5 weeks",
    href: "/works/glamour-and-radiance",
    img: "/glamourandradiance/G&R-021.webp",
  },
  {
    id: 4,
    title: "Vetraj Pet Hospital",
    timeline: "2 weeks",
    href: "/works/vetraj-pet-hospital",
    img: "/vetrajpethospital/WorkCaseStudyShowcase1.webp",
  },
  {
    id: 5,
    title: "Pandit Ji De Pranthe",
    timeline: "6 weeks",
    href: "/works/pandit-ji-de-pranthe",
    img: "/panditjidepranthe/WorkCaseStudyShowcase1.webp",
  },
  {
    id: 6,
    title: "Binny's Nail Bar",
    timeline: "4 weeks",
    href: "/works/binnys-nail-bar",
    img: "/binnynail,sbar/WorkCaseStudyShowcase1.webp",
  },
];

const teamMembers = ["AK", "RM", "SK"];

function WorkCard({ title, timeline, img, href }) {
  const hoverBadge = (
    <span className={styles.workHoverBadge} aria-hidden="true">
      <svg viewBox="0 0 24 24" className={styles.workHoverIcon}>
        <path
          d="M8 16L16 8M9 8h7v7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );

  return (
    <article className={styles.workCard}>
      <div className={styles.workArt}>
        <Image
          src={img}
          alt={title}
          fill
          className={styles.workImage}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {href ? (
          <Link
            href={href}
            className={styles.workHoverLink}
            aria-label={`Open ${title} page`}
          >
            <span className={styles.workHoverBadge} aria-hidden="true">
              <svg viewBox="0 0 24 24" className={styles.workHoverIcon}>
                <path
                  d="M8 16L16 8M9 8h7v7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        ) : (
          hoverBadge
        )}
      </div>
      <div className={styles.workMeta}>
        <span className={styles.workTitle}>{title}</span>
        <span className={styles.workTimeline}>{timeline}</span>
      </div>
    </article>
  );
}

export default function LatestWorksSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <section className={styles.worksSection}>
          <div className={styles.worksIntro}>
            <div>
              <span className={styles.pill}>Works 2026</span>
              <h2 className={styles.sectionTitle}>Fresh From Our Studio</h2>
              <p className={styles.sectionCopy}>
                New ideas crafted with passion, precision,
                <br />
                and powerful results.
              </p>
            </div>

            <div className={styles.metaRow}>
              <div className={styles.teamRow}>
                <div className={styles.teamAvatars} aria-hidden="true">
                  {teamMembers.map((member) => (
                    <span key={member} className={styles.teamAvatar}>
                      {member}
                    </span>
                  ))}
                </div>

                <div className={styles.teamInfo}>
                  <div className={styles.teamLabel}>Core team</div>
                  <div className={styles.teamCount}>10 members</div>
                </div>
              </div>

              <div className={styles.worksAside}>
                <a href="#contact" className={styles.worksLink}>
                  See all works
                </a>
              </div>
            </div>
          </div>

          <div className={styles.workGrid}>
            {workCards.map((card) => (
              <WorkCard key={card.id} {...card} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
