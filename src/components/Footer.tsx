import { Link } from "react-router-dom";
import { ArrowUp, Mail, MessageCircle } from "lucide-react";
import Logo from "@/components/Logo";
import { NAV } from "@/components/Header";
import { scrollToHome } from "@/lib/scroll";
import { waLink, mailtoHref } from "@/lib/contact";

const Footer = () => (
  <footer className="midnight relative overflow-hidden border-t border-[hsl(var(--mn-text)/0.08)]">
    {/* Atmospheric horizon glow + hairline separator */}
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,hsl(var(--mn-cyan)/0.55),transparent)]" />
    <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-32 h-64 [background:radial-gradient(640px_200px_at_50%_0%,hsl(var(--mn-blue)/0.1),transparent_70%)]" />

    <div className="container relative px-5 py-16 md:py-20">
      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
        <div className="max-w-md">
          <Logo size="h-7" />
          <p className="mt-5 text-sm leading-relaxed text-[hsl(var(--mn-muted))]">
            A technology development and innovation company creating software, digital
            platforms and intelligent systems for a changing world.
          </p>

          <div className="mt-8">
            <h3 className="text-sm font-semibold">Let's connect</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-full border mn-glass px-4 text-sm font-medium transition-smooth hover:border-[hsl(var(--mn-cyan)/0.4)]"
              >
                <MessageCircle className="h-4 w-4 text-[hsl(var(--mn-cyan))]" />
                WhatsApp
              </a>
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
      </div>

      <div className="mt-14 flex flex-col gap-4 border-t border-[hsl(var(--mn-text)/0.08)] pt-6 text-sm text-[hsl(var(--mn-muted))] md:flex-row md:items-center md:justify-between">
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
