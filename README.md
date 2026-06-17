# Heni Décor

Site e-commerce premium de mobilier et décoration intérieure (showroom Tunisie).

## Aperçu
- **Nom**: Heni Décor
- **Objectif**: Présenter et vendre du mobilier contemporain premium (salons, salles à manger, chambres, tables, décoration) avec une expérience de showroom élégant.
- **Téléphone**: 26 125 052 · **Facebook**: https://www.facebook.com/HeniDeco

## Stack technique
- Next.js 15 (App Router) · TypeScript · Tailwind CSS
- Frontend uniquement — déployable directement sur **Vercel**
- Stockage panier & favoris via **localStorage**
- Prêt pour une future intégration **Supabase** (couche données isolée dans `src/lib/data.ts`)

## Routes (entrées fonctionnelles)
| Route | Description |
|-------|-------------|
| `/` | Accueil — hero (image de marque + 2 boutons), collections, nouveautés, contact |
| `/collection` | Catalogue avec recherche, filtre catégorie, filtre prix, tri (nouveautés / prix) |
| `/collection?categorie=salons` | Catalogue pré-filtré par catégorie |
| `/produit/[slug]` | Fiche produit : galerie, prix, description, specs, ajout panier/favoris, similaires |
| `/favoris` | Liste de souhaits (localStorage) |
| `/panier` | Panier : quantités, suppression, récapitulatif, total, checkout UI, WhatsApp |
| `/contact` | Téléphone, WhatsApp, Facebook, formulaire UI, emplacement (placeholder) |
| `/admin/1762026` | Tableau de bord admin caché — ajouter/éditer/supprimer produits, upload image, gérer catégories (UI seulement) |

## Architecture des données
- **Modèles**: `Product`, `Category`, `CartItem` (`src/lib/types.ts`)
- **Source de données**: tableau statique dans `src/lib/data.ts` (à remplacer par Supabase)
- **État client**: `StoreProvider` (`src/lib/store.tsx`) — panier + favoris persistés en localStorage

## Palette
Fond `#F8F5F1` · Fond secondaire `#F3EEE8` · Texte `#2E2A26` · Accent `#8A6A4A` · Bois `#A77C52` · Navbar blanc `#FFFFFF`

## Guide d'utilisation
1. Parcourir les collections depuis l'accueil ou la page **Collection**.
2. Filtrer/rechercher/trier les produits.
3. Ouvrir une fiche produit, ajouter au panier ou aux favoris.
4. Gérer le panier et les favoris (persistés automatiquement).
5. Contacter via téléphone ou WhatsApp.

## Déploiement
- **Plateforme**: Vercel
- **Build**: `npm run build` · **Start**: `npm run start`
- **Statut**: ✅ Build OK (25 pages statiques générées)
- Importer le dépôt sur Vercel → aucune variable d'environnement requise pour le moment.

## Évolutions prévues (Supabase)
- Remplacer `src/lib/data.ts` par des requêtes Supabase (table `products`, `categories`).
- Connecter le dashboard `/admin/1762026` à Supabase (CRUD + Storage pour les images).
- Authentification admin via Supabase Auth.

_Dernière mise à jour : 2026-06-17_
