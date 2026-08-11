import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";
import { waLink } from "@/lib/contact";

const navItems = [
  { name: "Services", href: "/#services" },
  { name: "Work", href: "/#work" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/#about" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container px-4 pt-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-3 py-2 transition-smooth",
            isScrolled
              ? "bg-background/75 backdrop-blur-xl border border-border shadow-soft"
              : "bg-transparent border border-transparent"
          )}
        >
          <a href="/" className="flex items-center pl-1" aria-label="EndlessX360 home">
            <Logo size="h-8" />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-smooth hover:bg-secondary hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="/#contact"
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground"
            >
              Contact
            </a>
            <Button
              asChild
              size="sm"
              className="rounded-full bg-foreground text-background hover:bg-[hsl(var(--brand-indigo))] h-9 px-5"
            >
              <a href={waLink("Hi! I'd like a quote for a project.")} target="_blank" rel="noopener noreferrer">
                Start a project
              </a>
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-3xl border border-border bg-background/95 backdrop-blur-xl p-3 shadow-soft space-y-1">
            {[...navItems, { name: "Contact", href: "/#contact" }].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-2xl px-4 py-2.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button
              asChild
              className="w-full rounded-full bg-foreground text-background hover:bg-[hsl(var(--brand-indigo))]"
            >
              <a href={waLink("Hi! I'd like a quote for a project.")} target="_blank" rel="noopener noreferrer">
                Start a project
              </a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
