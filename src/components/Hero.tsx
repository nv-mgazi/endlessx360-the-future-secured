import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/contact";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-gradient-hero pt-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full bg-[hsl(var(--brand-indigo)/0.08)] blur-3xl" />
        <div className="absolute bottom-[-12rem] right-[-6rem] h-[520px] w-[520px] rounded-full bg-[hsl(var(--brand-accent)/0.12)] blur-3xl animate-float" />
      </div>

      <div className="container relative z-10 px-4 py-16">
        <div className="max-w-5xl">
          <div className="eyebrow animate-rise">Durban · Web · Systems · Mobile</div>

          <h1
            className="display mt-6 text-[clamp(2.6rem,8.2vw,6.4rem)] animate-rise"
            style={{ animationDelay: "80ms" }}
          >
            A digital presence
            <br />
            built to <span className="gradient-text">bring you work</span>.
          </h1>

          <p
            className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-rise"
            style={{ animationDelay: "160ms" }}
          >
            You get 5+ years of hard-won development insight working on your website,
            business system or mobile app — the scope and the investment agreed before
            anything starts, and everything owned by you at the end.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-3 animate-rise"
            style={{ animationDelay: "240ms" }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full h-14 px-8 text-base bg-foreground text-background hover:bg-[hsl(var(--brand-indigo))] group"
            >
              <a href={waLink("Hi! I'd like a quote for a project.")} target="_blank" rel="noopener noreferrer">
                Start a project
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-8 text-base border-border bg-background/60 backdrop-blur hover:bg-secondary group"
            >
              <a href="#work">
                See selected work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>

        {/* quiet metric rail */}
        <div className="mt-20 md:mt-28 border-t border-border pt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { k: "5", v: "Platforms live and used every day" },
            { k: "24 hrs", v: "Your quote, in writing" },
            { k: "5+ yrs", v: "Of insight working for you" },
            { k: "100%", v: "Ownership handed to you" },
          ].map((s) => (
            <div key={s.k}>
              <div className="display text-3xl md:text-4xl">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground leading-snug">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
