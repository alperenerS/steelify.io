import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { OrderDocument } from '../order_document/order_document.entity';
import { User } from '../user/user.entity';

@Table
export class Order extends Model<Order> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  customer: string;

  @Column({
    type: DataType.STRING,
  })
  incoterm: string;

  @Column({
    type: DataType.STRING,
  })
  paymentterm: string;

  @Column({
    type: DataType.STRING,
  })
  incoterm_description: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  quotation_note: string;

  @Column({
    type: DataType.DATE,
  })
  delivery_date: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;
  @Column({
    type: DataType.STRING,
  })
  reference: string;
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;
  @BelongsTo(() => User)
  user: User;

  @HasMany(() => OrderDocument)
  orderDocument: OrderDocument[];
}
