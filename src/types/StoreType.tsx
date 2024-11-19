export interface StoreType {
  created_at: string; //a
  id: number; // a
  image: string | null; //
  description: string | null; // a
  logo?: string; // a
  image_url?: string; // a
  name: string; // a
  slug: string; //
  updated_at: string; //a
  is_root_category: boolean; //
  parent: number | null; //
  subcategories: {}[];
  products: number[];
}

export interface StoreDataType {
  count: number;
  next: string | null;
  previous: string | null;
  results: StoreType[];
}

export interface StoreTitleType {
  title: string;
  data: StoreType[];
}
