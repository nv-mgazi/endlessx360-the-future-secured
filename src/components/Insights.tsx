import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays } from "lucide-react";
import { articles } from "@/data/articles";

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-ZA", { day: "numeric", month: "short", year: "numeric" });

const Insights = () => {
  return (
    <section id="insights" className="py-28 md:py-36 relative bg-background scroll-mt-24">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="eyebrow">Insights</div>
              <h2 className="display mt-5 text-[clamp(2rem,5.5vw,4rem)]">
                Notes from the build
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Practical writing on pricing, systems and local search — drawn from
                delivered projects, not repackaged advice.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full border-border bg-background hover:bg-secondary self-start">
              <Link to="/insights">
                All articles <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {articles.map((a) => (
              <Card
                key={a.slug}
                className="rounded-3xl border-border bg-card shadow-soft hover:-translate-y-1 hover:shadow-playful transition-smooth"
              >

                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="font-bold uppercase tracking-wider text-[hsl(var(--brand-purple))]">
                      {a.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="w-3.5 h-3.5" /> {formatDate(a.date)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold leading-snug">
                    <Link to={`/insights/${a.slug}`} className="hover:text-[hsl(var(--brand-purple))] transition-colors">
                      {a.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{a.excerpt}</p>
                  <Link
                    to={`/insights/${a.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--brand-purple))]"
                  >
                    Read article <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
