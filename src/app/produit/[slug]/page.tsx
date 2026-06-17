import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProductBySlug, getSimilarProducts } from "@/lib/data";
import ProductDetail from "./ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produit introuvable" };
  return {
    title: product.name,
    description: product.description.slice(0, 155),
    openGraph: { images: [product.images[0]], title: product.name },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const similar = getSimilarProducts(product);
  return <ProductDetail product={product} similar={similar} />;
}
