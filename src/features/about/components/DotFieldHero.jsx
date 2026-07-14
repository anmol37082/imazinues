"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./DotFieldHero.module.css";


export default function DotFieldHero({
  density = 80,
  dotRadius = [0.7, 1.3],
  dotColor = "255,255,255",
  dotOpacity = 0.55,
  driftSpeed = 8,
  ringRadius = 70,
  pickRadius = 220,
  parallaxStrength = 0.1,
  logoSrc = "/footerLogo.svg", // <-- naya prop: SVG/image path (public folder se)
  logoText = "Z.", // logoSrc na diya jaye toh fallback text
  logoFont = "900 140px Arial, sans-serif",
  logoSize = 160,
  logoSampleGap = 3,
  className = "",
}) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const logoPointsRef = useRef([]);

  // logoSrc (SVG/image) ya logoText ko offscreen canvas par draw karke
  // uske alpha channel se {x, y} points sample karte hain.
  useEffect(() => {
    const off = document.createElement("canvas");
    off.width = logoSize;
    off.height = logoSize;
    const octx = off.getContext("2d");

    function sampleFromCanvas() {
      const data = octx.getImageData(0, 0, logoSize, logoSize).data;
      const points = [];
      for (let y = 0; y < logoSize; y += logoSampleGap) {
        for (let x = 0; x < logoSize; x += logoSampleGap) {
          const i = (y * logoSize + x) * 4;
          const a = data[i + 3]; // sirf transparency check, color matter nahi karta
          if (a > 128) {
            points.push({ x: x - logoSize / 2, y: y - logoSize / 2 });
          }
        }
      }
      logoPointsRef.current = points;
    }

    let cancelled = false;

    if (logoSrc) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        if (cancelled) return;
        octx.clearRect(0, 0, logoSize, logoSize);
        // aspect ratio maintain karte hue logoSize ke box me fit karo
        const scale = Math.min(logoSize / img.width, logoSize / img.height);
        const w = img.width * scale;
        const h = img.height * scale;
        octx.drawImage(img, (logoSize - w) / 2, (logoSize - h) / 2, w, h);
        sampleFromCanvas();
      };
      img.onerror = () => {
        console.warn("DotFieldHero: logoSrc load nahi ho paya ->", logoSrc);
      };
      img.src = logoSrc;
    } else {
      octx.clearRect(0, 0, logoSize, logoSize);
      octx.fillStyle = "#fff";
      octx.font = logoFont;
      octx.textAlign = "center";
      octx.textBaseline = "middle";
      octx.fillText(logoText, logoSize / 2, logoSize / 2);
      sampleFromCanvas();
    }

    return () => {
      cancelled = true;
    };
  }, [logoSrc, logoText, logoFont, logoSize, logoSampleGap]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let W = 0;
    let H = 0;
    let dots = [];
    let rafId;
    const mouse = { x: 0, y: 0, active: false };

    function buildField() {
      const rect = wrap.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.floor((W * H) / density);
      dots = [];
      for (let i = 0; i < count; i++) {
        const fx = Math.random() * W;
        const fy = Math.random() * H;
        dots.push({
          fx,
          fy,
          x: fx,
          y: fy,
          vx: (Math.random() - 0.5) * driftSpeed,
          vy: (Math.random() - 0.5) * driftSpeed,
          r: dotRadius[0] + Math.random() * (dotRadius[1] - dotRadius[0]),
          depth: 0.3 + Math.random() * 0.9,
          lock: 0,
          ringX: 0,
          ringY: 0,
        });
      }
    }

    function handleMouseMove(e) {
      const rect = wrap.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    }

    function handleMouseLeave() {
      mouse.active = false;
    }

    function handleClick(e) {
      const rect = wrap.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      const candidates = dots.filter((d) => Math.hypot(d.fx - cx, d.fy - cy) < pickRadius);
      const logoPoints = logoPointsRef.current;
      const total = candidates.length;

      candidates.forEach((d, idx) => {
        let targetX;
        let targetY;

        if (logoPoints.length > 0) {
          const pointIndex = Math.floor((idx / total) * logoPoints.length) % logoPoints.length;
          const p = logoPoints[pointIndex];
          targetX = cx + p.x;
          targetY = cy + p.y;
        } else {
          const angle = (idx / total) * Math.PI * 2 + Math.random() * 0.15;
          targetX = cx + ringRadius * Math.cos(angle);
          targetY = cy + ringRadius * Math.sin(angle);
        }

        d.ringX = targetX;
        d.ringY = targetY;

        gsap.killTweensOf(d);
        gsap.to(d, {
          lock: 1,
          duration: 0.55,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(d, { lock: 0, duration: 1.3, delay: 0.25, ease: "power3.inOut" });
          },
        });
      });
    }

    function loop() {
      ctx.clearRect(0, 0, W, H);
      const dt = 0.016;
      const cx0 = W / 2;
      const cy0 = H / 2;
      const mdx = mouse.active ? mouse.x - cx0 : 0;
      const mdy = mouse.active ? mouse.y - cy0 : 0;

      for (let k = 0; k < dots.length; k++) {
        const d = dots[k];

        d.fx += d.vx * dt;
        d.fy += d.vy * dt;
        if (d.fx < 0) {
          d.fx = 0;
          d.vx *= -1;
        }
        if (d.fx > W) {
          d.fx = W;
          d.vx *= -1;
        }
        if (d.fy < 0) {
          d.fy = 0;
          d.vy *= -1;
        }
        if (d.fy > H) {
          d.fy = H;
          d.vy *= -1;
        }
        if (Math.random() < 0.01) {
          d.vx += (Math.random() - 0.5) * (driftSpeed * 0.4);
          d.vy += (Math.random() - 0.5) * (driftSpeed * 0.4);
        }

        const px = d.fx + mdx * d.depth * parallaxStrength;
        const py = d.fy + mdy * d.depth * parallaxStrength;

        const tx = d.lock > 0.001 ? px + (d.ringX - px) * d.lock : px;
        const ty = d.lock > 0.001 ? py + (d.ringY - py) * d.lock : py;
        d.x += (tx - d.x) * 0.2;
        d.y += (ty - d.y) * 0.2;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor},${dotOpacity})`;
        ctx.fill();
      }
      rafId = requestAnimationFrame(loop);
    }

    buildField();
    loop();

    const resizeObserver = new ResizeObserver(buildField);
    resizeObserver.observe(wrap);
    wrap.addEventListener("mousemove", handleMouseMove);
    wrap.addEventListener("mouseleave", handleMouseLeave);
    wrap.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      wrap.removeEventListener("mousemove", handleMouseMove);
      wrap.removeEventListener("mouseleave", handleMouseLeave);
      wrap.removeEventListener("click", handleClick);
      gsap.killTweensOf(dots);
    };
  }, [density, dotColor, dotOpacity, driftSpeed, ringRadius, pickRadius, dotRadius, parallaxStrength]);

  return (
    <div ref={wrapRef} className={`${styles.wrap} ${className}`}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}