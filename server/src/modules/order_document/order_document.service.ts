import { Inject, Injectable } from '@nestjs/common';
import { ORDERDOCS_REPOSITORY } from 'src/core/constants';
import { OrderDocument } from './order_document.entity';
import { OrderDocsDto } from './dto/order_document.dto';

@Injectable()
export class OrderDocumentService {
  constructor(
    @Inject(ORDERDOCS_REPOSITORY)
    private readonly orderDocsRepository: typeof OrderDocument,
  ) {}

  async getAllOrderDocs() {
    return await this.orderDocsRepository.findAll();
  }

  async getOrderDocsById(id: number): Promise<OrderDocument> {
    return await this.orderDocsRepository.findByPk(id);
  }

  async createOrderDocs(orderDocs: OrderDocsDto): Promise<OrderDocument> {
    const response = await this.orderDocsRepository.create(orderDocs);

    return response;
  }

  async updateOrderDocs(orderDocsDto: OrderDocsDto, id: number) {
    const response = await this.orderDocsRepository.update(orderDocsDto, {
      where: { id: id },
    });

    return response;
  }
}
