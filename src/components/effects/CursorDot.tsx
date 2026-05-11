import { useEffect, useRef } from "react";

export function CursorDot() {
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = dot.current;
    if (!el) return;
    let raf = 0;
    let x = 0, y = 0, tx = 0, ty = 0;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate(${x - 6}px, ${y - 6}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={dot}
      aria-hidden
      className="cursor-dot pointer-events-none fixed left-0 top-0 z-[100] h-3 w-3 rounded-full bg-primary/70 mix-blend-multiply"
    />
  );
}
