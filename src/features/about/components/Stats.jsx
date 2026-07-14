"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Stats.module.css";

const statsData = [
  { value: 180, suffix: "+", label: "Happy Clients", prefix: "", variant: "dark" },
  { value: 12, suffix: "Cr+", label: "Revenue Generated", prefix: "Rs.", variant: "light" },
  { value: 340, suffix: "%", label: "Average ROI", prefix: "", variant: "light" },
  { value: 6, suffix: "", label: "Years in Business", prefix: "", variant: "dark" },
];

function Counter({ target, prefix, suffix, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span>
      {prefix}{count}<span className={styles.accent}>{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.statsSection} ref={sectionRef}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.secHeader}>
          <span className={styles.secLabel}>Our Impact</span>
          <h2>Numbers That Speak for <br/> Themselves</h2>
          <p>More than 180 businesses trust us with their digital growth.</p>
        </div>

        {/* Stats Row */}
        <div className={styles.statsRow}>
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`${styles.statCard} ${stat.variant === "dark" ? styles.dark : styles.light}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3>
                <Counter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </h3>
              <div className={styles.statLine}></div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}