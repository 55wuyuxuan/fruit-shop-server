import { Controller, Post, Get, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    return this.adminService.login(body.username, body.password);
  }

  @Get('stats')
  async getStats() {
    return this.adminService.getStats();
  }

  @Get('products')
  async getProducts() {
    return this.adminService.getProducts();
  }

  @Post('products')
  async createProduct(@Body() body: any) {
    return this.adminService.createProduct(body);
  }

  @Put('products/:id')
  async updateProduct(@Param('id') id: string, @Body() body: any) {
    return this.adminService.updateProduct(Number(id), body);
  }

  @Delete('products/:id')
  async deleteProduct(@Param('id') id: string) {
    return this.adminService.deleteProduct(Number(id));
  }

  @Get('orders')
  async getOrders() {
    return this.adminService.getOrders();
  }

  @Get('orders/search')
  async searchOrders(@Query('keyword') keyword: string) {
    return this.adminService.searchOrders(keyword);
  }

  @Put('orders/:id')
  async updateOrder(@Param('id') id: string, @Body() body: any) {
    return this.adminService.updateOrder(Number(id), body);
  }
}