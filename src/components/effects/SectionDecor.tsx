import { FloatingBlob } from "./FloatingBlob";

type Variant = "bubbles" | "flow" | "grid-dots" | "squares" | "constellation";

/**
 * Drop-in decorative layer for sections. Sits absolutely behind content with
 * pointer-events disabled. Adds personality via shapes, connection lines and
 * subtle motion — never interferes with layout.
 */
export function SectionDecor({
  variant = "bubbles",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {variant === "bubbles" && <Bubbles />}
      {variant === "flow" && <Flow />}
      {variant === "grid-dots" && <GridDots />}
      {variant === "squares" && <Squares />}
      {variant === "constellation" && <Constellation />}
    </div>
  );
}

/* ---- Variants ---- */

function Bubbles() {
  return (
    <>
      <FloatingBlob className="-top-24 -left-20" color="primary" size={300} />
      <FloatingBlob className="top-1/3 -right-16" color="peach" size={260} delay={1.2} />
      <FloatingBlob className="-bottom-24 left-1/3" color="gold" size={240} delay={2.4} />
      <DotMask />
    </>
  );
}

function Flow() {
  // Connection lines + nodes — evokes funnels & automations.
  return (
    <>
      <DotMask />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="flowg" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="50%" stopColor="var(--peach)" />
            <stop offset="100%" stopColor="var(--gold)" />
          </linearGradient>
        </defs>
        <path
          d="M -40 480 C 200 460, 280 200, 520 220 S 880 480, 1240 200"
          stroke="url(#flowg)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 8"
        />
        <path
          d="M -40 120 C 240 140, 360 380, 600 360 S 980 120, 1240 360"
          stroke="url(#flowg)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="3 10"
          opacity="0.7"
        />
        {[
          [120, 470], [520, 220], [880, 470], [600, 360], [980, 120], [240, 140],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="5"
            fill={i % 2 ? "var(--peach)" : "var(--primary)"}
            className="animate-pulse-soft"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </svg>
      <FloatingBlob className="-top-20 right-1/4" color="primary" size={220} />
      <FloatingBlob className="-bottom-24 -left-10" color="peach" size={260} delay={2} />
    </>
  );
}

function GridDots() {
  return (
    <>
      <div className="absolute inset-0 grid-bg opacity-30" />
      <FloatingBlob className="-top-16 right-10" color="gold" size={220} />
      <FloatingBlob className="-bottom-20 -left-10" color="primary" size={260} delay={1.8} />
    </>
  );
}

function Squares() {
  // Floating soft squares + a few outlined squares — geometric personality.
  const items = [
    { top: "8%", left: "6%", size: 64, rot: -8, color: "primary", filled: false },
    { top: "20%", left: "82%", size: 40, rot: 14, color: "peach", filled: true },
    { top: "62%", left: "10%", size: 28, rot: 6, color: "gold", filled: true },
    { top: "75%", left: "70%", size: 80, rot: -16, color: "primary", filled: false },
    { top: "40%", left: "45%", size: 22, rot: 22, color: "peach", filled: false },
  ] as const;
  return (
    <>
      <DotMask />
      {items.map((s, i) => {
        const c =
          s.color === "peach"
            ? "var(--peach)"
            : s.color === "gold"
              ? "var(--gold)"
              : "var(--primary)";
        return (
          <div
            key={i}
            className="absolute rounded-md animate-float"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              transform: `rotate(${s.rot}deg)`,
              background: s.filled
                ? `color-mix(in oklab, ${c} 22%, transparent)`
                : "transparent",
              border: s.filled ? "none" : `1.5px solid color-mix(in oklab, ${c} 55%, transparent)`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${7 + i}s`,
            }}
          />
        );
      })}
    </>
  );
}

function Constellation() {
  return (
    <>
      <svg
        className="absolute inset-0 h-full w-full opacity-25"
        viewBox="0 0 800 500"
        preserveAspectRatio="none"
      >
        <g stroke="var(--primary)" strokeWidth="1" fill="none">
          <path d="M 60 80 L 220 160 L 380 100 L 540 220 L 720 140" />
          <path d="M 220 160 L 280 320 L 540 220" />
          <path d="M 380 100 L 460 380 L 720 140" />
        </g>
        {[
          [60, 80], [220, 160], [380, 100], [540, 220], [720, 140],
          [280, 320], [460, 380],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="3.5"
            fill={i % 3 === 0 ? "var(--peach)" : i % 3 === 1 ? "var(--primary)" : "var(--gold)"}
          />
        ))}
      </svg>
      <FloatingBlob className="-top-16 -right-10" color="peach" size={220} />
      <FloatingBlob className="bottom-0 -left-16" color="primary" size={260} delay={1.5} />
    </>
  );
}

function DotMask() {
  return (
    <div
      className="absolute inset-0 opacity-[0.22]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, color-mix(in oklab, var(--foreground) 35%, transparent) 1px, transparent 0)",
        backgroundSize: "26px 26px",
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
      }}
    />
  );
}
