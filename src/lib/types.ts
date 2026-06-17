export type CategorySlug =
  | "salons"
  | "salles-a-manger"
  | "chambres"
  | "tables"
  | "decoration";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  images: string[];
  description: string;
  specs: { label: string; value: string }[];
  isNew?: boolean;
  featured?: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
}
