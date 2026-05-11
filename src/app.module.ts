import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { ProductsModule } from '@/products/products.module';
import { OrdersModule } from '@/orders/orders.module';
import { AdminModule } from '@/admin/admin.module';

@Module({
  imports: [ProductsModule, OrdersModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}