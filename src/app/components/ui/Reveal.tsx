"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Scroll reveal.
 *
 * Deliberately not built on Framer Motion: these wrappers appear ~60 times on
 * the homepage, and one animation-library component per item is a real
 * hydration cost for what is a fade and a 24px translate. Instead a single
 * IntersectionObserver toggles one class and CSS does the rest — grouped
 * children stagger via :nth-child, so a 10-card grid costs exactly one
 * observer and one client component.
 *
 * Framer Motion is still used where it earns it: the hero, the scroll-linked
 * process rail, the FAQ height animation and the mobile drawer.
 */

type Direction = "up" | "down" | "left" | "right" | "none";

function useInViewOnce<T extends HTMLElement>(rootMargin = "0px 0px -72px 0px") {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Older browsers / SSR-less environments: just show the content.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // Already on screen at mount (above the fold) — skip the observer round-trip.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, visible };
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  scale = false,
}: {
  children: ReactNode;
  className?: string;
  /** Seconds. */
  delay?: number;
  direction?: Direction;
  scale?: boolean;
}) {
  const { ref, visible } = useInViewOnce<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-direction={direction}
      data-scale={scale ? "" : undefined}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Wraps a list. Direct <RevealItem> children cascade in via :nth-child delays,
 * so the whole group costs one observer.
 */
export function RevealGroup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { ref, visible } = useInViewOnce<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal-group ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default Reveal;
