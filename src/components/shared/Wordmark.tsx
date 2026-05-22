import Link from "next/link";

type Props = {
  tone?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
  showMark?: boolean;
};

export function Wordmark({
  tone = "dark",
  size = "md",
  asLink = true,
  showMark = true,
}: Props) {
  const dark = tone === "dark";
  const sizes = {
    sm: {
      primary: "text-2xl",
      secondary: "text-[0.55rem] tracking-[0.32em]",
      mark: "size-10",
    },
    md: {
      primary: "text-3xl",
      secondary: "text-[0.625rem] tracking-[0.34em]",
      mark: "size-12",
    },
    lg: {
      primary: "text-5xl",
      secondary: "text-xs tracking-[0.4em]",
      mark: "size-16",
    },
  }[size];

  const inner = (
    <span className="inline-flex items-center gap-3 leading-none">
      {showMark && (
        <span
          className={`relative shrink-0 overflow-hidden rounded-full ring-1 ${
            dark
              ? "ring-[var(--acai)]/20 shadow-[0_8px_18px_-12px_rgba(31,11,37,0.55)]"
              : "ring-[var(--cream)]/25"
          } ${sizes.mark}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/enhanced/brand-mascot-medallion.jpg"
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
          />
        </span>
      )}
      <span className="inline-flex flex-col items-start">
        <span
          className={`font-display italic font-medium ${sizes.primary} ${
            dark ? "text-[var(--acai)]" : "text-[var(--cream)]"
          }`}
          style={{ letterSpacing: "-0.01em" }}
        >
          Nabil&rsquo;s
        </span>
        <span
          className={`mt-1 font-semibold uppercase ${sizes.secondary} ${
            dark ? "text-[var(--acai-deep)]" : "text-[var(--lavender)]"
          }`}
        >
          Açaí&nbsp;Station
        </span>
      </span>
    </span>
  );

  if (!asLink) return inner;
  return (
    <Link href="/" aria-label="Nabil's Açaí Station home" className="group">
      {inner}
    </Link>
  );
}
