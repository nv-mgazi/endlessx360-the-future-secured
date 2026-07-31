import { Card, CardContent } from "@/components/ui/card";
import { Rocket, MessagesSquare, Layers } from "lucide-react";

const values = [
  {
    icon: Rocket,
    title: "Shipped, not promised",
    color: "hsl(var(--brand-purple))",
    bg: "hsl(var(--brand-purple)/0.1)",
    description:
      "Scoped in days, built in weeks. You'll see it come together as it happens instead of waiting months for a first look.",
  },
  {
    icon: MessagesSquare,
    title: "One person, straight answers",
    color: "hsl(var(--brand-coral))",
    bg: "hsl(var(--brand-coral)/0.12)",
    description:
      "You speak directly to the developer building your project. Plain answers, honest timelines, nobody in between.",
  },
  {
    icon: Layers,
    title: "Yours to grow",
    color: "hsl(var(--brand-blue))",
    bg: "hsl(var(--brand-blue)/0.1)",
    description:
      "You own the code, the content and the accounts. Every build is structured so you'll be able to add more later without starting over.",
  },
];


const Vision = () => {
  return (
    <section id="approach" className="py-24 relative bg-[hsl(var(--muted))] scroll-mt-24">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              How we <span className="gradient-text">work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Clear scope, fixed project price, and a build you fully control once it launches.
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
