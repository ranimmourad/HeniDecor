import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Heni Décor — téléphone 26 125 052, WhatsApp et Facebook. Mobilier premium en Tunisie.",
};

export default function ContactPage() {
  return <ContactClient />;
}
