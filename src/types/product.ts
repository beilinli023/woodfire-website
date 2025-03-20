
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
  usageGuideImages?: string[]; // 新增：使用指南对应的图片
  usageGuideImageDescriptions?: string[]; // 新增：使用指南图片描述
  usageScenesDescriptions?: string[]; // 适用场景文字描述
  careInstructions?: string[];
  reviews: Review[];
  createdAt?: number;
  fragrance?: string; // 香方信息，如：沉香、白檀、乌木
  craftsmanship?: string; // 工艺信息，如：烧
}
