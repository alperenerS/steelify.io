import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Order } from "../order/order.entity";

@Table
export class OrderProduct extends Model<OrderProduct> {

    @ForeignKey(()=> Order)
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    order_id:number
    @BelongsTo(() => Order)
    order:Order

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    name:string

    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    quantity:number

    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    hs_code:number

}