import { Injectable, Inject } from '@nestjs/common';
import { MESSAGE_REPOSITORY } from 'src/core/constants';
import { Message } from './chat.entity';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class ChatService {
  constructor(
    @Inject(MESSAGE_REPOSITORY)
    private readonly messageRepository: typeof Message,
  ) {}

  async sendMessage(createMessageDto: CreateMessageDto): Promise<Message> {
    return await this.messageRepository.create(createMessageDto);
  }

  async getMessagesByOrder(orderId: number): Promise<Message[]> {
    return await this.messageRepository.findAll({
      where: {
        orderId: orderId,
      },
    });
  }
}
