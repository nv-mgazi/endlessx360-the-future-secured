import { cn } from "@/lib/utils";
import colorMark from "@/assets/brand/logo-color-mark.png.asset.json";
import colorFull from "@/assets/brand/logo-color-full.png.asset.json";
import whiteFull from "@/assets/brand/logo-white-full.png.asset.json";

/** Approved EndlessX360 logo files — used as supplied, never redrawn. */
export const LOGO = { colorMark: colorMark.url, colorFull: colorFull.url, whiteFull: whiteFull.url };

/** Large full-colour approved mark (hero centrepiece). */
export const BrandMark = ({ className }: { className?: string }) => (
  <img src={LOGO.colorMark} alt="EndlessX360" width={1826} height={526} className={className} decoding="async" />
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
