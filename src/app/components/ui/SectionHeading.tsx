import type { ReactNode } from "react";
import Icon, { type IconName } from "./Icon";
import { RevealGroup } from "./Reveal";
import RevealItem from "./RevealItem";

export function Eyebrow({
  children,
  icon,
  tone = "brand",
  className = "",
}: {
  children: ReactNode;
  icon?: IconName;
  tone?: "brand" | "light";
  className?: string;
}) {
  const tones = {
    brand: "border-brand/15 bg-brand-tint text-brand",
    light: "border-white/20 bg-white/10 text-white/90 backdrop-blur-sm",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-pill border px-3.5 py-1.5 font-display text-[13px] font-semibold tracking-tight ${tones[tone]} ${className}`}
    >
      {icon ? <Icon name={icon} size={15} /> : null}
      {children}
    </span>
  );
}

export default function SectionHeading({
  eyebrow,
  eyebrowIcon,
  title,
  highlight,
  description,
  align = "center",
  tone = "brand",
  className = "",
}: {
  eyebrow?: string;
  eyebrowIcon?: IconName;
  title: string;
  /** Rendered after the title in gradient — the emphasised phrase. */
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  tone?: "brand" | "light";
  className?: string;
}) {
  const isCenter = align === "center";
  const light = tone === "light";

  return (
    <RevealGroup
      className={`flex flex-col gap-5 ${
        isCenter ? "mx-auto max-w-3xl items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow ? (
        <RevealItem>
          <Eyebrow icon={eyebrowIcon} tone={tone}>
            {eyebrow}
          </Eyebrow>
        </RevealItem>
      ) : null}

      <RevealItem>
        <h2
          className={`text-[clamp(2rem,1.35rem+2.6vw,3.25rem)] font-bold leading-[1.08] ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title}
          {highlight ? (
            <>
              {" "}
              <span className={light ? "text-white/70" : "text-gradient"}>
                {highlight}
              </span>
            </>
          ) : null}
        </h2>
      </RevealItem>

      {description ? (
        <RevealItem className={isCenter ? "" : "max-w-2xl"}>
          <p
            className={`max-w-2xl text-[17px] leading-relaxed ${
              light ? "text-white/70" : "text-muted"
            }`}
          >
            {description}
          </p>
        </RevealItem>
      ) : null}
    </RevealGroup>
  );
}
