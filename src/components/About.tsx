import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 relative bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="gradient-text">EndlessX360</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A small South African software studio focused on the web, business systems,
              and mobile apps — with 5+ years of hands-on development behind every project.
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
                Too many local businesses either overpay for a template site or wait months
                for something that never ships. EndlessX360 was started to fix that: build
                properly, price fairly, and hand over work you actually own.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--brand-purple)/0.15)] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[hsl(var(--brand-purple))]" />
                </div>
                <h3 className="text-2xl font-bold">Built on real experience</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Backed by a BICT Honours from Durban University of Technology and 5+ years
                across web development, business systems, and mobile apps — including
                agency work, tutoring software development, and shipping real production
                platforms.
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
                Based in Durban, working with clients across South Africa. WhatsApp is the
                fastest way in — quotes usually come back the same day.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 justify-center">
              {["Once-off pricing", "Same-day quotes", "Mobile-first", "SEO-ready", "SA payment gateways"].map((t) => (
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
