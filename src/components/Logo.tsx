import { cn } from "@/lib/utils";
import colorMark from "@/assets/brand/logo-color-mark.png";
import colorFull from "@/assets/brand/logo-color-full.png";
import whiteFull from "@/assets/brand/logo-white-full.png";

/** Approved EndlessX360 logo files — used as supplied, never redrawn. */
export const LOGO = { colorMark: colorMark, colorFull: colorFull, whiteFull: whiteFull };

/** Large full-colour approved mark (hero centrepiece). */
export const BrandMark = ({ className }: { className?: string }) => (
  <img src={LOGO.colorMark} alt="EndlessX360" width={1200} height={346} className={className} decoding="async" />
);

interface LogoProps {
  className?: string;
  /** Tailwind height class, e.g. "h-8" */
  size?: string;
  /** "dark" = white logo for dark surfaces */
  tone?: "dark" | "light";
  showWordmark?: boolean;
}

const Logo = ({ className, size = "h-7", tone = "light" }: LogoProps) => (
  <img
    src={tone === "dark" ? LOGO.whiteFull : LOGO.colorFull}
    alt="EndlessX360"
    className={cn(size, "w-auto shrink-0", className)}
    decoding="async"
  />
);

export default Logo;
