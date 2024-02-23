import { Column, DataType, Model, Table } from "sequelize-typescript";

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
        allowNull:false
    })
    incoterm:string

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    paymentterm:string

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    incoterm_description:string

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    quotation_note:string

    @Column({
        type:DataType.DATE,
        allowNull:false
    })
    delivery_date:Date

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    status:string
}