"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./ContactInfo.module.css";

const contactDetails = [
  { label: "Email", value: "hello@imazine.com", href: "mailto:hello@imazine.com" },
  { label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { label: "Location", value: "Mumbai, India" },
];

export default function ContactInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log(formData);
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className={styles.contactInfo}>
      <div className={styles.container}>
        <div className={styles.infoPanel}>
          <span className={styles.kicker}>Contact Us</span>
          <h2>Let&apos;s talk about your next project.</h2>
          <p>
            Tell us what you need, and we&apos;ll get back with a clear response.
            We work on websites, redesigns, branding, SEO, and digital marketing.
          </p>

          <div className={styles.detailList}>
            {contactDetails.map((item) => (
              <div key={item.label} className={styles.detailCard}>
                <span className={styles.detailLabel}>{item.label}</span>
                {item.href ? (
                  <Link href={item.href} className={styles.detailValue}>
                    {item.value}
                  </Link>
                ) : (
                  <span className={styles.detailValue}>{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formPanel}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <div
                className={`${styles.formGroup} ${focusedField === "name" ? styles.focused : ""}`}
              >
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  autoComplete="name"
                />
              </div>

              <div
                className={`${styles.formGroup} ${focusedField === "email" ? styles.focused : ""}`}
              >
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div
              className={`${styles.formGroup} ${focusedField === "subject" ? styles.focused : ""}`}
            >
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Website design, SEO, or other"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocusedField("subject")}
                onBlur={() => setFocusedField(null)}
                required
              />
            </div>

            <div
              className={`${styles.formGroup} ${styles.messageGroup} ${focusedField === "message" ? styles.focused : ""}`}
            >
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                required
              />
            </div>

            <div className={styles.formFooter}>
              <button
                type="submit"
                className={`${styles.btnSubmit} ${isSubmitting ? styles.submitting : ""} ${submitted ? styles.submitted : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
              </button>
              <p className={styles.privacyNote}>
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
