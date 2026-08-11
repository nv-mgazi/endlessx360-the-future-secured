const values = [
  {
    n: "01",
    title: "Shipped, not promised",
    description:
      "Scoped in days, built in weeks. You'll see it come together as it happens instead of waiting months for a first look.",
  },
  {
    n: "02",
    title: "One person, straight answers",
    description:
      "You speak directly to the developer building your project. Plain answers, honest timelines, nobody in between.",
  },
  {
    n: "03",
    title: "Yours to grow",
    description:
      "You own the code, the content and the accounts. Every build is structured so you'll be able to add more later without starting over.",
  },
];

const Vision = () => {
  return (
    <section id="approach" className="py-28 md:py-36 relative bg-foreground text-background scroll-mt-24">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-background/50">
            The way it works
          </div>
          <h2 className="display mt-5 text-[clamp(2rem,5.5vw,4rem)] max-w-3xl">
            How you'll be looked after
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-background/70 leading-relaxed">
            A clear scope, your investment agreed upfront, and a build you fully control
            the day it launches.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-x-10 gap-y-12 border-t border-background/15 pt-12">
            {values.map((v) => (
              <div key={v.n} className="space-y-4">
                <div className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--brand-accent))]">
                  {v.n}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{v.title}</h3>
                <p className="text-background/70 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
