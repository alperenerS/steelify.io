import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty()
  @IsNumber()
  readonly orderId: number;

  @IsNotEmpty()
  @IsString()
  readonly sender: string;

  @IsNotEmpty()
  @IsString()
  readonly receiver: string;

  @IsNotEmpty()
  @IsString()
  readonly content: string;
}
