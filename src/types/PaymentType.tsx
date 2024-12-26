export interface EachPaymentType {
  id?: string;
  name: string;
  description: string;
  image: string | null;
  image_url?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
