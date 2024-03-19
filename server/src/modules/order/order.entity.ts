import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { OrderDocument } from "../order_document/order_document.entity";

@Table
export class Order extends Model<Order> {
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    name:string

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    customer:string

    @Column({
        type:DataType.STRING,
    })
    incoterm:string

    @Column({
        type:DataType.STRING,
    })
    paymentterm:string

    @Column({
        type:DataType.STRING,
    })
    incoterm_description:string

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    quotation_note:string

    @Column({
        type:DataType.DATE,
    })
    delivery_date:Date

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    status:string
    @Column({
        type:DataType.STRING,
    })
    reference:string

    @HasMany(() => OrderDocument)
    orderDocument:OrderDocument[]
}