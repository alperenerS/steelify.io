import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ADDRESS_REPOSITORY, ORDER_REPOSITORY, USER_REPOSITORY } from 'src/core/constants';
import { Address } from './address.entity';
import { AddressDto } from './dto/address.dto';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { Order } from '../order/order.entity';

@Injectable()
export class AddressService {
  constructor(
    @Inject(ADDRESS_REPOSITORY)
    private readonly addressRepository: typeof Address,
    @Inject(USER_REPOSITORY)
    private readonly userRepository: typeof User,
    @Inject(ORDER_REPOSITORY) private readonly orderRepository: typeof Order,
  ) {}

  async getAddressById(id: number): Promise<Address> {
    const address = await this.addressRepository.findByPk(id);
    return address;
  }

  async getAddressByOrderId(order_id: number): Promise<Address> {
    return await this.addressRepository.findOne({
      where: { order_id: order_id },
    });
  }

  async getAllAddresses() {
    return await this.addressRepository.findAll();
  }

  async createAddress(address: AddressDto): Promise<Address> {
    const user = await this.userRepository.findByPk(address.user_id);
    const order = await this.orderRepository.findByPk(address.order_id);

    if (!user) {
      throw new NotFoundException('User can not be found !');
    }
    if (!order) {
      throw new NotFoundException('Order can not be found !');
    }
    
    const addressDto: AddressDto = {
      user_id: user.id,
      order_id: order.id,
      address_type: address.address_type,
      city: address.city,
      country: address.country,
      zip: address.zip,
      first_row: address.first_row,
      second_row: address.second_row,
    };

    const response = await this.addressRepository.create(addressDto);

    return response;
  }

  async updateAddress(newAddress: AddressDto, id: number) {
    const user = await this.userRepository.findByPk(newAddress.user_id);
    const order = await this.orderRepository.findByPk(newAddress.order_id);

    if (!user) {
      throw new NotFoundException('User can not be found !');
    }
    if (!order) {
      throw new NotFoundException('Order can not be found !');
    }

    const addressDto: AddressDto = {
      user_id: user.id,
      order_id:order.id,
      address_type: newAddress.address_type,
      city: newAddress.city,
      country: newAddress.country,
      zip: newAddress.zip,
      first_row: newAddress.first_row,
      second_row: newAddress.second_row,
    };

    const response = await this.addressRepository.update(addressDto, {
      where: { id: id },
    });

    return response;
  }

  async deleteAddress(id: number) {
    await this.addressRepository.destroy({ where: { id: id } });
  }
}