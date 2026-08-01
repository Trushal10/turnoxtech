import type { CaseStudy } from "@/lib/data/siteData";

/**
 * Vector product mockups for the case-study cards.
 *
 * Purpose-drawn per project type instead of stock photography — they stay
 * sharp at any size, weigh ~1KB each, and read as the product rather than as
 * a generic "team at laptops" image.
 */

const accents: Record<
  CaseStudy["accent"],
  { from: string; to: string; solid: string; wash: string }
> = {
  blue: { from: "#3b82f6", to: "#6366f1", solid: "#2563eb", wash: "#eff6ff" },
  violet: { from: "#8b5cf6", to: "#d946ef", solid: "#7c3aed", wash: "#f5f3ff" },
  teal: { from: "#14b8a6", to: "#0ea5e9", solid: "#0d9488", wash: "#f0fdfa" },
  amber: { from: "#f59e0b", to: "#f43f5e", solid: "#d97706", wash: "#fffbeb" },
};

export default function CaseThumb({
  variant,
  accent,
  className = "",
}: {
  variant: CaseStudy["thumb"];
  accent: CaseStudy["accent"];
  className?: string;
}) {
  const c = accents[accent];
  const id = `${variant}-${accent}`;

  return (
    <svg
      viewBox="0 0 400 260"
      className={className}
      role="presentation"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c.from} />
          <stop offset="100%" stopColor={c.to} />
        </linearGradient>
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c.wash} />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>

      <rect width="400" height="260" fill={`url(#bg-${id})`} />
      <circle cx="352" cy="34" r="76" fill={`url(#g-${id})`} opacity=".12" />
      <circle cx="46" cy="234" r="60" fill={`url(#g-${id})`} opacity=".1" />

      {variant === "dashboard" && (
        <g>
          <rect x="34" y="30" width="332" height="200" rx="14" fill="#fff" />
          <rect
            x="34"
            y="30"
            width="332"
            height="200"
            rx="14"
            fill="none"
            stroke="#e2e8f0"
          />
          <rect x="34" y="30" width="332" height="30" rx="14" fill="#f8fafc" />
          <rect x="34" y="46" width="332" height="14" fill="#f8fafc" />
          <circle cx="50" cy="45" r="3.5" fill="#e2e8f0" />
          <circle cx="61" cy="45" r="3.5" fill="#e2e8f0" />
          <circle cx="72" cy="45" r="3.5" fill="#e2e8f0" />
          <line x1="34" y1="60" x2="366" y2="60" stroke="#e2e8f0" />

          {/* sidebar */}
          <rect x="46" y="74" width="70" height="144" rx="8" fill="#f8fafc" />
          <rect x="56" y="86" width="42" height="6" rx="3" fill={c.solid} opacity=".7" />
          <rect x="56" y="102" width="50" height="5" rx="2.5" fill="#e2e8f0" />
          <rect x="56" y="116" width="38" height="5" rx="2.5" fill="#e2e8f0" />
          <rect x="56" y="130" width="46" height="5" rx="2.5" fill="#e2e8f0" />
          <rect x="56" y="144" width="34" height="5" rx="2.5" fill="#e2e8f0" />

          {/* KPI tiles */}
          <rect x="128" y="74" width="72" height="44" rx="9" fill={c.wash} />
          <rect x="138" y="86" width="30" height="7" rx="3.5" fill={c.solid} />
          <rect x="138" y="100" width="44" height="5" rx="2.5" fill="#cbd5e1" />
          <rect x="210" y="74" width="72" height="44" rx="9" fill="#f8fafc" />
          <rect x="220" y="86" width="26" height="7" rx="3.5" fill="#94a3b8" />
          <rect x="220" y="100" width="44" height="5" rx="2.5" fill="#e2e8f0" />
          <rect x="292" y="74" width="62" height="44" rx="9" fill="#f8fafc" />
          <rect x="302" y="86" width="24" height="7" rx="3.5" fill="#94a3b8" />
          <rect x="302" y="100" width="38" height="5" rx="2.5" fill="#e2e8f0" />

          {/* chart */}
          <rect x="128" y="128" width="226" height="90" rx="10" fill="#fff" stroke="#e2e8f0" />
          <path
            d="M144 198c22-6 30-34 52-40s30 22 52 12 34-40 62-46"
            fill="none"
            stroke={`url(#g-${id})`}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M144 198c22-6 30-34 52-40s30 22 52 12 34-40 62-46v82H144z"
            fill={`url(#g-${id})`}
            opacity=".1"
          />
          {[152, 178, 204, 230, 256, 282, 308, 334].map((x) => (
            <line key={x} x1={x} y1="140" x2={x} y2="206" stroke="#f1f5f9" />
          ))}
        </g>
      )}

      {variant === "chat" && (
        <g>
          <rect x="52" y="26" width="296" height="208" rx="16" fill="#fff" stroke="#e2e8f0" />
          <rect x="52" y="26" width="296" height="40" rx="16" fill="#f8fafc" />
          <rect x="52" y="52" width="296" height="14" fill="#f8fafc" />
          <line x1="52" y1="66" x2="348" y2="66" stroke="#e2e8f0" />
          <circle cx="76" cy="46" r="11" fill={`url(#g-${id})`} />
          <path
            d="M76 40.5l1.9 5.2 5.2 1.9-5.2 1.9-1.9 5.2-1.9-5.2-5.2-1.9 5.2-1.9z"
            fill="#fff"
          />
          <rect x="96" y="41" width="72" height="6" rx="3" fill="#334155" />
          <rect x="96" y="52" width="46" height="5" rx="2.5" fill="#cbd5e1" />

          {/* incoming */}
          <rect x="72" y="84" width="150" height="34" rx="12" fill="#f1f5f9" />
          <rect x="84" y="94" width="112" height="5" rx="2.5" fill="#cbd5e1" />
          <rect x="84" y="105" width="76" height="5" rx="2.5" fill="#e2e8f0" />

          {/* outgoing */}
          <rect x="152" y="128" width="176" height="44" rx="12" fill={`url(#g-${id})`} />
          <rect x="166" y="140" width="140" height="5" rx="2.5" fill="#fff" opacity=".9" />
          <rect x="166" y="151" width="112" height="5" rx="2.5" fill="#fff" opacity=".65" />
          <rect x="166" y="162" width="60" height="5" rx="2.5" fill="#fff" opacity=".45" />

          {/* typing */}
          <rect x="72" y="182" width="66" height="26" rx="12" fill="#f1f5f9" />
          <circle cx="90" cy="195" r="3.4" fill="#94a3b8" />
          <circle cx="104" cy="195" r="3.4" fill="#cbd5e1" />
          <circle cx="118" cy="195" r="3.4" fill="#e2e8f0" />

          {/* composer */}
          <rect x="72" y="214" width="256" height="0" rx="0" fill="none" />
          <rect x="72" y="210" width="212" height="14" rx="7" fill="#f8fafc" stroke="#e2e8f0" />
          <circle cx="308" cy="217" r="11" fill={c.solid} />
          <path
            d="M304 217h8m-3-3 3 3-3 3"
            stroke="#fff"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      )}

      {variant === "mobile" && (
        <g>
          {/* back phone */}
          <rect x="228" y="46" width="104" height="188" rx="20" fill="#fff" stroke="#e2e8f0" />
          <rect x="240" y="66" width="80" height="52" rx="10" fill={c.wash} />
          <rect x="240" y="128" width="80" height="8" rx="4" fill="#e2e8f0" />
          <rect x="240" y="144" width="58" height="8" rx="4" fill="#f1f5f9" />
          <rect x="240" y="164" width="80" height="8" rx="4" fill="#f1f5f9" />

          {/* front phone */}
          <rect x="84" y="24" width="128" height="212" rx="24" fill="#fff" stroke="#e2e8f0" />
          <rect x="92" y="32" width="112" height="196" rx="18" fill="#f8fafc" />
          <rect x="128" y="38" width="40" height="7" rx="3.5" fill="#e2e8f0" />

          {/* map-ish header */}
          <rect x="102" y="56" width="92" height="66" rx="12" fill={`url(#g-${id})`} opacity=".16" />
          <path
            d="M110 108c14-4 18-30 34-34s22 20 40 8"
            fill="none"
            stroke={c.solid}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="110" cy="108" r="4" fill={c.solid} />
          <circle cx="184" cy="82" r="4" fill={c.solid} />

          {/* list rows */}
          <rect x="102" y="132" width="92" height="26" rx="9" fill="#fff" stroke="#e2e8f0" />
          <circle cx="116" cy="145" r="7" fill={c.wash} />
          <rect x="130" y="140" width="42" height="4.5" rx="2.25" fill="#cbd5e1" />
          <rect x="130" y="149" width="28" height="4" rx="2" fill="#e2e8f0" />

          <rect x="102" y="164" width="92" height="26" rx="9" fill="#fff" stroke="#e2e8f0" />
          <circle cx="116" cy="177" r="7" fill="#f1f5f9" />
          <rect x="130" y="172" width="36" height="4.5" rx="2.25" fill="#cbd5e1" />
          <rect x="130" y="181" width="46" height="4" rx="2" fill="#e2e8f0" />

          {/* cta */}
          <rect x="102" y="198" width="92" height="20" rx="10" fill={`url(#g-${id})`} />
          <rect x="128" y="206" width="40" height="4.5" rx="2.25" fill="#fff" opacity=".9" />
        </g>
      )}

      {variant === "commerce" && (
        <g>
          <rect x="30" y="28" width="340" height="204" rx="14" fill="#fff" stroke="#e2e8f0" />
          <rect x="30" y="28" width="340" height="34" rx="14" fill="#f8fafc" />
          <rect x="30" y="48" width="340" height="14" fill="#f8fafc" />
          <line x1="30" y1="62" x2="370" y2="62" stroke="#e2e8f0" />
          <rect x="46" y="41" width="46" height="7" rx="3.5" fill={c.solid} />
          <rect x="112" y="42" width="30" height="5" rx="2.5" fill="#cbd5e1" />
          <rect x="152" y="42" width="30" height="5" rx="2.5" fill="#e2e8f0" />
          <rect x="270" y="38" width="84" height="14" rx="7" fill="#f1f5f9" />
          <circle cx="284" cy="45" r="3" fill="#94a3b8" />

          {/* hero product */}
          <rect x="46" y="78" width="150" height="138" rx="12" fill={`url(#g-${id})`} opacity=".14" />
          <circle cx="121" cy="134" r="38" fill={`url(#g-${id})`} opacity=".55" />
          <rect x="66" y="184" width="76" height="7" rx="3.5" fill="#475569" />
          <rect x="66" y="197" width="48" height="6" rx="3" fill={c.solid} />

          {/* product grid */}
          {[
            [212, 78],
            [294, 78],
            [212, 152],
            [294, 152],
          ].map(([x, y], i) => (
            <g key={i}>
              <rect x={x} y={y} width="62" height="64" rx="10" fill="#fff" stroke="#e2e8f0" />
              <rect
                x={x + 8}
                y={y + 8}
                width="46"
                height="30"
                rx="7"
                fill={i % 2 ? "#f1f5f9" : c.wash}
              />
              <rect x={x + 8} y={y + 44} width="34" height="5" rx="2.5" fill="#cbd5e1" />
              <rect x={x + 8} y={y + 53} width="22" height="5" rx="2.5" fill={c.solid} opacity=".6" />
            </g>
          ))}
        </g>
      )}
    </svg>
  );
}
