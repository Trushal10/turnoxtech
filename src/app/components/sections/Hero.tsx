"use client";

import { motion, useReducedMotion } from "framer-motion";

import { trustedBy } from "@/lib/data/siteData";
import HeroVisual from "../graphics/HeroVisual";
import Icon from "../ui/Icon";
import { ButtonLink } from "../ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  /**
   * Explicit per-element delays rather than `staggerChildren`: each child sets
   * its own `transition`, which would override the inherited stagger delay.
   */
  const rise = (delay: number) =>
    reduce
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40 lg:pb-32 lg:pt-44">
      {/* ---- Backdrop ------------------------------------------------- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-brand-tint/70 via-white to-white" />
        <div className="bg-linegrid absolute inset-x-0 top-0 h-[560px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
        <div className="animate-drift absolute -left-24 top-8 h-[420px] w-[420px] rounded-full bg-brand/12 blur-[120px]" />
        <div
          className="animate-drift absolute -right-20 top-40 h-[380px] w-[380px] rounded-full bg-accent/12 blur-[120px]"
          style={{ animationDelay: "-8s" }}
        />
      </div>

      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
          {/* ---- Copy --------------------------------------------------- */}
          <div className="lg:col-span-6 xl:col-span-6">
            <motion.div {...rise(0)}>
              <span className="inline-flex items-center gap-2 rounded-pill border border-brand/15 bg-white/70 py-1.5 pl-1.5 pr-4 text-[13px] font-medium text-ink-soft shadow-xs backdrop-blur-sm">
                <span className="rounded-pill bg-linear-to-r from-brand to-accent px-2.5 py-1 font-display text-[11px] font-bold uppercase tracking-wider text-white">
                  AI-first
                </span>
                Product engineering studio
              </span>
            </motion.div>

            <motion.h1
              {...rise(0.09)}
              className="mt-7 text-[clamp(2.5rem,1.4rem+4.4vw,4.25rem)] font-extrabold leading-[1.03] text-ink"
            >
              Building{" "}
              <span className="relative inline-block">
                <span className="text-gradient">AI-powered</span>
                <motion.svg
                  aria-hidden="true"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full"
                >
                  <motion.path
                    d="M2 8c60-6 130-8 296-3"
                    fill="none"
                    stroke="url(#hero-underline)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.7, ease: EASE }}
                  />
                  <defs>
                    <linearGradient id="hero-underline" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>{" "}
              software, SaaS &amp; business automation.
            </motion.h1>

            <motion.p
              {...rise(0.18)}
              className="mt-7 max-w-xl text-[17px] leading-relaxed text-muted md:text-lg"
            >
              We design and engineer the products that run your business — AI
              systems, SaaS platforms and automation that ship in weeks, scale
              cleanly, and hold up under real load.
            </motion.p>

            <motion.div
              {...rise(0.27)}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <ButtonLink href="/contact" size="lg" icon="arrowRight">
                Start Your Project
              </ButtonLink>
              <ButtonLink href="/portfolio" size="lg" variant="secondary" icon="arrowUpRight">
                View Portfolio
              </ButtonLink>
            </motion.div>

            <motion.ul
              {...rise(0.36)}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              {[
                "Free 30-min consultation",
                "You own the IP",
                "NDA on request",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted">
                  <Icon name="check" size={17} className="text-brand" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* ---- Visual -------------------------------------------------- */}
          <div className="lg:col-span-6 xl:col-span-6 xl:pl-8">
            <HeroVisual />
          </div>
        </div>

        {/* ---- Trusted by ------------------------------------------------ */}
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
          className="mt-24 border-t border-hairline pt-10 lg:mt-32"
        >
          <p className="text-center font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-muted-2">
            Trusted by
          </p>
          {/* Static row, not a marquee — a short client list would loop with
              visible gaps. Switch back to `animate-marquee` past ~6 names. */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-4">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="font-display text-xl font-bold tracking-tight text-muted-2 transition-colors duration-300 hover:text-ink-soft md:text-2xl"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
