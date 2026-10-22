import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import imgPam from "@/assets/innov-pam.jpg";
import imgEvents from "@/assets/innov-events.jpg";
import imgRunners from "@/assets/innov-runners.jpg";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "Live Events & Digital Experiences",
    full: "Working description",
    status: "Concept / Exploration",
    img: imgEvents,
    w: 1600,
    h: 876,
    alt: "Outdoor South African music festival at sunset with a stage, performers, audience and broadcast camera equipment (illustrative)",
    body: "A developing concept for facilitating live event streaming and digital access to events, with potential opportunities for organisers and remote audiences.",
    glow: "var(--mn-violet)",
  },
  {
    name: "Shopping & Runner Marketplace",
    full: "Working description",
    status: "Concept / Exploration",
    img: imgRunners,
    w: 1600,
    h: 876,
    alt: "Customer browsing independent shopping runners on a mobile phone outside a shopping centre (illustrative)",
    body: "A proposed digital marketplace designed to connect customers with independent shopping runners who can assist with purchasing requested items from different shops and shopping areas, through a more structured and convenient online experience.",
    glow: "var(--mn-cyan)",
  },
  {
    name: "PAM",
    full: "Personal AI Manager",
    status: "In Development",
    img: imgPam,
    w: 1672,
    h: 941,
    alt: "Friendly blue-and-white robot assistant mascot pointing toward floating task, calendar and document panels (illustrative concept, not a product screenshot)",
    body: "PAM is an AI-assisted personal management platform being developed to help users organise tasks, calendars, projects and everyday commitments through a more intelligent and connected experience.",
    glow: "var(--mn-blue)",
  },
];

