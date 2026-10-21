import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import earth from "@/assets/hero-earth.jpg";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    t: "Our Vision",
    b: "A future where innovative technology creates limitless possibilities, improves everyday experiences and connects the world through smarter, safer and more accessible solutions.",
  },
  {
    t: "Our Mission",
    b: "To design, develop and deliver technological solutions that address practical challenges, enhance efficiency, strengthen security and create opportunities for continuous advancement.",
  },
  {
    t: "Our Approach",
    b: "Creativity, technical development and research-informed thinking, combined to build solutions for today while preparing for tomorrow.",
  },
];

const Perspective = () => {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(".pv-earth", { yPercent: -8, scale: 1.1 }, {
          yPercent: 8,
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
        });
        gsap.fromTo(".pv-word", { opacity: 0.55, y: 14 }, {
          opacity: 1, y: 0, stagger: 0.22, ease: "none",
          scrollTrigger: { trigger: ".pv-statement", start: "top 85%", end: "bottom 40%", scrub: 0.6 },
        });
        gsap.fromTo(".pv-light-sweep", { xPercent: -100 }, {
          xPercent: 100, ease: "none",
          scrollTrigger: { trigger: root.current, start: "top 80%", end: "bottom 30%", scrub: 0.8 },
        });
        gsap.utils.toArray<HTMLElement>(".pv-pillar").forEach((el) => {
          gsap.fromTo(el, { opacity: 0.6, y: 16 }, {
            opacity: 1, y: 0, ease: "none",
            scrollTrigger: { trigger: el, start: "top 90%", end: "top 55%", scrub: 0.5 },
          });
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="perspective" className="midnight relative scroll-mt-20 overflow-hidden py-32 md:py-48" aria-labelledby="pv-title">
      <div className="pv-earth pointer-events-none absolute inset-0" aria-hidden="true">
        <img src={earth} alt="" width={1920} height={1088} loading="lazy" className="h-full w-full object-cover object-bottom opacity-40 rotate-180" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--mn-deep))_0%,hsl(var(--mn-bg)/0.55)_40%,hsl(var(--mn-bg)/0.7)_75%,hsl(var(--mn-bg))_100%)]" aria-hidden="true" />
      <div className="pv-light-sweep pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="container relative px-5">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mn-eyebrow pv-reveal">Our Perspective</div>
          <h2 id="pv-title" className="pv-statement mt-6 font-semibold tracking-normal leading-[1.08] text-[2.4rem] md:text-[4rem] lg:text-[5.4rem] text-[hsl(var(--mn-text))]">
            <span className="pv-word inline-block">Technology</span>{" "}<span className="pv-word inline-block">should do</span>{" "}<span className="pv-word inline-block">more than</span>{" "}<span className="pv-word mn-gradient-text inline-block">exist.</span>
          </h2>
          <p className="pv-reveal mx-auto mt-8 max-w-2xl text-xl md:text-2xl leading-relaxed text-[hsl(var(--mn-silver))]">
            It should solve problems, create opportunities and contribute to meaningful progress.
          </p>
        </div>

        <div className="pv-reveal mx-auto mt-20 md:mt-28 max-w-5xl border-t border-[hsl(var(--mn-text)/0.14)] pt-10 md:pt-12">
          <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-[hsl(var(--mn-text))]">
            EndlessX360 brings together research, creativity and technical development to
            transform ideas into practical solutions for a changing world.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3 border-t border-[hsl(var(--mn-text)/0.1)] pt-10">
            {pillars.map((p) => (
              <div key={p.t} className="pv-pillar">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--mn-cyan))]">{p.t}</h3>
                <p className="mt-4 leading-relaxed text-[hsl(var(--mn-muted))]">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perspective;
