import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { waLink } from "@/lib/contact";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-24">
      {/* Playful floating shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-[hsl(var(--brand-purple)/0.25)] blur-3xl animate-float" />
        <div className="absolute top-1/3 -right-16 w-80 h-80 rounded-full bg-[hsl(var(--brand-yellow)/0.35)] blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-10 left-1/3 w-64 h-64 rounded-full bg-[hsl(var(--brand-coral)/0.25)] blur-3xl animate-float" style={{ animationDelay: "3s" }} />

        {/* Sparkle dots */}
        <div className="absolute top-32 right-1/4 w-3 h-3 rounded-full bg-[hsl(var(--brand-coral))]" />
        <div className="absolute bottom-40 right-16 w-4 h-4 rounded-full bg-[hsl(var(--brand-yellow))]" />
        <div className="absolute top-1/2 left-10 w-2 h-2 rounded-full bg-[hsl(var(--brand-purple))]" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--brand-purple)/0.1)] border border-[hsl(var(--brand-purple)/0.25)]">
            <Sparkles className="w-4 h-4 text-[hsl(var(--brand-purple))]" />
            <span className="text-sm font-semibold text-[hsl(var(--brand-purple))]">Web · Systems · Mobile Apps</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Websites that <span className="gradient-text">work while</span>
            <br />
            you sleep.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Custom web, system, and mobile app development — built to convert,
            priced for growing South African businesses, delivered without the fluff.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-[hsl(var(--brand-purple))] hover:bg-[hsl(var(--brand-purple)/0.9)] text-white shadow-playful rounded-full px-8 group"
            >
              <a href={waLink("Hi! I'd like a free quote for a website.")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-2 border-[hsl(var(--brand-navy))] bg-white hover:bg-[hsl(var(--brand-yellow)/0.2)] group"
            >
              <a href="#pricing">
                See Pricing
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-16 max-w-3xl mx-auto">
            {[
              { k: "Once-off", v: "No monthly fees" },
              { k: "24 hrs", v: "Quote response" },
              { k: "10+ yrs", v: "Dev experience" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl bg-white/70 backdrop-blur border border-border p-5 shadow-soft">
                <div className="text-2xl md:text-3xl font-bold text-[hsl(var(--brand-purple))]">{s.k}</div>
                <div className="text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
