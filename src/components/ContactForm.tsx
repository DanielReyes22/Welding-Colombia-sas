"use client";
import { useState, useRef, useEffect, type FormEvent } from "react";
import { whatsappLink } from "@/lib/site";

export default function ContactForm() {
  const formRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [waText, setWaText] = useState("");

  useEffect(() => {
    const el = formRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSending(true);
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setWaText(
        `Hola, soy ${data.nombre} de ${data.empresa}${data.ciudad ? ` (${data.ciudad})` : ""}. Acabo de enviar una solicitud de cotización: ${data.detalles}`
      );
      setSubmitted(true);
    } catch {
      setError("No pudimos enviar su solicitud. Intente de nuevo o escríbanos por WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" ref={formRef} className="py-24 lg:py-32 bg-smoke relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block text-copper text-sm font-semibold tracking-widest uppercase mb-4">Contacto B2B</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-6">
            Solicite una Cotización en <span className="text-copper">Minutos</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Complete el formulario y nuestro equipo le responderá con una cotización personalizada en menos de 24 horas hábiles.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-2xl border border-copper/20 p-12 text-center shadow-lg">
            <div className="w-20 h-20 mx-auto mb-6 bg-copper/10 rounded-full flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M12 20l6 6 10-12" stroke="#B87333" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-text-dark mb-3">¡Requerimiento Recibido!</h3>
            <p className="text-gray-500 mb-6">Nuestro equipo se pondrá en contacto con usted en las próximas 24 horas hábiles.</p>
            <a href={whatsappLink(waText)} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-[#25D366] hover:brightness-95 text-white px-6 py-3 rounded-xl font-bold transition-all">
              Agilizar por WhatsApp
            </a>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`bg-white rounded-2xl border border-gray-100 p-8 sm:p-12 shadow-lg shadow-gray-100/50 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-text-dark mb-2">Nombre Completo</label>
                <input type="text" id="nombre" name="nombre" required placeholder="Ej: Carlos Martínez"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-text-dark placeholder:text-gray-300 focus:outline-none focus:border-copper focus:ring-2 focus:ring-copper/10 transition-all duration-300" />
              </div>
              <div>
                <label htmlFor="empresa" className="block text-sm font-semibold text-text-dark mb-2">
                  Nombre de la Empresa <span className="text-copper">*</span>
                </label>
                <input type="text" id="empresa" name="empresa" required placeholder="Ej: Talleres Precisión S.A.S."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-text-dark placeholder:text-gray-300 focus:outline-none focus:border-copper focus:ring-2 focus:ring-copper/10 transition-all duration-300" />
              </div>
              <div>
                <label htmlFor="ciudad" className="block text-sm font-semibold text-text-dark mb-2">Ciudad (Colombia)</label>
                <input type="text" id="ciudad" name="ciudad" placeholder="Ej: Medellín, Bogotá, Cali"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-text-dark placeholder:text-gray-300 focus:outline-none focus:border-copper focus:ring-2 focus:ring-copper/10 transition-all duration-300" />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-semibold text-text-dark mb-2">Teléfono Móvil</label>
                <input type="tel" id="telefono" name="telefono" required placeholder="Ej: +57 300 123 4567"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-text-dark placeholder:text-gray-300 focus:outline-none focus:border-copper focus:ring-2 focus:ring-copper/10 transition-all duration-300" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="correo" className="block text-sm font-semibold text-text-dark mb-2">Correo Corporativo</label>
              <input type="email" id="correo" name="correo" required placeholder="Ej: compras@empresa.com.co"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-text-dark placeholder:text-gray-300 focus:outline-none focus:border-copper focus:ring-2 focus:ring-copper/10 transition-all duration-300" />
            </div>
            <div className="mb-8">
              <label htmlFor="detalles" className="block text-sm font-semibold text-text-dark mb-2">Detalles de su Requerimiento</label>
              <textarea id="detalles" name="detalles" rows={5} required placeholder="Material, medidas, cantidad, aplicación..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-text-dark placeholder:text-gray-300 focus:outline-none focus:border-copper focus:ring-2 focus:ring-copper/10 transition-all duration-300 resize-y" />
            </div>
            <button
              type="submit"
              id="cta-submit"
              disabled={sending}
              className="w-full bg-copper hover:bg-copper-light text-white py-4 rounded-xl text-lg font-bold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-copper/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              {sending ? "Enviando..." : "Enviar Requerimiento"}
            </button>
            {error && <p role="alert" className="text-center text-red-600 text-sm mt-4">{error}</p>}
            <p className="text-center text-gray-400 text-xs mt-4">
              Sus datos están protegidos. Solo los usaremos para responder su solicitud.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
