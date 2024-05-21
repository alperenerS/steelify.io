import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { UserService } from './user.service';
import { Request, Response } from 'express';
import { UserDto } from './dto/user.dto';

@UseGuards(JwtGuard)
@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Put('updateData')
  async updateOwnData(
    @Body() user: UserDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const token = req.headers.authorization.split(' ')[1];
    const response = await this.userService.updateOwnData(user, token);

    return res
      .status(HttpStatus.OK)
      .json({ message: 'Successfully created !', data: response });
  }

  @Get('profile/:id')
  async getUserProfile(
    @Param('id') id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const user = await this.userService.getUserProfile(id);

    if (!user) {
      throw new NotFoundException('User can not be found !');
    }

    return res
      .status(HttpStatus.OK)
      .json({ message: 'User Successfully Fetched !', data: user });
  }
}
