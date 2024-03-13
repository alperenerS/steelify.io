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
  Res,
  UseGuards,
} from '@nestjs/common';
import { OrderDocumentService } from './order_document.service';
import { Response } from 'express';
import { OrderDocsDto } from './dto/order_document.dto';
import { JwtGuard } from '../auth/guard/jwt.guard';

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
  async createOrderDocs(@Body() orderDocs: OrderDocsDto, @Res() res: Response) {
    try {
      const orderDocument =
        await this.orderDocsService.createOrderDocs(orderDocs);

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
