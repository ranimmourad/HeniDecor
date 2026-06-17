"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/types";
import { categoryName, formatPrice } from "@/lib/data";
import { useStore } from "@/lib/store";
import ProductCard from "@/components/ProductCard";
import { HeartIcon, CartIcon, ArrowIcon } from "@/components/Icons";

export default function ProductDetail({ product, similar }: { product: Product; similar: Product[] }) {
  const [active, setActive] = useState(0);
  const [added, setAdded] = useState(false);
  const { addToCart, toggleFavorite, isFavorite } = useStore();
  const fav = isFavorite(product.id);

  const handleAdd = () => {
    addToCart(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="shell py-12 lg:py-16">
      <nav className="mb-8 flex items-center gap-2 text-sm text-ink/50">
        <Link href="/" className="hover:text-accent">Accueil</Link>
        <span>/</span>
        <Link href={`/collection?categorie=${product.category}`} className="hover:text-accent">
          {categoryName(product.category)}
        </Link>
        <span>/</span>
        <span className="text-ink/70">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* GALLERY */}
        <div>
          <div className="relative aspect-square overflow-hidden bg-surface">
            <Image
              src={product.images[active]}
              alt={product.name}
              fill
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="mt-4 flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActive(i)}
                  className={`relative h-20 w-20 overflow-hidden border ${
                    i === active ? "border-accent" : "border-transparent"
                  }`}
                  aria-label={`Image ${i + 1}`}
                >
                  <Image src={img} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* INFO */}
        <div>
          <p className="eyebrow">{categoryName(product.category)}</p>
          <h1 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">{product.name}</h1>
          <p className="mt-4 text-2xl font-medium text-accent">{formatPrice(product.price)}</p>

          <p className="mt-6 leading-relaxed text-ink/75">{product.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={handleAdd} className="btn-primary">
              <CartIcon className="h-5 w-5" />
              {added ? "Ajouté au panier ✓" : "Ajouter au panier"}
            </button>
            <button
              onClick={() => toggleFavorite(product.id)}
              className={`btn-outline ${fav ? "border-accent text-accent" : ""}`}
            >
              <HeartIcon filled={fav} className="h-5 w-5" />
              {fav ? "Dans les favoris" : "Ajouter aux favoris"}
            </button>
          </div>

          {/* SPECS */}
          <div className="mt-10">
            <h2 className="eyebrow">Spécifications</h2>
            <dl className="mt-4 divide-y divide-ink/10 border-t border-ink/10">
              {product.specs.map((s) => (
                <div key={s.label} className="flex justify-between py-3 text-sm">
                  <dt className="text-ink/60">{s.label}</dt>
                  <dd className="font-medium text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* SIMILAR */}
      {similar.length > 0 && (
        <section className="mt-20">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="section-title">Produits similaires</h2>
            <Link href="/collection" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-accent hover:text-ink">
              Tout voir <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {similar.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
