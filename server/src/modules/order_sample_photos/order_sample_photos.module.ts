import { Module } from '@nestjs/common';
import { OrderSamplePhotosService } from './order_sample_photos.service';
import { OrderSamplePhotosController } from './order_sample_photos.controller';
import { orderSamplePhotosProvider } from './order_sample_photos.provider';
import { ordersProvider } from '../order/order.provider';

@Module({
  providers: [OrderSamplePhotosService, ...orderSamplePhotosProvider,...ordersProvider],
  controllers: [OrderSamplePhotosController],
})
export class OrderSamplePhotosModule {}
