import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

/**
 * EndlessX360 logo mark.
 * Same spirit as the reference — a bold "X" with "360" beside it and a
 * metallic blue gradient — but the round frame is replaced with a
 * horizontal bracket (top + bottom rails with short returns) so the mark
 * reads flat, modern, and rectangular instead of circular.
 */
const Logo = ({ className, showWordmark = true }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 96 64"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-auto shrink-0"
        aria-label="EndlessX360 logo"
        role="img"
      >
        <defs>
          <linearGradient id="ex360-steel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#dbe9f5" />
            <stop offset="45%"  stopColor="#7BA4D0" />
            <stop offset="100%" stopColor="#2E5E99" />
          </linearGradient>
          <linearGradient id="ex360-steel-2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#c9dcec" />
            <stop offset="55%"  stopColor="#5c8bbd" />
            <stop offset="100%" stopColor="#1e4a7a" />
          </linearGradient>
        </defs>

        {/* Horizontal bracket frame — replaces the circle from the reference */}
        {/* top rail */}
        <path d="M6 10 H90" stroke="url(#ex360-steel)" strokeWidth="2.5" strokeLinecap="round" />
        {/* bottom rail */}
        <path d="M6 54 H90" stroke="url(#ex360-steel)" strokeWidth="2.5" strokeLinecap="round" />
        {/* left return */}
        <path d="M6 10 V22 M6 42 V54" stroke="url(#ex360-steel)" strokeWidth="2.5" strokeLinecap="round" />
        {/* right return */}
        <path d="M90 10 V22 M90 42 V54" stroke="url(#ex360-steel)" strokeWidth="2.5" strokeLinecap="round" />

        {/* The X */}
        <path
          d="M12 16 L38 48"
          stroke="url(#ex360-steel)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M38 16 L12 48"
          stroke="url(#ex360-steel-2)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* center dot on the X */}
        <circle cx="25" cy="32" r="1.8" fill="#eaf2fa" />

        {/* 360 */}
        <text
          x="46"
          y="40"
          fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
          fontSize="22"
          fontWeight="800"
          letterSpacing="0.5"
          fill="url(#ex360-steel)"
        >
          360
        </text>
      </svg>

      {showWordmark && (
        <div className="flex items-baseline gap-0.5 leading-none">
          <span className="text-xl font-bold tracking-tight text-[hsl(var(--brand-blue))]">
            Endless
          </span>
          <span className="text-xl font-bold tracking-tight text-[hsl(var(--brand-navy))]">
            X360
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
