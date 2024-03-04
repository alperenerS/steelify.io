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
export class OrderProductDocs extends Model<OrderProductDocs> {
  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  order_product_id: number;
  @BelongsTo(() => Order)
  order: Order;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  drawing_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  drawing_nlink: string;
}
