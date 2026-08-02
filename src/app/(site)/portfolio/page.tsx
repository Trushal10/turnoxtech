import type { Metadata } from "next";

import PageHero from "@/app/components/sections/PageHero";
import Stats from "@/app/components/sections/Stats";
import Testimonials from "@/app/components/sections/Testimonials";
import CtaBanner from "@/app/components/sections/CtaBanner";
import { CaseStudyCard } from "@/app/components/sections/Portfolio";
import { RevealGroup } from "@/app/components/ui/Reveal";
import RevealItem from "@/app/components/ui/RevealItem";
import { ButtonLink } from "@/app/components/ui/Button";
import { caseStudies } from "@/lib/data/siteData";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies from TrunoxTech — Anirah Advisory, a startup and MSME advisory platform, and Earthma Mould Tech, a DIY craft e-commerce store. Both built on Laravel and live in production.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | TrunoxTech",
    description:
      "Live Laravel products we've built across business advisory and e-commerce.",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  const industries = Array.from(new Set(caseStudies.map((c) => c.industry)));

  return (
    <>
      <PageHero
        breadcrumb="Portfolio"
        eyebrow="Selected work"
        eyebrowIcon="rocket"
        title="Work you can"
        highlight="click through"
        description="Products currently running in production for real clients. Each card carries the industry, the stack we shipped on and what the platform does — and links straight to the live site."
      >
        <div className="mt-10 flex flex-wrap gap-2">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-pill border border-hairline bg-white px-3.5 py-1.5 text-[13px] font-medium text-ink-soft shadow-xs"
            >
              {industry}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="pb-8 md:pb-12">
        <div className="container">
          <RevealGroup className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <RevealItem key={study.slug} className="h-full">
                <CaseStudyCard study={study} />
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="mt-16 rounded-panel border border-hairline bg-surface p-8 text-center md:p-12">
            <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
              Some of our best work is under NDA
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-muted">
              We can walk you through additional projects — including internal
              platforms and AI systems we can't publish — on a call.
            </p>
            <ButtonLink href="/contact" size="lg" icon="arrowRight" className="mt-8">
              Request a private walkthrough
            </ButtonLink>
          </div>
        </div>
      </section>

      <Stats />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
