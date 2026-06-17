"use client";

import { useState } from "react";
import Image from "next/image";
import { products as seedProducts, categories as seedCategories, formatPrice } from "@/lib/data";
import type { Product, CategorySlug } from "@/lib/types";
import { TrashIcon, PlusIcon, CloseIcon } from "@/components/Icons";

type Tab = "products" | "categories";

const emptyForm = {
  name: "",
  category: "salons" as CategorySlug,
  price: "",
  image: "",
  description: "",
};

export default function AdminDashboard() {
  const [tab, setTab] = useState<Tab>("products");
  const [items, setItems] = useState<Product[]>(seedProducts);
  const [cats, setCats] = useState(seedCategories);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [preview, setPreview] = useState<string>("");
  const [newCat, setNewCat] = useState("");

  const openCreate = () => {
    setForm(emptyForm);
    setPreview("");
    setEditingId(null);
    setShowForm(true);
  };

  const openEdit = (p: Product) => {
    setForm({
      name: p.name,
      category: p.category,
      price: String(p.price),
      image: p.images[0],
      description: p.description,
    });
    setPreview(p.images[0]);
    setEditingId(p.id);
    setShowForm(true);
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result as string;
      setPreview(url);
      setForm((f) => ({ ...f, image: url }));
    };
    reader.readAsDataURL(file);
  };

  const save = (e: React.FormEvent) => {
    e.preventDefault();
    const image = form.image || "/images/showroom-cream-1.png";
    if (editingId) {
      setItems((prev) =>
        prev.map((p) =>
          p.id === editingId
            ? { ...p, name: form.name, category: form.category, price: Number(form.price), images: [image, ...p.images.slice(1)], description: form.description }
            : p
        )
      );
    } else {
      const id = "p" + Date.now();
      setItems((prev) => [
        {
          id,
          slug: form.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
          name: form.name,
          category: form.category,
          price: Number(form.price),
          images: [image],
          description: form.description,
          specs: [],
          isNew: true,
        },
        ...prev,
      ]);
    }
    setShowForm(false);
  };

  const remove = (id: string) => setItems((prev) => prev.filter((p) => p.id !== id));

  const addCategory = () => {
    if (!newCat.trim()) return;
    const slug = newCat.toLowerCase().replace(/[^a-z0-9]+/g, "-") as CategorySlug;
    setCats((prev) => [...prev, { slug, name: newCat, description: "", image: "/images/showroom-cream-1.png" }]);
    setNewCat("");
  };

  const removeCategory = (slug: string) => setCats((prev) => prev.filter((c) => c.slug !== slug));

  return (
    <div className="shell py-12">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="eyebrow">Espace privé</p>
          <h1 className="section-title mt-1">Tableau de bord</h1>
        </div>
        <span className="rounded-full bg-surface px-4 py-2 text-xs text-ink/60">
          Mode démo · prêt pour Supabase
        </span>
      </header>

      <div className="mb-8 flex gap-2 border-b border-ink/10">
        <TabBtn active={tab === "products"} onClick={() => setTab("products")}>
          Produits ({items.length})
        </TabBtn>
        <TabBtn active={tab === "categories"} onClick={() => setTab("categories")}>
          Catégories ({cats.length})
        </TabBtn>
      </div>

      {tab === "products" && (
        <>
          <div className="mb-6 flex justify-end">
            <button onClick={openCreate} className="btn-primary">
              <PlusIcon className="h-4 w-4" /> Ajouter un produit
            </button>
          </div>
          <div className="overflow-x-auto border border-ink/10 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface text-xs uppercase tracking-wider text-ink/60">
                <tr>
                  <th className="p-4">Produit</th>
                  <th className="p-4">Catégorie</th>
                  <th className="p-4">Prix</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10">
                {items.map((p) => (
                  <tr key={p.id}>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden bg-surface">
                          <Image src={p.images[0]} alt="" fill sizes="48px" className="object-cover" />
                        </div>
                        <span className="font-medium text-ink">{p.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-ink/70">{cats.find((c) => c.slug === p.category)?.name ?? p.category}</td>
                    <td className="p-4 text-ink/70">{formatPrice(p.price)}</td>
                    <td className="p-4">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => openEdit(p)} className="rounded border border-ink/20 px-3 py-1.5 text-xs hover:border-accent hover:text-accent">
                          Éditer
                        </button>
                        <button onClick={() => remove(p.id)} className="rounded border border-ink/20 px-2 py-1.5 text-ink/60 hover:border-red-400 hover:text-red-500" aria-label="Supprimer">
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {tab === "categories" && (
        <div className="max-w-xl">
          <div className="mb-6 flex gap-2">
            <input
              value={newCat}
              onChange={(e) => setNewCat(e.target.value)}
              placeholder="Nom de la catégorie"
              className="flex-1 border border-ink/20 bg-white px-4 py-2.5 text-sm outline-none focus:border-accent"
            />
            <button onClick={addCategory} className="btn-primary">Ajouter</button>
          </div>
          <ul className="divide-y divide-ink/10 border border-ink/10 bg-white">
            {cats.map((c) => (
              <li key={c.slug} className="flex items-center justify-between p-4">
                <span className="font-medium text-ink">{c.name}</span>
                <button onClick={() => removeCategory(c.slug)} className="p-1 text-ink/50 hover:text-red-500" aria-label="Supprimer">
                  <TrashIcon className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto bg-white p-7">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-serif text-xl text-ink">{editingId ? "Éditer le produit" : "Nouveau produit"}</h2>
              <button onClick={() => setShowForm(false)} aria-label="Fermer" className="text-ink/50 hover:text-ink">
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={save} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-ink/60">Nom</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="mt-1.5 w-full border border-ink/20 px-3 py-2 text-sm outline-none focus:border-accent" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-ink/60">Catégorie</label>
                  <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value as CategorySlug })} className="mt-1.5 w-full border border-ink/20 px-3 py-2 text-sm outline-none focus:border-accent">
                    {cats.map((c) => (
                      <option key={c.slug} value={c.slug}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-ink/60">Prix (DT)</label>
                  <input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required className="mt-1.5 w-full border border-ink/20 px-3 py-2 text-sm outline-none focus:border-accent" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-ink/60">Image</label>
                <input type="file" accept="image/*" onChange={handleImage} className="mt-1.5 w-full text-sm text-ink/70 file:mr-3 file:border-0 file:bg-surface file:px-3 file:py-2 file:text-xs" />
                {preview && (
                  <div className="relative mt-3 h-32 w-full overflow-hidden bg-surface">
                    <Image src={preview} alt="Aperçu" fill sizes="100%" className="object-cover" />
                  </div>
                )}
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-ink/60">Description</label>
                <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="mt-1.5 w-full border border-ink/20 px-3 py-2 text-sm outline-none focus:border-accent" />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="submit" className="btn-primary flex-1">Enregistrer</button>
                <button type="button" onClick={() => setShowForm(false)} className="btn-outline">Annuler</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function TabBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`-mb-px border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
        active ? "border-accent text-accent" : "border-transparent text-ink/60 hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
