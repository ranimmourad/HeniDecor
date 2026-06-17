"use client";

import Link from "next/link";
import Image from "next/image";
import { useStore } from "@/lib/store";
import { products, formatPrice, SITE } from "@/lib/data";
import { CartIcon, TrashIcon, PlusIcon, MinusIcon, WhatsAppIcon } from "@/components/Icons";

export default function PanierPage() {
  const { cart, ready, setQuantity, removeFromCart, clearCart } = useStore();

  const lines = cart
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      return product ? { product, quantity: item.quantity } : null;
    })
    .filter(Boolean) as { product: (typeof products)[number]; quantity: number }[];

  const subtotal = lines.reduce((sum, l) => sum + l.product.price * l.quantity, 0);

  return (
    <div className="shell py-12 lg:py-16">
      <header className="mb-10">
        <p className="eyebrow">Votre commande</p>
        <h1 className="section-title mt-2">Mon Panier</h1>
      </header>

      {!ready ? null : lines.length === 0 ? (
        <div className="flex flex-col items-center py-20 text-center">
          <CartIcon className="h-12 w-12 text-ink/30" />
          <p className="mt-4 text-ink/60">Votre panier est vide.</p>
          <Link href="/collection" className="btn-primary mt-6">Découvrir la collection</Link>
        </div>
      ) : (
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          {/* ITEMS */}
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {lines.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-4 py-6">
                <Link href={`/produit/${product.slug}`} className="relative h-28 w-24 shrink-0 overflow-hidden bg-surface">
                  <Image src={product.images[0]} alt={product.name} fill sizes="96px" className="object-cover" />
                </Link>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <Link href={`/produit/${product.slug}`} className="font-serif text-lg text-ink hover:text-accent">
                        {product.name}
                      </Link>
                      <p className="mt-1 text-sm text-ink/60">{formatPrice(product.price)}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      aria-label="Retirer"
                      className="p-1 text-ink/50 hover:text-accent"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-ink/20">
                      <button
                        onClick={() => setQuantity(product.id, quantity - 1)}
                        aria-label="Diminuer"
                        className="p-2 hover:text-accent"
                      >
                        <MinusIcon className="h-4 w-4" />
                      </button>
                      <span className="w-10 text-center text-sm">{quantity}</span>
                      <button
                        onClick={() => setQuantity(product.id, quantity + 1)}
                        aria-label="Augmenter"
                        className="p-2 hover:text-accent"
                      >
                        <PlusIcon className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="font-medium text-ink">{formatPrice(product.price * quantity)}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="py-4">
              <button onClick={clearCart} className="text-sm text-ink/50 hover:text-accent">
                Vider le panier
              </button>
            </div>
          </div>

          {/* SUMMARY */}
          <aside className="h-fit bg-surface p-7">
            <h2 className="font-serif text-xl text-ink">Récapitulatif</h2>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-ink/60">Sous-total</dt>
                <dd className="font-medium">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink/60">Livraison</dt>
                <dd className="text-ink/60">À convenir</dd>
              </div>
            </dl>
            <div className="mt-5 flex justify-between border-t border-ink/15 pt-5">
              <span className="font-serif text-lg">Total</span>
              <span className="font-serif text-lg text-accent">{formatPrice(subtotal)}</span>
            </div>
            <button className="btn-primary mt-6 w-full">Passer la commande</button>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-outline mt-3 w-full"
            >
              <WhatsAppIcon className="h-4 w-4" /> Commander via WhatsApp
            </a>
          </aside>
        </div>
      )}
    </div>
  );
}
