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
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count?: number;
}

export interface Order {
  id: string;
  orderNo: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'paid' | 'preparing' | 'completed' | 'cancelled';
  address: Address;
  remark?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  productId: number;
  productName: string;
  productImage: string;
  price: number;
  quantity: number;
}

export interface Address {
  id: number;
  name: string;
  phone: string;
  province: string;
  city: string;
  district: string;
  detail: string;
  isDefault: boolean;
}
