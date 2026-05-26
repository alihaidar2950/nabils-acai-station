import { press } from "@/lib/brand";
import { Sparkle } from "@/components/shared/Ornaments";

const leadQuote = "Beating a path to Ballajura.";

export function PressStrip() {
  return (
    <section
      aria-label="Press coverage"
      className="relative overflow-hidden border-y border-[var(--cream)]/12 bg-[var(--acai-deep)] text-[var(--cream)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_25%_50%,rgba(244,184,96,0.16)_0%,transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-25 mix-blend-soft-light"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-12 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--saffron)]">
              <Sparkle className="size-3 text-[var(--saffron)]" />
              As featured in
            </div>
            <div className="mt-2 text-[0.6rem] uppercase tracking-[0.24em] text-[var(--honey)]/70">
              Feb · Jul 2025
            </div>
          </div>

          <blockquote className="md:col-span-6">
            <p className="font-display text-2xl leading-[1.15] text-[var(--cream)] md:text-3xl lg:text-4xl">
              <span aria-hidden className="text-[var(--saffron)]">
                &ldquo;
              </span>
              <span className="italic">{leadQuote}</span>
              <span aria-hidden className="text-[var(--saffron)]">
                &rdquo;
              </span>
            </p>
            <footer className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--cream)]/70">
              <span aria-hidden>—</span>
              {press.map((item, i) => (
                <span key={item.outlet} className="inline-flex items-center gap-3">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-base italic text-[var(--cream)] underline-offset-4 transition-colors hover:text-[var(--honey)] hover:underline md:text-lg"
                    aria-label={`Read ${item.outlet} article about Nabil's Açaí Station`}
                  >
                    {item.outlet}
                  </a>
                  {i < press.length - 1 && (
                    <span aria-hidden className="text-[var(--cream)]/40">
                      +
                    </span>
                  )}
                </span>
              ))}
            </footer>
          </blockquote>

          <div className="md:col-span-3 md:text-right">
            <a
              href="#in-the-news"
              className="group inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[var(--saffron)] transition-colors hover:text-[var(--honey)]"
            >
              Read the press
              <span
                aria-hidden
                className="inline-flex size-8 items-center justify-center rounded-full border border-[var(--saffron)]/50 text-[var(--saffron)] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[var(--saffron)] group-hover:bg-[var(--saffron)] group-hover:text-[var(--acai-deep)]"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
