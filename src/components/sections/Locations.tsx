import Link from "next/link";
import { locations } from "@/lib/brand";

function shortAddress(full: string) {
  // Strip postcode + state for the compact strip; keep street + suburb.
  return full
    .replace(/\sWA\s?\d{4}.*$/i, "")
    .replace(/\s·\s/g, " · ");
}

function shortHours(loc: (typeof locations)[number]) {
  if (loc.hours) return "Open till 11 most nights";
  return "Centre hours · Call for evenings";
}

export function Locations() {
  return (
    <section className="relative overflow-hidden bg-[var(--cream)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-50 mix-blend-multiply"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24 lg:px-10">
        <div className="max-w-2xl">
          <div className="text-[0.7rem] uppercase tracking-[0.32em] text-[var(--acai)]/70">
            Find us
          </div>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-[var(--acai-deep)] md:text-5xl">
            Two shops in <span className="italic">Perth</span>.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {locations.map((loc) => (
            <div
              key={loc.slug}
              className="flex flex-col gap-3 rounded-[2rem] bg-[var(--cream-warm)] p-6 ring-1 ring-[var(--acai)]/15 md:p-7"
            >
              <h3 className="font-display text-2xl leading-none text-[var(--acai-deep)]">
                {loc.name}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--acai-deep)]/75">
                {shortAddress(loc.address)}
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--acai)]/70">
                {shortHours(loc)}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--acai)] underline-offset-[6px] hover:underline"
                >
                  Directions →
                </a>
                <Link
                  href={`/locations#${loc.slug}`}
                  className="font-semibold text-[var(--acai)]/80 underline-offset-[6px] hover:underline"
                >
                  See hours →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
