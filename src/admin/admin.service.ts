import { Injectable } from '@nestjs/common';
import { products } from '../products/products.data';
import { orders } from '../orders/orders.data';

@Injectable()
export class AdminService {
  private adminUsers = [
    { id: 1, username: 'admin', password: 'admin123', name: '管理员' }
  ];

  async login(username: string, password: string) {
    const user = this.adminUsers.find(
      u => u.username === username && u.password === password
    );
    if (!user) {
      return { code: 401, msg: '用户名或密码错误' };
    }
    const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');
    return {
      code: 200,
      msg: '登录成功',
      data: {
        token,
        user: { id: user.id, username: user.username, name: user.name }
      }
    };
  }

  async getStats() {
    const today = new Date().toDateString();
    const todayOrders = orders.filter(o => new Date(o.createdAt).toDateString() === today);
    const todayRevenue = todayOrders.reduce((sum, o) => sum + Number(o.totalPrice), 0);
    const pendingOrders = orders.filter(o => o.status === 'pending').length;

    return {
      code: 200,
      data: {
        todayOrders: todayOrders.length,
        todayRevenue,
        totalProducts: products.length,
        pendingOrders
      }
    };
  }

  async getProducts() {
    return { code: 200, data: products };
  }

  async createProduct(data: any) {
    const newProduct = {
      id: products.length + 1,
      ...data,
      createdAt: new Date()
    };
    products.push(newProduct);
    return { code: 200, msg: '添加成功', data: newProduct };
  }

  async updateProduct(id: number, data: any) {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) {
      return { code: 404, msg: '商品不存在' };
    }
    products[index] = { ...products[index], ...data };
    return { code: 200, msg: '更新成功', data: products[index] };
  }

  async deleteProduct(id: number) {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) {
      return { code: 404, msg: '商品不存在' };
    }
    products.splice(index, 1);
    return { code: 200, msg: '删除成功' };
  }

  async getOrders() {
    return { code: 200, data: orders };
  }

  async searchOrders(keyword: string) {
    const results = orders.filter(o => 
      o.orderNo?.includes(keyword) || 
      o.pickupCode?.includes(keyword)
    );
    return { code: 200, data: results };
  }

  async updateOrder(id: number, data: any) {
    const index = orders.findIndex(o => o.id === id);
    if (index === -1) {
      return { code: 404, msg: '订单不存在' };
    }
    orders[index] = { ...orders[index], ...data };
    return { code: 200, msg: '更新成功', data: orders[index] };
  }
}