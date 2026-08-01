import type { Metadata } from "next";
import Link from "next/link";

import Icon from "./components/ui/Icon";
import { ButtonLink } from "./components/ui/Button";
import { navLinks } from "@/lib/data/siteData";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-brand-tint/60 via-white to-white" />
        <div className="bg-linegrid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,#000_30%,transparent_100%)]" />
        <div className="animate-drift absolute -left-20 top-10 h-80 w-80 rounded-full bg-brand/12 blur-[110px]" />
        <div
          className="animate-drift absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-accent/12 blur-[110px]"
          style={{ animationDelay: "-7s" }}
        />
      </div>

      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-[clamp(5rem,3rem+10vw,10rem)] font-extrabold leading-none tracking-tighter">
            <span className="text-gradient">404</span>
          </p>

          <h1 className="mt-4 text-[clamp(1.75rem,1.3rem+2vw,2.75rem)] font-extrabold text-ink">
            This page didn't make it to production
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-muted">
            The link is broken or the page has moved. Here's the way back — or
            tell us what you were looking for and we'll point you at it.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/" size="lg" icon="arrowRight">
              Back to home
            </ButtonLink>
            <ButtonLink href="/contact" size="lg" variant="secondary" icon="chat">
              Contact us
            </ButtonLink>
          </div>

          <nav aria-label="Popular pages" className="mt-14">
            <p className="font-display text-[13px] font-semibold uppercase tracking-widest text-muted-2">
              Popular pages
            </p>
            <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 rounded-pill border border-hairline bg-white px-4 py-2 text-[14px] font-medium text-ink-soft shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:text-brand hover:shadow-soft"
                  >
                    {link.label}
                    <Icon name="arrowUpRight" size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
