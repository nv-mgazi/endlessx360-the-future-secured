import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

/**
 * EndlessX360 logo mark.
 * An abstract geometric mark: three stacked bars on the left evoke an "E",
 * with an "X" formed by the intersecting diagonals opening to the right,
 * enclosing a small "360" tag. Reads as a mark first, letters second.
 */
const Logo = ({ className, showWordmark = true }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        className="w-9 h-9 shrink-0"
        aria-label="EndlessX360 logo"
        role="img"
      >
        <defs>
          <linearGradient id="ex360-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(193 95% 58%)" />
            <stop offset="100%" stopColor="hsl(250 95% 68%)" />
          </linearGradient>
        </defs>

        {/* Abstract "E" — three horizontal bars, stepped for depth */}
        <rect x="6" y="10"  width="22" height="5" rx="1.5" fill="url(#ex360-grad)" />
        <rect x="6" y="29.5" width="16" height="5" rx="1.5" fill="url(#ex360-grad)" opacity="0.9" />
        <rect x="6" y="49"  width="22" height="5" rx="1.5" fill="url(#ex360-grad)" />

        {/* "X" — two diagonals opening from the E into the mark */}
        <path
          d="M22 12 L58 52"
          stroke="hsl(193 95% 58%)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M58 12 L22 52"
          stroke="hsl(250 95% 68%)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Orbit dot — hints at 360 without a full circle */}
        <circle cx="54" cy="32" r="2.5" fill="hsl(193 95% 58%)" />
      </svg>

      {showWordmark && (
        <div className="flex items-baseline gap-0.5 leading-none">
          <span className="text-xl font-bold tracking-tight gradient-text">
            EX
          </span>
          <span className="text-xl font-bold tracking-tight text-foreground">
            360
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
