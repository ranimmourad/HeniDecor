import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/data";
import { FacebookIcon, WhatsAppIcon, PhoneIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 bg-surface">
      <div className="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src="/images/logo.png" alt="Heni Décor" width={130} height={52} className="h-12 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/70">
            Mobilier contemporain et décoration intérieure premium pour sublimer votre maison.
          </p>
        </div>

        <div>
          <h3 className="eyebrow">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink/80">
            <li><Link href="/" className="hover:text-accent">Accueil</Link></li>
            <li><Link href="/collection" className="hover:text-accent">Collection</Link></li>
            <li><Link href="/favoris" className="hover:text-accent">Favoris</Link></li>
            <li><Link href="/panier" className="hover:text-accent">Panier</Link></li>
            <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Catégories</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink/80">
            <li><Link href="/collection?categorie=salons" className="hover:text-accent">Salons</Link></li>
            <li><Link href="/collection?categorie=salles-a-manger" className="hover:text-accent">Salles à manger</Link></li>
            <li><Link href="/collection?categorie=chambres" className="hover:text-accent">Chambres</Link></li>
            <li><Link href="/collection?categorie=tables" className="hover:text-accent">Tables</Link></li>
            <li><Link href="/collection?categorie=decoration" className="hover:text-accent">Décoration</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink/80">
            <li>
              <a href={`tel:+${SITE.phoneIntl}`} className="inline-flex items-center gap-2 hover:text-accent">
                <PhoneIcon className="h-4 w-4" /> {SITE.phone}
              </a>
            </li>
            <li>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={SITE.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
                <FacebookIcon className="h-4 w-4" /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="shell flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Heni Décor. Tous droits réservés.</p>
          <p>Showroom premium · Tunisie</p>
        </div>
      </div>
    </footer>
  );
}
