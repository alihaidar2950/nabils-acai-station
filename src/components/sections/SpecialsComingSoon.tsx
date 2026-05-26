import Link from "next/link";
import { Sparkle } from "@/components/shared/Ornaments";

export function SpecialsComingSoon() {
  return (
    <section className="relative overflow-hidden bg-[var(--cream)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-sunburst-cream opacity-70"
      />
      <div className="relative mx-auto max-w-3xl px-6 py-32 text-center md:py-40 lg:px-10">
        <div className="flex items-center justify-center gap-2 text-[0.7rem] uppercase tracking-[0.32em] text-[var(--acai)]/70">
          <Sparkle className="size-3 text-[var(--saffron)]" />
          What&rsquo;s new
          <Sparkle className="size-3 text-[var(--saffron)]" />
        </div>
        <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight text-[var(--acai-deep)] md:text-7xl">
          Specials, drops &amp; <span className="italic">limited runs</span>.
        </h1>
        <p className="mt-7 mx-auto max-w-xl text-base leading-relaxed text-[var(--acai-deep)]/75 md:text-lg">
          Dubai chocolate drops, seasonal flavours, pistachio matcha experiments,
          one-off collabs. We&rsquo;re wiring this page up — for now, the freshest
          updates land on Instagram first.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://instagram.com/nabilsacaistation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--acai)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cream)] hover:bg-[var(--acai-deep)] transition-colors"
          >
            Follow on Instagram →
          </a>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--acai)]/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--acai)] hover:bg-[var(--cream-warm)] transition-colors"
          >
            Browse the menu
          </Link>
        </div>
      </div>
    </section>
  );
}
