import { press, brand } from "@/lib/brand";
import { Sparkle } from "@/components/shared/Ornaments";

export function InTheNews() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": press.map((item) => ({
      "@type": "NewsArticle",
      headline: item.headline,
      datePublished: item.isoDate,
      author: { "@type": "Person", name: item.author },
      publisher: { "@type": "Organization", name: item.outlet },
      url: item.url,
      about: { "@type": "Restaurant", name: brand.name },
    })),
  };

  return (
    <section
      id="in-the-news"
      className="relative overflow-hidden bg-[var(--cream)] scroll-mt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-40 mix-blend-multiply"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28 lg:px-10">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.32em] text-[var(--acai)]/70">
              <Sparkle className="size-3 text-[var(--saffron)]" />
              In the news
            </div>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-[var(--acai-deep)] md:text-5xl lg:text-6xl">
              The press is <span className="italic">paying attention</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--acai-deep)]/70">
            Perth's biggest mastheads came to Ballajura for the Dubai chocolate.
            They stayed for the açaí.
          </p>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-7 md:grid-cols-2">
          {press.map((item, idx) => (
            <article
              key={item.url}
              className="relative flex flex-col gap-6 rounded-[2.5rem] bg-[var(--cream-warm)] p-8 ring-1 ring-[var(--acai)]/15 md:p-10"
              style={{ transform: idx === 0 ? "rotate(-0.4deg)" : "rotate(0.5deg)" }}
            >
              <span
                aria-hidden
                className="absolute -top-6 left-8 font-display text-[6rem] leading-none text-[var(--saffron)]"
              >
                &ldquo;
              </span>

              <header className="flex items-center justify-between gap-4 border-b border-[var(--acai)]/15 pb-5">
                <div className="font-display text-2xl italic text-[var(--acai-deep)] md:text-3xl">
                  {item.outlet}
                </div>
                <div className="text-[0.6rem] uppercase tracking-[0.28em] text-[var(--cedar)]">
                  {item.date} · {item.author}
                </div>
              </header>

              <blockquote className="font-display text-xl leading-[1.35] text-[var(--acai-deep)] md:text-2xl">
                {item.quote}
              </blockquote>

              <div className="mt-auto flex items-end justify-between gap-3 pt-2">
                <div className="max-w-[18rem] text-sm text-[var(--acai-deep)]/70">
                  {item.headline}
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[var(--acai)] px-5 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--cream)] transition-colors hover:bg-[var(--acai-deep)]"
                  aria-label={`Read the ${item.outlet} article about Nabil's Açaí Station`}
                >
                  Read the article
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
