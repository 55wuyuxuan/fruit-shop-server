import { Controller, Get, Post, Put, Param, Body, Query } from '@nestjs/common';
import { orders, Order, OrderStatus, defaultAddress, Address } from './orders.data';

@Controller('orders')
export class OrdersController {
  // 存储所有订单
  private static orderStore: Order[] = [...orders];

  @Get()
  getOrders(@Query('status') status?: OrderStatus): { code: number; msg: string; data: Order[] } {
    console.log('[Orders] GET /api/orders - Query:', { status });

    let result = OrdersController.orderStore;
    if (status) {
      result = result.filter(o => o.status === status);
    }

    // 按创建时间倒序
    result = result.sort((a, b) => new Date(b.createTime).getTime() - new Date(a.createTime).getTime());

    console.log('[Orders] Response:', { count: result.length });
    return { code: 200, msg: 'success', data: result };
  }

  @Get(':id')
  getOrderById(@Param('id') id: string): { code: number; msg: string; data: Order | null } {
    console.log('[Orders] GET /api/orders/:id - Params:', { id });

    const order = OrdersController.orderStore.find(o => o.id === id);

    if (!order) {
      console.log('[Orders] Order not found:', { id });
      return { code: 404, msg: 'Order not found', data: null };
    }

    console.log('[Orders] Response:', order);
    return { code: 200, msg: 'success', data: order };
  }

  @Post()
  createOrder(@Body() body: {
    items: Array<{ productId: number; productName: string; productImage: string; price: number; quantity: number }>;
    address: Address;
    remark?: string;
  }): { code: number; msg: string; data: Order } {
    console.log('[Orders] POST /api/orders - Body:', body);

    const now = new Date().toISOString().replace('T', ' ').slice(0, 19);
    const orderNo = `FG${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}${String(Date.now()).slice(-6)}`;

    const order: Order = {
      id: Date.now().toString(),
      orderNo,
      status: 'paid',
      items: body.items,
      totalAmount: body.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      address: body.address,
      createTime: now,
      payTime: now,
      remark: body.remark
    };

    OrdersController.orderStore.unshift(order);

    console.log('[Orders] Order created:', order);
    return { code: 200, msg: 'Order created successfully', data: order };
  }

  @Put(':id/status')
  updateOrderStatus(
    @Param('id') id: string,
    @Body() body: { status: OrderStatus }
  ): { code: number; msg: string; data: Order | null } {
    console.log('[Orders] PUT /api/orders/:id/status - Params:', { id }, 'Body:', body);

    const order = OrdersController.orderStore.find(o => o.id === id);

    if (!order) {
      console.log('[Orders] Order not found:', { id });
      return { code: 404, msg: 'Order not found', data: null };
    }

    const now = new Date().toISOString().replace('T', ' ').slice(0, 19);
    order.status = body.status;

    if (body.status === 'paid') order.payTime = now;
    if (body.status === 'delivered') order.deliverTime = now;
    if (body.status === 'completed') order.completeTime = now;

    console.log('[Orders] Order updated:', order);
    return { code: 200, msg: 'Status updated successfully', data: order };
  }

  @Get('address/default')
  getDefaultAddress(): { code: number; msg: string; data: Address } {
    console.log('[Orders] GET /api/orders/address/default');
    return { code: 200, msg: 'success', data: defaultAddress };
  }

  /**
   * 微信支付下单接口
   * 实际生产环境需要调用微信支付统一下单API
   * 此处为模拟实现，返回正确的微信支付参数格式
   */
  @Post('pay')
  createWxPayOrder(
    @Body() body: {
      orderId: string;
      totalAmount: number;
      openid: string;
    }
  ): { code: number; msg: string; data: WxPayParams } {
    console.log('[Orders] POST /api/orders/pay - Body:', body);

    // 实际生产环境需要：
    // 1. 调用微信支付统一下单API: https://api.mch.weixin.qq.com/pay/unifiedorder
    // 2. 获取 prepay_id (预支付会话标识)
    // 3. 生成签名返回给前端

    const timeStamp = Math.floor(Date.now() / 1000).toString();
    const nonceStr = Math.random().toString(36).substring(2, 15);

    // 模拟的支付参数（实际需要根据微信支付文档生成正确的签名）
    const payParams: WxPayParams = {
      timeStamp,
      nonceStr,
      package: 'prepay_id=mock_prepay_id_' + Date.now(), // 实际应为微信返回的真实prepay_id
      signType: 'MD5',
      paySign: 'mock_sign_' + Date.now(), // 实际应为根据微信支付文档生成的正确签名
      orderId: body.orderId
    };

    console.log('[Orders] WxPay order created:', payParams);
    return { code: 200, msg: 'success', data: payParams };
  }
}

// 微信支付参数接口
interface WxPayParams {
  timeStamp: string;
  nonceStr: string;
  package: string;
  signType: string;
  paySign: string;
  orderId: string;
}
