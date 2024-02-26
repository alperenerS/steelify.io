import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressDto } from './dto/address.dto';
import { Response } from 'express';
import { JwtGuard } from '../auth/guard/jwt.guard';

@UseGuards(JwtGuard)
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post('create')
  async createAddress(@Body() address: AddressDto, @Res() res: Response) {
    try {
      const response = await this.addressService.createAddress(address);

      return res
        .status(HttpStatus.CREATED)
        .json({ message: 'Address Successfully Created !', result: response });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  @Put('update/:id')
  async updateAddress(
    @Body() address: AddressDto,
    @Param('id') id: number,
    @Res() res: Response,
  ) {
    try {
      const addressExist = await this.addressService.getAddressById(id);

      if (!addressExist) {
        throw new NotFoundException('Address Not Found !');
      }

      const response = await this.addressService.updateAddress(address, id);

      return res
        .status(HttpStatus.ACCEPTED)
        .json({ message: 'Address Successfully Update !', result: response });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  @Delete('delete/:id')
  async deleteAddress(@Param('id') id: number, @Res() res: Response) {
    try {
      const addressExist = await this.addressService.getAddressById(id);

      if (!addressExist) {
        throw new NotFoundException('Address Not Found !');
      }
      const response = await this.addressService.deleteAddress(id);

      return res.status(HttpStatus.ACCEPTED).json({
        message: 'Address Successfully Deleted !',
        response: response,
      });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  @Get()
  async getAllAddresses() {
    try {
      return await this.addressService.getAllAddresses();
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  @Get(':id')
  async getAddressById(@Param('id') id: number, @Res() res: Response) {
    try {
      const address = await this.addressService.getAddressById(id);

      if(!address) {
        res.status(HttpStatus.NOT_FOUND)
        throw new NotFoundException('Address Can Not Be Found !')
      }

      return res
        .status(HttpStatus.ACCEPTED)
        .json({ message: 'Address Successfully Fetched !', response: address });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }
}
