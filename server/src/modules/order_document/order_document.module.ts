import { Module } from '@nestjs/common';
import { OrderDocumentService } from './order_document.service';
import { OrderDocumentController } from './order_document.controller';
import { orderDocsProvider } from './order_document.provider';

@Module({
  providers: [OrderDocumentService,...orderDocsProvider],
  controllers: [OrderDocumentController]
})
export class OrderDocumentModule {}
