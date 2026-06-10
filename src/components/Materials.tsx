"use client";
import { useEffect, useRef, useState } from "react";

interface MaterialCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  specs: string[];
  delay: string;
}

function MaterialCard({ icon, title, description, specs, delay }: MaterialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white rounded-2xl border border-gray-100 p-8 transition-all duration-500 hover:shadow-xl hover:shadow-copper/8 hover:-translate-y-2 hover:border-copper/20 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: delay }}
    >
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-copper/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="w-16 h-16 bg-copper/8 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-copper/15 group-hover:scale-105">
        <div className="text-copper">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-text-dark mb-3 group-hover:text-copper transition-colors duration-300">{title}</h3>
      <p className="text-gray-500 leading-relaxed mb-5">{description}</p>
      <ul className="space-y-2">
        {specs.map((spec, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-5" stroke="#B87333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            {spec}
          </li>
        ))}
      </ul>
    </div>
  );
}

const BlockIcon = (<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M4 10l12-6 12 6v12l-12 6-12-6V10z" stroke="currentColor" strokeWidth="1.5" /><path d="M16 16v12" stroke="currentColor" strokeWidth="1.5" /><path d="M16 16L4 10" stroke="currentColor" strokeWidth="1.5" /><path d="M16 16l12-6" stroke="currentColor" strokeWidth="1.5" /></svg>);
const BarIcon = (<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="6" y="6" width="8" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="18" y="10" width="8" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" /><circle cx="10" cy="16" r="2" stroke="currentColor" strokeWidth="1" opacity="0.5" /></svg>);
const AlloyIcon = (<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" /><circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1" opacity="0.6" /><circle cx="16" cy="16" r="1.5" fill="currentColor" opacity="0.8" /></svg>);

export default function Materials() {
  return (
    <section id="materiales" className="py-24 lg:py-32 bg-smoke">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-copper text-sm font-semibold tracking-widest uppercase mb-4">Catálogo Técnico</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-6">
            Nuestra Gama de <span className="text-copper">Materiales</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Cobre de alta pureza y aleaciones especializadas, importados directamente desde distribuidores certificados en Estados Unidos.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <MaterialCard icon={BlockIcon} title="Bloques y Placas de Cobre EDM" description="Para moldes grandes y cavidades complejas. Material de alta conductividad térmica y eléctrica, ideal para electroerosión por penetración." specs={["Pureza ≥ 99.9% Cu", "Conductividad IACS 101%", "Dimensiones personalizables"]} delay="0s" />
          <MaterialCard icon={BarIcon} title="Barras Redondas y Cuadradas" description="Para electrodos de detalle y contorneado. Geometría precisa para operaciones de acabado fino y tolerancias estrechas." specs={["Diámetros desde 3mm", "Acabado superficial fino", "Corte a medida disponible"]} delay="0.15s" />
          <MaterialCard icon={AlloyIcon} title="Aleaciones Especiales (CuW)" description="Cobre-Tungsteno para aplicaciones de alto desgaste. Resistencia superior al arco eléctrico y mínima erosión del electrodo." specs={["CuW 70/30 y 80/20", "Alta resistencia al desgaste", "Ideal para producción en serie"]} delay="0.3s" />
        </div>
      </div>
    </section>
  );
}
