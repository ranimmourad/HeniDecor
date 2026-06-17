"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { HeartIcon } from "@/components/Icons";

export default function FavorisPage() {
  const { favorites, ready } = useStore();
  const items = products.filter((p) => favorites.includes(p.id));

  return (
    <div className="shell py-12 lg:py-16">
      <header className="mb-10">
        <p className="eyebrow">Votre sélection</p>
        <h1 className="section-title mt-2">Mes Favoris</h1>
      </header>

      {!ready ? null : items.length === 0 ? (
        <div className="flex flex-col items-center py-20 text-center">
          <HeartIcon className="h-12 w-12 text-ink/30" />
          <p className="mt-4 text-ink/60">Vous n&apos;avez pas encore de favoris.</p>
          <Link href="/collection" className="btn-primary mt-6">Découvrir la collection</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
