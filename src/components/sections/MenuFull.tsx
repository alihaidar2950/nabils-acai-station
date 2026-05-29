import Link from "next/link";
import { menu } from "@/lib/brand";
import { Sparkle, PalmFrond } from "@/components/shared/Ornaments";

// Only the strongest, enhanced food shots earn an image. Sections not listed
// here render as clean text cards — this is what kills the old dead space:
// images are no longer forced one-per-section regardless of list length.
const featuredImage: Record<string, { src: string; alt: string }> = {
  "Açaí — Build Your Own": {
    src: "/images/enhanced/signature-build-your-own-acai-v2.jpg",
    alt: "A build-your-own açaí bowl topped with banana, strawberries and a tall drizzle",
  },
  "Strawberry Cups": {
    src: "/images/enhanced/signature-dubai-strawberry-cup-v2.jpg",
    alt: "A Dubai strawberry cup topped with milk chocolate and pistachio",
  },
  "Brownies": {
    src: "/images/menu/brownies.jpg",
    alt: "A Dubai chocolate brownie bowl with strawberries and crushed pistachio",
  },
  "Fruit Cocktails": {
    src: "/images/enhanced/fruit-cocktail-client-enhanced.jpg",
    alt: "A Nabil's fruit cocktail layered with fruit, ashta, cashew and honey",
  },
  "Waffle Snack Pack": {
    src: "/images/enhanced/signature-waffle-snack-pack-v2.jpg",
    alt: "A waffle snack pack with strawberries, banana and drizzle",
  },
  "Matcha": {
    src: "/images/enhanced/signature-matcha-bowl-v2.jpg",
    alt: "A matcha açaí bowl under a slow pour of matcha cream",
  },
  "Mocktails": {
    src: "/images/enhanced/blue-hawaii-mocktail-client-enhanced.jpg",
    alt: "A bright blue Nabil's mocktail over ice on the counter",
  },
};

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

      <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-28 lg:px-10">
        {/* Masonry of self-contained cards: each card sizes to its own
            content, so short lists no longer leave dead space beside a tall
            image. break-inside-avoid keeps a section whole within a column. */}
        <div className="gap-6 md:columns-2 md:gap-7 [column-fill:_balance]">
          {menu.map((section) => {
            const media = featuredImage[section.title];
            return (
              <article
                key={section.title}
                id={section.title
                  .normalize("NFD")
                  .replace(/[̀-ͯ]/g, "")
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-|-$/g, "")}
                className="mb-6 break-inside-avoid scroll-mt-24 md:mb-7"
              >
                <div className="overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-[var(--acai)]/12 shadow-[0_22px_55px_-38px_rgba(31,11,37,0.55)]">
                  {media && (
                    <div className="relative aspect-[4/5] overflow-hidden bg-[var(--cream-warm)]">
                      {/* Source shots are portrait with tall vertical subjects
                          (drizzle peaks, cups) — a 4:5 frame matches their
                          native ratio so nothing gets cropped off. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={media.src}
                        alt={media.alt}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-center"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 ring-1 ring-inset ring-[var(--acai-deep)]/10"
                      />
                    </div>
                  )}

                  <div className="p-6 md:p-7">
                    <header>
                      <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-[var(--acai)]/55">
                        <Sparkle className="size-2.5 text-[var(--saffron)]" />
                        Menu
                      </div>
                      <h2 className="mt-2 font-display text-2xl tracking-tight text-[var(--acai-deep)] md:text-3xl">
                        {section.title}
                      </h2>
                      {section.subtitle && (
                        <p className="mt-2 text-sm italic leading-relaxed text-[var(--acai-deep)]/70">
                          {section.subtitle}
                        </p>
                      )}
                    </header>

                    <ul className="mt-5">
                      {section.items.map((item) => (
                        <li key={item.name} className="py-2.5">
                          <div className="flex items-baseline gap-2">
                            <span className="font-display text-[1.05rem] leading-tight text-[var(--acai-deep)]">
                              {item.name}
                            </span>
                            {item.price && (
                              <>
                                <span
                                  aria-hidden
                                  className="mb-1 flex-1 border-b border-dotted border-[var(--acai)]/30"
                                />
                                <span className="shrink-0 font-semibold text-sm tracking-wide text-[var(--acai)]">
                                  {item.price}
                                </span>
                              </>
                            )}
                          </div>
                          {item.note && (
                            <p className="mt-0.5 text-[0.85rem] leading-snug text-[var(--acai-deep)]/65">
                              {item.note}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>

                    {section.footnote && (
                      <p className="mt-4 border-t border-[var(--acai)]/10 pt-4 text-xs italic leading-relaxed text-[var(--acai-deep)]/70">
                        {section.footnote}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
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
