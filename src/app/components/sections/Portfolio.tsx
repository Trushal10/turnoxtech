import { caseStudies, type CaseStudy } from "@/lib/data/siteData";
import CaseThumb from "../graphics/CaseThumb";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import { RevealGroup } from "../ui/Reveal";
import RevealItem from "../ui/RevealItem";
import { ButtonLink } from "../ui/Button";

const accentChip: Record<CaseStudy["accent"], string> = {
  blue: "border-brand/20 bg-brand-tint text-brand",
  violet: "border-accent/20 bg-accent-tint text-accent",
  teal: "border-teal-500/20 bg-teal-50 text-teal-700",
  amber: "border-amber-500/20 bg-amber-50 text-amber-700",
};

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="lift group relative flex h-full flex-col overflow-hidden rounded-card border border-hairline bg-white">
      {/* Thumbnail */}
      <div className="relative aspect-16/10 overflow-hidden border-b border-hairline bg-surface">
        <CaseThumb
          variant={study.thumb}
          accent={study.accent}
          className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
        />

        <span
          className={`absolute left-4 top-4 rounded-pill border px-3 py-1 font-display text-[12px] font-bold backdrop-blur-sm ${accentChip[study.accent]}`}
        >
          {study.industry}
        </span>

        {/* Hover overlay with the live-demo affordance */}
        <div className="absolute inset-0 flex items-end justify-end bg-linear-to-t from-ink/70 via-ink/10 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-pill bg-white px-4 py-2 font-display text-[13px] font-semibold text-ink shadow-lift">
            Visit live site
            <Icon name="arrowUpRight" size={15} />
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-xl font-bold text-ink transition-colors group-hover:text-brand">
          {study.title}
        </h3>
        <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
          {study.summary}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {study.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-hairline bg-surface px-2 py-1 font-mono text-[11.5px] tracking-tight text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Business results */}
        <dl className="mt-6 grid grid-cols-3 gap-2 rounded-2xl border border-hairline bg-surface p-4">
          {study.results.map((result) => (
            <div key={result.label} className="text-center">
              <dt className="sr-only">{result.label}</dt>
              <dd>
                <span className="block font-display text-lg font-extrabold leading-tight text-ink">
                  {result.value}
                </span>
                <span className="mt-0.5 block text-[11.5px] leading-tight text-muted">
                  {result.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <a
          href={study.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-brand transition-colors hover:text-accent"
        >
          <span className="absolute inset-0" aria-hidden="true" />
          Visit live site
          <Icon
            name="arrowUpRight"
            size={16}
            className="transition-transform duration-400 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
          <span className="sr-only">— {study.title} (opens in a new tab)</span>
        </a>
      </div>
    </article>
  );
}

export default function Portfolio({ limit }: { limit?: number }) {
  const items = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <section id="portfolio" className="section-y relative overflow-hidden bg-surface">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-drift absolute right-0 top-24 h-96 w-96 rounded-full bg-accent/8 blur-[120px]" />
      </div>

      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Selected work"
            eyebrowIcon="rocket"
            title="Products running"
            highlight="in production today"
            description="Every project below is live — click through and use it. Each card lists the industry, the stack we shipped on and what the platform does."
            className="lg:max-w-2xl"
          />
          <ButtonLink
            href="/portfolio"
            variant="secondary"
            icon="arrowRight"
            className="shrink-0"
          >
            All case studies
          </ButtonLink>
        </div>

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2">
          {items.map((study) => (
            <RevealItem key={study.slug} className="h-full">
              <CaseStudyCard study={study} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
