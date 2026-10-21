import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";

const navItems = [
  { name: "Home", href: "/#top" },
  { name: "Focus Areas", href: "/#focus" },
  { name: "Work", href: "/#work" },
  { name: "Contact", href: "/#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="midnight fixed top-0 left-0 right-0 z-50 !bg-transparent">
      <nav className="container px-4 pt-4" aria-label="Main">
        <div
          className={cn(
            "flex items-center justify-between rounded-full pl-4 pr-2 py-2 border transition-smooth mn-glass",
            isScrolled ? "shadow-[0_20px_50px_-25px_hsl(var(--mn-deep))]" : "bg-[hsl(var(--mn-bg)/0.35)]"
          )}
        >
          <a href="/#top" aria-label="EndlessX360 home">
            <Logo tone="dark" size="h-6" />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.slice(0, 3).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[hsl(var(--mn-muted))] transition-smooth hover:text-[hsl(var(--mn-text))] hover:bg-[hsl(var(--mn-text)/0.06)]"
              >
                {item.name}
              </a>
            ))}
          </div>

          <a
            href="/#contact"
            className="hidden md:inline-flex h-9 items-center rounded-full px-5 text-sm font-semibold mn-btn-primary"
          >
            Contact
          </a>

          <button
            className="md:hidden p-2 text-[hsl(var(--mn-text))]"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-3xl border mn-glass p-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-[hsl(var(--mn-text))] hover:bg-[hsl(var(--mn-text)/0.06)]"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
