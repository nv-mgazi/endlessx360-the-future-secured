import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowRight } from "lucide-react";
import { BrandMark } from "@/components/Logo";
import earth from "@/assets/hero-earth.jpg";
import imgSoftware from "@/assets/focus-software.jpg";
import imgAi from "@/assets/focus-ai.jpg";
import imgSecurity from "@/assets/focus-security.jpg";
import imgEmerging from "@/assets/focus-emerging.jpg";

gsap.registerPlugin(ScrollTrigger);

const areas = [
  {
    key: "Software",
    img: imgSoftware,
    title: "Software & Digital Development",
    body: "Applications, websites, digital platforms and systems designed around practical needs.",
  },
  {
    key: "Artificial Intelligence",
    img: imgAi,
    title: "Artificial Intelligence",
    body: "AI-assisted applications, intelligent systems and experiences that enhance productivity, interaction and decision-making.",
  },
  {
    key: "Security",
    img: imgSecurity,
    title: "Security & Protection",
    body: "Security-focused software, digital protection and technologies supporting safer, more dependable systems.",
  },
  {
    key: "Emerging Technology",
    img: imgEmerging,
    title: "Emerging Technologies",
    body: "Exploration of connected systems, IoT, automation and other developing technological possibilities.",
  },
];

/* quadrant anchors for the enlarged composition (desktop) */
const panelPos: React.CSSProperties[] = [
  { left: "3.5vw", top: "13vh", transformOrigin: "100% 100%" },
  { right: "3.5vw", top: "13vh", transformOrigin: "0% 100%" },
  { left: "3.5vw", bottom: "6vh", transformOrigin: "100% 0%" },
  { right: "3.5vw", bottom: "6vh", transformOrigin: "0% 0%" },
];

