import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowRight, Code2, Sparkles, ShieldCheck, Radio } from "lucide-react";
import { BrandMark } from "@/components/Logo";

gsap.registerPlugin(ScrollTrigger);

const areas = [
  {
    key: "Software",
    icon: Code2,
    title: "Software & Digital Development",
    body: "Applications, platforms and business systems engineered to be fast, dependable and built around the people who use them.",
  },
  {
    key: "Artificial Intelligence",
    icon: Sparkles,
    title: "Artificial Intelligence",
    body: "AI-assisted systems and intelligent experiences that help teams work smarter and give users more useful answers.",
  },
  {
    key: "Security",
    icon: ShieldCheck,
    title: "Security & Protection",
    body: "Security-minded digital solutions, with protection considered from the first line of code rather than added at the end.",
  },
  {
    key: "Emerging Technology",
    icon: Radio,
    title: "Emerging Technologies",
    body: "Ongoing exploration of IoT and connected systems — research and experimentation shaping where we go next.",
  },
];

/* panel anchor positions inside the desktop scene (percent of stage) */
const panelPos = [
  { left: "6%", top: "18%" },
  { left: "68%", top: "14%" },
  { left: "4%", top: "66%" },
  { left: "66%", top: "68%" },
];

const Hero = () => {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: pinned, scrubbed story (native scroll, no hijacking)
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.set(".story-panel", { autoAlpha: 0, y: 30 });
        gsap.set(".story-line", { strokeDashoffset: 1 });
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: ".hero-stage",
            start: "top top",
            end: "+=120%",
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
          },
        });
        tl.to(".hero-copy", { y: -90, autoAlpha: 0, duration: 0.45 }, 0)
          .to(".hero-mark", { xPercent: -62, scale: 0.62, duration: 0.6 }, 0)
          .to(".hero-orbits", { autoAlpha: 0.35, scale: 1.15, duration: 0.6 }, 0)
          .to(".story-line", { strokeDashoffset: 0, duration: 0.35, stagger: 0.04 }, 0.35)
          .to(".story-panel", { autoAlpha: 1, y: 0, duration: 0.3, stagger: 0.07 }, 0.45);
      });

      // Touch / smaller screens: simple progressive reveal, no pinning
      mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".focus-card").forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: 28,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="midnight">
      {/* HERO */}
      <section className="hero-stage relative min-h-[100svh] overflow-hidden mn-hero-bg" aria-labelledby="hero-title">
        {/* background light traces */}
        <svg
          className="hero-orbits pointer-events-none absolute right-[-18%] top-1/2 -translate-y-1/2 w-[110vw] max-w-[1400px] lg:w-[80vw] opacity-60"
          viewBox="0 0 1000 1000"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="orbit-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--mn-cyan))" stopOpacity="0.55" />
              <stop offset="100%" stopColor="hsl(var(--mn-violet))" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <ellipse cx="500" cy="500" rx="460" ry="180" fill="none" stroke="url(#orbit-g)" strokeWidth="1" transform="rotate(-18 500 500)" />
          <ellipse cx="500" cy="500" rx="380" ry="380" fill="none" stroke="hsl(var(--mn-text) / 0.06)" strokeWidth="1" />
          <ellipse cx="500" cy="500" rx="300" ry="120" fill="none" stroke="url(#orbit-g)" strokeWidth="1" transform="rotate(24 500 500)" />
        </svg>

        {/* connection lines (desktop story) */}
        <svg className="pointer-events-none absolute inset-0 hidden lg:block w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {[
            "M50 50 L22 26",
            "M50 50 L78 22",
            "M50 50 L20 72",
            "M50 50 L78 74",
          ].map((d) => (
            <path
              key={d}
              d={d}
              pathLength={1}
              className="story-line"
              fill="none"
              stroke="hsl(var(--mn-cyan) / 0.45)"
              strokeWidth="0.12"
              vectorEffect="non-scaling-stroke"
              style={{ strokeDasharray: 1, strokeDashoffset: 0 }}
            />
          ))}
        </svg>

        <div className="container relative z-10 px-5 min-h-[100svh] grid lg:grid-cols-[1.05fr_1fr] items-center gap-10 pt-32 pb-16 lg:py-0">
          <div className="hero-copy max-w-2xl">
            <div className="mn-eyebrow animate-rise">Technology · Intelligence · Innovation</div>
            <h1
              id="hero-title"
              className="mt-6 font-semibold tracking-[-0.04em] leading-[0.98] text-[clamp(2.6rem,6.6vw,5.6rem)] text-[hsl(var(--mn-text))] animate-rise"
              style={{ animationDelay: "80ms" }}
            >
              Building Technology for <span className="mn-gradient-text">What's Next.</span>
            </h1>
            <p
              className="mt-7 max-w-xl text-lg md:text-xl leading-relaxed text-[hsl(var(--mn-muted))] animate-rise"
              style={{ animationDelay: "160ms" }}
            >
              EndlessX360 develops software, digital platforms and intelligent technology
              solutions designed to solve real challenges and create new possibilities.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 animate-rise" style={{ animationDelay: "240ms" }}>
              <a href="#focus" className="group inline-flex h-14 items-center justify-center rounded-full px-8 text-base font-semibold mn-btn-primary">
                Explore our focus
                <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a href="#contact" className="group inline-flex h-14 items-center justify-center rounded-full px-8 text-base font-semibold mn-btn-ghost">
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="hero-mark relative flex items-center justify-center">
            <div className="absolute inset-[8%] rounded-[2.5rem] mn-glass border opacity-70" aria-hidden="true" />
            <div className="absolute inset-0 m-auto h-2/3 w-2/3 rounded-full bg-[hsl(var(--mn-blue)/0.22)] blur-[90px]" aria-hidden="true" />
            <BrandMark className="relative w-full max-w-[560px] h-auto drop-shadow-[0_30px_60px_hsl(var(--mn-blue)/0.35)] py-10 px-6" />
          </div>
        </div>

        {/* glass panels revealed during the desktop story */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
          {areas.map((a, i) => (
            <div
              key={a.key}
              className="story-panel absolute mn-glass border rounded-2xl px-5 py-4 flex items-center gap-3 opacity-0"
              style={panelPos[i]}
            >
              <a.icon className="h-5 w-5 text-[hsl(var(--mn-cyan))]" />
              <span className="text-[hsl(var(--mn-text))] font-semibold">{a.key}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FOCUS */}
      <section id="focus" className="relative scroll-mt-24 py-24 md:py-32 mn-focus-bg" aria-labelledby="focus-title">
        <div className="container px-5">
          <div className="max-w-3xl">
            <div className="mn-eyebrow">Our Focus Areas</div>
            <h2 id="focus-title" className="mt-5 font-semibold tracking-[-0.035em] leading-[1] text-[clamp(2.2rem,5vw,4rem)] text-[hsl(var(--mn-text))]">
              Technology in <span className="mn-gradient-text">Motion</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[hsl(var(--mn-muted))]">
              Four areas guide what we build today and what we're preparing for tomorrow.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 gap-4 md:gap-5">
            {areas.map((a, i) => (
              <article key={a.key} className="focus-card group relative rounded-3xl border mn-glass p-7 md:p-9 transition-smooth hover:border-[hsl(var(--mn-cyan)/0.4)]">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl flex items-center justify-center bg-[hsl(var(--mn-blue)/0.14)] border border-[hsl(var(--mn-cyan)/0.25)]">
                    <a.icon className="h-6 w-6 text-[hsl(var(--mn-cyan))]" />
                  </div>
                  <span className="text-sm font-medium tabular-nums text-[hsl(var(--mn-muted))]">0{i + 1}</span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[hsl(var(--mn-text))]">{a.title}</h3>
                <p className="mt-3 leading-relaxed text-[hsl(var(--mn-muted))]">{a.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
