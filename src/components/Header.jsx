import React, { useState } from "react";
import { useEffect } from "react";
import "./Header.css";
import casesData from "../data/casesData";

const servicesData = [
  {
    id: 1,
    title: "Brand Strategy & Identity",
    description:
      "We build the strategic foundation that guides how your brand positions itself, communicates, and grows in the digital landscape.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "CRM & Marketing Automation",
    description:
      "We design automation systems that keep your pipeline moving, reduce manual work, and make customer journeys easier to scale.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Lead Generation",
    description:
      "We create performance-focused campaigns and funnel systems that bring in qualified leads with clear tracking and measurable outcomes.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Website Development",
    description:
      "We build modern websites that look sharp, load fast, and convert visitors through strong structure, messaging, and interaction design.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
];

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);
  const [isCompact, setIsCompact] = useState(false);
  const [hoveredLabel, setHoveredLabel] = useState("");

  const activeService =
    servicesData.find((service) => service.id === activeServiceId) || servicesData[0];

  useEffect(() => {
    if (!hoveredLabel) {
      return undefined;
    }

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+";
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
      frame += 1 / 2;

      if (frame >= hoveredLabel.length) {
        window.clearInterval(interval);
        const doneEvent = new CustomEvent("nav-hover-scramble", {
          detail: { source: hoveredLabel, value: hoveredLabel },
        });
        window.dispatchEvent(doneEvent);
      }
    }, 40);

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

  const renderAnimatedLabel = (label) => (
    <span
      className="nav-animated"
      data-text={label}
      onMouseEnter={() => setHoveredLabel(label)}
      onMouseLeave={() => setHoveredLabel("")}
    >
      <span className="nav-animated-text">{label}</span>
      <span className="nav-animated-base">{label}</span>
    </span>
  );

  const renderPlainAnimatedLabel = (label) => (
    <span
      className="nav-animated nav-animated-plain"
      data-text={label}
      onMouseEnter={() => setHoveredLabel(label)}
      onMouseLeave={() => setHoveredLabel("")}
    >
      <span className="nav-animated-text">{label}</span>
      <span className="nav-animated-base">{label}</span>
    </span>
  );

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

  return (
    <nav
      className={`navbar${activeDropdown ? " navbar-blur-active" : ""}${
        isCompact ? " navbar-compact" : ""
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      {/* Logo */}
      <div className="logo">
        <img
          src={
            activeDropdown
              ? "/Imazine Us New Logo.png"
              : "/Imazine Us New Logo white.png"
          }
          alt="Imazine Us"
        />
      </div>

      {/* Menu */}
      <ul className="menu">
        <li
          className="cases-menu"
          onMouseEnter={() => setActiveDropdown("cases")}
        >
          <span className="cases-trigger">{renderAnimatedLabel("CASES +")}</span>

          {activeDropdown === "cases" && (
            <div className="dropdown cases-dropdown">
              <div className="cases-dropdown-header">
                <h3>Our latest case studies</h3>
                <button className="cases-link" type="button">
                  {renderAnimatedLabel("EXPLORE ALL CASES")}
                  <svg
                    aria-hidden="true"
                    className="btn-icon"
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

              <div className="cases-grid">
                {casesData.map((item) => (
                  <div className="drop-card" key={item.id}>
                    <img src={item.image} alt={item.title} />

                    <div className="card-content">
                      <h4>{item.title}</h4>
                      <p className="card-tag">{item.category}</p>
                      <button className="see-btn" type="button">
                        {renderAnimatedLabel("SEE WORK")}
                        <svg
                          aria-hidden="true"
                          className="btn-icon"
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
          className="services-menu"
          onMouseEnter={() => setActiveDropdown("services")}
        >
          <span className="services-trigger">{renderAnimatedLabel("SERVICES +")}</span>

          {activeDropdown === "services" && (
            <div className="dropdown services-dropdown">
              <div className="services-list">
                {servicesData.map((service) => (
                  <button
                    key={service.id}
                    className={`service-item${
                      activeService.id === service.id ? " active" : ""
                    }`}
                    onMouseEnter={() => setActiveServiceId(service.id)}
                    type="button"
                  >
                    {renderAnimatedLabel(service.title)}
                  </button>
                ))}

                <button className="services-cta" type="button">
                  EXPLORE ALL SERVICES
                </button>
              </div>

              <div className="services-copy">
                <p>{activeService.description}</p>
              </div>

              <div className="services-preview">
                <img src={activeService.image} alt={activeService.title} />
              </div>
            </div>
          )}
        </li>
        <li onMouseEnter={() => setActiveDropdown(null)}>
          {renderPlainAnimatedLabel("ABOUT US")}
        </li>
        <li onMouseEnter={() => setActiveDropdown(null)}>
          {renderPlainAnimatedLabel("CONTACT")}
        </li>
      </ul>

      {/* Right */}
      <div className="right">
        <button className="btn">
          {renderAnimatedLabel("BOOK A CALL")}
          <svg
            aria-hidden="true"
            className="btn-icon"
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

      {activeDropdown && <div className="navbar-backdrop" aria-hidden="true" />}
    </nav>
  );
}

export default Header;
