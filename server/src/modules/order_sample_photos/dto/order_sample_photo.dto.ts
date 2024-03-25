import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class OrderSamplePhotoDto {
  @IsNotEmpty()
  @IsNumber()
  readonly order_id: number;
  @IsNotEmpty()
  @IsString()
  readonly filename: string[];
  @IsNotEmpty()
  @IsString()
  readonly filelink: string[];
}
