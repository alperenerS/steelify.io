import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Post,
  Req,
  Res,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { OrderDocumentService } from './order_document.service';
import { Request, Response } from 'express';
import { OrderDocsDto } from './dto/order_document.dto';
import { JwtGuard } from '../auth/guard/jwt.guard';
import {
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { uploadFile } from '../utils/upload_azure';

@UseGuards(JwtGuard)
@Controller('api/order-document')
export class OrderDocumentController {
  constructor(private readonly orderDocsService: OrderDocumentService) {}

  @Get()
  async getAllOrderDocs(@Res() res: Response) {
    try {
      const response = await this.orderDocsService.getAllOrderDocs();

      if (response.length === 0) {
        throw new NotFoundException('There is no OrderDocs !');
      }
      return res
        .status(HttpStatus.OK)
        .json({ message: 'Successfully Fetched !', data: response });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }

  @Get(':id')
  async getOrderDocsById(@Param('id') id: number, @Res() res: Response) {
    try {
      const orderDocs = await this.orderDocsService.getOrderDocsById(id);

      if (!orderDocs) {
        throw new NotFoundException('Order Document can not be found !');
      }

      return res.status(HttpStatus.OK).json({
        message: 'Order docs successfully fetched !',
        data: orderDocs,
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }

  @Post('create')
  @UseInterceptors(FilesInterceptor('file_link',25))
  async createOrderDocs(
    @UploadedFiles() file_link: Array<Express.Multer.File>,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const { order_id, filename } = req.body;

      const order = await this.orderDocsService.findOrderById(order_id);
      
      
      if (!file_link || file_link.length === 0) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ message: 'No files uploaded' });
      }
  
      const azureUrls = await Promise.all(
        file_link.map(async (file) => {
          const azureUrl = await uploadFile(file.buffer, `${order.name}/OrderDocuments/${file.originalname}`);
          return azureUrl;
        }),
      ); //multifile kismini buraya entegre et order_sample_photos icinden

      const orderDocsDto: OrderDocsDto = {
        order_id: order_id,
        filename: filename,
        file_link: azureUrls,
      };
      const orderDocument =
        await this.orderDocsService.createOrderDocs(orderDocsDto);

      return res
        .status(HttpStatus.CREATED)
        .json({ message: 'Successfully Created !', data: orderDocument });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }

  @Delete('delete/:id')
  async deleteOrderDocs(@Param('id') id: number, @Res() res: Response) {
    try {
      const orderDocs = await this.orderDocsService.deleteOrderDocs(id);

      if (!orderDocs) {
        throw new NotFoundException('Order Document can not be found !');
      }

      return res
        .status(HttpStatus.OK)
        .json({ message: 'Successfully Deleted !' });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }
}