const Innovations = () => {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);
  const closing = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = closing.current;
    if (!element) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const lits = gsap.utils.toArray<SVGElement>(".pm-lit");
        const shifts = gsap.utils.toArray<SVGElement>(".pm-shift");
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6, paused: true });
        tl.fromTo(".pm-pulse", { attr: { cx: 40 }, opacity: 0 }, { attr: { cx: 560 }, duration: 3.6, ease: "sine.inOut" }, 0)
          .to(".pm-pulse", { opacity: 1, duration: 0.6, ease: "sine.out" }, 0)
          .to(".pm-pulse", { opacity: 0, duration: 0.8, ease: "sine.in" }, 2.8);
        lits.forEach((lit, i) => {
          const t = 0.25 + i * 0.8;
          tl.to(lit, { opacity: 1, duration: 0.55, ease: "sine.out" }, t)
            .to(shifts[i], { x: 10, duration: 0.55, ease: "sine.out" }, t)
            .to(lit, { opacity: 0, duration: 1.1, ease: "sine.inOut" }, t + 0.7)
            .to(shifts[i], { x: 0, duration: 1.1, ease: "sine.inOut" }, t + 0.7);
        });
        ScrollTrigger.create({
          trigger: element, start: "top bottom", end: "bottom top",
          onToggle: (self) => (self.isActive ? tl.play() : tl.pause()),
        });
      });
    }, element);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Select the narrative nearest the reading line, independent of observer
    // callback ordering, including reverse scroll and jumps through anchors.
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.5;
      let closest = 0;
      let distance = Infinity;
      refs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const next = Math.abs(rect.top + rect.height / 2 - line);
        if (next < distance) { distance = next; closest = i; }
      });
      setActive(closest);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    refs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <section id="innovations" className="midnight relative scroll-mt-20 py-24 md:py-32 mn-section-innov" aria-labelledby="innov-title">
      {/* shifting ambient light */}
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

        <div className="innovation-track mt-16 md:mt-24 lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* sticky product visual (desktop) */}
          <div className="hidden lg:block">
            <div className="innovation-visual sticky top-28 h-[calc(100svh-9rem)] max-h-[640px]">
              <div className="relative h-full overflow-hidden rounded-[2rem] mn-frame">
                {products.map((p, i) => (
                  <img
                    key={p.name}
                    src={p.img}
                    alt={i === active ? p.alt : ""}
                    width={p.w}
                    height={p.h}
                    loading="lazy"
                    decoding="async"
                    aria-hidden={i !== active}
                    data-product-image={i}
                    className={cn(
                      "innovation-image absolute inset-0 h-full w-full transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none",
                      "object-cover",
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
                <div className="absolute inset-x-6 top-6 flex gap-2" aria-hidden="true">
                  {products.map((p, i) => <span key={p.name} className={cn("innovation-step h-0.5 flex-1 transition-colors duration-700 motion-reduce:transition-none", i === active && "is-active")} />)}
                </div>
              </div>
            </div>
          </div>

          {/* product narratives */}
          <div className="lg:pb-[max(16svh,120px)]">
            {products.map((p, i) => (
              <article
                key={p.name}
                ref={(el) => (refs.current[i] = el)}
                data-i={i}
                className={cn(
                  "innovation-narrative lg:min-h-[max(78svh,560px)] flex flex-col justify-center py-10 lg:py-12 border-t border-[hsl(var(--mn-text)/0.08)] lg:border-0 transition-opacity duration-700 motion-reduce:transition-none",
                  i === active ? "lg:opacity-100" : "lg:opacity-70"
                )}
              >
                <div
                  className="lg:hidden overflow-hidden rounded-[1.5rem] mn-frame mb-8"
                >
                  <img
                    src={p.img}
                    alt={p.alt}
                    width={p.w}
                    height={p.h}
                    loading="lazy"
                    className="aspect-[3/2] w-full object-cover"
                  />
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

        <div ref={closing} className="possibilities-closing relative mt-12 md:mt-16 py-12 md:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <p className="font-semibold tracking-[-0.035em] leading-[1.02] text-[clamp(2.4rem,5.5vw,4.5rem)] text-[hsl(var(--mn-text))]">
                More possibilities<br />
                <span className="mn-gradient-text">ahead.</span>
              </p>
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                Visuals are illustrative concepts, not screenshots of released products.
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[580px]">
              <svg className="possibility-motif block h-auto w-full" viewBox="0 0 600 400" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="pm-fill" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--mn-text))" stopOpacity="0.14" />
                    <stop offset="55%" stopColor="hsl(var(--mn-blue))" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="hsl(var(--mn-violet))" stopOpacity="0.06" />
                  </linearGradient>
                  <linearGradient id="pm-lit" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--mn-cyan))" stopOpacity="0.55" />
                    <stop offset="60%" stopColor="hsl(var(--mn-blue))" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="hsl(var(--mn-violet))" stopOpacity="0.3" />
                  </linearGradient>
                  <radialGradient id="pm-pulse">
                    <stop offset="0%" stopColor="hsl(var(--mn-cyan))" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="hsl(var(--mn-cyan))" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="pm-ambient" cx="0.5" cy="0.5" r="0.48">
                    <stop offset="0%" stopColor="hsl(var(--mn-blue))" stopOpacity="0.16" />
                    <stop offset="100%" stopColor="hsl(var(--mn-blue))" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="600" height="400" fill="url(#pm-ambient)" />
                <line x1="20" y1="200" x2="580" y2="200" stroke="hsl(var(--mn-cyan))" strokeOpacity="0.12" strokeWidth="1" />
                {[0, 1, 2, 3].map((i) => (
                  <g key={i} className="pm-form" transform={`translate(${40 + i * 118} 50)`} style={{ opacity: 0.4 + i * 0.15 }}>
                    <g className="pm-shift">
                      <path d="M0 0 L90 150 L0 300 L62 300 L152 150 L62 0 Z" fill="url(#pm-fill)" stroke="hsl(var(--mn-text))" strokeOpacity="0.22" strokeWidth="1.2" strokeLinejoin="round" />
                      <path className="pm-lit" d="M0 0 L90 150 L0 300 L62 300 L152 150 L62 0 Z" fill="url(#pm-lit)" stroke="hsl(var(--mn-cyan))" strokeOpacity="0.9" strokeWidth="1.4" strokeLinejoin="round" opacity="0" />
                      <path d="M10 8 L66 8 L148 146" stroke="hsl(var(--mn-text))" strokeOpacity="0.35" strokeWidth="1" strokeLinecap="round" />
                    </g>
                  </g>
                ))}
                <ellipse className="pm-pulse" cx="60" cy="200" rx="70" ry="44" fill="url(#pm-pulse)" opacity="0" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovations;
