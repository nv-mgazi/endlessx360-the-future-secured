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
    body: "Applications, platforms and business systems engineered to be fast, dependable and built around the people who use them.",
    points: ["Websites & web platforms", "Business systems", "Mobile apps"],
  },
  {
    key: "Artificial Intelligence",
    img: imgAi,
    title: "Artificial Intelligence",
    body: "AI-assisted systems and intelligent experiences that help teams work smarter and give users more useful answers.",
    points: ["Intelligent assistants", "Smarter workflows", "Data-informed features"],
  },
  {
    key: "Security",
    img: imgSecurity,
    title: "Security & Protection",
    body: "Security-minded digital solutions, with protection considered from the first line of code rather than added at the end.",
    points: ["Secure by design", "Protected data", "Careful access control"],
  },
  {
    key: "Emerging Technology",
    img: imgEmerging,
    title: "Emerging Technologies",
    body: "Ongoing exploration of IoT and connected systems — research and experimentation shaping where we go next.",
    points: ["IoT research", "Connected systems", "Experimentation"],
  },
];

/* visual tile anchors inside the desktop scene */
const panelPos = [
  { left: "5%", top: "13%" },
  { right: "5%", top: "11%" },
  { left: "7%", bottom: "11%" },
  { right: "6%", bottom: "13%" },
];

const Hero = () => {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.set(".story-panel", { autoAlpha: 0, y: 40, scale: 0.92 });
        gsap.set(".story-line", { strokeDashoffset: 1 });
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: ".hero-stage",
            start: "top top",
            end: "+=140%",
            scrub: 0.7,
            pin: true,
            anticipatePin: 1,
          },
        });
        tl.to(".hero-copy", { y: -90, autoAlpha: 0, duration: 0.4 }, 0)
          .to(".hero-mark", { xPercent: -58, scale: 0.6, duration: 0.6 }, 0)
          .to(".hero-earth", { scale: 1.18, yPercent: -6, autoAlpha: 0.55, duration: 0.9 }, 0)
          .to(".hero-vignette", { autoAlpha: 1, duration: 0.6 }, 0.1)
          .to(".story-line", { strokeDashoffset: 0, duration: 0.3, stagger: 0.05 }, 0.35)
          .to(".story-panel", { autoAlpha: 1, y: 0, scale: 1, duration: 0.3, stagger: 0.08 }, 0.45);
      });

      mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".focus-row").forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: 28,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });
      });

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
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
      {/* HERO */}
      <section className="hero-stage relative min-h-[100svh] overflow-hidden mn-hero-bg" aria-labelledby="hero-title">
        {/* cinematic Earth backdrop */}
        <div className="hero-earth pointer-events-none absolute inset-0 origin-[70%_80%]" aria-hidden="true">
          <img
            src={earth}
            alt=""
            width={1920}
            height={1088}
            fetchPriority="high"
            className="h-full w-full object-cover object-[70%_center] opacity-80"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 mn-hero-shade" aria-hidden="true" />
        <div className="hero-vignette pointer-events-none absolute inset-0 mn-hero-vignette opacity-0" aria-hidden="true" />

        {/* connection lines (desktop story) */}
        <svg className="pointer-events-none absolute inset-0 hidden lg:block w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {["M36 50 L20 28", "M36 50 L78 24", "M36 50 L22 74", "M36 50 L76 76"].map((d) => (
            <path
              key={d}
              d={d}
              pathLength={1}
              className="story-line"
              fill="none"
              stroke="hsl(var(--mn-cyan) / 0.35)"
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
            <div className="absolute inset-0 m-auto h-1/2 w-2/3 rounded-full bg-[hsl(var(--mn-blue)/0.18)] blur-[100px]" aria-hidden="true" />
            <BrandMark className="relative w-full max-w-[560px] h-auto drop-shadow-[0_30px_60px_hsl(var(--mn-blue)/0.35)] py-10 px-6" />
          </div>
        </div>

        {/* visual introduction tiles (desktop story) */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
          {areas.map((a, i) => (
            <figure
              key={a.key}
              className="story-panel absolute w-[clamp(200px,17vw,270px)] overflow-hidden rounded-2xl mn-frame opacity-0"
              style={panelPos[i]}
            >
              <img src={a.img} alt="" width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 px-4 py-3 text-sm font-medium text-[hsl(var(--mn-text))] bg-gradient-to-t from-[hsl(var(--mn-bg)/0.9)] to-transparent">
                {a.key}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FOCUS — editorial detail */}
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

          <div className="mt-16 md:mt-24 space-y-20 md:space-y-32">
            {areas.map((a, i) => (
              <article
                key={a.key}
                className={`focus-row grid items-center gap-8 md:gap-14 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="focus-media relative overflow-hidden rounded-[1.75rem] mn-frame">
                  <img
                    src={a.img}
                    alt={`${a.title} visual`}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="aspect-[4/3] w-full scale-[1.14] object-cover"
                  />
                </div>
                <div className="max-w-xl">
                  <span className="text-sm font-medium tabular-nums text-[hsl(var(--mn-cyan))]">0{i + 1}</span>
                  <h3 className="mt-4 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold tracking-tight leading-tight text-[hsl(var(--mn-text))]">
                    {a.title}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-[hsl(var(--mn-muted))]">{a.body}</p>
                  <ul className="mt-8 border-t border-[hsl(var(--mn-text)/0.1)]">
                    {a.points.map((p) => (
                      <li key={p} className="border-b border-[hsl(var(--mn-text)/0.1)] py-3 text-[hsl(var(--mn-silver))]">
                        {p}
                      </li>
                    ))}
                  </ul>
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
