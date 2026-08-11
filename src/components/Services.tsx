import { ArrowUpRight } from "lucide-react";

const services = [
  {
    n: "01",
    title: "Websites & Landing Pages",
    description:
      "You'll be able to turn visitors into real enquiries — from a tight essential site to a full build that makes you the obvious choice in your market.",
  },
  {
    n: "02",
    title: "Business Systems",
    description:
      "You'll be able to drop the spreadsheets and manual admin — bookings, customer records, dashboards and staff portals customized to how you actually work.",
  },
  {
    n: "03",
    title: "Mobile Applications",
    description:
      "You'll be able to put your business on your customers' home screen — Android and iOS, clean interfaces, secure back-ends, room to grow later.",
  },
  {
    n: "04",
    title: "E-Commerce",
    description:
      "You'll be able to sell while you sleep — local payment gateways, recovered carts, your own discount rules and an order view that makes sense.",
  },
  {
    n: "05",
    title: "SEO & Google Presence",
    description:
      "You'll be able to get found before your competitors — on-page SEO, Google Business Profile and Maps set up properly from day one.",
  },
  {
    n: "06",
    title: "Care & Peace of Mind",
    description:
      "You'll feel the difference of never worrying about updates, backups or security patches — added only if you want your build looked after long term.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 md:py-36 bg-background scroll-mt-24">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow">Capabilities</div>
          <h2 className="display mt-5 text-[clamp(2rem,5.5vw,4rem)] max-w-3xl">
            What you'll walk away with
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Software built for South African businesses — a site that brings in work, a
            system that takes admin off your desk, and an app people keep on their phone.
          </p>

          <div className="mt-16 border-t border-border">
            {services.map((s) => (
              <div
                key={s.n}
                className="group grid md:grid-cols-[5rem_1fr_1.1fr_2.5rem] items-start gap-y-3 gap-x-6 border-b border-border py-8 md:py-10 transition-smooth hover:bg-secondary/50 md:px-4 md:-mx-4 rounded-2xl"
              >
                <div className="eyebrow pt-1.5">{s.n}</div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed md:pt-1">
                  {s.description}
                </p>
                <ArrowUpRight className="hidden md:block w-6 h-6 text-muted-foreground opacity-0 -translate-x-1 transition-smooth group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[hsl(var(--brand-indigo))] justify-self-end mt-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
