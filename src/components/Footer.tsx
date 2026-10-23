import { Link } from "react-router-dom";
import { ArrowUp, Mail } from "lucide-react";
import Logo from "@/components/Logo";
import { NAV } from "@/components/Header";
import { scrollToHome } from "@/lib/scroll";
import { mailtoHref } from "@/lib/contact";
import SocialLinks from "@/components/SocialLinks";

const Footer = () => (
  <footer className="midnight relative overflow-hidden border-t border-[hsl(var(--mn-text)/0.08)]">
    {/* Atmospheric horizon glow + hairline separator */}
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,hsl(var(--mn-cyan)/0.55),transparent)]" />
    <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-32 h-64 [background:radial-gradient(640px_200px_at_50%_0%,hsl(var(--mn-blue)/0.1),transparent_70%)]" />

    <div className="container relative max-w-6xl px-5 py-10 md:px-8 md:py-12">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-x-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.6fr)_minmax(0,1.1fr)] lg:gap-x-12">
        <div className="max-w-sm md:col-span-2 lg:col-span-1">
          <Logo size="h-7" />
          <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--mn-muted))]">
            A technology development and innovation company creating software, digital
            platforms and intelligent systems for a changing world.
          </p>

        </div>

        <nav aria-label="Footer">
          <h3 className="text-sm font-semibold">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-[hsl(var(--mn-muted))]">
            {[...NAV, { id: "contact", name: "Contact" }].map((n) => (
              <li key={n.id}>
                <a href={`/#${n.id}`} onClick={n.id === "home" ? scrollToHome : undefined} className="hover:text-[hsl(var(--mn-text))] transition-colors">
                  {n.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0">
          <h3 className="text-sm font-semibold">Let's connect</h3>
          <SocialLinks />
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={mailtoHref("Enquiry")}
              className="inline-flex h-10 items-center gap-2 rounded-full border mn-glass px-4 text-sm font-medium transition-smooth hover:border-[hsl(var(--mn-cyan)/0.4)]"
            >
              <Mail className="h-4 w-4 text-[hsl(var(--mn-cyan))]" />
              Email us
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-[hsl(var(--mn-text)/0.08)] pt-5 text-sm text-[hsl(var(--mn-muted))] md:mt-10 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} EndlessX360. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link to="/privacy" className="hover:text-[hsl(var(--mn-text))] transition-colors">
            Privacy Policy
          </Link>
          <a href="#home" onClick={scrollToHome} className="inline-flex items-center gap-2 hover:text-[hsl(var(--mn-text))] transition-colors">
            Back to top
            <ArrowUp className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
