import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Address } from '../address/address.entity';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  password: string;

  @Column({
    type:DataType.STRING,
  })
  userType:string;

  @Column({
    type:DataType.STRING,
  })
  website:string;

  @Column({
    type:DataType.STRING,
    allowNull:false
  })
  name:string;

  @Column({
    type:DataType.STRING,
    allowNull:false
  })
  surname:string;

  @HasMany(() => Address)
  address:Address[]
}
