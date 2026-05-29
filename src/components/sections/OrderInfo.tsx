import { Sparkle } from "@/components/shared/Ornaments";
import { brand, locations } from "@/lib/brand";
import { SiDoordash, SiUbereats } from "react-icons/si";

const delivery = [
  {
    name: "Uber Eats",
    url: brand.orderUrl,
    note: "Mt Lawley & Ballajura — usually 25–40 min.",
    logo: SiUbereats,
    logoClassName: "text-[#06C167]",
  },
  {
    name: "DoorDash",
    url: brand.doordashUrl,
    note: "Ballajura delivery through DoorDash.",
    logo: SiDoordash,
    logoClassName: "text-[#FF3008]",
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
          Tap Uber Eats or DoorDash for delivery, or walk in and grab it warm.
          Both shops in Perth take walk-ins all day.
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
              {delivery.map((d) => {
                const Logo = d.logo;

                return (
                  <li
                    key={d.name}
                    className="rounded-2xl bg-[var(--cream)] p-5 ring-1 ring-[var(--acai)]/10"
                  >
                    <a
                      href={d.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 text-[var(--acai-deep)] hover:text-[var(--acai)]"
                    >
                      <span className="flex min-w-0 items-center gap-4">
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_10px_24px_-18px_rgba(31,11,37,0.45)] ring-1 ring-[var(--acai)]/10">
                          <Logo
                            aria-hidden
                            className={`size-7 ${d.logoClassName}`}
                          />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-semibold">{d.name}</span>
                          <span className="mt-1 block text-sm text-[var(--acai-deep)]/70">
                            {d.note}
                          </span>
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className="shrink-0 text-[var(--acai)] transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="text-xs italic text-[var(--acai-deep)]/60">
              Availability can vary by location and time. Call the shop if you
              need a hand with pickup.
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
