import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">Erreur 404</p>
      <h1 className="section-title mt-3">Page introuvable</h1>
      <p className="mt-3 max-w-md text-ink/70">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link href="/" className="btn-primary mt-7">Retour à l&apos;accueil</Link>
    </div>
  );
}
