import { Quote, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/contact";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-[hsl(var(--muted))] overflow-hidden scroll-mt-24">
      {/* soft floating shapes */}
      <div className="pointer-events-none absolute -top-10 left-[8%] w-24 h-24 rounded-3xl bg-[hsl(var(--brand-yellow)/0.35)] rotate-12 animate-float" />
      <div className="pointer-events-none absolute bottom-6 right-[10%] w-16 h-16 rounded-full bg-[hsl(var(--brand-coral)/0.3)] animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-[hsl(var(--brand-purple)/0.25)]">
            <Sparkles className="w-4 h-4 text-[hsl(var(--brand-purple))]" />
            <span className="text-sm font-semibold text-[hsl(var(--brand-purple))]">Client stories</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Testimonials, <span className="gradient-text">coming soon</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're collecting written feedback from the teams already running the platforms
            we've built. Rather than fill this space with invented praise, we'd prefer to
            publish it once it's signed off by the people who said it.
          </p>

          <div className="grid sm:grid-cols-3 gap-5 pt-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="relative rounded-2xl border-2 border-dashed border-[hsl(var(--brand-purple)/0.25)] bg-card/60 p-6 text-left space-y-4 animate-float"
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <Quote className="w-6 h-6 text-[hsl(var(--brand-purple)/0.5)]" />
                <div className="space-y-2" aria-hidden="true">
                  <div className="h-2.5 rounded-full bg-[hsl(var(--brand-purple)/0.12)] animate-pulse" />
                  <div className="h-2.5 rounded-full bg-[hsl(var(--brand-purple)/0.12)] w-11/12 animate-pulse" style={{ animationDelay: "0.2s" }} />
                  <div className="h-2.5 rounded-full bg-[hsl(var(--brand-purple)/0.12)] w-8/12 animate-pulse" style={{ animationDelay: "0.4s" }} />
                </div>
                <div className="flex gap-1 pt-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-[hsl(var(--brand-yellow))] fill-[hsl(var(--brand-yellow))]" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            Worked with us before? We'd genuinely like to hear how it went.
          </p>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-2 border-[hsl(var(--brand-purple)/0.4)] text-[hsl(var(--brand-purple))] hover:bg-[hsl(var(--brand-purple)/0.06)]"
          >
            <a href={waLink("Hi! I'd like to leave feedback on a project.")} target="_blank" rel="noopener noreferrer">
              Share your experience
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
