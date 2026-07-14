"use client";

import { useState } from "react";
import styles from "./BlogFAQ.module.css";

// Default FAQs for homepage (when no props passed)
const defaultFaqs = [
  {
    question: "What services does your digital marketing agency offer?",
    answer:
      "We provide SEO, Google Ads, Meta Ads, Social Media Marketing, Website Development, Branding, and Content Marketing services.",
  },
  {
    question: "How can SEO help my business?",
    answer:
      "SEO improves your website's visibility on search engines, helping you attract more organic traffic and qualified leads.",
  },
  {
    question: "How long does it take to see SEO results?",
    answer:
      "SEO is a long-term strategy. Most businesses start seeing noticeable improvements within 3–6 months.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes. We work with startups, local businesses, and established companies to create customized marketing strategies.",
  },
];

export default function BlogFAQ({ 
  faqs = defaultFaqs,           // Default FAQs for homepage
  title = "Frequently Asked Questions",  // Customizable title
  subtitle = "Find answers to some of the most common questions about digital marketing and our services.",  // Customizable subtitle
  badge = "FAQs",               // Customizable badge text
  showBadge = true,             // Toggle badge visibility
  firstOpen = true,             // Whether first item should be open by default
}) {
  // Set initial open index: 0 if firstOpen is true, else -1 (all closed)
  const [openIndex, setOpenIndex] = useState(firstOpen ? 0 : -1);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        {/* Heading Section */}
        <div className={styles.heading}>
          {showBadge && <span className={styles.badge}>{badge}</span>}
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>

        {/* FAQ List */}
        <div className={styles.list}>
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`${styles.item} ${openIndex === index ? styles.itemOpen : ""}`}
              onClick={() => toggle(index)}
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
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}