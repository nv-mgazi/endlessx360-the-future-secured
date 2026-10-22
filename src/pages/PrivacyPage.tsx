import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import Logo from "@/components/Logo";
import { mailtoHref, waLink } from "@/lib/contact";

const LAST_UPDATED = "22 October 2026";

const sections = [
  {
    id: "collection",
    title: "Information we collect",
    body: (
      <>
        <p>
          You do not need an account to use this website, and the website itself does not
          require you to submit any information to browse it.
        </p>
        <p>
          Personal information reaches us only when you choose to contact us. If you use the
          enquiry form, the details you enter, typically your name, email address and message,
          are used to prepare a draft email in your own email application. The message is
          sent by you, from your own email account, and reaches us as ordinary email. If you
          contact us on WhatsApp, by telephone, or by email directly, we receive the
          information you share in that conversation, such as your name, contact details and
          the content of your messages.
        </p>
      </>
    ),
  },
  {
    id: "purpose",
    title: "How we use your information",
    body: (
      <>
        <p>
          Information you send us is used to respond to your enquiry, to communicate with you
          about the topics you raised, and to keep the correspondence needed to manage that
          business contact. We do not sell your information, and we do not use it to send you
          marketing you did not ask for.
        </p>
      </>
    ),
  },
  {
    id: "channels",
    title: "Contact channels and other services",
    body: (
      <>
        <p>
          When you contact us through WhatsApp, your communication is handled by WhatsApp and
          its parent companies under their own terms and privacy policy. When you send an
          email, it is carried by your email provider and ours. Telephone calls are carried by
          the relevant mobile or telephone network operators.
        </p>
        <p>
          These providers process information under their own privacy policies, and their
          systems may be located in, or transfer information to, countries other than South
          Africa. We encourage you to review the privacy policies of the services you use to
          reach us.
        </p>
      </>
    ),
  },
  {
    id: "hosting",
    title: "Website hosting and technical data",
    body: (
      <>
        <p>
          This website is hosted by a third-party hosting platform. Like most websites, the
          hosting platform may automatically process standard technical information when the
          site is delivered, for example your IP address, browser type and the pages you
          request. This is used for purposes such as delivering the site, load balancing, security and
          preventing abuse.
        </p>
        <p>
          This website does not place advertising or analytics cookies, and it has no public
          user accounts or database of visitors. Any strictly necessary technical storage is
          limited to what is needed to deliver and secure the website.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Storage and retention",
    body: (
      <>
        <p>
          Messages you send us are kept in our email inbox and other communication channels.
          We keep enquiry correspondence for as long as it is needed to handle your enquiry
          and any reasonable follow-up, as well as any records we are required to keep, after
          which it is deleted. We do not operate a database on this website that stores
          enquiries.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Information security",
    body: (
      <>
        <p>
          We take reasonable practical measures to protect the personal information we handle,
          such as keeping correspondence in accounts protected by passwords and, where
          available, additional sign-in verification. No method of communication or storage is
          completely secure, so we cannot guarantee absolute security, and you should avoid
          sending sensitive information (such as identity numbers or passwords) by email or
          chat where it is not necessary.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your rights under POPIA",
    body: (
      <>
        <p>
          South Africa's Protection of Personal Information Act (POPIA) gives you rights over
          the personal information we hold about you. You may ask us to confirm what personal
          information we hold about you, to provide a record of it, to correct or update it,
          or to delete or destroy it, and you may object to the processing of your personal
          information in appropriate circumstances.
        </p>
        <p>
          You also have the right to lodge a complaint with the Information Regulator of South
          Africa if you believe your information has not been handled in line with POPIA.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this notice",
    body: (
      <>
        <p>
          This notice may be revised from time to time as our practices or the website
          change. The latest version is always published on this page, together with the date
          it was last updated below.
        </p>
      </>
    ),
  },
];

const PrivacyPage = () => (
  <div className="midnight min-h-screen">
    <div className="container max-w-3xl px-5 py-12">
      <Link to="/" aria-label="Back to EndlessX360 home"><Logo size="h-7" /></Link>
      <h1 className="mt-14 text-4xl font-semibold tracking-tight">Privacy notice</h1>
      <p className="mt-4 text-sm text-[hsl(var(--mn-silver))]">Last updated: {LAST_UPDATED}</p>
      <p className="mt-8 text-lg leading-relaxed text-[hsl(var(--mn-muted))]">
        EndlessX360 respects your privacy. This notice explains, in plain language, what
        personal information this website and our contact channels handle, why, and the
        choices and rights you have under South Africa's Protection of Personal Information
        Act (POPIA).
      </p>

      <nav aria-label="Notice contents" className="mt-10 rounded-2xl border mn-glass p-5">
        <h2 className="text-sm font-semibold text-[hsl(var(--mn-text))]">On this page</h2>
        <ul className="mt-3 grid gap-2 text-sm text-[hsl(var(--mn-muted))] sm:grid-cols-2">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="underline-offset-4 hover:text-[hsl(var(--mn-text))] hover:underline">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-12 space-y-12">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-10">
            <h2 className="text-2xl font-semibold tracking-tight text-[hsl(var(--mn-text))]">{s.title}</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-[hsl(var(--mn-muted))]">{s.body}</div>
          </section>
        ))}

        <section id="contact" className="scroll-mt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-[hsl(var(--mn-text))]">Privacy enquiries</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-[hsl(var(--mn-muted))]">
            <p>
              If you have a question about this notice, or you want to exercise any of the
              rights described above, please contact us using either option below.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={mailtoHref("Privacy request")}
                className="inline-flex h-11 items-center rounded-full px-6 text-sm font-semibold mn-btn-primary"
              >
                Email us about privacy
              </a>
              <a
                href={waLink("Privacy request")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border px-6 text-sm font-semibold mn-btn-ghost"
              >
                <MessageCircle className="h-4 w-4 text-[hsl(var(--mn-cyan))]" aria-hidden="true" />
                WhatsApp us
              </a>
            </div>
          </div>
        </section>
      </div>

      <Link to="/" className="mt-14 inline-block text-sm text-[hsl(var(--mn-cyan))]">← Back to home</Link>
    </div>
  </div>
);

export default PrivacyPage;
