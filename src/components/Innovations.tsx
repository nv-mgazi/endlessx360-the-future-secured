import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import imgPam from "@/assets/innov-pam.jpg";
import imgEvents from "@/assets/innov-events.jpg";
import imgRunners from "@/assets/innov-runners.jpg";

const products = [
  {
    name: "PAM",
    full: "Personal AI Manager",
    status: "In Development",
    img: imgPam,
    alt: "Concept visual of a glass phone and floating interface panels (illustrative, not a product screenshot)",
    body: "PAM is an AI-assisted personal management platform being developed to help users organise tasks, calendars, projects and everyday commitments through a more intelligent and connected experience.",
    glow: "var(--mn-blue)",
  },
  {
    name: "Live Events & Digital Experiences",
    full: "Working description",
    status: "Concept / Exploration",
    img: imgEvents,
    alt: "Concert stage with a broadcast camera crane and audience (illustrative)",
    body: "A developing concept for facilitating live event streaming and digital access to events, with potential opportunities for organisers and remote audiences.",
    glow: "var(--mn-violet)",
  },
  {
    name: "Shopping & Runner Marketplace",
    full: "Working description",
    status: "Concept / Exploration",
    img: imgRunners,
    alt: "Runner carrying shopping bags beside a glowing route map (illustrative)",
    body: "A proposed digital marketplace designed to connect customers with independent shopping runners through a more structured and convenient online experience.",
    glow: "var(--mn-cyan)",
  },
];

const Innovations = () => {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="innovations" className="midnight relative scroll-mt-20 py-24 md:py-32 mn-section-innov overflow-hidden" aria-labelledby="innov-title">
      {/* shifting ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-[600px] w-[600px] rounded-full blur-[140px] opacity-25 transition-colors duration-1000"
        style={{ background: `hsl(${products[active].glow})` }}
      />
      <div className="container relative px-5">
        <div className="max-w-3xl">
          <div className="mn-eyebrow">Innovations</div>
          <h2 id="innov-title" className="mt-5 mn-h2">
            Ideas Taking <span className="mn-gradient-text">Shape.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[hsl(var(--mn-muted))]">
            We explore ideas, develop technology and create solutions that open new possibilities.
          </p>
        </div>

        <div className="mt-16 md:mt-24 lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* sticky product visual (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-28 h-[calc(100vh-9rem)] max-h-[640px]">
              <div className="relative h-full overflow-hidden rounded-[2rem] mn-frame">
                {products.map((p, i) => (
                  <img
                    key={p.name}
                    src={p.img}
                    alt={i === active ? p.alt : ""}
                    width={1536}
                    height={1024}
                    loading="lazy"
                    className={cn(
                      "absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      i === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.06]"
                    )}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--mn-bg)/0.75)] via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute left-6 bottom-6 right-6 flex items-end justify-between">
                  <span className="rounded-full border mn-glass px-4 py-1.5 text-xs font-medium text-[hsl(var(--mn-text))]">
                    {products[active].status}
                  </span>
                  <span className="text-sm tabular-nums text-[hsl(var(--mn-silver))]">
                    0{active + 1} / 0{products.length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* product narratives */}
          <div>
            {products.map((p, i) => (
              <article
                key={p.name}
                ref={(el) => (refs.current[i] = el)}
                data-i={i}
                className={cn(
                  "lg:min-h-[78vh] flex flex-col justify-center py-10 lg:py-0 border-t border-[hsl(var(--mn-text)/0.08)] lg:border-0 transition-opacity duration-700",
                  i === active ? "lg:opacity-100" : "lg:opacity-35"
                )}
              >
                <div className="lg:hidden overflow-hidden rounded-[1.5rem] mn-frame mb-8">
                  <img src={p.img} alt={p.alt} width={1536} height={1024} loading="lazy" className="aspect-[3/2] w-full object-cover" />
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[hsl(var(--mn-text)/0.14)] px-3.5 py-1 text-xs font-medium text-[hsl(var(--mn-cyan))]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--mn-cyan))]" aria-hidden="true" />
                  {p.status}
                </span>
                <h3 className="mt-6 text-[clamp(1.9rem,3.4vw,3rem)] font-semibold tracking-tight leading-[1.05] text-[hsl(var(--mn-text))]">
                  {p.name}
                </h3>
                <p className="mt-2 text-[hsl(var(--mn-silver))]">{p.full}</p>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-[hsl(var(--mn-muted))]">{p.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 md:mt-28 flex items-center gap-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[hsl(var(--mn-text)/0.2)] to-transparent" aria-hidden="true" />
          <p className="text-xl md:text-2xl font-medium tracking-tight text-[hsl(var(--mn-silver))]">
            More possibilities ahead.
          </p>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[hsl(var(--mn-text)/0.2)] to-transparent" aria-hidden="true" />
        </div>
        <p className="mt-6 text-center text-xs text-[hsl(var(--mn-muted)/0.7)]">
          Visuals are illustrative concepts, not screenshots of released products.
        </p>
      </div>
    </section>
  );
};

export default Innovations;
