import { Inject, Injectable } from '@nestjs/common';
import { ORDERPRODUCTDOCS_REPOSITORY } from 'src/core/constants';
import { OrderProductDocs } from './order_product_docs.entity';
import { OrderProductDocsDto } from './dto/order_product_docs.dto';

@Injectable()
export class OrderProductDocsService {
  constructor(
    @Inject(ORDERPRODUCTDOCS_REPOSITORY)
    private readonly orderProductsDocsRepository: typeof OrderProductDocs,
  ) {}

  async getOrderProductDocs(): Promise<OrderProductDocs[]> {
    return await this.orderProductsDocsRepository.findAll();
  }

  async getOrderProductDocsById(id: number): Promise<OrderProductDocs> {
    return await this.orderProductsDocsRepository.findOne({
      where: { id: id },
    });
  }

  async createOrderProductDocs(
    orderProductDocsDto: OrderProductDocsDto,
  ): Promise<OrderProductDocs> {
    return await this.orderProductsDocsRepository.create(orderProductDocsDto);
  }

  async deleteOrderProductDto(id: number) {
    return await this.orderProductsDocsRepository.destroy({
      where: { id: id },
    });
  }
}
