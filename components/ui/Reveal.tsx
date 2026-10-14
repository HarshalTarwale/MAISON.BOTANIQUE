"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
} from "react";
import { revealStyle } from "@/lib/reveal";

type RevealProps = ComponentPropsWithoutRef<"div"> & {
  /** Rendered element; defaults to a div. */
  as?: ElementType;
  href?: string;
  /** Starting offset in px. */
  x?: number;
  y?: number;
  /** Seconds. */
  duration?: number;
  delay?: number;
  /** Px the element must be inside the viewport before it plays. */
  margin?: number;
};

/** Fades/slides its content in the first time it scrolls into view. */
export function Reveal({
  as: Tag = "div",
  x = 0,
  y = 0,
  duration = 0.6,
  delay = 0,
  margin = 50,
  className = "",
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: `-${margin}px` },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [margin]);

  return (
    <Tag
      ref={ref}
      className={`${visible ? "reveal-animate" : "opacity-0"} ${className}`}
      style={{ ...revealStyle({ x, y, duration, delay }), ...style }}
      {...props}
    />
  );
}
