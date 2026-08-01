import type { Metadata } from "next";

import PageHero from "@/app/components/sections/PageHero";
import WhyUs from "@/app/components/sections/WhyUs";
import Process from "@/app/components/sections/Process";
import Stats from "@/app/components/sections/Stats";
import Technologies from "@/app/components/sections/Technologies";
import CtaBanner from "@/app/components/sections/CtaBanner";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Icon from "@/app/components/ui/Icon";
import { Reveal, RevealGroup } from "@/app/components/ui/Reveal";
import RevealItem from "@/app/components/ui/RevealItem";
import { ButtonLink } from "@/app/components/ui/Button";
import { company } from "@/lib/data/siteData";

export const metadata: Metadata = {
  title: "About us",
  description:
    "TrunoxTech is an AI-first product engineering studio in Ahmedabad. Meet the team behind the AI software, SaaS platforms and automation we build for clients across four countries.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About TrunoxTech",
    description:
      "An AI-first product engineering studio building software that ships fast and scales cleanly.",
    url: "/about",
  },
};

const values = [
  {
    icon: "target" as const,
    title: "Outcomes over output",
    body: "We measure a project by what changed in your business, not by how many tickets closed. If a feature won't move the metric, we'll say so before building it.",
  },
  {
    icon: "chat" as const,
    title: "Say the hard thing early",
    body: "Bad news doesn't improve with age. If a deadline is at risk or an approach isn't working, you hear it in the weekly call, not in the retrospective.",
  },
  {
    icon: "stack" as const,
    title: "Leave it maintainable",
    body: "Every system ships with documentation, tests and a handover session. Success is your team being able to run it without us.",
  },
  {
    icon: "sparkles" as const,
    title: "Use AI where it earns it",
    body: "AI is a tool, not a pitch. We build it in when retrieval, classification or generation genuinely beats the deterministic alternative — and we say when it doesn't.",
  },
];

const timeline = [
  {
    year: "2021",
    title: "Two engineers, one room",
    body: "Started building custom web systems for local manufacturers in Ahmedabad. The first client is still with us.",
  },
  {
    year: "2022",
    title: "First SaaS platform",
    body: "Shipped a multi-tenant LMS now used by 40 institutions — and learned what multi-tenancy really costs when it's bolted on late.",
  },
  {
    year: "2023",
    title: "AI moves into production",
    body: "Went from AI experiments to LLM systems with evaluation harnesses, guardrails and real cost budgets running under live traffic.",
  },
  {
    year: "2024",
    title: "Across four countries",
    body: "Expanded to clients in the UK, US and UAE, with a delivery process built around async updates and a four-hour daily overlap.",
  },
  {
    year: "2025",
    title: "Agents and automation",
    body: "Autonomous agent systems became a core practice — tool-calling workflows with human review wherever the stakes justify it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="About TrunoxTech"
        eyebrowIcon="users"
        title="A small team that builds"
        highlight="like a much larger one"
        description="We're an AI-first product engineering studio in Ahmedabad, working with founders and operations leads across India, the UK, the US and the UAE. No layers, no account managers — you talk to the people writing the code."
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="lg" icon="arrowRight">
            Work with us
          </ButtonLink>
          <ButtonLink href="/portfolio" size="lg" variant="secondary" icon="arrowUpRight">
            See our work
          </ButtonLink>
        </div>
      </PageHero>

      {/* ---- Story ------------------------------------------------------ */}
      <section className="section-y relative">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                align="left"
                eyebrow="Our story"
                eyebrowIcon="compass"
                title="Founded on a simple"
                highlight="frustration"
              />
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <div className="space-y-5 text-[17px] leading-relaxed text-muted">
                  <p>
                    {company.name} started in {company.founded} because software
                    projects kept failing the same predictable way: a polished
                    pitch, a junior team behind it, and a codebase nobody wanted
                    to inherit six months later.
                  </p>
                  <p>
                    We built the opposite. Senior engineers on every project.
                    Two-week cycles with something clickable at the end of each
                    one. A written decision record for anything you'd have to
                    live with for years. And an honest answer when the right call
                    is to build less.
                  </p>
                  <p className="font-medium text-ink">
                    Four years in, 92% of our clients come back for a second
                    project. That's the number we actually watch.
                  </p>
                </div>
              </Reveal>

              <RevealGroup className="mt-12">
                {timeline.map((entry, i) => (
                  <RevealItem key={entry.year}>
                    <div className="group relative flex gap-6 pb-8 last:pb-0">
                      {i < timeline.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="absolute bottom-0 left-[27px] top-14 w-px bg-hairline"
                        />
                      ) : null}

                      <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-hairline bg-white font-display text-[13px] font-extrabold text-brand shadow-xs transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-0.5 group-hover:border-brand/25 group-hover:shadow-soft">
                        {entry.year}
                      </span>

                      <div className="pt-1.5">
                        <h3 className="font-display text-[17px] font-bold text-ink">
                          {entry.title}
                        </h3>
                        <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
                          {entry.body}
                        </p>
                      </div>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* ---- Values ------------------------------------------------------ */}
      <section className="section-y relative overflow-hidden bg-surface">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-dotgrid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />
        </div>

        <div className="container">
          <SectionHeading
            eyebrow="How we operate"
            eyebrowIcon="shield"
            title="Four rules we don't"
            highlight="bend on"
            description="Written down early, because principles you only state after a problem aren't principles."
          />

          <RevealGroup className="mt-16 grid gap-5 md:grid-cols-2">
            {values.map((value) => (
              <RevealItem key={value.title}>
                <article className="spotlight lift group relative h-full overflow-hidden rounded-card border border-hairline bg-white p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-hairline bg-surface text-brand transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-1 group-hover:border-brand/25 group-hover:bg-brand-tint">
                    <Icon name={value.icon} size={24} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {value.body}
                  </p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <WhyUs />
      <Process />
      <Technologies />
      <CtaBanner />
    </>
  );
}
