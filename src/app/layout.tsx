import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Welding Colombia SAS | Cobre de Alta Pureza para EDM desde EE.UU.",
  description:
    "Abastecimiento directo de cobre de alta pureza y aleaciones para electrodos de electroerosión (EDM) desde distribuidores en Estados Unidos. Los tiempos de entrega más cortos en Colombia para talleres de mecanizado, matriceros y fabricantes de moldes.",
  keywords: [
    "cobre EDM Colombia",
    "electrodos electroerosión",
    "cobre alta pureza",
    "CuW aleaciones",
    "mecanizado Colombia",
    "Welding Colombia",
  ],
  openGraph: {
    title: "Welding Colombia SAS | Cobre de Alta Pureza para EDM",
    description:
      "Abastecimiento directo de cobre de alta pureza desde EE.UU. con logística ultra-rápida para la industria metalmecánica colombiana.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
