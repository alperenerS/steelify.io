import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { OrderProduct } from '../order_product/order_product.entity';

@Table
export class OrderProductDocs extends Model<OrderProductDocs> {
  @ForeignKey(() => OrderProduct)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  order_product_id: number;
  @BelongsTo(() => OrderProduct)
  order_product: OrderProduct;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  drawing_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  drawing_link: string;
}
