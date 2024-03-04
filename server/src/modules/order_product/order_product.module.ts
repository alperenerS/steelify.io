import { Module } from '@nestjs/common';
import { OrderProductService } from './order_product.service';
import { OrderProductController } from './order_product.controller';
import { orderProductProvider } from './order_product.provider';
import { ordersProvider } from '../order/order.provider';

@Module({
  providers: [OrderProductService,...orderProductProvider,...ordersProvider],
  controllers: [OrderProductController]
})
export class OrderProductModule {}
