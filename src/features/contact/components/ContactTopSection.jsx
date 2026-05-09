import styles from "./ContactTopSection.module.css";

const contactDetails = [
  {
    title: "Address",
    value: "JL. Raya Kuta No. 121",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <path
          d="M12 21s6-5.2 6-10.5A6 6 0 1 0 6 10.5C6 15.8 12 21 12 21Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="10.5" r="2.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Mobile",
    value: "+(021) 789 345",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <rect
          x="6.5"
          y="2.5"
          width="11"
          height="19"
          rx="2.4"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M10 6.5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="18" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Availability",
    value: "Daily 09 am - 05 pm",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 7.5v5l3 2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Email",
    value: "admin@support.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <rect
          x="3.5"
          y="5"
          width="17"
          height="14"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="m5.5 7.5 6.5 5 6.5-5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/imazineus/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.2-1.5 1.6-1.5h1.7V4.6c-.3 0-1.4-.1-2.7-.1-2.7 0-4.6 1.7-4.6 4.8v1.6H7v3.1h2.5V22h4z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M4 4l6.9 9.1L3.6 20h2.5l5.6-6.1L16.3 20H20l-7.2-9.5L19.8 4h-2.5l-5.2 5.6L8 4H4z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/imazine-us",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M6.3 8.7H3.7V20h2.6V8.7ZM5 3.8A1.5 1.5 0 1 0 5 6.8a1.5 1.5 0 0 0 0-3ZM20 20h-2.6v-5.5c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V20H10V8.7h2.5v1.5h.1c.4-.9 1.5-1.9 3.2-1.9 3.4 0 4.2 2.2 4.2 5V20Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/imazineus/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <rect
          x="3.25"
          y="3.25"
          width="17.5"
          height="17.5"
          rx="5.25"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="3.9" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.35" cy="6.65" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
];

function ContactTopSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.section}>
        <div className={styles.intro}>
          <h1 className={styles.title}>
            <span className={styles.titleAccent}>Connect</span> with Our Team
          </h1>
          <p className={styles.subtitle}>
            Tell us what you need, and we will respond with a clear next step.
            From branding and content to websites and campaigns, we can help
            shape the right approach for your project.
          </p>
        </div>

        <div className={styles.grid}>
          <section
            className={`${styles.card} ${styles.formCard}`}
            aria-labelledby="contact-form-title"
          >
            <h2 className={styles.cardTitle} id="contact-form-title">
              Get in Touch with Us
            </h2>

            <form className={styles.form}>
              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.srOnly}>Your name</span>
                  <input className={styles.input} type="text" placeholder="Input your name" />
                </label>
                <label className={styles.field}>
                  <span className={styles.srOnly}>Your email</span>
                  <input className={styles.input} type="email" placeholder="Input your email" />
                </label>
              </div>

              <label className={styles.fieldFull}>
                <span className={styles.srOnly}>Subject</span>
                <input className={styles.input} type="text" placeholder="Subject" />
              </label>

              <label className={styles.fieldFull}>
                <span className={styles.srOnly}>Message</span>
                <textarea className={styles.textarea} placeholder="Submit your message / request" />
              </label>

              <button className={styles.button} type="submit">
                Send message
              </button>
            </form>
          </section>

          <section
            className={`${styles.card} ${styles.infoCard}`}
            aria-labelledby="contact-details-title"
          >
            <h2 className={styles.cardTitle} id="contact-details-title">
              Contact Details
            </h2>
            <p className={styles.infoText}>
              Reach us through the details below. We keep the process simple and
              responsive so you can quickly move from enquiry to action.
            </p>

            <div className={styles.contactGrid}>
              {contactDetails.map((item) => (
                <article className={styles.contactItem} key={item.title}>
                  <div className={styles.iconBox}>{item.icon}</div>
                  <div>
                    <h3 className={styles.contactLabel}>{item.title}</h3>
                    <p className={styles.contactValue}>{item.value}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.socialRow}>
              <div className={styles.socialIcons}>
                {socials.map((item) => (
                  <a
                    className={styles.socialLink}
                    href={item.href}
                    key={item.label}
                    rel="noreferrer"
                    target="_blank"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default ContactTopSection;
