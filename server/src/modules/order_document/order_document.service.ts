import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ORDERDOCS_REPOSITORY, ORDER_REPOSITORY } from 'src/core/constants';
import { OrderDocument } from './order_document.entity';
import { OrderDocsDto } from './dto/order_document.dto';
import { Order } from '../order/order.entity';

@Injectable()
export class OrderDocumentService {
  constructor(
    @Inject(ORDERDOCS_REPOSITORY)
    private readonly orderDocsRepository: typeof OrderDocument,
    @Inject(ORDER_REPOSITORY) private readonly orderRepository: typeof Order,
  ) {}

  async getAllOrderDocs() {
    return await this.orderDocsRepository.findAll();
  }

  async getOrderDocsById(id: number): Promise<OrderDocument> {
    return await this.orderDocsRepository.findByPk(id);
  }

  async createOrderDocs(orderDocs: OrderDocsDto): Promise<OrderDocument> {
    const order = await this.orderRepository.findByPk(orderDocs.order_id);

    if (!order) {
      throw new NotFoundException('Order can not be found !');
    }

    const response = await this.orderDocsRepository.create(orderDocs);

    return response;
  }

  async deleteOrderDocs(id: number) {
    return await this.orderDocsRepository.destroy({ where: { id: id } });
  }

  async findOrderById(order_id: number): Promise<Order> {
    return await this.orderRepository.findByPk(order_id);
  }
}
