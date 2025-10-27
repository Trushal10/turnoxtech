"use client";
import { useEffect, useState } from "react";

export default function ZoomText() {
  const text = "Trunox Tech";
  const [showText, setShowText] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Show the full text immediately
    setShowText(true);

    // Start zoom animation slightly later
    const timeout = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-[#05071B]">
      {showText && (
        <h1 className="text-6xl md:text-7xl font-extrabold text-white flex space-x-1">
          {text.split("").map((letter, i) => (
            <span
              key={i}
              className={`inline-block transform transition-all duration-500 ${
                animate ? "opacity-100 scale-100" : "opacity-70 scale-0"
              }`}
              style={{
                transitionDelay: `${i * 0.1}s`, // letter delay for zoom-in
                display: letter === " " ? "inline-block" : undefined,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>
      )}
    </div>
  );
}
