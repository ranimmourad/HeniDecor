import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/store";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heni-decor.vercel.app"),
  title: {
    default: "Heni Décor — Mobilier & Décoration Premium en Tunisie",
    template: "%s · Heni Décor",
  },
  description:
    "Heni Décor — Salons, salles à manger, chambres, tables modernes et décoration intérieure. Mobilier contemporain premium pour votre maison en Tunisie.",
  keywords: [
    "Heni Décor",
    "meubles Tunisie",
    "salon",
    "salle à manger",
    "table moderne",
    "décoration intérieure",
    "mobilier premium",
  ],
  openGraph: {
    title: "Heni Décor — Mobilier & Décoration Premium",
    description: "Mobilier contemporain premium : salons, salles à manger, tables et décoration.",
    type: "website",
    locale: "fr_FR",
    siteName: "Heni Décor",
    images: ["/images/hero.png"],
  },
  icons: { icon: "/images/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-sans">
        <StoreProvider>
          <Navbar />
          {/* Added 80px padding to push content below the fixed navbar */}
          <main style={{ paddingTop: '80px' }}>{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}