const Hero = () => {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const mark = root.current!.querySelector<HTMLElement>(".hero-mark")!;
        // distance from the mark's resting centre to the viewport centre
        const toCentre = () => {
          gsap.set(mark, { clearProps: "x" });
          const r = mark.getBoundingClientRect();
          return window.innerWidth / 2 - (r.left + r.width / 2);
        };

        gsap.set(".story-panel", { autoAlpha: 0, scale: 0.42 });
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: ".hero-stage",
            start: "top top",
            end: "+=280%",
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        // Stage A — headline leaves, symbol moves to centre
        tl.to(".hero-copy", { y: -80, autoAlpha: 0, duration: 0.5 }, 0)
          .to(mark, { x: toCentre, scale: 0.62, duration: 0.8, ease: "power1.inOut" }, 0)
          .to(".hero-earth", { scale: 1.2, yPercent: -5, autoAlpha: 0.45, duration: 1.4 }, 0)
          .to(".hero-vignette", { autoAlpha: 1, duration: 0.8 }, 0.2)
          // Stage B — panels arrive one after another
          .to(".story-panel", { autoAlpha: 1, duration: 0.35, stagger: 0.15 }, 0.7)
          // Stage C — panels expand into the quadrants
          .to(".story-panel", { scale: 1, duration: 0.9, stagger: 0.08, ease: "power1.out" }, 0.9)
          .to(".story-caption", { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.08 }, 1.6)
          // Stage D — hold the composition
          .to({}, { duration: 0.6 })
          // Stage E — hand over to Technology
          .to(".story-panel", { autoAlpha: 0, y: -40, duration: 0.5, stagger: 0.04 }, ">")
          .to(mark, { autoAlpha: 0, scale: 0.5, duration: 0.5 }, "<")
          .to(".hero-earth", { autoAlpha: 0.15, duration: 0.5 }, "<");

        const imgs = root.current!.querySelectorAll("img");
        const refresh = () => ScrollTrigger.refresh();
        imgs.forEach((i) => !i.complete && i.addEventListener("load", refresh, { once: true }));
      });

      mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".m-reveal").forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: 28,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".focus-row").forEach((el) => {
          gsap.from(el.children, {
            autoAlpha: 0,
            y: 40,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 82%", once: true },
          });
        });
        gsap.utils.toArray<HTMLElement>(".focus-media img").forEach((el) => {
          gsap.fromTo(el, { yPercent: -6 }, {
            yPercent: 6,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          });
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="midnight">
      {/* HOME */}
      <section id="home" className="hero-stage relative min-h-[100svh] overflow-hidden mn-hero-bg" aria-labelledby="hero-title">
        <div className="hero-earth pointer-events-none absolute inset-0 origin-[70%_80%]" aria-hidden="true">
          <img src={earth} alt="" width={1920} height={1088} {...{ fetchpriority: "high" }} className="h-full w-full object-cover object-[70%_center] opacity-80" />
        </div>
        <div className="pointer-events-none absolute inset-0 mn-hero-shade" aria-hidden="true" />
        <div className="hero-vignette pointer-events-none absolute inset-0 mn-hero-vignette opacity-0" aria-hidden="true" />

        <div className="container relative z-10 px-5 min-h-[100svh] grid lg:grid-cols-[1.05fr_1fr] items-center gap-6 pt-32 pb-16 lg:py-0">
          <div className="hero-copy max-w-2xl">
            <div className="mn-eyebrow animate-rise">Technology · Intelligence · Innovation</div>
            <h1
              id="hero-title"
              className="mt-6 font-semibold tracking-[-0.04em] leading-[0.98] text-[clamp(2.6rem,6.6vw,5.6rem)] text-[hsl(var(--mn-text))] animate-rise"
              style={{ animationDelay: "80ms" }}
            >
              Building Technology for <span className="mn-gradient-text">What's Next.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg md:text-xl leading-relaxed text-[hsl(var(--mn-muted))] animate-rise" style={{ animationDelay: "160ms" }}>
              EndlessX360 develops software, digital platforms and intelligent technology
              solutions designed to solve real challenges and create new possibilities.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 animate-rise" style={{ animationDelay: "240ms" }}>
              <a href="#technology" className="group inline-flex h-14 items-center justify-center rounded-full px-8 text-base font-semibold mn-btn-primary">
                Explore Technology
                <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a href="#contact" className="group inline-flex h-14 items-center justify-center rounded-full px-8 text-base font-semibold mn-btn-ghost">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="hero-mark relative z-20 flex items-center justify-center order-first lg:order-none">
            <div className="absolute inset-0 m-auto h-1/2 w-2/3 rounded-full bg-[hsl(var(--mn-blue)/0.18)] blur-[90px]" aria-hidden="true" />
            <BrandMark className="relative w-[70%] max-w-[300px] lg:w-full lg:max-w-[520px] h-auto drop-shadow-[0_24px_50px_hsl(var(--mn-deep)/0.9)] lg:py-10 lg:px-6" />
          </div>
        </div>

        {/* four focus visuals — enlarged composition (desktop) */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
          {areas.map((a, i) => (
            <figure
              key={a.key}
              className="story-panel absolute overflow-hidden rounded-[1.5rem] mn-frame opacity-0"
              style={{ ...panelPos[i], width: "min(30vw, 58vh, 580px)" }}
            >
              <img src={a.img} alt="" width={1024} height={768} loading="lazy" className="aspect-[16/10] w-full object-cover" />
              <figcaption className="story-caption absolute inset-x-0 bottom-0 px-5 py-4 text-base font-medium text-[hsl(var(--mn-text))] bg-gradient-to-t from-[hsl(var(--mn-bg)/0.92)] to-transparent opacity-0 translate-y-2">
                <span className="mr-2 tabular-nums text-[hsl(var(--mn-cyan))]">0{i + 1}</span>
                {a.key}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className="relative scroll-mt-20 py-24 md:py-32 mn-section-tech" aria-labelledby="tech-title">
        <div className="container px-5">
          <div className="max-w-3xl m-reveal">
            <div className="mn-eyebrow">Technology</div>
            <h2 id="tech-title" className="mt-5 mn-h2">
              Technology in <span className="mn-gradient-text">Motion.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[hsl(var(--mn-muted))]">
              Four areas guide what we build today and what we are preparing for tomorrow.
            </p>
          </div>

          <div className="mt-16 md:mt-24 space-y-20 md:space-y-32">
            {areas.map((a, i) => (
              <article
                key={a.key}
                className={`focus-row grid items-center gap-8 md:gap-14 lg:grid-cols-[1.15fr_1fr] ${i % 2 ? "lg:grid-cols-[1fr_1.15fr] lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="focus-media relative overflow-hidden rounded-[1.75rem] mn-frame">
                  <img src={a.img} alt={`${a.title} visual`} width={1024} height={768} loading="lazy" className="aspect-[16/11] w-full scale-[1.14] object-cover" />
                </div>
                <div className="max-w-xl">
                  <span className="text-sm font-medium tabular-nums text-[hsl(var(--mn-cyan))]">0{i + 1} / 04</span>
                  <h3 className="mt-4 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold tracking-tight leading-tight text-[hsl(var(--mn-text))]">
                    {a.title}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-[hsl(var(--mn-muted))]">{a.body}</p>
                  <div className="mt-8 h-px w-24 bg-gradient-to-r from-[hsl(var(--mn-cyan))] to-transparent" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
