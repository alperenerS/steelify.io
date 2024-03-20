import { Inject, Injectable } from '@nestjs/common';
import { ORDER_REPOSITORY } from 'src/core/constants';
import { Order } from './order.entity';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(
    @Inject(ORDER_REPOSITORY) private readonly orderRepository: typeof Order,
  ) {}

  async createOrder(order: OrderDto): Promise<Order> {
    const response = await this.orderRepository.create(order);

    return response;
  }

  async updateOrder(order: OrderDto, id: number) {
    const response = await this.orderRepository.update(order, {
      where: { id: id },
    });

    return response;
  }

  async updateOrderStatus(status: string, id: number) {
    const response = await this.orderRepository.update(
      { status },
      { where: { id } },
    );

    return response;
  }

  async deleteOrder(id: number) {
    return await this.orderRepository.destroy({ where: { id: id } });
  }

  async countOrders(): Promise<any> {
    return await this.orderRepository.count();
  }
}
