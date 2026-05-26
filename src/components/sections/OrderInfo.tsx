import { Sparkle } from "@/components/shared/Ornaments";
import { brand, locations } from "@/lib/brand";

const delivery = [
  {
    name: "Uber Eats",
    url: brand.orderUrl,
    note: "Mt Lawley & Ballajura — usually 25–40 min.",
  },
];

export function OrderHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--cream-warm)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-50 mix-blend-multiply"
      />
      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center md:py-24 lg:px-10">
        <div className="flex items-center justify-center gap-2 text-[0.7rem] uppercase tracking-[0.32em] text-[var(--acai)]/70">
          <Sparkle className="size-3 text-[var(--saffron)]" />
          Order Nabil&rsquo;s
        </div>
        <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight text-[var(--acai-deep)] md:text-7xl">
          Delivery or <span className="italic">pick&nbsp;up</span>.
        </h1>
        <p className="mt-6 mx-auto max-w-xl text-base leading-relaxed text-[var(--acai-deep)]/75 md:text-lg">
          Tap order for delivery, or walk in and grab it warm. Both shops in
          Perth take walk-ins all day.
        </p>
      </div>
    </section>
  );
}

export function OrderInfo() {
  return (
    <section className="relative bg-[var(--cream)]">
      <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {/* Delivery */}
          <article className="flex flex-col gap-5 rounded-[2.5rem] bg-[var(--cream-warm)] p-8 ring-1 ring-[var(--acai)]/15 md:p-10">
            <div className="text-[0.7rem] uppercase tracking-[0.28em] text-[var(--acai)]/70">
              Delivery
            </div>
            <h2 className="font-display text-3xl leading-none text-[var(--acai-deep)]">
              Get it to your door
            </h2>
            <ul className="mt-2 space-y-4">
              {delivery.map((d) => (
                <li
                  key={d.name}
                  className="flex flex-col gap-2 rounded-2xl bg-[var(--cream)] p-5 ring-1 ring-[var(--acai)]/10"
                >
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-3 font-semibold text-[var(--acai-deep)] hover:text-[var(--acai)]"
                  >
                    <span>{d.name}</span>
                    <span aria-hidden className="text-[var(--acai)]">→</span>
                  </a>
                  <span className="text-sm text-[var(--acai-deep)]/70">{d.note}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs italic text-[var(--acai-deep)]/60">
              More delivery partners coming. Don&rsquo;t see yours? Call the
              shop and we&rsquo;ll sort it.
            </p>
          </article>

          {/* Pick up */}
          <article className="flex flex-col gap-5 rounded-[2.5rem] bg-[var(--cream-warm)] p-8 ring-1 ring-[var(--acai)]/15 md:p-10">
            <div className="text-[0.7rem] uppercase tracking-[0.28em] text-[var(--acai)]/70">
              Pick up
            </div>
            <h2 className="font-display text-3xl leading-none text-[var(--acai-deep)]">
              Call ahead or walk in
            </h2>
            <ul className="mt-2 space-y-4">
              {locations.map((loc) => (
                <li
                  key={loc.slug}
                  className="flex flex-col gap-2 rounded-2xl bg-[var(--cream)] p-5 ring-1 ring-[var(--acai)]/10"
                >
                  <div className="font-semibold text-[var(--acai-deep)]">{loc.name}</div>
                  <div className="text-sm text-[var(--acai-deep)]/70">{loc.address}</div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
                    <a
                      href={"phone" in loc && loc.phone ? `tel:${loc.phone.replace(/\s+/g, "")}` : brand.phoneHref}
                      className="font-semibold text-[var(--acai)] underline-offset-[6px] hover:underline"
                    >
                      Call{" "}
                      {"phone" in loc && loc.phone ? loc.phone : brand.phone}
                    </a>
                    <a
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[var(--acai)]/80 underline-offset-[6px] hover:underline"
                    >
                      Directions →
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
