import { technologies } from "@/lib/data/siteData";
import TechMark from "../graphics/TechMark";
import SectionHeading from "../ui/SectionHeading";
import { RevealGroup } from "../ui/Reveal";
import RevealItem from "../ui/RevealItem";

export default function Technologies() {
  return (
    <section id="technologies" className="section-y relative overflow-hidden">
      <div className="container">
        <SectionHeading
          eyebrow="Our stack"
          eyebrowIcon="code"
          title="Boring technology,"
          highlight="used well"
          description="We pick tools with long support horizons and deep hiring pools — so your system stays maintainable long after we hand it over."
        />

        <RevealGroup className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {technologies.map((tech) => (
            <RevealItem key={tech.name}>
              <div className="group relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden rounded-card border border-hairline bg-white px-4 py-8 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1.5 hover:border-brand/25 hover:shadow-lift">
                {/* Radial wash that blooms from behind the mark */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(120px_circle_at_50%_35%,rgba(37,99,235,.12),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <TechMark
                  name={tech.mark}
                  size={40}
                  className="relative text-muted-2 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110 group-hover:text-brand"
                />

                <span className="relative font-display text-sm font-semibold text-ink-soft transition-colors group-hover:text-ink">
                  {tech.name}
                </span>
                <span className="relative text-[11.5px] uppercase tracking-wider text-muted-2">
                  {tech.category}
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-10 text-center text-sm text-muted">
          Working with something else? We've shipped on Go, .NET, Flutter,
          Kubernetes and Snowflake too — ask.
        </p>
      </div>
    </section>
  );
}
