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
export class OrderDocument extends Model<OrderDocument> {
  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  order_id: number;
  @BelongsTo(() => Order)
  order: Order;

  @Column({
    type:DataType.JSON,
    allowNull:false
  })
  filename:string[]

  @Column({
    type:DataType.JSON,
    allowNull:false
  })
  file_link:string[]
}
