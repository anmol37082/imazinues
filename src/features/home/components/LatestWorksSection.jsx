"use client";

import Image from "next/image";
import styles from "./LatestWorksSection.module.css";

const workCards = [
  {
    id: 1,
    title: "Mass & Measure",
    timeline: "4 weeks",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Waterline",
    timeline: "3 weeks",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Luma Studio",
    timeline: "5 weeks",
    img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "North & Co.",
    timeline: "2 weeks",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Brio Lab",
    timeline: "6 weeks",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Forma",
    timeline: "4 weeks",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
];

const teamMembers = ["AK", "RM", "SK"];

function WorkCard({ title, timeline, img }) {
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
              <span className={styles.pill}>Works 2025</span>
              <h2 className={styles.sectionTitle}>Fresh From Our Studio</h2>
              <p className={styles.sectionCopy}>
                New ideas crafted with passion,
                <br />
                precision, and powerful results.
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
                  <div className={styles.teamCount}>4 members</div>
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
