import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Maximize2 } from "lucide-react";
import { projects, type ProjectShot } from "@/data/portfolio";

const Portfolio = () => {
  const [active, setActive] = useState<ProjectShot | null>(null);

  return (
    <section id="work" className="py-28 md:py-36 relative bg-secondary/40 scroll-mt-24">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="eyebrow">Selected work</div>
            <h2 className="display mt-5 text-[clamp(2rem,5.5vw,4rem)] max-w-3xl">
              Built, handed over, in daily use
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Donation platforms, procurement systems, a school safety tracker and business
              websites. Click any screen to view it full size.
            </p>
          </div>


          <div className="space-y-14">
            {projects.map((p) => (
              <article key={p.id} className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="space-y-2">
                    <div
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: p.accent }}
                    >
                      {p.category} · {p.year}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{p.client}</h3>
                    <p className="text-muted-foreground max-w-2xl leading-relaxed">{p.summary}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Badge
                        key={s}
                        variant="outline"
                        className="rounded-full border-border bg-[hsl(var(--muted))] text-foreground/80"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {p.shots.map((shot) => (
                    <button
                      key={shot.url}
                      type="button"
                      onClick={() => setActive(shot)}
                      className="group text-left rounded-2xl overflow-hidden border-2 border-border bg-card shadow-soft hover:-translate-y-1 hover:shadow-playful transition-smooth"
                      aria-label={`View ${p.client} — ${shot.caption}`}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-[hsl(var(--muted))]">
                        <img
                          src={shot.url}
                          alt={`${p.client} — ${shot.caption}`}
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-smooth group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-[hsl(var(--brand-navy)/0.55)] opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                          <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-semibold">
                            <Maximize2 className="w-4 h-4" /> View
                          </span>
                        </div>
                      </div>
                      <p className="px-4 py-3 text-sm text-muted-foreground">{shot.caption}</p>
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-6xl p-2 sm:p-3 bg-card">
          <DialogTitle className="sr-only">Project screenshot</DialogTitle>
          <DialogDescription className="sr-only">{active?.caption}</DialogDescription>
          {active && (
            <div className="space-y-2">
              <img
                src={active.url}
                alt={active.caption}
                className="w-full rounded-xl max-h-[80vh] object-contain bg-[hsl(var(--muted))]"
              />
              <p className="text-sm text-muted-foreground px-2 pb-1">{active.caption}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
