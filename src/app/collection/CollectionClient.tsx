"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { products, categories } from "@/lib/data";
import type { CategorySlug } from "@/lib/types";
import ProductCard from "@/components/ProductCard";
import { SearchIcon } from "@/components/Icons";

type SortKey = "newest" | "price-asc" | "price-desc";

const maxPrice = Math.max(...products.map((p) => p.price));

export default function CollectionClient() {
  const params = useSearchParams();
  const [category, setCategory] = useState<CategorySlug | "all">("all");
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(maxPrice);
  const [sort, setSort] = useState<SortKey>("newest");

  useEffect(() => {
    const c = params.get("categorie");
    if (c && categories.some((cat) => cat.slug === c)) {
      setCategory(c as CategorySlug);
    }
  }, [params]);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchCat = category === "all" || p.category === category;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchPrice = p.price <= price;
      return matchCat && matchSearch && matchPrice;
    });

    list = [...list].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return Number(b.isNew ?? false) - Number(a.isNew ?? false);
    });
    return list;
  }, [category, search, price, sort]);

  return (
    <div className="shell py-12 lg:py-16">
      <header className="mb-10">
        <p className="eyebrow">Catalogue</p>
        <h1 className="section-title mt-2">Notre Collection</h1>
        <p className="mt-3 max-w-xl text-ink/70">
          Explorez l&apos;ensemble de nos pièces — du salon chaleureux à la table de réception.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
        {/* FILTERS */}
        <aside className="space-y-8">
          <div>
            <label htmlFor="search-input" className="eyebrow">Recherche</label>
            <div className="mt-3 flex items-center gap-2 border-b border-ink/20 pb-2">
              <SearchIcon className="h-4 w-4 text-ink/50" />
              <input
                id="search-input"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher un meuble…"
                className="w-full bg-transparent text-sm outline-none placeholder:text-ink/40"
              />
            </div>
          </div>

          <div>
            <p className="eyebrow">Catégorie</p>
            <ul className="mt-3 space-y-1">
              <FilterItem active={category === "all"} onClick={() => setCategory("all")}>
                Toutes les catégories
              </FilterItem>
              {categories.map((c) => (
                <FilterItem key={c.slug} active={category === c.slug} onClick={() => setCategory(c.slug)}>
                  {c.name}
                </FilterItem>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Prix maximum</p>
            <input
              type="range"
              min={1000}
              max={maxPrice}
              step={100}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="mt-4 w-full accent-accent"
            />
            <p className="mt-2 text-sm text-ink/70">Jusqu&apos;à {new Intl.NumberFormat("fr-TN").format(price)} DT</p>
          </div>
        </aside>

        {/* GRID */}
        <div>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-ink/60">{filtered.length} produit{filtered.length > 1 ? "s" : ""}</p>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm text-ink/60">Trier :</label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="border border-ink/20 bg-white px-3 py-2 text-sm outline-none"
              >
                <option value="newest">Nouveautés</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="py-20 text-center text-ink/60">Aucun produit ne correspond à votre recherche.</p>
          ) : (
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterItem({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={`w-full py-1.5 text-left text-sm transition-colors hover:text-accent ${
          active ? "font-medium text-accent" : "text-ink/70"
        }`}
      >
        {children}
      </button>
    </li>
  );
}
