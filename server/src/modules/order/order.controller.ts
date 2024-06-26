import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';
import { Request, Response } from 'express';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { QuoteDto } from './dto/quote.dto';
import { uploadFile } from '../utils/upload_azure';

@UseGuards(JwtGuard)
@Controller('api/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async getOrders(@Res() res: Response) {
    const orders = await this.orderService.getOrders();
    if (orders.length === 0) {
      throw new NotFoundException('There is no orders !');
    }
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Successfully Fetched !', data: orders });
  }

  @Get('byOrderId/:id')
  async getOrderById(@Param('id') id: number, @Res() res: Response) {
    const order = await this.orderService.getOrderById(id);
    if (!order) {
      throw new NotFoundException('Order can not be found !');
    }
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Order Successfully Fetched !', data: order });
  }

  @Get('customerName')
  async getOrderByCustomer(
    @Query('customer') customer: string,
    @Res() res: Response,
  ) {
    const selectedOrder = await this.orderService.getOrdersByCustomer(customer);
    if (!selectedOrder) {
      throw new NotFoundException('Order can not be found !');
    }
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Order Successfully fetched !', data: selectedOrder });
  }

  @Get('userId/:id')
  async getOrderByUserId(
    @Param('id') id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const order = await this.orderService.getOrderByUserId(id);

    if (!order) {
      throw new NotFoundException('User can not be found !');
    }

    return res
      .status(HttpStatus.OK)
      .json({ message: 'Order Successfully Fetched !', data: order });
  }

  @Post('createOrder')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'orderDocs', maxCount: 25 },
      { name: 'samplePhotos', maxCount: 25 },
    ]),
  )
  async createOrder(
    @UploadedFiles()
    files: {
      orderDocs?: Express.Multer.File[];
      samplePhotos?: Express.Multer.File[];
    },
    @Body() quoteDto: QuoteDto,
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
      user_id,
    } = req.body;

    try {
      const existingOrdersCount = await this.orderService.countOrders();
      const newOrderNumber = existingOrdersCount + 1;
      const formattedOrderNumber = newOrderNumber.toString().padStart(5, '0');
      const newOrderName = `ST-${formattedOrderNumber}`;

      if (!files || files.orderDocs.length === 0) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ message: 'Order documents are required' });
      }

      const orderDocsOriginalName = files.orderDocs.map(
        (file) => file.originalname,
      );

      let samplePhotosOriginalName = [];
      if (files.samplePhotos && files.samplePhotos.length > 0) {
        samplePhotosOriginalName = files.samplePhotos.map(
          (file) => file.originalname,
        );
      }

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
        user_id: user_id,
      };

      const newOrder = await this.orderService.createOrder(orderDto);

      const orderDocsFiles = await Promise.all(
        files.orderDocs.map(async (file) => {
          const azureUrl = await uploadFile(
            file.buffer,
            `${orderDto.name}/OrderDocuments/${file.originalname}`,
          );
          return azureUrl;
        }),
      );

      let samplePhotosFiles = [];
      if (files.samplePhotos && files.samplePhotos.length > 0) {
        samplePhotosFiles = await Promise.all(
          files.samplePhotos.map(async (file) => {
            const azureUrl = await uploadFile(
              file.buffer,
              `${orderDto.name}/SamplePhotos/${file.originalname}`,
            );
            return azureUrl;
          }),
        );
      }

      const orderDocsDto: any = {
        order_id: newOrder.id,
        filename: orderDocsOriginalName,
        file_link: orderDocsFiles,
      };

      const orderDocs = await this.orderService.createOrderDocs(orderDocsDto);

      let samplePhotos = null;
      if (samplePhotosFiles.length > 0) {
        const samplePhotosDto = {
          order_id: newOrder.id,
          filename: samplePhotosOriginalName,
          filelink: samplePhotosFiles,
        };
        samplePhotos = await this.orderService.createPhoto(samplePhotosDto);
      }

      return res.status(HttpStatus.CREATED).json({
        message: 'Successfully Created !',
        data: newOrder,
        photos: samplePhotos,
        orderDocs: orderDocs,
      });
    } catch (error) {
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
    @Body('status') status: string,
    @Res() res: Response,
  ) {
    const updatedStatus = await this.orderService.updateOrderStatus(status, id);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Status Updated !', data: updatedStatus });
  }

  @Delete('deleteOrder/:id')
  async deleteOrder(@Param('id') id: number, @Res() res: Response) {
    const samplePhotos = await this.orderService.getPhotosByOrderId(id);
    const orderDocs = await this.orderService.getOrderDocsByOrderId(id);
    const address = await this.orderService.getAddressByOrderId(id);

    if (!samplePhotos || !orderDocs || !address) {
      throw new BadRequestException('Something Went Wrong !');
    }

    await this.orderService.deleteSamplePhotosByOrderId(id);
    await this.orderService.deleteOrderDocsByOrderId(id);
    await this.orderService.deleteAddressByOrderId(id);
    await this.orderService.deleteOrder(id);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Order Successfully Deleted !' });
  }
}
