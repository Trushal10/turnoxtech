"use client";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scrollOffset, setScrollOffset] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollOffset(window.scrollY * 0.2); 
      // 👆 move ball downward as page scrolls (adjust 0.2 for more or less effect)
    };

    const handleMouseOver = (e: Event) => {
      if ((e.target as HTMLElement).closest("a, button")) setHovered(true);
    };

    const handleMouseOut = (e: Event) => {
      if ((e.target as HTMLElement).closest("a, button")) setHovered(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9997] transition-all duration-150 ease-out ${
        hovered
          ? "w-10 h-10 bg-gradient-to-r from-blue-500 to-pink-500 opacity-90"
          : "w-3 h-3 bg-gradient-to-r from-primary to-secondary opacity-100"
      }`}
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12 + scrollOffset}px)`,
        mixBlendMode: "difference",
        filter: "blur(0.5px)",
      }}
    ></div>
  );
}
