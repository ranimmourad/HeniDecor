import Link from "next/link";
import Image from "next/image";
import { categories, products, SITE } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { WhatsAppIcon, PhoneIcon, ArrowIcon } from "@/components/Icons";

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 4);
  const [first, ...rest] = categories;

  return (
    <>
      {/* HERO */}
      <section id="hero-section" className="relative">
        {/* Mobile: tall vertical image. Desktop: wide banner */}
        <div className="relative aspect-[3/4] w-full sm:aspect-[16/8] lg:aspect-[16/7]">
          <Image
            src="/images/hero.png"
            alt="Showroom Heni Décor"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          
          {/* Desktop buttons (overlayed at the bottom, hidden on mobile) */}
          <div className="absolute inset-x-0 bottom-0 hidden justify-center pb-12 sm:flex">
            <div className="flex gap-4">
              <Link href="/collection" className="btn-primary">
                Découvrir la collection
              </Link>
              <Link href="/contact" className="btn-outline bg-white/85">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile buttons (placed BELOW the image, hidden on desktop) */}
        <div className="flex flex-col gap-3 px-6 py-6 sm:hidden">
          <Link href="/collection" className="btn-primary">
            Découvrir la collection
          </Link>
          <Link href="/contact" className="btn-outline">
            Nous contacter
          </Link>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="shell py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Nos univers</p>
            <h2 className="section-title mt-2">Collections</h2>
          </div>
          <Link href="/collection" className="hidden items-center gap-2 text-sm uppercase tracking-wider text-accent hover:text-ink sm:inline-flex">
            Tout voir <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <CollectionCard category={first} large />
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {rest.map((c) => (
              <CollectionCard key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </section>

      {/* NOUVEAUTÉS */}
      <section id="nouveautes" className="bg-surface py-20">
        <div className="shell">
          <div className="mb-10 text-center">
            <p className="eyebrow">Sélection</p>
            <h2 className="section-title mt-2">Nouveautés</h2>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section id="contact-preview" className="shell py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/logo.png" alt="Salon Heni Décor" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className="eyebrow">Parlons de votre intérieur</p>
            <h2 className="section-title mt-2">Une question ? Contactez-nous</h2>
            <p className="mt-4 max-w-md leading-relaxed text-ink/70">
              Notre équipe vous accompagne dans le choix de vos meubles et de votre décoration.
              Contactez-nous par téléphone ou WhatsApp pour toute information.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:+${SITE.phoneIntl}`} className="btn-outline">
                <PhoneIcon className="h-4 w-4" /> {SITE.phone}
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="btn-primary">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CollectionCard({ category, large }: { category: (typeof categories)[number]; large?: boolean }) {
  return (
    <Link
      href={`/collection?categorie=${category.slug}`}
      className={`group relative block overflow-hidden ${large ? "aspect-[3/4] lg:h-full" : "aspect-[4/3]"}`}
    >
      <Image
        src={category.image}
        alt={category.name}
        fill
        sizes="(max-width:1024px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="font-serif text-2xl text-white">{category.name}</h3>
        <p className="mt-1 max-w-xs text-sm text-white/85">{category.description}</p>
        <span className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white">
          Explorer <ArrowIcon className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}