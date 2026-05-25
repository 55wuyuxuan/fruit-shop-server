import { Controller, Post, Get, Put, Delete, Body, Param, Query, Headers, UnauthorizedException, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AdminService } from './admin.service';
import { products, Product } from '../products/products.data';
import { orders, Order, OrderStatus } from '../orders/orders.data';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // 商家登录
  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    console.log('[Admin] POST /api/admin/login - Body:', body);
    const result = await this.adminService.login(body.username, body.password);
    if (!result) {
      return { code: 401, msg: '用户名或密码错误', data: null };
    }
    console.log('[Admin] Login success:', result);
    return { code: 200, msg: '登录成功', data: result };
  }

  // 获取统计数据
  @Get('stats')
  async getStats(@Headers('authorization') authHeader: string) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { code: 401, msg: '未授权', data: null };
    }
    const token = authHeader.substring(7);
    if (!this.adminService.validateToken(token)) {
      return { code: 401, msg: 'token无效', data: null };
    }

    // 计算今日数据
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayOrders = orders.filter(order => {
      const orderDate = new Date(order.createTime);
      orderDate.setHours(0, 0, 0, 0);
      return orderDate.getTime() === today.getTime();
    });

    const todayRevenue = todayOrders
      .filter(order => order.status === 'paid' || order.status === 'completed' || order.status === 'delivered')
      .reduce((sum, order) => sum + order.totalAmount, 0);

    const totalRevenue = orders
      .filter(order => order.status === 'paid' || order.status === 'completed' || order.status === 'delivered')
      .reduce((sum, order) => sum + order.totalAmount, 0);

    const pendingOrders = orders.filter(o => o.status === 'pending' || o.status === 'paid').length;
    // 统计已完成订单（包括 delivered 和 completed 状态都视为已完成）
    const completedOrders = orders.filter(o => o.status === 'completed' || o.status === 'delivered').length;

    const data = {
      todayOrders: todayOrders.length,
      todayRevenue,
      totalProducts: products.filter(p => p.isActive !== false).length,
      totalRevenue,
      pendingOrders,
      completedOrders,
    };

    console.log('[Admin] GET /api/admin/stats - Response:', data);
    return { code: 200, msg: 'success', data };
  }

  // 获取所有商品
  @Get('products')
  async getProducts(
    @Headers('authorization') authHeader: string,
    @Query('keyword') keyword?: string,
    @Query('category') category?: string,
  ) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { code: 401, msg: '未授权', data: null };
    }
    const token = authHeader.substring(7);
    if (!this.adminService.validateToken(token)) {
      return { code: 401, msg: 'token无效', data: null };
    }

    let result = [...products];

    // 按关键词搜索
    if (keyword) {
      result = result.filter(p => p.name.toLowerCase().includes(keyword.toLowerCase()));
    }

    // 按分类筛选
    if (category && category !== 'all') {
      result = result.filter(p => p.category === category);
    }

    // 按ID倒序
    result = result.sort((a, b) => b.id - a.id);

    console.log('[Admin] GET /api/admin/products - Count:', result.length);
    return { code: 200, msg: 'success', data: { products: result } };
  }

  // 创建商品
  @Post('products')
  async createProduct(
    @Headers('authorization') authHeader: string,
    @Body() body: {
      name: string;
      category: string;
      price: number;
      originalPrice?: number;
      stock: number;
      unit: string;
      image: string;
      description?: string;
      isActive?: boolean;
      isHot?: boolean;
      isRecommended?: boolean;
    },
  ) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { code: 401, msg: '未授权', data: null };
    }
    const token = authHeader.substring(7);
    if (!this.adminService.validateToken(token)) {
      return { code: 401, msg: 'token无效', data: null };
    }

    const maxId = products.length > 0 ? Math.max(...products.map(p => p.id)) : 0;
    const newProduct: Product = {
      id: maxId + 1,
      name: body.name,
      category: body.category,
      price: body.price,
      originalPrice: body.originalPrice,
      stock: body.stock,
      unit: body.unit,
      image: body.image || 'https://img.yzcdn.cn/vant/apple-1.jpg',
      description: body.description,
      isActive: body.isActive !== false,
      isHot: body.isHot || false,
      isRecommended: body.isRecommended || false,
    };

    products.unshift(newProduct);

    console.log('[Admin] POST /api/admin/products - Created:', newProduct);
    return { code: 200, msg: '创建成功', data: { product: newProduct } };
  }

  // 更新商品
  @Put('products/:id')
  async updateProduct(
    @Headers('authorization') authHeader: string,
    @Body() body: Partial<Product>,
    @Param('id') id: string,
  ) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { code: 401, msg: '未授权', data: null };
    }
    const token = authHeader.substring(7);
    if (!this.adminService.validateToken(token)) {
      return { code: 401, msg: 'token无效', data: null };
    }

    const productId = parseInt(id);
    const index = products.findIndex(p => p.id === productId);
    if (index === -1) {
      return { code: 404, msg: '商品不存在', data: null };
    }

    products[index] = { ...products[index], ...body };
    console.log('[Admin] PUT /api/admin/products/:id - Updated:', products[index]);
    return { code: 200, msg: '更新成功', data: { product: products[index] } };
  }

  // 删除商品
  @Delete('products/:id')
  async deleteProduct(
    @Headers('authorization') authHeader: string,
    @Param('id') id: string,
  ) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { code: 401, msg: '未授权', data: null };
    }
    const token = authHeader.substring(7);
    if (!this.adminService.validateToken(token)) {
      return { code: 401, msg: 'token无效', data: null };
    }

    const productId = parseInt(id);
    const index = products.findIndex(p => p.id === productId);
    if (index === -1) {
      return { code: 404, msg: '商品不存在', data: null };
    }

    products.splice(index, 1);
    console.log('[Admin] DELETE /api/admin/products/:id - Deleted:', id);
    return { code: 200, msg: '删除成功', data: null };
  }

  // 获取所有订单
  @Get('orders')
  async getOrders(
    @Headers('authorization') authHeader: string,
    @Query('limit') limit?: string,
  ) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { code: 401, msg: '未授权', data: null };
    }
    const token = authHeader.substring(7);
    if (!this.adminService.validateToken(token)) {
      return { code: 401, msg: 'token无效', data: null };
    }

    // 按创建时间倒序
    const sortedOrders = [...orders].sort((a, b) => 
      new Date(b.createTime).getTime() - new Date(a.createTime).getTime()
    );

    // 格式化订单数据
    const formattedOrders = sortedOrders.map(order => ({
      id: order.id,
      orderNo: order.orderNo,
      customerName: order.address?.name || '未知',
      customerPhone: order.address?.phone || '',
      customerAddress: order.address ? `${order.address.province}${order.address.city}${order.address.district}${order.address.detail}` : '',
      items: order.items.map((item, idx) => ({
        id: idx + 1,
        productId: item.productId,
        productName: item.productName,
        price: item.price,
        quantity: item.quantity,
        unit: '斤',
      })),
      totalAmount: order.totalAmount,
      status: order.status,
      remark: order.remark || '',
      createdAt: order.createTime,
      updatedAt: order.payTime || order.createTime,
    }));

    const result = limit ? formattedOrders.slice(0, parseInt(limit)) : formattedOrders;

    console.log('[Admin] GET /api/admin/orders - Count:', result.length);
    return { code: 200, msg: 'success', data: { orders: result } };
  }

  // 搜索订单
  @Get('orders/search')
  async searchOrders(
    @Headers('authorization') authHeader: string,
    @Query('keyword') keyword?: string,
    @Query('status') status?: string,
  ) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { code: 401, msg: '未授权', data: null };
    }
    const token = authHeader.substring(7);
    if (!this.adminService.validateToken(token)) {
      return { code: 401, msg: 'token无效', data: null };
    }

    let result = [...orders];

    // 按关键词搜索
    if (keyword) {
      const kw = keyword.toLowerCase();
      result = result.filter(o => 
        o.orderNo.toLowerCase().includes(kw) ||
        o.address?.name?.toLowerCase().includes(kw) ||
        o.address?.phone?.includes(kw)
      );
    }

    // 按状态筛选（前端传的 completed 对应后端的 completed）
    if (status && status !== 'all') {
      result = result.filter(o => o.status === status);
    }

    // 格式化
    const formattedOrders = result.sort((a, b) => 
      new Date(b.createTime).getTime() - new Date(a.createTime).getTime()
    ).map(order => ({
      id: order.id,
      orderNo: order.orderNo,
      customerName: order.address?.name || '未知',
      customerPhone: order.address?.phone || '',
      customerAddress: order.address ? `${order.address.province}${order.address.city}${order.address.district}${order.address.detail}` : '',
      items: order.items.map((item, idx) => ({
        id: idx + 1,
        productId: item.productId,
        productName: item.productName,
        price: item.price,
        quantity: item.quantity,
        unit: '斤',
      })),
      totalAmount: order.totalAmount,
      status: order.status,
      remark: order.remark || '',
      createdAt: order.createTime,
      updatedAt: order.payTime || order.createTime,
    }));

    console.log('[Admin] GET /api/admin/orders/search - Count:', formattedOrders.length);
    return { code: 200, msg: 'success', data: { orders: formattedOrders } };
  }

  // 更新订单状态
  @Put('orders/:id')
  async updateOrder(
    @Headers('authorization') authHeader: string,
    @Body() body: { status: string },
    @Param('id') id: string,
  ) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { code: 401, msg: '未授权', data: null };
    }
    const token = authHeader.substring(7);
    if (!this.adminService.validateToken(token)) {
      return { code: 401, msg: 'token无效', data: null };
    }

    const order = orders.find(o => o.id === id);
    if (!order) {
      return { code: 404, msg: '订单不存在', data: null };
    }

    // 标准化状态（前端传 completed，后端存 completed）
    const newStatus = body.status;
    
    order.status = newStatus as OrderStatus;
    const now = new Date().toISOString().replace('T', ' ').slice(0, 19);
    if (newStatus === 'paid') order.payTime = now;
    if (newStatus === 'completed') order.completeTime = now;

    console.log('[Admin] PUT /api/admin/orders/:id - Updated:', order);
    return { code: 200, msg: '状态更新成功', data: order };
  }

  // 图片上传 - 暂时返回示例图片
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @Headers('authorization') authHeader: string,
    @UploadedFile() file: any,
  ) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { code: 401, msg: '未授权', data: null };
    }
    const token = authHeader.substring(7);
    if (!this.adminService.validateToken(token)) {
      return { code: 401, msg: 'token无效', data: null };
    }

    if (!file) {
      return { code: 400, msg: '请选择要上传的图片', data: null };
    }

    try {
      // 暂时返回一个示例图片 URL
      // TODO: 配置正确的 TOS 凭证后启用真实上传
      const sampleImages = [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-3.jpg',
        'https://img.yzcdn.cn/vant/apple-4.jpg',
      ];
      const imageUrl = sampleImages[Math.floor(Math.random() * sampleImages.length)];
      
      console.log('[Admin] POST /api/admin/upload - URL:', imageUrl);
      return { code: 200, msg: '上传成功', data: { url: imageUrl } };
    } catch (error) {
      console.error('[Admin] Upload error:', error);
      return { code: 500, msg: '上传失败: ' + (error as Error).message, data: null };
    }
  }

  // AI 生成商品描述 - 使用模板生成
  @Post('generate-description')
  async generateDescription(
    @Headers('authorization') authHeader: string,
    @Body() body: { productName: string; category?: string },
  ) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { code: 401, msg: '未授权', data: null };
    }
    const token = authHeader.substring(7);
    if (!this.adminService.validateToken(token)) {
      return { code: 401, msg: 'token无效', data: null };
    }

    if (!body.productName) {
      return { code: 400, msg: '请输入商品名称', data: null };
    }

    try {
      // 使用模板生成描述
      const category = body.category || '水果';
      const templates = [
        `【${body.productName}】精选优质${category}，新鲜采摘，口感鲜美，营养丰富，品质保证，欢迎选购！`,
        `【${body.productName}】产地直供，当天采摘当天发货，新鲜美味，甜度适中，是您健康生活的首选。`,
        `【${body.productName}】严选优品，自然成熟，果香浓郁，肉质饱满，每一口都是大自然的馈赠。`,
        `【${body.productName}】新鲜上市，源头直采，品质上乘，物美价廉，错过可惜！`,
      ];
      const description = templates[Math.floor(Math.random() * templates.length)];
      
      console.log('[Admin] POST /api/admin/generate-description - Result:', description);
      return { code: 200, msg: '生成成功', data: { description } };
    } catch (error) {
      console.error('[Admin] Generate description error:', error);
      const defaultDesc = `${body.productName}，新鲜优质，品质保证，欢迎选购。`;
      return { code: 200, msg: '生成成功', data: { description: defaultDesc } };
    }
  }
}