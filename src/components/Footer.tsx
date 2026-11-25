export default function Footer() {
  return (
    <footer id="footer" className="bg-carbon-dark py-12 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/15 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <rect x="4" y="8" width="24" height="16" rx="2" fill="#B87333" opacity="0.9" />
              <rect x="6" y="10" width="20" height="12" rx="1" fill="#D4955A" opacity="0.5" />
            </svg>
            <span className="text-text-light font-semibold">
              <span className="text-copper">Prime</span>Copper
              <span className="text-text-muted text-sm font-normal ml-1">Colombia</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-text-muted text-sm text-center">
            © {new Date().getFullYear()} Welding Colombia SAS. Abastecimiento Industrial de Cobre de EE.UU.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 text-text-muted text-sm">
            <a href="#materiales" className="hover:text-copper transition-colors duration-300">Materiales</a>
            <a href="#ventaja" className="hover:text-copper transition-colors duration-300">Ventajas</a>
            <a href="#contacto" className="hover:text-copper transition-colors duration-300">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
