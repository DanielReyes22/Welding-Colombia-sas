# Welding Colombia 🟠

**Landing Page B2B** — Suministro especializado de cobre de alta pureza y aleaciones para electrodos de electroerosión (EDM) en Colombia.

## 🚀 Stack Tecnológico

- **Framework:** Next.js 16 (App Router)
- **Estilos:** Tailwind CSS v4
- **Lenguaje:** TypeScript
- **Despliegue:** Vercel (un solo clic)

## 📦 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css      # Design system: paleta corporativa, animaciones
│   ├── layout.tsx        # Root layout + SEO metadata
│   └── page.tsx          # Página principal
├── components/
│   ├── Navbar.tsx        # Navegación sticky con CTA
│   ├── Hero.tsx          # Sección héroe con CTAs
│   ├── Materials.tsx     # Catálogo de materiales (grid)
│   ├── Advantages.tsx    # Ventaja competitiva (3 pilares)
│   ├── ContactForm.tsx   # Formulario B2B de cotización
│   └── Footer.tsx        # Pie de página
```

## 🎨 Paleta Corporativa

| Color                 | HEX       | Uso                         |
|-----------------------|-----------|-----------------------------|
| Cobre Metálico        | `#B87333` | CTAs, acentos, íconos       |
| Gris Carbón Industrial| `#1E293B` | Hero, Footer, fondos oscuros|
| Blanco Humo Limpio    | `#F8FAFC` | Cuerpo, catálogo             |
| Texto Oscuro          | `#111827` | Texto sobre fondo claro      |

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar producción
npm start
```

## ☁️ Despliegue en Vercel

1. Importa el repositorio en [vercel.com](https://vercel.com)
2. Framework Preset: **Next.js** (detección automática)
3. Haz clic en **Deploy** — sin configuración adicional necesaria

## 📋 Secciones

1. **Navbar** — Navegación sticky con efecto scroll, menú móvil responsive
2. **Hero** — Titular impactante, badges de confianza, CTAs animados
3. **Materiales** — Grid de 3 categorías con animaciones scroll-reveal
4. **Ventaja Competitiva** — 3 pilares diferenciadores con íconos industriales
5. **Formulario de Contacto** — B2B completo con validación y estado de éxito
6. **Footer** — Copyright dinámico y enlaces de navegación

## 📄 Licencia

© 2025 PrimeCopper Colombia. Todos los derechos reservados.
