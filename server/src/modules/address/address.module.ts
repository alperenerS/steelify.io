import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { addressesProvider } from './address.provider';
import { UserService } from '../user/user.service';
import { usersProvider } from '../user/user.provider';

@Module({
  providers: [AddressService, ...addressesProvider,...usersProvider],
  controllers: [AddressController],
})
export class AddressModule {}
