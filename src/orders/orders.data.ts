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

export interface OrderItem {
  productId: number;
  productName: string;
  productImage: string;
  price: number;
  quantity: number;
}

export type OrderStatus = 'pending' | 'paid' | 'delivered' | 'completed' | 'cancelled';

export interface Order {
  id: string;
  orderNo: string;
  status: OrderStatus;
  items: OrderItem[];
  totalAmount: number;
  address: Address;
  createTime: string;
  payTime?: string;
  deliverTime?: string;
  completeTime?: string;
  remark?: string;
}

// 模拟订单数据
export const orders: Order[] = [
  {
    id: '1',
    orderNo: 'FG202401150001',
    status: 'completed',
    items: [
      { productId: 1, productName: '红富士苹果', productImage: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400', price: 8.8, quantity: 2 },
      { productId: 2, productName: '香蕉', productImage: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400', price: 4.5, quantity: 1 }
    ],
    totalAmount: 22.1,
    address: { id: 1, name: '张三', phone: '13800138000', province: '广东省', city: '深圳市', district: '南山区', detail: '科技园南区深投控大厦A座', isDefault: true },
    createTime: '2024-01-15 10:30:00',
    payTime: '2024-01-15 10:35:00',
    deliverTime: '2024-01-15 14:20:00',
    completeTime: '2024-01-15 18:00:00'
  },
  {
    id: '2',
    orderNo: 'FG202401180002',
    status: 'delivered',
    items: [
      { productId: 3, productName: '新鲜草莓', productImage: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400', price: 25.8, quantity: 1 }
    ],
    totalAmount: 25.8,
    address: { id: 1, name: '张三', phone: '13800138000', province: '广东省', city: '深圳市', district: '南山区', detail: '科技园南区深投控大厦A座', isDefault: true },
    createTime: '2024-01-18 09:00:00',
    payTime: '2024-01-18 09:05:00',
    deliverTime: '2024-01-18 15:30:00'
  },
  {
    id: '3',
    orderNo: 'FG202401200003',
    status: 'paid',
    items: [
      { productId: 5, productName: '阳光玫瑰葡萄', productImage: 'https://images.unsplash.com/photo-1563692877110-dc4b5ba8b73e?w=400', price: 32.0, quantity: 1 },
      { productId: 7, productName: '泰国榴莲', productImage: 'https://images.unsplash.com/photo-1563245195-71f0aa9aaa6c?w=400', price: 38.0, quantity: 2 }
    ],
    totalAmount: 108.0,
    address: { id: 1, name: '张三', phone: '13800138000', province: '广东省', city: '深圳市', district: '南山区', detail: '科技园南区深投控大厦A座', isDefault: true },
    createTime: '2024-01-20 11:20:00',
    payTime: '2024-01-20 11:25:00'
  }
];

// 默认收货地址
export const defaultAddress: Address = {
  id: 1,
  name: '张三',
  phone: '13800138000',
  province: '广东省',
  city: '深圳市',
  district: '南山区',
  detail: '科技园南区深投控大厦A座',
  isDefault: true
};
