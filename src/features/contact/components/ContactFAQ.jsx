"use client";

import { useState } from "react";
import styles from "./ContactFAQ.module.css";

const defaultFaqs = [
  {
    question: "How quickly do you reply to contact requests?",
    answer:
      "We usually reply within 24 hours on business days. If your request is urgent, mention it in the message and we will prioritize it.",
  },
  {
    question: "What details should I include in the form?",
    answer:
      "Share your name, email, project goal, timeline, and any reference links or requirements you already have. More context helps us respond with a clearer plan.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes. We work with startups, growing businesses, and established brands across branding, design, social media, SEO, and web projects.",
  },
  {
    question: "Can I contact you for a custom quote?",
    answer:
      "Absolutely. Send us your project details and we will review the scope before sharing a custom estimate and next steps.",
  },
  {
    question: "Do you offer remote services?",
    answer:
      "Yes. Most of our work is handled remotely, so we can collaborate with clients across locations without any issue.",
  },
];

export default function ContactFAQ({
  faqs = defaultFaqs,
  title = "Contact FAQs",
  subtitle = "Quick answers about reaching out, timelines, and how we work with new clients.",
  badge = "FAQ",
  firstOpen = false,
}) {
  const [openIndex, setOpenIndex] = useState(firstOpen ? 0 : -1);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.badge}>{badge}</span>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className={styles.list}>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <button
                key={item.question}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
                onClick={() => toggle(index)}
                type="button"
              >
                <div className={styles.itemInner}>
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className={styles.itemContent}>
                    <h3>{item.question}</h3>
                    <p className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}>
                      {item.answer}
                    </p>
                  </div>
                  <span className={styles.icon}>{isOpen ? "-" : "+"}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
