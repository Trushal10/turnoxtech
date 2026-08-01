import type { Metadata } from "next";

import PageHero from "@/app/components/sections/PageHero";
import Process from "@/app/components/sections/Process";
import Industries from "@/app/components/sections/Industries";
import Technologies from "@/app/components/sections/Technologies";
import Faq from "@/app/components/sections/Faq";
import CtaBanner from "@/app/components/sections/CtaBanner";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Icon from "@/app/components/ui/Icon";
import { RevealGroup } from "@/app/components/ui/Reveal";
import RevealItem from "@/app/components/ui/RevealItem";
import { ButtonLink } from "@/app/components/ui/Button";
import { services } from "@/lib/data/siteData";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI development, SaaS platforms, custom software, web and mobile apps, UI/UX, cloud, business automation, API integration and AI agents — built by senior engineers at TrunoxTech.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | TrunoxTech",
    description:
      "Ten engineering disciplines under one roof — from AI systems and SaaS platforms to automation and cloud infrastructure.",
    url: "/services",
  },
};

const engagementModels = [
  {
    icon: "rocket" as const,
    title: "Fixed-scope project",
    body: "A defined deliverable, a fixed price and a written timeline. Best when the requirements are clear enough to lock.",
    points: ["Paid discovery first", "Milestone billing", "Change log, no surprises"],
  },
  {
    icon: "users" as const,
    title: "Dedicated team",
    body: "Two to six engineers embedded in your sprints on a monthly retainer. Best for ongoing product work.",
    points: ["Monthly rolling", "Your rituals and repo", "Scale up or down"],
  },
  {
    icon: "compass" as const,
    title: "Technical advisory",
    body: "Architecture review, AI strategy or a second opinion before you commit. Usually two to four weeks.",
    points: ["Written recommendations", "Cost modelling", "No lock-in"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="Services"
        eyebrowIcon="stack"
        title="Everything you need to ship"
        highlight="a serious product"
        description="Ten disciplines, one senior team, one board. We take a product from a first conversation through to something running in production with monitoring on it — and we stay after launch."
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="lg" icon="arrowRight">
            Start Your Project
          </ButtonLink>
          <ButtonLink href="/portfolio" size="lg" variant="secondary" icon="arrowUpRight">
            View Portfolio
          </ButtonLink>
        </div>
      </PageHero>

      {/* ---- Detailed service list --------------------------------------- */}
      <section className="section-y relative">
        <div className="container">
          <RevealGroup className="grid gap-5 md:grid-cols-2">
            {services.map((service, i) => (
              <RevealItem key={service.id}>
                <article
                  id={service.id}
                  className="spotlight lift group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-card border border-hairline bg-white p-8"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-linear-to-br from-brand/15 to-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl border border-hairline bg-surface text-brand transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-1 group-hover:border-brand/25 group-hover:bg-brand-tint group-hover:shadow-glow">
                      <Icon name={service.icon} size={26} />
                    </span>
                    <span className="font-display text-3xl font-extrabold leading-none text-transparent [-webkit-text-stroke:1.5px_var(--color-hairline)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="relative mt-6 font-display text-xl font-bold text-ink">
                    {service.title}
                  </h2>
                  <p className="relative mt-3 text-[15px] leading-relaxed text-muted">
                    {service.blurb}
                  </p>

                  <ul className="relative mt-6 space-y-2.5 border-t border-hairline pt-5">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-2.5 text-[14.5px] text-ink-soft"
                      >
                        <Icon name="check" size={16} className="shrink-0 text-brand" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ---- Engagement models -------------------------------------------- */}
      <section className="section-y relative overflow-hidden bg-surface">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-dotgrid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />
        </div>

        <div className="container">
          <SectionHeading
            eyebrow="Engagement models"
            eyebrowIcon="workflow"
            title="Three ways to"
            highlight="work with us"
            description="Pick the shape that matches your certainty. Most clients start with one and move to another as the product matures."
          />

          <RevealGroup className="mt-16 grid gap-5 lg:grid-cols-3">
            {engagementModels.map((model) => (
              <RevealItem key={model.title}>
                <article className="lift group flex h-full flex-col rounded-card border border-hairline bg-white p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-hairline bg-surface text-brand transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-1 group-hover:border-brand/25 group-hover:bg-brand-tint">
                    <Icon name={model.icon} size={24} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink">
                    {model.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                    {model.body}
                  </p>
                  <ul className="mt-6 space-y-2.5 border-t border-hairline pt-5">
                    {model.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2.5 text-[14.5px] text-ink-soft"
                      >
                        <Icon name="check" size={16} className="shrink-0 text-brand" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Process />
      <Technologies />
      <Industries />
      <Faq />
      <CtaBanner />
    </>
  );
}
