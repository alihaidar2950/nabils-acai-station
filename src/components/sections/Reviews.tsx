import { reviews } from "@/lib/brand";
import { StarRating, Sparkle } from "@/components/shared/Ornaments";

export function Reviews() {
  return (
    <section className="relative overflow-hidden bg-[var(--cream-warm)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-sunburst-cream opacity-70"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="text-[0.7rem] uppercase tracking-[0.32em] text-[var(--acai)]/70 flex items-center gap-2">
              <Sparkle className="size-3 text-[var(--saffron)]" /> What people say
            </div>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-[var(--acai-deep)] md:text-5xl lg:text-6xl">
              Real reviews. <span className="italic">Real Perth.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 text-sm text-[var(--acai-deep)]/75">
            <StarRating value={5} />
            <span>5.0 across Mt Lawley · Google</span>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {reviews.map((r, idx) => (
            <figure
              key={r.author}
              className="relative flex flex-col gap-6 rounded-[2.5rem] bg-[var(--cream)] p-8 ring-1 ring-[var(--acai)]/15 md:p-10"
              style={{
                transform:
                  idx === 1 ? "rotate(0.6deg)" : idx === 0 ? "rotate(-0.4deg)" : "rotate(0.3deg)",
              }}
            >
              <span
                aria-hidden
                className="absolute -top-6 left-8 font-display text-[6rem] leading-none text-[var(--saffron)]"
              >
                &ldquo;
              </span>
              <StarRating value={5} />
              <blockquote className="font-display text-xl leading-[1.35] text-[var(--acai-deep)] md:text-2xl">
                {r.quote}
              </blockquote>
              <figcaption className="mt-auto flex items-end justify-between gap-3 border-t border-[var(--acai)]/15 pt-5">
                <div>
                  <div className="text-sm font-semibold text-[var(--acai-deep)]">
                    {r.author}
                  </div>
                  {r.badge && (
                    <div className="text-[0.65rem] uppercase tracking-[0.22em] text-[var(--cedar)]">
                      {r.badge}
                    </div>
                  )}
                </div>
                <div className="text-[0.65rem] uppercase tracking-[0.22em] text-[var(--acai)]/60">
                  {r.location}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
