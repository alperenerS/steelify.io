import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AddressDto {
    @IsNumber()
    @IsNotEmpty()
    readonly user_id: number;
    @IsNumber()
    @IsNotEmpty()
    readonly order_id: number;
    @IsString()
    @IsNotEmpty()
    readonly address_type: string;
    @IsString()
    @IsNotEmpty()   
    readonly first_row: string;
    @IsString()
    readonly second_row: string;
    @IsString()
    @IsNotEmpty()
    readonly city: string;
    @IsString()
    @IsNotEmpty()
    readonly country: string;
    @IsNotEmpty()
    @IsString()
    readonly zip: string;
  }