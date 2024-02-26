import { Inject, Injectable } from '@nestjs/common';
import { ADDRESS_REPOSITORY } from 'src/core/constants';
import { Address } from './address.entity';
import { AddressDto } from './dto/address.dto';

@Injectable()
export class AddressService {
  constructor(
    @Inject(ADDRESS_REPOSITORY)
    private readonly addressRepository: typeof Address,
  ) {}

  async createAddress(address: AddressDto): Promise<Address> {
    const response = await this.addressRepository.create(address);

    return response;
  }

  async updateAddress(newAddress: AddressDto, id: number) {
    const response = await this.addressRepository.update(newAddress, {
      where: { id: id },
    });

    return response;
  }

  async deleteAddress(id: number) {
    await this.addressRepository.destroy({ where: { id: id } });
  }
}
