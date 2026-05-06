"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './Services.module.css';

export const serviceCardData = [
  {
    id: 1,
    title: 'Social Media Marketing (SMM)',
    desc: (<>
    Grow your brand on Facebook, <br className={styles.mobileDescBreak} /> Instagram &   LinkedIn with creative content,<br className={styles.mobileDescBreak} /> targeted ads and  strong community  <br className={styles.mobileDescBreak} /> engagement.
    </>
    ), 
    img: '/services/ICON-CARDS-1.webp',
  },
  {
    id: 2,
    title: 'Search Engine Optimization (SEO)',
    desc: (
      <>
        Improve Google rankings
        <br className={styles.mobileDescBreak} />
        with strategic keywords, on-page optimization, and technical SEO that drives organic traffic.
      </>
    ),
    img: '/services/ICON-CARDS-2.webp',
  },
  {
    id: 3,
    title: 'Google Ads & Campaigns',
    desc: (
      <>
        Generate instant leads
        <br className={styles.mobileDescBreak} />
        with high-performance Google Ads campaigns optimized for clicks, conversions, and <br className={styles.mobileDescBreak} /> better ROI.
      </>
    ),
    img: '/services/ICON-CARDS-3.webp',
  },
  {
    id: 4,
    title: 'Content Creation',
    desc: (
      <>
        Tell your brand story
        <br className={styles.mobileDescBreak} />
        through engaging blogs, videos, and creative <br className={styles.mobileDescBreak} /> visuals designed
        and to inform, inspire <br className={styles.mobileDescBreak} /> and convert.
      </>
    ),
    img: '/services/ICON-CARDS-4.webp',
  },
  {
    id: 5,
    title: 'Website Revamp & Development',
    desc: (
      <>
        Build modern
        <br className={styles.mobileDescBreak} />
        fast and responsive websites that enhance user experience and strengthen your brand
        <br className={styles.mobileDescBreak} />
        identity.
      </>
    ),
    img: '/services/ICON-CARDS-5.webp',
  },
  {
    id: 6,
    title: 'Brand Guidelines',
    desc: (
      <>
        Create clear brand
        <br className={styles.mobileDescBreak} />
        guidelines that keep your logo, colors, fonts, and messaging consistent everywhere.
      </>
    ),
    img: '/services/ICON-CARDS-6.webp',
  },
  {
    id: 7,
    title: 'Print Design',
    desc: (
      <>
        Design
        <br className={styles.mobileDescBreak} /> impactful
        
        brochures, flyers, and print <br className={styles.mobileDescBreak} /> materials that communicate
        
        your brand <br className={styles.mobileDescBreak} /> message  professionally.
      </>
    ),
    img: '/services/ICON-CARDS-7.webp',
  },
  {
    id: 8,
    title: 'Product Photography & Videography',
    desc: (
      <>
        Showcase your product
        <br className={styles.mobileDescBreak} />
        with professional photography and cinematic videos that highlight quality and   <br className={styles.mobileDescBreak} /> attract buyers.
      </>
    ), 
    img: '/services/ICON-CARDS-8.webp',
  },
];

const leftColumnCards = serviceCardData.filter((_, index) => index % 2 === 0);
const rightColumnCards = serviceCardData.filter((_, index) => index % 2 === 1);

export default function Services() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const isMobileView = window.innerWidth <= 768;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: isMobileView ? 0.04 : 0.12,
        rootMargin: isMobileView ? '0px 0px 8% 0px' : '0px 0px -6% 0px',
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const renderCard = (card) => (
    <article
      key={card.id}
      className={`${styles.card} ${styles[`card${card.id}`]}`}
      style={{ '--card-delay': `${0.18 + (card.id - 1) * 0.12}s` }}
    >
      <div className={styles.imageWrap}>
        <div className={styles.imageStage}>
          <Image
            src={card.img}
            alt={card.title}
            width={220}
            height={170}
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <p className={styles.cardDesc}>{card.desc}</p>
      </div>
    </article>
  );

  return (
    <section
      className={`${styles.wrapper} ${isVisible ? styles.sectionVisible : ''}`}
      ref={sectionRef}
    >
      <div className={styles.intro}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          <span>Services</span>
        </div>
        <h2 className={styles.title}>
          <span className={styles.revealLine} style={{ '--line-delay': '0.06s' }}>
            <span className={styles.revealLineInner}>
              <span className={styles.mobileTitleNoWrap}>Our services</span>
              <br className={styles.mobileTitleBreak} />
              deliver valuable results.
            </span>
          </span>
        </h2>
        <p className={styles.subtitle}>
          <span className={styles.revealLine} style={{ '--line-delay': '0.12s' }}>
            <span className={styles.revealLineInner}>
              Where strategy, creativity, and technology
              <span className={styles.mobileSubtitleBreak}> create success.</span>
            </span>
          </span>
        </p>
      </div>

      <div className={styles.gridDesktop}>
        <div className={styles.column}>
          {leftColumnCards.map((card) => renderCard(card))}
        </div>

        <div className={styles.column}>
          {rightColumnCards.map((card) => renderCard(card))}
        </div>
      </div>

      <div className={styles.gridMobile}>
        {serviceCardData.map((card) => renderCard(card))}
      </div>
    </section>
  );
}
