import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { CONTACT, waLink } from "@/lib/contact";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-background scroll-mt-24">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-14">
            <h2 className="text-4xl md:text-5xl font-bold">
              Start your <span className="gradient-text">project</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us what you need in a sentence or two — you'll have a scoped quote back
              within 24 hours.
            </p>
          </div>

          <Card className="rounded-3xl border-2 border-[hsl(var(--brand-purple)/0.2)] shadow-playful overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10 space-y-6 bg-gradient-primary text-white">
                <h3 className="text-2xl font-bold">Contact details</h3>
                <p className="text-white/90 leading-relaxed">
                  Pick whichever suits you. Messages are answered by the person who'll be
                  doing the work.
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
                      <div className="font-semibold">Phone</div>
                      <div className="text-sm text-white/80">{CONTACT.phone}</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/15 hover:bg-white/25 transition-smooth backdrop-blur"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm text-white/80 break-all">{CONTACT.email}</div>
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
                <h3 className="text-2xl font-bold">How it runs</h3>
                <ol className="space-y-5">
                  {[
                    { n: "1", t: "Send the brief", d: "A short message about your business and what the project needs to do." },
                    { n: "2", t: "Scope call", d: "A quick conversation to pin down goals, features and timeline." },
                    { n: "3", t: "Fixed quote", d: "A written, itemised quote within 24 hours — no obligation." },
                    { n: "4", t: "Design, build, launch", d: "Regular check-ins, then handover with everything in your name." },
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
