import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { mailtoHref } from "@/lib/contact";

const PrivacyPage = () => (
  <div className="midnight min-h-screen">
    <div className="container max-w-3xl px-5 py-12">
      <Link to="/" aria-label="Back to EndlessX360 home"><Logo size="h-7" /></Link>
      <h1 className="mt-14 text-4xl font-semibold tracking-tight">Privacy notice</h1>
      <div className="mt-8 space-y-5 leading-relaxed text-[hsl(var(--mn-muted))]">
        <p>This website does not create accounts, use a database or store the details you type into the contact form.</p>
        <p>When you use the contact form, your device's email app opens with your message pre-filled. The message is only sent if you press send, and it then travels by ordinary email. WhatsApp and phone contact are handled by those services.</p>
        <p>Details you send us are used only to reply to your enquiry and are not sold or shared for marketing. In line with POPIA, you may ask us to access, correct or delete information you have sent us.</p>
        <p><a href={mailtoHref("Privacy request")} className="underline underline-offset-2 text-[hsl(var(--mn-text))]">Email us about privacy</a></p>
      </div>
      <Link to="/" className="mt-12 inline-block text-sm text-[hsl(var(--mn-cyan))]">← Back to home</Link>
    </div>
  </div>
);

export default PrivacyPage;
