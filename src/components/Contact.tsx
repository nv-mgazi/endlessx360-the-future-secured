import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { CONTACT, waLink } from "@/lib/contact";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-14">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's build <span className="gradient-text">something great</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Prefer WhatsApp? Same. Send a message and get a free quote within 24 hours.
            </p>
          </div>

          <Card className="rounded-3xl border-2 border-[hsl(var(--brand-purple)/0.2)] shadow-playful overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left: quick contact */}
              <div className="p-8 md:p-10 space-y-6 bg-gradient-primary text-white">
                <h3 className="text-2xl font-bold">Reach out directly</h3>
                <p className="text-white/90 leading-relaxed">
                  Skip the forms. Tap any option below and let's talk about your project today.
                </p>

                <div className="space-y-4">
                  <a
                    href={waLink("Hi! I'd like to chat about a project.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/15 hover:bg-white/25 transition-smooth backdrop-blur"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[hsl(var(--brand-yellow))] flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-[hsl(var(--brand-navy))]" />
                    </div>
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-sm text-white/80">{CONTACT.whatsappLabel}</div>
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
                      <div className="text-sm text-white/80">{CONTACT.email}</div>
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

              {/* Right: what happens next */}
              <CardContent className="p-8 md:p-10 space-y-6 bg-card">
                <h3 className="text-2xl font-bold">What happens next</h3>
                <ol className="space-y-5">
                  {[
                    { n: "1", t: "You reach out", d: "Send a WhatsApp with a quick description of what you need." },
                    { n: "2", t: "Free consultation", d: "We'll chat about your goals, timeline, and budget — no pressure." },
                    { n: "3", t: "Custom quote", d: "You get a clear, once-off quote within 24 hours." },
                    { n: "4", t: "We build it", d: "Design, development, launch — and you own the site." },
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
                  <a href={waLink("Hi! I'd like a free quote for a project.")} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Start on WhatsApp
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
