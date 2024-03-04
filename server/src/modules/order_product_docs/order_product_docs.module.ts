import { Module } from '@nestjs/common';
import { OrderProductDocsService } from './order_product_docs.service';
import { OrderProductDocsController } from './order_product_docs.controller';
import { orderProductDocsProvider } from './order_product_docs.provider';
import { orderProductProvider } from '../order_product/order_product.provider';

@Module({
  providers: [OrderProductDocsService,...orderProductDocsProvider,...orderProductProvider],
  controllers: [OrderProductDocsController]
})
export class OrderProductDocsModule {}
