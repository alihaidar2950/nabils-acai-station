type SvgProps = { className?: string };

export function CedarLeaf({ className = "" }: SvgProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 4c-2 8-7 12-14 14 7 2 12 6 14 14 2-8 7-12 14-14-7-2-12-6-14-14z"
        fill="currentColor"
      />
      <path
        d="M32 28c-2 8-7 12-14 14 7 2 12 6 14 14 2-8 7-12 14-14-7-2-12-6-14-14z"
        fill="currentColor"
        opacity="0.8"
      />
      <line
        x1="32"
        y1="4"
        x2="32"
        y2="60"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function PalmFrond({ className = "", flip = false }: SvgProps & { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      aria-hidden
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 50 Q 40 8 116 6 Q 80 20 60 32 Q 90 24 110 18 Q 78 36 56 40 Q 80 36 96 32 Q 70 46 50 46 Q 30 48 4 50z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Sparkle({ className = "" }: SvgProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ArchFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[var(--acai)] ${className}`}
      style={{
        borderTopLeftRadius: "9999px",
        borderTopRightRadius: "9999px",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span
        aria-hidden
        className="absolute inset-0 ring-1 ring-inset ring-[var(--cream)]/30"
        style={{
          borderTopLeftRadius: "9999px",
          borderTopRightRadius: "9999px",
        }}
      />
    </div>
  );
}

export function StarRating({
  value,
  className = "",
}: {
  value: number;
  className?: string;
}) {
  const full = Math.floor(value);
  const half = value - full >= 0.25 && value - full < 0.75;
  const totalShown = full + (half ? 1 : 0);
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      aria-label={`${value} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="size-4"
          aria-hidden
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2 L14.7 8.6 L22 9.3 L16.5 14 L18.2 21 L12 17.3 L5.8 21 L7.5 14 L2 9.3 L9.3 8.6z"
            fill={i < totalShown ? "var(--saffron)" : "rgba(31,11,37,0.15)"}
          />
        </svg>
      ))}
    </span>
  );
}
