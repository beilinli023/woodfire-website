
export interface Specification {
  name: string;
  value: string;
}

export interface Review {
  id: number;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  purchaseDetails: string;
  content: string;
  images?: string[];
  helpfulCount: number;
  sellerReply?: string;
}

export interface Product {
  id: number;
  title: string;
  category: string;
  categoryId: number;
  price: string;
  originalPrice?: string;
  discount?: string;
  rating: number;
  reviewCount: number;
  soldCount: number;
  images: string[];
  descriptionImages?: string[];
  colors?: string[];
  sizes?: string[];
  highlights?: string[];
  description?: string[];
  specifications?: Specification[];
  usageGuide?: string[];
  careInstructions?: string[];
  reviews: Review[];
}
