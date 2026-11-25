import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Política de Tratamiento de Datos Personales | ${SITE.name}`,
  description: "Política de tratamiento de datos personales conforme a la Ley 1581 de 2012.",
};

export default function Privacidad() {
  return (
    <main className="bg-smoke min-h-screen py-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 text-text-dark leading-relaxed">
        <Link href="/" className="text-copper text-sm font-semibold">← Volver al inicio</Link>
        <h1 className="text-3xl sm:text-4xl font-bold mt-6 mb-2">Política de Tratamiento de Datos Personales</h1>
        <p className="text-gray-500 text-sm mb-10">Última actualización: noviembre de 2026</p>

        <h2 className="text-xl font-bold mt-8 mb-2">1. Responsable del tratamiento</h2>
        <p>
          {SITE.name} (en adelante, &quot;la Empresa&quot;), NIT [pendiente de asignar]. Contacto:{" "}
          <a className="text-copper" href={`mailto:${SITE.email}`}>{SITE.email}</a>, teléfonos{" "}
          {SITE.phones.map((p) => `+57 ${p.display}`).join(" / ")}.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-2">2. Datos que recolectamos</h2>
        <p>
          Mediante el formulario de cotización: nombre, empresa, ciudad, teléfono, correo electrónico y el
          detalle del requerimiento. No recolectamos datos sensibles.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-2">3. Finalidades</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Responder solicitudes de información y cotización.</li>
          <li>Contactarlo por correo, teléfono o WhatsApp en relación con su solicitud.</li>
          <li>Gestionar la relación comercial y cumplir obligaciones legales.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-2">4. Derechos del titular</h2>
        <p>
          Conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013, usted puede conocer, actualizar y
          rectificar sus datos, solicitar prueba de la autorización, ser informado del uso dado a sus datos,
          presentar quejas ante la Superintendencia de Industria y Comercio, revocar la autorización y
          solicitar la supresión de sus datos.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-2">5. Cómo ejercer sus derechos</h2>
        <p>
          Escriba a <a className="text-copper" href={`mailto:${SITE.email}`}>{SITE.email}</a>. Atenderemos
          consultas en un máximo de 10 días hábiles y reclamos en un máximo de 15 días hábiles.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-2">6. Terceros y transferencia</h2>
        <p>
          Sus datos se procesan mediante proveedores tecnológicos (alojamiento web y envío de correo
          electrónico), que pueden estar ubicados fuera de Colombia. No vendemos sus datos.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-2">7. Vigencia</h2>
        <p>
          Conservaremos sus datos durante el tiempo necesario para las finalidades descritas y las
          obligaciones legales aplicables. Esta política puede actualizarse; la versión vigente estará
          publicada en este sitio.
        </p>
      </article>
    </main>
  );
}
