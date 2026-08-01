import Link from "next/link";

import { company, footerColumns, socialLinks } from "@/lib/data/siteData";
import Icon from "../../ui/Icon";
import Logo from "../Logo";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-hairline bg-surface">
      {/* Soft brand wash along the top edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-brand/8 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-accent/8 blur-[100px]"
      />

      <div className="container relative">
        {/* ---- Top: brand + newsletter ---------------------------------- */}
        <div className="grid gap-12 border-b border-hairline py-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Logo height={38} />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted">
              {company.name} is an AI-first product engineering studio. We design
              and build AI software, SaaS platforms and business automation for
              teams that need to move fast without accruing technical debt.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${company.name} on ${social.label}`}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-hairline bg-white text-muted shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:text-brand hover:shadow-soft"
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <h2 className="font-display text-lg font-bold text-ink">
              Engineering notes, monthly
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              What we're learning about shipping AI products. No sales pitches,
              unsubscribe in one click.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* ---- Middle: link columns + contact ---------------------------- */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {footerColumns.map((column) => (
            <div key={column.title} className="lg:col-span-2">
              <h3 className="font-display text-[13px] font-bold uppercase tracking-widest text-ink">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-muted transition-colors duration-200 hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="sm:col-span-2 lg:col-span-5 lg:col-start-8">
            <h3 className="font-display text-[13px] font-bold uppercase tracking-widest text-ink">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="group flex items-start gap-3 text-[15px] text-muted transition-colors hover:text-brand"
                >
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-hairline bg-white text-brand shadow-xs transition-shadow group-hover:shadow-soft">
                    <Icon name="mail" size={17} />
                  </span>
                  <span className="pt-1.5">{company.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={company.phoneHref}
                  className="group flex items-start gap-3 text-[15px] text-muted transition-colors hover:text-brand"
                >
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-hairline bg-white text-brand shadow-xs transition-shadow group-hover:shadow-soft">
                    <Icon name="phoneCall" size={17} />
                  </span>
                  <span className="pt-1.5">{company.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[15px] text-muted">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-hairline bg-white text-brand shadow-xs">
                  <Icon name="mapPin" size={17} />
                </span>
                <span className="pt-1.5">{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ---- Bottom bar ------------------------------------------------ */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-hairline py-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {year} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </div>
        </div>
      </div>
    </footer>
  );
}
