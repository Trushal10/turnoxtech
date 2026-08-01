import type { SVGProps } from "react";

/**
 * Technology marks for the stack grid.
 *
 * Each is drawn on a shared 32×32 grid, optically centred, and inherits
 * `currentColor` so the grid can shift the whole set from grey to brand blue
 * on hover without swapping assets. Inline SVG: no image requests, no icon
 * CDN, no layout shift.
 *
 * These are simplified, single-colour interpretations for a small display
 * size — recognisable alongside their label rather than pixel-exact
 * reproductions of each trademark.
 */

const line = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const marks = {
  /* Beveled "L" ribbon */
  laravel: <path d="M6 4h6.4v17.6H26L20.4 28H6V4Z" />,

  /* Two nested chevrons */
  vue: (
    <path d="M2.6 5h5.6L16 18.4 23.8 5h5.6L16 27.6 2.6 5Zm7.8 0h3.2L16 8.8 18.4 5h3.2L16 14.4 10.4 5Z" />
  ),

  /* Atom: nucleus + three orbits */
  react: (
    <g>
      <circle cx="16" cy="16" r="2.7" />
      <g {...line} strokeWidth="1.7">
        <ellipse cx="16" cy="16" rx="13" ry="5" />
        <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)" />
      </g>
    </g>
  ),

  /* Ringed "N" */
  nextjs: (
    <g>
      <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M11 22.5V9.5h2.6l8.2 11.6V9.5" {...line} strokeWidth="2.4" />
      <path d="M21.8 22.5v-4" {...line} strokeWidth="2.4" />
    </g>
  ),

  /* Hexagon */
  nodejs: (
    <g>
      <path
        d="M16 2.6 28 9.3v13.4L16 29.4 4 22.7V9.3L16 2.6Z"
        {...line}
        strokeWidth="2.4"
      />
      <path d="M11.6 19.8c0 1.6 1.7 2.6 4.4 2.6s4.4-1 4.4-2.8c0-1.7-1.2-2.3-4.2-2.7-2.6-.3-3.4-.7-3.4-1.7s1-1.7 3-1.7 3 .6 3.2 2" {...line} strokeWidth="2.1" />
    </g>
  ),

  /* Two interlocking halves */
  python: (
    <g>
      <path d="M15.6 2.8c-2.3 0-4.3.3-5.6.8-1.4.6-2 1.6-2 3v3.5h8v1.2H4.9c-1.7 0-3.1 1-3.6 2.9-.6 2.2-.6 3.6 0 5.9.4 1.8 1.4 2.9 3 2.9h2.3v-3.6c0-1.9 1.7-3.5 3.6-3.5h7.7c1.5 0 2.8-1.3 2.8-2.8V6.6c0-1.5-1.3-2.7-2.8-3-.7-.1-1.5-.2-2.3-.2v-.6Zm-3.9 2c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2Z" />
      <path d="M16.4 29.2c2.3 0 4.3-.3 5.6-.8 1.4-.6 2-1.6 2-3v-3.5h-8v-1.2h11.1c1.7 0 3.1-1 3.6-2.9.6-2.2.6-3.6 0-5.9-.4-1.8-1.4-2.9-3-2.9h-2.3v3.6c0 1.9-1.7 3.5-3.6 3.5h-7.7c-1.5 0-2.8 1.3-2.8 2.8v5.5c0 1.5 1.3 2.7 2.8 3 .7.1 1.5.2 2.3.2v.6Zm3.9-2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2Z" />
    </g>
  ),

  /* Interlocking hex knot */
  openai: (
    <path d="M16 1.8 4.6 8.4v13.2L16 28.2l11.4-6.6V8.4L16 1.8Zm0 2.9 8.9 5.1v4.7l-4.1-2.4V9.4L16 6.6l-4.8 2.8v2.7l-4.1 2.4V9.8L16 4.7ZM7.1 17.3l4.1-2.4 4.1 2.4v4.7L11.2 24l-4.1-2.4v-4.3Zm9.7 4.7v-4.7l4.1-2.4 4.1 2.4v4.3L20.9 24l-4.1-2Zm-.8-8.9 3 1.8v3.5l-3 1.8-3-1.8v-3.5l3-1.8Z" />
  ),

  /* Swoosh + cloud blocks */
  aws: (
    <g>
      <path d="M6 8.6h4.6l1.6 5 1.6-5h4.4l-3.4 9.2h-4.4L6 8.6Zm14 0h4.4l3.6 9.2h-4.4l-.5-1.6h-1.8l-.5 1.6h-4.4L20 8.6Z" opacity=".9" />
      <path
        d="M3.2 22.6c5 3.4 11.2 5.1 17.4 4.4 2.8-.3 5.5-1 8-2.2"
        {...line}
        strokeWidth="2.4"
      />
      <path d="M26.4 22.4c1.7-.5 3-.4 3.3.2.3.6-.4 1.8-1.7 3.1" {...line} strokeWidth="2.2" />
    </g>
  ),

  /* Container stack + hull */
  docker: (
    <g>
      <g>
        <rect x="7" y="13.4" width="4.4" height="4.2" rx="0.6" />
        <rect x="12.2" y="13.4" width="4.4" height="4.2" rx="0.6" />
        <rect x="17.4" y="13.4" width="4.4" height="4.2" rx="0.6" />
        <rect x="12.2" y="8.4" width="4.4" height="4.2" rx="0.6" />
        <rect x="17.4" y="8.4" width="4.4" height="4.2" rx="0.6" />
        <rect x="17.4" y="3.4" width="4.4" height="4.2" rx="0.6" />
      </g>
      <path d="M2.4 18.6h27c.2 2.6-.7 5.2-2.7 7-2 1.8-4.9 2.8-8.6 2.8-4.6 0-8.4-1.4-11-4-1.9-1.9-3-3.9-3.4-5.8h-1.3v-.1Z" />
      <path d="M24.6 14.6c1-1.6 1.2-3.4.6-5.2 1.5.9 2.4 2.3 2.6 4.2 1.4-.4 2.6-.3 3.6.3-.8 1.6-2.4 2.3-4.6 2.1l-2.2-1.4Z" opacity=".85" />
    </g>
  ),

  /* Elephant head */
  postgresql: (
    <g>
      <circle cx="16" cy="13.4" r="8" />
      <circle cx="6.4" cy="12.2" r="4.2" />
      <circle cx="25.6" cy="12.2" r="4.2" />
      <path
        d="M13.2 20.6c-.2 3.4.6 6 2.4 7.8"
        {...line}
        strokeWidth="3.6"
      />
      <path d="M20.4 20.4c.3 2.2.1 4-.6 5.4" {...line} strokeWidth="2.6" />
    </g>
  ),

  /* Database cylinder */
  mysql: (
    <g>
      <path d="M16 2.8c-6.1 0-10.6 1.9-10.6 4.3v17.8c0 2.4 4.5 4.3 10.6 4.3s10.6-1.9 10.6-4.3V7.1c0-2.4-4.5-4.3-10.6-4.3Zm0 2.2c5 0 8.4 1.4 8.4 2.1s-3.4 2.1-8.4 2.1-8.4-1.4-8.4-2.1S11 5 16 5Z" />
      <path
        d="M7.6 13.2c1.9 1.2 5 1.9 8.4 1.9s6.5-.7 8.4-1.9M7.6 19.4c1.9 1.2 5 1.9 8.4 1.9s6.5-.7 8.4-1.9"
        {...line}
        strokeWidth="2"
      />
    </g>
  ),

  /* Stacked data layers */
  redis: (
    <g>
      <path d="M16 2.6 30.4 8.4 16 14.2 1.6 8.4 16 2.6Zm0 3.2L8.6 8.4 16 11.2l7.4-2.8L16 5.8Z" />
      <path d="M1.6 12.6 16 18.4l14.4-5.8v3.2L16 21.6 1.6 15.8v-3.2Z" opacity=".72" />
      <path d="M1.6 19.8 16 25.6l14.4-5.8v3.2L16 28.8 1.6 23v-3.2Z" opacity=".45" />
    </g>
  ),
} as const;

export type TechName = keyof typeof marks;

export default function TechMark({
  name,
  size = 32,
  ...rest
}: SVGProps<SVGSVGElement> & { name: TechName; size?: number }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {marks[name]}
    </svg>
  );
}
