import { testimonials } from "@/lib/data/siteData";
import Avatar from "../graphics/Avatar";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import { RevealGroup } from "../ui/Reveal";
import RevealItem from "../ui/RevealItem";

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Icon
          key={i}
          name="star"
          size={15}
          className={i < rating ? "text-amber-400" : "text-hairline"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-y relative overflow-hidden bg-surface"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-dotgrid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000,transparent)]" />
      </div>

      <div className="container">
        <SectionHeading
          eyebrow="Client stories"
          eyebrowIcon="chat"
          title="What it's like"
          highlight="to work with us"
          description="Unedited feedback from founders, CTOs and operations leads we've built for."
        />

        {/* Masonry-ish columns keep the varied quote lengths from leaving gaps */}
        <RevealGroup className="mt-16 gap-6 sm:columns-2 lg:columns-3">
          {testimonials.map((item) => (
            <RevealItem key={item.name} className="mb-6 break-inside-avoid">
              <figure className="lift group relative overflow-hidden rounded-card border border-hairline bg-white p-7">
                <Icon
                  name="quote"
                  size={30}
                  className="text-hairline transition-colors duration-500 group-hover:text-brand/25"
                />

                <blockquote className="mt-4">
                  <p className="text-[15.5px] leading-relaxed text-ink-soft">
                    {item.quote}
                  </p>
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3.5 border-t border-hairline pt-5">
                  <Avatar name={item.name} accent={item.accent} size={44} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-[15px] font-bold text-ink">
                      {item.name}
                    </p>
                    <p className="truncate text-[13px] text-muted">
                      {item.role} ·{" "}
                      <span className="font-display font-semibold text-ink-soft">
                        {item.company}
                      </span>
                    </p>
                  </div>
                </figcaption>

                <div className="mt-4">
                  <Stars rating={item.rating} />
                </div>

                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-linear-to-r from-brand to-accent transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-x-100"
                />
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted">
          <span className="flex items-center gap-2">
            <Icon name="star" size={16} className="text-amber-400" />
            <strong className="font-display font-bold text-ink">5.0</strong>{" "}
            average rating
          </span>
          <span className="hidden h-4 w-px bg-hairline sm:block" />
          <span>
            <strong className="font-display font-bold text-ink">20+</strong>{" "}
            clients across 4 countries
          </span>
          <span className="hidden h-4 w-px bg-hairline sm:block" />
          <span>
            <strong className="font-display font-bold text-ink">92%</strong>{" "}
            return for a second project
          </span>
        </div>
      </div>
    </section>
  );
}
