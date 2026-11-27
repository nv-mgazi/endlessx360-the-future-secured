import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import earth from "@/assets/hero-earth.webp";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { n: "01", title: "Research & architecture", body: "Understand the challenge, define requirements and shape a considered technical direction." },
  { n: "02", title: "Prototype & validate", body: "Explore ideas, build focused prototypes and refine the experience with security and usability in mind." },
  { n: "03", title: "Deliver & evolve", body: "Prepare solutions for deployment, then improve them as needs, technology and opportunities develop." },
];

const Perspective = () => {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(".pv-earth", { yPercent: -8, scale: 1.1 }, {
          yPercent: 8, scale: 1, ease: "none",
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
        gsap.utils.toArray<HTMLElement>(".pv-step").forEach((el) => {
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
    <section ref={root} id="perspective" className="midnight relative scroll-mt-20 overflow-hidden py-32 md:py-40" aria-labelledby="pv-title">
      <div className="pv-earth pointer-events-none absolute inset-0" aria-hidden="true">
        <img src={earth} alt="" width={1920} height={1088} loading="lazy" className="h-full w-full object-cover object-bottom opacity-30 rotate-180" />
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
            We turn thoughtful ideas into useful technology that solves problems, creates opportunity and moves people forward.
          </p>
        </div>
        <div className="mx-auto mt-20 md:mt-24 max-w-5xl border-t border-[hsl(var(--mn-text)/0.14)] pt-10 md:pt-12">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.n} className="pv-step relative">
                <span className="text-sm font-semibold tabular-nums text-[hsl(var(--mn-cyan))]">{step.n}</span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-[hsl(var(--mn-text))]">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-[hsl(var(--mn-muted))]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perspective;
