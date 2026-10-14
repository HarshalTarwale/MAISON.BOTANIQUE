import type { CSSProperties } from "react";

interface RevealOptions {
  /** Starting offset in px; the element slides to its resting position. */
  x?: number;
  y?: number;
  /** Seconds. */
  duration?: number;
  /** Seconds. */
  delay?: number;
}

/** CSS variables consumed by the `.reveal-animate` class in globals.css. */
export function revealStyle({
  x = 0,
  y = 0,
  duration = 0.6,
  delay = 0,
}: RevealOptions = {}): CSSProperties {
  return {
    "--reveal-x": `${x}px`,
    "--reveal-y": `${y}px`,
    "--reveal-duration": `${duration}s`,
    "--reveal-delay": `${delay}s`,
  } as CSSProperties;
}
