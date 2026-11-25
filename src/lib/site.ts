// Datos de contacto provisionales. Actualizar cuando se defina el nombre definitivo.
export const SITE = {
  name: "Welding Colombia SAS", // alias provisional
  phones: [
    { display: "315 615 4602", e164: "573156154602" },
    { display: "320 224 5319", e164: "573202245319" },
  ],
  email: "13900daniel@gmail.com", // provisional
  whatsappE164: "573156154602",
};

export function whatsappLink(text: string) {
  return `https://wa.me/${SITE.whatsappE164}?text=${encodeURIComponent(text)}`;
}
