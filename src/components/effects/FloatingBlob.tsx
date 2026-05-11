export function FloatingBlob({
  className,
  color = "primary",
  size = 320,
  delay = 0,
}: {
  className?: string;
  color?: "primary" | "peach" | "gold";
  size?: number;
  delay?: number;
}) {
  const colorVar =
    color === "peach" ? "var(--peach)" : color === "gold" ? "var(--gold)" : "var(--primary)";
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl opacity-40 ${className ?? ""}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, ${colorVar}, transparent 70%)`,
        animation: `float ${6 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}
