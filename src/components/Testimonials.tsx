import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/contact";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-28 md:py-36 relative bg-secondary/40 scroll-mt-24">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow">Client stories</div>
          <h2 className="display mt-5 text-[clamp(2rem,5.5vw,4rem)] max-w-3xl">
            Testimonials, in the works
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Written feedback is being collected from the teams already running the
            platforms built here. Rather than fill this space with invented praise, it
            gets published once the people who said it have signed it off.
          </p>

          <div className="mt-14 grid sm:grid-cols-3 gap-5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-3xl border border-dashed border-border bg-card/60 p-7 space-y-5"
              >
                <Quote className="w-5 h-5 text-[hsl(var(--brand-indigo)/0.5)]" />
                <div className="space-y-2.5" aria-hidden="true">
                  <div className="h-2 rounded-full bg-foreground/[0.07]" />
                  <div className="h-2 rounded-full bg-foreground/[0.07] w-11/12" />
                  <div className="h-2 rounded-full bg-foreground/[0.07] w-8/12" />
                </div>
                <div className="h-2 w-24 rounded-full bg-foreground/[0.05]" />
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Worked with me before? I'd genuinely like to hear how it went.
            </p>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-border bg-background hover:bg-secondary"
            >
              <a href={waLink("Hi! I'd like to leave feedback on a project.")} target="_blank" rel="noopener noreferrer">
                Share your experience
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
