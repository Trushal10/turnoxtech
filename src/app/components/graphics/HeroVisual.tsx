"use client";

import { motion, useReducedMotion } from "framer-motion";
import Icon from "../ui/Icon";

/**
 * Hero illustration: an abstract "AI engine" — a gradient core inside orbiting
 * rings with a live node network — surrounded by floating product-UI cards.
 *
 * Entirely vector + DOM. No raster assets, so it costs no image bandwidth,
 * never shifts layout, and stays crisp on any display.
 */

const EASE = [0.16, 1, 0.3, 1] as const;

const nodes = [
  { cx: 96, cy: 128, r: 5 },
  { cx: 150, cy: 84, r: 4 },
  { cx: 158, cy: 186, r: 4.5 },
  { cx: 232, cy: 70, r: 5 },
  { cx: 246, cy: 152, r: 4 },
  { cx: 214, cy: 214, r: 4.5 },
  { cx: 300, cy: 112, r: 4 },
  { cx: 312, cy: 196, r: 5 },
];

const links: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
  [2, 5],
  [3, 4],
  [4, 6],
  [4, 7],
  [5, 7],
  [1, 4],
];

function FloatingCard({
  className,
  delay,
  float,
  children,
}: {
  className: string;
  delay: number;
  float: number;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`absolute z-20 ${className}`}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -float, 0] }}
        transition={{
          duration: 5.5 + float / 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="rounded-2xl border border-white/70 bg-white/85 p-3.5 shadow-float backdrop-blur-xl"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
      {/* Ambient colour wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-12 -z-10"
      >
        <div className="animate-drift absolute left-[8%] top-[6%] h-56 w-56 rounded-full bg-brand/25 blur-[80px]" />
        <div
          className="animate-drift absolute bottom-[4%] right-[6%] h-64 w-64 rounded-full bg-accent/20 blur-[90px]"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="animate-drift absolute bottom-[28%] left-[38%] h-40 w-40 rounded-full bg-cyan-400/20 blur-[70px]"
          style={{ animationDelay: "-12s" }}
        />
      </div>

      {/* Main panel */}
      <motion.div
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        className="ring-gradient relative overflow-hidden rounded-panel border border-hairline bg-linear-to-br from-white via-white to-surface shadow-float"
      >
        <svg
          viewBox="0 0 400 300"
          className="block h-auto w-full"
          role="img"
          aria-label="Abstract illustration of an AI engine: a gradient core surrounded by orbiting rings and a connected node network."
        >
          <defs>
            <linearGradient id="hv-core" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
            <linearGradient id="hv-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity=".55" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity=".18" />
            </linearGradient>
            <radialGradient id="hv-halo">
              <stop offset="0%" stopColor="#2563eb" stopOpacity=".28" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
            </radialGradient>
            <filter id="hv-soft" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>

          {/* Grid floor */}
          <g stroke="#e2e8f0" strokeWidth="1" opacity=".7">
            {Array.from({ length: 9 }, (_, i) => (
              <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="300" />
            ))}
            {Array.from({ length: 7 }, (_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} />
            ))}
          </g>

          {/* Halo behind the core */}
          <circle cx="200" cy="140" r="120" fill="url(#hv-halo)" />

          {/* Node network */}
          <g>
            {links.map(([a, b], i) => (
              <motion.line
                key={i}
                x1={nodes[a].cx}
                y1={nodes[a].cy}
                x2={nodes[b].cx}
                y2={nodes[b].cy}
                stroke="url(#hv-line)"
                strokeWidth="1.4"
                initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.1, delay: 0.4 + i * 0.07, ease: EASE }}
              />
            ))}
            {nodes.map((n, i) => (
              <g key={i}>
                <motion.circle
                  cx={n.cx}
                  cy={n.cy}
                  r={n.r + 5}
                  fill="#2563eb"
                  opacity=".12"
                  animate={reduce ? undefined : { r: [n.r + 4, n.r + 9, n.r + 4] }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.35,
                  }}
                />
                <motion.circle
                  cx={n.cx}
                  cy={n.cy}
                  r={n.r}
                  fill="#fff"
                  stroke="#2563eb"
                  strokeWidth="2"
                  initial={reduce ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: EASE }}
                />
              </g>
            ))}
          </g>

          {/* Orbiting rings + core */}
          <g style={{ transformOrigin: "200px 140px" }}>
            <motion.g
              style={{ transformOrigin: "200px 140px" }}
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            >
              <ellipse
                cx="200"
                cy="140"
                rx="92"
                ry="34"
                fill="none"
                stroke="#2563eb"
                strokeOpacity=".35"
                strokeWidth="1.5"
                transform="rotate(-18 200 140)"
              />
              <circle cx="292" cy="140" r="5" fill="#2563eb" transform="rotate(-18 200 140)" />
            </motion.g>

            <motion.g
              style={{ transformOrigin: "200px 140px" }}
              animate={reduce ? undefined : { rotate: -360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            >
              <ellipse
                cx="200"
                cy="140"
                rx="68"
                ry="68"
                fill="none"
                stroke="#7c3aed"
                strokeOpacity=".28"
                strokeWidth="1.5"
                strokeDasharray="5 9"
              />
              <circle cx="200" cy="72" r="4.5" fill="#7c3aed" />
            </motion.g>

            <circle cx="200" cy="140" r="46" fill="#2563eb" opacity=".18" filter="url(#hv-soft)" />
            <motion.circle
              cx="200"
              cy="140"
              r="38"
              fill="url(#hv-core)"
              animate={reduce ? undefined : { scale: [1, 1.05, 1] }}
              style={{ transformOrigin: "200px 140px" }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Core glyph — a stylised spark */}
            <path
              d="M200 118l5.6 15.4L221 139l-15.4 5.6L200 160l-5.6-15.4L179 139l15.4-5.6z"
              fill="#fff"
              opacity=".95"
            />
            <circle cx="216" cy="122" r="3.2" fill="#fff" opacity=".8" />
          </g>

          {/* Data bars along the base */}
          <g>
            {[
              { x: 58, h: 26 },
              { x: 84, h: 42 },
              { x: 110, h: 34 },
              { x: 136, h: 56 },
              { x: 162, h: 46 },
            ].map((b, i) => (
              <motion.rect
                key={i}
                x={b.x}
                y={268 - b.h}
                width="12"
                height={b.h}
                rx="6"
                fill={i % 2 ? "#7c3aed" : "#2563eb"}
                opacity=".7"
                initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
                animate={{ scaleY: 1 }}
                style={{ transformOrigin: `${b.x + 6}px 268px` }}
                transition={{ duration: 0.7, delay: 0.9 + i * 0.09, ease: EASE }}
              />
            ))}
          </g>

          {/* Trend line */}
          <motion.path
            d="M232 258c22-4 30-30 52-38s34 10 58-16"
            fill="none"
            stroke="#2563eb"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="0 1"
            initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 1.1, ease: EASE }}
          />
          <circle cx="342" cy="204" r="4.5" fill="#7c3aed" />
        </svg>
      </motion.div>

      {/* ---- Floating UI cards ------------------------------------------ */}

      <FloatingCard className="-left-4 top-[14%] sm:-left-10" delay={0.55} float={10}>
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
            <Icon name="check" size={18} />
          </span>
          <div>
            <p className="font-display text-[13px] font-bold leading-tight text-ink">
              Deploy passed
            </p>
            <p className="text-[11px] leading-tight text-muted">
              142 tests · 38s
            </p>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard
        className="-right-3 top-[4%] sm:-right-8"
        delay={0.75}
        float={14}
      >
        <div className="w-[168px]">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-display text-[13px] font-bold text-ink">
              Model accuracy
            </p>
            <span className="text-[11px] font-semibold text-emerald-600">
              +2.4%
            </span>
          </div>
          <div className="mb-1.5 h-1.5 w-full overflow-hidden rounded-pill bg-surface-2">
            <motion.div
              className="h-full rounded-pill bg-linear-to-r from-brand to-accent"
              initial={reduce ? { width: "98.4%" } : { width: 0 }}
              animate={{ width: "98.4%" }}
              transition={{ duration: 1.3, delay: 1.1, ease: EASE }}
            />
          </div>
          <p className="text-[11px] text-muted">98.4% on holdout set</p>
        </div>
      </FloatingCard>

      <FloatingCard
        className="bottom-[8%] -right-2 sm:-right-6"
        delay={0.95}
        float={9}
      >
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-tint text-brand">
            <Icon name="workflow" size={18} />
          </span>
          <div>
            <p className="font-display text-[13px] font-bold leading-tight text-ink">
              214 hrs saved
            </p>
            <p className="text-[11px] leading-tight text-muted">
              Automation · this month
            </p>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard
        className="-left-2 bottom-[22%] hidden sm:-left-8 sm:block"
        delay={1.15}
        float={12}
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <p className="font-display text-[12px] font-bold text-ink">
            8 agents running
          </p>
        </div>
      </FloatingCard>
    </div>
  );
}
