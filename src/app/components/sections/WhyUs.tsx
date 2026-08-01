import { differentiators } from "@/lib/data/siteData";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import { RevealGroup } from "../ui/Reveal";
import RevealItem from "../ui/RevealItem";

export default function WhyUs() {
  return (
    <section id="why-trunoxtech" className="section-y relative overflow-hidden bg-surface">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-dotgrid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />
        <div className="animate-drift absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-brand/8 blur-[110px]" />
        <div
          className="animate-drift absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent/8 blur-[110px]"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky intro rail */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                align="left"
                eyebrow="Why TrunoxTech"
                eyebrowIcon="target"
                title="The reasons clients"
                highlight="stay past launch"
                description="Most engagements end when the invoice clears. Ours tend to run for years — here's what makes the difference."
              />

              <div className="mt-10 rounded-card border border-hairline bg-white p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-tint text-brand">
                    <Icon name="users" size={22} />
                  </span>
                  <div>
                    <p className="font-display text-2xl font-extrabold leading-none text-ink">
                      92%
                    </p>
                    <p className="text-sm text-muted">of clients return</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Measured across every engagement since {2021}. The average
                  client relationship is now into its third year.
                </p>
              </div>
            </div>
          </div>

          {/* Cards */}
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
            {differentiators.map((item) => (
              <RevealItem key={item.title}>
                <article className="spotlight lift group relative h-full overflow-hidden rounded-card border border-hairline bg-white p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-hairline bg-surface text-brand transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-1 group-hover:border-brand/25 group-hover:bg-brand-tint">
                      <Icon name={item.icon} size={24} />
                    </span>
                    {item.metric ? (
                      <span className="rounded-pill border border-hairline bg-surface px-3 py-1 font-display text-[11.5px] font-bold uppercase tracking-wider text-muted transition-colors duration-300 group-hover:border-brand/20 group-hover:bg-brand-tint group-hover:text-brand">
                        {item.metric}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-6 font-display text-lg font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                    {item.body}
                  </p>

                  {/* Bottom accent that draws in on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-linear-to-r from-brand to-accent transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-x-100"
                  />
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
