"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Wordmark } from "./Wordmark";
import { brand } from "@/lib/brand";

type NavLink = { href: string; label: string };

const links: NavLink[] = [
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Locations" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--acai)]/15 bg-[var(--cream)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10 lg:py-5">
        <div className="flex items-center gap-5">
          <Wordmark size="md" />
          {/* Live open indicator */}
          <div className="hidden items-center gap-1.5 rounded-full bg-[var(--cream-warm)] px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--acai-deep)] md:inline-flex">
            <span className="relative inline-flex">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-[var(--cedar)] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--cedar)]" />
            </span>
            Open · till 11
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-[var(--acai)]"
                    : "text-[var(--acai-deep)] hover:text-[var(--acai)]"
                }`}
              >
                {link.label}
                {active && (
                  <span
                    aria-hidden
                    className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--saffron)]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={brand.phoneHref}
            className="hidden rounded-full border border-[var(--acai)]/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acai)] hover:bg-[var(--cream-warm)] sm:inline-flex"
          >
            Call
          </a>
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--saffron)] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--acai-deep)] shadow-[0_8px_20px_-8px_rgba(255,183,64,0.7)] ring-1 ring-[var(--acai)]/10 transition-all hover:-translate-y-0.5 hover:bg-[var(--cream)]"
          >
            Order
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <button
            className="-mr-1 flex size-10 flex-col items-center justify-center lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-[var(--acai-deep)]"
              animate={open ? "open" : "closed"}
              variants={{
                open: { rotate: 45, translateY: 4 },
                closed: { rotate: 0, translateY: 0 },
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-[var(--acai-deep)]"
              animate={open ? "open" : "closed"}
              variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-[var(--acai-deep)]"
              animate={open ? "open" : "closed"}
              variants={{
                open: { rotate: -45, translateY: -4 },
                closed: { rotate: 0, translateY: 0 },
              }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[var(--acai)]/15 bg-[var(--cream)] lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-5">
              {links.map((link) => {
                const active = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-base font-medium ${
                      active
                        ? "bg-[var(--cream-warm)] text-[var(--acai)]"
                        : "text-[var(--acai-deep)] hover:bg-[var(--cream-warm)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={brand.phoneHref}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-[var(--acai-deep)] hover:bg-[var(--cream-warm)]"
              >
                Call {brand.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
