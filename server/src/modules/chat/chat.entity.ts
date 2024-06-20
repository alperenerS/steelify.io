import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Order } from '../order/order.entity';

@Table
export class Message extends Model<Message> {
  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  orderId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  sender: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  receiver: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content: string;
}
