import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class OrderProductDocsDto {
  @IsNotEmpty()
  @IsNumber()
  readonly order_product_id: number;
  @IsNotEmpty()
  @IsString()
  readonly drawing_name: string;
  @IsNotEmpty()
  @IsString()
  readonly drawing_link: string;
}
