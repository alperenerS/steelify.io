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
  UseGuards,
} from '@nestjs/common';
import { OrderProductService } from './order_product.service';
import { Response } from 'express';
import { OrderProductDto } from './dto/order_product.dto';
import { JwtGuard } from '../auth/guard/jwt.guard';
@UseGuards(JwtGuard)
@Controller('api/order-product')
export class OrderProductController {
  constructor(private readonly orderProductService: OrderProductService) {}

  @Get()
  async getOrderProducts(@Res() res: Response) {
    const result = await this.orderProductService.getOrderProducts();
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Successfully Fetched !', data: result });
  }

  @Get(':id')
  async getOrderProductById(@Param('id') id: number, @Res() res: Response) {
    const result = await this.orderProductService.getOrderProductsById(id);

    if (!result) {
      throw new NotFoundException('Order Product can not be found !');
    }

    return res.status(HttpStatus.OK).json({ data: result });
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
      data: newOrderProduct,
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

    return res.status(HttpStatus.OK).json({
      message: 'successfully updated !',
      data: updatedOrderProduct,
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
      .status(HttpStatus.OK)
      .json({
        message: 'Successfully Deleted !',
        data: deleteOrderProduct,
      });
  }
}
