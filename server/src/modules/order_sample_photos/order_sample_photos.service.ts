import { Inject, Injectable } from '@nestjs/common';
import { ORDERSAMPLEPHOTOS_REPOSITORY } from 'src/core/constants';
import { OrderSamplePhotos } from './order_sample_photos.entity';
import { OrderSamplePhotoDto } from './dto/order_sample_photo.dto';

@Injectable()
export class OrderSamplePhotosService {
  constructor(
    @Inject(ORDERSAMPLEPHOTOS_REPOSITORY)
    private readonly orderSamplePhotoRepo: typeof OrderSamplePhotos,
  ) {}

  async getAllPhotos(): Promise<OrderSamplePhotos[]> {
    return await this.orderSamplePhotoRepo.findAll();
  }

  async getPhotosById(id: number): Promise<OrderSamplePhotos> {
    return await this.orderSamplePhotoRepo.findByPk(id);
  }

  async createPhoto(dto: OrderSamplePhotoDto): Promise<OrderSamplePhotos> {
    return await this.orderSamplePhotoRepo.create(dto);
  }

  async deletePhoto(id: number) {
    return await this.orderSamplePhotoRepo.destroy({ where: { id: id } });
  }
}
