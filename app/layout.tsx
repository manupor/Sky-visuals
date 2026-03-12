import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sky Visuals CR | Iluminación Profesional para Escenarios en Costa Rica",
  description:
    "Alquiler, venta y diseño de iluminación profesional para conciertos, fiestas, festivales y eventos en Costa Rica. Cabezas móviles, pares LED y diseño de iluminación.",
  keywords: [
    "iluminación profesional",
    "alquiler luces",
    "Costa Rica",
    "eventos",
    "conciertos",
    "fiestas",
    "cabezas móviles",
    "pares LED",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased bg-background text-white`}
      >
        {children}
      </body>
    </html>
  );
}
