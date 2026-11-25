"use client";
import { useEffect, useRef, useState } from "react";

const advantages = [
  {
    icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5" /><path d="M14 6v4M14 18v4M6 14h4M18 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" /></svg>),
    title: "Conexión Directa EE.UU.",
    description: "Garantía de pureza y calidad de material americano. Trabajamos con distribuidores certificados para asegurar trazabilidad completa del material.",
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4l8 6v8l-8 6-8-6V10l8-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M14 10v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M10 14h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>),
    title: "Velocidad sin Rivales",
    description: "Logística optimizada para entregas en Colombia en tiempos mínimos. Cada día de paro de máquina es costoso — nosotros lo entendemos.",
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="8" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M4 12h20" stroke="currentColor" strokeWidth="1.5" /><circle cx="14" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" /><path d="M9 18h10" stroke="currentColor" strokeWidth="1" opacity="0.5" /><path d="M9 21h6" stroke="currentColor" strokeWidth="1" opacity="0.5" /></svg>),
    title: "Soporte Técnico Especializado",
    description: "Entendemos los requerimientos del mecanizado por penetración. Le asesoramos en la selección del material óptimo para su aplicación específica.",
  },
];

export default function Advantages() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="ventaja" ref={sectionRef} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-copper/3 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-copper text-sm font-semibold tracking-widest uppercase mb-4">Ventaja Competitiva</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-6">
            ¿Por qué <span className="text-copper">Welding Colombia SAS</span> es su Aliado Estratégico?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            No solo vendemos cobre — ofrecemos una cadena de suministro diseñada para la velocidad y confiabilidad que su operación exige.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {advantages.map((adv, i) => (
            <div
              key={i}
              className={`relative text-center p-8 rounded-2xl transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              {/* Icon container */}
              <div className="w-20 h-20 mx-auto mb-6 bg-carbon rounded-2xl flex items-center justify-center text-copper shadow-lg shadow-carbon/20 transition-transform duration-300 hover:scale-105 hover:rotate-3">
                {adv.icon}
              </div>
              {/* Number badge */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-copper/5 rounded-full flex items-center justify-center">
                <span className="text-copper text-xs font-bold">0{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">{adv.title}</h3>
              <p className="text-gray-500 leading-relaxed">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
