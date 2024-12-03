export interface ReviewType {
  id: number;
  product: number;
  user: string;
  rating: number;
  content: string | null;
  reviewer_names: {
    first_name: string;
    last_name: string;
  };
  created_at: string;
  updated_at: string;
}

export interface ReviewTitleType {
  title: string;
  data: ReviewType[];
}
