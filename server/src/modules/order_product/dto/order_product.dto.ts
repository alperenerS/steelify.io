import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class OrderProductDto {
  @IsNotEmpty()
  @IsNumber()
  readonly order_id: number;
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsNumber()
  readonly quantity: number;
  @IsNotEmpty()
  @IsNumber()
  readonly hs_code: number;
  @IsNotEmpty()
  @IsString()
  readonly purpose_of_use: string;
}
