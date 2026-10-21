import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";

export const NAV = [
  { id: "home", name: "Home" },
  { id: "technology", name: "Technology" },
  { id: "innovations", name: "Innovations" },
  { id: "perspective", name: "Our Perspective" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      // active section = last section whose top passed 40% of viewport
      const ids = [...NAV.map((n) => n.id), "contact"];
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useLayoutEffect(() => {
    const wrap = linksRef.current;
    const el = wrap?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!wrap || !el) return setPill(null);
    setPill({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active]);

  return (
    <header className="midnight fixed top-0 left-0 right-0 z-50 !bg-transparent">
      <nav className="container px-4 pt-4" aria-label="Main">
        <div
          className={cn(
            "relative flex items-center justify-between rounded-full pl-5 pr-2 border mn-glass transition-smooth",
            scrolled ? "py-1.5 shadow-[0_20px_50px_-25px_hsl(var(--mn-deep))] bg-[hsl(var(--mn-bg)/0.6)]" : "py-2.5 bg-[hsl(var(--mn-bg)/0.3)]"
          )}
        >
          <a href="#home" aria-label="EndlessX360 home">
            <Logo size="h-6" />
          </a>

          <div ref={linksRef} className="relative hidden md:flex items-center gap-1">
            {pill && (
              <span
                aria-hidden="true"
                className="absolute top-0 bottom-0 rounded-full bg-[hsl(var(--mn-text)/0.08)] border border-[hsl(var(--mn-text)/0.08)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ left: pill.left, width: pill.width }}
              />
            )}
            {NAV.map((item) => (
              <a
                key={item.id}
                data-id={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active === item.id ? "text-[hsl(var(--mn-text))]" : "text-[hsl(var(--mn-muted))] hover:text-[hsl(var(--mn-text))]"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            aria-current={active === "contact" ? "true" : undefined}
            className="hidden md:inline-flex h-10 items-center rounded-full px-6 text-sm font-semibold mn-btn-primary"
          >
            Contact
          </a>

          <button
            className="md:hidden p-2.5 text-[hsl(var(--mn-text))]"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-6 right-6 -bottom-px h-px origin-left bg-gradient-to-r from-[hsl(var(--mn-cyan))] to-[hsl(var(--mn-violet))] opacity-70"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>

        <div
          id="mobile-menu"
          className={cn(
            "md:hidden grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 pointer-events-none"
          )}
        >
          <div className="overflow-hidden">
            <div className="rounded-3xl border mn-glass bg-[hsl(var(--mn-bg)/0.85)] p-2 space-y-1">
              {[...NAV, { id: "contact", name: "Contact" }].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-base",
                    active === item.id ? "bg-[hsl(var(--mn-text)/0.08)] text-[hsl(var(--mn-text))]" : "text-[hsl(var(--mn-muted))]"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
