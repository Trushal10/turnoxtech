import type { Metadata } from "next";

import PageHero from "@/app/components/sections/PageHero";
import Faq from "@/app/components/sections/Faq";
import ContactForm from "@/app/components/contact/ContactForm";
import Icon from "@/app/components/ui/Icon";
import { Reveal } from "@/app/components/ui/Reveal";
import { company } from "@/lib/data/siteData";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project. Book a free 30-minute consultation with TrunoxTech — AI development, SaaS platforms, custom software and business automation. We reply within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact TrunoxTech",
    description:
      "Book a free 30-minute consultation. We'll pressure-test your idea and give you a realistic timeline.",
    url: "/contact",
  },
};

const channels = [
  {
    icon: "mail" as const,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    note: "Fastest for detailed briefs",
  },
  {
    icon: "phoneCall" as const,
    label: "Phone",
    value: company.phone,
    href: company.phoneHref,
    note: "Mon–Fri, 9:30am – 7pm IST",
  },
  {
    icon: "mapPin" as const,
    label: "Studio",
    value: company.address,
    note: "Visits by appointment",
  },
];

const expectations = [
  {
    step: "01",
    title: "You send the brief",
    body: "Rough notes are fine. What you're building, who it's for, and any deadline you're working against.",
  },
  {
    step: "02",
    title: "We reply within a day",
    body: "An engineer — not a salesperson — reads it and comes back with questions or a time to talk.",
  },
  {
    step: "03",
    title: "Free 30-minute call",
    body: "We pressure-test the idea, sketch an architecture and give you a realistic range for time and cost.",
  },
  {
    step: "04",
    title: "A written proposal",
    body: "Scope, milestones, team and price in writing within three days of the call. No pressure to sign.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Get in touch"
        eyebrowIcon="chat"
        title="Tell us what you're"
        highlight="trying to build"
        description="Every engagement starts with a free 30-minute consultation. You'll speak to an engineer who will give you a straight answer on feasibility, timeline and cost — even if the answer is that you don't need us."
      />

      <section className="pb-8 md:pb-12">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="space-y-3">
                  {channels.map((channel) => {
                    const inner = (
                      <>
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-hairline bg-surface text-brand transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-0.5 group-hover:border-brand/25 group-hover:bg-brand-tint">
                          <Icon name={channel.icon} size={22} />
                        </span>
                        <div className="min-w-0">
                          <p className="font-display text-[13px] font-bold uppercase tracking-wider text-muted-2">
                            {channel.label}
                          </p>
                          <p className="mt-1 break-words font-display text-[16px] font-semibold text-ink">
                            {channel.value}
                          </p>
                          <p className="mt-0.5 text-[13px] text-muted">
                            {channel.note}
                          </p>
                        </div>
                      </>
                    );

                    return channel.href ? (
                      <a
                        key={channel.label}
                        href={channel.href}
                        className="lift group flex items-start gap-4 rounded-card border border-hairline bg-white p-6"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div
                        key={channel.label}
                        className="group flex items-start gap-4 rounded-card border border-hairline bg-white p-6"
                      >
                        {inner}
                      </div>
                    );
                  })}
                </div>
              </Reveal>

              {/* What happens next */}
              <Reveal delay={0.16}>
                <div className="mt-8 overflow-hidden rounded-card border border-hairline bg-linear-to-br from-brand-tint via-white to-white p-7">
                  <h2 className="font-display text-lg font-bold text-ink">
                    What happens next
                  </h2>

                  <ol className="mt-6 space-y-5">
                    {expectations.map((item, i) => (
                      <li key={item.step} className="relative flex gap-4">
                        {i < expectations.length - 1 ? (
                          <span
                            aria-hidden="true"
                            className="absolute bottom-[-20px] left-[17px] top-9 w-px bg-hairline"
                          />
                        ) : null}
                        <span className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-hairline bg-white font-display text-[12px] font-extrabold text-brand shadow-xs">
                          {item.step}
                        </span>
                        <div className="pt-1">
                          <p className="font-display text-[15px] font-bold text-ink">
                            {item.title}
                          </p>
                          <p className="mt-1 text-[14px] leading-relaxed text-muted">
                            {item.body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-7 flex items-center gap-2.5 border-t border-hairline pt-5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </span>
                    <p className="text-[14px] text-muted">
                      Currently accepting projects starting this quarter
                    </p>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
