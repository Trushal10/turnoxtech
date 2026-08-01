import Link from "next/link";

import { services, type Service } from "@/lib/data/siteData";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import { RevealGroup } from "../ui/Reveal";
import RevealItem from "../ui/RevealItem";
import TiltCard from "../ui/TiltCard";
import { ButtonLink } from "../ui/Button";

function ServiceCard({ service, wide }: { service: Service; wide?: boolean }) {
  const featured = Boolean(service.featured);

  const card = (
    <Link
      href={`/services#${service.id}`}
      className={`spotlight lift group relative flex h-full flex-col overflow-hidden rounded-card border p-7 transition-colors md:p-8 ${
        featured
          ? "border-brand/15 bg-linear-to-br from-brand-tint via-white to-white"
          : "border-hairline bg-white"
      } hover:border-brand/30`}
    >
        {/* Corner glow that grows on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-linear-to-br from-brand/20 to-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        />

        <span
          className={`relative grid h-14 w-14 place-items-center rounded-2xl border transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-1 group-hover:shadow-glow ${
            featured
              ? "border-brand/20 bg-white text-brand shadow-soft"
              : "border-hairline bg-surface text-brand group-hover:border-brand/25 group-hover:bg-white"
          }`}
        >
          <Icon name={service.icon} size={26} />
        </span>

        <h3 className="relative mt-6 font-display text-xl font-bold text-ink transition-colors group-hover:text-brand">
          {service.title}
        </h3>

        <p
          className={`relative mt-3 text-[15px] leading-relaxed text-muted ${
            wide ? "max-w-lg" : ""
          }`}
        >
          {service.blurb}
        </p>

        <ul className="relative mt-6 flex flex-wrap gap-2">
          {service.bullets.map((bullet) => (
            <li
              key={bullet}
              className="rounded-pill border border-hairline bg-surface px-3 py-1.5 text-[12.5px] font-medium text-ink-soft transition-colors duration-300 group-hover:border-brand/20 group-hover:bg-brand-tint group-hover:text-brand"
            >
              {bullet}
            </li>
          ))}
        </ul>

        <span className="relative mt-7 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand">
          <span className="bg-linear-to-r from-brand to-brand bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-400 group-hover:bg-[length:100%_1px]">
            Explore service
          </span>
          <Icon
            name="arrowRight"
            size={16}
            className="transition-transform duration-400 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1"
          />
        </span>
      </Link>
  );

  return (
    <RevealItem className={wide ? "sm:col-span-2" : ""}>
      {/* Featured cards get the pointer-tracked tilt; the rest stay static so
          the effect reads as emphasis rather than noise. */}
      {featured ? (
        <TiltCard className="h-full" intensity={5} spotlight={false}>
          {card}
        </TiltCard>
      ) : (
        card
      )}
    </RevealItem>
  );
}

export default function Services() {
  // Bento rhythm: featured services take a double-width slot.
  const layout = services.map((service) => ({
    service,
    wide: service.id === "ai-development" || service.id === "ai-agents",
  }));

  return (
    <section id="services" className="section-y relative">
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          eyebrowIcon="stack"
          title="Ten disciplines,"
          highlight="one engineering team"
          description="No hand-offs between agencies. Strategy, design, engineering and post-launch support sit in the same room and on the same board."
        />

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {layout.map(({ service, wide }) => (
            <ServiceCard key={service.id} service={service} wide={wide} />
          ))}
        </RevealGroup>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-[15px] text-muted">
            Not sure which of these you need? That's what the first call is for.
          </p>
          <ButtonLink href="/contact" variant="secondary" icon="arrowRight">
            Talk through your project
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
