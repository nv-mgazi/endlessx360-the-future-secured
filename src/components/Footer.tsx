import { Separator } from "@/components/ui/separator";
import Logo from "@/components/Logo";
import { CONTACT, waLink, mailtoHref } from "@/lib/contact";
import { MessageCircle, Phone, Mail } from "lucide-react";


const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <Logo />
              <p className="text-sm text-muted-foreground">
                Web, system and mobile app development in Durban, serving businesses
                across KwaZulu-Natal and South Africa. Fixed project pricing, quoted upfront.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#services" className="hover:text-[hsl(var(--brand-purple))] transition-colors">Web Development</a></li>
                <li><a href="/#services" className="hover:text-[hsl(var(--brand-purple))] transition-colors">System Development</a></li>
                <li><a href="/#services" className="hover:text-[hsl(var(--brand-purple))] transition-colors">Mobile App Development</a></li>
                <li><a href="/#services" className="hover:text-[hsl(var(--brand-purple))] transition-colors">E-Commerce</a></li>
                <li><a href="/#work" className="hover:text-[hsl(var(--brand-purple))] transition-colors">Our work</a></li>
                <li><a href="/insights" className="hover:text-[hsl(var(--brand-purple))] transition-colors">Insights</a></li>
                <li><a href="/#pricing" className="hover:text-[hsl(var(--brand-purple))] transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold">Get in touch</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[hsl(var(--brand-purple))] transition-colors">
                    <MessageCircle className="w-4 h-4" /> {CONTACT.phone}
                  </a>
                </li>
                <li>
                  <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-2 hover:text-[hsl(var(--brand-purple))] transition-colors">
                    <Phone className="w-4 h-4" /> {CONTACT.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-[hsl(var(--brand-purple))] transition-colors break-all">
                    <Mail className="w-4 h-4 flex-shrink-0" /> {CONTACT.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2026 EndlessX360. All rights reserved.</p>
            <p className="text-center">{CONTACT.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
