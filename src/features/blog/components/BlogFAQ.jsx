"use client";

import { useState } from "react";
import styles from "./BlogFAQ.module.css";

const defaultFaqs = [
  {
    question: "Do your blogs include practical marketing tips?",
    answer:
      "Yes. Every article includes actionable tips, best practices, and real-world strategies that readers can apply to their businesses.",
  },
  {
    question: "Who writes the blogs at Imazine Us?",
    answer:
      "Our blogs are created by experienced digital marketers, SEO specialists, content strategists, designers, and industry professionals.",
  },
  {
    question: "Do you cover the latest digital marketing trends?",
    answer:
      "Yes. We regularly publish blogs covering the latest Google updates, AI tools, social media trends, SEO techniques, and marketing innovations.",
  },
  {
    question: "Are your blogs suitable for beginners?",
    answer:
      "Absolutely. Our blogs are written for beginners, business owners, entrepreneurs, students, and marketing professionals looking to improve their digital knowledge.",
  },
  {
    question: "What kind of blogs does Imazine Us publish?",
    answer:
      "We publish informative blogs on digital marketing, SEO, website development, branding, social media marketing, graphic design, content marketing, AI tools, business growth strategies, and the latest industry trends.",
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
