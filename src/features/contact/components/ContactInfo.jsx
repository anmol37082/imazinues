"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ContactInfo.module.css";

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
      {/* Noise texture overlay */}
      <div className={styles.noiseOverlay}></div>

      <div className={styles.container}>
        {/* LEFT - Image with Overlay Info */}
        <div className={styles.imageWrapper}>
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=85"
            alt="Premium architectural interior"
            width={700}
            height={800}
            className={styles.contactImage}
            priority
          />

          <div className={styles.imageOverlay}>
            <div className={styles.overlayContent}>
              <span className={styles.overlayKicker}>Get in Touch</span>

              <div className={styles.overlayItem}>
                <div className={styles.overlayLabel}>Email</div>
                <Link
                  href="mailto:hello@imazine.com"
                  className={styles.overlayValue}
                >
                  hello@imazine.com
                </Link>
              </div>

              <div className={styles.overlayDivider}></div>

              <div className={styles.overlayItem}>
                <div className={styles.overlayLabel}>Phone</div>
                <Link href="tel:+919876543210" className={styles.overlayValue}>
                  +91 98765 43210
                </Link>
              </div>

              <div className={styles.overlayDivider}></div>

              <div className={styles.overlayItem}>
                <div className={styles.overlayLabel}>Location</div>
                <div className={styles.overlayValue}>Mumbai, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT - Form */}
        <div className={styles.formSection}>
          <div className={styles.formHeader}>
            <span className={styles.secLabel}>Contact Us</span>
            <h2>Let&apos;s Talk</h2>
            <p>
              Have a project in mind? Fill out the form and we&apos;ll get back
              to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <div
                className={`${styles.formGroup} ${focusedField === "name" ? styles.focused : ""}`}
              >
                <label htmlFor="name">
                  <span className={styles.labelNumber}>01</span>
                  Name
                </label>
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
                <div className={styles.inputLine}></div>
              </div>

              <div
                className={`${styles.formGroup} ${focusedField === "email" ? styles.focused : ""}`}
              >
                <label htmlFor="email">
                  <span className={styles.labelNumber}>02</span>
                  Email
                </label>
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
                <div className={styles.inputLine}></div>
              </div>
            </div>

            <div
              className={`${styles.formGroup} ${focusedField === "subject" ? styles.focused : ""}`}
            >
              <label htmlFor="subject">
                <span className={styles.labelNumber}>03</span>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="How can we help?"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocusedField("subject")}
                onBlur={() => setFocusedField(null)}
                required
              />
              <div className={styles.inputLine}></div>
            </div>

            <div
              className={`${styles.formGroup} ${focusedField === "message" ? styles.focused : ""} ${styles.messageGroup}`}
            >
              <label htmlFor="message">
                <span className={styles.labelNumber}>04</span>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                required
              ></textarea>
              <div className={styles.inputLine}></div>
            </div>

            <div className={styles.formFooter}>
              <button
                type="submit"
                className={`${styles.btnSubmit} ${isSubmitting ? styles.submitting : ""} ${submitted ? styles.submitted : ""}`}
                disabled={isSubmitting}
              >
                <span className={styles.btnText}>
                  {isSubmitting
                    ? "Sending..."
                    : submitted
                      ? "Message Sent!"
                      : "Send Message"}
                </span>
                <span className={styles.btnArrow}>
                  {isSubmitting ? (
                    <svg
                      className={styles.spinner}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        strokeDasharray="60"
                        strokeDashoffset="20"
                      />
                    </svg>
                  ) : submitted ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  )}
                </span>
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