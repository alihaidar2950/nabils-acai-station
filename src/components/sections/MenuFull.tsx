import Link from "next/link";
import { menu } from "@/lib/brand";
import { Sparkle, PalmFrond } from "@/components/shared/Ornaments";

const menuMedia = [
  {
    src: "/images/menu/acai-build-your-own.jpg",
    alt: "A build-your-own acai bowl topped with banana, strawberries and a tall drizzle",
  },
  {
    src: "/images/menu/classic-crepes.jpg",
    alt: "A tray of crepes drizzled with sauce in front of the Nabil's logo",
  },
  {
    src: "/images/menu/signature-crepes.jpg",
    alt: "A close-up tray of Nabil's signature crepes with sauce",
  },
  {
    src: "/images/menu/strawberry-cups.jpg",
    alt: "A Dubai strawberry cup topped with chocolate and pistachio",
  },
  {
    src: "/images/menu/dubai-chocolate.jpg",
    alt: "Dubai chocolate acai promo with pistachio topping and strawberries",
  },
  {
    src: "/images/menu/brownies.jpg",
    alt: "A chocolate dessert bowl with strawberries, banana and brownie-style toppings",
  },
  {
    src: "/images/menu/waffle-snack-pack.jpg",
    alt: "A waffle snack pack tray with strawberries, banana and sauce",
  },
  {
    src: "/images/menu/fruit-cocktails.jpg",
    alt: "Nabil's fruit cocktails lined up on the Mt Lawley counter",
  },
  {
    src: "/images/menu/matcha.jpg",
    alt: "Nabil's matcha drinks beside a pistachio milk chocolate carton",
  },
  {
    src: "/images/menu/mocktails.jpg",
    alt: "A lineup of colorful Nabil's mocktails on the counter",
  },
  {
    src: "/images/menu/iced-lattes.jpg",
    alt: "Two layered iced lattes in branded Nabil's cans",
  },
  {
    src: "/images/menu/milkshakes.jpg",
    alt: "A blended drink on the counter below the Made for Sweet Moments neon",
  },
  {
    src: "/images/menu/probiotic-splash.jpg",
    alt: "Two chilled Nabil's probiotic splash cans on a pink wall ledge",
  },
] as const;

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
              <div
                className={`grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-start lg:gap-10 ${
                  idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-5">
                  <div className="relative mx-auto aspect-[4/5] max-w-[30rem] overflow-hidden rounded-[1.5rem] bg-[var(--cream-warm)] ring-1 ring-[var(--acai)]/15 shadow-[0_24px_60px_-36px_rgba(31,11,37,0.45)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={menuMedia[idx]?.src}
                      alt={menuMedia[idx]?.alt ?? section.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 ring-1 ring-inset ring-[var(--cream)]/35"
                    />
                    <div className="absolute bottom-4 left-4 rounded-full bg-[var(--cream)] px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--acai)] shadow-sm">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
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
                </div>
              </div>
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
