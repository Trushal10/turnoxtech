"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

import { processSteps } from "@/lib/data/siteData";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 65%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section id="process" className="section-y relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-brand/6 blur-[130px]" />
      </div>

      <div className="container">
        <SectionHeading
          eyebrow="How we work"
          eyebrowIcon="compass"
          title="Six steps from idea"
          highlight="to production"
          description="A rhythm we've run more than fifty times. You always know what's happening this week and what lands next."
        />

        <div ref={trackRef} className="relative mt-20">
          {/* Rail */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[27px] top-2 w-px bg-hairline md:left-1/2 md:-translate-x-1/2"
          />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: reduce ? 1 : progress }}
            className="absolute bottom-0 left-[27px] top-2 w-px origin-top bg-linear-to-b from-brand via-accent to-brand md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="space-y-10 md:space-y-4">
            {processSteps.map((step, i) => {
              const right = i % 2 === 1;

              return (
                <li key={step.step} className="relative md:grid md:grid-cols-2 md:gap-16">
                  {/* Node */}
                  <motion.span
                    initial={reduce ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-30% 0px -30% 0px" }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="absolute left-0 top-1.5 z-10 grid h-14 w-14 place-items-center rounded-2xl border border-hairline bg-white shadow-soft md:left-1/2 md:top-8 md:-translate-x-1/2"
                  >
                    <span className="grid h-full w-full place-items-center rounded-2xl bg-linear-to-br from-brand-tint to-white text-brand">
                      <Icon name={step.icon} size={24} />
                    </span>
                  </motion.span>

                  {/* Card */}
                  <motion.div
                    initial={
                      reduce
                        ? { opacity: 1 }
                        : { opacity: 0, x: 0, y: 32 }
                    }
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-15% 0px" }}
                    transition={{ duration: 0.7, ease: EASE }}
                    className={`ml-20 md:ml-0 md:py-6 ${
                      right ? "md:col-start-2 md:pl-4" : "md:col-start-1 md:pr-4 md:text-right"
                    }`}
                  >
                    <div
                      className={`spotlight lift group relative overflow-hidden rounded-card border border-hairline bg-white p-6 md:p-7 ${
                        right ? "" : "md:items-end"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 ${
                          right ? "" : "md:justify-end"
                        }`}
                      >
                        <span className="font-display text-[42px] font-extrabold leading-none tracking-tight text-transparent [-webkit-text-stroke:1.5px_var(--color-hairline)]">
                          {step.step}
                        </span>
                        <span className="rounded-pill border border-hairline bg-surface px-3 py-1 text-[12px] font-semibold text-muted">
                          {step.duration}
                        </span>
                      </div>

                      <h3 className="mt-4 font-display text-2xl font-bold text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                        {step.body}
                      </p>

                      <ul
                        className={`mt-5 flex flex-wrap gap-2 ${
                          right ? "" : "md:justify-end"
                        }`}
                      >
                        {step.deliverables.map((d) => (
                          <li
                            key={d}
                            className="inline-flex items-center gap-1.5 rounded-pill border border-hairline bg-white px-2.5 py-1 text-[12.5px] text-ink-soft transition-colors duration-300 group-hover:border-brand/20 group-hover:text-brand"
                          >
                            <Icon name="check" size={13} className="text-brand" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
