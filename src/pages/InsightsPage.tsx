import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";
import { articles } from "@/data/articles";

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" });

const InsightsPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-32 pb-24">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[hsl(var(--brand-purple))]">
            <ArrowLeft className="w-4 h-4" /> Back home
          </Link>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Insights & <span className="gradient-text">case notes</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Writing on web and system development for South African businesses — investment,
              trade-offs and what we've learned shipping real platforms from Durban.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((a) => (
              <Card key={a.slug} className="rounded-2xl border-border bg-card shadow-soft hover:-translate-y-1 hover:shadow-playful transition-smooth">
                <CardContent className="p-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="font-bold uppercase tracking-wider text-[hsl(var(--brand-purple))]">{a.category}</span>
                    <span className="inline-flex items-center gap-1"><CalendarDays className="w-3.5 h-3.5" />{formatDate(a.date)}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{a.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold leading-snug">
                    <Link to={`/insights/${a.slug}`} className="hover:text-[hsl(var(--brand-purple))] transition-colors">{a.title}</Link>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{a.excerpt}</p>
                  <Link to={`/insights/${a.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--brand-purple))]">
                    Read article <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default InsightsPage;
