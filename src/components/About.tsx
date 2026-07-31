import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-background scroll-mt-24">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="gradient-text">EndlessX360</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A Durban software studio where you get 5+ years of hard-won development
              insight working on your website, business system or mobile app.
            </p>

          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--brand-yellow)/0.35)] flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-[hsl(var(--brand-navy))]" />
                </div>
                <h3 className="text-2xl font-bold">Why we exist</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Most businesses have had one of two experiences: overpaying for a template
                nobody maintains, or waiting months for a project that never launches.
                EndlessX360 works the other way — a clear scope, a fixed project price, and
                a finished product handed over to you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--brand-purple)/0.15)] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[hsl(var(--brand-purple))]" />
                </div>
                <h3 className="text-2xl font-bold">Real experience behind the work</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A BICT Honours from the Durban University of Technology and 5+ years across
                web development, business systems and mobile apps — including agency
                projects and production platforms still in daily use.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--brand-coral)/0.15)] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[hsl(var(--brand-coral))]" />
                </div>
                <h3 className="text-2xl font-bold">Local, and easy to reach</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Based at 477 Anton Lembede Street in Durban, working with businesses in
                Umhlanga, Pinetown, Pietermaritzburg and remotely across South Africa.
                Quotes are usually back with you the same day.
              </p>

            </div>

            <div className="flex flex-wrap gap-3 pt-4 justify-center">
              {["Fixed project pricing", "Same-day quotes", "Mobile-first", "SEO-ready", "SA payment gateways"].map((t) => (
                <Badge key={t} variant="outline" className="px-4 py-2 text-sm border-[hsl(var(--brand-purple)/0.3)] bg-[hsl(var(--brand-purple)/0.05)] text-[hsl(var(--brand-purple))]">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
