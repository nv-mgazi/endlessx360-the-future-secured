// Email is stored in parts so it is never rendered as plain text
// (keeps it out of scrapers and off the visible page).
const EMAIL_PARTS = ["ntandoyenkosivezokuhle", "gmail", "com"];

export const getEmail = () => `${EMAIL_PARTS[0]}@${EMAIL_PARTS[1]}.${EMAIL_PARTS[2]}`;

export const mailtoHref = (subject = "Project enquiry", body = "") =>
  `mailto:${getEmail()}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;

export const CONTACT = {
  phone: "+27 79 026 7179",
  phoneRaw: "+27790267179",
  whatsapp: "https://wa.me/27790267179",
  whatsappLabel: "wa.me/27790267179",
  location: "Durban, South Africa",
  address: "477 Anton Lembede St, Durban 4001",
  brand: "EndlessX360",
};

export const waLink = (message?: string) =>
  message
    ? `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`
    : CONTACT.whatsapp;
