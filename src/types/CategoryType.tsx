export interface ParentCategoryType {
  created_at: string;
  id: number; //
  image: string | null; //
  image_url?: string; //
  name: string; //
  slug: string; //
  updated_at: string;
  is_root_category: boolean; //
  parent: number | null; //
  subcategories: {}[];
}

export interface SubCategoryType {
  id: number; //
  image_url: string | null; //
  name: string; //
  slug: string; //
  is_root_category: boolean; //
  parent: number | null; //
}

export interface CategoryDataType {
  count: number;
  next: string | null;
  previous: string | null;
  results: ParentCategoryType[];
}

export interface CategoryTitleType {
  title: string;
  data: ParentCategoryType[];
}
