import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ValidateEmail } from 'src/modules/utils/emailLowercase';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  @ValidateEmail()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}