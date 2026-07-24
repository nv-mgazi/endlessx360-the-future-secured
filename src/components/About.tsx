import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 relative bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              The story behind <span className="gradient-text">EndlessX360</span>
            </h2>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--brand-yellow)/0.35)] flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-[hsl(var(--brand-navy))]" />
                </div>
                <h3 className="text-2xl font-bold">The Origin</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed pl-13">
                EndlessX360 was born from a simple idea: South African businesses deserve
                beautiful, high-performing websites and apps — without paying enterprise prices
                or waiting six months to launch.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--brand-purple)/0.15)] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[hsl(var(--brand-purple))]" />
                </div>
                <h3 className="text-2xl font-bold">Founded on Expertise</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Built by an IT professional with a Bachelor's degree in ICT and Honours from
                Durban University of Technology — combining deep technical skills in software
                development with a practical, business-first approach.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--brand-coral)/0.15)] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[hsl(var(--brand-coral))]" />
                </div>
                <h3 className="text-2xl font-bold">South African, Global-Ready</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Based in South Africa, building for local businesses first — with the tools and
                standards to serve clients anywhere in the world.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 justify-center">
              {["Once-off pricing", "24-hour quotes", "Mobile-first", "SEO-ready", "SA payment gateways"].map((t) => (
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
