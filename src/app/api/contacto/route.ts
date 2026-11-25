import { SITE } from "@/lib/site";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Solicitud inválida" }, { status: 400 });
  }

  // Honeypot anti-spam: los bots llenan este campo oculto.
  if (body.website) return Response.json({ ok: true });

  const f = (k: string) => String(body[k] ?? "").trim().slice(0, 2000);
  const nombre = f("nombre"), empresa = f("empresa"), ciudad = f("ciudad");
  const telefono = f("telefono"), correo = f("correo"), detalles = f("detalles");

  if (!nombre || !empresa || !telefono || !detalles || !/^\S+@\S+\.\S+$/.test(correo)) {
    return Response.json({ error: "Faltan datos obligatorios" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY no configurada");
    return Response.json({ error: "Servicio de correo no configurado" }, { status: 500 });
  }

  const html = `<h2>Nueva cotización</h2>
<p><b>Nombre:</b> ${esc(nombre)}<br><b>Empresa:</b> ${esc(empresa)}<br><b>Ciudad:</b> ${esc(ciudad)}<br>
<b>Teléfono:</b> ${esc(telefono)}<br><b>Correo:</b> ${esc(correo)}</p>
<p><b>Requerimiento:</b><br>${esc(detalles).replace(/\n/g, "<br>")}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Cotizaciones <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL ?? SITE.email],
      reply_to: correo,
      subject: `Cotización: ${empresa} — ${nombre}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return Response.json({ error: "No se pudo enviar" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
