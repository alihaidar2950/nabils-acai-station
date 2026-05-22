import Link from "next/link";
import { locations } from "@/lib/brand";
import { StarRating, CedarLeaf } from "@/components/shared/Ornaments";

export function Locations() {
  return (
    <section className="relative overflow-hidden bg-[var(--cream)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-50 mix-blend-multiply"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28 lg:px-10">
        <div className="max-w-2xl">
          <div className="text-[0.7rem] uppercase tracking-[0.32em] text-[var(--acai)]/70">
            Two shops · One family
          </div>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-[var(--acai-deep)] md:text-5xl lg:text-6xl">
            Come find us in <span className="italic">Perth</span>.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {locations.map((loc, idx) => (
            <article
              key={loc.slug}
              className="group relative flex flex-col overflow-hidden rounded-[3rem] bg-[var(--cream-warm)] ring-1 ring-[var(--acai)]/15"
            >
              {/* Arched image header */}
              <div className="relative aspect-[16/9] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    idx === 0
                      ? "/images/storefront-mt-lawley.jpg"
                      : "/images/ballajura-stall.jpg"
                  }
                  alt={`${loc.name} shop`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 50%, rgba(31,11,37,0.55))",
                  }}
                />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-4 text-[var(--cream)]">
                  <h3 className="font-display text-3xl leading-none">
                    {loc.name}
                  </h3>
                  <div className="flex items-center gap-2 rounded-full bg-[var(--cream)]/15 px-3 py-1.5 backdrop-blur">
                    <StarRating value={loc.rating} />
                    <span className="text-xs font-semibold">{loc.rating}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-5 p-7 md:p-9">
                <p className="text-sm leading-relaxed text-[var(--acai-deep)]/80">
                  {loc.address}
                </p>
                {loc.note && (
                  <p className="flex items-start gap-2 text-sm italic text-[var(--cedar)]">
                    {idx === 1 && (
                      <CedarLeaf className="mt-0.5 size-4 shrink-0" />
                    )}
                    {loc.note}
                  </p>
                )}

                {loc.hours && (
                  <dl className="grid grid-cols-2 gap-x-6 gap-y-1.5 rounded-2xl bg-[var(--cream)] p-5 text-sm">
                    {loc.hours.map(([day, hrs]) => (
                      <div key={day} className="flex justify-between gap-4">
                        <dt className="font-semibold text-[var(--acai-deep)]">
                          {day}
                        </dt>
                        <dd className="text-[var(--acai-deep)]/70">{hrs}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--acai)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cream)] transition-colors hover:bg-[var(--acai-deep)]"
                  >
                    Get directions →
                  </a>
                  {"phone" in loc && loc.phone && (
                    <a
                      href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--acai)]/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--acai)] hover:bg-[var(--cream)]"
                    >
                      Call {loc.phone}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
