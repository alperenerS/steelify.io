import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { ordersProvider } from './order.provider';
import { orderDocsProvider } from '../order_document/order_document.provider';
import { orderSamplePhotosProvider } from '../order_sample_photos/order_sample_photos.provider';
import { addressesProvider } from '../address/address.provider';

@Module({
  providers: [
    OrderService,
    ...ordersProvider,
    ...orderDocsProvider,
    ...orderSamplePhotosProvider,
    ...addressesProvider,
  ],
  controllers: [OrderController],
})
export class OrderModule {}
