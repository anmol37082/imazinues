import Image from "next/image";
import styles from "./ContactFaqSection.module.css";

const faqs = [
  {
    question: "How can I benefit from your startup?",
    answer:
      "We help early-stage brands define a sharper identity, build trust, and launch with a practical digital plan that supports growth from day one.",
  },
  {
    question: "How can I get in touch with customer support?",
    answer:
      "Use the form above, call the number listed here, or email the support address. We usually reply within one working day.",
    open: true,
  },
  {
    question: "How do you ensure data security and privacy?",
    answer:
      "Your enquiry details are handled carefully and used only for responding to your message and project-related communication.",
  },
  {
    question: "How do I get started with your offerings?",
    answer:
      "Share a brief about your brand, goals, and timeline. We will review it and suggest the most suitable next step.",
  },
];

function ContactFaqSection() {
  return (
    <section className={styles.faqSection}>
      <div className={styles.section}>
        <div className={styles.faqIntro}>
          <h2 className={styles.faqTitle}>
            Your Common Queries Answered{" "}
            <span className={styles.faqTitleAccent}>with Additional FAQs</span>
          </h2>
          <p className={styles.faqSubtext}>
            A quick overview of how we work, what to expect, and how to begin
            your next project with us.
          </p>
        </div>

        <div className={styles.faqGrid}>
          <div className={styles.accordion}>
            {faqs.map((item) => (
              <details className={styles.faqItem} key={item.question} open={item.open}>
                <summary className={styles.summary}>
                  <span>{item.question}</span>
                  <span className={styles.summaryIcon} aria-hidden="true" />
                </summary>
                <p className={styles.answer}>{item.answer}</p>
              </details>
            ))}
          </div>

          <div className={styles.visualCard}>
            <div className={styles.portraitWrap}>
              <Image
                className={styles.portrait}
                src="/contact/vishantkumar.webp"
                alt="Customer support representative"
                fill
                sizes="(max-width: 1024px) 100vw, 54vw"
              />
            </div>
            <div className={styles.floatingCard}>
              <p className={styles.floatingCardLabel}>Fast response, clear guidance</p>
              <p className={styles.floatingCardText}>
                We keep conversations practical and focused so you get the
                information you need without extra back and forth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFaqSection;
