import { stats } from "@/lib/data/siteData";
import Counter from "../ui/Counter";
import { RevealGroup } from "../ui/Reveal";
import RevealItem from "../ui/RevealItem";

export default function Stats() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="container">
        <div className="ring-gradient relative overflow-hidden rounded-panel border border-hairline bg-white p-8 shadow-soft md:p-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="bg-dotgrid absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
            <div className="animate-drift absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand/10 blur-[90px]" />
            <div
              className="animate-drift absolute -bottom-20 -right-12 h-64 w-64 rounded-full bg-accent/10 blur-[90px]"
              style={{ animationDelay: "-7s" }}
            />
          </div>

          <RevealGroup className="relative grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <RevealItem key={stat.label}>
                <div
                  className={`px-2 text-center lg:px-6 ${
                    i < stats.length - 1 ? "lg:border-r lg:border-hairline" : ""
                  }`}
                >
                  <p className="font-display text-[clamp(2.75rem,2rem+2.6vw,3.75rem)] font-extrabold leading-none tracking-tight">
                    <span className="text-gradient">
                      <Counter to={stat.value} suffix={stat.suffix} />
                    </span>
                  </p>
                  <p className="mt-3 font-display text-[15px] font-bold text-ink">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-[13.5px] text-muted">{stat.detail}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
