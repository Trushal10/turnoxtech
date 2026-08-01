import Link from "next/link";

import Icon from "../ui/Icon";
import { Eyebrow } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import type { IconName } from "../ui/Icon";

export default function PageHero({
  eyebrow,
  eyebrowIcon,
  title,
  highlight,
  description,
  breadcrumb,
  children,
}: {
  eyebrow: string;
  eyebrowIcon?: IconName;
  title: string;
  highlight?: string;
  description: string;
  breadcrumb: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 md:pb-20 md:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-brand-tint/60 via-white to-white" />
        <div className="bg-linegrid absolute inset-x-0 top-0 h-[420px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
        <div className="animate-drift absolute -left-24 -top-8 h-80 w-80 rounded-full bg-brand/12 blur-[110px]" />
        <div
          className="animate-drift absolute -right-16 top-24 h-80 w-80 rounded-full bg-accent/12 blur-[110px]"
          style={{ animationDelay: "-7s" }}
        />
      </div>

      <div className="container">
        <Reveal>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-brand">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <Icon name="chevronDown" size={14} className="-rotate-90 text-muted-2" />
              </li>
              <li className="font-medium text-ink" aria-current="page">
                {breadcrumb}
              </li>
            </ol>
          </nav>
        </Reveal>

        <div className="mt-8 max-w-3xl">
          <Reveal delay={0.05}>
            <Eyebrow icon={eyebrowIcon}>{eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-[clamp(2.25rem,1.5rem+3.4vw,3.75rem)] font-extrabold leading-[1.05] text-ink">
              {title}
              {highlight ? (
                <>
                  {" "}
                  <span className="text-gradient">{highlight}</span>
                </>
              ) : null}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 text-[17px] leading-relaxed text-muted md:text-lg">
              {description}
            </p>
          </Reveal>

          {children ? <Reveal delay={0.22}>{children}</Reveal> : null}
        </div>
      </div>
    </section>
  );
}
