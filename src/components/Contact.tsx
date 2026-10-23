import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Send } from "lucide-react";
import { BrandIcon } from "@/components/SocialLinks";
import { CONTACT, mailtoHref, waLink } from "@/lib/contact";
import { validateEnquiry, type Enquiry, type EnquiryErrors } from "@/lib/enquiry";

const TOPICS = ["General Enquiry", "Collaboration", "Products", "Technology Development"];

const Contact = () => {
  const [values, setValues] = useState<Enquiry>({ name: "", email: "", topic: TOPICS[0], message: "" });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [opened, setOpened] = useState(false);
  const [trap, setTrap] = useState("");

  const set = (k: keyof Enquiry) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trap) return; // bot filled the hidden field
    const errs = validateEnquiry(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    const body = `${values.message.trim()}\n\nFrom: ${values.name.trim()}\n${values.email.trim()}`;
    window.location.href = mailtoHref(`${values.topic}: ${values.name.trim()}`, body);
    setOpened(true);
  };

  const field = (k: keyof Enquiry) => ({
    id: `f-${k}`,
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `e-${k}` : undefined,
  });
  const err = (k: keyof Enquiry) =>
    errors[k] && <p id={`e-${k}`} className="mt-2 text-sm text-[hsl(var(--destructive))]">{errors[k]}</p>;

  return (
    <section id="contact" className="midnight relative scroll-mt-20 py-24 md:py-32 mn-section-contact" aria-labelledby="contact-title">
      <div className="container px-5">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <div className="mn-eyebrow">Contact</div>
            <h2 id="contact-title" className="mt-5 mn-h2">
              Let's <span className="mn-gradient-text">Connect.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[hsl(var(--mn-muted))]">
              Have an idea, question or opportunity to explore? We'd be glad to hear from you.
            </p>

            <ul className="mt-12 space-y-3 max-w-md">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open WhatsApp in a new tab"
                  className="flex items-center gap-4 rounded-2xl border mn-glass p-4 transition-smooth hover:border-[hsl(var(--mn-cyan)/0.4)]"
                >
                  <BrandIcon platform="whatsapp" className="social-icon social-icon-whatsapp h-5 w-5" />
                  <span><span className="block font-medium">WhatsApp</span><span className="text-sm text-[hsl(var(--mn-muted))]">Open WhatsApp</span></span>
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-4 rounded-2xl border mn-glass p-4 transition-smooth hover:border-[hsl(var(--mn-cyan)/0.4)]">
                  <Phone className="h-5 w-5 text-[hsl(var(--mn-cyan))]" />
                  <span><span className="block font-medium">Call</span><span className="text-sm text-[hsl(var(--mn-muted))]">Start a call</span></span>
                </a>
              </li>
              <li>
                <a href={mailtoHref("Enquiry")} className="flex items-center gap-4 rounded-2xl border mn-glass p-4 transition-smooth hover:border-[hsl(var(--mn-cyan)/0.4)]">
                  <Mail className="h-5 w-5 text-[hsl(var(--mn-cyan))]" />
                  <span><span className="block font-medium">Email</span><span className="text-sm text-[hsl(var(--mn-muted))]">Compose a message</span></span>
                </a>
              </li>
            </ul>
          </div>

          <form onSubmit={onSubmit} noValidate className="rounded-[2rem] border mn-glass p-6 md:p-10 space-y-6" aria-label="Enquiry form">
            <div className="hidden" aria-hidden="true">
              <label>Leave empty<input tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} /></label>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="f-name" className="mb-2 block text-sm font-medium">Name</label>
                <input {...field("name")} className="mn-input" autoComplete="name" maxLength={100} value={values.name} onChange={set("name")} />
                {err("name")}
              </div>
              <div>
                <label htmlFor="f-email" className="mb-2 block text-sm font-medium">Email address</label>
                <input {...field("email")} type="email" className="mn-input" autoComplete="email" maxLength={255} value={values.email} onChange={set("email")} />
                {err("email")}
              </div>
            </div>
            <div>
              <label htmlFor="f-topic" className="mb-2 block text-sm font-medium">Enquiry type <span className="text-[hsl(var(--mn-muted))]">(optional)</span></label>
              <select {...field("topic")} className="mn-input" value={values.topic} onChange={set("topic")}>
                {TOPICS.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="f-message" className="mb-2 block text-sm font-medium">Message</label>
              <textarea {...field("message")} rows={5} className="mn-input resize-y" maxLength={2000} value={values.message} onChange={set("message")} />
              {err("message")}
            </div>

            <button type="submit" className="inline-flex h-13 w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold mn-btn-primary">
              Prepare email <Send className="h-4 w-4" />
            </button>

            <div aria-live="polite">
              {opened && (
                <p className="rounded-xl border border-[hsl(var(--mn-cyan)/0.3)] bg-[hsl(var(--mn-cyan)/0.06)] p-4 text-sm leading-relaxed">
                  Your email app should now be open with your message ready. Press <strong>send</strong> there to
                  deliver it. Nothing opened? Use WhatsApp or call instead.
                </p>
              )}
            </div>
            <p className="text-xs leading-relaxed text-[hsl(var(--mn-muted))]">
              Your message is sent from your own email app; this website does not store it. See our{" "}
              <Link to="/privacy" className="underline underline-offset-2 hover:text-[hsl(var(--mn-text))]">privacy notice</Link>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
