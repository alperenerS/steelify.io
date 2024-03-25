import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class OrderDocsDto {
  @IsNumber()
  @IsNotEmpty()
  readonly order_id: number;
  @IsString()
  @IsNotEmpty()
  readonly filename: string[];
  @IsString()
  @IsNotEmpty()
  readonly file_link: string[];
}
