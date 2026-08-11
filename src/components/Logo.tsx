import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  /** Tailwind height class for the mark, e.g. "h-9" */
  size?: string;
}

/**
 * EndlessX360 identity.
 *
 * The mark is a single continuous lemniscate — an endless loop drawn in one
 * unbroken stroke. Where the loop crosses itself it forms the "X", and the
 * two closed eyes read as the "3-6-0" full-circle idea. One shape, three
 * meanings, no letters.
 */
const Logo = ({ className, showWordmark = true, size = "h-9" }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(size, "w-auto shrink-0")}
        aria-label="EndlessX360"
        role="img"
      >
        <defs>
          <linearGradient id="ex-tile" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--brand-ink))" />
            <stop offset="100%" stopColor="hsl(var(--brand-indigo))" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="48" height="48" rx="13" fill="url(#ex-tile)" />

        {/* endless loop — one continuous stroke, crossing at the centre */}
        <path
          d="M13 18.5 C17.2 13.4 22.4 15.2 24 24 C25.6 32.8 30.8 34.6 35 29.5 C38.4 25.4 38.4 22.6 35 18.5 C30.8 13.4 25.6 15.2 24 24 C22.4 32.8 17.2 34.6 13 29.5 C9.6 25.4 9.6 22.6 13 18.5 Z"
          fill="none"
          stroke="hsl(var(--brand-cream))"
          strokeWidth="3.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="24" r="1.9" fill="hsl(var(--brand-accent))" />
      </svg>

      {showWordmark && (
        <div className="flex items-baseline leading-none">
          <span className="text-[1.35rem] font-semibold tracking-tight text-foreground">
            Endless
          </span>
          <span className="text-[1.35rem] font-semibold tracking-tight text-[hsl(var(--brand-indigo))]">
            X360
          </span>
          <span className="ml-1 h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-accent))] translate-y-[-2px]" />
        </div>
      )}
    </div>
  );
};

export default Logo;
