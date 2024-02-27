import { Module } from '@nestjs/common';
import { OrderDocumentService } from './order_document.service';
import { OrderDocumentController } from './order_document.controller';
import { orderDocsProvider } from './order_document.provider';
import { ordersProvider } from '../order/order.provider';

@Module({
  providers: [OrderDocumentService,...orderDocsProvider,...ordersProvider],
  controllers: [OrderDocumentController]
})
export class OrderDocumentModule {}
