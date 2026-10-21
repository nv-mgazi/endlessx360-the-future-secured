import { useId } from "react";
import { cn } from "@/lib/utils";

/** Approved EndlessX360 icon geometry — do not alter these paths. */
export const MARK_PATHS = {
  main: "M45 457 L53 477 L76 520 L98 550 L113 567 L131 585 L162 610 L182 623 L219 642 L252 654 L275 660 L319 666 L362 666 L397 662 L430 655 L461 645 L511 622 L540 605 L589 570 L621 544 L1055 161 L1184 45 L1200 29 L1078 29 L1046 32 L1024 36 L997 44 L963 60 L946 71 L930 84 L721 281 L535 449 L479 497 L441 522 L413 536 L382 547 L351 552 L325 552 L296 547 L260 533 L240 521 L219 504 L193 476 L176 450 L161 414 L154 382 L152 353 L154 322 L161 288 L169 265 L187 233 L202 213 L218 196 L236 180 L258 164 L288 148 L321 138 L336 136 L372 136 L394 139 L422 146 L445 155 L465 165 L508 194 L554 235 L645 326 L707 271 L742 237 L655 149 L607 107 L559 73 L509 47 L473 34 L450 28 L424 23 L397 20 L356 20 L334 22 L300 28 L268 37 L227 54 L205 66 L180 82 L153 103 L118 137 L106 151 L83 182 L68 207 L55 233 L41 271 L33 304 L29 334 L28 368 L31 401 L36 427 Z",
  leg: "M759 443 L806 499 L864 562 L909 602 L945 626 L981 643 L1002 650 L1040 658 L1076 661 L1163 661 L1157 653 L862 356 L858 355 Z",
  eTop: "M209 339 L402 339 L419 336 L431 331 L442 323 L516 250 L301 251 L291 256 Z",
  eBottom: "M209 376 L283 453 L297 461 L476 461 L410 392 L399 383 L387 378 L377 376 Z",
};

const c = (v: string) => `hsl(var(${v}))`;

export const BrandMark = ({ className, title = "EndlessX360" }: { className?: string; title?: string }) => {
  const id = useId().replace(/:/g, "");
  const all = [MARK_PATHS.main, MARK_PATHS.leg, MARK_PATHS.eTop, MARK_PATHS.eBottom];
  return (
    <svg viewBox="0 0 1254 725" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title}>
      <defs>
        <linearGradient id={`m${id}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor={c("--mn-blue")} />
          <stop offset="55%" stopColor={c("--mn-cyan")} />
          <stop offset="100%" stopColor={c("--mn-violet")} />
        </linearGradient>
        <linearGradient id={`l${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c("--mn-violet")} />
          <stop offset="60%" stopColor={c("--mn-blue")} />
          <stop offset="100%" stopColor={c("--mn-cyan")} />
        </linearGradient>
        <linearGradient id={`e${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c("--mn-silver")} />
          <stop offset="100%" stopColor={c("--mn-cyan")} />
        </linearGradient>
        <linearGradient id={`s${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(0 0% 100%)" stopOpacity="0.22" />
          <stop offset="45%" stopColor="hsl(0 0% 100%)" stopOpacity="0.04" />
          <stop offset="100%" stopColor="hsl(0 0% 100%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={MARK_PATHS.main} fill={`url(#m${id})`} />
      <path d={MARK_PATHS.leg} fill={`url(#l${id})`} />
      <path d={MARK_PATHS.eTop} fill={`url(#e${id})`} />
      <path d={MARK_PATHS.eBottom} fill={`url(#e${id})`} />
      {all.map((d, i) => (
        <path key={i} d={d} fill={`url(#s${id})`} />
      ))}
    </svg>
  );
};

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  /** Tailwind height class for the mark, e.g. "h-8" */
  size?: string;
  /** "dark" = light text for dark surfaces */
  tone?: "dark" | "light";
}

const Logo = ({ className, showWordmark = true, size = "h-7", tone = "light" }: LogoProps) => (
  <div className={cn("flex items-center gap-2.5", className)}>
    <BrandMark className={cn(size, "w-auto shrink-0")} />
    {showWordmark && (
      <span
        className={cn(
          "text-[1.2rem] font-semibold tracking-tight leading-none",
          tone === "dark" ? "text-[hsl(var(--mn-text))]" : "text-foreground"
        )}
      >
        Endless<span className="mn-gradient-text">X360</span>
      </span>
    )}
  </div>
);

export default Logo;
