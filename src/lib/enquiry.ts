export type Enquiry = { name: string; email: string; topic: string; message: string };
export type EnquiryErrors = Partial<Record<keyof Enquiry, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateEnquiry(v: Enquiry): EnquiryErrors {
  const e: EnquiryErrors = {};
  const name = v.name.trim();
  const email = v.email.trim();
  const message = v.message.trim();
  if (!name) e.name = "Please enter your name.";
  else if (name.length > 100) e.name = "Name must be 100 characters or fewer.";
  if (!email) e.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(email) || email.length > 255) e.email = "Please enter a valid email address.";
  if (message.length < 10) e.message = "Please write at least 10 characters.";
  else if (message.length > 2000) e.message = "Message must be 2000 characters or fewer.";
  return e;
}
