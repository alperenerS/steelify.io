import {
  Body,
  Controller,
  Delete,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';
import { Request, Response } from 'express';
@UseGuards(JwtGuard)
@Controller('api/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('createOrder')
  async createOrder(
    @Body() order: OrderDto,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const {
      customer,
      delivery_date,
      incoterm,
      incoterm_description,
      paymentterm,
      quotation_note,
      status,
      reference,
    } = req.body;
    try {
      const existingOrdersCount = await this.orderService.countOrders();

      const newOrderNumber = existingOrdersCount + 1;
      const formattedOrderNumber = newOrderNumber.toString().padStart(5, '0'); // Numarayı 5 haneli olacak şekilde formatlayın

      const newOrderName = `ST-${formattedOrderNumber}`;

      const orderDto: OrderDto = {
        name: newOrderName,
        customer: customer,
        delivery_date: delivery_date,
        incoterm: incoterm,
        incoterm_description: incoterm_description,
        paymentterm: paymentterm,
        quotation_note: quotation_note,
        status: status,
        reference: reference,
      };
      const newOrder = await this.orderService.createOrder(orderDto);

      return res
        .status(HttpStatus.CREATED)
        .json({ message: 'Successfully Created !', data: newOrder });
    } catch (error) {
      // Hata durumunda uygun şekilde işleyin
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Failed to create order.', error: error.message });
    }
  }

  @Put('updateOrder/:id')
  async updateOrder(
    @Body() order: OrderDto,
    @Param('id') id: number,
    @Res() res: Response,
  ) {
    const updatedOrder = await this.orderService.updateOrder(order, id);

    return res
      .status(HttpStatus.OK)
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
        .status(HttpStatus.OK)
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
      .status(HttpStatus.OK)
      .json({ message: 'Order Successfully Deleted !' });
  }
}
