import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { OrderSamplePhotosService } from './order_sample_photos.service';
import { Response } from 'express';
import { OrderSamplePhotoDto } from './dto/order_sample_photo.dto';

@Controller('api/order-sample-photos')
export class OrderSamplePhotosController {
  constructor(
    private readonly orderSamplePhotoService: OrderSamplePhotosService,
  ) {}

  @Get()
  async getAllPhotos(@Res() res: Response) {
    const allPhotos = await this.orderSamplePhotoService.getAllPhotos();

    if (allPhotos.length === 0) {
      throw new NotFoundException('There is no photos !');
    }
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Successfully Fetched !', data: allPhotos });
  }

  @Get(':id')
  async getPhotosById(@Param('id') id: number, @Res() res: Response) {
    const photo = await this.orderSamplePhotoService.getPhotosById(id);

    if (!photo) {
      throw new NotFoundException('Photo can not be found !');
    }

    return res
      .status(HttpStatus.OK)
      .json({ message: 'Photos Successfully Fetched !', data: photo });
  }

  @Post('create')
  async createPhoto(
    @Body() photoDto: OrderSamplePhotoDto,
    @Res() res: Response,
  ) {
    const newPhoto = await this.orderSamplePhotoService.createPhoto(photoDto);

    return res
      .status(HttpStatus.CREATED)
      .json({ message: 'Successfully Created !', data: newPhoto });
  }

  @Delete('delete/:id')
  async deletePhoto(@Param('id') id: number, @Res() res: Response) {
    const deletedPhoto = await this.orderSamplePhotoService.deletePhoto(id);

    return res
      .status(HttpStatus.OK)
      .json({ message: 'Successfully Deleted !', data: deletedPhoto });
  }
}
