"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../ui/Icon";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const scrolled = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrolled > 600);
      setProgress(height > 0 ? Math.min(scrolled / height, 1) : 0);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const radius = 21;
  const circumference = 2 * Math.PI * radius;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="group fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-hairline bg-white/90 text-ink shadow-lift backdrop-blur-md transition-colors hover:text-brand"
        >
          {/* Reading-progress ring */}
          <svg
            viewBox="0 0 48 48"
            className="absolute inset-0 -rotate-90"
            aria-hidden="true"
          >
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="2"
            />
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - progress)}
            />
          </svg>
          <Icon
            name="arrowUp"
            size={18}
            className="relative transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
