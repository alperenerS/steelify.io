import {
  Body,
  Controller,
  Delete,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';
import { Response } from 'express';
@UseGuards(JwtGuard)
@Controller('api/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('createOrder')
  async createOrder(@Body() order: OrderDto, @Res() res: Response) {
    const newOrder = await this.orderService.createOrder(order);

    return res
      .status(HttpStatus.CREATED)
      .json({ message: 'Successfully Created !', data: newOrder });
  }

  @Put('updateOrder/:id')
  async updateOrder(
    @Body() order: OrderDto,
    @Param('id') id: number,
    @Res() res: Response,
  ) {
    const updatedOrder = await this.orderService.updateOrder(order, id);

    return res
      .status(HttpStatus.ACCEPTED)
      .json({ message: 'Successfully updated !', data: updatedOrder });
  }

  @Put('updateStatus/:id')
  async updateOrderStatus(
    @Param('id') id: number,
    @Body('status') status: string, // status parametresini body'den alıyoruz
    @Res() res: Response,
  ) {
    try {
      const updatedStatus = await this.orderService.updateOrderStatus(
        status,
        id,
      );
  
      return res
        .status(HttpStatus.ACCEPTED)
        .json({ message: 'Status Updated !', data: updatedStatus });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
 
  @Delete('deleteOrder/:id')
  async deleteOrder(@Param('id') id: number, @Res() res: Response) {
    await this.orderService.deleteOrder(id);
    return res
      .status(HttpStatus.ACCEPTED)
      .json({ message: 'Order Successfully Deleted !' });
  }
}
