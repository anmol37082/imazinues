"use client";

import { Children, cloneElement, isValidElement, useEffect, useMemo, useRef, useState } from "react";
import styles from "./GoldenGlowEffect.module.css";

const CHAR_TAGS = new Set(["H1", "H2", "H3", "H4", "H5", "H6"]);
const WORD_TAGS = new Set(["P", "LI", "BLOCKQUOTE", "A"]);
const CHAR_CLASS_HINTS = ["title", "heading", "groupTitle", "itemLabel", "mark"];
const WORD_CLASS_HINTS = ["label", "eyebrow", "description", "subtitle", "source", "name"];
const PLAIN_CLASS_HINTS = ["noSplit", "plainText"];

function resolveMode(elementType, className = "") {
  const tag = typeof elementType === "string" ? elementType.toUpperCase() : "";

  if (className && PLAIN_CLASS_HINTS.some((hint) => className.includes(hint))) {
    return "plain";
  }

  if (CHAR_TAGS.has(tag)) return "chars";
  if (WORD_TAGS.has(tag)) return "words";

  if (className) {
    if (CHAR_CLASS_HINTS.some((hint) => className.includes(hint))) return "chars";
    if (WORD_CLASS_HINTS.some((hint) => className.includes(hint))) return "words";
  }

  return "words";
}

function splitWords(text, keyPrefix) {
  const parts = text.split(/(\s+)/);
  const nodes = [];
  let unitIndex = 0;

  parts.forEach((part, index) => {
    if (part === "") return;

    if (/^\s+$/.test(part)) {
      nodes.push(
        <span className={styles.space} key={`${keyPrefix}-space-${index}`} aria-hidden="true">
          {part}
        </span>
      );
      return;
    }

    nodes.push(
      <span
        className={styles.word}
        key={`${keyPrefix}-word-${index}`}
        style={{ "--glow-index": unitIndex }}
      >
        {part}
      </span>
    );
    unitIndex += 1;
  });

  return nodes;
}

function splitChars(text, keyPrefix) {
  const parts = text.split(/(\s+)/);
  const nodes = [];
  let charIndex = 0;

  parts.forEach((part, index) => {
    if (part === "") return;

    if (/^\s+$/.test(part)) {
      nodes.push(
        <span className={styles.space} key={`${keyPrefix}-space-${index}`} aria-hidden="true">
          {part}
        </span>
      );
      return;
    }

    const chars = Array.from(part).map((char, charOffset) => (
      <span
        className={styles.char}
        key={`${keyPrefix}-char-${index}-${charOffset}`}
        style={{ "--glow-index": charIndex + charOffset }}
      >
        {char}
      </span>
    ));

    nodes.push(
      <span className={styles.wordChunk} key={`${keyPrefix}-word-${index}`}>
        {chars}
      </span>
    );
    charIndex += part.length;
  });

  return nodes;
}

function transformChildren(children, parentMode = "words", path = "0") {
  return Children.toArray(children).map((child, index) => {
    const childPath = `${path}-${index}`;

    if (typeof child === "string" || typeof child === "number") {
      const text = String(child);
      if (parentMode === "plain") {
        return text;
      }
      return parentMode === "chars" ? splitChars(text, childPath) : splitWords(text, childPath);
    }

    if (!isValidElement(child)) {
      return child;
    }

    const className = typeof child.props.className === "string" ? child.props.className : "";
    const mode = resolveMode(child.type, className);
    const nestedChildren = child.props.children
      ? transformChildren(child.props.children, mode, childPath)
      : child.props.children;

    return cloneElement(child, { ...child.props }, nestedChildren);
  });
}

export default function GoldenGlowEffect({ children, className = "" }) {
  const wrapperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const animatedTree = useMemo(() => transformChildren(children), [children]);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.18,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={wrapperRef} className={`${styles.root} ${isVisible ? styles.visible : ""} ${className}`.trim()}>
      {animatedTree}
    </div>
  );
}
