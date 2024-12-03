export interface EachCartItemType {
  id: number; //
  product: number; //
  product_data: {
    name: string;
    price: number;
    old_price: number;
    image: string;
    stock: number;
  }; //
  quantity: number; //
  subtotal: number; //
  added_at: string; //
}

export interface CartType {
  id: string; //
  user: string | null; //
  session_key: string | null; //
  items: EachCartItemType[];
  get_total: number;
  created_at: string;
  updated_at: string;
}

export interface AddToCartType {
  product: number | string; //
  quantity: number | string; //
}
