import { Badge } from "@/components/ui/badge";

const blocks = [
  {
    n: "Why this exists",
    body:
      "Most businesses have had one of two experiences: overpaying for a template nobody maintains, or waiting months for a project that never launches. Here you get the opposite — a clear scope, your investment agreed before work starts, and a finished product handed to you.",
  },
  {
    n: "Experience working for you",
    body:
      "You get a BICT Honours from the Durban University of Technology and 5+ years across web, business systems and mobile apps behind your project — including agency work and platforms still running every day.",
  },
  {
    n: "Local, and easy to reach",
    body:
      "Based at 477 Anton Lembede Street in Durban, working with businesses in Umhlanga, Pinetown, Pietermaritzburg and remotely across South Africa. You'll usually have your quote back the same day.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-28 md:py-36 relative bg-background scroll-mt-24">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow">Studio</div>
          <h2 className="display mt-5 text-[clamp(2rem,5.5vw,4rem)] max-w-3xl">
            A Durban studio, one set of hands on your build
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-x-10 gap-y-12 border-t border-border pt-12">
            {blocks.map((b) => (
              <div key={b.n} className="space-y-4">
                <h3 className="text-xl font-semibold tracking-tight">{b.n}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2.5 pt-12">
            {["Investment agreed upfront", "Same-day quotes", "Mobile-first", "SEO-ready", "SA payment gateways"].map((t) => (
              <Badge
                key={t}
                variant="outline"
                className="rounded-full px-4 py-2 text-sm font-normal border-border bg-secondary/60 text-foreground/80"
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
