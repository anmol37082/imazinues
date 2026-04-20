"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import casesData from "@/features/navigation/data/casesData";
import servicesData from "@/features/navigation/data/servicesData";
import styles from "./Header.module.css";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);
  const [isCompact, setIsCompact] = useState(false);
  const [hoveredLabel, setHoveredLabel] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState(null);

  const activeService =
    servicesData.find((service) => service.id === activeServiceId) || servicesData[0];

  useEffect(() => {
    if (!hoveredLabel) {
      return undefined;
    }

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+";
    const stepTime = 24;
    let frame = 0;
    const interval = window.setInterval(() => {
      const nextValue = hoveredLabel
        .split("")
        .map((char, index) => {
          if (char === " ") {
            return " ";
          }

          if (index < frame) {
            return hoveredLabel[index];
          }

          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      const event = new CustomEvent("nav-hover-scramble", {
        detail: { source: hoveredLabel, value: nextValue },
      });
      window.dispatchEvent(event);
      frame += 1;

      if (frame >= hoveredLabel.length) {
        window.clearInterval(interval);
        const doneEvent = new CustomEvent("nav-hover-scramble", {
          detail: { source: hoveredLabel, value: hoveredLabel },
        });
        window.dispatchEvent(doneEvent);
      }
    }, stepTime);

    return () => {
      window.clearInterval(interval);
      const resetEvent = new CustomEvent("nav-hover-scramble", {
        detail: { source: hoveredLabel, value: hoveredLabel },
      });
      window.dispatchEvent(resetEvent);
    };
  }, [hoveredLabel]);

  useEffect(() => {
    const handleScramble = (event) => {
      const { source, value } = event.detail;
      document
        .querySelectorAll(`[data-text="${source}"] .nav-animated-text`)
        .forEach((node) => {
          node.textContent = value;
        });
    };

    window.addEventListener("nav-hover-scramble", handleScramble);
    return () => {
      window.removeEventListener("nav-hover-scramble", handleScramble);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
        setActiveMobileSection(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const shouldLockScroll = Boolean(activeDropdown || isMobileMenuOpen);

    if (!shouldLockScroll) {
      return undefined;
    }

    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;
    const previousBodyTouchAction = body.style.touchAction;

    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";
    body.style.touchAction = "none";

    return () => {
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
      body.style.touchAction = previousBodyTouchAction;
    };
  }, [activeDropdown, isMobileMenuOpen]);

  const renderAnimatedLabel = (label) => (
    <span
      className={styles.navAnimated}
      data-text={label}
      onMouseEnter={() => setHoveredLabel(label)}
      onMouseLeave={() => setHoveredLabel("")}
    >
      <span className={styles.navAnimatedText}>{label}</span>
      <span className={styles.navAnimatedBase}>{label}</span>
    </span>
  );

  const renderPlainAnimatedLabel = (label) => (
    <span
      className={`${styles.navAnimated} ${styles.navAnimatedPlain}`}
      data-text={label}
      onMouseEnter={() => setHoveredLabel(label)}
      onMouseLeave={() => setHoveredLabel("")}
    >
      <span className={styles.navAnimatedText}>{label}</span>
      <span className={styles.navAnimatedBase}>{label}</span>
    </span>
  );

  const renderSplitNavLabel = (label) => (
    <span aria-label={label} className={styles.navSplitAlt}>
      {label.split("").map((char, index) => {
        const isEven = index % 2 === 1;
        const content = char === " " ? "\u00A0" : char;

        return (
          <span
            className={styles.navSplitCharWrap}
            key={`${label}-${index}`}
            style={{ "--split-index": index }}
          >
            {!isEven && <span className={styles.navSplitAltUp}>{content}</span>}
            <span className={styles.navSplitAltBase}>{content}</span>
            {isEven && <span className={styles.navSplitAltDown}>{content}</span>}
          </span>
        );
      })}
    </span>
  );

  return (
    <nav
      className={`${styles.navbar}${
        activeDropdown || isMobileMenuOpen ? ` ${styles.navbarBlurActive}` : ""
      }${
        isCompact ? ` ${styles.navbarCompact}` : ""
      }`}
      onMouseLeave={() => {
        if (!isMobileMenuOpen) {
          setActiveDropdown(null);
        }
      }}
    >
      <div className={styles.logo}>
        <Image
          src="/Imazine Us New Logo white.png"
          alt="Imazine Us"
          width={320}
          height={96}
          priority
          className={styles.logoImage}
        />
        <Image
          src="/Imazine Us New Logo.png"
          alt="Imazine Us"
          width={320}
          height={96}
          priority
          className={`${styles.logoImage} ${styles.logoImageAlt}`}
        />
      </div>

      <ul className={styles.menu}>
        <li
          className={styles.casesMenu}
          onMouseEnter={() => setActiveDropdown("cases")}
        >
          <span className={styles.casesTrigger}>{renderSplitNavLabel("CASES +")}</span>

          {activeDropdown === "cases" && (
            <div className={`${styles.dropdown} ${styles.casesDropdown}`}>
              <div className={styles.casesDropdownHeader}>
                <h3>Our latest case studies</h3>
                <button className={styles.casesLink} type="button">
                  {renderAnimatedLabel("EXPLORE ALL CASES")}
                  <svg
                    aria-hidden="true"
                    className={styles.btnIcon}
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="1">
                      <circle cx="10.2004" cy="7.1999" fill="currentColor" r="1.8" />
                      <circle cx="10.2004" cy="16.8" fill="currentColor" r="1.8" />
                      <circle cx="14.9992" cy="12.0002" fill="currentColor" r="1.8" />
                    </g>
                  </svg>
                </button>
              </div>

              <div className={styles.casesGrid}>
                {casesData.map((item) => (
                  <div className={styles.dropCard} key={item.id}>
                    <div className={styles.cardMedia}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 38vw, 420px"
                      />
                    </div>

                    <div className={styles.cardContent}>
                      <h4>{item.title}</h4>
                      <p className={styles.cardTag}>{item.category}</p>
                      <button className={styles.seeBtn} type="button">
                        {renderAnimatedLabel("SEE WORK")}
                        <svg
                          aria-hidden="true"
                          className={styles.btnIcon}
                          fill="none"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="1">
                            <circle cx="10.2004" cy="7.1999" fill="currentColor" r="1.8" />
                            <circle cx="10.2004" cy="16.8" fill="currentColor" r="1.8" />
                            <circle cx="14.9992" cy="12.0002" fill="currentColor" r="1.8" />
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </li>

        <li
          className={styles.servicesMenu}
          onMouseEnter={() => setActiveDropdown("services")}
        >
          <span className={styles.servicesTrigger}>{renderSplitNavLabel("SERVICES +")}</span>

          {activeDropdown === "services" && (
            <div className={`${styles.dropdown} ${styles.servicesDropdown}`}>
              <div className={styles.servicesList}>
                {servicesData.map((service) => (
                  <button
                    key={service.id}
                    className={`${styles.serviceItem}${
                      activeService.id === service.id ? ` ${styles.active}` : ""
                    }`}
                    onMouseEnter={() => setActiveServiceId(service.id)}
                    type="button"
                  >
                    {renderSplitNavLabel(service.title)}
                  </button>
                ))}

                <button className={styles.servicesCta} type="button">
                  EXPLORE ALL SERVICES
                </button>
              </div>

              <div className={styles.servicesCopy}>
                <p>{activeService.description}</p>
              </div>

              <div className={styles.servicesPreview}>
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  width={520}
                  height={420}
                  className={styles.servicesPreviewImage}
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
          )}
        </li>
        <li onMouseEnter={() => setActiveDropdown(null)}>
          {renderSplitNavLabel("ABOUT US")}
        </li>
        <li onMouseEnter={() => setActiveDropdown(null)}>
          {renderSplitNavLabel("CONTACT")}
        </li>
      </ul>

      <div className={styles.right}>
        <button className={styles.btn} type="button">
          {renderSplitNavLabel("BOOK A CALL")}
          <svg
            aria-hidden="true"
            className={styles.btnIcon}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="1">
              <circle cx="10.2004" cy="7.1999" fill="currentColor" r="1.8" />
              <circle cx="10.2004" cy="16.8" fill="currentColor" r="1.8" />
              <circle cx="14.9992" cy="12.0002" fill="currentColor" r="1.8" />
            </g>
          </svg>
        </button>
      </div>

      <button
        aria-expanded={isMobileMenuOpen}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        className={styles.mobileMenuToggle}
        onClick={() => {
          setIsMobileMenuOpen((prev) => !prev);
          setActiveDropdown(null);
          setActiveMobileSection(null);
        }}
        type="button"
      >
        <span className={styles.mobileMenuLine} />
        <span className={styles.mobileMenuLine} />
        <span className={styles.mobileMenuLine} />
      </button>

      {isMobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileNavList}>
            <button
              aria-expanded={activeMobileSection === "cases"}
              className={styles.mobileNavButton}
              onClick={() =>
                setActiveMobileSection((prev) => (prev === "cases" ? null : "cases"))
              }
              type="button"
            >
              <span>CASES</span>
              <span className={styles.mobileNavCaret}>
                {activeMobileSection === "cases" ? "−" : "+"}
              </span>
            </button>

            <div
              className={`${styles.mobileAccordion}${
                activeMobileSection === "cases" ? ` ${styles.mobileAccordionOpen}` : ""
              }`}
            >
              <div className={styles.mobileCasesPanel}>
                {casesData.map((item) => (
                  <div className={styles.mobileCaseItem} key={item.id}>
                    <div className={styles.mobileCaseThumb}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="100vw"
                      />
                    </div>
                    <div className={styles.mobileCaseCopy}>
                      <strong>{item.title}</strong>
                      <span>{item.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              aria-expanded={activeMobileSection === "services"}
              className={styles.mobileNavButton}
              onClick={() =>
                setActiveMobileSection((prev) => (prev === "services" ? null : "services"))
              }
              type="button"
            >
              <span>SERVICES</span>
              <span className={styles.mobileNavCaret}>
                {activeMobileSection === "services" ? "−" : "+"}
              </span>
            </button>

            <div
              className={`${styles.mobileAccordion}${
                activeMobileSection === "services" ? ` ${styles.mobileAccordionOpen}` : ""
              }`}
            >
              <div className={styles.mobileServicesPanel}>
                {servicesData.map((service) => (
                  <div className={styles.mobileServiceItem} key={service.id}>
                    <strong>{service.title}</strong>
                    <span>{service.description}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className={styles.mobileNavButton} type="button">
              ABOUT US
            </button>
            <button className={styles.mobileNavButton} type="button">
              CONTACT
            </button>
          </div>

          <button className={styles.mobileCallButton} type="button">
            {renderSplitNavLabel("BOOK A CALL")}
            <svg
              aria-hidden="true"
              className={styles.btnIcon}
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="1">
                <circle cx="10.2004" cy="7.1999" fill="currentColor" r="1.8" />
                <circle cx="10.2004" cy="16.8" fill="currentColor" r="1.8" />
                <circle cx="14.9992" cy="12.0002" fill="currentColor" r="1.8" />
              </g>
            </svg>
          </button>
        </div>
      )}

      {(activeDropdown || isMobileMenuOpen) && (
        <div className={styles.navbarBackdrop} aria-hidden="true" />
      )}
    </nav>
  );
}

export default Header;
