import { industries } from "@/lib/data/siteData";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import { RevealGroup } from "../ui/Reveal";
import RevealItem from "../ui/RevealItem";

export default function Industries() {
  return (
    <section id="industries" className="section-y relative overflow-hidden">
      <div className="container">
        <SectionHeading
          eyebrow="Industries"
          eyebrowIcon="building"
          title="Domains we already"
          highlight="speak the language of"
          description="We've spent enough time in each of these to know the regulations, the edge cases and the workflows that actually matter."
        />

        <RevealGroup className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {industries.map((industry) => (
            <RevealItem key={industry.name}>
              <div className="group relative h-full overflow-hidden rounded-card border border-hairline bg-white p-6 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1.5 hover:border-brand/25 hover:shadow-lift">
                {/* Diagonal sweep on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 translate-x-full bg-linear-to-br from-brand/8 via-accent/5 to-transparent transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-0"
                />

                <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-hairline bg-surface text-brand transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-rotate-6 group-hover:border-brand/25 group-hover:bg-white group-hover:shadow-soft">
                  <Icon name={industry.icon} size={24} />
                </span>

                <h3 className="relative mt-5 font-display text-[17px] font-bold text-ink">
                  {industry.name}
                </h3>
                <p className="relative mt-1.5 text-[13.5px] leading-relaxed text-muted">
                  {industry.blurb}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
