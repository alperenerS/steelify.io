import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { messageProvider } from './chat.provider';
import { ordersProvider } from '../order/order.provider';

@Module({
  providers: [ChatService, ...messageProvider, ...ordersProvider],
  controllers: [ChatController],
})
export class ChatModule {}
