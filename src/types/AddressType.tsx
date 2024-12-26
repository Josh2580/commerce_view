export interface AdressType {
  id: number;
  user: number;
  store: number | null;
  order: number | null;
  phone: number | null;
  address_line1: string;
  address_line2: string | null;
  full_name: string | null;
  email: string | null;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  created_at: string;
  updated_at: string;
  owner_info: {
    first_name: string | null;
    last_name: string | null;
    email: string | null;
  };
}
[];
