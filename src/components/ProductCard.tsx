"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { categoryName, formatPrice } from "@/lib/data";
import { useStore } from "@/lib/store";
import { HeartIcon } from "./Icons";

export default function ProductCard({ product }: { product: Product }) {
  const { toggleFavorite, isFavorite } = useStore();
  const fav = isFavorite(product.id);

  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface">
        <Link href={`/produit/${product.slug}`} aria-label={product.name}>
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        {product.isNew && (
          <span className="absolute left-3 top-3 bg-accent px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
            Nouveau
          </span>
        )}
        <button
          onClick={() => toggleFavorite(product.id)}
          aria-label={fav ? "Retirer des favoris" : "Ajouter aux favoris"}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink transition-colors hover:bg-white hover:text-accent"
        >
          <HeartIcon filled={fav} className={`h-5 w-5 ${fav ? "text-accent" : ""}`} />
        </button>
      </div>
      <div className="pt-4">
        <p className="text-[11px] uppercase tracking-[0.2em] text-accent">{categoryName(product.category)}</p>
        <h3 className="mt-1 font-serif text-lg text-ink">
          <Link href={`/produit/${product.slug}`} className="hover:text-accent">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-ink/80">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}
