"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import type { PointerEvent, ReactNode } from "react";

/**
 * Card with a pointer-tracked 3D tilt and a spotlight that follows the cursor.
 *
 * The spotlight is driven by CSS custom properties (--mx/--my) consumed by the
 * `.spotlight` utility, so the glow costs no extra React renders. Tilt is
 * disabled entirely under prefers-reduced-motion and on touch pointers.
 */
export default function TiltCard({
  children,
  className = "",
  intensity = 6,
  spotlight = true,
}: {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees. */
  intensity?: number;
  spotlight?: boolean;
}) {
  const reduce = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const springConfig = { stiffness: 220, damping: 24, mass: 0.4 };
  const rotateX = useSpring(
    useTransform(py, [0, 1], [intensity, -intensity]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(px, [0, 1], [-intensity, intensity]),
    springConfig,
  );

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    px.set(x);
    py.set(y);
    if (spotlight) {
      event.currentTarget.style.setProperty("--mx", `${x * 100}%`);
      event.currentTarget.style.setProperty("--my", `${y * 100}%`);
    }
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      className={`${spotlight ? "spotlight" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
