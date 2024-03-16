import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { OrderSamplePhotosService } from './order_sample_photos.service';
import { Request, Response } from 'express';
import { OrderSamplePhotoDto } from './dto/order_sample_photo.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { uploadFile } from '../utils/upload_azure';
import { JwtGuard } from '../auth/guard/jwt.guard';

@UseGuards(JwtGuard)
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
  @UseInterceptors(FileInterceptor('filelink'))
  async createPhoto(
    @UploadedFile() filelink: Express.Multer.File,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const { order_id, filename } = req.body;

    const azureUrl = await uploadFile(filelink.buffer, filename);

    const newphotoDto: OrderSamplePhotoDto = {
      order_id: order_id,
      filename: filename,
      filelink: azureUrl,
    };

    const newPhoto = await this.orderSamplePhotoService.createPhoto(newphotoDto);

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
