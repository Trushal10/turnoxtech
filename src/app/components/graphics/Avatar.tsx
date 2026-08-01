const accents = {
  blue: ["#3b82f6", "#6366f1"],
  violet: ["#8b5cf6", "#d946ef"],
  teal: ["#14b8a6", "#0ea5e9"],
  amber: ["#f59e0b", "#f43f5e"],
} as const;

export type AvatarAccent = keyof typeof accents;

function initials(name: string) {
  return name
    .replace(/^(Dr|Mr|Ms|Mrs)\.?\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

/**
 * Gradient monogram avatar. Deterministic from the person's name, so
 * testimonials get consistent identity without shipping photo assets or
 * leaning on generic stock portraits.
 */
export default function Avatar({
  name,
  accent = "blue",
  size = 48,
  className = "",
}: {
  name: string;
  accent?: AvatarAccent;
  size?: number;
  className?: string;
}) {
  const [from, to] = accents[accent];
  const id = `av-${name.replace(/\W/g, "")}-${accent}`;

  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={name}
      focusable="false"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="16" fill={`url(#${id})`} />
      <circle cx="38" cy="10" r="12" fill="#fff" opacity=".14" />
      <text
        x="24"
        y="25"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#fff"
        fontSize="17"
        fontWeight="700"
        fontFamily="var(--font-jakarta), system-ui, sans-serif"
        letterSpacing="0.5"
      >
        {initials(name)}
      </text>
    </svg>
  );
}
