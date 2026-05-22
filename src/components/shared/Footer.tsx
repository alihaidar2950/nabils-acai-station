import Link from "next/link";
import { BiLogoInstagram, BiLogoTiktok } from "react-icons/bi";
import { Wordmark } from "./Wordmark";
import { brand, locations } from "@/lib/brand";
import { CedarLeaf } from "./Ornaments";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--acai-deep)] text-[var(--cream)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-sunburst-acai opacity-60"
      />
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20 md:pb-12 md:pt-24 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <div className="text-[var(--cream)]">
              <Wordmark size="lg" tone="light" asLink={false} />
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--lavender)]">
              A Lebanese sweets family in Perth, doing açaí, crêpes and Dubai
              chocolate. Mt Lawley and Ballajura. Made for sweet moments.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href={brand.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--cream)]/20 transition-colors hover:bg-[var(--cream)]/10"
              >
                <BiLogoInstagram className="size-5" />
              </a>
              <a
                href={brand.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--cream)]/20 transition-colors hover:bg-[var(--cream)]/10"
              >
                <BiLogoTiktok className="size-5" />
              </a>
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--cream)]/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[var(--cream)]/10"
              >
                Call {brand.phone}
              </a>
            </div>
          </div>

          {locations.map((loc, idx) => (
            <div key={loc.slug} className="md:col-span-3">
              <div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.28em] text-[var(--saffron)]">
                {idx === 1 && (
                  <CedarLeaf className="size-3.5 text-[var(--cedar)]" />
                )}
                {loc.name}
              </div>
              <address className="mt-3 not-italic text-sm leading-relaxed text-[var(--lavender)]">
                {loc.address}
              </address>
              {loc.hours && (
                <div className="mt-3 text-sm text-[var(--lavender)]/80">
                  Open daily till 10 – 11 PM
                </div>
              )}
              <a
                href={loc.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-[var(--honey)] hover:underline underline-offset-4"
              >
                Open in Maps →
              </a>
            </div>
          ))}

          <div className="md:col-span-1">
            <div className="text-[0.7rem] uppercase tracking-[0.28em] text-[var(--saffron)]">
              Site
            </div>
            <ul className="mt-3 space-y-2 text-sm text-[var(--lavender)]">
              <li>
                <Link href="/menu" className="hover:text-[var(--cream)]">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-[var(--cream)]">
                  Locations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[var(--cream)]/15 pt-6 text-xs text-[var(--lavender)]/70 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {brand.name}. Made in Perth.
          </p>
          <p className="italic font-display text-sm text-[var(--honey)]">
            Made for sweet moments.
          </p>
        </div>
      </div>
    </footer>
  );
}
