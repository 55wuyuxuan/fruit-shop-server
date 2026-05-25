export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  unit: string;
  image: string;
  category: string;
  description?: string;
  stock: number;
  tags?: string[];
  sales?: number;
  isHot?: boolean;
  isSeasonal?: boolean;
  isActive?: boolean;
  isRecommended?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count?: number;
}