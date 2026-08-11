import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
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
    <section id="pricing" className="py-28 md:py-36 relative bg-background scroll-mt-24">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="eyebrow">2026 investment guide · South Africa</div>
            <h2 className="display mt-5 text-[clamp(2rem,5.5vw,4rem)] max-w-3xl">
              Your investment, known upfront
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              You'll know exactly what your project takes before a single line is written.
              These are the starting points most businesses build from.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {tiers.map((t) => (
              <Card
                key={t.name}
                className={`relative rounded-3xl border bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-playful ${
                  t.popular
                    ? "border-foreground/80 bg-foreground text-background"
                    : "border-border"
                }`}
              >
                <CardContent className="p-7 space-y-6">
                  <div className="space-y-1">
                    <div
                      className={`text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${
                        t.popular ? "text-background/60" : "text-muted-foreground"
                      }`}
                    >
                      {t.name}
                    </div>
                    <div className="text-lg font-semibold tracking-tight">{t.sub}</div>
                  </div>

                  <div className="space-y-1">
                    <div className="display text-3xl">From {t.price}</div>
                    <div
                      className={`text-xs ${
                        t.popular ? "text-background/60" : "text-muted-foreground"
                      }`}
                    >
                      {t.tag}
                    </div>
                  </div>

                  <div className={`h-px ${t.popular ? "bg-background/20" : "bg-border"}`} />

                  <ul className="space-y-2.5">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            t.popular ? "text-[hsl(var(--brand-accent))]" : "text-[hsl(var(--brand-indigo))]"
                          }`}
                        />
                        <span className={t.popular ? "text-background/85" : "text-foreground/85"}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full rounded-full ${
                      t.popular
                        ? "bg-background text-foreground hover:bg-background/90"
                        : "bg-foreground text-background hover:bg-[hsl(var(--brand-indigo))]"
                    }`}
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
