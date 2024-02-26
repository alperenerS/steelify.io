import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { ordersProvider } from './order.provider';

@Module({
  providers: [OrderService,...ordersProvider],
  controllers: [OrderController]
})
export class OrderModule {}
