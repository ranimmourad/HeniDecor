"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { CartIcon, HeartIcon, MenuIcon, CloseIcon } from "./Icons";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/collection", label: "Collection" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { cartCount, favorites } = useStore();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white">
      <nav className="shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Heni Décor — Accueil">
          <Image src="/images/logo.png" alt="Heni Décor" width={120} height={48} priority className="h-12 w-auto" />
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm uppercase tracking-wider transition-colors hover:text-accent ${
                  isActive(l.href) ? "text-accent" : "text-ink"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link href="/favoris" aria-label="Favoris" className="relative p-1 text-ink hover:text-accent">
            <HeartIcon className="h-6 w-6" />
            {favorites.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-white">
                {favorites.length}
              </span>
            )}
          </Link>
          <Link href="/panier" aria-label="Panier" className="relative p-1 text-ink hover:text-accent">
            <CartIcon className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            className="p-1 text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-white md:hidden">
          <ul className="shell flex flex-col py-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-sm uppercase tracking-wider ${
                    isActive(l.href) ? "text-accent" : "text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/favoris" onClick={() => setOpen(false)} className="block py-3 text-sm uppercase tracking-wider text-ink">
                Favoris
              </Link>
            </li>
            <li>
              <Link href="/panier" onClick={() => setOpen(false)} className="block py-3 text-sm uppercase tracking-wider text-ink">
                Panier
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
