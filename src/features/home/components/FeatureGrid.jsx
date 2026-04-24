"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './FeatureGrid.module.css';

const cardData = [
  {
    id: 1,
    title: 'Social Media Marketing (SMM)',
    desc: 'Grow your brand on Facebook, Instagram & LinkedIn with creative content, targeted ads and strong community engagement.',
    img: '/services/1stimage.png',
  },
  {
    id: 2,
    title: 'Search Engine Optimization (SEO)',
    desc: 'Improve Google rankings with strategic keywords, on-page optimization, and technical SEO that drives organic traffic.',
    img: '/services/2ndimage.png',
  },
  {
    id: 3,
    title: 'Google Ads & Campaigns',
    desc: 'Generate instant leads with high-performance Google Ads campaigns optimized for clicks, conversions, and better ROI.',
    img: '/services/3rdimage.png',
  },
  {
    id: 4,
    title: 'Content Creation',
    desc: 'Tell your brand story through engaging blogs, videos, and creative visuals designed to inform, inspire and convert.',
    img: '/services/4rthimage.png',
  },
  {
    id: 5,
    title: 'Website Revamp & Development',
    desc: 'Build modern, fast, and responsive websites that enhance user experience and strengthen your brand identity.',
    img: '/services/5thimage.png',
  },
  {
    id: 6,
    title: 'Brand Guidelines',
    desc: 'Create clear brand guidelines that keep your logo, colors, fonts, and messaging consistent everywhere.',
    img: '/services/6thimage.png',
  },
  {
    id: 7,
    title: 'Print Design',
    desc: 'Design impactful brochures, flyers, and print materials that communicate your brand message professionally.',
    img: '/services/3rdimage.png',
  },
  {
    id: 8,
    title: 'Product Photography & Videography',
    desc: 'Showcase your products with professional photography and cinematic videos that highlight quality and attract buyers.',
    img: '/services/4rthimage.png',
  },
];

const leftColumnCards = cardData.filter((_, index) => index % 2 === 0);
const rightColumnCards = cardData.filter((_, index) => index % 2 === 1);

export default function FeatureGrid() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
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
        <h2 className={styles.title}>
          <span className={styles.revealLine} style={{ '--line-delay': '0.06s' }}>
            <span className={styles.revealLineInner}>
              Our services deliver valuable results.
            </span>
          </span>
        </h2>
        <p className={styles.subtitle}>
          <span className={styles.revealLine} style={{ '--line-delay': '0.12s' }}>
            <span className={styles.revealLineInner}>
              Where strategy, creativity, and technology create success.
            </span>
          </span>
        </p>
      </div>

      <div className={styles.gridDesktop}>
        <div className={styles.column}>
          {leftColumnCards.map(renderCard)}
        </div>

        <div className={styles.column}>
          {rightColumnCards.map(renderCard)}
        </div>
      </div>

      <div className={styles.gridMobile}>
        {cardData.map(renderCard)}
      </div>
    </section>
  );
}
