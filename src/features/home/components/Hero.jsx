"use client";

import { useEffect, useRef, useState } from "react";
import styles from './Hero.module.css';

const Hero = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const revealTimeoutRef = useRef(null);

  useEffect(() => {
    revealTimeoutRef.current = window.setTimeout(() => {
      setIsContentVisible(true);
      revealTimeoutRef.current = null;
    }, 1000);

    return () => {
      if (revealTimeoutRef.current) {
        window.clearTimeout(revealTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <video
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <div className={styles.overlay} />
        
        <div
          className={`${styles.content} ${
            isContentVisible ? styles.contentVisible : ""
          }`}
        >
          <p className={styles.tagline}>
            <span className={styles.revealLine} style={{ "--line-delay": "0.08s" }}>
              <span className={styles.revealLineInner}>
                Strategy, design, and marketing that drive real growth.
              </span>
            </span>
          </p>
          <h1 className={styles.headline}>
            <span className={styles.revealLine} style={{ "--line-delay": "0.16s" }}>
              <span className={styles.revealLineInner}>Creative agency</span>
            </span>
            <span className={styles.revealLine} style={{ "--line-delay": "0.24s" }}>
              <span className={styles.revealLineInner}>focused on clarity</span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
