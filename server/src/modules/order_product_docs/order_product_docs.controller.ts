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
  UseGuards,
} from '@nestjs/common';
import { OrderProductDocsService } from './order_product_docs.service';
import { Response } from 'express';
import { OrderProductDocsDto } from './dto/order_product_docs.dto';
import { JwtGuard } from '../auth/guard/jwt.guard';
@UseGuards(JwtGuard)
@Controller('api/order-productDocs')
export class OrderProductDocsController {
  constructor(
    private readonly orderProductDocsService: OrderProductDocsService,
  ) {}

  @Get()
  async getOrderProductDocs(@Res() res: Response) {
    const result = await this.orderProductDocsService.getOrderProductDocs();

    if (!result) {
      throw new NotFoundException('Order product documents can not be found !');
    }

    return res
      .status(HttpStatus.OK)
      .json({ message: 'Successfully fetched !', result: result });
  }

  @Get(':id')
  async getOrderProductDocsById(@Param('id') id: number, @Res() res: Response) {
    const result =
      await this.orderProductDocsService.getOrderProductDocsById(id);

    if (!result) {
      throw new NotFoundException('Order Product Documents can not be found !');
    }

    return res
      .status(HttpStatus.OK)
      .json({ message: 'Successfully Fetched !', result: result });
  }

  @Post('create')
  async createOrderProductDocs(
    @Body() orderProductDocsDto: OrderProductDocsDto,
    @Res() res: Response,
  ) {
    const newOrderProductDocs =
      await this.orderProductDocsService.createOrderProductDocs(
        orderProductDocsDto,
      );

    return res
      .status(HttpStatus.CREATED)
      .json({ message: 'Successfully Created !', result: newOrderProductDocs });
  }

  @Delete('delete/:id')
  async deleteOrderProductDocs(@Param('id') id: number, @Res() res: Response) {
    const selectedOrderProductDoc =
      await this.orderProductDocsService.getOrderProductDocsById(id);

    if (!selectedOrderProductDoc) {
      throw new NotFoundException(
        `Order Product Docs can not be found with this id ${id}`,
      );
    }

    const result =
      await this.orderProductDocsService.deleteOrderProductDocs(id);

    return res
      .status(HttpStatus.OK)
      .json({ message: 'Successfully Deleted !', result: result });
  }
}
