export interface ProductTypeFull {
  categories: number[];
  created_at: string;
  description: string;
  id: number;
  image: string | null;
  image_url: string | null;
  name: string;
  owner: number;
  price: string;
  old_price: string;
  total_sales: number;
  product_id: string;
  slug: string;
  stock: number;
  store?: number | null;
  store_name: string | null;
  updated_at: string;
}

export interface ProductDetailsType {
  product: ProductTypeFull;
  similar_by_subcategories: {}[];
  similar_by_store: {}[];
}

export interface DataType {
  count: number;
  next: string | null;
  previous: string | null;
  results: ProductTypeFull[];
}

export interface ProductTitleType {
  title?: string;
  data: ProductTypeFull[];
}
export interface ProductData {
  data: ProductTypeFull[];
}

export interface FeaturedProductType {
  id: number;
  main_product: {
    name: string;
    slug: string;
    price: string;
    old_price: string;
    image_url: string;
  };
  featured_image: string | null;
  is_active: boolean;
  product: number;
  start_date: string | null;
  end_date: string | null;
  created_at: string;
  updated_at: string;
}

export interface FeaturedDataType {
  count: number;
  next: string | null;
  previous: string | null;
  results: FeaturedProductType[];
}

export interface FeaturedProductTitleType {
  title: string;
  data: FeaturedProductType[];
}
