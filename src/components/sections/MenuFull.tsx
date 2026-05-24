import Link from "next/link";
import { menu } from "@/lib/brand";
import { Sparkle, PalmFrond } from "@/components/shared/Ornaments";

export function MenuHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--acai-deep)] text-[var(--cream)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-sunburst-acai"
      />
      <PalmFrond
        className="pointer-events-none absolute -top-2 -left-6 h-24 w-56 text-[var(--cedar)]/40"
      />
      <PalmFrond
        flip
        className="pointer-events-none absolute -top-2 -right-6 h-24 w-56 text-[var(--cedar)]/40"
      />

      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center md:py-28 lg:px-10">
        <div className="flex items-center justify-center gap-2 text-[0.7rem] uppercase tracking-[0.32em] text-[var(--saffron)]">
          <Sparkle className="size-3 text-[var(--saffron)]" />
          The full menu
          <Sparkle className="size-3 text-[var(--saffron)]" />
        </div>
        <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
          Everything <span className="italic text-[var(--honey)]">we make</span>.
        </h1>
        <p className="mt-6 mx-auto max-w-xl text-base leading-relaxed text-[var(--lavender)] md:text-lg">
          Açaí built your way, classic and signature crêpes, the Dubai
          chocolate range, fruit cocktails, matcha, mocktails and more.
          Prices in AUD. Subject to availability — viral items go fast.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#acai-build-your-own"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--honey)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--acai-deep)] hover:bg-[var(--cream)] transition-colors"
          >
            Jump to açaí
          </a>
          <a
            href="#dubai-chocolate"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--cream)]/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cream)] hover:bg-[var(--cream)]/10 transition-colors"
          >
            Jump to Dubai chocolate
          </a>
        </div>
      </div>
    </section>
  );
}

export function MenuFull() {
  return (
    <section className="relative overflow-hidden bg-[var(--cream)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-sunburst-cream opacity-60"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-10">
        <div className="space-y-16 md:space-y-20">
          {menu.map((section, idx) => (
            <article
              key={section.title}
              id={section.title
                .normalize("NFD")
                .replace(/[̀-ͯ]/g, "")
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "")}
              className="scroll-mt-24"
            >
              <header className="flex flex-col gap-3 border-b border-[var(--acai)]/20 pb-5 md:flex-row md:items-end md:justify-between md:gap-8">
                <div>
                  <div className="text-[0.7rem] uppercase tracking-[0.3em] text-[var(--acai)]/60">
                    {String(idx + 1).padStart(2, "0")} · Section
                  </div>
                  <h2 className="mt-1.5 font-display text-3xl tracking-tight text-[var(--acai-deep)] md:text-5xl">
                    {section.title}
                  </h2>
                </div>
                {section.subtitle && (
                  <p className="max-w-md text-sm italic text-[var(--acai-deep)]/75">
                    {section.subtitle}
                  </p>
                )}
              </header>

              <ul className="mt-8 grid grid-cols-1 gap-x-12 gap-y-2 md:grid-cols-2">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="group flex items-baseline gap-3 border-b border-dotted border-[var(--acai)]/20 py-3"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-display text-lg text-[var(--acai-deep)]">
                        {item.name}
                      </div>
                      {item.note && (
                        <div className="text-sm text-[var(--acai-deep)]/65">
                          {item.note}
                        </div>
                      )}
                    </div>
                    {item.price && (
                      <div className="font-semibold text-sm tracking-wide text-[var(--acai)] shrink-0">
                        {item.price}
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {section.footnote && (
                <p className="mt-5 text-xs italic text-[var(--acai-deep)]/70">
                  {section.footnote}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-4 border-t border-[var(--acai)]/15 pt-12 text-center">
          <p className="font-display text-2xl italic text-[var(--acai-deep)] md:text-3xl">
            Allergens, swaps, anything custom — just ask at the counter.
          </p>
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--acai)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cream)] hover:bg-[var(--acai-deep)] transition-colors"
          >
            Find a store →
          </Link>
        </div>
      </div>
    </section>
  );
}
