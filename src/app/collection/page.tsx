import { Suspense } from "react";
import CollectionClient from "./CollectionClient";

export const metadata = {
  title: "Collection",
  description: "Découvrez la collection complète de meubles Heni Décor : salons, salles à manger, tables et décoration.",
};

export default function CollectionPage() {
  return (
    <Suspense fallback={<div className="shell py-24 text-center text-ink/60">Chargement…</div>}>
      <CollectionClient />
    </Suspense>
  );
}
