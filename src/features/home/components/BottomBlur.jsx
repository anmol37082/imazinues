"use client";

function BottomBlur({ height = 20, zIndex = 1000 }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: `${height + 36}px`,
        background: "rgba(255, 255, 255, 0.01)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        maskImage:
          "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 58%, rgba(0, 0, 0, 0.72) 78%, rgba(0, 0, 0, 0.28) 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 58%, rgba(0, 0, 0, 0.72) 78%, rgba(0, 0, 0, 0.28) 92%, transparent 100%)",
        zIndex,
        pointerEvents: "none",
      }}
    />
  );
}

export default BottomBlur;
