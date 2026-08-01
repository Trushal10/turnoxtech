import { company } from "@/lib/data/siteData";
import Icon from "../ui/Icon";
import { ButtonLink } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export default function CtaBanner() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container">
        <Reveal scale>
          <div className="relative overflow-hidden rounded-panel bg-linear-to-br from-brand via-[#4f46e5] to-accent px-8 py-16 shadow-glow-lg md:px-16 md:py-20">
            {/* Texture */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div
                className="absolute inset-0 opacity-[0.14]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="animate-drift absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/20 blur-[90px]" />
              <div
                className="animate-drift absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-fuchsia-400/25 blur-[110px]"
                style={{ animationDelay: "-9s" }}
              />
              {/* Concentric rings, echoing the hero core */}
              <svg
                className="absolute -right-20 top-1/2 hidden -translate-y-1/2 lg:block"
                width="420"
                height="420"
                viewBox="0 0 420 420"
                fill="none"
              >
                <circle cx="210" cy="210" r="90" stroke="#fff" strokeOpacity=".18" />
                <circle cx="210" cy="210" r="140" stroke="#fff" strokeOpacity=".13" />
                <circle
                  cx="210"
                  cy="210"
                  r="190"
                  stroke="#fff"
                  strokeOpacity=".09"
                  strokeDasharray="6 10"
                />
              </svg>
            </div>

            <div className="relative max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-pill border border-white/25 bg-white/10 px-3.5 py-1.5 font-display text-[13px] font-semibold text-white backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-300" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Two build slots open this quarter
              </span>

              <h2 className="mt-6 text-[clamp(2rem,1.3rem+3vw,3.5rem)] font-extrabold leading-[1.06] text-white">
                Ready to build your next digital product?
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                Book a free 30-minute consultation. We'll pressure-test the idea,
                sketch an architecture and give you a realistic timeline — whether
                or not you end up working with us.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink
                  href="/contact"
                  size="lg"
                  variant="secondary"
                  icon="arrowRight"
                  className="shadow-lift"
                >
                  Book Free Consultation
                </ButtonLink>
                <ButtonLink
                  href={`mailto:${company.email}`}
                  size="lg"
                  variant="light"
                  icon="mail"
                >
                  {company.email}
                </ButtonLink>
              </div>

              <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
                {[
                  "No obligation",
                  "Replies within 1 business day",
                  "NDA available",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-white/75"
                  >
                    <Icon name="check" size={16} className="text-white" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
