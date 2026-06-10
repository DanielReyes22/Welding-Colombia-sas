"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in-up");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-carbon overflow-hidden"
    >
      {/* Atmospheric Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(184,115,51,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(184,115,51,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Copper gradient orb */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-copper/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-copper/3 rounded-full blur-[100px]" />
        {/* Diagonal accent line */}
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-copper/20 to-transparent transform rotate-12 translate-x-[-30vw]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-copper/10 border border-copper/20 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 bg-copper rounded-full animate-pulse" />
          <span className="text-copper text-sm font-medium tracking-wide">
            Abastecimiento Directo desde EE.UU.
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-light leading-tight mb-6 tracking-tight">
          Cobre de Alta Pureza de{" "}
          <span className="text-copper relative">
            EE.UU.
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="6"
              viewBox="0 0 200 6"
              preserveAspectRatio="none"
            >
              <path
                d="M0 3 Q50 0 100 3 T200 3"
                stroke="#B87333"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </span>{" "}
          en Tiempos Récord para{" "}
          <span className="text-copper">EDM</span>.
        </h1>

        {/* H2 Subtitle */}
        <h2 className="text-lg sm:text-xl lg:text-2xl text-text-muted font-light leading-relaxed max-w-3xl mx-auto mb-10">
          Abastecimiento estratégico de electrodos para la industria
          metalmecánica colombiana.{" "}
          <span className="text-text-light font-medium">
            Reducimos el paro de sus máquinas
          </span>{" "}
          con nuestra logística rápida.
        </h2>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            id="cta-hero-primary"
            className="group bg-copper hover:bg-copper-light text-white px-10 py-4 rounded-xl text-lg font-bold tracking-wide transition-all duration-300 hover:shadow-2xl hover:shadow-copper/30 hover:-translate-y-1 active:translate-y-0 animate-copper-pulse flex items-center gap-3"
          >
            Solicitar Cotización Urgente
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M4 10h12m0 0l-4-4m4 4l-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#materiales"
            id="cta-hero-secondary"
            className="group text-text-muted hover:text-text-light border border-white/10 hover:border-copper/40 px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 flex items-center gap-2"
          >
            Ver Catálogo
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-y-1"
            >
              <path
                d="M8 3v10m0 0l-3-3m3 3l3-3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex items-center justify-center gap-8 text-text-muted/50 text-sm">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" opacity="0.5">
              <path d="M8 0l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
            </svg>
            <span>Material Certificado</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/10" />
          <div className="hidden sm:flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" opacity="0.5">
              <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 2.5a1 1 0 110 2 1 1 0 010-2zM9.5 11h-3v-1h1V7.5h-1v-1h2V10h1v1z" />
            </svg>
            <span>Soporte Técnico EDM</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/10" />
          <div className="hidden sm:flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" opacity="0.5">
              <path d="M14 6l-6-5-6 5v7a1 1 0 001 1h10a1 1 0 001-1V6z" />
            </svg>
            <span>Envío a Colombia</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-smoke to-transparent" />
    </section>
  );
}
