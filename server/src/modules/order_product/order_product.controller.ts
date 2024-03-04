import {
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
} from '@nestjs/common';
import { OrderProductService } from './order_product.service';
import { Response } from 'express';
import { OrderProductDto } from './dto/order_product.dto';

@Controller('order-product')
export class OrderProductController {
  constructor(private readonly orderProductService: OrderProductService) {}

  @Get()
  async getOrderProducts(@Res() res: Response) {
    const result = await this.orderProductService.getOrderProducts();
    return res
      .status(HttpStatus.ACCEPTED)
      .json({ message: 'Successfully Fetched !', result: result });
  }

  @Get(':id')
  async getOrderProductById(@Param('id') id: number, @Res() res: Response) {
    const result = await this.orderProductService.getOrderProductsById(id);

    if (!result) {
      throw new NotFoundException('Order Product can not be found !');
    }

    return res.status(HttpStatus.ACCEPTED).json({ result: result });
  }

  @Post('create')
  async createOrderProduct(
    @Body() orderProductDto: OrderProductDto,
    @Res() res: Response,
  ) {
    const newOrderProduct =
      await this.orderProductService.createOrderProduct(orderProductDto);

    return res.status(HttpStatus.CREATED).json({
      message: 'Order Product Created !',
      OrderProduct: newOrderProduct,
    });
  }

  @Put('update/:id')
  async updateOrderProduct(
    @Body() orderProductDto: OrderProductDto,
    @Param('id') id: number,
    @Res() res: Response,
  ) {
    const updatedOrderProductCheck =
      await this.orderProductService.getOrderProductsById(id);
    if (!updatedOrderProductCheck) {
      throw new NotFoundException('Order Product can not be found !');
    }
    const updatedOrderProduct =
      await this.orderProductService.updateOrderProduct(orderProductDto, id);

    return res.status(HttpStatus.ACCEPTED).json({
      message: 'successfully updated !',
      updatedProduct: updatedOrderProduct,
    });
  }

  @Delete('delete/:id')
  async deleteOrderProduct(@Param('id') id: number, @Res() res: Response) {
    const orderProductExist =
      await this.orderProductService.getOrderProductsById(id);

    if (!orderProductExist) {
      throw new NotFoundException('Order Product can not be found !');
    }
    const deleteOrderProduct =
      await this.orderProductService.deleteOrderProduct(id);

    return res
      .status(HttpStatus.ACCEPTED)
      .json({
        message: 'Successfully Deleted !',
        deleteProduct: deleteOrderProduct,
      });
  }
}
