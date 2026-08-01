"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { faqs } from "@/lib/data/siteData";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { ButtonLink } from "../ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-y relative overflow-hidden bg-surface">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                align="left"
                eyebrow="FAQ"
                eyebrowIcon="chat"
                title="Questions we get"
                highlight="before every project"
                description="If yours isn't here, ask it directly — we answer within one business day."
              />
              <ButtonLink href="/contact" icon="arrowRight" className="mt-8">
                Ask us anything
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-8">
            <dl className="space-y-3">
              {faqs.map((item, i) => {
                const isOpen = open === i;
                const panelId = `faq-panel-${i}`;
                const buttonId = `faq-button-${i}`;

                return (
                  <Reveal key={item.q} delay={i * 0.04}>
                    <div
                      className={`overflow-hidden rounded-card border bg-white transition-all duration-400 ${
                        isOpen
                          ? "border-brand/25 shadow-soft"
                          : "border-hairline hover:border-brand/20"
                      }`}
                    >
                      <dt>
                        <button
                          type="button"
                          id={buttonId}
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => setOpen(isOpen ? null : i)}
                          className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-7"
                        >
                          <span
                            className={`font-display text-[16.5px] font-bold transition-colors md:text-[17.5px] ${
                              isOpen ? "text-brand" : "text-ink"
                            }`}
                          >
                            {item.q}
                          </span>

                          <span
                            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-400 ease-[cubic-bezier(.16,1,.3,1)] ${
                              isOpen
                                ? "rotate-180 border-transparent bg-linear-to-r from-brand to-accent text-white"
                                : "border-hairline bg-surface text-muted"
                            }`}
                          >
                            <Icon name={isOpen ? "minus" : "plus"} size={17} />
                          </span>
                        </button>
                      </dt>

                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.dd
                            id={panelId}
                            role="region"
                            aria-labelledby={buttonId}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.38, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <p className="px-6 pb-6 text-[15px] leading-relaxed text-muted md:px-7 md:pb-7 md:pr-16">
                              {item.a}
                            </p>
                          </motion.dd>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </dl>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
