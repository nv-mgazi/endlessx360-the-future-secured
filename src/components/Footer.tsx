import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { NAV } from "@/components/Header";
import { CONTACT, waLink, mailtoHref } from "@/lib/contact";

const Footer = () => (
  <footer className="midnight border-t border-[hsl(var(--mn-text)/0.08)]">
    <div className="container px-5 py-14">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4 max-w-sm">
          <Logo size="h-7" />
          <p className="text-sm leading-relaxed text-[hsl(var(--mn-muted))]">
            A technology development and innovation company creating software, digital
            platforms and intelligent systems for a changing world.
          </p>
        </div>
        <nav aria-label="Footer">
          <h3 className="text-sm font-semibold">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-[hsl(var(--mn-muted))]">
            {[...NAV, { id: "contact", name: "Contact" }].map((n) => (
              <li key={n.id}><a href={`/#${n.id}`} className="hover:text-[hsl(var(--mn-text))] transition-colors">{n.name}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="text-sm font-semibold">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-[hsl(var(--mn-muted))]">
            <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(var(--mn-text))]">WhatsApp · {CONTACT.phone}</a></li>
            <li><a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-[hsl(var(--mn-text))]">Call · {CONTACT.phone}</a></li>
            <li><a href={mailtoHref("Enquiry")} className="hover:text-[hsl(var(--mn-text))]">Email us</a></li>
            <li>{CONTACT.location}</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-3 border-t border-[hsl(var(--mn-text)/0.08)] pt-6 text-sm text-[hsl(var(--mn-muted))] md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} EndlessX360. All rights reserved.</p>
        <Link to="/privacy" className="hover:text-[hsl(var(--mn-text))]">Privacy Policy</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
