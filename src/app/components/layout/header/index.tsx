"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { navLinks } from "@/lib/data/siteData";
import Logo from "../Logo";
import Icon from "../../ui/Icon";
import { ButtonLink } from "../../ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on navigation
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll + allow Esc while the drawer is open
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]) && href !== "/#process";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
          scrolled
            ? "border-b border-hairline/80 bg-white/80 py-3 shadow-[0_1px_24px_-12px_rgba(15,23,42,.25)] backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between gap-6">
          <Logo height={34} priority />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative rounded-pill px-4 py-2 text-[15px] font-medium transition-colors duration-200 hover:text-brand ${
                  isActive(item.href) ? "text-brand" : "text-ink-soft"
                }`}
              >
                {item.label}
                {isActive(item.href) ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-pill bg-brand-tint"
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ButtonLink href="/contact" size="sm" icon="arrowRight">
              Start Your Project
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="grid h-11 w-11 place-items-center rounded-xl border border-hairline bg-white text-ink shadow-xs transition-colors hover:border-brand/40 hover:text-brand lg:hidden"
          >
            <Icon name="menu" size={20} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-ink/25 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              key="drawer"
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.42, ease: EASE }}
              className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col bg-white shadow-float lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
                <Logo height={30} />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  autoFocus
                  className="grid h-11 w-11 place-items-center rounded-xl border border-hairline text-ink transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <Icon name="close" size={20} />
                </button>
              </div>

              <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 py-6">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: EASE }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-lg font-semibold text-ink transition-colors hover:bg-surface hover:text-brand"
                    >
                      {item.label}
                      <Icon name="arrowUpRight" size={18} className="text-muted-2" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto border-t border-hairline p-6">
                <ButtonLink href="/contact" size="lg" icon="arrowRight" className="w-full">
                  Start Your Project
                </ButtonLink>
                <p className="mt-4 text-center text-sm text-muted">
                  Free 30-minute consultation
                </p>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
