import Link from "next/link";
import { Sparkle } from "@/components/shared/Ornaments";
import { brand } from "@/lib/brand";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--cream)]">
      {/* Sunburst rays from bottom — lifted from Nabil's menu boards */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-sunburst-cream opacity-90"
      />
      {/* Soft warm glow from the bottom (echoes the shop's honey neon) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(244,184,96,0.25), transparent 70%)",
        }}
      />
      {/* Paper grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-60 mix-blend-multiply"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-10 pb-24 md:pt-14 md:pb-28 lg:px-10 lg:pt-20 lg:pb-32">
        {/* Eyebrow */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.7rem] uppercase tracking-[0.28em] text-[var(--acai)]/80 rise-in rise-in-delay-1">
          <span className="inline-flex items-center gap-1.5">
            <Sparkle className="size-2.5 text-[var(--saffron)]" />
            Mt Lawley 5.0
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Sparkle className="size-2.5 text-[var(--saffron)]" />
            Ballajura 4.5
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <Sparkle className="size-2.5 text-[var(--saffron)]" />
            Open till 11
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-14">
          {/* Headline column */}
          <div className="lg:col-span-7 lg:pt-4">
            <h1 className="font-display text-[var(--acai-deep)] leading-[0.92] tracking-[-0.02em] text-[clamp(3rem,8vw,6.5rem)] rise-in rise-in-delay-2">
              Açaí, crêpes &amp;{" "}
              <span className="italic text-[var(--acai)]">
                Dubai chocolate
              </span>
              <span className="text-[var(--saffron)]">.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--acai-deep)]/80 md:text-xl rise-in rise-in-delay-3">
              A Lebanese dessert family in Perth, doing the viral
              stuff right. Build-your-own bowls, signature crêpes, Dubai
              crunch, mocktails on tap. Made for sweet moments — open till late.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3 rise-in rise-in-delay-4">
              <Link
                href="/menu"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--acai)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--cream)] shadow-[0_10px_30px_-12px_rgba(61,23,71,0.6)] transition-all hover:bg-[var(--acai-deep)] hover:translate-y-[-2px]"
              >
                View the menu
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/locations"
                className="inline-flex items-center gap-3 rounded-full border border-[var(--acai)]/30 bg-[var(--cream)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--acai)] transition-colors hover:border-[var(--acai)] hover:bg-[var(--cream-warm)]"
              >
                Find a store
              </Link>
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--acai)] underline-offset-[6px] hover:underline"
              >
                or call us
              </a>
            </div>

            {/* Inline meta */}
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-[var(--acai)]/15 pt-7 max-w-xl rise-in rise-in-delay-5">
              <div>
                <dt className="text-[0.65rem] uppercase tracking-[0.22em] text-[var(--acai)]/60">
                  Followers
                </dt>
                <dd className="mt-1.5 font-display text-2xl text-[var(--acai-deep)]">
                  5,289
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] uppercase tracking-[0.22em] text-[var(--acai)]/60">
                  Perth shops
                </dt>
                <dd className="mt-1.5 font-display text-2xl text-[var(--acai-deep)]">
                  Two
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] uppercase tracking-[0.22em] text-[var(--acai)]/60">
                  Crêpes signed
                </dt>
                <dd className="mt-1.5 font-display text-2xl text-[var(--acai-deep)]">
                  4
                </dd>
              </div>
            </dl>
          </div>

          {/* Image column — arched frame with Moorish silhouette */}
          <div className="relative lg:col-span-5 rise-in rise-in-delay-3">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[28rem]">
              {/* Background slab behind the arch — adds depth */}
              <div
                aria-hidden
                className="absolute -inset-x-4 -bottom-4 top-12 rounded-[12rem_12rem_2rem_2rem] bg-[var(--lavender)]/40"
              />
              {/* Decorative spinning sticker */}
              <div
                aria-hidden
                className="absolute -left-8 top-12 z-20 hidden h-28 w-28 items-center justify-center sm:flex"
              >
                <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0">
                  <defs>
                    <path
                      id="hero-circle"
                      d="M 50 50 m -38 0 a 38 38 0 1 1 76 0 a 38 38 0 1 1 -76 0"
                    />
                  </defs>
                  <text
                    fill="var(--acai-deep)"
                    fontSize="9"
                    fontFamily="var(--font-display)"
                    fontStyle="italic"
                    letterSpacing="2"
                  >
                    <textPath href="#hero-circle">
                      Made for sweet moments · Made for sweet moments ·
                    </textPath>
                  </text>
                </svg>
                <Sparkle className="size-5 text-[var(--saffron)]" />
              </div>

              {/* Arched image */}
              <div
                className="relative h-full w-full overflow-hidden rounded-[12rem_12rem_1.5rem_1.5rem] ring-1 ring-[var(--acai)]/10 shadow-[0_30px_60px_-30px_rgba(31,11,37,0.45)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/enhanced/hero-bueno-editorial-v2.jpg"
                  alt="A tall Bueno-drizzled açaí bowl with banana and strawberries"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                {/* Honey gradient at top — echoes warm interior lighting */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(244,184,96,0.18), transparent 35%)",
                  }}
                />
              </div>

              {/* Caption tag */}
              <div className="absolute -bottom-3 right-4 z-20 rotate-2 rounded-full bg-[var(--cream)] px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--acai)] shadow-md ring-1 ring-[var(--acai)]/15">
                Bueno tower · $15
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative border-y border-[var(--acai)]/15 bg-[var(--acai-deep)] text-[var(--cream)]">
        <div className="marquee-track py-4 text-sm md:text-base">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex shrink-0 items-center gap-10 px-6">
              {[
                "Dubai Strawberry Cup",
                "Pistachio Delight",
                "Build-Your-Own Açaí",
                "Triple Indulgence",
                "Viral Strawberry Cup",
                "Iced Pistachio Latte",
                "Mocktails on Tap",
                "Bueno Crêpe",
                "Sunset Swirl Cocktail",
                "Brownie Bowl",
                "Cookies & Cream Shake",
                "Ube Matcha",
              ].map((label) => (
                <span
                  key={`${dup}-${label}`}
                  className="inline-flex items-center gap-4 font-display italic"
                >
                  <Sparkle className="size-3 text-[var(--saffron)]" />
                  <span>{label}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
