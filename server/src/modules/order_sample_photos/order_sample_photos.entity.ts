import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Order } from '../order/order.entity';

@Table
export class OrderSamplePhotos extends Model<OrderSamplePhotos> {
  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  order_id: number;
  @BelongsTo(() => Order)
  order: Order;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  filename: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  filelink: string;
}
