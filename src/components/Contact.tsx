import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { CONTACT, waLink, mailtoHref } from "@/lib/contact";

const Contact = () => {
  return (
    <section id="contact" className="py-28 md:py-36 relative bg-gradient-hero scroll-mt-24">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <div className="eyebrow">Contact</div>
            <h2 className="display mt-5 text-[clamp(2rem,5.5vw,4rem)]">
              You know my work — let's build yours
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Tell me what you need in a sentence or two — you'll have a scoped quote back
              within 24 hours.
            </p>
          </div>

          <Card className="rounded-[2rem] border border-border shadow-playful overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10 space-y-6 bg-foreground text-background">

                <h3 className="text-2xl font-bold">Reach us directly</h3>
                <p className="text-white/90 leading-relaxed">
                  Pick whichever suits you. You speak to the person who'll be doing the
                  work — no queue, no call centre.
                </p>

                <div className="space-y-4">
                  <a
                    href={waLink("Hi! I'd like to discuss a project.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/15 hover:bg-white/25 transition-smooth backdrop-blur"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[hsl(var(--brand-yellow))] flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-[hsl(var(--brand-navy))]" />
                    </div>
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-sm text-white/80">{CONTACT.phone}</div>
                    </div>
                  </a>

                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/15 hover:bg-white/25 transition-smooth backdrop-blur"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Call</div>
                      <div className="text-sm text-white/80">
                        {CONTACT.phone} · same number on WhatsApp
                      </div>
                    </div>
                  </a>

                  <a
                    href={mailtoHref("Project enquiry")}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/15 hover:bg-white/25 transition-smooth backdrop-blur"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Email us</div>
                      <div className="text-sm text-white/80">
                        Opens in Gmail, Outlook or your mail app
                      </div>
                    </div>
                  </a>


                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur">
                    <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Based in</div>
                      <div className="text-sm text-white/80">{CONTACT.location}</div>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-8 md:p-10 space-y-6 bg-card">
                <h3 className="text-2xl font-bold">What happens next</h3>
                <ol className="space-y-5">
                  {[
                    { n: "1", t: "You send the brief", d: "A short message about your business and what the project needs to do." },
                    { n: "2", t: "You get a scoping conversation", d: "A quick chat to pin down goals, what you'll need, and timing." },
                    { n: "3", t: "You get the investment in writing", d: "An itemised, fixed quote within 24 hours — nothing owed either way." },
                    { n: "4", t: "You'll be able to watch it take shape", d: "Regular check-ins, then handover with everything in your name." },
                  ].map((s) => (

                    <li key={s.n} className="flex gap-4">
                      <div className="w-9 h-9 rounded-full bg-[hsl(var(--brand-yellow))] text-[hsl(var(--brand-navy))] font-bold flex items-center justify-center flex-shrink-0">
                        {s.n}
                      </div>
                      <div>
                        <div className="font-semibold">{s.t}</div>
                        <div className="text-sm text-muted-foreground">{s.d}</div>
                      </div>
                    </li>
                  ))}
                </ol>

                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-full bg-[hsl(var(--brand-purple))] hover:bg-[hsl(var(--brand-purple)/0.9)] text-white shadow-playful"
                >
                  <a href={waLink("Hi! I'd like a quote for a project.")} target="_blank" rel="noopener noreferrer">
                    Request a quote
                  </a>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
