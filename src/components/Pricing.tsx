import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { waLink } from "@/lib/contact";

const tiers = [
  {
    name: "Essential",
    sub: "5–9 Page Website",
    price: "R5,590",
    tag: "Your investment, agreed upfront",
    color: "hsl(var(--brand-sky))",
    features: [
      "5–9 page website, built for enquiries",
      "Mobile-responsive design",
      "WhatsApp chat integration",
      "Essential SEO + Google Business Profile",
      "Contact form + social integration",
      "7 stock images included",
    ],
  },
  {
    name: "Most Popular",
    sub: "9–12 Page Website",
    price: "R8,590",
    tag: "Where most growing teams land",
    color: "hsl(var(--brand-purple))",
    popular: true,
    features: [
      "9–12 page custom website",
      "Custom booking & contact forms",
      "Customized SEO + Google Business Profile",
      "Newsletter integration",
      "2 customized functions built for you",
      "WhatsApp + socials · 15 images",
    ],
  },
  {
    name: "Enterprise",
    sub: "12–20 Page Website",
    price: "R16,900",
    tag: "For established brands",
    color: "hsl(var(--brand-blue))",
    features: [
      "12–20 page custom website",
      "Advanced on-page SEO",
      "API integrations (payments, CRM)",
      "WhatsApp + Facebook chat",
      "2 customized functions built for you",
      "Newsletter + booking forms",
    ],
  },
  {
    name: "Online Store",
    sub: "E-Commerce Website",
    price: "R7,580",
    tag: "You sell around the clock",
    color: "hsl(var(--brand-coral))",
    features: [
      "10 pages + 20 product pages",
      "Secure SA payment gateways",
      "Cart recovery + auto invoicing",
      "Coupons & discount rules",
      "Order dashboard + accounts",
      "30 stock images + chat setup",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative bg-[hsl(var(--muted))] scroll-mt-24">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(var(--brand-yellow)/0.35)] border border-[hsl(var(--brand-yellow))]">
              <Star className="w-4 h-4 text-[hsl(var(--brand-navy))]" />
              <span className="text-sm font-semibold text-[hsl(var(--brand-navy))]">2026 investment guide · South Africa</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Your investment, <span className="gradient-text">known upfront</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              You'll know exactly what your project takes before a single line is written.
              These are the starting points most businesses build from.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((t) => (
              <Card
                key={t.name}
                className={`relative rounded-2xl border-2 bg-card shadow-soft hover:-translate-y-1 hover:shadow-playful transition-smooth ${
                  t.popular ? "border-[hsl(var(--brand-purple))] lg:scale-105" : "border-border"
                }`}
              >
                {t.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[hsl(var(--brand-yellow))] text-[hsl(var(--brand-navy))] text-xs font-bold px-3 py-1 rounded-full shadow-soft">
                    ★ POPULAR
                  </div>
                )}
                <CardContent className="p-6 space-y-5">
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider" style={{ color: t.color }}>
                      {t.name}
                    </div>
                    <div className="text-lg font-bold text-foreground">{t.sub}</div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-[hsl(var(--brand-purple))]">
                      From {t.price}
                    </div>
                    <div className="text-xs text-muted-foreground">{t.tag}</div>
                  </div>

                  <div className="h-px bg-border" />

                  <ul className="space-y-2.5">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: t.color }} />
                        <span className="text-foreground/85">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="w-full rounded-full"
                    style={{ backgroundColor: t.color, color: "white" }}
                  >
                    <a href={waLink(`Hi! I'm interested in the ${t.sub} package.`)} target="_blank" rel="noopener noreferrer">
                      Request a quote
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            Hosting, domains and optional care plans (updates, backups and small changes)
            are quoted separately, so you only ever invest in what you actually need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
