"use client";

import { useState } from "react";
import { SITE } from "@/lib/data";
import { PhoneIcon, WhatsAppIcon, FacebookIcon } from "@/components/Icons";

export default function ContactClient() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="shell py-12 lg:py-16">
      <header className="mb-12 max-w-2xl">
        <p className="eyebrow">Restons en contact</p>
        <h1 className="section-title mt-2">Contactez Heni Décor</h1>
        <p className="mt-4 leading-relaxed text-ink/70">
          Une question sur un produit, un conseil déco ou une commande ? Notre équipe est à votre écoute.
        </p>
      </header>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* INFO */}
        <div className="space-y-8">
          <div className="space-y-5">
            <a href={`tel:+${SITE.phoneIntl}`} className="flex items-center gap-4 group">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-accent">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-ink/50">Téléphone</span>
                <span className="text-lg text-ink group-hover:text-accent">{SITE.phone}</span>
              </span>
            </a>

            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-accent">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-ink/50">WhatsApp</span>
                <span className="text-lg text-ink group-hover:text-accent">Discuter maintenant</span>
              </span>
            </a>

            <a href={SITE.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-accent">
                <FacebookIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-ink/50">Facebook</span>
                <span className="text-lg text-ink group-hover:text-accent">@HeniDeco</span>
              </span>
            </a>
          </div>

          <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="btn-primary">
            <WhatsAppIcon className="h-5 w-5" /> Nous écrire sur WhatsApp
          </a>

          {/* LOCATION PLACEHOLDER */}
          <div className="relative h-56 w-full overflow-hidden border border-ink/10 bg-surface">
            <div className="flex h-full flex-col items-center justify-center text-center text-ink/50">
              <p className="font-serif text-xl text-ink/70">Showroom Heni Décor</p>
              <p className="mt-1 text-sm">{SITE.location}</p>
              <p className="mt-2 text-xs uppercase tracking-wider">Emplacement bientôt disponible</p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="bg-surface p-8">
          <h2 className="font-serif text-xl text-ink">Envoyez-nous un message</h2>
          <div className="mt-6 space-y-5">
            <Field label="Nom complet" id="name" type="text" />
            <Field label="Téléphone" id="phone" type="tel" />
            <Field label="Email" id="email" type="email" />
            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-wider text-ink/60">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="mt-2 w-full border border-ink/20 bg-white px-4 py-3 text-sm outline-none focus:border-accent"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              {sent ? "Message envoyé ✓" : "Envoyer le message"}
            </button>
            <p className="text-xs text-ink/50">
              Ce formulaire est une démonstration. Pour une réponse rapide, contactez-nous par téléphone ou WhatsApp.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, id, type }: { label: string; id: string; type: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-wider text-ink/60">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        className="mt-2 w-full border border-ink/20 bg-white px-4 py-3 text-sm outline-none focus:border-accent"
      />
    </div>
  );
}
