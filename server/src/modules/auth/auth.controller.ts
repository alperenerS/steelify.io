import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { UserDto } from '../user/dto/user.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @Post("register")
    async register(@Body() user:UserDto){
        return await this.authService.register(user);
    }

    @Post("login")
    async login(@Body() authDto:AuthDto,@Res() res: Response){
        const response = await this.authService.login(authDto);

        return res.status(200).json({message:"User Successfully Logged In !",response:response})
    }
}
