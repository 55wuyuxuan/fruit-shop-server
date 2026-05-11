import { Controller, Post, Body, Get, Put, Delete, Param, Query, Headers, UnauthorizedException } from '@nestjs/common';

interface Admin {
  id: number;
  username: string;
  password: string;
  name: string;
}

const admins: Admin[] = [
  { id: 1, username: 'admin', password: 'admin123', name: '管理员' },
];

@Controller('admin')
export class AdminController {
  @Post('login')
  login(@Body() body: { username: string; password: string }) {
    const admin = admins.find((a) => a.username === body.username && a.password === body.password);
    if (!admin) {
      return { code: 401, msg: '用户名或密码错误', data: null };
    }
    const token = Buffer.from(`${admin.username}:${Date.now()}`).toString('base64');
    return {
      code: 200,
      msg: '登录成功',
      data: {
        token,
        admin: { id: admin.id, username: admin.username, name: admin.name },
      },
    };
  }

  @Get('stats')
  getStats(@Headers('authorization') auth: string) {
    if (!auth) throw new UnauthorizedException();
    return {
      code: 200,
      data: {
        todayOrders: 12,
        todayRevenue: 368.5,
        totalProducts: 45,
        totalRevenue: 12580.0,
        pendingOrders: 3,
        completedOrders: 89,
      },
    };
  }

  @Get('products')
  getProducts(@Headers('authorization') auth: string) {
    if (!auth) throw new UnauthorizedException();
    const { products } = require('../products/products.data');
    return { code: 200, data: { products } };
  }

  @Post('products')
  createProduct(@Headers('authorization') auth: string, @Body() body: any) {
    if (!auth) throw new UnauthorizedException();
    return { code: 200, data: { success: true } };
  }

  @Put('products/:id')
  updateProduct(@Headers('authorization') auth: string, @Param('id') id: string, @Body() body: any) {
    if (!auth) throw new UnauthorizedException();
    return { code: 200, data: { success: true } };
  }

  @Delete('products/:id')
  deleteProduct(@Headers('authorization') auth: string, @Param('id') id: string) {
    if (!auth) throw new UnauthorizedException();
    return { code: 200, data: { success: true } };
  }

  @Get('orders')
  getOrders(@Headers('authorization') auth: string, @Query('limit') limit?: string) {
    if (!auth) throw new UnauthorizedException();
    const { orders } = require('../orders/orders.data');
    return { code: 200, data: { orders: limit ? orders.slice(0, parseInt(limit)) : orders } };
  }

  @Put('orders/:id')
  updateOrder(@Headers('authorization') auth: string, @Param('id') id: string, @Body() body: any) {
    if (!auth) throw new UnauthorizedException();
    return { code: 200, data: { success: true } };
  }
}