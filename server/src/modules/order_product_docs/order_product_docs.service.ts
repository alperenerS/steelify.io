import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  ORDERPRODUCTDOCS_REPOSITORY,
  ORDERPRODUCT_REPOSITORY,
} from 'src/core/constants';
import { OrderProductDocs } from './order_product_docs.entity';
import { OrderProductDocsDto } from './dto/order_product_docs.dto';
import { OrderProduct } from '../order_product/order_product.entity';

@Injectable()
export class OrderProductDocsService {
  constructor(
    @Inject(ORDERPRODUCTDOCS_REPOSITORY)
    private readonly orderProductsDocsRepository: typeof OrderProductDocs,
    @Inject(ORDERPRODUCT_REPOSITORY)
    private readonly orderProductsRepository: typeof OrderProduct,
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
    const orderProduct = await this.orderProductsRepository.findByPk(
      orderProductDocsDto.order_product_id,
    );

    if (!orderProduct) {
      throw new NotFoundException('Order Product can not be found !');
    }

    return await this.orderProductsDocsRepository.create(orderProductDocsDto);
  }

  async deleteOrderProductDocs(id: number) {
    return await this.orderProductsDocsRepository.destroy({
      where: { id: id },
    });
  }
}
