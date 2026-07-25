export const CONTACT = {
  phone: "+27 79 026 7179",
  phoneRaw: "+27790267179",
  whatsapp: "https://wa.me/27790267179",
  whatsappLabel: "wa.me/27790267179",
  email: "ntandoyenkosivezokuhle@gmail.com",
  emailLabel: "ntandoyenkosivezokuhle@gmail.com",
  location: "Durban, South Africa",
  address: "477 Anton Lembede St, Durban 4001",
  brand: "EndlessX360",
};

export const waLink = (message?: string) =>
  message
    ? `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`
    : CONTACT.whatsapp;
