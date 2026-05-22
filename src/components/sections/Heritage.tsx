import { CedarLeaf, PalmFrond } from "@/components/shared/Ornaments";

export function Heritage() {
  return (
    <section className="relative overflow-hidden bg-[var(--cream-warm)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-50 mix-blend-multiply"
      />
      <PalmFrond
        className="pointer-events-none absolute -top-6 -left-10 h-32 w-64 text-[var(--cedar)]/30 hidden md:block"
      />
      <PalmFrond
        flip
        className="pointer-events-none absolute -bottom-8 -right-12 h-32 w-64 text-[var(--cedar)]/25 hidden md:block"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.32em] text-[var(--cedar)]">
              <CedarLeaf className="size-5" />
              Since Ballajura
            </div>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-[var(--acai-deep)] md:text-5xl lg:text-6xl">
              From{" "}
              <span className="italic text-[var(--acai)]">
                Lebanese sweets
              </span>{" "}
              to <span className="italic">viral açaí</span>.
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-[var(--acai-deep)]/85 max-w-xl">
              <p>
                Nabil&rsquo;s started inside Ballajura City Shopping Centre as
                a Lebanese sweets counter — baklava, knafeh, the works.
                When açaí bowls and Dubai chocolate took over Perth&rsquo;s
                feeds, we did what every immigrant family business does best:
                we got good at the new thing without losing the old one.
              </p>
              <p>
                Today the family runs two shops. The Mt Lawley flagship on
                Beaufort Street stays open till 11 most nights — slatted
                warm wood, a neon sign that reads{" "}
                <em className="font-display not-italic">
                  &ldquo;Made for sweet moments&rdquo;
                </em>
                , and a queue that knows what it wants. The Ballajura stall is
                still there too, with the cedar on the sign and the original
                Lebanese sweets in the case.
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden rounded-[8rem_2rem_2rem_2rem] ring-1 ring-[var(--acai)]/15">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/enhanced/story-mt-lawley-interior.jpg"
                  alt="Mt Lawley shop interior with a 'Made for Sweet Moments' neon sign over slatted wood"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-10 aspect-[3/4] overflow-hidden rounded-[2rem_8rem_2rem_2rem] ring-1 ring-[var(--acai)]/15">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/ballajura-stall.jpg"
                  alt="Nabil's Lebanese Sweets stall counter in Ballajura City Shopping Centre"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-4 text-xs uppercase tracking-[0.28em] text-[var(--acai)]/60">
              ↑ Mt Lawley · Beaufort St &nbsp;·&nbsp; Ballajura · Lebanese Sweets
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
