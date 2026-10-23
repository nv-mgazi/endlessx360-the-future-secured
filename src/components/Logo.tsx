import { cn } from "@/lib/utils";
import iconColor from "@/assets/brand/EndlessX360_icon_full_color.svg";
import iconWhite from "@/assets/brand/EndlessX360_icon_white.svg";
import heroMark from "@/assets/brand/logo-color-mark.webp";
import colorFull from "@/assets/brand/logo-color-full.webp";
import whiteFull from "@/assets/brand/logo-white-full.webp";

/** Approved EndlessX360 logo files — used as supplied, never redrawn. */
export const LOGO = { iconColor, iconWhite, colorFull, whiteFull };

/** Large full-colour approved standalone icon (hero centrepiece). */
export const BrandMark = ({ className }: { className?: string }) => (
  <img src={LOGO.iconColor} alt="EndlessX360" width={1254} height={725} className={className} decoding="async" />
);

/** Original processed hero artwork — keep its pixels and proportions unchanged.
 *  This is the LCP element: request it at high priority as early as possible. */
export const HeroBrandMark = ({ className }: { className?: string }) => (
  <img src={heroMark} alt="EndlessX360" width={1200} height={346} className={className} decoding="async" {...{ fetchpriority: "high" }} />
);

interface LogoProps {
  className?: string;
  /** Tailwind height class, e.g. "h-8" */
  size?: string;
  /** "dark" = white logo for dark surfaces */
  tone?: "dark" | "light";
}

const Logo = ({ className, size = "h-7", tone = "dark" }: LogoProps) => (
  <img
    src={tone === "dark" ? LOGO.whiteFull : LOGO.colorFull}
    alt="EndlessX360"
    className={cn(size, "w-auto shrink-0", className)}
    decoding="async"
  />
);

export default Logo;
