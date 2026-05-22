import Link from "next/link";
import { Sparkle } from "@/components/shared/Ornaments";

export function BlogComingSoon() {
  return (
    <section className="relative overflow-hidden bg-[var(--cream)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-sunburst-cream opacity-70"
      />
      <div className="relative mx-auto max-w-3xl px-6 py-32 text-center md:py-40 lg:px-10">
        <div className="flex items-center justify-center gap-2 text-[0.7rem] uppercase tracking-[0.32em] text-[var(--acai)]/70">
          <Sparkle className="size-3 text-[var(--saffron)]" />
          Coming soon
          <Sparkle className="size-3 text-[var(--saffron)]" />
        </div>
        <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight text-[var(--acai-deep)] md:text-7xl">
          Stories from the <span className="italic">station</span>.
        </h1>
        <p className="mt-7 mx-auto max-w-xl text-base leading-relaxed text-[var(--acai-deep)]/75 md:text-lg">
          We&rsquo;re putting together a few good ones — the kataifi
          recipe debate, the night the Dubai chocolate sold out by 8 PM, the
          first batch of pistachio matcha. In the meantime, the freshest
          updates live on Instagram.
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
