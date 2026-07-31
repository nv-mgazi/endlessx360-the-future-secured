import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles, Check } from "lucide-react";
import { waLink } from "@/lib/contact";
import Logo from "@/components/Logo";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-24">
      {/* Playful floating shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-[hsl(var(--brand-purple)/0.25)] blur-3xl animate-float" />
        <div className="absolute top-1/3 -right-16 w-96 h-96 rounded-full bg-[hsl(var(--brand-yellow)/0.4)] blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full bg-[hsl(var(--brand-coral)/0.28)] blur-3xl animate-float" style={{ animationDelay: "3s" }} />

        {/* grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--brand-navy)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--brand-navy)) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Sparkle dots */}
        <div className="absolute top-32 right-1/4 w-3 h-3 rounded-full bg-[hsl(var(--brand-coral))] animate-float" />
        <div className="absolute bottom-40 right-16 w-4 h-4 rounded-full bg-[hsl(var(--brand-yellow))] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-10 w-2 h-2 rounded-full bg-[hsl(var(--brand-purple))] animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
          {/* LEFT: copy */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-[hsl(var(--brand-purple)/0.25)] shadow-soft">
              <Sparkles className="w-4 h-4 text-[hsl(var(--brand-purple))]" />
              <span className="text-sm font-semibold text-[hsl(var(--brand-purple))]">
                Web · Systems · Mobile Apps
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
              A website that <br className="hidden md:block" />
              <span className="gradient-text">brings you work</span>.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              You get 5+ years of hard-won development insight working on your website,
              business system or mobile app. You'll know the scope and the investment
              before anything starts — and you own everything at the end.
            </p>



            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-2">
              <Button
                asChild
                size="lg"
                className="bg-[hsl(var(--brand-purple))] hover:bg-[hsl(var(--brand-purple)/0.92)] text-white shadow-playful rounded-full px-8 h-14 text-base group"
              >
                <a href={waLink("Hi! I'd like a quote for a project.")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Request a quote
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-14 text-base border-2 border-[hsl(var(--brand-navy))] bg-white hover:bg-[hsl(var(--brand-yellow)/0.25)] group"
              >
                <a href="#services">
                  See what we build
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* trust row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start pt-2 text-sm text-muted-foreground">
              {["Your investment agreed upfront", "Quoted inside 24 hrs", "5+ yrs of insight on your side"].map((t) => (
                <div key={t} className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[hsl(var(--brand-purple))]" />
                  <span className="font-medium text-foreground/80">{t}</span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT: hero visual */}
          <div className="relative hidden lg:block">
            {/* stacked glass window */}
            <div className="relative mx-auto max-w-md">
              {/* back blob */}
              <div className="absolute -inset-6 bg-gradient-primary opacity-30 blur-3xl rounded-[3rem]" />

              {/* main window */}
              <div className="relative rounded-[2rem] bg-white/80 backdrop-blur-xl border border-white shadow-playful p-6 rotate-[-2deg]">
                <div className="flex items-center gap-1.5 pb-4">
                  <div className="w-3 h-3 rounded-full bg-[hsl(var(--brand-coral))]" />
                  <div className="w-3 h-3 rounded-full bg-[hsl(var(--brand-yellow))]" />
                  <div className="w-3 h-3 rounded-full bg-[hsl(var(--brand-mint))]" />
                  <div className="ml-2 h-4 flex-1 rounded-full bg-[hsl(var(--muted))]" />
                </div>
                <div className="rounded-2xl bg-gradient-hero p-6 space-y-4">
                  <Logo />
                  <div className="space-y-2">
                    <div className="h-3 w-4/5 rounded-full bg-[hsl(var(--brand-navy)/0.15)]" />
                    <div className="h-3 w-3/5 rounded-full bg-[hsl(var(--brand-navy)/0.1)]" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {[
                      "hsl(var(--brand-purple))",
                      "hsl(var(--brand-coral))",
                      "hsl(var(--brand-yellow))",
                    ].map((c, i) => (
                      <div
                        key={i}
                        className="h-14 rounded-xl shadow-soft"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white p-3 shadow-soft">
                    <div className="text-xs font-semibold text-[hsl(var(--brand-navy))]">
                      From R5,590
                    </div>
                    <div className="rounded-full bg-[hsl(var(--brand-purple))] text-white text-[10px] font-bold px-2.5 py-1">
                      GET QUOTE
                    </div>
                  </div>
                </div>
              </div>

              {/* floating price sticker */}
              <div className="absolute -top-4 -right-4 rotate-[8deg] rounded-2xl bg-[hsl(var(--brand-yellow))] px-4 py-3 shadow-playful border-2 border-[hsl(var(--brand-navy))] animate-float">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[hsl(var(--brand-navy))]">
                  Fixed price
                </div>
                <div className="text-lg font-black text-[hsl(var(--brand-navy))] leading-none">
                  Quoted upfront
                </div>

              </div>

              {/* floating chat sticker */}
              <div className="absolute -bottom-6 -left-6 rotate-[-6deg] rounded-full bg-[hsl(var(--brand-coral))] text-white px-4 py-3 shadow-playful animate-float flex items-center gap-2" style={{ animationDelay: "2s" }}>
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-bold">Reply in 24 hrs</span>
              </div>

              {/* orbit dot */}
              <div className="absolute top-1/2 -left-3 w-4 h-4 rounded-full bg-[hsl(var(--brand-purple))] shadow-playful animate-float" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>

        {/* stats strip */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 pt-20 max-w-4xl mx-auto">
          {[
            { k: "5 platforms", v: "Built and in daily use" },
            { k: "24 hrs", v: "Quote turnaround" },
            { k: "5+ yrs", v: "Development experience" },
          ].map((s) => (

            <div key={s.k} className="rounded-2xl bg-white/75 backdrop-blur border border-white p-4 md:p-5 shadow-soft text-center md:text-left">
              <div className="text-2xl md:text-3xl font-bold text-[hsl(var(--brand-purple))]">{s.k}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
