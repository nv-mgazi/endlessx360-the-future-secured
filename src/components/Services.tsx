import { Card, CardContent } from "@/components/ui/card";
import { Globe, Cpu, Smartphone, Zap, Search, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    color: "hsl(var(--brand-purple))",
    bg: "hsl(var(--brand-purple)/0.1)",
    description:
      "Custom websites and landing pages built to convert — from 5-page starters to 20-page authority sites. WordPress, React, or fully custom.",
  },
  {
    icon: Cpu,
    title: "System Development",
    color: "hsl(var(--brand-blue))",
    bg: "hsl(var(--brand-blue)/0.1)",
    description:
      "Booking engines, CRMs, dashboards, admin portals, and internal tools that automate the boring parts of your business.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    color: "hsl(var(--brand-coral))",
    bg: "hsl(var(--brand-coral)/0.12)",
    description:
      "iOS and Android apps for products, communities, and services — with clean UX and secure back-ends.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    color: "hsl(var(--brand-mint))",
    bg: "hsl(var(--brand-mint)/0.12)",
    description:
      "Online stores with SA-friendly payment gateways, cart recovery, coupons, and an order dashboard you'll actually use.",
  },
  {
    icon: Search,
    title: "SEO & Google Setup",
    color: "hsl(var(--brand-blue))",
    bg: "hsl(var(--brand-blue)/0.1)",
    description:
      "On-page SEO, Google My Business, and Maps setup so local customers find you first — from day one.",
  },
  {
    icon: Zap,
    title: "Integrations & Automation",
    color: "hsl(var(--brand-purple))",
    bg: "hsl(var(--brand-purple)/0.1)",
    description:
      "WhatsApp chat, CRMs, payment gateways, booking, newsletters — connected into one smooth workflow.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              What we <span className="gradient-text">build</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Focused on the three things that actually move a business forward:
              a great website, systems that save you time, and apps your customers love.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card
                key={s.title}
                className="border-border bg-card rounded-2xl shadow-soft hover:-translate-y-1 hover:shadow-playful transition-smooth"
              >
                <CardContent className="p-6 space-y-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: s.bg }}
                  >
                    <s.icon className="w-6 h-6" style={{ color: s.color }} />
                  </div>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
