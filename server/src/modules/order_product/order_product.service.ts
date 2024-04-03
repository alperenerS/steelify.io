import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ORDERPRODUCT_REPOSITORY, ORDER_REPOSITORY } from 'src/core/constants';
import { OrderProduct } from './order_product.entity';
import { OrderProductDto } from './dto/order_product.dto';
import { Order } from '../order/order.entity';

@Injectable()
export class OrderProductService {
  constructor(
    @Inject(ORDERPRODUCT_REPOSITORY)
    private readonly orderProductRepository: typeof OrderProduct,
    @Inject(ORDER_REPOSITORY) private readonly orderRepository: typeof Order,
  ) {}

  async getOrderProducts(): Promise<OrderProduct[]> {
    return await this.orderProductRepository.findAll();
  }

  async getOrderProductsById(id: number): Promise<OrderProduct> {
    return await this.orderProductRepository.findOne({ where: { id: id } });
  }

  async createOrderProduct(
    orderProductDto: OrderProductDto,
  ): Promise<OrderProduct> {
    const Order = await this.orderRepository.findByPk(orderProductDto.order_id);
    if (!Order) {
      throw new NotFoundException('Order can not be found !');
    }
    return await this.orderProductRepository.create(orderProductDto);
  }

  async updateOrderProduct(updateOrderProductDto: OrderProductDto, id: number) {
    const order = await this.orderRepository.findByPk(
      updateOrderProductDto.order_id,
    );

    if (!order) {
      throw new NotFoundException('Order can not be found !');
    }
    return await this.orderProductRepository.update(
      {
        order_id: updateOrderProductDto.order_id,
        name: updateOrderProductDto.name,
        hs_code: updateOrderProductDto.hs_code,
      },
      { where: { id: id } },
    );
  }

  async deleteOrderProduct(id: number) {
    await this.orderProductRepository.destroy({ where: { id: id } });
  }
}
