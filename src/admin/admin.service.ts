import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { OrdersService } from '../orders/orders.service';

@Injectable()
export class AdminService {
  constructor(
    private productsService: ProductsService,
    private ordersService: OrdersService,
  ) {}

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
    const products = await this.productsService.findAll();
    const orders = await this.ordersService.findAll();
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
    const products = await this.productsService.findAll();
    return { code: 200, data: products };
  }

  async createProduct(data: any) {
    const product = await this.productsService.create(data);
    return { code: 200, msg: '添加成功', data: product };
  }

  async updateProduct(id: number, data: any) {
    const product = await this.productsService.update(id, data);
    return { code: 200, msg: '更新成功', data: product };
  }

  async deleteProduct(id: number) {
    await this.productsService.delete(id);
    return { code: 200, msg: '删除成功' };
  }

  async getOrders() {
    const orders = await this.ordersService.findAll();
    return { code: 200, data: orders };
  }

  async searchOrders(keyword: string) {
    const orders = await this.ordersService.search(keyword);
    return { code: 200, data: orders };
  }

  async updateOrder(id: number, data: any) {
    const order = await this.ordersService.update(id, data);
    return { code: 200, msg: '更新成功', data: order };
  }
}