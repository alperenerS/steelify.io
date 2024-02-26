import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { addressesProvider } from './address.provider';

@Module({
  providers: [AddressService,...addressesProvider],
  controllers: [AddressController]
})
export class AddressModule {}
