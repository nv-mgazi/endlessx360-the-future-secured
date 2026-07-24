import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Heart, Wrench } from "lucide-react";

const values = [
  {
    icon: Rocket,
    title: "Built to Launch",
    color: "hsl(var(--brand-purple))",
    bg: "hsl(var(--brand-purple)/0.1)",
    description:
      "We focus on shipping fast — real websites and apps live in weeks, not months, without cutting corners on quality.",
  },
  {
    icon: Heart,
    title: "Friendly & Personal",
    color: "hsl(var(--brand-coral))",
    bg: "hsl(var(--brand-coral)/0.12)",
    description:
      "You talk directly to the person building your product. No account managers, no jargon, no ghosting.",
  },
  {
    icon: Wrench,
    title: "Made to Scale",
    color: "hsl(var(--brand-blue))",
    bg: "hsl(var(--brand-blue)/0.1)",
    description:
      "Start small, grow big. Every site is built on solid foundations you can extend into a full platform later.",
  },
];

const Vision = () => {
  return (
    <section className="py-24 relative bg-[hsl(var(--muted))]">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why <span className="gradient-text">EndlessX360</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A modern studio for South African businesses that want a beautiful web
              presence — without the enterprise price tag.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <Card key={v.title} className="rounded-2xl border-border bg-card shadow-soft hover:-translate-y-1 hover:shadow-playful transition-smooth">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: v.bg }}>
                    <v.icon className="w-6 h-6" style={{ color: v.color }} />
                  </div>
                  <h3 className="text-xl font-bold">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
