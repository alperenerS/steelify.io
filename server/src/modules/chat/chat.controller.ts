import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('api/chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('send')
  async sendMessage(@Body() createMessageDto: CreateMessageDto) {
    const message = await this.chatService.sendMessage(createMessageDto);
    return { message: 'Message sent successfully!', data: message };
  }

  @Get('order/:orderId')
  async getMessagesByOrder(@Param('orderId') orderId: number) {
    const messages = await this.chatService.getMessagesByOrder(orderId);
    return { message: 'Messages fetched successfully!', data: messages };
  }
}
