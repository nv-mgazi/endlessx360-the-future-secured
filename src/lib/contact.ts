export const CONTACT = {
  phone: "+27 79 026 7179",
  phoneRaw: "+27790267179",
  whatsapp: "https://wa.me/27790267179",
  whatsappLabel: "wa.me/27790267179",
  email: "hello@endlessx360.com",
  location: "South Africa",
  brand: "EndlessX360",
};

export const waLink = (message?: string) =>
  message
    ? `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`
    : CONTACT.whatsapp;
