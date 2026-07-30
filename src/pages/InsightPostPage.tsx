import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { articles } from "@/data/articles";
import { waLink } from "@/lib/contact";

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" });

const InsightPostPage = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  useEffect(() => {
    if (!article) return;
    document.title = `${article.title} — EndlessX360`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", article.excerpt);
  }, [article]);

  if (!article) return <Navigate to="/insights" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <article className="container px-4">
          <div className="max-w-2xl mx-auto space-y-8">
            <Link to="/insights" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[hsl(var(--brand-purple))]">
              <ArrowLeft className="w-4 h-4" /> All articles
            </Link>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="font-bold uppercase tracking-wider text-[hsl(var(--brand-purple))]">{article.category}</span>
                <span className="inline-flex items-center gap-1"><CalendarDays className="w-3.5 h-3.5" />{formatDate(article.date)}</span>
                <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">{article.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{article.excerpt}</p>
            </div>

            <div className="h-1 w-24 rounded-full bg-gradient-primary" />

            <div className="space-y-5">
              {article.body.map((p, i) => (
                <p key={i} className="text-base md:text-lg leading-relaxed text-foreground/85">{p}</p>
              ))}
            </div>

            <div className="rounded-2xl border-2 border-[hsl(var(--brand-purple)/0.2)] bg-[hsl(var(--muted))] p-7 space-y-4">
              <h2 className="text-xl font-bold">Working on something similar?</h2>
              <p className="text-muted-foreground">
                Send a short brief and you'll have a scoped, fixed-price quote back within 24 hours.
              </p>
              <Button asChild className="rounded-full bg-[hsl(var(--brand-purple))] hover:bg-[hsl(var(--brand-purple)/0.9)] text-white">
                <a href={waLink(`Hi! I read "${article.title}" and I'd like a quote.`)} target="_blank" rel="noopener noreferrer">
                  Request a quote
                </a>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default InsightPostPage;
