import type { SVGProps } from "react";

/**
 * Inline SVG icon set.
 *
 * Everything ships in the bundle as path data — no icon-font, no runtime
 * fetch from an icon CDN, nothing to lazy-load. Stroke icons share a 24×24
 * grid and 1.6 stroke so they stay optically consistent at every size.
 */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const paths = {
  /* --- Services / features ------------------------------------------- */
  sparkles: (
    <g {...stroke}>
      <path d="M12 3.5 13.7 8.3 18.5 10 13.7 11.7 12 16.5 10.3 11.7 5.5 10 10.3 8.3Z" />
      <path d="M18.5 15.5 19.3 17.7 21.5 18.5 19.3 19.3 18.5 21.5 17.7 19.3 15.5 18.5 17.7 17.7Z" />
      <path d="M5.5 3 6 4.5 7.5 5 6 5.5 5.5 7 5 5.5 3.5 5 5 4.5Z" />
    </g>
  ),
  layers: (
    <g {...stroke}>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
      <path d="m4 12 8 4.2 8-4.2" />
      <path d="m4 16.4 8 4.2 8-4.2" />
    </g>
  ),
  cube: (
    <g {...stroke}>
      <path d="M12 3.2 20 7.4v9.2L12 20.8 4 16.6V7.4l8-4.2Z" />
      <path d="M4 7.4 12 11.6l8-4.2M12 11.6v9.2" />
    </g>
  ),
  browser: (
    <g {...stroke}>
      <rect x="3" y="4.5" width="18" height="15" rx="3" />
      <path d="M3 9.2h18" />
      <circle cx="6.4" cy="6.9" r=".7" fill="currentColor" stroke="none" />
      <circle cx="8.9" cy="6.9" r=".7" fill="currentColor" stroke="none" />
    </g>
  ),
  phone: (
    <g {...stroke}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="3" />
      <path d="M10.5 5.6h3" />
      <path d="M10.8 18.4h2.4" />
    </g>
  ),
  palette: (
    <g {...stroke}>
      <path d="M12 3.4a8.6 8.6 0 0 0 0 17.2c1.3 0 1.9-.9 1.9-1.8 0-1.2-1-1.6-1-2.7 0-.8.7-1.4 1.6-1.4h1.6a4.5 4.5 0 0 0 4.5-4.5C20.6 6.4 16.7 3.4 12 3.4Z" />
      <circle cx="8.2" cy="9.4" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="7.4" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="7.6" cy="13.6" r="1.1" fill="currentColor" stroke="none" />
    </g>
  ),
  cloud: (
    <g {...stroke}>
      <path d="M7.2 18.5a4.2 4.2 0 0 1-.5-8.37 5.3 5.3 0 0 1 10.16-1.06A3.9 3.9 0 0 1 17.4 18.5Z" />
    </g>
  ),
  workflow: (
    <g {...stroke}>
      <rect x="3" y="3.6" width="6.4" height="6.4" rx="2" />
      <rect x="14.6" y="14" width="6.4" height="6.4" rx="2" />
      <path d="M6.2 10v4.6a2.6 2.6 0 0 0 2.6 2.6h5.8" />
      <path d="m12.4 15.2 2 2-2 2" />
    </g>
  ),
  plug: (
    <g {...stroke}>
      <path d="M9 3.2v5M15 3.2v5" />
      <path d="M6.4 8.2h11.2v3.1a5.6 5.6 0 0 1-11.2 0Z" />
      <path d="M12 16.9v3.9" />
    </g>
  ),
  robot: (
    <g {...stroke}>
      <rect x="3.6" y="7.6" width="16.8" height="12.2" rx="4" />
      <path d="M12 3.2v4.4" />
      <circle cx="12" cy="2.6" r="1.2" />
      <circle cx="8.9" cy="13.2" r="1.25" fill="currentColor" stroke="none" />
      <circle cx="15.1" cy="13.2" r="1.25" fill="currentColor" stroke="none" />
      <path d="M9.6 16.8h4.8" />
    </g>
  ),

  /* --- Differentiators ------------------------------------------------ */
  bolt: (
    <g {...stroke}>
      <path d="M13.2 2.6 5.4 13.4h5.3l-.9 8 7.8-10.8h-5.3l.9-8Z" />
    </g>
  ),
  chart: (
    <g {...stroke}>
      <path d="M4 20h16" />
      <path d="M6.6 20v-5.4M11 20V8.6M15.4 20v-8M19.8 20V4.8" />
    </g>
  ),
  stack: (
    <g {...stroke}>
      <rect x="3.4" y="3.6" width="7" height="7" rx="2.2" />
      <rect x="13.6" y="3.6" width="7" height="7" rx="2.2" />
      <rect x="3.4" y="13.4" width="7" height="7" rx="2.2" />
      <rect x="13.6" y="13.4" width="7" height="7" rx="2.2" />
    </g>
  ),
  chat: (
    <g {...stroke}>
      <path d="M20.4 12.4c0 4-3.8 7.2-8.4 7.2a9.7 9.7 0 0 1-2.8-.4L4 20.8l1.5-3.9a6.9 6.9 0 0 1-1.9-4.5c0-4 3.8-7.2 8.4-7.2s8.4 3.2 8.4 7.2Z" />
      <path d="M9.2 12.2h5.6M9.2 9.4h3.4" />
    </g>
  ),
  shield: (
    <g {...stroke}>
      <path d="M12 2.8 20 6v6c0 4.4-3.2 7.9-8 9.2-4.8-1.3-8-4.8-8-9.2V6l8-3.2Z" />
      <path d="m9 12 2.2 2.2L15.4 10" />
    </g>
  ),

  /* --- Process -------------------------------------------------------- */
  compass: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.4 8.6-2 5.4-5.4 2 2-5.4 5.4-2Z" />
    </g>
  ),
  code: (
    <g {...stroke}>
      <path d="m8.4 8.6-4.6 3.4 4.6 3.4M15.6 8.6l4.6 3.4-4.6 3.4M13.6 5.2l-3.2 13.6" />
    </g>
  ),
  check: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.2 12.2 2.6 2.6 5-5.4" />
    </g>
  ),
  rocket: (
    <g {...stroke}>
      <path d="M12 2.6c3.3 2.2 5 5.6 5 9.4l-2.6 3.4H9.6L7 12c0-3.8 1.7-7.2 5-9.4Z" />
      <circle cx="12" cy="10" r="1.9" />
      <path d="M9.6 15.4c-1.6.9-2.4 2.6-2.4 5 2.2-.3 3.7-1.2 4.5-2.6M14.4 15.4c1.6.9 2.4 2.6 2.4 5-2.2-.3-3.7-1.2-4.5-2.6" />
    </g>
  ),

  /* --- Industries ----------------------------------------------------- */
  heart: (
    <g {...stroke}>
      <path d="M12 20.4C6.9 17.2 4 14.2 4 10.6a4.2 4.2 0 0 1 8-1.8 4.2 4.2 0 0 1 8 1.8c0 3.6-2.9 6.6-8 9.8Z" />
    </g>
  ),
  factory: (
    <g {...stroke}>
      <path d="M3.6 20.4V11l5.4 3.2V11l5.4 3.2V6.4h5.9v14H3.6Z" />
      <path d="M7.4 17.4h1.8M12 17.4h1.8M16.6 17.4h1.8" />
    </g>
  ),
  bank: (
    <g {...stroke}>
      <path d="M3.4 9.6 12 4.4l8.6 5.2" />
      <path d="M5.6 9.8v8.4M10 9.8v8.4M14 9.8v8.4M18.4 9.8v8.4" />
      <path d="M3.4 20.4h17.2" />
    </g>
  ),
  book: (
    <g {...stroke}>
      <path d="M4 4.6h5.2A2.8 2.8 0 0 1 12 7.4v12a2.4 2.4 0 0 0-2.4-2.4H4V4.6Z" />
      <path d="M20 4.6h-5.2A2.8 2.8 0 0 0 12 7.4v12a2.4 2.4 0 0 1 2.4-2.4H20V4.6Z" />
    </g>
  ),
  building: (
    <g {...stroke}>
      <path d="M4.6 20.4V5.2A1.6 1.6 0 0 1 6.2 3.6h7a1.6 1.6 0 0 1 1.6 1.6v15.2" />
      <path d="M14.8 10.4h3.4a1.6 1.6 0 0 1 1.6 1.6v8.4" />
      <path d="M3.4 20.4h17.2M8 7.6h3.4M8 11.6h3.4M8 15.6h3.4" />
    </g>
  ),
  truck: (
    <g {...stroke}>
      <path d="M3.4 6.6h9.8v9.8H3.4z" />
      <path d="M13.2 10h3.6l3.8 3.2v3.2h-7.4z" />
      <circle cx="7.4" cy="18" r="1.9" />
      <circle cx="16.8" cy="18" r="1.9" />
    </g>
  ),
  bag: (
    <g {...stroke}>
      <path d="M5.4 7.6h13.2l1 12.8H4.4l1-12.8Z" />
      <path d="M8.8 9.6V6.8a3.2 3.2 0 0 1 6.4 0v2.8" />
    </g>
  ),
  cart: (
    <g {...stroke}>
      <path d="M3 4.4h2.4l2.2 10.4h9.6l2.2-7.6H6.4" />
      <circle cx="9" cy="19" r="1.6" />
      <circle cx="16.6" cy="19" r="1.6" />
    </g>
  ),

  /* --- Interface ------------------------------------------------------ */
  arrowRight: (
    <g {...stroke}>
      <path d="M4.8 12h14.4M13.4 6.4 19.2 12l-5.8 5.6" />
    </g>
  ),
  arrowUpRight: (
    <g {...stroke}>
      <path d="M7 17 17 7M8.6 7H17v8.4" />
    </g>
  ),
  arrowUp: (
    <g {...stroke}>
      <path d="M12 19.2V4.8M6.4 10.6 12 4.8l5.6 5.8" />
    </g>
  ),
  plus: (
    <g {...stroke}>
      <path d="M12 5.6v12.8M5.6 12h12.8" />
    </g>
  ),
  minus: (
    <g {...stroke}>
      <path d="M5.6 12h12.8" />
    </g>
  ),
  chevronDown: (
    <g {...stroke}>
      <path d="m6.4 9.6 5.6 5.2 5.6-5.2" />
    </g>
  ),
  menu: (
    <g {...stroke}>
      <path d="M4 7.4h16M4 12h16M4 16.6h11" />
    </g>
  ),
  close: (
    <g {...stroke}>
      <path d="M6.4 6.4 17.6 17.6M17.6 6.4 6.4 17.6" />
    </g>
  ),
  mail: (
    <g {...stroke}>
      <rect x="3" y="5.2" width="18" height="13.6" rx="3" />
      <path d="m4.4 8 6.4 4.5a2.2 2.2 0 0 0 2.4 0L19.6 8" />
    </g>
  ),
  phoneCall: (
    <g {...stroke}>
      <path d="M7.2 3.6 9.6 8l-1.9 2a12 12 0 0 0 4.3 4.3l2-1.9 4.4 2.4v3.1a1.9 1.9 0 0 1-2.1 1.9C9.4 19 5 14.6 4.2 5.7A1.9 1.9 0 0 1 6.1 3.6Z" />
    </g>
  ),
  mapPin: (
    <g {...stroke}>
      <path d="M12 21.2c4-4.2 6-7.4 6-9.9a6 6 0 1 0-12 0c0 2.5 2 5.7 6 9.9Z" />
      <circle cx="12" cy="11" r="2.3" />
    </g>
  ),
  clock: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.2V12l3.2 2" />
    </g>
  ),
  users: (
    <g {...stroke}>
      <circle cx="9.6" cy="8.4" r="3.4" />
      <path d="M3.6 19.6a6 6 0 0 1 12 0" />
      <path d="M16.2 5.4a3.4 3.4 0 0 1 0 6.6M17.6 14.4a6 6 0 0 1 3 5.2" />
    </g>
  ),
  target: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="8.6" />
      <circle cx="12" cy="12" r="4.8" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </g>
  ),
  quote: (
    <g fill="currentColor">
      <path d="M9.4 5.6c-3.2 1.5-5 4.2-5 7.9 0 3 1.7 4.9 4 4.9 2 0 3.5-1.5 3.5-3.5 0-1.9-1.3-3.3-3.1-3.3h-.5c.2-1.6 1.3-3 3-3.9l-1.9-2.1ZM19 5.6c-3.2 1.5-5 4.2-5 7.9 0 3 1.7 4.9 4 4.9 2 0 3.5-1.5 3.5-3.5 0-1.9-1.3-3.3-3.1-3.3h-.5c.2-1.6 1.3-3 3-3.9L19 5.6Z" />
    </g>
  ),
  star: (
    <g fill="currentColor">
      <path d="m12 3.4 2.7 5.5 6 .9-4.35 4.24 1.03 6-5.38-2.83-5.38 2.83 1.03-6L3.3 9.8l6-.9L12 3.4Z" />
    </g>
  ),
  shieldCheck: (
    <g {...stroke}>
      <path d="M12 2.8 20 6v6c0 4.4-3.2 7.9-8 9.2-4.8-1.3-8-4.8-8-9.2V6l8-3.2Z" />
    </g>
  ),

  /* --- Social (filled brand marks) ------------------------------------ */
  linkedin: (
    <g fill="currentColor">
      <path d="M4.8 8.6h3.3v11.2H4.8V8.6ZM6.45 3.4a1.95 1.95 0 1 1 0 3.9 1.95 1.95 0 0 1 0-3.9ZM10.5 8.6h3.16v1.54h.05c.44-.83 1.52-1.71 3.13-1.71 3.34 0 3.96 2.2 3.96 5.06v5.82h-3.3v-5.16c0-1.23-.02-2.81-1.71-2.81-1.72 0-1.98 1.34-1.98 2.72v5.25h-3.3V8.6Z" />
    </g>
  ),
  github: (
    <g fill="currentColor">
      <path d="M12 2.4a9.6 9.6 0 0 0-3.04 18.71c.48.09.66-.21.66-.46l-.01-1.62c-2.67.58-3.23-1.29-3.23-1.29-.44-1.11-1.07-1.4-1.07-1.4-.87-.6.07-.59.07-.59.96.07 1.47 1 1.47 1 .86 1.47 2.25 1.04 2.8.8.09-.62.34-1.04.61-1.28-2.13-.24-4.37-1.07-4.37-4.75 0-1.05.37-1.9.99-2.58-.1-.24-.43-1.22.09-2.54 0 0 .81-.26 2.64.98a9.2 9.2 0 0 1 4.81 0c1.83-1.24 2.64-.98 2.64-.98.52 1.32.19 2.3.1 2.54.62.68.98 1.53.98 2.58 0 3.69-2.25 4.5-4.39 4.74.35.3.65.88.65 1.78l-.01 2.64c0 .25.18.55.67.46A9.6 9.6 0 0 0 12 2.4Z" />
    </g>
  ),
  x: (
    <g fill="currentColor">
      <path d="M17.2 3.6h3.1l-6.77 7.74L21.5 20.4h-6.23l-4.88-6.38-5.58 6.38H1.7l7.24-8.28L2.2 3.6h6.39l4.41 5.83L17.2 3.6Zm-1.09 14.94h1.72L7.97 5.36H6.13l9.98 13.18Z" />
    </g>
  ),
  dribbble: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M5 8.4c4.6.9 9.3-.2 12.6-3.1M3.6 14.2c4.6-1.6 9.6-.3 12.8 3.6M9 3.6c3.2 3.9 5.1 8.7 5.4 16.5" />
    </g>
  ),
} as const;

export type IconName = keyof typeof paths;

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number | string;
  title?: string;
};

export default function Icon({ name, size = 24, title, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
