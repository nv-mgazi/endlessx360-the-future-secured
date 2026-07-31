import { Card, CardContent } from "@/components/ui/card";
import { Globe, Cpu, Smartphone, Search, ShoppingCart, LifeBuoy } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    color: "hsl(var(--brand-purple))",
    bg: "hsl(var(--brand-purple)/0.1)",
    description:
      "You'll be able to turn visitors into real enquiries — from a tight essential site to a 20-page build that makes you the obvious choice in your market.",
  },
  {
    icon: Cpu,
    title: "System Development",
    color: "hsl(var(--brand-blue))",
    bg: "hsl(var(--brand-blue)/0.1)",
    description:
      "You'll be able to drop the spreadsheets and manual admin — bookings, customer records, dashboards and staff portals customized to how you actually work.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    color: "hsl(var(--brand-coral))",
    bg: "hsl(var(--brand-coral)/0.12)",
    description:
      "You'll be able to put your business on your customers' home screen — Android and iOS, clean interfaces, secure back-ends, and room to grow later.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    color: "hsl(var(--brand-mint))",
    bg: "hsl(var(--brand-mint)/0.12)",
    description:
      "You'll be able to sell while you sleep — local payment gateways, recovered abandoned carts, your own discount rules and an order view that makes sense.",
  },
  {
    icon: Search,
    title: "SEO & Google Presence",
    color: "hsl(var(--brand-blue))",
    bg: "hsl(var(--brand-blue)/0.1)",
    description:
      "You'll be able to get found before your competitors — on-page SEO, Google Business Profile and Maps set up properly from day one.",
  },
  {
    icon: LifeBuoy,
    title: "Care & Peace of Mind",
    color: "hsl(var(--brand-purple))",
    bg: "hsl(var(--brand-purple)/0.1)",
    description:
      "You'll feel the difference of never worrying about updates, backups, security patches or small changes — added only if you want your build looked after long term.",
  },
];


const Services = () => {
  return (
    <section id="services" className="py-24 relative bg-background scroll-mt-24">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              What we <span className="gradient-text">build</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Software for South African businesses — websites that bring in work, systems
              that cut admin, and apps people keep on their home screen.
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
