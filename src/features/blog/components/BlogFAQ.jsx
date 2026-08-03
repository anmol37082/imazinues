"use client";

import { useState } from "react";
import styles from "./BlogFAQ.module.css";

const defaultFaqs = [
  {
    question: "What kind of web work do you cover?",
    answer:
      "We focus on website design, frontend development, responsive layouts, performance cleanup, and overall UI polish.",
  },
  {
    question: "How do you improve a website's design quality?",
    answer:
      "We refine spacing, typography, hierarchy, interaction states, and page rhythm so the site feels more intentional and easier to use.",
  },
  {
    question: "How do you make sites load faster?",
    answer:
      "We reduce unnecessary assets, improve image handling, clean up layout shifts, and tighten the code path where possible.",
  },
  {
    question: "Do you work with existing websites?",
    answer:
      "Yes. We can audit the current layout and update individual sections or rebuild the full landing page direction.",
  },
];

export default function BlogFAQ({
  faqs = defaultFaqs,
  title = "Web Design FAQs",
  subtitle =
    "Quick answers about design decisions, responsiveness, speed, and how we approach modern web pages.",
  badge = "FAQs",
  showBadge = true,
  firstOpen = true,
}) {
  const [openIndex, setOpenIndex] = useState(firstOpen ? 0 : -1);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.heading}>
          {showBadge && <span className={styles.badge}>{badge}</span>}
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>

        <div className={styles.list}>
          {faqs.map((item, index) => (
            <button
              key={index}
              className={`${styles.item} ${openIndex === index ? styles.itemOpen : ""}`}
              onClick={() => toggle(index)}
              type="button"
            >
              <div className={styles.itemInner}>
                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className={styles.itemContent}>
                  <h3>{item.question}</h3>
                  <p
                    className={`${styles.answer} ${openIndex === index ? styles.answerOpen : ""}`}
                  >
                    {item.answer}
                  </p>
                </div>
                <span className={styles.icon}>
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
