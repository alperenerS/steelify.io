import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  ADDRESS_REPOSITORY,
  ORDERDOCS_REPOSITORY,
  ORDERSAMPLEPHOTOS_REPOSITORY,
  ORDER_REPOSITORY,
} from 'src/core/constants';
import { Order } from './order.entity';
import { OrderDto } from './dto/order.dto';
import { OrderDocument } from '../order_document/order_document.entity';
import { OrderSamplePhotos } from '../order_sample_photos/order_sample_photos.entity';
import { OrderDocsDto } from '../order_document/dto/order_document.dto';
import { OrderSamplePhotoDto } from '../order_sample_photos/dto/order_sample_photo.dto';
import { Address } from '../address/address.entity';

@Injectable()
export class OrderService {
  constructor(
    @Inject(ORDER_REPOSITORY) private readonly orderRepository: typeof Order,
    @Inject(ORDERDOCS_REPOSITORY)
    private readonly orderDocsRepository: typeof OrderDocument,
    @Inject(ORDERSAMPLEPHOTOS_REPOSITORY)
    private readonly photosRepository: typeof OrderSamplePhotos,
    @Inject(ADDRESS_REPOSITORY)
    private readonly addressRepository: typeof Address,
  ) {}

  async getAddressByOrderId(order_id: number): Promise<Address> {
    return await this.addressRepository.findOne({
      where: { order_id: order_id },
    });
  }

  async deleteAddressByOrderId(order_id: number) {
    return await this.addressRepository.destroy({
      where: { order_id: order_id },
    });
  }

  async getPhotosByOrderId(order_id: number): Promise<OrderSamplePhotos> {
    const samplePhoto = await this.photosRepository.findOne({
      where: { order_id: order_id },
    });

    return samplePhoto;
  }

  async getOrderDocsByOrderId(order_id: number): Promise<OrderDocument> {
    const orderDocs = await this.orderDocsRepository.findOne({
      where: { order_id: order_id },
    });
    return orderDocs;
  }

  async deleteSamplePhotosByOrderId(order_id: number) {
    await this.photosRepository.destroy({ where: { order_id: order_id } });
  }

  async deleteOrderDocsByOrderId(order_id: number) {
    await this.orderDocsRepository.destroy({ where: { order_id: order_id } });
  }

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

  async createOrderDocs(orderDocs: OrderDocsDto): Promise<OrderDocument> {
    const order = await this.orderRepository.findByPk(orderDocs.order_id);

    if (!order) {
      throw new NotFoundException('Order can not be found !');
    }

    const response = await this.orderDocsRepository.create(orderDocs);

    return response;
  }

  async createPhoto(dto: OrderSamplePhotoDto): Promise<OrderSamplePhotos> {
    const order = await this.orderRepository.findByPk(dto.order_id);

    if (!order) {
      throw new NotFoundException('Order can not be found !');
    }

    const response = await this.photosRepository.create(dto);

    return response;
  }

  async getOrders(): Promise<Order[]> {
    return await this.orderRepository.findAll();
  }

  async getOrdersByCustomer(customer: string): Promise<Order[]> {
    return await this.orderRepository.findAll({
      where: { customer: customer },
    });
  }

  async getOrderByUserId(id: number): Promise<Order[]> {
    return await this.orderRepository.findAll({ where: { user_id: id } });
  }

  async getOrderById(id: number): Promise<Order> {
    return await this.orderRepository.findByPk(id);
  }
}
